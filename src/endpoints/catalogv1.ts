import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Catalog_Api_BundleItemDetailModel = z.object({
  owned: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
});
const Roblox_Catalog_Api_BundleCreatorModel = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Catalog_Api_PremiumPricingModel = z.object({
  premiumDiscountPercentage: z.number().int(),
  premiumPriceInRobux: z.number().int(),
});
const Roblox_Catalog_Api_BundleProductModel = z.object({
  id: z.number().int(),
  type: z.string(),
  isPublicDomain: z.boolean(),
  isForSale: z.boolean(),
  priceInRobux: z.number().int(),
  isFree: z.boolean(),
  noPriceText: z.string(),
  premiumPricing: Roblox_Catalog_Api_PremiumPricingModel,
});
const Roblox_Catalog_Api_SaleLocation = z.object({
  saleLocationType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
  ]),
  saleLocationTypeId: z.number().int(),
  universeIds: z.array(z.number()),
  enabledUniverseIds: z.array(z.number()),
});
const Roblox_Catalog_Api_CollectibleItemDetail = z.object({
  collectibleItemId: z.string(),
  collectibleProductId: z.string(),
  price: z.number().int(),
  lowestPrice: z.number().int(),
  lowestResalePrice: z.number().int(),
  totalQuantity: z.number().int(),
  unitsAvailable: z.number().int(),
  saleLocation: Roblox_Catalog_Api_SaleLocation,
  hasResellers: z.boolean(),
  saleStatus: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  quantityLimitPerUser: z.number().int(),
  offSaleDeadline: z.string().datetime({ offset: true }),
  collectibleItemType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  lowestAvailableResaleProductId: z.string(),
  lowestAvailableResaleItemInstanceId: z.string(),
  resaleRestriction: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Catalog_Api_BundleDetailsModel = z.object({
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
  collectibleItemDetail: Roblox_Catalog_Api_CollectibleItemDetail,
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_BundleDetailsModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Catalog_Api_BundleDetailsModel),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_BundleDetailsModel_ = z.object({
  data: z.array(Roblox_Catalog_Api_BundleDetailsModel),
});
const Roblox_Catalog_Api_AssetFavoriteModel = z.object({
  assetId: z.number().int(),
  userId: z.number().int(),
  created: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Catalog_Api_BundleFavoriteModel = z.object({
  bundleId: z.number().int(),
  userId: z.number().int(),
  created: z.string().datetime({ offset: true }),
});
const Roblox_Catalog_Api_FavoriteBundlesResponse = z.object({
  favorites: z.array(Roblox_Catalog_Api_BundleDetailsModel),
  moreFavorites: z.boolean(),
  nextCursor: z.string(),
  previousCursor: z.string(),
});
const Roblox_Catalog_Api_OwnedBundleModel = z.object({
  id: z.number().int(),
  name: z.string(),
  bundleType: z.string(),
  creator: Roblox_Catalog_Api_BundleCreatorModel,
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_OwnedBundleModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Catalog_Api_OwnedBundleModel),
});
const Roblox_Catalog_Api_MultigetItemDetailsRequestItem = z.object({
  itemType: z.union([z.literal(1), z.literal(2)]),
  id: z.number().int(),
});
const Roblox_Catalog_Api_MultigetItemDetailsRequestModel = z.object({
  items: z.array(Roblox_Catalog_Api_MultigetItemDetailsRequestItem),
});
const Roblox_Catalog_Api_CatalogSearchDetailedResponseItem = z.object({
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
    z.literal(81),
    z.literal(82),
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
    z.literal(7),
  ]),
  hasResellers: z.boolean(),
  isOffSale: z.boolean(),
  quantityLimitPerUser: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItem_ = z.object({
  data: z.array(Roblox_Catalog_Api_CatalogSearchDetailedResponseItem),
});
const Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_AvatarItem = z.object({
  TargetId: z.number().int(),
  ItemType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Catalog_Api_Topics_TopicRequestModel = z.object({
  items: z.array(Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_AvatarItem),
  selectTopics: z.array(z.string()),
  inputQuery: z.string(),
  maxResult: z.number().int(),
  genderType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Catalog_Api_Topics_TopicModel = z.object({
  displayName: z.string(),
  originalTopicName: z.string(),
});
const Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_Error = z.object({
  Message: z.string(),
  Code: z.number().int(),
});
const Roblox_Catalog_Api_Topics_TopicResponse = z.object({
  topics: z.array(Roblox_Catalog_Api_Topics_TopicModel),
  error: Roblox_Marketplacetopicdiscovery_Topicdiscoveryservice_V1Beta1_Error,
});

/**
 * @api GET https://catalog.roblox.com/v1/asset-to-category
 * @summary Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link 'Get More' button in inventory page to the relevant catalog page.
 */
export const getAssetToCategory = endpoint({
  method: 'get',
  path: '/v1/asset-to-category',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api GET https://catalog.roblox.com/v1/asset-to-subcategory
 * @summary Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link 'Get More' button in inventory page to the relevant catalog page.
 */
export const getAssetToSubcategory = endpoint({
  method: 'get',
  path: '/v1/asset-to-subcategory',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api GET https://catalog.roblox.com/v1/assets/:assetId/bundles
 * @summary Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
 * @param assetId
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getAssetsAssetidBundles = endpoint({
  method: 'get',
  path: '/v1/assets/:assetId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/bundles/:bundleId/details
 * @summary Returns details about the given bundleId.
 * @param bundleId
 */
export const getBundlesBundleidDetails = endpoint({
  method: 'get',
  path: '/v1/bundles/:bundleId/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/bundles/:bundleId/recommendations
 * @summary Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles
- Accepts both public and authenticated users
 * @param bundleId 
 * @param numItems The number of recommended items to return.
 */
export const getBundlesBundleidRecommendations = endpoint({
  method: 'get',
  path: '/v1/bundles/:bundleId/recommendations',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/bundles/details
 * @summary Returns details about the given bundleIds.
 * @param bundleIds
 */
export const getBundlesDetails = endpoint({
  method: 'get',
  path: '/v1/bundles/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api POST https://catalog.roblox.com/v1/catalog/items/details
 * @summary Returns list of item details.
 * @param body Roblox.Catalog.Api.MultigetItemDetailsRequestModel
 */
export const postCatalogItemsDetails = endpoint({
  method: 'post',
  path: '/v1/catalog/items/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
    {
      status: 403,
      description: `0: Token Validation Failed
7: User is unauthorized.`,
    },
    {
      status: 429,
      description: `8: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/categories
 * @summary Lists Category Names and their Ids
 */
export const getCategories = endpoint({
  method: 'get',
  path: '/v1/categories',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/assets/:assetId/count
 * @summary Gets the favorite count for the given asset Id.
 * @param assetId
 */
export const getFavoritesAssetsAssetidCount = endpoint({
  method: 'get',
  path: '/v1/favorites/assets/:assetId/count',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/bundles/:bundleId/count
 * @summary Gets the favorite count for the given bundle Id.
 * @param bundleId
 */
export const getFavoritesBundlesBundleidCount = endpoint({
  method: 'get',
  path: '/v1/favorites/bundles/:bundleId/count',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/users/:userId/assets/:assetId/favorite
 * @summary Gets the favorite model for the asset and user.
 * @param userId
 * @param assetId
 */
export const getFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'get',
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://catalog.roblox.com/v1/favorites/users/:userId/assets/:assetId/favorite
 * @summary Create a favorite for an asset by the authenticated user.
 * @param userId
 * @param assetId
 */
export const postFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'post',
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset Id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
    },
    {
      status: 409,
      description: `3: Asset is already favorited.`,
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
    },
  ],
});
/**
 * @api DELETE https://catalog.roblox.com/v1/favorites/users/:userId/assets/:assetId/favorite
 * @summary Delete a favorite for an asset by the authenticated user.
 * @param userId
 * @param assetId
 */
export const deleteFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'delete',
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset Id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
    },
    {
      status: 409,
      description: `4: Asset is already not favorited.`,
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/users/:userId/bundles/:bundleId/favorite
 * @summary Gets the favorite model for the bundle and user.
 * @param userId
 * @param bundleId
 */
export const getFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'get',
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://catalog.roblox.com/v1/favorites/users/:userId/bundles/:bundleId/favorite
 * @summary Create a favorite for the bundle by the authenticated user.
 * @param userId
 * @param bundleId
 */
export const postFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'post',
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid bundle Id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
    },
    {
      status: 409,
      description: `3: Bundle is already favorited.`,
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
    },
  ],
});
/**
 * @api DELETE https://catalog.roblox.com/v1/favorites/users/:userId/bundles/:bundleId/favorite
 * @summary Delete favorite for the bundle by the authenticated user.
 * @param userId
 * @param bundleId
 */
export const deleteFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'delete',
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid bundle Id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to perform this action.`,
    },
    {
      status: 409,
      description: `4: Bundle is already not favorited.`,
    },
    {
      status: 429,
      description: `5: This action was floodchecked. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/users/:userId/favorites/:subtypeId/bundles
 * @summary Lists the bundles favorited by a given user with the given bundle subtypeId.
After 5/31/2024, only cursor based pagination will be supported.
 * @param userId 
 * @param subtypeId 
 * @param pageNumber 
 * @param itemsPerPage 
 * @param cursor 
 * @param isPrevious 
 */
export const getFavoritesUsersUseridFavoritesSubtypeidBundles = endpoint({
  method: 'get',
  path: '/v1/favorites/users/:userId/favorites/:subtypeId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    cursor: {
      style: 'form',
      explode: true,
    },
    isPrevious: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    subtypeId: z.number().int(),
    pageNumber: z.number().int().optional().default(1),
    itemsPerPage: z.number().int().optional().default(24),
    cursor: z.string().optional(),
    isPrevious: z.boolean().optional(),
  },
  response: Roblox_Catalog_Api_FavoriteBundlesResponse,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
3: Cannot request so many bundles at once.
9: Invalid pagination request. Please provide only pageNumber or cursor, not both.
10: Invalid previous pagination request. Please provide a cursor when isPrevious is true`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `6: You are not authorized to perform this action.
8: Invalid page number`,
    },
    {
      status: 500,
      description: `11: Internal server error. Please check if you have provided correct pagination cursor`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/subcategories
 * @summary Lists Subcategory Names and their Ids
 */
export const getSubcategories = endpoint({
  method: 'get',
  path: '/v1/subcategories',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.record(z.number().int()),
  errors: [],
});
/**
 * @api POST https://catalog.roblox.com/v1/topic/get-topics
 * @param body
 */
export const postTopicGetTopics = endpoint({
  method: 'post',
  path: '/v1/topic/get-topics',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/users/:userId/bundles
 * @summary Lists the bundles owned by a given user.
 * @param userId
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by bundle
 */
export const getUsersUseridBundles = endpoint({
  method: 'get',
  path: '/v1/users/:userId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/users/:userId/bundles/:bundleType
 * @param userId
 * @param bundleType
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersUseridBundlesBundletype = endpoint({
  method: 'get',
  path: '/v1/users/:userId/bundles/:bundleType',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
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
