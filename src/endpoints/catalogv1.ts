import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Catalog_Api_BundleItemDetailModel = z.object({
  owned: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  supportsHeadShapes: z.boolean(),
  assetType: z.number().int(),
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
  universeIds: z.array(z.number().int()),
  enabledUniverseIds: z.array(z.number().int()),
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
  isRecolorable: z.boolean(),
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
const Roblox_Catalog_Api_SubcategoryModel = z.object({
  subcategory: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(9),
    z.literal(10),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
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
    z.literal(57),
    z.literal(58),
    z.literal(59),
    z.literal(60),
    z.literal(61),
    z.literal(62),
    z.literal(63),
    z.literal(64),
    z.literal(65),
    z.literal(66),
    z.literal(67),
  ]),
  taxonomy: z.string(),
  assetTypeIds: z.array(z.number().int()),
  bundleTypeIds: z.array(z.number().int()),
  subcategoryId: z.number().int(),
  name: z.string(),
  shortName: z.string(),
});
const Roblox_Catalog_Api_CategoryModel = z.object({
  category: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
  ]),
  taxonomy: z.string(),
  assetTypeIds: z.array(z.number().int()),
  bundleTypeIds: z.array(z.number().int()),
  categoryId: z.number().int(),
  name: z.string(),
  orderIndex: z.number().int(),
  subcategories: z.array(Roblox_Catalog_Api_SubcategoryModel),
  isSearchable: z.boolean(),
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
const Roblox_Catalog_Api_TimedOption = z.object({
  days: z.number().int(),
  price: z.number().int(),
  selected: z.boolean(),
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
    z.literal(83),
    z.literal(84),
    z.literal(85),
    z.literal(86),
    z.literal(87),
    z.literal(88),
    z.literal(89),
    z.literal(90),
  ]),
  bundleType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  isRecolorable: z.boolean(),
  name: z.string(),
  description: z.string(),
  productId: z.number().int(),
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
  creatorType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  creatorTargetId: z.number().int(),
  creatorName: z.string(),
  price: z.number().int(),
  lowestPrice: z.number().int(),
  lowestResalePrice: z.number().int(),
  priceStatus: z.string(),
  unitsAvailableForConsumption: z.number().int(),
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
  supportsHeadShapes: z.boolean(),
  timedOptions: z.array(Roblox_Catalog_Api_TimedOption),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItem_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Catalog_Api_CatalogSearchDetailedResponseItem),
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
const Roblox_Catalog_Api_BundleItemDetailModelV2 = z.object({
  owned: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  supportsHeadShapes: z.boolean(),
  assetType: z.number().int(),
});
const Roblox_Catalog_Api_TaxonomyModel = z.object({
  taxonomyId: z.string(),
  taxonomyName: z.string(),
});
const Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2 = z.object({
  bundledItems: z.array(Roblox_Catalog_Api_BundleItemDetailModelV2),
  taxonomy: z.array(Roblox_Catalog_Api_TaxonomyModel),
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
    z.literal(83),
    z.literal(84),
    z.literal(85),
    z.literal(86),
    z.literal(87),
    z.literal(88),
    z.literal(89),
    z.literal(90),
  ]),
  bundleType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  isRecolorable: z.boolean(),
  name: z.string(),
  description: z.string(),
  productId: z.number().int(),
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
  creatorType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  creatorTargetId: z.number().int(),
  creatorName: z.string(),
  price: z.number().int(),
  lowestPrice: z.number().int(),
  lowestResalePrice: z.number().int(),
  priceStatus: z.string(),
  unitsAvailableForConsumption: z.number().int(),
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
  supportsHeadShapes: z.boolean(),
  timedOptions: z.array(Roblox_Catalog_Api_TimedOption),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2_ = z.object({
  data: z.array(Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2),
});
const Roblox_MarketplaceTopicDiscovery_TopicDiscoveryService_V1Beta1_AvatarItem = z.object({
  TargetId: z.number().int(),
  ItemType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Catalog_Api_TopicRequestModel = z.object({
  items: z.array(Roblox_MarketplaceTopicDiscovery_TopicDiscoveryService_V1Beta1_AvatarItem),
  selectTopics: z.array(z.string()),
  inputQuery: z.string(),
  maxResult: z.number().int(),
  genderType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Catalog_Api_TopicModel = z.object({
  displayName: z.string(),
  originalTopicName: z.string(),
});
const Roblox_MarketplaceTopicDiscovery_TopicDiscoveryService_V1Beta1_Error = z.object({
  Message: z.string(),
  Code: z.number().int(),
});
const Roblox_Catalog_Api_TopicResponse = z.object({
  topics: z.array(Roblox_Catalog_Api_TopicModel),
  error: Roblox_MarketplaceTopicDiscovery_TopicDiscoveryService_V1Beta1_Error,
});

/**
 * @api GET https://catalog.roblox.com/v1/asset-to-category
 */
export const getAssetToCategory = endpoint({
  method: 'GET',
  path: '/v1/asset-to-category',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.number().int(),
  errors: [],
});
/**
 * @api GET https://catalog.roblox.com/v1/asset-to-subcategory
 */
export const getAssetToSubcategory = endpoint({
  method: 'GET',
  path: '/v1/asset-to-subcategory',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.number().int(),
  errors: [],
});
/**
 * @api GET https://catalog.roblox.com/v1/assets/:assetId/bundles
 * @param assetId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getAssetsAssetidBundles = endpoint({
  method: 'GET',
  path: '/v1/assets/:assetId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
    limit: {},
    cursor: {},
    sortOrder: {},
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
 * @param bundleId
 */
export const getBundlesBundleidDetails = endpoint({
  method: 'GET',
  path: '/v1/bundles/:bundleId/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    bundleId: {},
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
 * @param bundleId
 * @param numItems
 */
export const getBundlesBundleidRecommendations = endpoint({
  method: 'GET',
  path: '/v1/bundles/:bundleId/recommendations',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    bundleId: {},
    numItems: {},
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
 * @param bundleIds
 */
export const getBundlesDetails = endpoint({
  method: 'GET',
  path: '/v1/bundles/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    bundleIds: {},
  },
  parameters: {
    bundleIds: z.array(z.number().int()),
  },
  response: z.array(Roblox_Catalog_Api_BundleDetailsModel),
  errors: [
    {
      status: 400,
      description: `3: Cannot request so many bundles at once.`,
    },
  ],
});
/**
 * @api POST https://catalog.roblox.com/v1/catalog/items/details
 * @param body Roblox.Catalog.Api.MultigetItemDetailsRequestModel.
 */
export const postCatalogItemsDetails = endpoint({
  method: 'POST',
  path: '/v1/catalog/items/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Catalog_Api_MultigetItemDetailsRequestModel,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2_,
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
 */
export const getCategories = endpoint({
  method: 'GET',
  path: '/v1/categories',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.array(Roblox_Catalog_Api_CategoryModel),
  errors: [],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/assets/:assetId/count
 * @param assetId
 */
export const getFavoritesAssetsAssetidCount = endpoint({
  method: 'GET',
  path: '/v1/favorites/assets/:assetId/count',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {},
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
 * @param bundleId
 */
export const getFavoritesBundlesBundleidCount = endpoint({
  method: 'GET',
  path: '/v1/favorites/bundles/:bundleId/count',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    bundleId: {},
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
 * @param userId
 * @param assetId
 */
export const getFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'GET',
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    assetId: {},
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
 * @param userId
 * @param assetId
 */
export const postFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'POST',
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    assetId: {},
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
 * @param userId
 * @param assetId
 */
export const deleteFavoritesUsersUseridAssetsAssetidFavorite = endpoint({
  method: 'DELETE',
  path: '/v1/favorites/users/:userId/assets/:assetId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    assetId: {},
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
 * @param userId
 * @param bundleId
 */
export const getFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'GET',
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    bundleId: {},
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
 * @param userId
 * @param bundleId
 */
export const postFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'POST',
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    bundleId: {},
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
 * @param userId
 * @param bundleId
 */
export const deleteFavoritesUsersUseridBundlesBundleidFavorite = endpoint({
  method: 'DELETE',
  path: '/v1/favorites/users/:userId/bundles/:bundleId/favorite',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    bundleId: {},
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
 * @api GET https://catalog.roblox.com/v1/favorites/users/:userId/favorites/:assetTypeId/assets
 * @param userId
 * @param assetTypeId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getFavoritesUsersUseridFavoritesAssettypeidAssets = endpoint({
  method: 'GET',
  path: '/v1/favorites/users/:userId/favorites/:assetTypeId/assets',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    assetTypeId: {},
    limit: {},
    cursor: {},
    sortOrder: {},
  },
  parameters: {
    userId: z.number().int(),
    assetTypeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(18), z.literal(24), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Desc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItem_,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
8: Ascending order is not allowed.
11: Invalid asset type id.`,
    },
    {
      status: 500,
      description: `99: Internal server error.`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/favorites/users/:userId/favorites/:subtypeId/bundles
 * @param userId
 * @param subtypeId
 * @param itemsPerPage
 * @param cursor
 * @param isPrevious
 */
export const getFavoritesUsersUseridFavoritesSubtypeidBundles = endpoint({
  method: 'GET',
  path: '/v1/favorites/users/:userId/favorites/:subtypeId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    subtypeId: {},
    itemsPerPage: {},
    cursor: {},
    isPrevious: {},
  },
  parameters: {
    userId: z.number().int(),
    subtypeId: z.number().int(),
    itemsPerPage: z.number().int().optional().default(24),
    cursor: z.string().optional(),
    isPrevious: z.boolean().optional().default(false),
  },
  response: Roblox_Catalog_Api_FavoriteBundlesResponse,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
3: Cannot request so many bundles at once.
10: Invalid previous pagination request. Please provide a cursor when isPrevious is true`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `6: You are not authorized to perform this action.`,
    },
    {
      status: 500,
      description: `11: Internal server error. Please check if you have provided correct pagination cursor`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/subcategories
 */
export const getSubcategories = endpoint({
  method: 'GET',
  path: '/v1/subcategories',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  response: z.number().int(),
  errors: [],
});
/**
 * @api POST https://catalog.roblox.com/v1/topic/get-topics
 * @param body
 */
export const postTopicGetTopics = endpoint({
  method: 'POST',
  path: '/v1/topic/get-topics',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Catalog_Api_TopicRequestModel,
  response: Roblox_Catalog_Api_TopicResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://catalog.roblox.com/v1/users/:userId/bundles
 * @param userId
 * @param cursor
 * @param limit
 * @param sortOrder
 */
export const getUsersUseridBundles = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/bundles',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    cursor: {},
    limit: {},
    sortOrder: {},
  },
  parameters: {
    userId: z.number().int(),
    cursor: z.string().optional(),
    limit: z.number().int().optional().default(10),
    sortOrder: z
      .union([z.literal(1), z.literal(2)])
      .optional()
      .default(2),
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
 * @param cursor
 * @param limit
 * @param sortOrder
 */
export const getUsersUseridBundlesBundletype = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/bundles/:bundleType',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    bundleType: {},
    cursor: {},
    limit: {},
    sortOrder: {},
  },
  parameters: {
    userId: z.number().int(),
    bundleType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    cursor: z.string(),
    limit: z.number().int().optional().default(10),
    sortOrder: z
      .union([z.literal(1), z.literal(2)])
      .optional()
      .default(2),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Catalog_Api_OwnedBundleModel_,
  errors: [],
});
