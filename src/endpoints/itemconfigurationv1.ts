import { z } from 'zod';
import { endpoint } from '..';

const Roblox_ItemConfiguration_Api_AssetCreationsResponse = z.object({
  assetId: z.number().int(),
  name: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_ItemConfiguration_Api_AssetCreationsResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_ItemConfiguration_Api_AssetCreationsResponse),
});
const Roblox_ItemConfiguration_Api_TagDetails = z.object({
  tagId: z.string(),
  name: z.string(),
  localizedDisplayName: z.string(),
  status: z.enum(['Success', 'MissingItem']),
});
const Roblox_ItemConfiguration_Api_ItemTagDetails = z.object({
  id: z.string(),
  tag: Roblox_ItemConfiguration_Api_TagDetails,
});
const Roblox_ItemConfiguration_Api_ItemWithTags = z.object({
  id: z.string(),
  itemTags: z.array(Roblox_ItemConfiguration_Api_ItemTagDetails),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_ItemConfiguration_Api_ItemWithTags_ = z.object({
  data: z.array(Roblox_ItemConfiguration_Api_ItemWithTags),
});
const Roblox_ItemConfiguration_Api_CreateItemTagRequest = z.object({
  itemId: z.string(),
  tagId: z.string(),
});
const Roblox_ItemConfiguration_Api_ItemTagsMetadataResponse = z.object({
  isItemTagsFeatureEnabled: z.boolean(),
  enabledAssetTypes: z.array(z.string()),
  maximumItemTagsPerItem: z.number().int(),
});
const Roblox_ItemConfiguration_Api_AssetCreationsDetailsRequest = z.object({
  AssetIds: z.array(z.number().int()),
});
const Roblox_ItemConfiguration_Api_PriceConfigurationModel = z.object({
  priceInRobux: z.number().int(),
  premiumDiscountPercentage: z.number().int(),
  premiumPriceInRobux: z.number().int(),
  priceOffset: z.number().int(),
});
const Roblox_ItemConfiguration_Api_ReleaseConfigurationResponseModel = z.object({
  saleAvailabilityLocations: z.array(z.enum(['Undefined', 'Catalog', 'AllUniverses', 'MyUniverses'])),
});
const Roblox_ItemConfiguration_Api_AssetCreationsDetailsResponse = z.object({
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
  isDelisted: z.boolean(),
  isCreatedForBundle: z.boolean(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

/**
 * @api POST https://itemconfiguration.roblox.com/v1/creations/get-asset-details
 * @param body
 */
export const postCreationsGetAssetDetails = endpoint({
  method: 'POST',
  path: '/v1/creations/get-asset-details',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
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
 * @param assetType
 * @param isArchived
 * @param groupId
 * @param limit
 * @param cursor
 */
export const getCreationsGetAssets = endpoint({
  method: 'GET',
  path: '/v1/creations/get-assets',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetType: {},
    isArchived: {},
    groupId: {},
    limit: {},
    cursor: {},
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
      description: `5: Invalid assetType
10: Invalid Asset Category`,
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
 * @param itemIds
 */
export const getItemTags = endpoint({
  method: 'GET',
  path: '/v1/item-tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    itemIds: {},
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
      status: 404,
      description: `10: The endpoint was not found`,
    },
    {
      status: 429,
      description: `7: Too many requests`,
    },
  ],
});
/**
 * @api POST https://itemconfiguration.roblox.com/v1/item-tags
 * @param body
 */
export const postItemTags = endpoint({
  method: 'POST',
  path: '/v1/item-tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
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
      status: 404,
      description: `10: The endpoint was not found`,
    },
    {
      status: 429,
      description: `7: Too many requests`,
    },
  ],
});
/**
 * @api DELETE https://itemconfiguration.roblox.com/v1/item-tags/:itemTagId
 * @param itemTagId
 */
export const deleteItemTagsItemtagid = endpoint({
  method: 'DELETE',
  path: '/v1/item-tags/:itemTagId',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    itemTagId: {},
  },
  parameters: {
    itemTagId: z.string(),
  },
  response: z.object({}),
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
      status: 404,
      description: `10: The endpoint was not found`,
    },
    {
      status: 429,
      description: `7: Too many requests`,
    },
  ],
});
/**
 * @api GET https://itemconfiguration.roblox.com/v1/item-tags/metadata
 */
export const getItemTagsMetadata = endpoint({
  method: 'GET',
  path: '/v1/item-tags/metadata',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  response: Roblox_ItemConfiguration_Api_ItemTagsMetadataResponse,
  errors: [
    {
      status: 404,
      description: `10: The endpoint was not found`,
    },
  ],
});
