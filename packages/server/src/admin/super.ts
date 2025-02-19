import {
  accepted,
  allOk,
  badRequest,
  forbidden,
  getResourceTypes,
  OperationOutcomeError,
  parseSearchRequest,
  SearchRequest,
  validateResourceType,
} from '@medplum/core';
import { ResourceType } from '@medplum/fhirtypes';
import { Request, Response, Router } from 'express';
import { body, checkExact, validationResult } from 'express-validator';
import { asyncWrap } from '../async';
import { setPassword } from '../auth/setpassword';
import { getConfig } from '../config/loader';
import { AuthenticatedRequestContext, getAuthenticatedContext } from '../context';
import { DatabaseMode, getDatabasePool } from '../database';
import { AsyncJobExecutor, sendAsyncResponse } from '../fhir/operations/utils/asyncjobexecutor';
import { invalidRequest, sendOutcome } from '../fhir/outcomes';
import { getSystemRepo } from '../fhir/repo';
import { globalLogger } from '../logger';
import * as dataMigrations from '../migrations/data';
import { authenticateRequest } from '../oauth/middleware';
import { getUserByEmail } from '../oauth/utils';
import { rebuildR4SearchParameters } from '../seeds/searchparameters';
import { rebuildR4StructureDefinitions } from '../seeds/structuredefinitions';
import { rebuildR4ValueSets } from '../seeds/valuesets';
import { reloadCronBots, removeBullMQJobByKey } from '../workers/cron';
import { addReindexJob } from '../workers/reindex';

export const OVERRIDABLE_TABLE_SETTINGS = {
  autovacuum_vacuum_scale_factor: 'float',
  autovacuum_analyze_scale_factor: 'float',
  autovacuum_vacuum_threshold: 'int',
  autovacuum_analyze_threshold: 'int',
  autovacuum_vacuum_cost_limit: 'int',
  autovacuum_vacuum_cost_delay: 'float',
} as const satisfies Record<string, 'float' | 'int'>;

export function isValidTableName(tableName: string): boolean {
  return /^[\w_]+$/.test(tableName);
}

export const superAdminRouter = Router();
superAdminRouter.use(authenticateRequest);

// POST to /admin/super/valuesets
// to rebuild the "ValueSetElements" table.
// Run this after changes to how ValueSet elements are defined.
superAdminRouter.post(
  '/valuesets',
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    await sendAsyncResponse(req, res, async () => rebuildR4ValueSets());
  })
);

// POST to /admin/super/structuredefinitions
// to rebuild the "StructureDefinition" table.
// Run this after any changes to the built-in StructureDefinitions.
superAdminRouter.post(
  '/structuredefinitions',
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    await sendAsyncResponse(req, res, () => rebuildR4StructureDefinitions());
  })
);

// POST to /admin/super/searchparameters
// to rebuild the "SearchParameter" table.
// Run this after any changes to the built-in SearchParameters.
superAdminRouter.post(
  '/searchparameters',
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    await sendAsyncResponse(req, res, () => rebuildR4SearchParameters());
  })
);

// POST to /admin/super/reindex
// to reindex a single resource type.
// Run this after major changes to how search columns are constructed.
superAdminRouter.post(
  '/reindex',
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    let resourceTypes: string[];
    if (req.body.resourceType === '*') {
      resourceTypes = getResourceTypes().filter((rt) => rt !== 'Binary');
    } else {
      resourceTypes = (req.body.resourceType as string).split(',').map((t) => t.trim());
      for (const resourceType of resourceTypes) {
        validateResourceType(resourceType);
      }
    }

    let searchFilter: SearchRequest | undefined;
    const filter = req.body.filter as string;
    if (filter) {
      searchFilter = parseSearchRequest((resourceTypes[0] ?? '') + '?' + filter);
    }

    const systemRepo = getSystemRepo();
    const exec = new AsyncJobExecutor(systemRepo);
    await exec.init(`${req.protocol}://${req.get('host') + req.originalUrl}`);
    await exec.run(async (asyncJob) => {
      await addReindexJob(resourceTypes as ResourceType[], asyncJob, searchFilter);
    });

    const { baseUrl } = getConfig();
    sendOutcome(res, accepted(exec.getContentLocation(baseUrl)));
  })
);

// POST to /admin/super/setpassword
// to force set a User password.
superAdminRouter.post(
  '/setpassword',
  [
    body('email').isEmail().withMessage('Valid email address is required'),
    body('password').isLength({ min: 8 }).withMessage('Invalid password, must be at least 8 characters'),
  ],
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      sendOutcome(res, invalidRequest(errors));
      return;
    }

    const user = await getUserByEmail(req.body.email, req.body.projectId);
    if (!user) {
      sendOutcome(res, badRequest('User not found'));
      return;
    }

    await setPassword(user, req.body.password as string);
    sendOutcome(res, allOk);
  })
);

// POST to /admin/super/purge
// to clean up old system generated resources.
superAdminRouter.post(
  '/purge',
  [
    body('resourceType').isIn(['AuditEvent', 'Login']).withMessage('Invalid resource type'),
    body('before').isISO8601().withMessage('Invalid before date'),
  ],
  asyncWrap(async (req: Request, res: Response) => {
    const ctx = requireSuperAdmin();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      sendOutcome(res, invalidRequest(errors));
      return;
    }

    await ctx.repo.purgeResources(req.body.resourceType, req.body.before);
    sendOutcome(res, allOk);
  })
);

// POST to /admin/super/removebotidjobsfromqueue
// to remove bot id jobs from queue.
superAdminRouter.post(
  '/removebotidjobsfromqueue',
  [body('botId').notEmpty().withMessage('Bot ID is required')],
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      sendOutcome(res, invalidRequest(errors));
      return;
    }

    await removeBullMQJobByKey(req.body.botId);

    sendOutcome(res, allOk);
  })
);

// POST to /admin/super/rebuildprojectid
// to rebuild the projectId column on all resource types.
superAdminRouter.post(
  '/rebuildprojectid',
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    await sendAsyncResponse(req, res, async () => {
      const resourceTypes = getResourceTypes();
      for (const resourceType of resourceTypes) {
        await getDatabasePool(DatabaseMode.WRITER).query(
          `UPDATE "${resourceType}" SET "projectId"="compartments"[1] WHERE "compartments" IS NOT NULL AND cardinality("compartments")>0`
        );
      }
    });
  })
);

// POST to /admin/super/migrate
// to run pending data migrations.
// This is intended to replace all of the above endpoints,
// because it will be run automatically by the server upgrade process.
superAdminRouter.post(
  '/migrate',
  asyncWrap(async (req: Request, res: Response) => {
    const ctx = requireSuperAdmin();
    requireAsync(req);

    await sendAsyncResponse(req, res, async () => {
      const systemRepo = getSystemRepo();
      const client = getDatabasePool(DatabaseMode.WRITER);
      const result = await client.query('SELECT "dataVersion" FROM "DatabaseMigration"');
      const version = result.rows[0]?.dataVersion as number;
      const migrationKeys = Object.keys(dataMigrations);
      for (let i = version + 1; i <= migrationKeys.length; i++) {
        const migration = (dataMigrations as Record<string, dataMigrations.Migration>)['v' + i];
        const start = Date.now();
        await migration.run(systemRepo);
        ctx.logger.info('Data migration', { version: `v${i}`, duration: `${Date.now() - start} ms` });
        await client.query('UPDATE "DatabaseMigration" SET "dataVersion"=$1', [i]);
      }
    });
  })
);

// POST to /admin/super/tablesettings
// to set table settings.
superAdminRouter.post(
  '/tablesettings',
  [
    body('tableName')
      .isString()
      .withMessage('Table name must be a string')
      .custom(isValidTableName)
      .withMessage('Table name must be a snake_cased_string'),
    body('settings')
      .isObject()
      .withMessage('Settings must be object mapping valid table settings to desired values')
      .custom((settings) => {
        for (const settingName of Object.keys(settings)) {
          const dataType = OVERRIDABLE_TABLE_SETTINGS[settingName as keyof typeof OVERRIDABLE_TABLE_SETTINGS];
          if (!dataType) {
            throw new Error(`${settingName} is not a valid table setting`);
          }
        }
        return true;
      }),
    ...Object.entries(OVERRIDABLE_TABLE_SETTINGS).map(([settingName, dataType]) => {
      switch (dataType) {
        case 'float':
          return body(`settings.${settingName}`)
            .isFloat()
            .withMessage(`settings.${settingName} must be a float value`)
            .optional();
        case 'int':
          return body(`settings.${settingName}`)
            .isInt()
            .withMessage(`settings.${settingName} must be an integer value`)
            .optional();
        default:
          throw new Error('Unreachable');
      }
    }),
    checkExact(),
  ],
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      sendOutcome(res, invalidRequest(errors));
      return;
    }

    const query = `ALTER TABLE "${req.body.tableName}" SET (${Object.entries(req.body.settings)
      .map(([settingName, val]) => `${settingName} = ${val}`)
      .join(', ')});`;

    const startTime = Date.now();
    await getSystemRepo().getDatabaseClient(DatabaseMode.WRITER).query(query);
    globalLogger.info('[Super Admin]: Table settings updated', {
      tableName: req.body.tableName,
      settings: req.body.settings,
      query,
      durationMs: Date.now() - startTime,
    });
    sendOutcome(res, allOk);
  })
);

// POST to /admin/super/vacuum
// to vacuum and optional analyze on one or more tables
superAdminRouter.post(
  '/vacuum',
  [
    body('tableNames').isArray().withMessage('Table names must be an array of strings').optional(),
    body('tableNames.*')
      .isString()
      .withMessage('Table name(s) must be a string')
      .custom(isValidTableName)
      .withMessage('Table name(s) must be a snake_cased_string')
      .optional(),
    body('analyze').isBoolean().optional().default(false),
    checkExact(),
  ],
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      sendOutcome(res, invalidRequest(errors));
      return;
    }

    const query = `VACUUM${req.body.analyze ? ' ANALYZE' : ''}${req.body.tableNames?.length ? ` ${req.body.tableNames.map((name: string) => `"${name}"`).join(', ')}` : ''};`;

    await sendAsyncResponse(req, res, async () => {
      const startTime = Date.now();
      await getSystemRepo().getDatabaseClient(DatabaseMode.WRITER).query(query);
      globalLogger.info('[Super Admin]: Vacuum completed', {
        tableNames: req.body.tableNames,
        analyze: req.body.analyze,
        query,
        durationMs: Date.now() - startTime,
      });
      return {
        resourceType: 'Parameters',
        parameter: [{ name: 'outcome', resource: allOk }],
      };
    });
  })
);

// POST to /admin/super/reloadcron
// to clear out the cron queue and reload all cron strings from cron bots
superAdminRouter.post(
  '/reloadcron',
  asyncWrap(async (req: Request, res: Response) => {
    requireSuperAdmin();
    requireAsync(req);

    await sendAsyncResponse(req, res, async () => {
      const startTime = Date.now();
      await reloadCronBots();
      globalLogger.info('[Super Admin]: Cron bots reloaded', {
        durationMs: Date.now() - startTime,
      });
      return {
        resourceType: 'Parameters',
        parameter: [{ name: 'outcome', resource: allOk }],
      };
    });
  })
);

export function requireSuperAdmin(): AuthenticatedRequestContext {
  const ctx = getAuthenticatedContext();
  if (!ctx.project.superAdmin) {
    throw new OperationOutcomeError(forbidden);
  }
  return ctx;
}

function requireAsync(req: Request): void {
  if (req.header('Prefer') !== 'respond-async') {
    throw new OperationOutcomeError(badRequest('Operation requires "Prefer: respond-async"'));
  }
}
