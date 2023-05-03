import { z } from 'zod';

const Roblox_Api_Develop_Models_Response_AssetVotingModel = z.object({
  assetId: z.number().int(),
  hasUserVoted: z.boolean(),
  canUserVote: z.boolean(),
  shouldShowVotes: z.boolean(),
  upVotes: z.number().int(),
  downVotes: z.number().int(),
  reasonForNotAbleToVote: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_ = z.object({
  data: z.array(Roblox_Api_Develop_Models_Response_AssetVotingModel),
});
const Roblox_Api_Develop_Models_UniverseModel = z.object({
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
});
const Roblox_Api_Develop_Models_GameTemplateModel = z.object({
  gameTemplateType: z.string(),
  hasTutorials: z.boolean(),
  universe: Roblox_Api_Develop_Models_UniverseModel,
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_ = z.object({
  data: z.array(Roblox_Api_Develop_Models_GameTemplateModel),
});
const Roblox_Api_Develop_Models_GameUpdateMessageModel = z.object({
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
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Api_Develop_Models_UniverseModel),
});
const Roblox_Api_Develop_Models_PlaceCompatibilityModel = z.object({
  status: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  platformName: z.string(),
  crashRatePercentage: z.number(),
});
const Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse = z.object({
  Compatibilities: z.array(Roblox_Api_Develop_Models_PlaceCompatibilityModel),
});
const Roblox_Api_Develop_Models_Response_StatisticsRange = z.object({
  type: z.string(),
  data: z.record(z.number()),
});
const Roblox_Api_Develop_Models_StatisticsResponse = z.object({
  placeId: z.number().int(),
  dataType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  dataGranularity: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  data: z.record(Roblox_Api_Develop_Models_Response_StatisticsRange),
});
const Roblox_Api_Develop_Models_DeveloperProductRevenue = z.object({
  developerProductName: z.string(),
  revenueAmount: z.number().int(),
});
const Roblox_Api_Develop_Models_DeveloperProductAggregationResponse_developerProductRevenueByDevice = z.object({
  Computer: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
  Phone: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
  Tablet: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
  Console: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
  VR: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
});
const Roblox_Api_Develop_Models_DeveloperProductAggregationResponse = z.object({
  allDevicesDeveloperProductRevenue: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
  developerProductRevenueByDevice:
    Roblox_Api_Develop_Models_DeveloperProductAggregationResponse_developerProductRevenueByDevice,
});
const Roblox_Api_Develop_Models_Response_StatisticsAgeDataResponse = z.object({
  isAgeDataAvailable: z.boolean(),
});
const Roblox_Web_Responses_Users_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_ = z.object({
  data: z.array(Roblox_Web_Responses_Users_SkinnyUserResponse),
});
const Roblox_Web_Responses_Plugins_PluginResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  commentsEnabled: z.boolean(),
  versionId: z.number().int(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_ = z.object({
  data: z.array(Roblox_Web_Responses_Plugins_PluginResponse),
});
const Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse = z.object({
  isPlayFabDataSourceChartsEnabled: z.boolean(),
  playFabDataSourceChartsAvailableByKPITypes: z.array(z.string()),
});
const Roblox_Api_Develop_Models_UniverseSettingsResponse = z.object({
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
});
const Roblox_Api_Develop_Models_UniverseSettingsRequest = z.object({
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
});
const Roblox_Api_Develop_Models_PrivateServerDetailsResponse = z.object({
  isEnabled: z.boolean(),
  price: z.number().int(),
  activeServersCount: z.number().int(),
  activeSubscriptionsCount: z.number().int(),
});
const Roblox_Api_Develop_Models_LiveStatsResponseModel = z.object({
  totalPlayerCount: z.number().int(),
  playerCountsByDeviceType: z.record(z.number()),
  gameCount: z.number().int(),
});
const Roblox_Api_Develop_Models_UniversePermissionsModel = z.object({
  canManage: z.boolean(),
  canCloudEdit: z.boolean(),
});
const Roblox_Api_Develop_Models_IPlaceModel = z.object({});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Api_Develop_Models_IPlaceModel),
});
const Roblox_Api_Develop_Models_Response_TeamCreateSettingsResponse = z.object({
  isEnabled: z.boolean(),
});
const Roblox_Api_Develop_Models_UpdateTeamCreateSettingsRequest = z.object({
  isEnabled: z.boolean(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Api_Develop_Models_UserResponse = z.object({
  buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  userId: z.number().int(),
  username: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Api_Develop_Models_UserResponse),
});
const Roblox_Api_Develop_Models_TeamCreateMembershipRequest = z.object({
  userId: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_ = z.object({
  data: z.array(Roblox_Api_Develop_Models_UniverseModel),
});
const Roblox_Api_Develop_Models_UniverseIdPermissionsModel = z.object({
  universeId: z.number().int(),
  canManage: z.boolean(),
  canCloudEdit: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_ = z.object({
  data: z.array(Roblox_Api_Develop_Models_UniverseIdPermissionsModel),
});
const Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel = z.object({
  id: z.number().int(),
  isEnabled: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_ = z.object({
  data: z.array(Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel),
});
const Roblox_Api_Develop_Models_GroupModel = z.object({
  id: z.number().int(),
  name: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_ = z.object({
  data: z.array(Roblox_Api_Develop_Models_GroupModel),
});
const Roblox_Api_Develop_Models_Response_GameUpdateTextFilterResponse = z.object({
  filteredGameUpdateText: z.string(),
  isFiltered: z.boolean(),
  moderationLevel: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Api_Develop_Models_PlaceConfigurationModel = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_Api_Develop_Models_PlaceModel = z.object({
  id: z.number().int(),
  universeId: z.number().int(),
  name: z.string(),
  description: z.string(),
});
const Roblox_Api_Develop_Models_AliasRequest = z.object({
  name: z.string(),
  type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  targetId: z.number().int(),
});
const Roblox_Api_Develop_DeveloperProductResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  Description: z.string(),
  shopId: z.number().int(),
  iconImageAssetId: z.number().int(),
});
const Roblox_Api_Develop_Models_DeveloperProductsUpdateModel = z.object({
  Name: z.string(),
  Description: z.string(),
  IconImageAssetId: z.number().int(),
  PriceInRobux: z.number().int(),
});
const Roblox_Develop_Api_UpdatePluginRequest = z.object({
  name: z.string(),
  description: z.string(),
  commentsEnabled: z.boolean(),
});

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
  Roblox_Api_Develop_Models_DeveloperProductAggregationResponse_developerProductRevenueByDevice,
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
  Roblox_Api_Develop_Models_UserResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_,
  Roblox_Api_Develop_Models_TeamCreateMembershipRequest,
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

/**
 * @api get https://develop.roblox.com/v1/assets/voting
 * @param assetIds
 */
export const getAssetsVoting = {
  method: 'get' as const,
  path: '/v1/assets/voting',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetIds: {
      style: 'form',
    },
  },
  parameters: {
    assetIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_,
  errors: [],
};
/**
 * @api get https://develop.roblox.com/v1/gametemplates
 */
export const getGametemplates = {
  method: 'get' as const,
  path: '/v1/gametemplates',
  baseUrl: 'https://develop.roblox.com',
  description: `Templates subject to change without notice.
Sort order of templates specified by Roblox.`,
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_,
  errors: [],
};
/**
 * @api get https://develop.roblox.com/v1/gameUpdateNotifications/:universeId
 * @param universeId
 */
export const getGameupdatenotificationsUniverseid = {
  method: 'get' as const,
  path: '/v1/gameUpdateNotifications/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api post https://develop.roblox.com/v1/gameUpdateNotifications/:universeId
 * @param body The JSON object that will represent the body of the notification to be sent.
 * @param universeId
 */
export const postGameupdatenotificationsUniverseid = {
  method: 'post' as const,
  path: '/v1/gameUpdateNotifications/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api post https://develop.roblox.com/v1/gameUpdateNotifications/filter
 * @param body Game update message text.
 */
export const postGameupdatenotificationsFilter = {
  method: 'post' as const,
  path: '/v1/gameUpdateNotifications/filter',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
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
/**
 * @api get https://develop.roblox.com/v1/groups/:groupId/universes
 * @param groupId
 * @param isArchived
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidUniverses = {
  method: 'get' as const,
  path: '/v1/groups/:groupId/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    isArchived: {
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
/**
 * @api post https://develop.roblox.com/v1/places/:placeId
 * @param body
 * @param placeId
 */
export const postPlacesPlaceid = {
  method: 'post' as const,
  path: '/v1/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  description: `Currently the only supported functionality for updating the configuration is around Name, and Description.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    placeId: {
      style: 'simple',
    },
  },
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
/**
 * @api patch https://develop.roblox.com/v1/places/:placeId
 * @param body
 * @param placeId
 */
export const patchPlacesPlaceid = {
  method: 'patch' as const,
  path: '/v1/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  description: `Currently the only supported functionality for updating the configuration is around Name, and Description.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    placeId: {
      style: 'simple',
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/places/:placeId/compatibilities
 * @param placeId
 */
export const getPlacesPlaceidCompatibilities = {
  method: 'get' as const,
  path: '/v1/places/:placeId/compatibilities',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/places/:placeId/stats/:type
 * @param placeId
 * @param type
 * @param granularity
 * @param divisionType
 * @param startTime
 * @param endTime
 */
export const getPlacesPlaceidStatsType = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/:type',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    type: {
      style: 'simple',
    },
    granularity: {
      style: 'form',
      explode: true,
    },
    divisionType: {
      style: 'form',
      explode: true,
    },
    startTime: {
      style: 'form',
      explode: true,
    },
    endTime: {
      style: 'form',
      explode: true,
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/places/:placeId/stats/:type/legacy/flot
 * @param placeId
 * @param type
 * @param timeFrame
 * @param divisionType
 * @param startTime
 * @param endTime
 */
export const getPlacesPlaceidStatsTypeLegacyFlot = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/:type/legacy/flot',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    type: {
      style: 'simple',
    },
    timeFrame: {
      style: 'form',
      explode: true,
    },
    divisionType: {
      style: 'form',
      explode: true,
    },
    startTime: {
      style: 'form',
      explode: true,
    },
    endTime: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeId: z.number().int(),
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    timeFrame: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    divisionType: z.union([z.literal(0), z.literal(1)]).optional(),
    startTime: z.string().datetime().optional(),
    endTime: z.string().datetime().optional(),
  },
  response: z.object({}),
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
/**
 * @api get https://develop.roblox.com/v1/places/:placeId/stats/developer-product-aggregation
 * @param placeId
 * @param timeFrame
 */
export const getPlacesPlaceidStatsDeveloperProductAggregation = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/developer-product-aggregation',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    timeFrame: {
      style: 'form',
      explode: true,
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/places/:placeId/stats/is-age-data-available
 * @param placeId
 */
export const getPlacesPlaceidStatsIsAgeDataAvailable = {
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/is-age-data-available',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
  },
  parameters: {
    placeId: z.number().int(),
  },
  response: z.object({ isAgeDataAvailable: z.boolean() }),
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
/**
 * @api get https://develop.roblox.com/v1/places/:placeId/teamcreate/active_session/members
 * @param placeId
 * @param limit
 * @param cursor
 */
export const getPlacesPlaceidTeamcreateActive_sessionMembers = {
  method: 'get' as const,
  path: '/v1/places/:placeId/teamcreate/active_session/members',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
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
  },
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
/**
 * @api get https://develop.roblox.com/v1/plugins
 * @param pluginIds
 */
export const getPlugins = {
  method: 'get' as const,
  path: '/v1/plugins',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    pluginIds: {
      style: 'form',
    },
  },
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
/**
 * @api patch https://develop.roblox.com/v1/plugins/:pluginId
 * @param body The Roblox.Develop.Api.UpdatePluginRequest.
 * @param pluginId
 */
export const patchPluginsPluginid = {
  method: 'patch' as const,
  path: '/v1/plugins/:pluginId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    pluginId: {
      style: 'simple',
    },
  },
  parameters: {
    body: Roblox_Develop_Api_UpdatePluginRequest,
    pluginId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api get https://develop.roblox.com/v1/search/universes
 * @param search
 * @param limit
 * @param cursor
 * @param sortOrder
 * @param q
 * @param sort
 */
export const getSearchUniverses = {
  method: 'get' as const,
  path: '/v1/search/universes',
  baseUrl: 'https://develop.roblox.com',
  description: `PoC of search endpoint which supports filters in search query string and special syntax for sorts.
IMPORTANT: filter names, values, sort values - are case sensitive!`,
  requestFormat: 'json' as const,
  serializationMethod: {
    search: {
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
    q: {
      style: 'form',
      explode: true,
    },
    sort: {
      style: 'form',
    },
  },
  parameters: {
    search: z.unknown(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
    q: z.string().optional(),
    sort: z.array(z.any()).optional(),
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
/**
 * @api get https://develop.roblox.com/v1/stats/creator-dashboard-metadata
 */
export const getStatsCreatorDashboardMetadata = {
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId
 * @param universeId
 */
export const getUniversesUniverseid = {
  method: 'get' as const,
  path: '/v1/universes/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api post https://develop.roblox.com/v1/universes/:universeId/activate
 * @param universeId
 */
export const postUniversesUniverseidActivate = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/activate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api post https://develop.roblox.com/v1/universes/:universeId/aliases
 * @param body The request body containing the alias attributes.
 * @param universeId
 */
export const postUniversesUniverseidAliases = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/aliases',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    body: Roblox_Api_Develop_Models_AliasRequest,
    universeId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api delete https://develop.roblox.com/v1/universes/:universeId/aliases/:name
 * @param universeId
 * @param name
 */
export const deleteUniversesUniverseidAliasesName = {
  method: 'delete' as const,
  path: '/v1/universes/:universeId/aliases/:name',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    name: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
    name: z.string(),
  },
  response: z.object({}),
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
/**
 * @api patch https://develop.roblox.com/v1/universes/:universeId/aliases/:name
 * @param body The request body containing the alias attributes to update.
 * @param universeId
 * @param name
 */
export const patchUniversesUniverseidAliasesName = {
  method: 'patch' as const,
  path: '/v1/universes/:universeId/aliases/:name',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
    name: {
      style: 'simple',
    },
  },
  parameters: {
    body: Roblox_Api_Develop_Models_AliasRequest,
    universeId: z.number().int(),
    name: z.string(),
  },
  response: z.object({}),
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/configuration
 * @param universeId
 */
export const getUniversesUniverseidConfiguration = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api patch https://develop.roblox.com/v1/universes/:universeId/configuration
 * @param body The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
 * @param universeId
 */
export const patchUniversesUniverseidConfiguration = {
  method: 'patch' as const,
  path: '/v1/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/configuration/vip-servers
 * @param universeId
 */
export const getUniversesUniverseidConfigurationVipServers = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/configuration/vip-servers',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api post https://develop.roblox.com/v1/universes/:universeId/deactivate
 * @param universeId
 */
export const postUniversesUniverseidDeactivate = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/deactivate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api post https://develop.roblox.com/v1/universes/:universeId/developerproducts
 * @param universeId
 * @param name
 * @param description
 * @param priceInRobux
 * @param iconImageAssetId
 */
export const postUniversesUniverseidDeveloperproducts = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/developerproducts',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    name: {
      style: 'form',
      explode: true,
    },
    description: {
      style: 'form',
      explode: true,
    },
    priceInRobux: {
      style: 'form',
      explode: true,
    },
    iconImageAssetId: {
      style: 'form',
      explode: true,
    },
  },
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
/**
 * @api post https://develop.roblox.com/v1/universes/:universeId/developerproducts/:productId/update
 * @param body
 * @param universeId
 * @param productId
 */
export const postUniversesUniverseidDeveloperproductsProductidUpdate = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/developerproducts/:productId/update',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
    productId: {
      style: 'simple',
    },
  },
  parameters: {
    body: Roblox_Api_Develop_Models_DeveloperProductsUpdateModel,
    universeId: z.number().int(),
    productId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/live-stats
 * @param universeId
 */
export const getUniversesUniverseidLiveStats = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/live-stats',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/permissions
 * @param universeId
 */
export const getUniversesUniverseidPermissions = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/permissions',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/places
 * @param universeId
 * @param isUniverseCreation
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUniversesUniverseidPlaces = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/places',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    isUniverseCreation: {
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/teamcreate
 * @param universeId
 */
export const getUniversesUniverseidTeamcreate = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ isEnabled: z.boolean() }),
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
/**
 * @api patch https://develop.roblox.com/v1/universes/:universeId/teamcreate
 * @param body The request body containing the team create settings.
 * @param universeId
 */
export const patchUniversesUniverseidTeamcreate = {
  method: 'patch' as const,
  path: '/v1/universes/:universeId/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  description: `Enables, or disables team create for a universe.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    body: z.object({ isEnabled: z.boolean() }),
    universeId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api get https://develop.roblox.com/v1/universes/:universeId/teamcreate/memberships
 * @param universeId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUniversesUniverseidTeamcreateMemberships = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
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
/**
 * @api delete https://develop.roblox.com/v1/universes/:universeId/teamcreate/memberships
 * @param body The request body.
 * @param universeId
 */
export const deleteUniversesUniverseidTeamcreateMemberships = {
  method: 'delete' as const,
  path: '/v1/universes/:universeId/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    body: z.object({ userId: z.number().int() }),
    universeId: z.number().int(),
  },
  response: z.object({}),
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
/**
 * @api get https://develop.roblox.com/v1/universes/multiget
 * @param ids
 */
export const getUniversesMultiget = {
  method: 'get' as const,
  path: '/v1/universes/multiget',
  baseUrl: 'https://develop.roblox.com',
  description: `If a universe can not be found for a given ID (such as -1) it will be skipped.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    ids: {
      style: 'form',
      explode: true,
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/universes/multiget/permissions
 * @param ids
 */
export const getUniversesMultigetPermissions = {
  method: 'get' as const,
  path: '/v1/universes/multiget/permissions',
  baseUrl: 'https://develop.roblox.com',
  description: `If a universe can not be found for a given ID (such as -1) it will be skipped.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    ids: {
      style: 'form',
      explode: true,
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/universes/multiget/teamcreate
 * @param ids
 */
export const getUniversesMultigetTeamcreate = {
  method: 'get' as const,
  path: '/v1/universes/multiget/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    ids: {
      style: 'form',
      explode: true,
    },
  },
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
/**
 * @api get https://develop.roblox.com/v1/user/:userId/canmanage/:assetId
 * @param userId
 * @param assetId
 */
export const getUserUseridCanmanageAssetid = {
  method: 'get' as const,
  path: '/v1/user/:userId/canmanage/:assetId',
  baseUrl: 'https://develop.roblox.com',
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
  response: z.void(),
  errors: [],
};
/**
 * @api get https://develop.roblox.com/v1/user/groups/canmanage
 */
export const getUserGroupsCanmanage = {
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
/**
 * @api get https://develop.roblox.com/v1/user/teamcreate/memberships
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUserTeamcreateMemberships = {
  method: 'get' as const,
  path: '/v1/user/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
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
/**
 * @api get https://develop.roblox.com/v1/user/universes
 * @param isArchived
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUserUniverses = {
  method: 'get' as const,
  path: '/v1/user/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    isArchived: {
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
