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
const Decimal = z.object({ significand: z.number().int(), exponent: z.number().int() });
const Money = z.object({ currencyCode: z.string().nullable(), quantity: Decimal.nullable() });
const CreatorStoreProduct = z.object({ purchasePrice: Money.nullable(), purchasable: z.boolean() });
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
const SocialLinkModel = z.object({ linkType: LinkType, url: z.string().nullable(), title: z.string().nullable() });
const PreviewAssetsModel = z.object({
  imagePreviewAssets: z.array(z.number()).nullable(),
  videoPreviewAssets: z.array(z.number()).nullable(),
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
 * @api GET https://apis.roblox.com/toolbox-service/v2/assets:search
 * @summary Search Creator Store Assets
 * @param searchCategoryType The asset type to search within.
 * @param query The search terms used to filter the results.
 * @param modelSubTypes When searching for models, the subtypes associated with the search results.
 * @param excludedModelSubTypes When searching for models, the subtypes not associated with the search results.
 * @param creator Deprecated: Please refer to the 'userId' and 'groupId' properties instead. The creator type and ID. E.g. "user/123" or "group/456"
 * @param userId The User ID of the creator. Only one of 'userId' and 'groupId' can be present in a query.
 * @param groupId The Group ID of the creator. Only one of 'userId' and 'groupId' can be present in a query.
 * @param pageToken The identifier for the desired search results page. Only one of 'pageNumber' and 'pageToken' can be present in a query.
 * @param pageNumber The page number to retrieve, starting from 0. Only one of 'pageNumber' and 'pageToken' can be present in a query.
 * @param maxPageSize The number of assets to be returned. Cannot be larger than 100.
 * @param sortDirection The sort direction of the search results.
 * @param sortCategory The category to sort the search results by.
 * @param audioMinDurationSeconds When searching for audio, the minimum duration of the audio assets. If included, must be greater than or equal to 0.
 * @param audioMaxDurationSeconds When searching for audio, the maximum duration of the audio assets. If included, must be greater than or equal to 0.
 * @param audioArtist When searching for audio, the artist name of the audio assets.
 * @param audioAlbum When searching for audio, the album name of the audio assets.
 * @param includeTopCharts
 * @param audioTypes When searching for audio, the type of the audio assets.
 * @param includedInstanceTypes When searching for models, this filters that the following [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance) types are included in the model.
 * @param includeOnlyVerifiedCreators Whether the results should only include assets created by verified creators.
 * @param minPriceCents The minimum price of the asset in cents. If included, must be greater than or equal to 0.
 * @param maxPriceCents The maximum price of the asset in cents. If included, must be greater than or equal to 0.
 * @param facets Additional keywords to query by.
 * @param categoryPath
 * @param searchView Indicates which fields will be populated in the response.
 * @param musicChartType Indicates which music charts to filter from.
 * @description Search Creator Store for assets.
 */
export const getToolboxServiceV2AssetsSearch = endpoint({
  method: 'GET',
  path: '/toolbox-service/v2/assets:search',
  baseUrl: 'https://apis.roblox.com',
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
    audioMinDurationSeconds: z.number().int().gte(0).lte(2147483647).optional(),
    audioMaxDurationSeconds: z.number().int().gte(1).lte(2147483647).nullish(),
    audioArtist: z.string().optional(),
    audioAlbum: z.string().optional(),
    includeTopCharts: z.boolean().nullish(),
    audioTypes: z.array(SearchAudioTypeModel).nullish(),
    includedInstanceTypes: z.array(ModelInstanceType).nullish(),
    includeOnlyVerifiedCreators: z.boolean().optional().default(true),
    minPriceCents: z.number().int().gte(0).lte(2147483647).optional(),
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
 * @api GET https://apis.roblox.com/toolbox-service/v2/assets/:id
 * @summary Get Creator Store Asset Details
 * @param id The asset ID to retrieve details for.
 * @description Get details for a single Creator Store asset.
 */
export const getToolboxServiceV2AssetsId = endpoint({
  method: 'GET',
  path: '/toolbox-service/v2/assets/:id',
  baseUrl: 'https://apis.roblox.com',
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
