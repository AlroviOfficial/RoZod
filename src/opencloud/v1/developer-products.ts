import { z } from 'zod';
import { endpoint } from '../..';

const DeveloperProducts_CreateDeveloperProductV2_Body = z.object({
  name: z.string(),
  description: z.string().nullish(),
  isForSale: z.boolean().nullish(),
  price: z.number().int().nullish(),
  imageFile: z.instanceof(File).nullish(),
  isRegionalPricingEnabled: z.boolean().nullish(),
});
const PricingFeature = z.enum(['Invalid', 'PriceOptimization', 'UserFixedPrice', 'RegionalPricing']);
const PriceInformationStruct = z.object({
  defaultPriceInRobux: z.number().int().nullable(),
  enabledFeatures: z.array(PricingFeature),
});
const DeveloperProductConfigV2 = z.object({
  productId: z.number().int(),
  name: z.string(),
  description: z.string(),
  iconImageAssetId: z.number().int().nullable(),
  universeId: z.number().int(),
  isForSale: z.boolean(),
  storePageEnabled: z.boolean(),
  priceInformation: PriceInformationStruct.nullable(),
  isImmutable: z.boolean(),
  createdTimestamp: z.string().datetime({ offset: true }),
  updatedTimestamp: z.string().datetime({ offset: true }),
});
const ErrorCode = z.enum([
  'InvalidImageFile',
  'UnauthorizedAccess',
  'NotAuthenticated',
  'NotFound',
  'Internal',
  'BadRequest',
  'InvalidProductId',
  'UnauthorizedProductAccess',
  'InvalidDeveloperProductId',
  'DuplicateProductName',
  'InvalidUniverseId',
  'UnauthorizedUniverseAccess',
  'InvalidShopId',
  'UnknownError',
  'InvalidPriceInRobux',
  'InvalidPostBody',
  'InvalidPageNumber',
  'InvalidPageSize',
  'UnsupportedDeveloperProductUpdate',
  'PendingProductsLimitExceeded',
  'InvalidCursor',
  'InvalidRegionalPricing',
  'ProductRetrievalLimitExceeded',
  'InvalidProductIds',
  'InvalidName',
  'InvalidDescription',
  'InvalidIsForSale',
  'InvalidStorePageEnabled',
  'Unavailable',
  'InvalidPrice',
  'Blocked',
  'Conflict',
]);
const ErrorResponse = z.object({
  errorCode: ErrorCode,
  errorMessage: z.string().nullable(),
  field: z.string().nullable(),
  hint: z.string().nullable(),
});
const DeveloperProducts_UpdateDeveloperProductV2_Body = z.object({
  name: z.string().nullable(),
  description: z.string().nullable(),
  isForSale: z.boolean().nullable(),
  price: z.number().int().nullable(),
  imageFile: z.instanceof(File).nullable(),
  isRegionalPricingEnabled: z.boolean().nullable(),
  storePageEnabled: z.boolean().nullable(),
});
const ListDeveloperProductConfigsV2Response = z.object({
  developerProducts: z.array(DeveloperProductConfigV2),
  nextPageToken: z.string().nullable(),
});

/**
 * @api POST https://apis.roblox.com/developer-products/v2/universes/:universeId/developer-products
 * @summary Create developer product
 * @param body
 * @param universeId The universe ID.
 * @description Creates a new developer product with the provided configuration details.
 */
export const postDeveloperProductsV2UniversesUniverseIdDeveloperProducts = endpoint({
  method: 'POST',
  path: '/developer-products/v2/universes/:universeId/developer-products',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    universeId: {},
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: DeveloperProducts_CreateDeveloperProductV2_Body,
  response: DeveloperProductConfigV2,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
/**
 * @api PATCH https://apis.roblox.com/developer-products/v2/universes/:universeId/developer-products/:productId
 * @summary Update developer product
 * @param body 
 * @param universeId The universe ID.
 * @param productId The product ID of the developer product.
 * @description Updates a developer product with the provided configuration details. 
Note that only fields provided in the request will be updated.
 */
export const patchDeveloperProductsV2UniversesUniverseIdDeveloperProductsProductId = endpoint({
  method: 'PATCH',
  path: '/developer-products/v2/universes/:universeId/developer-products/:productId',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    universeId: {},
    productId: {},
  },
  parameters: {
    universeId: z.number().int(),
    productId: z.number().int(),
  },
  body: DeveloperProducts_UpdateDeveloperProductV2_Body,
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
    {
      status: 409,
      description: `Conflict`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/developer-products/v2/universes/:universeId/developer-products/:productId/creator
 * @summary Get developer product with configuration details
 * @param universeId The universe ID.
 * @param productId The product ID of the developer product.
 */
export const getDeveloperProductsV2UniversesUniverseIdDeveloperProductsProductIdCreator = endpoint({
  method: 'GET',
  path: '/developer-products/v2/universes/:universeId/developer-products/:productId/creator',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    productId: {},
  },
  parameters: {
    universeId: z.number().int(),
    productId: z.number().int(),
  },
  response: DeveloperProductConfigV2,
  errors: [
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/developer-products/v2/universes/:universeId/developer-products/creator
 * @summary List developer products by universe with configuration details
 * @param universeId The universe ID.
 * @param pageSize The number of results to return. Defaults to 50.
 * @param pageToken The cursor token for pagination.
 */
export const getDeveloperProductsV2UniversesUniverseIdDeveloperProductsCreator = endpoint({
  method: 'GET',
  path: '/developer-products/v2/universes/:universeId/developer-products/creator',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    pageSize: {},
    pageToken: {},
  },
  parameters: {
    universeId: z.number().int(),
    pageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: ListDeveloperProductConfigsV2Response,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
