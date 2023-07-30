import { z } from "zod";
import { endpoint } from "..";

const Roblox_Games_Api_Models_Response_GameCreator = z
  .object({
    id: z.number().int(),
    name: z.string(),
    type: z.string(),
    isRNVAccount: z.boolean(),
    hasVerifiedBadge: z.boolean(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameDetailResponse = z
  .object({
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
    isAllGenre: z.boolean(),
    isFavoritedByUser: z.boolean(),
    favoritedCount: z.number().int(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameDetailResponse_ =
  z
    .object({
      data: z.array(Roblox_Games_Api_Models_Response_GameDetailResponse),
    })
    .passthrough();
const Roblox_Games_Api_GameServerPlayerResponse = z
  .object({
    playerToken: z.string(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_VerifiedBadgeUserResponse = z
  .object({
    hasVerifiedBadge: z.boolean(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_Responses_Games_GameServerResponse = z
  .object({
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
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameServerResponse_ =
  z
    .object({
      previousPageCursor: z.string(),
      nextPageCursor: z.string(),
      data: z.array(Roblox_Web_Responses_Games_GameServerResponse),
    })
    .passthrough();
const Roblox_Games_Api_Models_Response_GameFavoriteResponse = z
  .object({ isFavorited: z.boolean() })
  .passthrough();
const Roblox_Games_Api_Models_Request_GameFavoritesRequest = z
  .object({ isFavorited: z.boolean() })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Games_Api_Models_Response_GameFavoritesCountResponse = z
  .object({ favoritesCount: z.number().int() })
  .passthrough();
const Roblox_Games_Api_Models_Response_GamePassResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
    productId: z.number().int(),
    price: z.number().int(),
    sellerName: z.string(),
    sellerId: z.number().int(),
    isOwned: z.boolean(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Games_Api_Models_Response_GamePassResponse_ =
  z
    .object({
      previousPageCursor: z.string(),
      nextPageCursor: z.string(),
      data: z.array(Roblox_Games_Api_Models_Response_GamePassResponse),
    })
    .passthrough();
const Roblox_Games_Api_Models_Response_GameMediaItem = z
  .object({
    id: z.number().int(),
    assetTypeId: z.number().int(),
    assetType: z.string(),
    imageId: z.number().int(),
    videoHash: z.string(),
    videoTitle: z.string(),
    approved: z.boolean(),
    altText: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameMediaItem_ =
  z
    .object({ data: z.array(Roblox_Games_Api_Models_Response_GameMediaItem) })
    .passthrough();
const Roblox_Games_Api_Models_Response_GameVoteResponse = z
  .object({
    id: z.number().int(),
    upVotes: z.number().int(),
    downVotes: z.number().int(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_UserGameVoteResponse = z
  .object({
    canVote: z.boolean(),
    userVote: z.boolean(),
    reasonForNotVoteable: z.string(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameProductResponse = z
  .object({
    universeId: z.number().int(),
    isForSale: z.boolean(),
    productId: z.number().int(),
    price: z.number().int(),
    sellerId: z.number().int(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameProductResponse_ =
  z
    .object({
      data: z.array(Roblox_Games_Api_Models_Response_GameProductResponse),
    })
    .passthrough();
const Roblox_Games_Api_Models_Response_Thumbnail = z
  .object({
    final: z.boolean(),
    url: z.string(),
    cdnUrl: z.string(),
    retryToken: z.string(),
    universeId: z.number().int(),
    placeId: z.number().int(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameResponseModel = z
  .object({
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
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_ElasticSearchDebugInfoModel = z
  .object({ esQuery: z.string() })
  .passthrough();
const Roblox_Games_Api_Models_Response_GamesSearchResponse = z
  .object({
    games: z.array(Roblox_Games_Api_Models_Response_GameResponseModel),
    suggestedKeyword: z.string(),
    correctedKeyword: z.string(),
    filteredKeyword: z.string(),
    hasMoreRows: z.boolean(),
    nextPageExclusiveStartId: z.number().int(),
    featuredSearchUniverseId: z.number().int(),
    emphasis: z.boolean(),
    cutOffIndex: z.number().int(),
    algorithm: z.string(),
    algorithmQueryType: z.string(),
    suggestionAlgorithm: z.string(),
    relatedGames: z.array(Roblox_Games_Api_Models_Response_GameResponseModel),
    esDebugInfo: Roblox_Games_Api_Models_Response_ElasticSearchDebugInfoModel,
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_SpotlightTypeData = z
  .object({})
  .passthrough();
const Roblox_Games_Api_Models_Response_GameSpotlightResponse = z
  .object({
    spotlightType: z.string(),
    spotlightActionText: z.string(),
    spotlightTypeData: Roblox_Games_Api_Models_Response_SpotlightTypeData,
    gameInfo: Roblox_Games_Api_Models_Response_GameResponseModel,
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameSpotlightResponse_ =
  z
    .object({
      data: z.array(Roblox_Games_Api_Models_Response_GameSpotlightResponse),
    })
    .passthrough();
const Roblox_Games_Api_Models_Response_PlaceDetails = z
  .object({
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
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_PlayabilityStatusResponse = z
  .object({
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
    ]),
    isPlayable: z.boolean(),
    universeId: z.number().int(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameRecommendationsResponse = z
  .object({
    games: z.array(Roblox_Games_Api_Models_Response_GameResponseModel),
    nextPaginationKey: z.string(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameSort = z
  .object({
    token: z.string(),
    name: z.string(),
    displayName: z.string(),
    gameSetTypeId: z.number().int(),
    gameSetTargetId: z.number().int(),
    timeOptionsAvailable: z.boolean(),
    genreOptionsAvailable: z.boolean(),
    numberOfRows: z.number().int(),
    numberOfGames: z.number().int(),
    isDefaultSort: z.boolean(),
    contextUniverseId: z.number().int(),
    contextCountryRegionId: z.number().int(),
    tokenExpiryInSeconds: z.number(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_TimeFilter = z
  .object({
    token: z.string(),
    name: z.string(),
    tokenExpiryInSeconds: z.number(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GenreFilter = z
  .object({
    token: z.string(),
    name: z.string(),
    tokenExpiryInSeconds: z.number(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameFilter = z
  .object({
    token: z.string(),
    name: z.string(),
    tokenExpiryInSeconds: z.number().int(),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_PageContext = z
  .object({ pageId: z.string().uuid(), isSeeAllPage: z.boolean() })
  .passthrough();
const Roblox_Games_Api_Models_Response_GameSortsResponse = z
  .object({
    sorts: z.array(Roblox_Games_Api_Models_Response_GameSort),
    timeFilters: z.array(Roblox_Games_Api_Models_Response_TimeFilter),
    genreFilters: z.array(Roblox_Games_Api_Models_Response_GenreFilter),
    gameFilters: z.array(Roblox_Games_Api_Models_Response_GameFilter),
    pageContext: Roblox_Games_Api_Models_Response_PageContext,
    gameSortStyle: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameVoteResponse_ =
  z
    .object({
      data: z.array(Roblox_Games_Api_Models_Response_GameVoteResponse),
    })
    .passthrough();
const Roblox_Games_Api_PrivateServersResponse = z
  .object({
    privateServerResponses: z.array(
      Roblox_Web_Responses_Games_GameServerResponse
    ),
  })
  .passthrough();
const Roblox_Games_Api_Models_Response_PrivateServersEnabledInUniverseResponse =
  z.object({ privateServersEnabled: z.boolean() }).passthrough();
const Roblox_Games_Api_VipServerCanInviteResponse = z
  .object({ canInvite: z.boolean() })
  .passthrough();
const Roblox_Games_Api_PlaceResponse = z
  .object({ id: z.number().int(), name: z.string() })
  .passthrough();
const Roblox_Games_Api_GameResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    rootPlace: Roblox_Games_Api_PlaceResponse,
  })
  .passthrough();
const Roblox_Games_Api_VipServerSubscriptionResponse = z
  .object({
    active: z.boolean(),
    expired: z.boolean(),
    expirationDate: z.string().datetime({ offset: true }),
    price: z.number().int(),
    canRenew: z.boolean(),
    hasInsufficientFunds: z.boolean(),
    hasRecurringProfile: z.boolean(),
    hasPriceChanged: z.boolean(),
  })
  .passthrough();
const Roblox_Web_Responses_Users_SkinnyUserResponse = z
  .object({ id: z.number().int(), name: z.string(), displayName: z.string() })
  .passthrough();
const Roblox_Games_Api_VipServerPermissionsResponse = z
  .object({
    clanAllowed: z.boolean(),
    enemyClanId: z.number().int(),
    friendsAllowed: z.boolean(),
    users: z.array(Roblox_Web_Responses_Users_SkinnyUserResponse),
  })
  .passthrough();
const Roblox_Games_Api_VipServerVoiceSettingsResponse = z
  .object({ enabled: z.boolean() })
  .passthrough();
const Roblox_Games_Api_VipServerResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    game: Roblox_Games_Api_GameResponse,
    joinCode: z.string(),
    active: z.boolean(),
    subscription: Roblox_Games_Api_VipServerSubscriptionResponse,
    permissions: Roblox_Games_Api_VipServerPermissionsResponse,
    voiceSettings: Roblox_Games_Api_VipServerVoiceSettingsResponse,
    link: z.string(),
  })
  .passthrough();
const Roblox_Games_Api_VipServerUpdateRequest = z
  .object({ name: z.string(), newJoinCode: z.boolean(), active: z.boolean() })
  .passthrough();
const Roblox_Games_Api_CreateVipServersRequest = z
  .object({ name: z.string(), expectedPrice: z.number().int() })
  .passthrough();
const Roblox_Games_Api_Models_Request_SetUserGameVoteRequest = z
  .object({ vote: z.boolean() })
  .passthrough();
const Roblox_Games_Api_VipServerUpdatePermissionsRequest = z
  .object({
    clanAllowed: z.boolean(),
    enemyClanId: z.number().int(),
    friendsAllowed: z.boolean(),
    usersToAdd: z.array(z.number()),
    usersToRemove: z.array(z.number()),
  })
  .passthrough();
const Roblox_Games_Api_VipServerUpdateSubscriptionRequest = z
  .object({ active: z.boolean(), price: z.number().int() })
  .passthrough();
const Roblox_Games_Api_VipServerUpdateVoiceSettingsRequest = z
  .object({ enabled: z.boolean() })
  .passthrough();

const schemas = {
  Roblox_Games_Api_Models_Response_GameCreator,
  Roblox_Games_Api_Models_Response_GameDetailResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameDetailResponse_,
  Roblox_Games_Api_GameServerPlayerResponse,
  Roblox_Games_Api_Models_Response_VerifiedBadgeUserResponse,
  Roblox_Web_Responses_Games_GameServerResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameServerResponse_,
  Roblox_Games_Api_Models_Response_GameFavoriteResponse,
  Roblox_Games_Api_Models_Request_GameFavoritesRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Games_Api_Models_Response_GameFavoritesCountResponse,
  Roblox_Games_Api_Models_Response_GamePassResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Games_Api_Models_Response_GamePassResponse_,
  Roblox_Games_Api_Models_Response_GameMediaItem,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameMediaItem_,
  Roblox_Games_Api_Models_Response_GameVoteResponse,
  Roblox_Games_Api_Models_Response_UserGameVoteResponse,
  Roblox_Games_Api_Models_Response_GameProductResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameProductResponse_,
  Roblox_Games_Api_Models_Response_Thumbnail,
  Roblox_Games_Api_Models_Response_GameResponseModel,
  Roblox_Games_Api_Models_Response_ElasticSearchDebugInfoModel,
  Roblox_Games_Api_Models_Response_GamesSearchResponse,
  Roblox_Games_Api_Models_Response_SpotlightTypeData,
  Roblox_Games_Api_Models_Response_GameSpotlightResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameSpotlightResponse_,
  Roblox_Games_Api_Models_Response_PlaceDetails,
  Roblox_Games_Api_Models_Response_PlayabilityStatusResponse,
  Roblox_Games_Api_Models_Response_GameRecommendationsResponse,
  Roblox_Games_Api_Models_Response_GameSort,
  Roblox_Games_Api_Models_Response_TimeFilter,
  Roblox_Games_Api_Models_Response_GenreFilter,
  Roblox_Games_Api_Models_Response_GameFilter,
  Roblox_Games_Api_Models_Response_PageContext,
  Roblox_Games_Api_Models_Response_GameSortsResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameVoteResponse_,
  Roblox_Games_Api_PrivateServersResponse,
  Roblox_Games_Api_Models_Response_PrivateServersEnabledInUniverseResponse,
  Roblox_Games_Api_VipServerCanInviteResponse,
  Roblox_Games_Api_PlaceResponse,
  Roblox_Games_Api_GameResponse,
  Roblox_Games_Api_VipServerSubscriptionResponse,
  Roblox_Web_Responses_Users_SkinnyUserResponse,
  Roblox_Games_Api_VipServerPermissionsResponse,
  Roblox_Games_Api_VipServerVoiceSettingsResponse,
  Roblox_Games_Api_VipServerResponse,
  Roblox_Games_Api_VipServerUpdateRequest,
  Roblox_Games_Api_CreateVipServersRequest,
  Roblox_Games_Api_Models_Request_SetUserGameVoteRequest,
  Roblox_Games_Api_VipServerUpdatePermissionsRequest,
  Roblox_Games_Api_VipServerUpdateSubscriptionRequest,
  Roblox_Games_Api_VipServerUpdateVoiceSettingsRequest,
};

/**
 * @api get https://games.roblox.com/v1/games
 * @param universeIds
 */
export const getGames = endpoint({
  method: "get" as const,
  path: "/v1/games",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeIds: {
      style: "form",
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameDetailResponse_,
  errors: [
    {
      status: 400,
      description: `8: No universe IDs were specified.
9: Too many universe IDs were requested.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:placeId/private-servers
 * @param placeId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGamesPlaceidPrivateServers = endpoint({
  method: "get" as const,
  path: "/v1/games/:placeId/private-servers",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    placeId: {
      style: "simple",
    },
    limit: {
      style: "form",
      explode: true,
    },
    cursor: {
      style: "form",
      explode: true,
    },
    sortOrder: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    placeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(["Asc", "Desc"]).optional().default("Asc"),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameServerResponse_,
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.
7: Guest users are not allowed.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The place is invalid.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:placeId/servers/:serverType
 * @param placeId
 * @param serverType
 * @param sortOrder
 * @param excludeFullGames
 * @param limit
 * @param cursor
 */
export const getGamesPlaceidServersServertype = endpoint({
  method: "get" as const,
  path: "/v1/games/:placeId/servers/:serverType",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    placeId: {
      style: "simple",
    },
    serverType: {
      style: "simple",
    },
    sortOrder: {
      style: "form",
      explode: true,
    },
    excludeFullGames: {
      style: "form",
      explode: true,
    },
    limit: {
      style: "form",
      explode: true,
    },
    cursor: {
      style: "form",
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
  response:
    Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameServerResponse_,
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.
6: The server type is invalid. For fetching private servers, please use https://games.roblox.com/v1/games/{placeId}/private-servers.
7: Guest users are not allowed.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The place is invalid.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:universeId/favorites
 * @param universeId
 */
export const getGamesUniverseidFavorites = endpoint({
  method: "get" as const,
  path: "/v1/games/:universeId/favorites",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ isFavorited: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://games.roblox.com/v1/games/:universeId/favorites
 * @param body Request data.
 * @param universeId
 */
export const postGamesUniverseidFavorites = endpoint({
  method: "post" as const,
  path: "/v1/games/:universeId/favorites",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: "simple",
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: z.object({ isFavorited: z.boolean() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
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
11: You are not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `4: Too many requests have been made.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:universeId/favorites/count
 * @param universeId
 */
export const getGamesUniverseidFavoritesCount = endpoint({
  method: "get" as const,
  path: "/v1/games/:universeId/favorites/count",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ favoritesCount: z.number().int() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:universeId/game-passes
 * @param universeId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGamesUniverseidGamePasses = endpoint({
  method: "get" as const,
  path: "/v1/games/:universeId/game-passes",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
    },
    limit: {
      style: "form",
      explode: true,
    },
    cursor: {
      style: "form",
      explode: true,
    },
    sortOrder: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(["Asc", "Desc"]).optional().default("Asc"),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Games_Api_Models_Response_GamePassResponse_,
  errors: [
    {
      status: 400,
      description: `2: The universe&#x27;s root place is invalid.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:universeId/media
 * @param universeId
 */
export const getGamesUniverseidMedia = endpoint({
  method: "get" as const,
  path: "/v1/games/:universeId/media",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameMediaItem_,
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api patch https://games.roblox.com/v1/games/:universeId/user-votes
 * @param body The request body.
 * @param universeId
 */
export const patchGamesUniverseidUserVotes = endpoint({
  method: "patch" as const,
  path: "/v1/games/:universeId/user-votes",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: "simple",
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: z.object({ vote: z.boolean() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `2: The universe&#x27;s root place is invalid.
3: The asset is not voteable.
4: The requested vote is invalid.`,
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
6: The user needs to play the game before vote.
7: The user needs additional permission to vote.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: Too many attempts to vote. Please try again later.
10: Internal service busy. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:universeId/votes
 * @param universeId
 */
export const getGamesUniverseidVotes = endpoint({
  method: "get" as const,
  path: "/v1/games/:universeId/votes",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
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
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `10: Internal service busy. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/:universeId/votes/user
 * @param universeId
 */
export const getGamesUniverseidVotesUser = endpoint({
  method: "get" as const,
  path: "/v1/games/:universeId/votes/user",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
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
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The requested universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `10: Internal service busy. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/game-thumbnail
 * @param imageToken
 * @param height
 * @param width
 */
export const getGamesGameThumbnail = endpoint({
  method: "get" as const,
  path: "/v1/games/game-thumbnail",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    imageToken: {
      style: "form",
      explode: true,
    },
    height: {
      style: "form",
      explode: true,
    },
    width: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    imageToken: z.string(),
    height: z.number().int().optional().default(50),
    width: z.number().int().optional().default(50),
  },
  response: z.void(),
  errors: [
    {
      status: 404,
      description: `10: This endpoint is deprecated`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/game-thumbnails
 * @param imageTokens
 * @param height
 * @param width
 */
export const getGamesGameThumbnails = endpoint({
  method: "get" as const,
  path: "/v1/games/game-thumbnails",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    imageTokens: {
      style: "form",
      explode: true,
    },
    height: {
      style: "form",
      explode: true,
    },
    width: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    imageTokens: z.array(z.string()),
    height: z.number().int().optional().default(50),
    width: z.number().int().optional().default(50),
  },
  response: z.array(Roblox_Games_Api_Models_Response_Thumbnail),
  errors: [
    {
      status: 404,
      description: `10: This endpoint is deprecated`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/games-product-info
 * @param universeIds
 */
export const getGamesGamesProductInfo = endpoint({
  method: "get" as const,
  path: "/v1/games/games-product-info",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeIds: {
      style: "form",
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameProductResponse_,
  errors: [
    {
      status: 400,
      description: `8: No universe IDs were specified.
9: Too many universe IDs were requested.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/list
 * @param SortToken
 * @param GameFilter
 * @param TimeFilter
 * @param GenreFilter
 * @param ExclusiveStartId
 * @param SortOrder
 * @param GameSetTargetId
 * @param Keyword
 * @param StartRows
 * @param MaxRows
 * @param ContextCountryRegionId
 * @param ContextUniverseId
 * @param PageContext.PageId
 * @param PageContext.IsSeeAllPage
 * @param SortPosition
 * @param SessionId
 */
export const getGamesList = endpoint({
  method: "get" as const,
  path: "/v1/games/list",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    SortToken: {
      style: "form",
      explode: true,
    },
    GameFilter: {
      style: "form",
      explode: true,
    },
    TimeFilter: {
      style: "form",
      explode: true,
    },
    GenreFilter: {
      style: "form",
      explode: true,
    },
    ExclusiveStartId: {
      style: "form",
      explode: true,
    },
    SortOrder: {
      style: "form",
      explode: true,
    },
    GameSetTargetId: {
      style: "form",
      explode: true,
    },
    Keyword: {
      style: "form",
      explode: true,
    },
    StartRows: {
      style: "form",
      explode: true,
    },
    MaxRows: {
      style: "form",
      explode: true,
    },
    ContextCountryRegionId: {
      style: "form",
      explode: true,
    },
    ContextUniverseId: {
      style: "form",
      explode: true,
    },
    "PageContext.PageId": {
      style: "form",
      explode: true,
    },
    "PageContext.IsSeeAllPage": {
      style: "form",
      explode: true,
    },
    SortPosition: {
      style: "form",
      explode: true,
    },
    SessionId: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    SortToken: z.string(),
    GameFilter: z.string(),
    TimeFilter: z.string(),
    GenreFilter: z.string(),
    ExclusiveStartId: z.number().int(),
    SortOrder: z.number().int(),
    GameSetTargetId: z.number().int(),
    Keyword: z.string(),
    StartRows: z.number().int(),
    MaxRows: z.number().int(),
    ContextCountryRegionId: z.number().int(),
    ContextUniverseId: z.number().int(),
    "PageContext.PageId": z.string().uuid(),
    "PageContext.IsSeeAllPage": z.boolean(),
    SortPosition: z.number().int(),
    SessionId: z.string(),
  },
  response: Roblox_Games_Api_Models_Response_GamesSearchResponse,
  errors: [
    {
      status: 500,
      description: `0: Compliance Context service is unavailable.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/list-spotlight
 */
export const getGamesListSpotlight = endpoint({
  method: "get" as const,
  path: "/v1/games/list-spotlight",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameSpotlightResponse_,
  errors: [
    {
      status: 500,
      description: `0: Compliance Context service is unavailable.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/multiget-place-details
 * @param placeIds
 */
export const getGamesMultigetPlaceDetails = endpoint({
  method: "get" as const,
  path: "/v1/games/multiget-place-details",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    placeIds: {
      style: "form",
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
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/multiget-playability-status
 * @param universeIds
 */
export const getGamesMultigetPlayabilityStatus = endpoint({
  method: "get" as const,
  path: "/v1/games/multiget-playability-status",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeIds: {
      style: "form",
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
  },
  response: z.array(Roblox_Games_Api_Models_Response_PlayabilityStatusResponse),
  errors: [
    {
      status: 400,
      description: `8: No universe IDs were specified.
9: Too many universe IDs were requested.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/recommendations/algorithm/:algorithmName
 * @param algorithmName
 * @param PaginationKey
 * @param MaxRows
 * @param IsTruncatedResultsEnabled
 */
export const getGamesRecommendationsAlgorithmAlgorithmname = endpoint({
  method: "get" as const,
  path: "/v1/games/recommendations/algorithm/:algorithmName",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    algorithmName: {
      style: "simple",
    },
    PaginationKey: {
      style: "form",
      explode: true,
    },
    MaxRows: {
      style: "form",
      explode: true,
    },
    IsTruncatedResultsEnabled: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    algorithmName: z.string(),
    PaginationKey: z.string(),
    MaxRows: z.number().int(),
    IsTruncatedResultsEnabled: z.boolean(),
  },
  response: Roblox_Games_Api_Models_Response_GameRecommendationsResponse,
  errors: [
    {
      status: 400,
      description: `1: The pagination key is invalid.`,
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
 * @api get https://games.roblox.com/v1/games/recommendations/game/:universeId
 * @param universeId
 * @param PaginationKey
 * @param MaxRows
 * @param IsTruncatedResultsEnabled
 */
export const getGamesRecommendationsGameUniverseid = endpoint({
  method: "get" as const,
  path: "/v1/games/recommendations/game/:universeId",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
    },
    PaginationKey: {
      style: "form",
      explode: true,
    },
    MaxRows: {
      style: "form",
      explode: true,
    },
    IsTruncatedResultsEnabled: {
      style: "form",
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
      schema: z.void(),
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/sorts
 * @param GameSortsContext
 */
export const getGamesSorts = endpoint({
  method: "get" as const,
  path: "/v1/games/sorts",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    GameSortsContext: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    GameSortsContext: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(6),
      z.literal(7),
    ]),
  },
  response: Roblox_Games_Api_Models_Response_GameSortsResponse,
  errors: [],
});
/**
 * @api post https://games.roblox.com/v1/games/vip-servers/:universeId
 * @param body The request body.
 * @param universeId
 */
export const postGamesVipServersUniverseid = endpoint({
  method: "post" as const,
  path: "/v1/games/vip-servers/:universeId",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: "simple",
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
    {
      status: 404,
      description: `4: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `16: We are having a problem completing your purchase. Please try again in a few minutes.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/games/votes
 * @param universeIds
 */
export const getGamesVotes = endpoint({
  method: "get" as const,
  path: "/v1/games/votes",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeIds: {
      style: "form",
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Games_Api_Models_Response_GameVoteResponse_,
  errors: [
    {
      status: 400,
      description: `3: The asset is not voteable.
8: No universe IDs were specified.
9: Too many universe IDs were requested.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `10: Internal service busy. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/private-servers
 * @param privateServerIds
 */
export const getPrivateServers = endpoint({
  method: "get" as const,
  path: "/v1/private-servers",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    privateServerIds: {
      style: "form",
    },
  },
  parameters: {
    privateServerIds: z.array(z.number()),
  },
  response: Roblox_Games_Api_PrivateServersResponse,
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.
34: Invalid request, private server ids cannot be null.
35: Guest users are not allowed.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: You are not the owner of this private server.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/private-servers/enabled-in-universe/:universeId
 * @param universeId
 */
export const getPrivateServersEnabledInUniverseUniverseid = endpoint({
  method: "get" as const,
  path: "/v1/private-servers/enabled-in-universe/:universeId",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    universeId: {
      style: "simple",
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ privateServersEnabled: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `8: No universe IDs were specified.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/vip-server/can-invite/:userId
 * @param userId
 */
export const getVipServerCanInviteUserid = endpoint({
  method: "get" as const,
  path: "/v1/vip-server/can-invite/:userId",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    userId: {
      style: "simple",
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ canInvite: z.boolean() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `19: The user is does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://games.roblox.com/v1/vip-servers/:id
 * @param id
 */
export const getVipServersId = endpoint({
  method: "get" as const,
  path: "/v1/vip-servers/:id",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    id: {
      style: "simple",
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
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: You are not the owner of this private server.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api patch https://games.roblox.com/v1/vip-servers/:id
 * @param body The Roblox.Games.Api.VipServerUpdateRequest
 * @param id
 */
export const patchVipServersId = endpoint({
  method: "patch" as const,
  path: "/v1/vip-servers/:id",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    id: {
      style: "simple",
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
2: You are not the owner of this private server.
11: You cannot activate a cancelled private server.
12: The game must not be Friends Only to allow private servers.
13: Join Link can be generated only for active private servers.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `3: Please wait a few minutes before configuring your private server again.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api patch https://games.roblox.com/v1/vip-servers/:id/permissions
 * @param body The Roblox.Games.Api.VipServerUpdatePermissionsRequest
 * @param id
 */
export const patchVipServersIdPermissions = endpoint({
  method: "patch" as const,
  path: "/v1/vip-servers/:id/permissions",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    id: {
      style: "simple",
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
2: You are not the owner of this private server.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api patch https://games.roblox.com/v1/vip-servers/:id/subscription
 * @param body The Roblox.Games.Api.VipServerUpdateSubscriptionRequest
 * @param id
 */
export const patchVipServersIdSubscription = endpoint({
  method: "patch" as const,
  path: "/v1/vip-servers/:id/subscription",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    id: {
      style: "simple",
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
2: You are not the owner of this private server.
21: You may not configure a cancelled private server. Please renew your subscription before configuring.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.
4: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `3: Please wait a few minutes before configuring your private server again.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api patch https://games.roblox.com/v1/vip-servers/:id/voicesettings
 * @param body The Roblox.Games.Api.VipServerUpdateVoiceSettingsRequest
 * @param id
 */
export const patchVipServersIdVoicesettings = endpoint({
  method: "patch" as const,
  path: "/v1/vip-servers/:id/voicesettings",
  baseUrl: "https://games.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    id: {
      style: "simple",
    },
  },
  parameters: {
    id: z.number().int(),
  },
  body: z.object({ enabled: z.boolean() }).passthrough(),
  response: z.object({ enabled: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `8: The creator of this game has disabled private servers for this game.`,
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
2: You are not the owner of this private server.
33: You are not eligible for voice chat.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The private server is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
});
