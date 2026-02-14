import { z } from 'zod';
import { endpoint } from '../..';

const AssetPrivacy = z.enum(['default', 'restricted', 'openUse']);
const Creator = z.object({
  userId: z.number().int(),
  groupId: z.number().int(),
});
const CreationContext = z.object({
  assetPrivacy: AssetPrivacy,
  creator: Creator,
  expectedPrice: z.number().int(),
});
const ModerationResult = z.object({ moderationState: z.string() });
const Preview = z.object({ asset: z.string(), altText: z.string() });
const State = z.enum(['Unspecified', 'Active', 'Archived']);
const SocialLink = z.object({ title: z.string(), uri: z.string() });
const Asset = z.object({
  assetType: z.string(),
  assetId: z.number().int(),
  creationContext: CreationContext,
  description: z.string(),
  displayName: z.string(),
  path: z.string(),
  revisionId: z.string(),
  revisionCreateTime: z.string().datetime({ offset: true }),
  moderationResult: ModerationResult,
  icon: z.string(),
  previews: z.array(Preview),
  state: State,
  socialLink: SocialLink,
});
const Assets_CreateAsset_Body = z.object({
  request: Asset,
  fileContent: z.instanceof(File),
});
const Status = z.object({ code: z.number().int(), message: z.string() });
const Operation = z.object({
  path: z.string(),
  done: z.boolean(),
  error: Status,
  response: Asset,
});
const AssetVersion = z.object({
  creationContext: CreationContext,
  path: z.string(),
  moderationResult: ModerationResult,
  published: z.boolean(),
});

/**
 * **Create Asset** · `BETA`
 *
 * Creates an asset with provided content and metadata.

You can't add [SocialLink](#SocialLink) objects when you create an asset. Instead, use [Update Asset](#PATCH-v1-assets-_assetId_).

Provide the [Asset](#Asset), binary asset file path, and [content type](/cloud/guides/usage-assets.md#supported-asset-types-and-limits) in the form data.
 *
 * **Scopes:** `asset:read`, `asset:write`
 *
 * @param body 
 */
export const postAssets = endpoint({
  method: 'POST',
  path: '/v1/assets',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read', 'asset:write'],
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Assets_CreateAsset_Body,
  response: Operation,
  errors: [
    {
      status: 400,
      description: `Invalid argument. Failed to parse the request or the file.`,
    },
    {
      status: 401,
      description: `The API key is not valid for this operation / You don&#x27;t have the authorization.`,
    },
    {
      status: 500,
      description: `Server internal error / Unknown error.`,
    },
  ],
});
/**
 * **Get Asset** · `BETA`
 *
 * Retrieve specific asset metadata.
 *
 * **Scopes:** `asset:read`
 *
 * @param assetId The unique identifier of the asset.
 * @param readMask Asset metadata fields to retrieve, including the description, display name, icon, social links, and previews. Examples: `description%2CdisplayName`, `previews%2CtwitchSocialLink`.
 */
export const getAssetsAssetId = endpoint({
  method: 'GET',
  path: '/v1/assets/:assetId',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read'],
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
    readMask: {},
  },
  parameters: {
    assetId: z.string(),
    readMask: z.string().optional(),
  },
  response: Asset,
  errors: [
    {
      status: 400,
      description: `Malformed request, likely due to an invalid read mask.`,
    },
    {
      status: 401,
      description: `The API key is not valid for this operation / You don&#x27;t have the authorization.`,
    },
    {
      status: 403,
      description: `Doesn&#x27;t have the required permission.`,
    },
    {
      status: 404,
      description: `Asset doesn&#x27;t exist.`,
    },
    {
      status: 500,
      description: `Server internal error / Unknown error.`,
    },
  ],
});
/**
 * **Update Asset** · `BETA`
 *
 * Updates an asset with provided content and metadata, including the description, display name, icon, social links, and previews. Currently can only update the content body for **Models**. Icons and Previews must be **Image** assets. Icons must have square dimensions.

Provide the [Asset](#Asset), binary asset file path, and [content type](/cloud/guides/usage-assets.md#supported-asset-types-and-limits) in the form data.
 *
 * **Scopes:** `asset:read`, `asset:write`
 *
 * @param body 
 * @param assetId The unique identifier of the asset.
 * @param updateMask Asset metadata fields to update, including the description, display name, icon, and previews. Examples: `description%2CdisplayName`, `previews%2CtwitchSocialLink`.
 */
export const patchAssetsAssetId = endpoint({
  method: 'PATCH',
  path: '/v1/assets/:assetId',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read', 'asset:write'],
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    assetId: {},
    updateMask: {},
  },
  parameters: {
    assetId: z.string(),
    updateMask: z.string().optional(),
  },
  body: Assets_CreateAsset_Body,
  response: Operation,
  errors: [
    {
      status: 400,
      description: `Invalid argument. Failed to parse the request or the file.`,
    },
    {
      status: 401,
      description: `The API key is not valid for this operation / You don&#x27;t have the authorization.`,
    },
    {
      status: 500,
      description: `Server internal error / Unknown error.`,
    },
  ],
});
/**
 * **Archive Asset** · `BETA`
 *
 * Archives the asset. Archived assets disappear from the website and are no longer usable or visible in Roblox experiences, but you can [restore](#POST-v1-assets-{assetId}:restore) them.
 *
 * **Scopes:** `asset:read`, `asset:write`
 *
 * @param assetId The unique identifier of the asset.
 */
export const postAssetsAssetIdArchive = endpoint({
  method: 'POST',
  path: '/v1/assets/:assetId:archive',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read', 'asset:write'],
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
  },
  parameters: {
    assetId: z.string(),
  },
  response: Asset,
  errors: [
    {
      status: 400,
      description: `Bad request - invalid request.`,
    },
    {
      status: 403,
      description: `Forbidden - API key without Write scope or user doesn&#x27;t have access.`,
    },
    {
      status: 404,
      description: `Asset not found.`,
    },
  ],
});
/**
 * **Restore Asset** · `BETA`
 *
 * Restores an archived asset.
 *
 * **Scopes:** `asset:read`, `asset:write`
 *
 * @param assetId The unique identifier of the asset.
 */
export const postAssetsAssetIdRestore = endpoint({
  method: 'POST',
  path: '/v1/assets/:assetId:restore',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read', 'asset:write'],
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
  },
  parameters: {
    assetId: z.string(),
  },
  response: Asset,
  errors: [
    {
      status: 400,
      description: `Bad request - invalid request.`,
    },
    {
      status: 403,
      description: `Forbidden - API key without Write scope or user doesn&#x27;t have access.`,
    },
    {
      status: 404,
      description: `Asset not found.`,
    },
  ],
});
/**
 * **List Asset Versions** · `BETA`
 *
 * List all versions of a specific asset, with optional pagination.
 *
 * **Scopes:** `asset:read`
 *
 * @param assetId The unique identifier of the asset.
 * @param maxPageSize Specifies the number of asset versions to include in the response. Valid values range from 1 to 50 (inclusive). Defaults to 8 when not provided.
 * @param pageToken A token for pagination. The value is obtained from a previous request and allows for retrieving the next page of asset versions.
 */
export const getAssetsAssetIdVersions = endpoint({
  method: 'GET',
  path: '/v1/assets/:assetId/versions',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read'],
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
    maxPageSize: {},
    pageToken: {},
  },
  parameters: {
    assetId: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: z.array(AssetVersion),
  errors: [
    {
      status: 400,
      description: `Bad request - invalid parameters.`,
    },
    {
      status: 403,
      description: `Forbidden - API key without Read scope or user doesn&#x27;t have access.`,
    },
    {
      status: 404,
      description: `Asset not found.`,
    },
  ],
});
/**
 * **Rollback Asset Version** · `BETA`
 *
 * Rollback an asset to a specific previous version.

 Provide the asset version path in the form data.
 *
 * **Scopes:** `asset:read`, `asset:write`
 *
 * @param body 
 * @param assetId The unique identifier of the asset.
 */
export const postAssetsAssetIdVersionsRollback = endpoint({
  method: 'POST',
  path: '/v1/assets/:assetId/versions:rollback',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read', 'asset:write'],
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    assetId: {},
  },
  parameters: {
    assetId: z.string(),
  },
  body: z.object({ assetVersion: z.string() }),
  response: AssetVersion,
  errors: [
    {
      status: 400,
      description: `Bad request - invalid request body.`,
    },
    {
      status: 403,
      description: `Forbidden - API key without Write scope or user doesn&#x27;t have access.`,
    },
    {
      status: 404,
      description: `Asset or Asset Version not found.`,
    },
  ],
});
/**
 * **Get Asset Version** · `BETA`
 *
 * Retrieve a specific asset version by the asset ID and the version number.
 *
 * **Scopes:** `asset:read`
 *
 * @param assetId The unique identifier of the asset.
 * @param versionNumber The version number.
 */
export const getAssetsAssetIdVersionsVersionNumber = endpoint({
  method: 'GET',
  path: '/v1/assets/:assetId/versions/:versionNumber',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read'],
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
    versionNumber: {},
  },
  parameters: {
    assetId: z.string(),
    versionNumber: z.string(),
  },
  response: AssetVersion,
  errors: [
    {
      status: 403,
      description: `Forbidden - API key without Read scope or user doesn&#x27;t have access.`,
    },
    {
      status: 404,
      description: `Asset or Asset Version not found.`,
    },
  ],
});
/**
 * **Get Operation** · `BETA`
 *
 * Get the result of an asset creation or update using the returned Operation ID. Requires **Read** for the API key permission and **asset:read** for OAuth 2.0 apps.
 *
 * **Scopes:** `asset:read`
 *
 * @param operationId The unique identifier of the operation.
 */
export const getOperationsOperationId = endpoint({
  method: 'GET',
  path: '/v1/operations/:operationId',
  baseUrl: 'https://apis.roblox.com/assets',
  scopes: ['asset:read'],
  requestFormat: 'json',
  serializationMethod: {
    operationId: {},
  },
  parameters: {
    operationId: z.string(),
  },
  response: Operation,
  errors: [
    {
      status: 400,
      description: `Invalid argument. Failed to parse the request or the file.`,
    },
    {
      status: 401,
      description: `The API key is not valid for this operation / You don&#x27;t have the authorization.`,
    },
    {
      status: 500,
      description: `Server internal error / Unknown error.`,
    },
  ],
});
