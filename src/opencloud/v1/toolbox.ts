import { z } from 'zod';
import { endpoint } from '../..';

type SubcategoryModel = Partial<{
  name: string | null;
  displayName: string | null;
  hidden: boolean;
  searchKeywords: string | null;
  queryParams: SubcategoryQueryParams;
  path: Array<string> | null;
  index: number;
  children: {};
  childCount: number;
  thumbnail: SubcategoryThumbnail;
  categoryPath: string | null;
}>;
type SubcategoryQueryParams = Partial<{
  keyword: string | null;
  assetSubTypes: Array<AssetSubType> | null;
  creatorTargetId: number | null;
  creatorType: CreatorType;
  excludeAssetSubTypes: Array<AssetSubType> | null;
  audioTypes: Array<AudioType> | null;
  uiSortIntent: UiSortIntent;
  sortDirection: SortDirection;
  musicChartType: MusicChartType;
  categoryPath: string | null;
}>;
type AssetSubType = 'Invalid' | 'Ad' | 'MaterialPack' | 'Package';
type CreatorType = 1 | 2 | 3;
type AudioType = 0 | 1 | 2;
type UiSortIntent = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
type SortDirection = 'None' | 'Ascending' | 'Descending';
type MusicChartType = 'None' | 'Current' | 'Week' | 'Month' | 'Year';
type SubcategoryThumbnail = Partial<{
  assetId: number;
  backgroundColor: string | null;
}>;

const SearchCategoryType = z.enum(['Audio', 'Model', 'Decal', 'Plugin', 'MeshPart', 'Video', 'FontFamily']);
const searchCategoryType = SearchCategoryType;
const ModelSubType = z.enum(['Ad', 'MaterialPack', 'Package']);
const SortDirection = z.enum(['None', 'Ascending', 'Descending']);
const sortDirection = SortDirection.optional().default('None');
const SortCategory = z.enum(['Relevance', 'Trending', 'Top', 'AudioDuration', 'CreateTime', 'UpdatedTime', 'Ratings']);
const sortCategory = SortCategory.optional().default('Relevance');
const SearchAudioTypeModel = z.enum(['Music', 'SoundEffect']);
const ModelInstanceType = z.enum(['Script', 'MeshPart', 'Decal', 'Animation', 'Audio', 'Tool']);
const SearchView = z.enum(['IDs', 'Core', 'Full']);
const searchView = SearchView.optional().default('Core');
const MusicChartType = z.enum(['None', 'Current', 'Week', 'Month', 'Year']);
const musicChartType = MusicChartType.optional().default('None');
const QueryFacets = z.object({
  appliedFacets: z.array(z.string()).nullable(),
  availableFacets: z.array(z.string()).nullable(),
});
const VotingModel = z.object({
  showVotes: z.boolean(),
  upVotes: z.number().int(),
  downVotes: z.number().int(),
  canVote: z.boolean(),
  userVote: z.boolean().nullable(),
  hasVoted: z.boolean(),
  voteCount: z.number().int(),
  upVotePercent: z.number().int(),
});
const CreatorModelV2 = z.object({
  creator: z.string().nullable(),
  userId: z.number().int().nullable(),
  groupId: z.number().int().nullable(),
  name: z.string().nullable(),
  verified: z.boolean().nullable(),
});
const Decimal = z.object({
  significand: z.number().int(),
  exponent: z.number().int(),
});
const Money = z.object({
  currencyCode: z.string().nullable(),
  quantity: Decimal.nullable(),
});
const CreatorStoreProduct = z.object({
  purchasePrice: Money.nullable(),
  purchasable: z.boolean(),
});
const LinkType = z.union([
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
]);
const SocialLinkModel = z.object({
  linkType: LinkType,
  url: z.string().nullable(),
  title: z.string().nullable(),
});
const PreviewAssetsModel = z.object({
  imagePreviewAssets: z.array(z.number().int()).nullable(),
  videoPreviewAssets: z.array(z.number().int()).nullable(),
});
const Asset = z.object({
  id: z.number().int(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  assetTypeId: z.number().int().nullable(),
  socialLinks: z.array(SocialLinkModel).nullable(),
  previewAssets: PreviewAssetsModel.nullable(),
  createTime: z.string().datetime({ offset: true }).nullable(),
  updateTime: z.string().datetime({ offset: true }).nullable(),
  categoryPath: z.string().nullable(),
});
const Audio = Asset;
const Decal = Asset;
const MeshPart = Asset;
const Model = Asset;
const Music = Audio;
const Plugin = Asset;
const SoundEffect = Audio;
const CreatorStoreAsset = z.object({
  voting: VotingModel.nullable(),
  creator: CreatorModelV2.nullable(),
  creatorStoreProduct: CreatorStoreProduct.nullable(),
  asset: z.union([Asset, Audio, Decal, MeshPart, Model, Music, Plugin, SoundEffect]).nullable(),
});
const SearchCreatorStoreAssetsResponse = z.object({
  nextPageToken: z.string().nullable(),
  queryFacets: QueryFacets.nullable(),
  creatorStoreAssets: z.array(CreatorStoreAsset).nullable(),
  totalResults: z.number().int(),
  filteredKeyword: z.string().nullable(),
});
const ProblemDetails = z.unknown().nullable();
const HttpValidationProblemDetails = ProblemDetails;

/**
 * @api GET https://apis.roblox.com/cloud/toolbox-service/v2/assets:search
 * @param searchCategoryType
 * @param query
 * @param modelSubTypes
 * @param excludedModelSubTypes
 * @param creator
 * @param userId
 * @param groupId
 * @param pageToken
 * @param pageNumber
 * @param maxPageSize
 * @param sortDirection
 * @param sortCategory
 * @param audioMinDurationSeconds
 * @param audioMaxDurationSeconds
 * @param audioArtist
 * @param audioAlbum
 * @param includeTopCharts
 * @param audioTypes
 * @param includedInstanceTypes
 * @param includeOnlyVerifiedCreators
 * @param minPriceCents
 * @param maxPriceCents
 * @param facets
 * @param categoryPath
 * @param searchView
 * @param musicChartType
 * @description Search Creator Store for assets.
 */
export const getToolboxServiceV2AssetsSearch = endpoint({
  method: 'GET',
  path: '/toolbox-service/v2/assets:search',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    searchCategoryType: {},
    query: {},
    modelSubTypes: {},
    excludedModelSubTypes: {},
    creator: {},
    userId: {},
    groupId: {},
    pageToken: {},
    pageNumber: {},
    maxPageSize: {},
    sortDirection: {},
    sortCategory: {},
    audioMinDurationSeconds: {},
    audioMaxDurationSeconds: {},
    audioArtist: {},
    audioAlbum: {},
    includeTopCharts: {},
    audioTypes: {},
    includedInstanceTypes: {},
    includeOnlyVerifiedCreators: {},
    minPriceCents: {},
    maxPriceCents: {},
    facets: {},
    categoryPath: {},
    searchView: {},
    musicChartType: {},
  },
  parameters: {
    searchCategoryType: searchCategoryType,
    query: z.string().optional(),
    modelSubTypes: z.array(ModelSubType).nullish(),
    excludedModelSubTypes: z.array(ModelSubType).nullish(),
    creator: z
      .string()
      .regex(/^(user|group)\/\d+$/)
      .optional(),
    userId: z.number().int().gte(1).nullish(),
    groupId: z.number().int().gte(1).nullish(),
    pageToken: z.string().optional(),
    pageNumber: z.number().int().gte(0).lte(2147483647).nullish(),
    maxPageSize: z.number().int().gte(1).lte(100).optional().default(25),
    sortDirection: sortDirection,
    sortCategory: sortCategory,
    audioMinDurationSeconds: z.number().int().gte(0).lte(2147483647).optional().default(0),
    audioMaxDurationSeconds: z.number().int().gte(1).lte(2147483647).nullish(),
    audioArtist: z.string().optional(),
    audioAlbum: z.string().optional(),
    includeTopCharts: z.boolean().nullish().default(false),
    audioTypes: z.array(SearchAudioTypeModel).nullish(),
    includedInstanceTypes: z.array(ModelInstanceType).nullish(),
    includeOnlyVerifiedCreators: z.boolean().optional().default(true),
    minPriceCents: z.number().int().gte(0).lte(2147483647).optional().default(0),
    maxPriceCents: z.number().int().gte(0).lte(2147483647).nullish(),
    facets: z.array(z.string()).nullish(),
    categoryPath: z.string().optional(),
    searchView: searchView,
    musicChartType: musicChartType,
  },
  response: SearchCreatorStoreAssetsResponse.nullable(),
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 429,
      description: `Too Many Requests`,
    },
    {
      status: 500,
      description: `Server Error`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/cloud/toolbox-service/v2/assets/:id
 * @param id
 * @description Get details for a single Creator Store asset.
 */
export const getToolboxServiceV2AssetsId = endpoint({
  method: 'GET',
  path: '/toolbox-service/v2/assets/:id',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    id: {},
  },
  parameters: {
    id: z.number().int(),
  },
  response: CreatorStoreAsset.nullable(),
  errors: [
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
    {
      status: 429,
      description: `Too Many Requests`,
    },
  ],
});
