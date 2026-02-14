import { z } from 'zod';
import { endpoint } from '../..';

const SubjectType = z.enum(['Invalid', 'User', 'Group', 'GroupRoleset', 'All', 'Universe']);
const AssetAction = z.enum(['Invalid', 'Edit', 'Use', 'Download', 'CopyFromRcc', 'UpdateFromRcc']);
const AssetGrantRequest = z.object({
  assetId: z.number().int(),
  grantToDependencies: z.boolean(),
  parentVersionNumber: z.number().int(),
});
const BatchGrantPermissionsRequest = z.object({
  subjectType: SubjectType,
  subjectId: z.string().nullable(),
  action: AssetAction,
  requests: z.array(AssetGrantRequest).nullable(),
  assetIds: z.array(z.number()).nullable(),
  enableDeepAccessCheck: z.boolean(),
});
const ErrorCode = z.enum([
  'UnknownError',
  'InvalidRequest',
  'AssetNotFound',
  'CannotManageAsset',
  'PublicAssetCannotBeGrantedTo',
  'CannotManageSubject',
  'SubjectNotFound',
  'AssetTypeNotEnabled',
  'PermissionLimitReached',
  'DependenciesLimitReached',
]);
const GrantPermissionError = z.object({
  assetId: z.number().int(),
  code: ErrorCode,
});
const BatchGrantPermissionsResponse = z.object({
  successAssetIds: z.array(z.number()).nullable(),
  errors: z.array(GrantPermissionError).nullable(),
});
const Error = z.object({ code: ErrorCode, message: z.string().nullable() });
const ErrorResponse = z.object({ error: Error });

/**
 * @api PATCH https://apis.roblox.com/asset-permissions-api/v1/assets/permissions
 * @summary Grant a subject permission to multiple assets.
            
Authorization is required to grant permissions to the subject and asset IDs in the request.
 * @param body 
 */
export const patchAssetPermissionsApiV1AssetsPermissions = endpoint({
  method: 'PATCH',
  path: '/asset-permissions-api/v1/assets/permissions',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: BatchGrantPermissionsRequest,
  response: BatchGrantPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 500,
      description: `Internal Server Error`,
    },
  ],
});
