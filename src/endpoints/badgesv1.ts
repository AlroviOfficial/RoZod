import { z } from 'zod';

const Roblox_Web_Responses_Badges_BadgeAwardStatisticsResponse = z
  .object({
    pastDayAwardedCount: z.number().int(),
    awardedCount: z.number().int(),
    winRatePercentage: z.number(),
  })
  .partial();
const Roblox_Badges_Api_UniverseResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    rootPlaceId: z.number().int(),
  })
  .partial();
const Roblox_Badges_Api_BadgeResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    displayName: z.string(),
    displayDescription: z.string(),
    enabled: z.boolean(),
    iconImageId: z.number().int(),
    displayIconImageId: z.number().int(),
    created: z.string().datetime(),
    updated: z.string().datetime(),
    statistics: Roblox_Web_Responses_Badges_BadgeAwardStatisticsResponse,
    awardingUniverse: Roblox_Badges_Api_UniverseResponse,
  })
  .partial();
const Roblox_Badges_Api_UpdateBadgeRequest = z
  .object({ name: z.string(), description: z.string(), enabled: z.boolean() })
  .partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();
const Roblox_Badges_Api_BadgeMetadataResponse = z
  .object({
    badgeCreationPrice: z.number().int(),
    maxBadgeNameLength: z.number().int(),
    maxBadgeDescriptionLength: z.number().int(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Badges_Api_BadgeResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Badges_Api_BadgeResponse),
  })
  .partial();
const postV1universesUniverseIdbadges_Body = z
  .object({
    name: z.string(),
    description: z.string(),
    paymentSourceType: z.union([z.literal(1), z.literal(2)]),
    files: z.instanceof(File),
    expectedCost: z.number().int(),
  })
  .partial();
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Badges_BadgeAwarderType_ = z
  .object({ id: z.number().int(), type: z.literal(1), name: z.string() })
  .partial();
const Roblox_Web_Responses_Badges_BadgeResponseV2 = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    displayName: z.string(),
    displayDescription: z.string(),
    enabled: z.boolean(),
    iconImageId: z.number().int(),
    displayIconImageId: z.number().int(),
    awarder: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Badges_BadgeAwarderType_,
    statistics: Roblox_Web_Responses_Badges_BadgeAwardStatisticsResponse,
    created: z.string().datetime(),
    updated: z.string().datetime(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Badges_BadgeResponseV2_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Web_Responses_Badges_BadgeResponseV2),
  })
  .partial();
const Roblox_Badges_Api_BadgeAwardResponse = z
  .object({ badgeId: z.number().int(), awardedDate: z.string().datetime() })
  .partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Badges_Api_BadgeAwardResponse_ = z
  .object({ data: z.array(Roblox_Badges_Api_BadgeAwardResponse) })
  .partial();

const schemas = {
  Roblox_Web_Responses_Badges_BadgeAwardStatisticsResponse,
  Roblox_Badges_Api_UniverseResponse,
  Roblox_Badges_Api_BadgeResponse,
  Roblox_Badges_Api_UpdateBadgeRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Badges_Api_BadgeMetadataResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Badges_Api_BadgeResponse_,
  postV1universesUniverseIdbadges_Body,
  Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Badges_BadgeAwarderType_,
  Roblox_Web_Responses_Badges_BadgeResponseV2,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Badges_BadgeResponseV2_,
  Roblox_Badges_Api_BadgeAwardResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Badges_Api_BadgeAwardResponse_,
};

export const getV1badgesBadgeId = {
  method: 'get' as const,
  path: '/v1/badges/:badgeId',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    badgeId: z.number().int(),
  },
  response: Roblox_Badges_Api_BadgeResponse,
  errors: [
    {
      status: 404,
      description: `1: Badge is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const patchV1badgesBadgeId = {
  method: 'patch' as const,
  path: '/v1/badges/:badgeId',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Badges_Api_UpdateBadgeRequest,
    badgeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `6: Text moderated.`,
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
2: You do not have permission to manage this badge.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: Badge is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const getV1badgesmetadata = {
  method: 'get' as const,
  path: '/v1/badges/metadata',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Badges_Api_BadgeMetadataResponse,
  errors: [],
};
export const getV1universesUniverseIdbadges = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/badges',
  baseUrl: 'https://badges.roblox.com',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Badges_Api_BadgeResponse_,
  errors: [
    {
      status: 404,
      description: `3: The game is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const postV1universesUniverseIdbadges = {
  method: 'post' as const,
  path: '/v1/universes/:universeId/badges',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'form-data' as const,
  parameters: {
    body: postV1universesUniverseIdbadges_Body,
    universeId: z.number().int(),
  },
  response: Roblox_Web_Responses_Badges_BadgeResponseV2,
  errors: [
    {
      status: 400,
      description: `11: The badge icon is invalid.
14: Invalid badge name.
15: Invalid badge description.
16: Payment source is invalid.
18: Expected badge cost is different from the actual badge cost.`,
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
6: Text moderated.
12: You do not have permission to manage this game&#x27;s badges.
17: Insufficient funds.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `3: The game is invalid or does not exist.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `13: Too many requests, try again later.`,
      schema: z.void(),
    },
  ],
};
export const getV1universesUniverseIdfreeBadgesQuota = {
  method: 'get' as const,
  path: '/v1/universes/:universeId/free-badges-quota',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: z.number(),
  errors: [
    {
      status: 404,
      description: `3: The game is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const deleteV1userUserIdbadgesBadgeId = {
  method: 'delete' as const,
  path: '/v1/user/:userId/badges/:badgeId',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    badgeId: z.number().int(),
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
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: Badge is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const deleteV1userbadgesBadgeId = {
  method: 'delete' as const,
  path: '/v1/user/badges/:badgeId',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    badgeId: z.number().int(),
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
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `1: Badge is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdbadges = {
  method: 'get' as const,
  path: '/v1/users/:userId/badges',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Badges_BadgeResponseV2_,
  errors: [
    {
      status: 404,
      description: `4: User is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdbadgesawardedDates = {
  method: 'get' as const,
  path: '/v1/users/:userId/badges/awarded-dates',
  baseUrl: 'https://badges.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
    badgeIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Badges_Api_BadgeAwardResponse_,
  errors: [
    {
      status: 400,
      description: `5: Too many badge Ids.`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `4: User is invalid or does not exist.`,
      schema: z.void(),
    },
  ],
};
