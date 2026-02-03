import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Publish_Api_AssetQuota = z.object({
  duration: z.string(),
  usage: z.number().int(),
  capacity: z.number().int(),
  expirationTime: z.string(),
});
const Roblox_Publish_Api_AssetQuotasResponse = z.object({
  quotas: z.array(Roblox_Publish_Api_AssetQuota),
});
const Roblox_Publish_Api_UploadAudioRequest = z.object({
  name: z.string(),
  file: z.string(),
  groupId: z.number().int(),
  paymentSource: z.string(),
  estimatedFileSize: z.number().int(),
  estimatedDuration: z.number(),
  assetPrivacy: z.union([z.literal(1), z.literal(2)]),
});
const Roblox_Publish_Api_PublishAudioResponse = z.object({
  Id: z.number().int(),
  Name: z.string(),
});
const Roblox_Publish_Api_VerifyAudioRequest = z.object({
  name: z.string(),
  file: z.string(),
  groupId: z.number().int(),
  paymentSource: z.string(),
  fileSize: z.number().int(),
  duration: z.number(),
});
const Roblox_Publish_Api_VerifyAudioResponse = z.object({
  name: z.string(),
  price: z.number().int(),
  balance: z.number().int(),
  canAfford: z.boolean(),
});
const badgeId_icon_body = z.object({ Files: z.instanceof(File) });
const Roblox_Publish_Api_UploadResponse = z.object({
  targetId: z.number().int(),
});
const thumbnail_image_body = z.object({ Files: z.instanceof(File) });
const pluginId_icon_body = z.object({ Files: z.instanceof(File) });

/**
 * @api GET https://publish.roblox.com/v1/asset-quotas
 * @param resourceType
 * @param assetType
 * @param useDummyData
 */
export const getAssetQuotas = endpoint({
  method: 'GET',
  path: '/v1/asset-quotas',
  baseUrl: 'https://publish.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    resourceType: {},
    assetType: {},
    useDummyData: {},
  },
  parameters: {
    resourceType: z.string(),
    assetType: z.string(),
    useDummyData: z.boolean().optional().default(false),
  },
  response: Roblox_Publish_Api_AssetQuotasResponse,
  errors: [
    {
      status: 400,
      description: `7: The asset type is not appropriate for this request.
8: The resource type is not appropriate for this request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: Reserved for base level errors. Do not use in your endpoint directly, do not document.`,
    },
  ],
});
/**
 * @api POST https://publish.roblox.com/v1/audio
 * @param body The file upload request body. Roblox.Publish.Api.UploadAudioRequest
 */
export const postAudio = endpoint({
  method: 'POST',
  path: '/v1/audio',
  baseUrl: 'https://publish.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Publish_Api_UploadAudioRequest,
  response: Roblox_Publish_Api_PublishAudioResponse,
  errors: [
    {
      status: 400,
      description: `3: The request did not contain a file to be uploaded.
4: The file in the request is too large.
5: The duration of the audio file is too long.
8: The file type is not supported.
9: The file is corrupted
11: Missing permissions to spend group funds.
14: The user/group does not have suffiecient funds to publish.
14: The user/group does not have suffiecient funds to publish.
15: The audio file has already been reviewed and rejected.
18: Too many requests. Try again later.
20: Error while trying to purchase the product.
22: The file size estimation error was greater than the acceptable margin of error.
23: The duration estimation error was greater than the acceptable margin of error.
24: Asset privacy is invalid.
29: Invalid argument in the request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
1: The request did not include an authorization.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `7: Failed to parse the file.
19: Asset creation was unavailable. Please try again.`,
    },
  ],
});
/**
 * @api POST https://publish.roblox.com/v1/audio/verify
 * @param body The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
 */
export const postAudioVerify = endpoint({
  method: 'POST',
  path: '/v1/audio/verify',
  baseUrl: 'https://publish.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Publish_Api_VerifyAudioRequest,
  response: Roblox_Publish_Api_VerifyAudioResponse,
  errors: [
    {
      status: 400,
      description: `3: The request did not contain a file to be uploaded.
4: The file in the request is too large.
5: The duration of the audio file is too long.
8: The file type is not supported.
9: The file is corrupted
18: Too many requests. Try again later.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
1: The request did not include an authorization.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `7: Failed to parse the file.`,
    },
  ],
});
/**
 * @api POST https://publish.roblox.com/v1/badges/:badgeId/icon
 * @param body
 * @param badgeId
 */
export const postBadgesBadgeidIcon = endpoint({
  method: 'POST',
  path: '/v1/badges/:badgeId/icon',
  baseUrl: 'https://publish.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    badgeId: {},
  },
  parameters: {
    badgeId: z.number().int(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({ targetId: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `2: File not present in request.
12: Name or description is moderated.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: You do not have permission to manage this item.`,
    },
    {
      status: 404,
      description: `4: Target item is invalid or does not exist.`,
    },
    {
      status: 429,
      description: `3: You&#x27;re uploading too much, please wait and try again later.`,
    },
  ],
});
/**
 * @api POST https://publish.roblox.com/v1/games/:gameId/thumbnail/image
 * @param body
 * @param gameId
 */
export const postGamesGameidThumbnailImage = endpoint({
  method: 'POST',
  path: '/v1/games/:gameId/thumbnail/image',
  baseUrl: 'https://publish.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({ targetId: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: File uploaded does not match known image format. Try converting to png.
2: File not present in request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: You do not have permission to manage this item.`,
    },
    {
      status: 404,
      description: `4: Target item is invalid or does not exist.`,
    },
    {
      status: 429,
      description: `3: You&#x27;re uploading too much, please wait and try again later.`,
    },
  ],
});
/**
 * @api POST https://publish.roblox.com/v1/plugins/:pluginId/icon
 * @param body
 * @param pluginId
 */
export const postPluginsPluginidIcon = endpoint({
  method: 'POST',
  path: '/v1/plugins/:pluginId/icon',
  baseUrl: 'https://publish.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    pluginId: {},
  },
  parameters: {
    pluginId: z.number().int(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({ targetId: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `2: File not present in request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: You do not have permission to manage this item.`,
    },
    {
      status: 404,
      description: `4: Target item is invalid or does not exist.`,
    },
    {
      status: 429,
      description: `3: You&#x27;re uploading too much, please wait and try again later.`,
    },
  ],
});
