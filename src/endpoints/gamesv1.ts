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
const Roblox_Games_Api_Models_Response_GameVoteResponse = z.object({
  id: z.number().int(),
  upVotes: z.number().int(),
  downVotes: z.number().int(),
});
const Roblox_Games_Api_Models_Response_UserGameVoteResponse = z.object({
  canVote: z.boolean(),
  userVote: z.boolean(),
  reasonForNotVoteable: z.string(),
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
  playabilityStatus: z.union([
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
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
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
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameVoteResponse_ = z.object({
  data: z.array(Roblox_Games_Api_Models_Response_GameVoteResponse),
});
const Roblox_Games_Api_Models_Response_PrivateServersEnabledInUniverseResponse = z.object({
  privateServersEnabled: z.boolean(),
});
const Roblox_Games_Api_Models_Response_MyPrivateServersData = z.object({
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
const Roblox_Games_Api_Models_Response_MyPrivateServersResponse = z.object({
  nextPageCursor: z.string(),
  previousPageCursor: z.string(),
  data: z.array(Roblox_Games_Api_Models_Response_MyPrivateServersData),
});
const Roblox_Games_Api_VipServerCanInviteResponse = z.object({
  canInvite: z.boolean(),
  doesOwnerPrivacyRestrictJoins: z.boolean(),
  inviteResponseType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});
const Roblox_Games_Api_PlaceResponse = z.object({
  id: z.number().int(),
  name: z.string(),
});
const Roblox_Games_Api_GameResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  rootPlace: Roblox_Games_Api_PlaceResponse,
});
const Roblox_Games_Api_VipServerSubscriptionResponse = z.object({
  active: z.boolean(),
  expired: z.boolean(),
  expirationDate: z.string().datetime({ offset: true }),
  price: z.number().int(),
  canRenew: z.boolean(),
  hasInsufficientFunds: z.boolean(),
  hasRecurringProfile: z.boolean(),
  hasPriceChanged: z.boolean(),
});
const Roblox_Web_Responses_Users_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Games_Api_VipServerPermissionsResponse = z.object({
  clanAllowed: z.boolean(),
  enemyClanId: z.number().int(),
  friendsAllowed: z.boolean(),
  users: z.array(Roblox_Web_Responses_Users_SkinnyUserResponse),
});
const Roblox_Games_Api_VipServerVoiceSettingsResponse = z.object({
  enabled: z.boolean(),
});
const Roblox_Games_Api_VipServerResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  game: Roblox_Games_Api_GameResponse,
  joinCode: z.string(),
  active: z.boolean(),
  subscription: Roblox_Games_Api_VipServerSubscriptionResponse,
  permissions: Roblox_Games_Api_VipServerPermissionsResponse,
  voiceSettings: Roblox_Games_Api_VipServerVoiceSettingsResponse,
  link: z.string(),
});
const Roblox_Games_Api_VipServerUpdateRequest = z.object({
  name: z.string(),
  newJoinCode: z.boolean(),
  active: z.boolean(),
});
const Roblox_Games_Api_CreateVipServersRequest = z.object({
  name: z.string(),
  expectedPrice: z.number().int(),
  isPurchaseConfirmed: z.boolean(),
});
const Roblox_Games_Api_Models_Request_SetUserGameVoteRequest = z.object({
  vote: z.boolean(),
});
const Roblox_Games_Api_VipServerUpdatePermissionsRequest = z.object({
  clanAllowed: z.boolean(),
  enemyClanId: z.number().int(),
  friendsAllowed: z.boolean(),
  usersToAdd: z.array(z.number()),
  usersToRemove: z.array(z.number()),
});
const Roblox_Games_Api_VipServerUpdateSubscriptionRequest = z.object({
  active: z.boolean(),
  price: z.number().int(),
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
 * @api PATCH https://games.roblox.com/v1/games/:universeId/user-votes
 * @summary Set the user's vote for a game
 * @param body The request body.
 * @param universeId The id of the universe.
 */
export const patchGamesUniverseidUserVotes = endpoint({
  method: 'PATCH',
  path: '/v1/games/:universeId/user-votes',
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
  body: z.object({ vote: z.boolean() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The universe&#x27;s root place is invalid.
3: The asset is not voteable.
4: The requested vote is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: The user needs to play the game before vote.
7: The user needs additional permission to vote.`,
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
    },
    {
      status: 429,
      description: `5: Too many attempts to vote. Please try again later.
10: Internal service busy. Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:universeId/votes
 * @summary Get the game vote status
 * @param universeId The id of the universe we get vote status from.
 */
export const getGamesUniverseidVotes = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/votes',
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
  response: Roblox_Games_Api_Models_Response_GameVoteResponse,
  errors: [
    {
      status: 400,
      description: `2: The universe&#x27;s root place is invalid.
3: The asset is not voteable.`,
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
    },
    {
      status: 429,
      description: `10: Internal service busy. Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/:universeId/votes/user
 * @summary Get the user's vote status for a game
 * @param universeId The id of the universe we get user vote status from.
 */
export const getGamesUniverseidVotesUser = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/votes/user',
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
  response: Roblox_Games_Api_Models_Response_UserGameVoteResponse,
  errors: [
    {
      status: 400,
      description: `2: The universe&#x27;s root place is invalid.
3: The asset is not voteable.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
    },
    {
      status: 429,
      description: `10: Internal service busy. Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
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
 * @api POST https://games.roblox.com/v1/games/vip-servers/:universeId
 * @summary Create VIP server for a game
 * @param body The request body.
 * @param universeId The id of the universe.
 */
export const postGamesVipServersUniverseid = endpoint({
  method: 'POST',
  path: '/v1/games/vip-servers/:universeId',
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
  body: Roblox_Games_Api_CreateVipServersRequest,
  response: Roblox_Web_Responses_Games_GameServerResponse,
  errors: [
    {
      status: 400,
      description: `15: The price for purchasing this private server has changed. Please refresh the page and try again.`,
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
      status: 404,
      description: `4: The universe does not exist.`,
    },
    {
      status: 500,
      description: `16: We are having a problem completing your purchase. Please try again in a few minutes.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/games/votes
 * @summary Gets a list of universe vote status
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 50 IDs.
 */
export const getGamesVotes = endpoint({
  method: 'GET',
  path: '/v1/games/votes',
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
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameVoteResponse_,
  errors: [
    {
      status: 400,
      description: `3: The asset is not voteable.
8: No universe IDs were specified.
9: Too many universe IDs were requested.`,
    },
    {
      status: 429,
      description: `10: Internal service busy. Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
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
/**
 * @api GET https://games.roblox.com/v1/private-servers/my-private-servers
 * @summary Get private servers for the authenticated user
 * @param privateServersTab Type of private server to fetch
 * @param itemsPerPage Number of items per page
 * @param cursor Current cursor
 */
export const getPrivateServersMyPrivateServers = endpoint({
  method: 'GET',
  path: '/v1/private-servers/my-private-servers',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    privateServersTab: {
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
  },
  parameters: {
    privateServersTab: z.union([z.literal(0), z.literal(1)]).optional(),
    itemsPerPage: z.number().int().optional().default(25),
    cursor: z.string().optional(),
  },
  response: Roblox_Games_Api_Models_Response_MyPrivateServersResponse,
  errors: [
    {
      status: 400,
      description: `39: Invalid cursor provided in the request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/vip-server/can-invite/:userId
 * @summary Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
 * @param userId The user id.
 */
export const getVipServerCanInviteUserid = endpoint({
  method: 'GET',
  path: '/v1/vip-server/can-invite/:userId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Games_Api_VipServerCanInviteResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 404,
      description: `19: The user is does not exist.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v1/vip-servers/:id
 * @summary Get necessary data to generate webpage
 * @param id The VIP Server ID
 */
export const getVipServersId = endpoint({
  method: 'GET',
  path: '/v1/vip-servers/:id',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    id: {
      style: 'simple',
    },
  },
  parameters: {
    id: z.number().int(),
  },
  response: Roblox_Games_Api_VipServerResponse,
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You are not the owner of this private server.`,
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
    },
  ],
});
/**
 * @api PATCH https://games.roblox.com/v1/vip-servers/:id
 * @summary Updates vip server
 * @param body The Roblox.Games.Api.VipServerUpdateRequest
 * @param id The VIP Server ID
 */
export const patchVipServersId = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    id: {
      style: 'simple',
    },
  },
  parameters: {
    id: z.number().int(),
  },
  body: Roblox_Games_Api_VipServerUpdateRequest,
  response: Roblox_Games_Api_VipServerResponse,
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.
10: The name of the private server is either empty or too long.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You are not the owner of this private server.
11: You cannot activate a cancelled private server.
12: The game must not be Friends Only to allow private servers.
13: Join Link can be generated only for active private servers.`,
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
    },
    {
      status: 429,
      description: `3: Please wait a few minutes before configuring your private server again.`,
    },
  ],
});
/**
 * @api PATCH https://games.roblox.com/v1/vip-servers/:id/permissions
 * @summary Update friend/clan access and allowed friends/clan list
 * @param body The Roblox.Games.Api.VipServerUpdatePermissionsRequest
 * @param id The VIP Server ID
 */
export const patchVipServersIdPermissions = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id/permissions',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    id: {
      style: 'simple',
    },
  },
  parameters: {
    id: z.number().int(),
  },
  body: Roblox_Games_Api_VipServerUpdatePermissionsRequest,
  response: Roblox_Games_Api_VipServerPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `6: You cannot add so many players to the private server&#x27;s invite list.
8: The creator of this game has disabled private servers for this game.
12: The game must not be Friends Only to allow private servers.
28: You may only add or remove valid players to your private server&#x27;s invite list.
29: You may only add or remove players when your private server is active.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You are not the owner of this private server.`,
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
    },
  ],
});
/**
 * @api PATCH https://games.roblox.com/v1/vip-servers/:id/subscription
 * @summary Updates subscription status of a vip server
 * @param body The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
 * @param id The VIP Server ID
 */
export const patchVipServersIdSubscription = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id/subscription',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    id: {
      style: 'simple',
    },
  },
  parameters: {
    id: z.number().int(),
  },
  body: Roblox_Games_Api_VipServerUpdateSubscriptionRequest,
  response: Roblox_Games_Api_VipServerSubscriptionResponse,
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.
32: You do not have enough funds available to renew the subscription for this private server.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You are not the owner of this private server.
21: You may not configure a cancelled private server. Please renew your subscription before configuring.`,
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
    },
    {
      status: 429,
      description: `3: Please wait a few minutes before configuring your private server again.`,
    },
  ],
});
