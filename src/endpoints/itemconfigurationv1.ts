import { z } from 'zod';
import { endpoint } from '..';

const Roblox_ItemConfiguration_Api_AssetCreationsResponse = z
  .object({ assetId: z.number().int(), name: z.string() })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_ItemConfiguration_Api_AssetCreationsResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_ItemConfiguration_Api_AssetCreationsResponse),
  })
  .passthrough();
const Roblox_ItemConfiguration_Api_TagDetails = z
  .object({
    tagId: z.string(),
    name: z.string(),
    localizedDisplayName: z.string(),
    status: z.enum(['Success', 'MissingItem']),
  })
  .passthrough();
const Roblox_ItemConfiguration_Api_ItemTagDetails = z
  .object({ id: z.string(), tag: Roblox_ItemConfiguration_Api_TagDetails })
  .passthrough();
const Roblox_ItemConfiguration_Api_ItemWithTags = z
  .object({
    id: z.string(),
    itemTags: z.array(Roblox_ItemConfiguration_Api_ItemTagDetails),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_ItemWithTags_ = z
  .object({ data: z.array(Roblox_ItemConfiguration_Api_ItemWithTags) })
  .passthrough();
const Roblox_ItemConfiguration_Api_CreateItemTagRequest = z
  .object({ itemId: z.string(), tagId: z.string() })
  .passthrough();
const Roblox_ItemConfiguration_Api_ItemTagsMetadataResponse = z
  .object({
    isItemTagsFeatureEnabled: z.boolean(),
    enabledAssetTypes: z.array(z.string()),
    maximumItemTagsPerItem: z.number().int(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_TagDetails_ = z
  .object({ data: z.array(Roblox_ItemConfiguration_Api_TagDetails) })
  .passthrough();
const Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest = z
  .object({
    captchaId: z.string(),
    captchaToken: z.string(),
    captchaProvider: z.string(),
    challengeId: z.string(),
  })
  .passthrough();
const Roblox_ItemConfiguration_Api_AvatarAssetUploadCaptchaCheckResponse = z
  .object({ success: z.boolean(), message: z.string(), fieldData: z.string() })
  .passthrough();
const Roblox_ItemConfiguration_Api_AssetCreationsDetailsRequest = z
  .object({ assetIds: z.array(z.number()) })
  .passthrough();
const Roblox_ItemConfiguration_Api_PriceConfigurationModel = z
  .object({
    priceInRobux: z.number().int(),
    premiumDiscountPercentage: z.number().int(),
    premiumPriceInRobux: z.number().int(),
  })
  .passthrough();
const Roblox_ItemConfiguration_Api_ReleaseConfigurationResponseModel = z
  .object({
    saleAvailabilityLocations: z.array(z.enum(['Undefined', 'Catalog', 'AllUniverses', 'MyUniverses'])),
  })
  .passthrough();
const Roblox_ItemConfiguration_Api_AssetCreationsDetailsResponse = z
  .object({
    assetId: z.number().int(),
    name: z.string(),
    status: z.enum([
      'Unknown',
      'ReviewPending',
      'Moderated',
      'ReviewApproved',
      'OnSale',
      'OffSale',
      'DelayedRelease',
      'Free',
    ]),
    description: z.string(),
    creatorType: z.enum(['Unknown', 'User', 'Group']),
    creatorTargetId: z.number().int(),
    price: z.number().int(),
    priceConfiguration: Roblox_ItemConfiguration_Api_PriceConfigurationModel,
    isArchived: z.boolean(),
    assetType: z.string(),
    releaseConfiguration: Roblox_ItemConfiguration_Api_ReleaseConfigurationResponseModel,
    created: z.string().datetime({ offset: true }),
    updated: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();

const schemas = {
  Roblox_ItemConfiguration_Api_AssetCreationsResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_ItemConfiguration_Api_AssetCreationsResponse_,
  Roblox_ItemConfiguration_Api_TagDetails,
  Roblox_ItemConfiguration_Api_ItemTagDetails,
  Roblox_ItemConfiguration_Api_ItemWithTags,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_ItemWithTags_,
  Roblox_ItemConfiguration_Api_CreateItemTagRequest,
  Roblox_ItemConfiguration_Api_ItemTagsMetadataResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_TagDetails_,
  Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest,
  Roblox_ItemConfiguration_Api_AvatarAssetUploadCaptchaCheckResponse,
  Roblox_ItemConfiguration_Api_AssetCreationsDetailsRequest,
  Roblox_ItemConfiguration_Api_PriceConfigurationModel,
  Roblox_ItemConfiguration_Api_ReleaseConfigurationResponseModel,
  Roblox_ItemConfiguration_Api_AssetCreationsDetailsResponse,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
};

/**
 * @api POST https://itemconfiguration.roblox.com/v1/avatar-assets/:assetType/upload-captcha-test
 * @summary An endpoint to check if captcha is needed for an upload of the given asset type
 * @param body
 * @param assetType
 * @param groupId
 */
export const postAvatarAssetsAssettypeUploadCaptchaTest = endpoint({
  method: 'post' as const,
  path: '/v1/avatar-assets/:assetType/upload-captcha-test',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    assetType: {
      style: 'simple',
    },
    groupId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetType: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
      z.literal(11),
      z.literal(12),
      z.literal(13),
      z.literal(16),
      z.literal(17),
      z.literal(18),
      z.literal(19),
      z.literal(21),
      z.literal(22),
      z.literal(24),
      z.literal(25),
      z.literal(26),
      z.literal(27),
      z.literal(28),
      z.literal(29),
      z.literal(30),
      z.literal(31),
      z.literal(32),
      z.literal(33),
      z.literal(34),
      z.literal(35),
      z.literal(37),
      z.literal(38),
      z.literal(39),
      z.literal(40),
      z.literal(41),
      z.literal(42),
      z.literal(43),
      z.literal(44),
      z.literal(45),
      z.literal(46),
      z.literal(47),
      z.literal(48),
      z.literal(49),
      z.literal(50),
      z.literal(51),
      z.literal(52),
      z.literal(53),
      z.literal(54),
      z.literal(55),
      z.literal(56),
      z.literal(59),
      z.literal(60),
      z.literal(61),
      z.literal(62),
      z.literal(63),
      z.literal(64),
      z.literal(65),
      z.literal(66),
      z.literal(67),
      z.literal(68),
      z.literal(69),
      z.literal(70),
      z.literal(71),
      z.literal(72),
      z.literal(73),
      z.literal(74),
      z.literal(75),
      z.literal(76),
      z.literal(77),
      z.literal(78),
      z.literal(79),
      z.literal(80),
    ]),
    groupId: z.number().int(),
  },
  body: Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest,
  response: Roblox_ItemConfiguration_Api_AvatarAssetUploadCaptchaCheckResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://itemconfiguration.roblox.com/v1/creations/get-asset-details
 * @summary Gets the asset status and other configuration details for the given assetIds list
 * @param body
 */
export const postCreationsGetAssetDetails = endpoint({
  method: 'post' as const,
  path: '/v1/creations/get-asset-details',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_ItemConfiguration_Api_AssetCreationsDetailsRequest,
  response: z.array(Roblox_ItemConfiguration_Api_AssetCreationsDetailsResponse),
  errors: [
    {
      status: 400,
      description: `1: Missing AssetIds parameters
2: Invalid asset Ids`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 414,
      description: `3: Too many asset Ids`,
    },
    {
      status: 429,
      description: `9: Flood Limit Exceeded`,
    },
    {
      status: 503,
      description: `6: Service Unavailable`,
    },
  ],
});
/**
 * @api GET https://itemconfiguration.roblox.com/v1/creations/get-assets
 * @summary Gets the user created asset information filtered by the given asset type
 * @param assetType
 * @param isArchived
 * @param groupId
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 */
export const getCreationsGetAssets = endpoint({
  method: 'get' as const,
  path: '/v1/creations/get-assets',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetType: {
      style: 'form',
      explode: true,
    },
    isArchived: {
      style: 'form',
      explode: true,
    },
    groupId: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetType: z.string(),
    isArchived: z.boolean().optional(),
    groupId: z.number().int().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_ItemConfiguration_Api_AssetCreationsResponse_,
  errors: [
    {
      status: 400,
      description: `5: Invalid assetType`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `7: User does not have necessary permissions for group
8: Asset type does not have necessary permissions for group`,
    },
    {
      status: 429,
      description: `9: Flood Limit Exceeded`,
    },
    {
      status: 503,
      description: `6: Service Unavailable`,
    },
  ],
});
/**
 * @api GET https://itemconfiguration.roblox.com/v1/item-tags
 * @summary Gets all related item tags for each item id listed
 * @param itemIds
 */
export const getItemTags = endpoint({
  method: 'get' as const,
  path: '/v1/item-tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    itemIds: {
      style: 'form',
    },
  },
  parameters: {
    itemIds: z.array(z.string()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_ItemWithTags_,
  errors: [
    {
      status: 400,
      description: `1: No item tag Ids requested
2: Too many item tag Ids requested
3: Invalid item id
6: Invalid item namespace`,
    },
    {
      status: 429,
      description: `7: Too many requests`,
    },
  ],
});
/**
 * @api POST https://itemconfiguration.roblox.com/v1/item-tags
 * @summary Creates a new item tag
 * @param body
 */
export const postItemTags = endpoint({
  method: 'post' as const,
  path: '/v1/item-tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_ItemConfiguration_Api_CreateItemTagRequest,
  response: Roblox_ItemConfiguration_Api_ItemTagDetails,
  errors: [
    {
      status: 400,
      description: `3: Invalid item id
4: Invalid tag id
6: Invalid item namespace
8: The given item is ineligible for item tags
9: The given item has already reached its maximum item tag count`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: The current user is missing permissions for the endpoint`,
    },
    {
      status: 429,
      description: `7: Too many requests`,
    },
  ],
});
/**
 * @api DELETE https://itemconfiguration.roblox.com/v1/item-tags/:itemTagId
 * @summary Deletes an item tag from an item
 * @param itemTagId
 */
export const deleteItemTagsItemtagid = endpoint({
  method: 'delete' as const,
  path: '/v1/item-tags/:itemTagId',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    itemTagId: {
      style: 'simple',
    },
  },
  parameters: {
    itemTagId: z.string(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: The current user is missing permissions for the endpoint`,
    },
    {
      status: 429,
      description: `7: Too many requests`,
    },
  ],
});
/**
 * @api GET https://itemconfiguration.roblox.com/v1/item-tags/metadata
 * @summary Gets the metadata related to item tags
 */
export const getItemTagsMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/item-tags/metadata',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_ItemConfiguration_Api_ItemTagsMetadataResponse,
  errors: [],
});
/**
 * @api GET https://itemconfiguration.roblox.com/v1/tags
 * @summary Gets the information for a list of tag Ids
 * @param tagIds
 */
export const getTags = endpoint({
  method: 'get' as const,
  path: '/v1/tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    tagIds: {
      style: 'form',
    },
  },
  parameters: {
    tagIds: z.array(z.string()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_TagDetails_,
  errors: [
    {
      status: 400,
      description: `1: No tag Ids requested
2: Too many tag Ids requested`,
    },
    {
      status: 429,
      description: `3: Too many requests`,
    },
  ],
});
/**
 * @api GET https://itemconfiguration.roblox.com/v1/tags/prefix-search
 * @summary Searches for up to numberOfResults tags based on the given prefix
 * @param prefix
 * @param numberOfResults Must be 1, 5, 10, or 25
 */
export const getTagsPrefixSearch = endpoint({
  method: 'get' as const,
  path: '/v1/tags/prefix-search',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    prefix: {
      style: 'form',
      explode: true,
    },
    numberOfResults: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    prefix: z.string(),
    numberOfResults: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_TagDetails_,
  errors: [
    {
      status: 400,
      description: `5: The given prefix is invalid
6: The number of results requested is invalid`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `4: This endpoint is not yet enabled for the current user`,
    },
    {
      status: 429,
      description: `3: Too many requests`,
    },
  ],
});
