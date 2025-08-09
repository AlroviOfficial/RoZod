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
