import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Catalog_Api_BundleItemDetailModel = z
  .object({
    owned: z.boolean(),
    id: z.number().int(),
    name: z.string(),
    type: z.string(),
  })
  .passthrough();
const Roblox_Catalog_Api_BundleCreatorModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    type: z.string(),
    hasVerifiedBadge: z.boolean(),
  })
  .passthrough();
const Roblox_Catalog_Api_PremiumPricingModel = z
  .object({
    premiumDiscountPercentage: z.number().int(),
    premiumPriceInRobux: z.number().int(),
  })
  .passthrough();
const Roblox_Catalog_Api_BundleProductModel = z
  .object({
    id: z.number().int(),
    type: z.string(),
    isPublicDomain: z.boolean(),
    isForSale: z.boolean(),
    priceInRobux: z.number().int(),
    isFree: z.boolean(),
    noPriceText: z.string(),
    premiumPricing: Roblox_Catalog_Api_PremiumPricingModel,
  })
  .passthrough();
const Roblox_Catalog_Api_BundleDetailsModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    bundleType: z.string(),
    items: z.array(Roblox_Catalog_Api_BundleItemDetailModel),
    creator: Roblox_Catalog_Api_BundleCreatorModel,
    product: Roblox_Catalog_Api_BundleProductModel,
    itemRestrictions: z.array(
      z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
        z.literal(9),
      ]),
    ),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_BundleDetailsModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Catalog_Api_BundleDetailsModel),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_BundleDetailsModel_ = z
  .object({ data: z.array(Roblox_Catalog_Api_BundleDetailsModel) })
  .passthrough();
const Roblox_Catalog_Api_AssetFavoriteModel = z
  .object({
    assetId: z.number().int(),
    userId: z.number().int(),
    created: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Catalog_Api_BundleFavoriteModel = z
  .object({
    bundleId: z.number().int(),
    userId: z.number().int(),
    created: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Catalog_Api_FavoriteBundlesResponse = z
  .object({
    favorites: z.array(Roblox_Catalog_Api_BundleDetailsModel),
    moreFavorites: z.boolean(),
  })
  .passthrough();
const Roblox_Catalog_Api_OwnedBundleModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    bundleType: z.string(),
    creator: Roblox_Catalog_Api_BundleCreatorModel,
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_OwnedBundleModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Catalog_Api_OwnedBundleModel),
  })
  .passthrough();
const Roblox_Catalog_Api_MultigetItemDetailsRequestItem = z
  .object({
    itemType: z.union([z.literal(1), z.literal(2)]),
    id: z.number().int(),
  })
  .passthrough();
const Roblox_Catalog_Api_MultigetItemDetailsRequestModel = z
  .object({ items: z.array(Roblox_Catalog_Api_MultigetItemDetailsRequestItem) })
  .passthrough();
const Roblox_Catalog_Api_CatalogSearchDetailedResponseItem = z
  .object({
    id: z.number().int(),
    itemType: z.union([z.literal(1), z.literal(2)]),
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
    bundleType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    name: z.string(),
    description: z.string(),
    productId: z.number().int(),
    genres: z.array(
      z.union([
        z.literal(0),
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
        z.literal(14),
      ]),
    ),
    bundledItems: z.array(Roblox_Catalog_Api_BundleItemDetailModel),
    itemStatus: z.array(z.union([z.literal(1), z.literal(2), z.literal(7)])),
    itemRestrictions: z.array(
      z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
        z.literal(9),
      ]),
    ),
    creatorHasVerifiedBadge: z.boolean(),
    creatorType: z.union([z.literal(1), z.literal(2)]),
    creatorTargetId: z.number().int(),
    creatorName: z.string(),
    price: z.number().int(),
    premiumPricing: Roblox_Catalog_Api_PremiumPricingModel,
    lowestPrice: z.number().int(),
    lowestResalePrice: z.number().int(),
    priceStatus: z.string(),
    unitsAvailableForConsumption: z.number().int(),
    purchaseCount: z.number().int(),
    favoriteCount: z.number().int(),
    offSaleDeadline: z.string().datetime({ offset: true }),
    collectibleItemId: z.string(),
    totalQuantity: z.number().int(),
    saleLocationType: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
    ]),
    hasResellers: z.boolean(),
    isOffSale: z.boolean(),
    quantityLimitPerUser: z.number().int(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItem_ = z
  .object({
    data: z.array(Roblox_Catalog_Api_CatalogSearchDetailedResponseItem),
  })
  .passthrough();
const Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_AvatarItem = z
  .object({
    TargetId: z.number().int(),
    ItemType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  })
  .passthrough();
const Roblox_Catalog_Api_Topics_TopicRequestModel = z
  .object({
    items: z.array(Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_AvatarItem),
    selectTopics: z.array(z.string()),
    inputQuery: z.string(),
    maxResult: z.number().int(),
    genderType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  })
  .passthrough();
const Roblox_Catalog_Api_Topics_TopicModel = z
  .object({ displayName: z.string(), originalTopicName: z.string() })
  .passthrough();
const Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_Error = z
  .object({ Message: z.string(), Code: z.number().int() })
  .passthrough();
const Roblox_Catalog_Api_Topics_TopicResponse = z
  .object({
    topics: z.array(Roblox_Catalog_Api_Topics_TopicModel),
    error: Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_Error,
  })
  .passthrough();

const schemas = {
  Roblox_Catalog_Api_BundleItemDetailModel,
  Roblox_Catalog_Api_BundleCreatorModel,
  Roblox_Catalog_Api_PremiumPricingModel,
  Roblox_Catalog_Api_BundleProductModel,
  Roblox_Catalog_Api_BundleDetailsModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_BundleDetailsModel_,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_BundleDetailsModel_,
  Roblox_Catalog_Api_AssetFavoriteModel,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Catalog_Api_BundleFavoriteModel,
  Roblox_Catalog_Api_FavoriteBundlesResponse,
  Roblox_Catalog_Api_OwnedBundleModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_OwnedBundleModel_,
  Roblox_Catalog_Api_MultigetItemDetailsRequestItem,
  Roblox_Catalog_Api_MultigetItemDetailsRequestModel,
  Roblox_Catalog_Api_CatalogSearchDetailedResponseItem,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItem_,
  Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_AvatarItem,
  Roblox_Catalog_Api_Topics_TopicRequestModel,
  Roblox_Catalog_Api_Topics_TopicModel,
  Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_Error,
  Roblox_Catalog_Api_Topics_TopicResponse,
};

/**
 * @api get https://catalog.roblox.com/v1/asset-to-category
 */
export const getAssetToCategory = endpoint({
  method: 'get' as const,
  path: '/v1/asset-to-category',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api get https://catalog.roblox.com/v1/asset-to-subcategory
 */
export const getAssetToSubcategory = endpoint({
  method: 'get' as const,
  path: '/v1/asset-to-subcategory',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api get https://catalog.roblox.com/v1/assets/:assetId/bundles
 * @param assetId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getAssetsAssetidBundles = endpoint({
  method: 'get' as const,
  path: '/v1/assets/:assetId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_BundleDetailsModel_,
  errors: [
    {
      status: 400,
      description: `1: Invalid assetId
4: Invalid Cursor.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/bundles/:bundleId/details
 * @param bundleId
 */
export const getBundlesBundleidDetails = endpoint({
  method: 'get' as const,
  path: '/v1/bundles/:bundleId/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    bundleId: {
      style: 'simple',
    },
  },
  parameters: {
    bundleId: z.number().int(),
  },
  response: Roblox_Catalog_Api_BundleDetailsModel,
  errors: [
    {
      status: 400,
      description: `1: Invalid bundle`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/bundles/:bundleId/recommendations
 * @param bundleId
 * @param numItems
 */
export const getBundlesBundleidRecommendations = endpoint({
  method: 'get' as const,
  path: '/v1/bundles/:bundleId/recommendations',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    bundleId: {
      style: 'simple',
    },
    numItems: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    bundleId: z.number().int(),
    numItems: z.number().int().optional().default(20),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_BundleDetailsModel_,
  errors: [
    {
      status: 400,
      description: `1: Invalid bundle
2: Error retrieving bundles
3: Error getting bundle recommendations
4: NumItems exceed maximum`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://catalog.roblox.com/v1/bundles/:bundleId/unpack
 * @param bundleId
 */
export const postBundlesBundleidUnpack = endpoint({
  method: 'post' as const,
  path: '/v1/bundles/:bundleId/unpack',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    bundleId: {
      style: 'simple',
    },
  },
  parameters: {
    bundleId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `1: Invalid bundle
2: Bundle is not owned`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/bundles/details
 * @param bundleIds
 */
export const getBundlesDetails = endpoint({
  method: 'get' as const,
  path: '/v1/bundles/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    bundleIds: {
      style: 'form',
    },
  },
  parameters: {
    bundleIds: z.array(z.number()),
  },
  response: z.array(Roblox_Catalog_Api_BundleDetailsModel),
  errors: [
    {
      status: 400,
      description: `2: Invalid collection of bundleIds
3: Cannot request so many bundles at once.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://catalog.roblox.com/v1/catalog/items/details
 * @param body Roblox.Catalog.Api.MultigetItemDetailsRequestModel
 */
export const postCatalogItemsDetails = endpoint({
  method: 'post' as const,
  path: '/v1/catalog/items/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Catalog_Api_MultigetItemDetailsRequestModel,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItem_,
  errors: [
    {
      status: 400,
      description: `2: Invalid count`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
7: User is unauthorized.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `8: The flood limit has been exceeded.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/categories
 */
export const getCategories = endpoint({
  method: 'get' as const,
  path: '/v1/categories',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api get https://catalog.roblox.com/v1/favorites/assets/:assetId/count
 * @param assetId
 */
export const getFavoritesAssetsAssetidCount = endpoint({
  method: 'get' as const,
  path: '/v1/favorites/assets/:assetId/count',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: z.number().int(),
  errors: [
    {
      status: 400,
      description: `2: Invalid asset Id.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/favorites/bundles/:bundleId/count
 * @param bundleId
 */
export const getFavoritesBundlesBundleidCount = endpoint({
  method: 'get' as const,
  path: '/v1/favorites/bundles/:bundleId/count',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    bundleId: {
      style: 'simple',
    },
  },
  parameters: {
    bundleId: z.number().int(),
  },
  response: z.number().int(),
  errors: [
    {
      status: 400,
      description: `2: Invalid bundle Id.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/favorites/users/:userId/assets/:assetId/favorite
 * @param userId
 * @param assetId
 */
export const getFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'get' as const,
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    assetId: z.number().int(),
  },
  response: Roblox_Catalog_Api_AssetFavoriteModel,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://catalog.roblox.com/v1/favorites/users/:userId/assets/:assetId/favorite
 * @param userId
 * @param assetId
 */
export const postFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'post' as const,
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    assetId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `3: Asset is already favorited.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api delete https://catalog.roblox.com/v1/favorites/users/:userId/assets/:assetId/favorite
 * @param userId
 * @param assetId
 */
export const deleteFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'delete' as const,
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    assetId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `4: Asset is already not favorited.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/favorites/users/:userId/bundles/:bundleId/favorite
 * @param userId
 * @param bundleId
 */
export const getFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'get' as const,
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    bundleId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    bundleId: z.number().int(),
  },
  response: Roblox_Catalog_Api_BundleFavoriteModel,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid bundle Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://catalog.roblox.com/v1/favorites/users/:userId/bundles/:bundleId/favorite
 * @param userId
 * @param bundleId
 */
export const postFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'post' as const,
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    bundleId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    bundleId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid bundle Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `3: Bundle is already favorited.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api delete https://catalog.roblox.com/v1/favorites/users/:userId/bundles/:bundleId/favorite
 * @param userId
 * @param bundleId
 */
export const deleteFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'delete' as const,
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    bundleId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    bundleId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid bundle Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `4: Bundle is already not favorited.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/favorites/users/:userId/favorites/:subtypeId/bundles
 * @param userId
 * @param subtypeId
 * @param pageNumber
 * @param itemsPerPage
 */
export const getFavoritesUsersUseridFavoritesSubtypeidBundles = endpoint({
  method: 'get' as const,
  path: '/v1/favorites/users/:userId/favorites/:subtypeId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    subtypeId: {
      style: 'simple',
    },
    pageNumber: {
      style: 'form',
      explode: true,
    },
    itemsPerPage: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    subtypeId: z.number().int(),
    pageNumber: z.number().int().optional().default(1),
    itemsPerPage: z.number().int().optional().default(24),
  },
  response: Roblox_Catalog_Api_FavoriteBundlesResponse,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `6: You are not authorized to perform this action.
8: Invalid page number`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/subcategories
 */
export const getSubcategories = endpoint({
  method: 'get' as const,
  path: '/v1/subcategories',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api post https://catalog.roblox.com/v1/topic/get-topics
 * @param body
 */
export const postTopicGetTopics = endpoint({
  method: 'post' as const,
  path: '/v1/topic/get-topics',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Catalog_Api_Topics_TopicRequestModel,
  response: Roblox_Catalog_Api_Topics_TopicResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/users/:userId/bundles
 * @param userId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersUseridBundles = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_OwnedBundleModel_,
  errors: [
    {
      status: 400,
      description: `1: Invalid bundle`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://catalog.roblox.com/v1/users/:userId/bundles/:bundleType
 * @param userId
 * @param bundleType
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersUseridBundlesBundletype = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/bundles/:bundleType',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    bundleType: {
      style: 'simple',
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    bundleType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Desc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_OwnedBundleModel_,
  errors: [],
});
