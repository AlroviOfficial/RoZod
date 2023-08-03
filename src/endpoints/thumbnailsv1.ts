import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Thumbnails_ThumbnailResponse = z
  .object({
    targetId: z.number().int(),
    state: z.enum(['Error', 'Completed', 'InReview', 'Pending', 'Blocked', 'TemporarilyUnavailable']),
    imageUrl: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_ = z
  .object({
    data: z.array(Roblox_Web_Responses_Thumbnails_ThumbnailResponse),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiErrorModel = z
  .object({
    code: z.number().int(),
    message: z.string(),
    userFacingMessage: z.string(),
    field: z.string(),
    fieldData: z.object({}).passthrough(),
  })
  .passthrough();
const Roblox_Thumbnails_Api_Models_UniverseThumbnailsResponse = z
  .object({
    universeId: z.number().int(),
    error: Roblox_Web_WebAPI_Models_ApiErrorModel,
    thumbnails: z.array(Roblox_Web_Responses_Thumbnails_ThumbnailResponse),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Thumbnails_Api_Models_UniverseThumbnailsResponse_ = z
  .object({
    data: z.array(Roblox_Thumbnails_Api_Models_UniverseThumbnailsResponse),
  })
  .passthrough();
const Roblox_Thumbnails_Api_Models_ThumbnailMetaDataResponse = z
  .object({
    isWebappUseCacheEnabled: z.boolean(),
    webappCacheExpirationTimspan: z.string(),
  })
  .passthrough();
const Roblox_Thumbnails_Apis_Models_ThumbnailBatchRequest = z
  .object({
    requestId: z.string().optional(),
    targetId: z.number().int(),
    token: z.string().optional(),
    alias: z.string().optional(),
    type: z.enum([
      'Avatar',
      'AvatarHeadShot',
      'GameIcon',
      'BadgeIcon',
      'GameThumbnail',
      'GamePass',
      'Asset',
      'BundleThumbnail',
      'Outfit',
      'GroupIcon',
      'DeveloperProduct',
      'AvatarBust',
      'AutoGeneratedAsset',
      'PlaceIcon',
      'AutoGeneratedGameIcon',
      'ForceAutoGeneratedGameIcon',
    ]),
    size: z.string(),
    format: z.string().optional(),
    isCircular: z.boolean().optional(),
  })
  .passthrough();
const Roblox_Web_Responses_Thumbnails_ThumbnailBatchResponse = z
  .object({
    requestId: z.string(),
    errorCode: z.number().int(),
    errorMessage: z.string(),
    targetId: z.number().int(),
    state: z.enum(['Error', 'Completed', 'InReview', 'Pending', 'Blocked', 'TemporarilyUnavailable']),
    imageUrl: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailBatchResponse_ = z
  .object({
    data: z.array(Roblox_Web_Responses_Thumbnails_ThumbnailBatchResponse),
  })
  .passthrough();

const schemas = {
  Roblox_Web_Responses_Thumbnails_ThumbnailResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  Roblox_Web_WebAPI_Models_ApiErrorModel,
  Roblox_Thumbnails_Api_Models_UniverseThumbnailsResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Thumbnails_Api_Models_UniverseThumbnailsResponse_,
  Roblox_Thumbnails_Api_Models_ThumbnailMetaDataResponse,
  Roblox_Thumbnails_Apis_Models_ThumbnailBatchRequest,
  Roblox_Web_Responses_Thumbnails_ThumbnailBatchResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailBatchResponse_,
};

/**
 * @api get https://thumbnails.roblox.com/v1/asset-thumbnail-animated
 * @param assetId
 */
export const getAssetThumbnailAnimated = endpoint({
  method: 'get' as const,
  path: '/v1/asset-thumbnail-animated',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: Roblox_Web_Responses_Thumbnails_ThumbnailResponse,
  errors: [
    {
      status: 400,
      description: `4: The requested Ids are invalid, of an invalid type or missing.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/assets
 * @param assetIds
 * @param returnPolicy
 * @param size
 * @param format
 * @param isCircular
 */
export const getAssets = endpoint({
  method: 'get' as const,
  path: '/v1/assets',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetIds: {
      style: 'form',
    },
    returnPolicy: {
      style: 'form',
      explode: true,
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetIds: z.array(z.number()),
    returnPolicy: z.enum(['PlaceHolder', 'AutoGenerated', 'ForceAutoGenerated']).optional().default('PlaceHolder'),
    size: z
      .enum([
        '30x30',
        '42x42',
        '50x50',
        '60x62',
        '75x75',
        '110x110',
        '140x140',
        '150x150',
        '160x100',
        '160x600',
        '250x250',
        '256x144',
        '300x250',
        '304x166',
        '384x216',
        '396x216',
        '420x420',
        '480x270',
        '512x512',
        '576x324',
        '700x700',
        '728x90',
        '768x432',
        '1200x80',
      ])
      .optional()
      .default('30x30'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
8: The requested return policy is invalid (must be PlaceHolder, AutoGenerated or ForceAutoGenerated).
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `9: User not authorized to use AutoGenerated or ForceAutoGenerated return policies.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/assets-thumbnail-3d
 * @param assetId
 */
export const getAssetsThumbnail3d = endpoint({
  method: 'get' as const,
  path: '/v1/assets-thumbnail-3d',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: Roblox_Web_Responses_Thumbnails_ThumbnailResponse,
  errors: [
    {
      status: 400,
      description: `4: The requested Ids are invalid, of an invalid type or missing.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/badges/icons
 * @param badgeIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getBadgesIcons = endpoint({
  method: 'get' as const,
  path: '/v1/badges/icons',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    badgeIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    badgeIds: z.array(z.number()),
    size: z.literal('150x150').optional().default('150x150'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://thumbnails.roblox.com/v1/batch
 * @param body List of ThumbnailBatchRequest objects, may contain the following request types:
            1. Avatar
            2. AvatarHeadShot
            3. GameIcon
            4. BadgeIcon
            5. GameThumbnail
            6. GamePass
            7. Asset
            8. BundleThumbnail
            9. Outfit
            10. GroupIcon
            11. DeveloperProduct
            12. AutoGeneratedAsset
            13. AvatarBust
            14. PlaceIcon
            15. AutoGeneratedGameIcon
            16. ForceAutoGeneratedGameIcon
 */
export const postBatch = endpoint({
  method: 'post' as const,
  path: '/v1/batch',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.array(Roblox_Thumbnails_Apis_Models_ThumbnailBatchRequest),
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailBatchResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
7: The specified type is not supported by the batch endpoint`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `9: User not authorized to use AutoGenerated or ForceAutoGenerated return policies.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/bundles/thumbnails
 * @param bundleIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getBundlesThumbnails = endpoint({
  method: 'get' as const,
  path: '/v1/bundles/thumbnails',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    bundleIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    bundleIds: z.array(z.number()),
    size: z.enum(['150x150', '420x420']).optional().default('150x150'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/developer-products/icons
 * @param developerProductIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getDeveloperProductsIcons = endpoint({
  method: 'get' as const,
  path: '/v1/developer-products/icons',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    developerProductIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    developerProductIds: z.array(z.number()),
    size: z.enum(['150x150', '420x420']).optional().default('150x150'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/game-passes
 * @param gamePassIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getGamePasses = endpoint({
  method: 'get' as const,
  path: '/v1/game-passes',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    gamePassIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    gamePassIds: z.array(z.number()),
    size: z.literal('150x150').optional().default('150x150'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/games/:universeId/thumbnails
 * @param universeId
 * @param thumbnailIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getGamesUniverseidThumbnails = endpoint({
  method: 'get' as const,
  path: '/v1/games/:universeId/thumbnails',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    thumbnailIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    thumbnailIds: z.array(z.number()),
    size: z.enum(['768x432', '576x324', '480x270', '384x216', '256x144']).optional().default('768x432'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `5: The requested universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/games/icons
 * @param universeIds
 * @param returnPolicy
 * @param size
 * @param format
 * @param isCircular
 */
export const getGamesIcons = endpoint({
  method: 'get' as const,
  path: '/v1/games/icons',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeIds: {
      style: 'form',
    },
    returnPolicy: {
      style: 'form',
      explode: true,
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
    returnPolicy: z.enum(['PlaceHolder', 'AutoGenerated', 'ForceAutoGenerated']).optional().default('PlaceHolder'),
    size: z.enum(['50x50', '128x128', '150x150', '256x256', '512x512']).optional().default('50x50'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
8: The requested return policy is invalid (must be PlaceHolder, AutoGenerated or ForceAutoGenerated).
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `9: User not authorized to use AutoGenerated or ForceAutoGenerated return policies.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/games/multiget/thumbnails
 * @param universeIds
 * @param countPerUniverse
 * @param defaults
 * @param size
 * @param format
 * @param isCircular
 */
export const getGamesMultigetThumbnails = endpoint({
  method: 'get' as const,
  path: '/v1/games/multiget/thumbnails',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeIds: {
      style: 'form',
    },
    countPerUniverse: {
      style: 'form',
      explode: true,
    },
    defaults: {
      style: 'form',
      explode: true,
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
    countPerUniverse: z.number().int().optional().default(1),
    defaults: z.boolean().optional().default(true),
    size: z.enum(['768x432', '576x324', '480x270', '384x216', '256x144']).optional().default('768x432'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Thumbnails_Api_Models_UniverseThumbnailsResponse_,
  errors: [
    {
      status: 400,
      description: `0: Unknown error
1: There are too many requested Ids.
4: The requested Ids are invalid, of an invalid type or missing.
5: The requested universe does not exist.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/groups/icons
 * @param groupIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getGroupsIcons = endpoint({
  method: 'get' as const,
  path: '/v1/groups/icons',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupIds: z.array(z.number()),
    size: z.enum(['150x150', '420x420']).optional().default('150x150'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/metadata
 */
export const getMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/metadata',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Thumbnails_Api_Models_ThumbnailMetaDataResponse,
  errors: [],
});
/**
 * @api get https://thumbnails.roblox.com/v1/places/gameicons
 * @param placeIds
 * @param returnPolicy
 * @param size
 * @param format
 * @param isCircular
 */
export const getPlacesGameicons = endpoint({
  method: 'get' as const,
  path: '/v1/places/gameicons',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeIds: {
      style: 'form',
    },
    returnPolicy: {
      style: 'form',
      explode: true,
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeIds: z.array(z.number()),
    returnPolicy: z.enum(['PlaceHolder', 'AutoGenerated', 'ForceAutoGenerated']).optional().default('PlaceHolder'),
    size: z.enum(['50x50', '128x128', '150x150', '256x256', '512x512']).optional().default('50x50'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
8: The requested return policy is invalid (must be PlaceHolder, AutoGenerated or ForceAutoGenerated).
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `9: User not authorized to use AutoGenerated or ForceAutoGenerated return policies.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/users/avatar
 * @param userIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getUsersAvatar = endpoint({
  method: 'get' as const,
  path: '/v1/users/avatar',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userIds: z.array(z.number()),
    size: z
      .enum([
        '30x30',
        '48x48',
        '60x60',
        '75x75',
        '100x100',
        '110x110',
        '140x140',
        '150x150',
        '150x200',
        '180x180',
        '250x250',
        '352x352',
        '420x420',
        '720x720',
      ])
      .optional()
      .default('30x30'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/users/avatar-3d
 * @param userId
 */
export const getUsersAvatar3d = endpoint({
  method: 'get' as const,
  path: '/v1/users/avatar-3d',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_Responses_Thumbnails_ThumbnailResponse,
  errors: [
    {
      status: 400,
      description: `4: The requested Ids are invalid, of an invalid type or missing.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/users/avatar-bust
 * @param userIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getUsersAvatarBust = endpoint({
  method: 'get' as const,
  path: '/v1/users/avatar-bust',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userIds: z.array(z.number()),
    size: z
      .enum(['48x48', '50x50', '60x60', '75x75', '100x100', '150x150', '180x180', '352x352', '420x420'])
      .optional()
      .default('48x48'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/users/avatar-headshot
 * @param userIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getUsersAvatarHeadshot = endpoint({
  method: 'get' as const,
  path: '/v1/users/avatar-headshot',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userIds: z.array(z.number()),
    size: z
      .enum([
        '48x48',
        '50x50',
        '60x60',
        '75x75',
        '100x100',
        '110x110',
        '150x150',
        '180x180',
        '352x352',
        '420x420',
        '720x720',
      ])
      .optional()
      .default('48x48'),
    format: z.enum(['Png', 'Jpeg']).optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://thumbnails.roblox.com/v1/users/outfit-3d
 * @param outfitId
 */
export const getUsersOutfit3d = endpoint({
  method: 'get' as const,
  path: '/v1/users/outfit-3d',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    outfitId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    outfitId: z.number().int(),
  },
  response: Roblox_Web_Responses_Thumbnails_ThumbnailResponse,
  errors: [],
});
/**
 * @api get https://thumbnails.roblox.com/v1/users/outfits
 * @param userOutfitIds
 * @param size
 * @param format
 * @param isCircular
 */
export const getUsersOutfits = endpoint({
  method: 'get' as const,
  path: '/v1/users/outfits',
  baseUrl: 'https://thumbnails.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userOutfitIds: {
      style: 'form',
    },
    size: {
      style: 'form',
      explode: true,
    },
    format: {
      style: 'form',
      explode: true,
    },
    isCircular: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userOutfitIds: z.array(z.number()),
    size: z.enum(['150x150', '420x420']).optional().default('150x150'),
    format: z.literal('Png').optional().default('Png'),
    isCircular: z.union([z.literal(true), z.literal(false)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Thumbnails_ThumbnailResponse_,
  errors: [
    {
      status: 400,
      description: `1: There are too many requested Ids.
2: The requested image format is invalid. Please see documentation for valid thumbnail format parameter name and values.
3: The requested size is invalid. Please see documentation for valid thumbnail size parameter name and format.
4: The requested Ids are invalid, of an invalid type or missing.
10: Circular thumbnail requests are not allowed`,
      schema: z.void(),
    },
  ],
});
