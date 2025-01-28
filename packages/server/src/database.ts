import { badRequest, created, OperationOutcomeError, parseSearchRequest, sleep } from '@medplum/core';
import { AsyncJob } from '@medplum/fhirtypes';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Pool, PoolClient } from 'pg';
import * as semver from 'semver';
import { getConfig, MedplumDatabaseConfig, MedplumServerConfig } from './config';
import { getSystemRepo } from './fhir/repo';
import { globalLogger } from './logger';
import * as dataMigrations from './migrations/data';
import * as migrations from './migrations/schema';
import { getServerVersion } from './util/version';

export enum DatabaseMode {
  READER = 'reader',
  WRITER = 'writer',
}

const DataVersion = {
  UNKNOWN: -1,
  NONE: 0,
} as const;

let pool: Pool | undefined;
let readonlyPool: Pool | undefined;

export async function getDataVersion(): Promise<number> {
  const result = await getDatabasePool(DatabaseMode.WRITER).query<{ dataVersion?: number }>(
    'SELECT "dataVersion" FROM "DatabaseMigration";'
  );
  return result.rows[0]?.dataVersion ?? DataVersion.UNKNOWN;
}

export async function getPendingDataMigration(): Promise<number> {
  const dataVersion = await getDataVersion();
  if (dataVersion === DataVersion.UNKNOWN) {
    return dataVersion;
  }
  const allDataVersions = getMigrationVersions(dataMigrations);
  if (allDataVersions.includes(dataVersion + 1)) {
    return dataVersion + 1;
  }
  return DataVersion.NONE;
}

export async function markPendingDataMigrationCompleted(job: AsyncJob): Promise<void> {
  assert(job.dataVersion);
  await getDatabasePool(DatabaseMode.WRITER).query('UPDATE "DatabaseMigration" SET "dataVersion" = $1', [
    job.dataVersion,
  ]);
}

export function getDatabasePool(mode: DatabaseMode): Pool {
  if (!pool) {
    throw new Error('Database not setup');
  }

  if (mode === DatabaseMode.READER && readonlyPool) {
    return readonlyPool;
  }

  return pool;
}

export const locks = {
  migration: 1,
};

export async function initDatabase(serverConfig: MedplumServerConfig): Promise<void> {
  pool = await initPool(serverConfig.database, serverConfig.databaseProxyEndpoint);

  if (serverConfig.database.runMigrations !== false) {
    await runMigrations(pool);
  }

  if (serverConfig.readonlyDatabase) {
    readonlyPool = await initPool(serverConfig.readonlyDatabase, serverConfig.readonlyDatabaseProxyEndpoint);
  }
}

async function initPool(config: MedplumDatabaseConfig, proxyEndpoint: string | undefined): Promise<Pool> {
  const poolConfig = {
    host: config.host,
    port: config.port,
    database: config.dbname,
    user: config.username,
    password: config.password,
    application_name: 'medplum-server',
    ssl: config.ssl,
    max: config.maxConnections ?? 100,
  };

  if (proxyEndpoint) {
    poolConfig.host = proxyEndpoint;
    poolConfig.ssl = poolConfig.ssl ?? {};
    poolConfig.ssl.require = true;
  }

  const pool = new Pool(poolConfig);

  pool.on('error', (err) => {
    globalLogger.error('Database connection error', err);
  });

  if (!config.disableConnectionConfiguration) {
    pool.on('connect', (client) => {
      client.query(`SET statement_timeout TO ${config.queryTimeout ?? 60000}`).catch((err) => {
        globalLogger.warn('Failed to set query timeout', err);
      });
      client.query(`SET default_transaction_isolation TO 'REPEATABLE READ'`).catch((err) => {
        globalLogger.warn('Failed to set default transaction isolation', err);
      });
    });
  }

  return pool;
}

export async function closeDatabase(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = undefined;
  }

  if (readonlyPool) {
    await readonlyPool.end();
    readonlyPool = undefined;
  }
}

async function runMigrations(pool: Pool): Promise<void> {
  const client = await pool.connect();
  let hasLock = false;
  try {
    hasLock = await acquireAdvisoryLock(client, locks.migration);
    if (!hasLock) {
      throw new Error('Failed to acquire migration lock');
    }
    await client.query(`SET statement_timeout TO 0`); // Disable timeout for migrations AFTER getting lock
    await migrate(client);
  } catch (err: any) {
    globalLogger.error('Database schema migration error', err);
    throw err;
  } finally {
    if (hasLock) {
      await releaseAdvisoryLock(client, locks.migration);
    }
    client.release(true); // Ensure migration connection is torn down and not re-used
  }
}

type AcquireAdvisoryLockOptions = {
  maxAttempts?: number;
  retryDelayMs?: number;
};

export async function acquireAdvisoryLock(
  client: PoolClient,
  lockId: number,
  options?: AcquireAdvisoryLockOptions
): Promise<boolean> {
  const retryDelayMs = options?.retryDelayMs ?? 2000;
  const maxAttempts = options?.maxAttempts ?? 30;
  let attempts = 0;
  while (attempts < maxAttempts) {
    attempts++;
    const result = await client.query<{ pg_try_advisory_lock: boolean }>('SELECT pg_try_advisory_lock($1)', [lockId]);
    if (result.rows[0].pg_try_advisory_lock) {
      return true;
    }
    if (attempts < maxAttempts) {
      await sleep(retryDelayMs);
    }
  }

  return false;
}

export async function releaseAdvisoryLock(client: PoolClient, lockId: number): Promise<void> {
  await client.query('SELECT pg_advisory_unlock($1)', [lockId]);
}

async function migrate(client: PoolClient): Promise<void> {
  await client.query(`CREATE TABLE IF NOT EXISTS "DatabaseMigration" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "version" INTEGER NOT NULL,
    "dataVersion" INTEGER NOT NULL
  )`);

  // This generic type is not technically correct, but leads to the desired forced checks for undefined `version` and `dataVersion`
  // Technically pg should infer that rows could have zero length, but adding optionality to all fields forces handling the undefined case when the row is empty
  const result = await client.query<{ version?: number; dataVersion?: number }>(
    'SELECT "version" FROM "DatabaseMigration"'
  );
  let version = result.rows[0]?.version ?? DataVersion.UNKNOWN;
  const allDataVersions = getMigrationVersions(dataMigrations);

  const pendingDataMigration = await getPendingDataMigration();
  // If this is the first time the server has been started up (version < 0)
  // We need to initialize our migrations table
  // This also opts us into the fast path for data migrations, so we can skip all checks for server version and go straight to the latest data version
  if (version < 0) {
    const latestDataVersion = allDataVersions[allDataVersions.length - 1] ?? 0;
    await client.query(`INSERT INTO "DatabaseMigration" ("id", "version", "dataVersion") VALUES (1, 0, $1)`, [
      latestDataVersion,
    ]);
    version = 0;
  } else if (pendingDataMigration > 0) {
    // Before migrating, check if we have pending data migrations to apply
    // We have to check these first since they depend on particular versions of the server code to be present in order
    // To ensure that the migration is applied before at a particular point in time before the version that requires it
    const manifest = JSON.parse(
      readFileSync(resolve(__dirname, 'migrations/data/data-version-manifest.json'), { encoding: 'utf-8' })
    ) as Record<string, { serverVersion: string }>;
    const requiredServerVersion = manifest['v' + pendingDataMigration].serverVersion;

    const serverVersion = getServerVersion();

    // TODO(ThatOneBro 16 Dec 2024): Make this version strict after v4 (exact version only)
    // ----  We made this requirement looser so that self-hosters can run first migration on any version within the minor version before v4

    // We allow any version where the data migration is present and it less than the required version
    // To run the migration, as we can assume that after the data migration is added, any version between the migration being present
    // And the minor release that it is supposed to be run in will have the capacity to safely run the migration
    if (!semver.satisfies(serverVersion, `<${semver.inc(requiredServerVersion, 'minor')}`)) {
      throw new Error(
        `Unable to run data migration against the current server version. Migration requires server at version ${requiredServerVersion}, but current server version is ${serverVersion}`
      );
    }

    globalLogger.info('Data migration ready to run', { dataVersion: pendingDataMigration });
    // If we make it here, we have a pending migration, but we don't want to apply it until we make sure we apply all the schema migrations first
  }

  const migrationKeys = Object.keys(migrations);
  for (let i = version + 1; i <= migrationKeys.length; i++) {
    const migration = (migrations as Record<string, migrations.Migration>)['v' + i];
    if (migration) {
      const start = Date.now();
      await migration.run(client);
      globalLogger.info('Database schema migration', { version: `v${i}`, duration: `${Date.now() - start} ms` });
      await client.query('UPDATE "DatabaseMigration" SET "version"=$1', [i]);
    }
  }
}

function getMigrationVersions(migrationModule: Record<string, any>): number[] {
  const prefixedVersions = Object.keys(migrationModule).filter((key) => key.startsWith('v'));
  const migrationVersions = prefixedVersions.map((key) => Number.parseInt(key.slice(1), 10)).sort((a, b) => a - b);
  return migrationVersions;
}

/**
 * Attempts to run current outstanding data migration.
 *
 * If pending data migrations were no assessed due to `config.runMigrations` being false,
 * this function will throw.
 *
 * @param assertedDataVersion - The asserted data version that we expect to run.
 * @returns An `AsyncJob` if migration is started or already running, otherwise returns `undefined` if no migration to run.
 */
export async function maybeStartDataMigration(assertedDataVersion?: number): Promise<AsyncJob | undefined> {
  // If schema migrations didn't run, we should not attempt to run data migrations
  if (getConfig().database.runMigrations === false) {
    throw new OperationOutcomeError(badRequest('Cannot run data migration; schema migrations did not run'));
  }

  const dataVersion = await getDataVersion();
  const pendingDataMigration = await getPendingDataMigration();

  // This should never happen unless there is something wrong with the state of the database but technically possible
  if (pendingDataMigration === DataVersion.UNKNOWN) {
    throw new OperationOutcomeError(badRequest('Cannot run data migration; data version is unknown'));
  }

  // If a version has been asserted, check if we have that version pending
  // Or if we have already applied it
  if (assertedDataVersion) {
    // We have already applied this data version, there is no migration to run
    if (assertedDataVersion <= dataVersion) {
      return undefined;
    }
    // The data version is higher than the version we expect to apply next, we cannot apply this migration
    // This is also true when pending migration is NONE
    if (assertedDataVersion > pendingDataMigration) {
      throw new OperationOutcomeError(
        badRequest(
          `Data migration assertion failed. Expected pending migration to be migration ${assertedDataVersion}, server has ${pendingDataMigration > 0 ? `current pending data migration ${pendingDataMigration}` : 'no pending data migration'}`
        )
      );
    }
  } else if (pendingDataMigration === DataVersion.NONE) {
    // If there is no asserted version, and no pending migration to run, then we can no-op
    return undefined;
  }

  const systemRepo = getSystemRepo();
  // Check if there is already a migration job in progress
  // If there isn't, create a new one
  const { resource: dataMigrationJob, outcome } = await systemRepo.conditionalCreate<AsyncJob>(
    {
      resourceType: 'AsyncJob',
      type: 'data-migration',
      status: 'accepted',
      request: `data-migration-v${pendingDataMigration}`,
      requestTime: new Date().toISOString(),
      dataVersion: pendingDataMigration,
      // We know that because we were able to start the migration on this server instance,
      // That we must be on the right version to run this migration
      minServerVersion: getServerVersion(),
    },
    parseSearchRequest('AsyncJob', { status: 'accepted', type: 'data-migration' })
  );
  // If the job was just created, then run the pending migration
  if (outcome === created) {
    const dataMigration = (dataMigrations as Record<string, dataMigrations.Migration>)['v' + pendingDataMigration];
    // Don't await the migration, since it could be blocking
    dataMigration
      .run(systemRepo, dataMigrationJob)
      .catch((err) => globalLogger.error('Error while running data migration', { err }));
  }
  return dataMigrationJob;
}
