import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Catalog_Api_ElasticsearchDebugInfo = z.object({
  elasticsearchQuery: z.string(),
  isFromCache: z.boolean(),
  indexName: z.string(),
  isTerminatedEarly: z.boolean(),
  isForceTerminationEnabledByRequest: z.boolean(),
  searchResultDataSource: z.string(),
  searchResultRelevanceScore: z.string(),
  searchResultEngagementScore: z.string(),
});
const Roblox_Catalog_Api_BundleItemDetailModelV2 = z.object({
  assetType: z.number().int(),
  owned: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
});
const Roblox_Catalog_Api_TimedOption = z.object({
  days: z.number().int(),
  price: z.number().int(),
  selected: z.boolean(),
});
const Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2 = z.object({
  bundledItems: z.array(Roblox_Catalog_Api_BundleItemDetailModelV2),
  timedOptions: z.array(Roblox_Catalog_Api_TimedOption),
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
});
const Roblox_Catalog_Api_CatalogSearchPageResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2_ = z.object({
  keyword: z.string(),
  elasticsearchDebugInfo: Roblox_Catalog_Api_ElasticsearchDebugInfo,
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2),
});

/**
 * @api GET https://catalog.roblox.com/v2/search/items/details
 * @summary Search for catalog items.
 * @param Taxonomy
 * @param AssetTypeIds
 * @param BundleTypeIds
 * @param CategoryFilter
 * @param SortAggregation
 * @param SortType
 * @param CreatorType
 * @param CreatorTargetId
 * @param CreatorName
 * @param MaxPrice
 * @param MinPrice
 * @param Keyword
 * @param IncludeNotForSale
 * @param TriggeredByTopicDiscovery
 * @param SalesTypeFilter
 * @param Topics The input topics format is split by ",". E.g "topics=cat,hat,red".
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @description This endpoint is for search by item type ids.
 */
export const getSearchItemsDetails = endpoint({
  method: 'GET',
  path: '/v2/search/items/details',
  baseUrl: 'https://catalog.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Taxonomy: {
      style: 'form',
      explode: true,
    },
    AssetTypeIds: {
      style: 'form',
      explode: true,
    },
    BundleTypeIds: {
      style: 'form',
      explode: true,
    },
    CategoryFilter: {
      style: 'form',
      explode: true,
    },
    SortAggregation: {
      style: 'form',
      explode: true,
    },
    SortType: {
      style: 'form',
      explode: true,
    },
    CreatorType: {
      style: 'form',
      explode: true,
    },
    CreatorTargetId: {
      style: 'form',
      explode: true,
    },
    CreatorName: {
      style: 'form',
      explode: true,
    },
    MaxPrice: {
      style: 'form',
      explode: true,
    },
    MinPrice: {
      style: 'form',
      explode: true,
    },
    Keyword: {
      style: 'form',
      explode: true,
    },
    IncludeNotForSale: {
      style: 'form',
      explode: true,
    },
    TriggeredByTopicDiscovery: {
      style: 'form',
      explode: true,
    },
    SalesTypeFilter: {
      style: 'form',
      explode: true,
    },
    Topics: {
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
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    Taxonomy: z.string(),
    AssetTypeIds: z.array(z.number()),
    BundleTypeIds: z.array(z.number()),
    CategoryFilter: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
    ]),
    SortAggregation: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
    SortType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
    CreatorType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    CreatorTargetId: z.number().int(),
    CreatorName: z.string(),
    MaxPrice: z.number().int(),
    MinPrice: z.number().int(),
    Keyword: z.string(),
    IncludeNotForSale: z.boolean(),
    TriggeredByTopicDiscovery: z.boolean(),
    SalesTypeFilter: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    Topics: z.string(),
    limit: z
      .union([z.literal(10), z.literal(28), z.literal(30), z.literal(60), z.literal(120)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.literal('Desc').optional().default('Desc'),
  },
  response: Roblox_Catalog_Api_CatalogSearchPageResponse_Roblox_Catalog_Api_CatalogSearchDetailedResponseItemV2_,
  errors: [
    {
      status: 400,
      description: `1: Category subcategory selection not supported.
2: Creator id not found.
3: Creator type not found or cannot search by CreatorTargetId with CreatorType.All
4: Genre not found.
5: Sort combination not supported.
6: Invalid price range.
10: StartRequest is invalid.`,
    },
    {
      status: 403,
      description: `7: User is unauthorized.
22: In-experience search is denied for this place or universe.`,
    },
    {
      status: 429,
      description: `8: The flood limit has been exceeded.
8: The flood limit has been exceeded.`,
    },
    {
      status: 503,
      description: `18: Search request timed out`,
    },
  ],
});
