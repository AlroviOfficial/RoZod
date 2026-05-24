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
const Roblox_ItemConfiguration_Api_AssetCreationsDetailsRequest = z.object({
  AssetIds: z.array(z.number()),
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
  creatorType: z.string(),
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

/**
 * @api POST https://itemconfiguration.roblox.com/v1/creations/get-asset-details
 * @summary Gets the asset status and other configuration details for the given assetIds list.
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
 * @summary Gets the user created asset information filtered by the given asset type.
 * @param assetType
 * @param isArchived
 * @param groupId
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 */
export const getCreationsGetAssets = endpoint({
  method: 'GET',
  path: '/v1/creations/get-assets',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
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

// Patched endpoints removed from Roblox API docs (v6.1.0 compat)

const Roblox_ItemConfiguration_Api_TagDetails = z.object({
  tagId: z.string(),
  name: z.string(),
  localizedDisplayName: z.string(),
  status: z.enum(['Success', 'MissingItem']),
});
const Patch_ApiArrayResponse_TagDetails = z.object({
  data: z.array(Roblox_ItemConfiguration_Api_TagDetails),
});

export const getTags = endpoint({
  method: 'GET',
  path: '/v1/tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: { tagIds: { style: 'form' } },
  parameters: { tagIds: z.array(z.string()) },
  response: Patch_ApiArrayResponse_TagDetails,
  errors: [
    { status: 400, description: `1: No tag Ids requested\n2: Too many tag Ids requested` },
    { status: 429, description: `3: Too many requests` },
  ],
});

export const getTagsPrefixSearch = endpoint({
  method: 'GET',
  path: '/v1/tags/prefix-search',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    prefix: { style: 'form', explode: true },
    numberOfResults: { style: 'form', explode: true },
  },
  parameters: {
    prefix: z.string(),
    numberOfResults: z.number().int(),
  },
  response: Patch_ApiArrayResponse_TagDetails,
  errors: [
    { status: 400, description: `5: The given prefix is invalid\n6: The number of results requested is invalid` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `4: This endpoint is not yet enabled for the current user` },
    { status: 429, description: `3: Too many requests` },
  ],
});
