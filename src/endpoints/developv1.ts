import { z } from 'zod';

const Roblox_Api_Develop_Models_Response_AssetVotingModel = z
  .object({
    assetId: z.number().int(),
    hasUserVoted: z.boolean(),
    canUserVote: z.boolean(),
    shouldShowVotes: z.boolean(),
    upVotes: z.number().int(),
    downVotes: z.number().int(),
    reasonForNotAbleToVote: z.string(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_ = z
  .object({
    data: z.array(Roblox_Api_Develop_Models_Response_AssetVotingModel),
  })
  .partial();
const Roblox_Api_Develop_Models_UniverseModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    isArchived: z.boolean(),
    rootPlaceId: z.number().int(),
    isActive: z.boolean(),
    privacyType: z.string(),
    creatorType: z.string(),
    creatorTargetId: z.number().int(),
    creatorName: z.string(),
    created: z.string().datetime(),
    updated: z.string().datetime(),
  })
  .partial();
const Roblox_Api_Develop_Models_GameTemplateModel = z
  .object({
    gameTemplateType: z.string(),
    hasTutorials: z.boolean(),
    universe: Roblox_Api_Develop_Models_UniverseModel,
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_ = z
  .object({ data: z.array(Roblox_Api_Develop_Models_GameTemplateModel) })
  .partial();
const Roblox_Api_Develop_Models_GameUpdateMessageModel = z
  .object({
    universeId: z.number().int(),
    createdOn: z.string().datetime(),
    createdOnKey: z.string(),
    creatorType: z.string(),
    creatorId: z.number().int(),
    creatorName: z.string(),
    expiredOn: z.string().datetime(),
    content: z.string(),
    impressions: z.number().int(),
    plays: z.number().int(),
    unfollows: z.number().int(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Api_Develop_Models_UniverseModel),
  })
  .partial();
const Roblox_Api_Develop_Models_PlaceCompatibilityModel = z
  .object({
    status: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    platformName: z.string(),
    crashRatePercentage: z.number(),
  })
  .partial();
const Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse = z
  .object({
    Compatibilities: z.array(Roblox_Api_Develop_Models_PlaceCompatibilityModel),
  })
  .partial();
const Roblox_Api_Develop_Models_Response_StatisticsRange = z
  .object({ type: z.string(), data: z.record(z.number()) })
  .partial();
const Roblox_Api_Develop_Models_StatisticsResponse = z
  .object({
    placeId: z.number().int(),
    dataType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    dataGranularity: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    startTime: z.string().datetime(),
    endTime: z.string().datetime(),
    data: z.record(Roblox_Api_Develop_Models_Response_StatisticsRange),
  })
  .partial();
const Roblox_Api_Develop_Models_DeveloperProductRevenue = z
  .object({ developerProductName: z.string(), revenueAmount: z.number().int() })
  .partial();
const Roblox_Api_Develop_Models_DeveloperProductAggregationResponse = z
  .object({
    allDevicesDeveloperProductRevenue: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
    developerProductRevenueByDevice: z
      .object({
        Computer: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
        Phone: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
        Tablet: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
        Console: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
        VR: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
      })
      .partial(),
  })
  .partial();
const Roblox_Api_Develop_Models_Response_StatisticsAgeDataResponse = z
  .object({ isAgeDataAvailable: z.boolean() })
  .partial();
const Roblox_Web_Responses_Users_SkinnyUserResponse = z
  .object({ id: z.number().int(), name: z.string(), displayName: z.string() })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_ = z
  .object({ data: z.array(Roblox_Web_Responses_Users_SkinnyUserResponse) })
  .partial();
const Roblox_Web_Responses_Plugins_PluginResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    commentsEnabled: z.boolean(),
    versionId: z.number().int(),
    created: z.string().datetime(),
    updated: z.string().datetime(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_ = z
  .object({ data: z.array(Roblox_Web_Responses_Plugins_PluginResponse) })
  .partial();
const Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse = z
  .object({
    isPlayFabDataSourceChartsEnabled: z.boolean(),
    playFabDataSourceChartsAvailableByKPITypes: z.array(z.string()),
  })
  .partial();
const Roblox_Api_Develop_Models_UniverseSettingsResponse = z
  .object({
    allowPrivateServers: z.boolean(),
    privateServerPrice: z.number().int(),
    id: z.number().int(),
    name: z.string(),
    universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    universeScaleType: z.union([z.literal(1), z.literal(2)]),
    universeAnimationType: z.union([z.literal(1), z.literal(2)]),
    universeCollisionType: z.union([z.literal(1), z.literal(2)]),
    universeBodyType: z.union([z.literal(1), z.literal(2)]),
    universeJointPositioningType: z.union([z.literal(1), z.literal(2)]),
    isArchived: z.boolean(),
    isFriendsOnly: z.boolean(),
    genre: z.union([
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
    playableDevices: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])),
    isForSale: z.boolean(),
    price: z.number().int(),
    isStudioAccessToApisAllowed: z.boolean(),
    privacyType: z.string(),
  })
  .partial();
const Roblox_Api_Develop_Models_UniverseSettingsRequest = z
  .object({
    name: z.string(),
    universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    universeScaleType: z.union([z.literal(1), z.literal(2)]),
    universeAnimationType: z.union([z.literal(1), z.literal(2)]),
    universeCollisionType: z.union([z.literal(1), z.literal(2)]),
    universeBodyType: z.union([z.literal(1), z.literal(2)]),
    universeJointPositioningType: z.union([z.literal(1), z.literal(2)]),
    isArchived: z.boolean(),
    isFriendsOnly: z.boolean(),
    genre: z.union([
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
    playableDevices: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])),
    isForSale: z.boolean(),
    price: z.number().int(),
  })
  .partial();
const Roblox_Api_Develop_Models_PrivateServerDetailsResponse = z
  .object({
    isEnabled: z.boolean(),
    price: z.number().int(),
    activeServersCount: z.number().int(),
    activeSubscriptionsCount: z.number().int(),
  })
  .partial();
const Roblox_Api_Develop_Models_LiveStatsResponseModel = z
  .object({
    totalPlayerCount: z.number().int(),
    playerCountsByDeviceType: z.record(z.number()),
    gameCount: z.number().int(),
  })
  .partial();
const Roblox_Api_Develop_Models_UniversePermissionsModel = z
  .object({ canManage: z.boolean(), canCloudEdit: z.boolean() })
  .partial();
const Roblox_Api_Develop_Models_IPlaceModel = z.object({}).partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Api_Develop_Models_IPlaceModel),
  })
  .partial();
const Roblox_Api_Develop_Models_Response_TeamCreateSettingsResponse = z.object({ isEnabled: z.boolean() }).partial();
const Roblox_Api_Develop_Models_UpdateTeamCreateSettingsRequest = z.object({ isEnabled: z.boolean() }).partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();
const Roblox_Api_Develop_Models_TeamCreateMembershipRequest = z.object({ userId: z.number().int() }).partial();
const Roblox_Api_Develop_Models_UserResponse = z
  .object({
    buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    userId: z.number().int(),
    username: z.string(),
    displayName: z.string(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Api_Develop_Models_UserResponse),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_ = z
  .object({ data: z.array(Roblox_Api_Develop_Models_UniverseModel) })
  .partial();
const Roblox_Api_Develop_Models_UniverseIdPermissionsModel = z
  .object({
    universeId: z.number().int(),
    canManage: z.boolean(),
    canCloudEdit: z.boolean(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_ = z
  .object({
    data: z.array(Roblox_Api_Develop_Models_UniverseIdPermissionsModel),
  })
  .partial();
const Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel = z
  .object({ id: z.number().int(), isEnabled: z.boolean() })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_ = z
  .object({
    data: z.array(Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel),
  })
  .partial();
const Roblox_Api_Develop_Models_GroupModel = z.object({ id: z.number().int(), name: z.string() }).partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_ = z
  .object({ data: z.array(Roblox_Api_Develop_Models_GroupModel) })
  .partial();
const Roblox_Api_Develop_Models_Response_GameUpdateTextFilterResponse = z
  .object({
    filteredGameUpdateText: z.string(),
    isFiltered: z.boolean(),
    moderationLevel: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  })
  .partial();
const Roblox_Api_Develop_Models_PlaceConfigurationModel = z
  .object({ name: z.string(), description: z.string() })
  .partial();
const Roblox_Api_Develop_Models_PlaceModel = z
  .object({
    id: z.number().int(),
    universeId: z.number().int(),
    name: z.string(),
    description: z.string(),
  })
  .partial();
const Roblox_Api_Develop_Models_AliasRequest = z
  .object({
    name: z.string(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    targetId: z.number().int(),
  })
  .partial();
const Roblox_Api_Develop_DeveloperProductResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    Description: z.string(),
    shopId: z.number().int(),
    iconImageAssetId: z.number().int(),
  })
  .partial();
const Roblox_Api_Develop_Models_DeveloperProductsUpdateModel = z
  .object({
    Name: z.string(),
    Description: z.string(),
    IconImageAssetId: z.number().int(),
    PriceInRobux: z.number().int(),
  })
  .partial();
const Roblox_Develop_Api_UpdatePluginRequest = z
  .object({
    name: z.string(),
    description: z.string(),
    commentsEnabled: z.boolean(),
  })
  .partial();

const schemas = {
  Roblox_Api_Develop_Models_Response_AssetVotingModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_,
  Roblox_Api_Develop_Models_UniverseModel,
  Roblox_Api_Develop_Models_GameTemplateModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_,
  Roblox_Api_Develop_Models_GameUpdateMessageModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  Roblox_Api_Develop_Models_PlaceCompatibilityModel,
  Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse,
  Roblox_Api_Develop_Models_Response_StatisticsRange,
  Roblox_Api_Develop_Models_StatisticsResponse,
  Roblox_Api_Develop_Models_DeveloperProductRevenue,
  Roblox_Api_Develop_Models_DeveloperProductAggregationResponse,
  Roblox_Api_Develop_Models_Response_StatisticsAgeDataResponse,
  Roblox_Web_Responses_Users_SkinnyUserResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_,
  Roblox_Web_Responses_Plugins_PluginResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_,
  Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse,
  Roblox_Api_Develop_Models_UniverseSettingsResponse,
  Roblox_Api_Develop_Models_UniverseSettingsRequest,
  Roblox_Api_Develop_Models_PrivateServerDetailsResponse,
  Roblox_Api_Develop_Models_LiveStatsResponseModel,
  Roblox_Api_Develop_Models_UniversePermissionsModel,
  Roblox_Api_Develop_Models_IPlaceModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_,
  Roblox_Api_Develop_Models_Response_TeamCreateSettingsResponse,
  Roblox_Api_Develop_Models_UpdateTeamCreateSettingsRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Api_Develop_Models_TeamCreateMembershipRequest,
  Roblox_Api_Develop_Models_UserResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_,
  Roblox_Api_Develop_Models_UniverseIdPermissionsModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_,
  Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_,
  Roblox_Api_Develop_Models_GroupModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_,
  Roblox_Api_Develop_Models_Response_GameUpdateTextFilterResponse,
  Roblox_Api_Develop_Models_PlaceConfigurationModel,
  Roblox_Api_Develop_Models_PlaceModel,
  Roblox_Api_Develop_Models_AliasRequest,
  Roblox_Api_Develop_DeveloperProductResponse,
  Roblox_Api_Develop_Models_DeveloperProductsUpdateModel,
  Roblox_Develop_Api_UpdatePluginRequest,
};

export const getV1assetsvoting = {
  method: 'get' as const,
  path: '/v1/assets/voting',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    assetIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_,
  errors: [],
};
export const getV1gametemplates = {
  method: 'get' as const,
  path: '/v1/gametemplates',
  baseUrl: 'https://develop.roblox.com',
  description: `Templates subject to change without notice.
Sort order of templates specified by Roblox.`,
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_,
  errors: [],
};
export const getV1gameUpdateNotificationsUniverseId = {
  method: 'get' as const,
  path: '/v1/gameUpdateNotifications/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: z.array(Roblox_Api_Develop_Models_GameUpdateMessageModel),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `User is not authorized for this action on the universe.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `universeId is invalid.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `The Game Updates Infrastructure Service is unavailable.`,
      schema: z.void(),
    },
  ],
};
export const postV1gameUpdateNotificationsUniverseId = {
  method: 'post' as const,
  path: '/v1/gameUpdateNotifications/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.string(),
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_GameUpdateMessageModel,
  errors: [
    {
      status: 400,
      description: `Called with invalid arguments.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `User is not authorized for this action on the universe.
0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `universeId is invalid.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `The game update text is blocked by the filter.`,
      schema: z.void(),
    },
  ],
};
export const postV1gameUpdateNotificationsfilter = {
  method: 'post' as const,
  path: '/v1/gameUpdateNotifications/filter',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.string(),
  },
  response: Roblox_Api_Develop_Models_Response_GameUpdateTextFilterResponse,
  errors: [
    {
      status: 400,
      description: `Called with invalid arguments.`,
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
      status: 500,
      description: `The text filter service is unavailable.`,
      schema: z.void(),
    },
  ],
};
export const getV1groupsGroupIduniverses = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    groupId: z.number().int(),
    isArchived: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `Invalid groupId.`,
      schema: z.void(),
    },
  ],
};
export const patchV1placesPlaceId = {
  method: 'patch' as const,
  path: '/v1/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  description: `Currently the only supported functionality for updating the configuration is around Name, and Description.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_PlaceConfigurationModel,
    placeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_PlaceModel,
  errors: [
    {
      status: 400,
      description: `placeId is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const postV1placesPlaceId = {
  method: 'post' as const,
  path: '/v1/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  description: `Currently the only supported functionality for updating the configuration is around Name, and Description.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_PlaceConfigurationModel,
    placeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_PlaceModel,
  errors: [
    {
      status: 400,
      description: `placeId is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1placesPlaceIdcompatibilities = {
  method: 'get' as const,
  path: '/v1/places/:placeId/compatibilities',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse,
  errors: [
    {
      status: 400,
      description: `placeId is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.`,
      schema: z.void(),
    },
  ],
};
export const getV1placesPlaceIdstatsType = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/:type',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    granularity: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    divisionType: z.union([z.literal(0), z.literal(1)]).optional(),
    startTime: z.string().datetime().optional(),
    endTime: z.string().datetime().optional(),
  },
  response: Roblox_Api_Develop_Models_StatisticsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The place is invalid.
3: Too many data points requested.
4: The requested data type is not known.`,
      schema: z.void(),
    },
  ],
};
export const getV1placesPlaceIdstatsTypelegacyflot = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/:type/legacy/flot',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    timeFrame: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    divisionType: z.union([z.literal(0), z.literal(1)]).optional(),
    startTime: z.string().datetime().optional(),
    endTime: z.string().datetime().optional(),
  },
  response: z.unknown(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: The place is invalid.
3: Too many data points requested.
4: The requested data type is not known.`,
      schema: z.void(),
    },
  ],
};
export const getV1placesPlaceIdstatsdeveloperProductAggregation = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/developer-product-aggregation',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
    timeFrame: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  },
  response: Roblox_Api_Develop_Models_DeveloperProductAggregationResponse,
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
      schema: z.void(),
    },
  ],
};
export const getV1placesPlaceIdstatsisAgeDataAvailable = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/is-age-data-available',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
  },
  response: z.object({ isAgeDataAvailable: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
      schema: z.void(),
    },
  ],
};
export const getV1placesPlaceIdteamcreateactive_sessionmembers = {
  method: 'get' as const,
  path: '/v1/places/:placeId/teamcreate/active_session/members',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    placeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The universe is invalid.
5: The place is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.
4: TeamCreate on universe is disabled.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `0: An unknown error occurred.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `6: Multiple active sessions in a Team Create place.`,
      schema: z.void(),
    },
  ],
};
export const getV1plugins = {
  method: 'get' as const,
  path: '/v1/plugins',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    pluginIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_,
  errors: [
    {
      status: 400,
      description: `1: Too many ids.
2: The format of the ids are invalid.`,
      schema: z.void(),
    },
  ],
};
export const patchV1pluginsPluginId = {
  method: 'patch' as const,
  path: '/v1/plugins/:pluginId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Develop_Api_UpdatePluginRequest,
    pluginId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `5: Description too long.
6: Text moderated.
7: Invalid name.
8: The request body is missing.`,
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
4: Insufficient permissions.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `3: The id is invalid.`,
      schema: z.void(),
    },
  ],
};
export const getV1searchuniverses = {
  method: 'get' as const,
  path: '/v1/search/universes',
  baseUrl: 'https://develop.roblox.com',
  description: `PoC of search endpoint which supports filters in search query string and special syntax for sorts.
IMPORTANT: filter names, values, sort values - are case sensitive!`,
  requestFormat: 'json' as const,
  parameters: {
    search: z.string(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
    q: z.string().optional(),
    sort: z.array(z.unknown()).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `&#x27;q&#x27; field value contains filter which value has a wrong format or is not in allowed values list.
or
&#x27;q&#x27; field value doesn&#x27;t contain filter which is required.
or
&#x27;sort&#x27; field value has a wrong format or is not in allowed values list.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `Unknown error retrieving search results.`,
      schema: z.void(),
    },
  ],
};
export const getV1statscreatorDashboardMetadata = {
  method: 'get' as const,
  path: '/v1/stats/creator-dashboard-metadata',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseId = {
  method: 'get' as const,
  path: '/v1/universes/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniverseModel,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
      schema: z.void(),
    },
  ],
};
export const postV1universesUniverseIdactivate = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/activate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
2: This universe does not have a root place.`,
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
3: You are not authorized to configure this universe.
6: The root place for this universe is under review and can not be activated.
7: Creator already has the maximum number of places active.`,
      schema: z.void(),
    },
  ],
};
export const postV1universesUniverseIdaliases = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/aliases',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_AliasRequest,
    universeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: The request body is missing.
2: The alias name is required.
3: The alias type is required.
4: The alias target is required.
6: The alias name is invalid.`,
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
10: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `7: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `8: An alias with the provided name already exists.`,
      schema: z.void(),
    },
  ],
};
export const deleteV1universesUniverseIdaliasesName = {
  method: 'delete' as const,
  path: '/v1/universes/:universeId/aliases/:name',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
    name: z.string(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `7: The universe does not exist.
9: An alias with the provided name does not exist.`,
      schema: z.void(),
    },
  ],
};
export const patchV1universesUniverseIdaliasesName = {
  method: 'patch' as const,
  path: '/v1/universes/:universeId/aliases/:name',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_AliasRequest,
    universeId: z.number().int(),
    name: z.string(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: The request body is missing.
5: Either none or both alias type and target should be provided.
6: The alias name is invalid.`,
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
10: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `7: The universe does not exist.
9: An alias with the provided name does not exist.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `8: An alias with the provided name already exists.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdconfiguration = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniverseSettingsResponse,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
  ],
};
export const patchV1universesUniverseIdconfiguration = {
  method: 'patch' as const,
  path: '/v1/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_UniverseSettingsRequest,
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniverseSettingsResponse,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
3: Invalid UniverseAvatarType.
4: Invalid UniverseScaleType.
5: Invalid UniverseAnimationType.
6: Invalid UniverseCollisionType.
7: New universe name or description has been rejected.
8: New universe name is too long.
10: Invalid UniverseBodyType.
11: Invalid UniverseJointPositioningType.
12: The universe has no root place.
13: At least one playable device must be provided.
15: Price is required when isForSale is true.
16: This game cannot be offered for sale because it is not public.
17: This game cannot be offered for sale because it has private servers enabled.
18: The game price is outside of the allowed range.
19: Invalid genre.
20: The request body is missing.
21: Invalid device type.
22: Invalid asset type.
23: Invalid value, the min must be less than or equal to the max
24: Invalid scale value`,
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
2: You are not authorized to configure this universe.
14: You are not authorized to sell games.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `9: Failed to shutdown all intances of game after changing AvatarType. The change has been reverted.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdconfigurationvipServers = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/configuration/vip-servers',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_PrivateServerDetailsResponse,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `2: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
  ],
};
export const postV1universesUniverseIddeactivate = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/deactivate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
2: This universe does not have a root place.`,
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
3: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
  ],
};
export const postV1universesUniverseIddeveloperproducts = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/developerproducts',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
    name: z.string(),
    description: z.string(),
    priceInRobux: z.number().int(),
    iconImageAssetId: z.number().int().optional(),
  },
  response: Roblox_Api_Develop_DeveloperProductResponse,
  errors: [
    {
      status: 400,
      description: `4: Developer product name already exists in the universe.
9: Price in robux can not be negative.`,
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
2: Product is created by another user.
6: User doesn&#x27;t have access to universe.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `5: Universe not found.
7: Shop id is not found.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `11: Too many requests made in a short time. Wait for a little bit and try again.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `8: Unknown error occurred.`,
      schema: z.void(),
    },
  ],
};
export const postV1universesUniverseIddeveloperproductsProductIdupdate = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/developerproducts/:productId/update',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Develop_Models_DeveloperProductsUpdateModel,
    universeId: z.number().int(),
    productId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: Product not found.
3: Developer product not found.
4: Developer product name already exists in the universe.
5: Universe not found.
7: Shop id is not found.
9: Price in robux can not be negative.
10: The post body was not found or failed to parse.`,
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
2: Product is created by another user.
6: User doesn&#x27;t have access to universe.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `8: Unknown error occurred.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdliveStats = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/live-stats',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_LiveStatsResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
2: This universe does not have a root place.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `3: You are not authorized to configure this universe.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdpermissions = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/permissions',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniversePermissionsModel,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdplaces = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/places',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
    isUniverseCreation: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_,
  errors: [],
};
export const getV1universesUniverseIdteamcreate = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ isEnabled: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.Unauthorized`,
      schema: z.void(),
    },
  ],
};
export const patchV1universesUniverseIdteamcreate = {
  method: 'patch' as const,
  path: '/v1/universes/:universeId/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  description: `Enables, or disables team create for a universe.`,
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ isEnabled: z.boolean() }).partial(),
    universeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.Unauthorized
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const deleteV1universesUniverseIdteamcreatememberships = {
  method: 'delete' as const,
  path: '/v1/universes/:universeId/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ userId: z.number().int() }).partial(),
    universeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse OR Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUser`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TeamCreateDisabled
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdteamcreatememberships = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_,
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TeamCreateDisabled`,
      schema: z.void(),
    },
  ],
};
export const getV1universesmultiget = {
  method: 'get' as const,
  path: '/v1/universes/multiget',
  baseUrl: 'https://develop.roblox.com',
  description: `If a universe can not be found for a given ID (such as -1) it will be skipped.`,
  requestFormat: 'json' as const,
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `8: No universe IDs sent to get.
9: Too many universe IDs sent to get, the limit is: `,
      schema: z.void(),
    },
  ],
};
export const getV1universesmultigetpermissions = {
  method: 'get' as const,
  path: '/v1/universes/multiget/permissions',
  baseUrl: 'https://develop.roblox.com',
  description: `If a universe can not be found for a given ID (such as -1) it will be skipped.`,
  requestFormat: 'json' as const,
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_,
  errors: [
    {
      status: 400,
      description: `8: No universe IDs sent to get.
9: Too many universe IDs sent to get, the limit is: `,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesmultigetteamcreate = {
  method: 'get' as const,
  path: '/v1/universes/multiget/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_,
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TooManyUniverseIdsSent`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1userUserIdcanmanageAssetId = {
  method: 'get' as const,
  path: '/v1/user/:userId/canmanage/:assetId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    assetId: z.number().int(),
  },
  response: z.void(),
  errors: [],
};
export const getV1usergroupscanmanage = {
  method: 'get' as const,
  path: '/v1/user/groups/canmanage',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1userteamcreatememberships = {
  method: 'get' as const,
  path: '/v1/user/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1useruniverses = {
  method: 'get' as const,
  path: '/v1/user/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    isArchived: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `cursor is not valid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
