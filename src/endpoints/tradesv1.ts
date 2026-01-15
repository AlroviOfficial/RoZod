import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Users_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Trades_Api_UserAssetResponse = z.object({
  id: z.number().int(),
  serialNumber: z.number().int(),
  assetId: z.number().int(),
  name: z.string(),
  recentAveragePrice: z.number().int(),
  originalPrice: z.number().int(),
  assetStock: z.number().int(),
  membershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});
const Roblox_Trades_Api_TradeOfferResponse = z.object({
  user: Roblox_Web_Responses_Users_SkinnyUserResponse,
  userAssets: z.array(Roblox_Trades_Api_UserAssetResponse),
  robux: z.number().int(),
});
const Roblox_Trades_Api_TradeDetailResponse = z.object({
  offers: z.array(Roblox_Trades_Api_TradeOfferResponse),
  id: z.number().int(),
  user: Roblox_Web_Responses_Users_SkinnyUserResponse,
  created: z.string().datetime({ offset: true }),
  expiration: z.string().datetime({ offset: true }),
  isActive: z.boolean(),
  status: z.enum([
    'Unknown',
    'Open',
    'Pending',
    'Completed',
    'Expired',
    'Declined',
    'RejectedDueToError',
    'Countered',
    'Processing',
    'InterventionRequired',
    'TwoStepVerificationRequired',
  ]),
});
const Roblox_Trades_Api_TradeResponse = z.object({
  id: z.number().int(),
  user: Roblox_Web_Responses_Users_SkinnyUserResponse,
  created: z.string().datetime({ offset: true }),
  expiration: z.string().datetime({ offset: true }),
  isActive: z.boolean(),
  status: z.enum([
    'Unknown',
    'Open',
    'Pending',
    'Completed',
    'Expired',
    'Declined',
    'RejectedDueToError',
    'Countered',
    'Processing',
    'InterventionRequired',
    'TwoStepVerificationRequired',
  ]),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Trades_Api_TradeResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Trades_Api_TradeResponse),
});
const Roblox_Trades_Api_TradeCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_Trades_Api_TradeMetadata = z.object({
  maxItemsPerSide: z.number().int(),
  minValueRatio: z.number(),
  tradeSystemMaxRobuxPercent: z.number(),
  tradeSystemRobuxFee: z.number(),
});
const Roblox_Trades_Api_CanTradeResponse = z.object({
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
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Trades_Api_TradeOfferRequest = z.object({
  userId: z.number().int(),
  userAssetIds: z.array(z.number()),
  robux: z.number().int(),
});
const Roblox_Trades_Api_TradeRequest = z.object({
  offers: z.array(Roblox_Trades_Api_TradeOfferRequest),
});
const Roblox_Trades_Api_NewTradeResponse = z.object({ id: z.number().int() });

/**
 * @api GET https://trades.roblox.com/v1/trades/:tradeId
 * @summary Gets detailed information about a trade.
 * @param tradeId The trade id.
 */
export const getTradesTradeid = endpoint({
  method: 'GET',
  path: '/v1/trades/:tradeId',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tradeId: {
      style: 'simple',
    },
  },
  parameters: {
    tradeId: z.number().int(),
  },
  response: Roblox_Trades_Api_TradeDetailResponse,
  errors: [
    {
      status: 400,
      description: `2: The trade cannot be found or you are not authorized to view it.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
    {
      status: 404,
      description: `2: The trade cannot be found or you are not authorized to view it.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v1/trades/:tradeId/accept
 * @summary Accepts a trade.
 * @param tradeId The trade id.
 */
export const postTradesTradeidAccept = endpoint({
  method: 'POST',
  path: '/v1/trades/:tradeId/accept',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tradeId: {
      style: 'simple',
    },
  },
  parameters: {
    tradeId: z.number().int(),
  },
  response: z.object({}),
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
      description: `5: Trading system is unavailable`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v1/trades/:tradeId/counter
 * @summary Counters a trade.
 * @param body The trade request.
 * @param tradeId The trade id.
 */
export const postTradesTradeidCounter = endpoint({
  method: 'POST',
  path: '/v1/trades/:tradeId/counter',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    tradeId: {
      style: 'simple',
    },
  },
  parameters: {
    tradeId: z.number().int(),
  },
  body: Roblox_Trades_Api_TradeRequest,
  response: z.object({ id: z.number().int() }),
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
      status: 429,
      description: `14: You are sending too many trade requests. Please slow down and try again later.`,
    },
    {
      status: 502,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `5: Trading system is unavailable`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v1/trades/:tradeId/decline
 * @summary Declines a trade.
 * @param tradeId The trade id.
 */
export const postTradesTradeidDecline = endpoint({
  method: 'POST',
  path: '/v1/trades/:tradeId/decline',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tradeId: {
      style: 'simple',
    },
  },
  parameters: {
    tradeId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The trade cannot be found or you are not authorized to view it.
3: The trade is inactive.
4: You are not authorized to modify this trade.
7: The user cannot trade. See field for whether the user who cannot trade is the sender or receiver.`,
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
      description: `5: Trading system is unavailable`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v1/trades/:tradeStatusType
 * @summary Fetches a list of the authenticated user's trades.
 * @param tradeStatusType The trade status type.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by trade creation date
 */
export const getTradesTradestatustype = endpoint({
  method: 'GET',
  path: '/v1/trades/:tradeStatusType',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tradeStatusType: {
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
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v1/trades/:tradeStatusType/count
 * @summary Gets the total number of pending trades for the authenticated user.
Inbound is the only accepted tradeStatusType.
 * @param tradeStatusType The trade status type to fetch a total count for.
 */
export const getTradesTradestatustypeCount = endpoint({
  method: 'GET',
  path: '/v1/trades/:tradeStatusType/count',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tradeStatusType: {
      style: 'simple',
    },
  },
  parameters: {
    tradeStatusType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  },
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid trade status type.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v1/trades/expire-outdated
 * @summary Deprecated. TradeSession are automatically set to expire while the inbound/outbound trades are fetched.
Expires Outdated Inbound Trades for User
 */
export const postTradesExpireOutdated = endpoint({
  method: 'POST',
  path: '/v1/trades/expire-outdated',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v1/trades/metadata
 * @summary Gets metadata about the trade system.
 */
export const getTradesMetadata = endpoint({
  method: 'GET',
  path: '/v1/trades/metadata',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  response: Roblox_Trades_Api_TradeMetadata,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v1/trades/send
 * @summary Sends a trade.
 * @param body The trade request.
 */
export const postTradesSend = endpoint({
  method: 'POST',
  path: '/v1/trades/send',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Trades_Api_TradeRequest,
  response: z.object({ id: z.number().int() }),
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
      status: 429,
      description: `14: You are sending too many trade requests. Please slow down and try again later.`,
    },
    {
      status: 502,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `5: Trading system is unavailable`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v1/users/:userId/can-trade-with
 * @summary Returns whether you can trade with another user.
 * @param userId The other user's id.
 */
export const getUsersUseridCanTradeWith = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/can-trade-with',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Trades_Api_CanTradeResponse,
  errors: [
    {
      status: 400,
      description: `10: Invalid trade partner. See field for whether the invalid partner is the sender or receiver.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
