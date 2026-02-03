import { z } from 'zod';
import { endpoint } from '..';

const Roblox_AdConfiguration_Api_SponsoredCampaignModel = z.object({
  adId: z.number().int(),
  adSetId: z.number().int(),
  adName: z.string(),
  adStatus: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  creativeType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  creativeTargetId: z.number().int(),
  bidAmountInRobux: z.number().int(),
  budgetInRobux: z.number().int(),
  adSetStatus: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]),
  startDate: z.string().datetime({ offset: true }),
  endDate: z.string().datetime({ offset: true }),
  targetGender: z.union([z.literal(1), z.literal(2), z.literal(4)]),
  targetAgeBracket: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16)]),
  targetDeviceType: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16), z.literal(32)]),
  campaignTargetType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  campaignTargetId: z.number().int(),
  totalSpendInRobux: z.number().int(),
  totalImpressions: z.number().int(),
  totalClicks: z.number().int(),
  totalConversions: z.number().int(),
  impressionConversions: z.number().int(),
  clickConversions: z.number().int(),
});
const Roblox_AdConfiguration_Api_GetSponsoredCampaignsResponse = z.object({
  sponsoredCampaigns: z.array(Roblox_AdConfiguration_Api_SponsoredCampaignModel),
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
});
const Roblox_AdConfiguration_Api_SponsoredGameV2Model = z.object({
  adId: z.number().int(),
  adSetId: z.number().int(),
  adName: z.string(),
  adStatus: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  creativeType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  creativeTargetId: z.number().int(),
  creativeUrl: z.string(),
  bidAmountInRobux: z.number().int(),
  budgetInRobux: z.number().int(),
  adSetStatus: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]),
  startDate: z.string().datetime({ offset: true }),
  endDate: z.string().datetime({ offset: true }),
  targetGender: z.union([z.literal(1), z.literal(2), z.literal(4)]),
  targetAgeBracket: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16)]),
  targetDeviceType: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16), z.literal(32)]),
  campaignTargetType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  campaignTargetId: z.number().int(),
  totalSpendInRobux: z.number().int(),
  totalImpressions: z.number().int(),
  totalClicks: z.number().int(),
  totalConversions: z.number().int(),
  impressionConversions: z.number().int(),
  clickConversions: z.number().int(),
});
const Roblox_AdConfiguration_Api_GetSponsoredGamesResponse = z.object({
  sponsoredGames: z.array(Roblox_AdConfiguration_Api_SponsoredGameV2Model),
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
});
const Roblox_AdConfiguration_Api_Models_UniverseModel = z.object({
  id: z.number().int(),
  name: z.string(),
});
const Roblox_AdConfiguration_Api_Models_GetRecentAdsRankedUniversesResponse = z.object({
  universes: z.array(Roblox_AdConfiguration_Api_Models_UniverseModel),
});
const Roblox_AdConfiguration_Api_CreativeModel = z.object({
  creativeId: z.number().int(),
  creativeType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_AdConfiguration_Api_Models_CreateSponsoredCampaignRequest = z.object({
  campaignTargetId: z.number().int(),
  campaignTargetType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  targetGender: z.union([z.literal(1), z.literal(2), z.literal(4)]),
  targetAgeBracket: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16)]),
  startDate: z.string().datetime({ offset: true }),
  endDate: z.string().datetime({ offset: true }),
  targetDeviceType: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16), z.literal(32)]),
  campaignName: z.string(),
  dailyBidAmountInRobux: z.number().int(),
  placementLocation: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(4),
    z.literal(8),
    z.literal(16),
    z.literal(32),
    z.literal(64),
    z.literal(128),
  ]),
  creativeModel: Roblox_AdConfiguration_Api_CreativeModel,
});
const Roblox_AdConfiguration_Api_Models_GetEligibleCampaignTargetsRequest = z.object({
  campaignTargetTypes: z.array(z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])),
  groupId: z.number().int(),
});
const Roblox_AdConfiguration_Api_Models_CampaignTargetModel = z.object({
  campaignTargetType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  campaignTargetId: z.number().int(),
  name: z.string(),
});
const Roblox_AdConfiguration_Api_Models_GetCampaignTargetsResponse = z.object({
  campaignTargetModels: z.array(Roblox_AdConfiguration_Api_Models_CampaignTargetModel),
});
const Roblox_AdConfiguration_Api_Models_StopSponsoredCampaignRequest = z.object({ adSetId: z.number().int() });
const Roblox_AdConfiguration_Api_CreateSponsoredGameV2Request = z.object({
  universeId: z.number().int(),
  targetGender: z.union([z.literal(1), z.literal(2), z.literal(4)]),
  targetAgeBracket: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16)]),
  budgetInRobux: z.number().int(),
  startDate: z.string().datetime({ offset: true }),
  endDate: z.string().datetime({ offset: true }),
  targetDeviceType: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(8), z.literal(16), z.literal(32)]),
  adName: z.string(),
  bidAmountInRobux: z.number().int(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_AdConfiguration_Api_Models_StopSponsoredGameV2Request = z.object({
  adSetId: z.number().int(),
});

/**
 * @api GET https://adconfiguration.roblox.com/v2/sponsored-campaigns
 * @param campaignTargetType
 * @param campaignTargetId
 * @param includeReportingStats
 * @param isArchived
 * @param pageCursor
 */
export const getSponsoredCampaigns = endpoint({
  method: 'GET',
  path: '/v2/sponsored-campaigns',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    campaignTargetType: {},
    campaignTargetId: {},
    includeReportingStats: {},
    isArchived: {},
    pageCursor: {},
  },
  parameters: {
    campaignTargetType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    campaignTargetId: z.number().int(),
    includeReportingStats: z.boolean().optional().default(false),
    isArchived: z.boolean().optional().default(false),
    pageCursor: z.string().optional(),
  },
  response: Roblox_AdConfiguration_Api_GetSponsoredCampaignsResponse,
  errors: [
    {
      status: 400,
      description: `22: Invalid campaign target ID.
23: Invalid campaign target type.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api POST https://adconfiguration.roblox.com/v2/sponsored-campaigns/create
 * @param body Roblox.AdConfiguration.Api.Models.CreateSponsoredCampaignRequest
 */
export const postSponsoredCampaignsCreate = endpoint({
  method: 'POST',
  path: '/v2/sponsored-campaigns/create',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AdConfiguration_Api_Models_CreateSponsoredCampaignRequest,
  response: z.number().int(),
  errors: [
    {
      status: 400,
      description: `2: Daily budget is lower than minimum allowed.
3: Total budget must be greater than 0.
4: Ad name cannot be empty.
5: Start date must not be a future date.
6: End date must be a future date.
7: Start date must be earlier than end date.
8: Total budget does not match daily spend and number of days being scheduled
9: Cannot load the universe for the specified universe id.
11: Invalid target age bracket.
12: Invalid target gender.
13: Invalid target device type.
14: Invalid ad set id.
15: Ad name cannot exceed 255 characters.
16: Insufficient Robux balance.
17: Name has already been taken.
18: Daily budget is higher than maximum allowed.
19: Invalid group id.
20: Number of days scheduled exceeded maximum days allowed.
21: Your experience is currently not eligible for advertising.
22: Invalid campaign target ID.
23: Invalid campaign target type.
24: Invalid creative ID.
25: Invalid creative type.
28: Total budget must be campaign duration * daily bid
29: The target is not eligible for new campaigns
30: Invalid user ID`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
10: Insufficient permissions.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.
31: Internal server error`,
    },
    {
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api GET https://adconfiguration.roblox.com/v2/sponsored-campaigns/eligible-asset-type-ids
 */
export const getSponsoredCampaignsEligibleAssetTypeIds = endpoint({
  method: 'GET',
  path: '/v2/sponsored-campaigns/eligible-asset-type-ids',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  response: z.array(z.number().int()),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `10: Insufficient permissions.`,
    },
  ],
});
/**
 * @api POST https://adconfiguration.roblox.com/v2/sponsored-campaigns/eligible-campaign-targets
 * @param body Roblox.AdConfiguration.Api.Models.GetEligibleCampaignTargetsRequest
 */
export const postSponsoredCampaignsEligibleCampaignTargets = endpoint({
  method: 'POST',
  path: '/v2/sponsored-campaigns/eligible-campaign-targets',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AdConfiguration_Api_Models_GetEligibleCampaignTargetsRequest,
  response: Roblox_AdConfiguration_Api_Models_GetCampaignTargetsResponse,
  errors: [
    {
      status: 400,
      description: `19: Invalid group id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: Insufficient permissions.`,
    },
  ],
});
/**
 * @api GET https://adconfiguration.roblox.com/v2/sponsored-campaigns/multi-get-can-user-sponsor
 * @param campaignTargetType
 * @param campaignTargetIds
 */
export const getSponsoredCampaignsMultiGetCanUserSponsor = endpoint({
  method: 'GET',
  path: '/v2/sponsored-campaigns/multi-get-can-user-sponsor',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    campaignTargetType: {},
    campaignTargetIds: {},
  },
  parameters: {
    campaignTargetType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    campaignTargetIds: z.array(z.number().int()),
  },
  response: z.boolean(),
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 500,
      description: `Server Error`,
    },
  ],
});
/**
 * @api POST https://adconfiguration.roblox.com/v2/sponsored-campaigns/stop
 * @param body Roblox.AdConfiguration.Api.Models.StopSponsoredCampaignRequest
 */
export const postSponsoredCampaignsStop = endpoint({
  method: 'POST',
  path: '/v2/sponsored-campaigns/stop',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ adSetId: z.number().int() }),
  response: z.number().int(),
  errors: [
    {
      status: 400,
      description: `10: Insufficient permissions.
14: Invalid ad set id.
31: Internal server error`,
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
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api GET https://adconfiguration.roblox.com/v2/sponsored-games
 * @param universeId
 * @param includeReportingStats
 * @param isArchived
 * @param pageCursor
 */
export const getSponsoredGames = endpoint({
  method: 'GET',
  path: '/v2/sponsored-games',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    includeReportingStats: {},
    isArchived: {},
    pageCursor: {},
  },
  parameters: {
    universeId: z.number().int(),
    includeReportingStats: z.boolean().optional().default(false),
    isArchived: z.boolean().optional().default(false),
    pageCursor: z.string().optional(),
  },
  response: Roblox_AdConfiguration_Api_GetSponsoredGamesResponse,
  errors: [
    {
      status: 400,
      description: `9: Cannot load the universe for the specified universe id.
9: Cannot load the universe for the specified universe id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api POST https://adconfiguration.roblox.com/v2/sponsored-games/create
 * @param body Roblox.AdConfiguration.Api.CreateSponsoredGameV2Request
 */
export const postSponsoredGamesCreate = endpoint({
  method: 'POST',
  path: '/v2/sponsored-games/create',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AdConfiguration_Api_CreateSponsoredGameV2Request,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: Daily budget is lower than minimum allowed.
3: Total budget must be greater than 0.
4: Ad name cannot be empty.
5: Start date must not be a future date.
6: End date must be a future date.
7: Start date must be earlier than end date.
8: Total budget does not match daily spend and number of days being scheduled
9: Cannot load the universe for the specified universe id.
11: Invalid target age bracket.
12: Invalid target gender.
13: Invalid target device type.
14: Invalid ad set id.
15: Ad name cannot exceed 255 characters.
16: Insufficient Robux balance.
17: Name has already been taken.
18: Daily budget is higher than maximum allowed.
19: Invalid group id.
20: Number of days scheduled exceeded maximum days allowed.
21: Your experience is currently not eligible for advertising.
22: Invalid campaign target ID.
23: Invalid campaign target type.
24: Invalid creative ID.
25: Invalid creative type.
28: Total budget must be campaign duration * daily bid
29: The target is not eligible for new campaigns
30: Invalid user ID`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
10: Insufficient permissions.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.
31: Internal server error`,
    },
    {
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api POST https://adconfiguration.roblox.com/v2/sponsored-games/stop
 * @param body Roblox.AdConfiguration.Api.Models.StopSponsoredGameV2Request
 */
export const postSponsoredGamesStop = endpoint({
  method: 'POST',
  path: '/v2/sponsored-games/stop',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ adSetId: z.number().int() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid ad set id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: Insufficient permissions.`,
    },
    {
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api GET https://adconfiguration.roblox.com/v2/sponsored-games/universes
 * @param groupId
 */
export const getSponsoredGamesUniverses = endpoint({
  method: 'GET',
  path: '/v2/sponsored-games/universes',
  baseUrl: 'https://adconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {},
  },
  parameters: {
    groupId: z.number().int().optional(),
  },
  response: Roblox_AdConfiguration_Api_Models_GetRecentAdsRankedUniversesResponse,
  errors: [
    {
      status: 400,
      description: `19: Invalid group id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `10: Insufficient permissions.`,
    },
  ],
});
