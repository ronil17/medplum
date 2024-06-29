import postgres from 'postgres';
import { MedplumDatabaseConfig, MedplumServerConfig } from './config';
import { globalLogger } from './logger';
import * as migrations from './migrations/schema';

export enum DatabaseMode {
  READER = 'reader',
  WRITER = 'writer',
}

let psql: postgres.Sql | undefined;
let readonlyPsql: postgres.Sql | undefined;

export function getDatabasePool(mode: DatabaseMode): postgres.Sql {
  if (!psql) {
    throw new Error('Database not setup');
  }

  if (mode === DatabaseMode.READER && readonlyPsql) {
    return readonlyPsql;
  }

  return psql;
}

export const locks = {
  migration: 1,
};

export async function initDatabase(serverConfig: MedplumServerConfig): Promise<void> {
  psql = await initPool(serverConfig.database, serverConfig.databaseProxyEndpoint);

  if (serverConfig.database.runMigrations !== false) {
    await runMigrations(psql);
  }

  if (serverConfig.readonlyDatabase) {
    readonlyPsql = await initPool(serverConfig.readonlyDatabase, serverConfig.readonlyDatabaseProxyEndpoint);
  }
}

async function initPool(config: MedplumDatabaseConfig, proxyEndpoint: string | undefined): Promise<postgres.Sql> {
  const poolConfig = {
    host: config.host,
    port: config.port,
    database: config.dbname,
    user: config.username,
    password: config.password,
    ssl: config.ssl,
    max: config.maxConnections ?? 100,
    idle_timeout: 120,
    connection: {
      statement_timeout: config.queryTimeout ?? 60000,
      default_transaction_isolation: 'repeatable read' as const,
    },
  };

  if (proxyEndpoint) {
    poolConfig.host = proxyEndpoint;
    poolConfig.ssl = poolConfig.ssl ?? {};
    poolConfig.ssl.require = true;
  }

  return postgres(poolConfig);
}

export async function closeDatabase(): Promise<void> {
  if (psql) {
    await psql.end();
    psql = undefined;
  }

  if (readonlyPsql) {
    await readonlyPsql.end();
    readonlyPsql = undefined;
  }
}

async function runMigrations(psql: postgres.Sql): Promise<void> {
  let reserved: postgres.ReservedSql | undefined = undefined;
  try {
    reserved = await psql.reserve();
    await reserved.unsafe('SELECT pg_advisory_lock($1)', [locks.migration]);
    await reserved.unsafe(`SET statement_timeout TO 0`); // Disable timeout for migrations AFTER getting lock
    await migrate(reserved);
  } catch (err: any) {
    globalLogger.error('Database schema migration error', err);
    if (reserved) {
      await reserved.unsafe('SELECT pg_advisory_unlock($1)', [locks.migration]);
      reserved.release();
      reserved = undefined;
    }
  } finally {
    if (reserved) {
      await psql.unsafe('SELECT pg_advisory_unlock($1)', [locks.migration]);
      reserved.release();
    }
  }
}

async function migrate(psql: postgres.Sql): Promise<void> {
  await psql.unsafe(`CREATE TABLE IF NOT EXISTS "DatabaseMigration" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "version" INTEGER NOT NULL,
    "dataVersion" INTEGER NOT NULL
  )`);

  const result = await psql.unsafe<{ version: number }[]>('SELECT "version" FROM "DatabaseMigration"');
  const version = result?.[0]?.version ?? -1;

  if (version < 0) {
    await psql.unsafe('INSERT INTO "DatabaseMigration" ("id", "version", "dataVersion") VALUES (1, 0, 0)');
  }

  const migrationKeys = Object.keys(migrations);
  for (let i = version + 1; i <= migrationKeys.length; i++) {
    const migration = (migrations as Record<string, migrations.Migration>)['v' + i];
    if (migration) {
      const start = Date.now();
      // await migration.run(client);
      globalLogger.info('Database schema migration', { version: `v${i}`, duration: `${Date.now() - start} ms` });
      await psql.unsafe('UPDATE "DatabaseMigration" SET "version"=$1', [i]);
    }
  }
}
