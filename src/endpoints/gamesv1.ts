import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Games_Api_Models_Response_GameCreator = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  isRNVAccount: z.boolean(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Games_Api_Models_Response_RefundPolicy = z.object({
  policyText: z.string(),
  learnMoreBaseUrl: z.string(),
  locale: z.string(),
  articleId: z.string(),
});
const Roblox_Games_Api_Models_Response_GameDetailResponse = z.object({
  id: z.number().int(),
  rootPlaceId: z.number().int(),
  name: z.string(),
  description: z.string(),
  sourceName: z.string(),
  sourceDescription: z.string(),
  creator: Roblox_Games_Api_Models_Response_GameCreator,
  price: z.number().int(),
  allowedGearGenres: z.array(z.string()),
  allowedGearCategories: z.array(z.string()),
  isGenreEnforced: z.boolean(),
  copyingAllowed: z.boolean(),
  playing: z.number().int(),
  visits: z.number().int(),
  maxPlayers: z.number().int(),
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
  studioAccessToApisAllowed: z.boolean(),
  createVipServersAllowed: z.boolean(),
  universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  genre: z.string(),
  genre_l1: z.string(),
  genre_l2: z.string(),
  untranslated_genre_l1: z.string(),
  isAllGenre: z.boolean(),
  isFavoritedByUser: z.boolean(),
  favoritedCount: z.number().int(),
  licenseDescription: z.string(),
  refundLink: z.string(),
  localizedFiatPrice: z.string(),
  refundPolicy: Roblox_Games_Api_Models_Response_RefundPolicy,
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameDetailResponse_ = z.object({
  data: z.array(Roblox_Games_Api_Models_Response_GameDetailResponse),
});
const Roblox_Games_Api_GameServerPlayerResponse = z.object({
  playerToken: z.string(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Games_Api_Models_Response_VerifiedBadgeUserResponse = z.object({
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_Responses_Games_GameServerResponse = z.object({
  id: z.string().uuid(),
  maxPlayers: z.number().int(),
  playing: z.number().int(),
  playerTokens: z.array(z.string()),
  players: z.array(Roblox_Games_Api_GameServerPlayerResponse),
  fps: z.number(),
  ping: z.number().int(),
  name: z.string(),
  vipServerId: z.number().int(),
  accessCode: z.string().uuid(),
  owner: Roblox_Games_Api_Models_Response_VerifiedBadgeUserResponse,
});
const Roblox_Games_Api_Models_Response_GetPrivateServerListResponse = z.object({
  gameJoinRestricted: z.boolean(),
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Web_Responses_Games_GameServerResponse),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameServerResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Web_Responses_Games_GameServerResponse),
});
const Roblox_Games_Api_Models_Response_GameFavoriteResponse = z.object({
  isFavorited: z.boolean(),
});
const Roblox_Games_Api_Models_Request_GameFavoritesRequest = z.object({
  isFavorited: z.boolean(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Games_Api_Models_Response_GameFavoritesCountResponse = z.object({
  favoritesCount: z.number().int(),
});
const Roblox_Games_Api_Models_Response_GameMediaItem = z.object({
  id: z.number().int(),
  assetTypeId: z.number().int(),
  assetType: z.string(),
  imageId: z.number().int(),
  videoHash: z.string(),
  videoTitle: z.string(),
  approved: z.boolean(),
  altText: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameMediaItem_ = z.object({
  data: z.array(Roblox_Games_Api_Models_Response_GameMediaItem),
});
const Roblox_Games_Api_Models_Response_PurchaseData = z.object({
  localizedFiatPrice: z.string(),
  basePriceId: z.string(),
});
const Roblox_Games_Api_Models_Response_GameProductResponse = z.object({
  universeId: z.number().int(),
  isForSale: z.boolean(),
  productId: z.number().int(),
  price: z.number().int(),
  sellerId: z.number().int(),
  fiatPurchaseData: Roblox_Games_Api_Models_Response_PurchaseData,
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameProductResponse_ = z.object({
  data: z.array(Roblox_Games_Api_Models_Response_GameProductResponse),
});
const Roblox_Games_Api_Models_Response_PlaceDetails = z.object({
  placeId: z.number().int(),
  name: z.string(),
  description: z.string(),
  sourceName: z.string(),
  sourceDescription: z.string(),
  url: z.string(),
  builder: z.string(),
  builderId: z.number().int(),
  hasVerifiedBadge: z.boolean(),
  isPlayable: z.boolean(),
  reasonProhibited: z.string(),
  universeId: z.number().int(),
  universeRootPlaceId: z.number().int(),
  price: z.number().int(),
  imageToken: z.string(),
  fiatPurchaseData: Roblox_Games_Api_Models_Response_PurchaseData,
});
const Roblox_Games_Api_Models_Response_PlayabilityStatusResponse = z.object({
  playabilityStatus: z.enum([
    'UnplayableOtherReason',
    'Playable',
    'GuestProhibited',
    'GameUnapproved',
    'IncorrectConfiguration',
    'UniverseRootPlaceIsPrivate',
    'InsufficientPermissionFriendsOnly',
    'InsufficientPermissionGroupOnly',
    'DeviceRestricted',
    'UnderReview',
    'PurchaseRequired',
    'AccountRestricted',
    'TemporarilyUnavailable',
    'PlaceHasNoPublishedVersion',
    'ComplianceBlocked',
    'ContextualPlayabilityRegionalAvailability',
    'ContextualPlayabilityRegionalCompliance',
    'ContextualPlayabilityAgeRecommendationParentalControls',
    'ContextualPlayabilityExperienceBlockedParentalControls',
    'ContextualPlayabilityAgeGated',
    'ContextualPlayabilityUnverifiedSeventeenPlusUser',
    'FiatPurchaseRequired',
    'FiatPurchaseDeviceRestricted',
    'ContextualPlayabilityUnrated',
    'ContextualPlayabilityAgeGatedByDescriptor',
    'ContextualPlayabilityGeneral',
  ]),
  isPlayable: z.boolean(),
  universeId: z.number().int(),
  unplayableDisplayText: z.string(),
});
const Roblox_Games_Api_Models_Response_GameResponseModel = z.object({
  creatorId: z.number().int(),
  creatorName: z.string(),
  creatorType: z.string(),
  creatorHasVerifiedBadge: z.boolean(),
  totalUpVotes: z.number().int(),
  totalDownVotes: z.number().int(),
  universeId: z.number().int(),
  name: z.string(),
  placeId: z.number().int(),
  playerCount: z.number().int(),
  imageToken: z.string(),
  isSponsored: z.boolean(),
  nativeAdData: z.string(),
  isShowSponsoredLabel: z.boolean(),
  price: z.number().int(),
  analyticsIdentifier: z.string(),
  gameDescription: z.string(),
  genre: z.string(),
  minimumAge: z.number().int(),
  ageRecommendationDisplayName: z.string(),
});
const Roblox_Games_Api_Models_Response_GameRecommendationsResponse = z.object({
  games: z.array(Roblox_Games_Api_Models_Response_GameResponseModel),
  nextPaginationKey: z.string(),
});
const Roblox_Games_Api_Models_Response_PrivateServersEnabledInUniverseResponse = z.object({
  privateServersEnabled: z.boolean(),
});

/**
 * @api GET https://games.roblox.com/v1/games
 * @summary Gets a list of games' detail
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 50 IDs.
 * @param languageCode The HTML language code [optional].
 */
export const getGames = endpoint({
  method: 'GET',
  path: '/v1/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeIds: {
      style: 'form',
    },
    languageCode: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
    languageCode: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameDetailResponse_,
  errors: [
    {
      status: 400,
      description: `8: The universe IDs specified are invalid.
9: Too many universe IDs were requested.`,
    },
    {
      status: 429,
      description: `4: Too many requests have been made.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:placeId/private-servers
 * @summary Get list of private servers user can access for given game id.
 * @param placeId The Id of the place we are geting the private server list for.
 * @param excludeFriendServers
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGamesPlaceidPrivateServers = endpoint({
  method: 'GET',
  path: '/v1/games/:placeId/private-servers',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    excludeFriendServers: {
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
    placeId: z.number().int(),
    excludeFriendServers: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Games_Api_Models_Response_GetPrivateServerListResponse,
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.
7: Guest users are not allowed.`,
    },
    {
      status: 404,
      description: `1: The place is invalid.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:placeId/servers/:serverType
 * @summary Get the game server list
 * @param placeId The Id of the place we are geting the server list for.
 * @param serverType The type of the server we geting the server list for.
 * @param sortOrder The sort order of the servers.
 * @param excludeFullGames Exclude full servers.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 */
export const getGamesPlaceidServersServertype = endpoint({
  method: 'GET',
  path: '/v1/games/:placeId/servers/:serverType',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    serverType: {
      style: 'simple',
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
    excludeFullGames: {
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
    placeId: z.number().int(),
    serverType: z.union([z.literal(0), z.literal(1)]),
    sortOrder: z
      .union([z.literal(1), z.literal(2)])
      .optional()
      .default(2),
    excludeFullGames: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameServerResponse_,
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.
6: The server type is invalid. For fetching private servers, please use https://games.roblox.com/v1/games/{placeId}/private-servers.
7: Guest users are not allowed.`,
    },
    {
      status: 404,
      description: `1: The place is invalid.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:universeId/favorites
 * @summary Returns if a game was marked as favorite for the authenticated user
 * @param universeId The Id of the universe.
 */
export const getGamesUniverseidFavorites = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/favorites',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ isFavorited: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
    },
  ],
});
/**
 * @api POST https://games.roblox.com/v1/games/:universeId/favorites
 * @summary Favors (or unfavors) a game for the authenticated user
 * @param body Request data.
 * @param universeId The Id of the universe.
 */
export const postGamesUniverseidFavorites = endpoint({
  method: 'POST',
  path: '/v1/games/:universeId/favorites',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: z.object({ isFavorited: z.boolean() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
11: You are not authorized to perform this action.`,
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
    },
    {
      status: 429,
      description: `4: Too many requests have been made.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:universeId/favorites/count
 * @summary Get the favorites count of a specific game.
 * @param universeId The Id of the universe.
 */
export const getGamesUniverseidFavoritesCount = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/favorites/count',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ favoritesCount: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:universeId/media
 * @summary Get the game media data
 * @param universeId The id of the universe we get media data from.
 */
export const getGamesUniverseidMedia = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/media',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameMediaItem_,
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/games-product-info
 * @summary Gets a list of games' product info, used to purchase a game
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
 */
export const getGamesGamesProductInfo = endpoint({
  method: 'GET',
  path: '/v1/games/games-product-info',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeIds: {
      style: 'form',
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameProductResponse_,
  errors: [
    {
      status: 400,
      description: `8: The universe IDs specified are invalid.
9: Too many universe IDs were requested.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/multiget-place-details
 * @summary Get place details
 * @param placeIds List of placeId to uniquely Identify a place
 */
export const getGamesMultigetPlaceDetails = endpoint({
  method: 'GET',
  path: '/v1/games/multiget-place-details',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    placeIds: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeIds: z.array(z.number()),
  },
  response: z.array(Roblox_Games_Api_Models_Response_PlaceDetails),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/multiget-playability-status
 * @summary Gets a list of universe playability statuses for the authenticated user
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 50 IDs.
 */
export const getGamesMultigetPlayabilityStatus = endpoint({
  method: 'GET',
  path: '/v1/games/multiget-playability-status',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeIds: {
      style: 'form',
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
  },
  response: z.array(Roblox_Games_Api_Models_Response_PlayabilityStatusResponse),
  errors: [
    {
      status: 400,
      description: `8: The universe IDs specified are invalid.
9: Too many universe IDs were requested.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/recommendations/game/:universeId
 * @summary Get games recommendations based on a given universe
 * @param universeId The universe to base recommendations on
 * @param PaginationKey The key of a page, which includes the start row index and all other necessary information to query the data.
This parameter is usually not needed for the first page.
 * @param MaxRows The requested number of rows.
 * @param IsTruncatedResultsEnabled Truncated Results
 */
export const getGamesRecommendationsGameUniverseid = endpoint({
  method: 'GET',
  path: '/v1/games/recommendations/game/:universeId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    PaginationKey: {
      style: 'form',
      explode: true,
    },
    MaxRows: {
      style: 'form',
      explode: true,
    },
    IsTruncatedResultsEnabled: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    PaginationKey: z.string(),
    MaxRows: z.number().int(),
    IsTruncatedResultsEnabled: z.boolean(),
  },
  response: Roblox_Games_Api_Models_Response_GameRecommendationsResponse,
  errors: [
    {
      status: 400,
      description: `1: The pagination key is invalid.`,
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/private-servers/enabled-in-universe/:universeId
 * @summary Checks if the private servers are enabled in the specified universe.
 * @param universeId
 */
export const getPrivateServersEnabledInUniverseUniverseid = endpoint({
  method: 'GET',
  path: '/v1/private-servers/enabled-in-universe/:universeId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ privateServersEnabled: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `8: The universe IDs specified are invalid.`,
    },
  ],
});

// Patched endpoints removed from Roblox API docs (v6.1.0 compat)

const Patch_GamePassResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
  productId: z.number().int(),
  price: z.number().int(),
  sellerName: z.string(),
  sellerId: z.number().int(),
  isOwned: z.boolean(),
});
const Patch_ApiPageResponse_GamePassResponse = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Patch_GamePassResponse),
});
const Patch_GameVoteResponse = z.object({
  id: z.number().int(),
  upVotes: z.number().int(),
  downVotes: z.number().int(),
});
const Patch_UserGameVoteResponse = z.object({
  canVote: z.boolean(),
  userVote: z.boolean(),
  reasonForNotVoteable: z.string(),
});
const Patch_ApiArrayResponse_GameVoteResponse = z.object({
  data: z.array(Patch_GameVoteResponse),
});
const Patch_MyPrivateServersData = z.object({
  active: z.boolean(),
  universeId: z.number().int(),
  placeId: z.number().int(),
  name: z.string(),
  ownerId: z.number().int(),
  ownerName: z.string(),
  priceInRobux: z.number().int(),
  privateServerId: z.number().int(),
  expirationDate: z.string().datetime({ offset: true }),
  willRenew: z.boolean(),
  universeName: z.string(),
});
const Patch_MyPrivateServersResponse = z.object({
  nextPageCursor: z.string(),
  previousPageCursor: z.string(),
  data: z.array(Patch_MyPrivateServersData),
});
const Patch_VipServerCanInviteResponse = z.object({
  canInvite: z.boolean(),
  doesOwnerPrivacyRestrictJoins: z.boolean(),
  inviteResponseType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});
const Patch_PlaceResponse = z.object({
  id: z.number().int(),
  name: z.string(),
});
const Patch_GameResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  rootPlace: Patch_PlaceResponse,
});
const Patch_VipServerSubscriptionResponse = z.object({
  active: z.boolean(),
  expired: z.boolean(),
  expirationDate: z.string().datetime({ offset: true }),
  price: z.number().int(),
  canRenew: z.boolean(),
  hasInsufficientFunds: z.boolean(),
  hasRecurringProfile: z.boolean(),
  hasPriceChanged: z.boolean(),
});
const Patch_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Patch_VipServerPermissionsResponse = z.object({
  clanAllowed: z.boolean(),
  enemyClanId: z.number().int(),
  friendsAllowed: z.boolean(),
  users: z.array(Patch_SkinnyUserResponse),
});
const Patch_VipServerVoiceSettingsResponse = z.object({
  enabled: z.boolean(),
});
const Patch_VipServerResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  game: Patch_GameResponse,
  joinCode: z.string(),
  active: z.boolean(),
  subscription: Patch_VipServerSubscriptionResponse,
  permissions: Patch_VipServerPermissionsResponse,
  voiceSettings: Patch_VipServerVoiceSettingsResponse,
  link: z.string(),
});
const Patch_VipServerUpdateRequest = z.object({
  name: z.string(),
  newJoinCode: z.boolean(),
  active: z.boolean(),
});
const Patch_CreateVipServersRequest = z.object({
  name: z.string(),
  expectedPrice: z.number().int(),
  isPurchaseConfirmed: z.boolean(),
});
const Patch_VipServerUpdatePermissionsRequest = z.object({
  clanAllowed: z.boolean(),
  enemyClanId: z.number().int(),
  friendsAllowed: z.boolean(),
  usersToAdd: z.array(z.number()),
  usersToRemove: z.array(z.number()),
});
const Patch_VipServerUpdateSubscriptionRequest = z.object({
  active: z.boolean(),
  price: z.number().int(),
});

export const getGamesUniverseidGamePasses = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/game-passes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: { style: 'simple' },
    limit: { style: 'form', explode: true },
    sortOrder: { style: 'form', explode: true },
    cursor: { style: 'form', explode: true },
  },
  parameters: {
    universeId: z.number().int(),
    limit: z.number().int(),
    sortOrder: z
      .union([z.literal(1), z.literal(2)])
      .optional()
      .default(1),
    cursor: z.string().optional(),
  },
  response: Patch_ApiPageResponse_GamePassResponse,
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.` },
    { status: 404, description: `1: The requested universe does not exist.` },
  ],
});

export const patchGamesUniverseidUserVotes = endpoint({
  method: 'PATCH',
  path: '/v1/games/:universeId/user-votes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  body: z.object({ vote: z.boolean() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The universe's root place is invalid.\n3: The asset is not voteable.\n4: The requested vote is invalid.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    {
      status: 403,
      description: `0: Token Validation Failed\n6: The user needs to play the game before vote.\n7: The user needs additional permission to vote.`,
    },
    { status: 404, description: `1: The requested universe does not exist.` },
    {
      status: 429,
      description: `5: Too many attempts to vote. Please try again later.\n10: Internal service busy. Please try again later.`,
    },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getGamesUniverseidVotes = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/votes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  response: Patch_GameVoteResponse,
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.\n3: The asset is not voteable.` },
    { status: 404, description: `1: The requested universe does not exist.` },
    { status: 429, description: `10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getGamesUniverseidVotesUser = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/votes/user',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  response: Patch_UserGameVoteResponse,
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.\n3: The asset is not voteable.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 404, description: `1: The requested universe does not exist.` },
    { status: 429, description: `10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getGamesVotes = endpoint({
  method: 'GET',
  path: '/v1/games/votes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { universeIds: { style: 'form' } },
  parameters: { universeIds: z.array(z.number()) },
  response: Patch_ApiArrayResponse_GameVoteResponse,
  errors: [
    {
      status: 400,
      description: `3: The asset is not voteable.\n8: No universe IDs were specified.\n9: Too many universe IDs were requested.`,
    },
    { status: 429, description: `10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getPrivateServersMyPrivateServers = endpoint({
  method: 'GET',
  path: '/v1/private-servers/my-private-servers',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    privateServersTab: { style: 'form', explode: true },
    itemsPerPage: { style: 'form', explode: true },
    cursor: { style: 'form', explode: true },
  },
  parameters: {
    privateServersTab: z.union([z.literal(0), z.literal(1)]).optional(),
    itemsPerPage: z.number().int().optional().default(25),
    cursor: z.string().optional(),
  },
  response: Patch_MyPrivateServersResponse,
  errors: [
    { status: 400, description: `39: Invalid cursor provided in the request.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
  ],
});

export const getVipServerCanInviteUserid = endpoint({
  method: 'GET',
  path: '/v1/vip-server/can-invite/:userId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { userId: { style: 'simple' } },
  parameters: { userId: z.number().int() },
  response: Patch_VipServerCanInviteResponse,
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 404, description: `19: The user is does not exist.` },
  ],
});

export const getVipServersId = endpoint({
  method: 'GET',
  path: '/v1/vip-servers/:id',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  response: Patch_VipServerResponse,
  errors: [
    { status: 400, description: `8: The creator of this game has disabled private servers for this game.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `2: You are not the owner of this private server.` },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.`,
    },
  ],
});

export const patchVipServersId = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  body: Patch_VipServerUpdateRequest,
  response: Patch_VipServerResponse,
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.\n10: The name of the private server is either empty or too long.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    {
      status: 403,
      description: `0: Token Validation Failed\n2: You are not the owner of this private server.\n11: You cannot activate a cancelled private server.\n12: The game must not be Friends Only to allow private servers.\n13: Join Link can be generated only for active private servers.`,
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.`,
    },
    { status: 429, description: `3: Please wait a few minutes before configuring your private server again.` },
  ],
});

export const patchVipServersIdPermissions = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id/permissions',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  body: Patch_VipServerUpdatePermissionsRequest,
  response: Patch_VipServerPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `6: You cannot add so many players to the private server's invite list.\n8: The creator of this game has disabled private servers for this game.\n12: The game must not be Friends Only to allow private servers.\n28: You may only add or remove valid players to your private server's invite list.\n29: You may only add or remove players when your private server is active.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed\n2: You are not the owner of this private server.` },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.`,
    },
  ],
});

export const patchVipServersIdSubscription = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id/subscription',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  body: Patch_VipServerUpdateSubscriptionRequest,
  response: Patch_VipServerSubscriptionResponse,
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.\n32: You do not have enough funds available to renew the subscription for this private server.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    {
      status: 403,
      description: `0: Token Validation Failed\n2: You are not the owner of this private server.\n21: You may not configure a cancelled private server. Please renew your subscription before configuring.`,
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.`,
    },
    { status: 429, description: `3: Please wait a few minutes before configuring your private server again.` },
  ],
});

export const postGamesVipServersUniverseid = endpoint({
  method: 'POST',
  path: '/v1/games/vip-servers/:universeId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  body: Patch_CreateVipServersRequest,
  response: Roblox_Web_Responses_Games_GameServerResponse,
  errors: [
    {
      status: 400,
      description: `15: The price for purchasing this private server has changed. Please refresh the page and try again.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
    { status: 404, description: `4: The universe does not exist.` },
    {
      status: 500,
      description: `16: We are having a problem completing your purchase. Please try again in a few minutes.`,
    },
  ],
});
