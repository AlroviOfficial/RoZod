import { z } from 'zod';

const Roblox_Web_Responses_Users_SkinnyUserResponse = z
  .object({ id: z.number().int(), name: z.string(), displayName: z.string() })
  .partial();
const Roblox_Trades_Api_UserAssetResponse = z
  .object({
    id: z.number().int(),
    serialNumber: z.number().int(),
    assetId: z.number().int(),
    name: z.string(),
    recentAveragePrice: z.number().int(),
    originalPrice: z.number().int(),
    assetStock: z.number().int(),
    membershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  })
  .partial();
const Roblox_Trades_Api_TradeOfferResponse = z
  .object({
    user: Roblox_Web_Responses_Users_SkinnyUserResponse,
    userAssets: z.array(Roblox_Trades_Api_UserAssetResponse),
    robux: z.number().int(),
  })
  .partial();
const Roblox_Trades_Api_TradeDetailResponse = z
  .object({
    offers: z.array(Roblox_Trades_Api_TradeOfferResponse),
    id: z.number().int(),
    user: Roblox_Web_Responses_Users_SkinnyUserResponse,
    created: z.string().datetime(),
    expiration: z.string().datetime(),
    isActive: z.boolean(),
    status: z.union([
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
    ]),
  })
  .partial();
const Roblox_Trades_Api_TradeResponse = z
  .object({
    id: z.number().int(),
    user: Roblox_Web_Responses_Users_SkinnyUserResponse,
    created: z.string().datetime(),
    expiration: z.string().datetime(),
    isActive: z.boolean(),
    status: z.union([
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
    ]),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Trades_Api_TradeResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Trades_Api_TradeResponse),
  })
  .partial();
const Roblox_Trades_Api_TradeCountResponse = z.object({ count: z.number().int() }).partial();
const Roblox_Trades_Api_TradeMetadata = z
  .object({
    maxItemsPerSide: z.number().int(),
    minValueRatio: z.number(),
    tradeSystemMaxRobuxPercent: z.number(),
    tradeSystemRobuxFee: z.number(),
  })
  .partial();
const Roblox_Trades_Api_CanTradeResponse = z
  .object({
    canTrade: z.boolean(),
    status: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
  })
  .partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();
const Roblox_Trades_Api_TradeOfferRequest = z
  .object({
    userId: z.number().int(),
    userAssetIds: z.array(z.number()),
    robux: z.number().int(),
  })
  .partial();
const Roblox_Trades_Api_TradeRequest = z.object({ offers: z.array(Roblox_Trades_Api_TradeOfferRequest) }).partial();
const Roblox_Trades_Api_NewTradeResponse = z.object({ id: z.number().int() }).partial();

const schemas = {
  Roblox_Web_Responses_Users_SkinnyUserResponse,
  Roblox_Trades_Api_UserAssetResponse,
  Roblox_Trades_Api_TradeOfferResponse,
  Roblox_Trades_Api_TradeDetailResponse,
  Roblox_Trades_Api_TradeResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Trades_Api_TradeResponse_,
  Roblox_Trades_Api_TradeCountResponse,
  Roblox_Trades_Api_TradeMetadata,
  Roblox_Trades_Api_CanTradeResponse,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Trades_Api_TradeOfferRequest,
  Roblox_Trades_Api_TradeRequest,
  Roblox_Trades_Api_NewTradeResponse,
};

export const getV1tradesTradeId = {
  method: 'get' as const,
  path: '/v1/trades/:tradeId',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    tradeId: z.number().int(),
  },
  response: Roblox_Trades_Api_TradeDetailResponse,
  errors: [
    {
      status: 400,
      description: `2: The trade cannot be found or you are not authorized to view it.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1tradesTradeIdaccept = {
  method: 'post' as const,
  path: '/v1/trades/:tradeId/accept',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    tradeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `2: The trade cannot be found or you are not authorized to view it.
3: The trade is inactive.
4: You are not authorized to modify this trade.
6: Trade needs to be confirmed by the other party.
6: Trade needs to be confirmed by the other party.
7: The user cannot trade. See field for whether the user who cannot trade is the sender or receiver.
23: The trade reaches Two Step Verification thresholds and the user has not verified in the past time threshold.`,
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
      status: 503,
      description: `5: Trading system is unavailable`,
      schema: z.void(),
    },
  ],
};
export const postV1tradesTradeIdcounter = {
  method: 'post' as const,
  path: '/v1/trades/:tradeId/counter',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Trades_Api_TradeRequest,
    tradeId: z.number().int(),
  },
  response: z.object({ id: z.number().int() }).partial(),
  errors: [
    {
      status: 400,
      description: `2: The trade cannot be found or you are not authorized to view it.
4: You are not authorized to modify this trade.
7: The user cannot trade. See field for whether the user who cannot trade is the sender or receiver.
8: The trade request should include offers.
9: Invalid number of trade offers.
10: Invalid trade partner. See field for whether the invalid partner is the sender or receiver.
11: Cannot add negative Robux amounts to a trade.
12: One or more userAssets are invalid. See fieldData for details.
13: Invalid number of userAssets in one side of the trade.
15: The trade is unbalanced.
16: Trade value ratio is not sufficient.
17: You have insufficient Robux to make this offer.
18: Too many Robux in one side of the offer. See field for whether the side is the sender or receiver.
19: Unknown error while processing the trade.
21: Cannot trade with yourself.
22: User&#x27;s privacy settings are too strict to allow trading. See field for whether the user is the sender or receiver.`,
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
      status: 429,
      description: `14: You are sending too many trade requests. Please slow down and try again later.`,
      schema: z.void(),
    },
    {
      status: 502,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `5: Trading system is unavailable`,
      schema: z.void(),
    },
  ],
};
export const postV1tradesTradeIddecline = {
  method: 'post' as const,
  path: '/v1/trades/:tradeId/decline',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    tradeId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `2: The trade cannot be found or you are not authorized to view it.
3: The trade is inactive.
4: You are not authorized to modify this trade.
7: The user cannot trade. See field for whether the user who cannot trade is the sender or receiver.`,
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
      status: 503,
      description: `5: Trading system is unavailable`,
      schema: z.void(),
    },
  ],
};
export const getV1tradesTradeStatusType = {
  method: 'get' as const,
  path: '/v1/trades/:tradeStatusType',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    tradeStatusType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Trades_Api_TradeResponse_,
  errors: [
    {
      status: 400,
      description: `1: Invalid trade status type.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1tradesTradeStatusTypecount = {
  method: 'get' as const,
  path: '/v1/trades/:tradeStatusType/count',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    tradeStatusType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  },
  response: z.object({ count: z.number().int() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: Invalid trade status type.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1tradesexpireOutdated = {
  method: 'post' as const,
  path: '/v1/trades/expire-outdated',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
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
  ],
};
export const getV1tradesmetadata = {
  method: 'get' as const,
  path: '/v1/trades/metadata',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Trades_Api_TradeMetadata,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1tradessend = {
  method: 'post' as const,
  path: '/v1/trades/send',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Trades_Api_TradeRequest,
  },
  response: z.object({ id: z.number().int() }).partial(),
  errors: [
    {
      status: 400,
      description: `7: The user cannot trade. See field for whether the user who cannot trade is the sender or receiver.
8: The trade request should include offers.
9: Invalid number of trade offers.
10: Invalid trade partner. See field for whether the invalid partner is the sender or receiver.
11: Cannot add negative Robux amounts to a trade.
12: One or more userAssets are invalid. See fieldData for details.
13: Invalid number of userAssets in one side of the trade.
15: The trade is unbalanced.
16: Trade value ratio is not sufficient.
17: You have insufficient Robux to make this offer.
18: Too many Robux in one side of the offer. See field for whether the side is the sender or receiver.
19: Unknown error while processing the trade.
21: Cannot trade with yourself.
22: User&#x27;s privacy settings are too strict to allow trading. See field for whether the user is the sender or receiver.
23: The trade reaches Two Step Verification thresholds and the user has not verified in the past time threshold.`,
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
      status: 429,
      description: `14: You are sending too many trade requests. Please slow down and try again later.`,
      schema: z.void(),
    },
    {
      status: 502,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `5: Trading system is unavailable`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdcanTradeWith = {
  method: 'get' as const,
  path: '/v1/users/:userId/can-trade-with',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Trades_Api_CanTradeResponse,
  errors: [
    {
      status: 400,
      description: `10: Invalid trade partner. See field for whether the invalid partner is the sender or receiver.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
