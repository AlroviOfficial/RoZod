import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Users_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Trades_Api_Models_V2_ItemTarget = z.object({
  itemType: z.enum(['Unknown', 'Asset', 'Bundle']),
  targetId: z.string(),
});
const Roblox_Trades_Api_Models_V2_TradableItemInstance = z.object({
  collectibleItemInstanceId: z.string(),
  itemTarget: Roblox_Trades_Api_Models_V2_ItemTarget,
  itemName: z.string(),
  serialNumber: z.number().int(),
  originalPrice: z.number().int(),
  recentAveragePrice: z.number().int(),
  assetStock: z.number().int(),
  isOnHold: z.boolean(),
});
const Roblox_Trades_Api_Models_V2_TradeOffer = z.object({
  user: Roblox_Web_Responses_Users_SkinnyUserResponse,
  robux: z.number().int(),
  items: z.array(Roblox_Trades_Api_Models_V2_TradableItemInstance),
});
const Roblox_Trades_Api_Models_V2_TradeDetailsResponse = z.object({
  tradeId: z.number().int(),
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
  participantAOffer: Roblox_Trades_Api_Models_V2_TradeOffer,
  participantBOffer: Roblox_Trades_Api_Models_V2_TradeOffer,
});
const Roblox_Trades_Api_Models_V2_CanTradeWithResponse = z.object({
  userId: z.number().int(),
  targetUserId: z.number().int(),
  canTrade: z.boolean(),
  mutualTradeEligibility: z.enum([
    'Unknown',
    'Eligible',
    'CallingUserIneligible',
    'TargetUserIneligible',
    'CannotTradeWithSelf',
    'CallingUserPrivacySettingsRestricted',
  ]),
});
const Roblox_Trades_Api_Models_V2_TradableItem = z.object({
  collectibleItemId: z.string(),
  itemTarget: Roblox_Trades_Api_Models_V2_ItemTarget,
  itemName: z.string(),
  originalPrice: z.number().int(),
  recentAveragePrice: z.number().int(),
  assetStock: z.number().int(),
  instances: z.array(Roblox_Trades_Api_Models_V2_TradableItemInstance),
});
const Roblox_Trades_Api_Models_V2_GetUserTradableItemsResponse = z.object({
  userId: z.number().int(),
  items: z.array(Roblox_Trades_Api_Models_V2_TradableItem),
  nextPageCursor: z.string(),
});
const Roblox_Trades_Api_Models_V2_CanTradeResponse = z.object({
  userId: z.number().int(),
  canTrade: z.boolean(),
  tradeEligibility: z.enum([
    'Unknown',
    'Eligible',
    'IneligibleTradeSystemDisabled',
    'IneligibleCannotTradeWithRoblox',
    'IneligibleUserNotFound',
    'IneligibleMissingPremiumMembership',
    'IneligibleLegalOrRegulatoryRestrictions',
  ]),
});
const Roblox_Trades_Api_Models_V2_TradeOfferRequest = z.object({
  userId: z.number().int(),
  robux: z.number().int(),
  collectibleItemInstanceIds: z.array(z.string()),
});
const Roblox_Trades_Api_Models_V2_TradeRequest = z.object({
  senderOffer: Roblox_Trades_Api_Models_V2_TradeOfferRequest,
  recipientOffer: Roblox_Trades_Api_Models_V2_TradeOfferRequest,
});
const Roblox_Trades_Api_Models_V2_NewTradeResponse = z.object({
  tradeId: z.number().int(),
});

/**
 * @api GET https://trades.roblox.com/v2/trades/:tradeId
 * @param tradeId
 */
export const getTradesTradeid = endpoint({
  method: 'GET',
  path: '/v2/trades/:tradeId',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tradeId: {},
  },
  parameters: {
    tradeId: z.number().int(),
  },
  response: Roblox_Trades_Api_Models_V2_TradeDetailsResponse,
  errors: [
    {
      status: 400,
      description: `0: An unknown error occured.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
    {
      status: 403,
      description: `4: You are not authorized to modify this trade.`,
    },
    {
      status: 404,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v2/trades/:tradeId/counter
 * @param body
 * @param tradeId
 */
export const postTradesTradeidCounter = endpoint({
  method: 'POST',
  path: '/v2/trades/:tradeId/counter',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    tradeId: {},
  },
  parameters: {
    tradeId: z.number().int(),
  },
  body: Roblox_Trades_Api_Models_V2_TradeRequest,
  response: z.object({ tradeId: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 404,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://trades.roblox.com/v2/trades/send
 * @param body
 */
export const postTradesSend = endpoint({
  method: 'POST',
  path: '/v2/trades/send',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Trades_Api_Models_V2_TradeRequest,
  response: z.object({ tradeId: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 404,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v2/users/:userId/can-trade-with
 * @param userId
 */
export const getUsersUseridCanTradeWith = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/can-trade-with',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Trades_Api_Models_V2_CanTradeWithResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v2/users/:userId/tradableItems
 * @param userId
 * @param search
 * @param itemTargetTypes
 * @param sortBy
 * @param sortOrder
 * @param limit
 * @param cursor
 */
export const getUsersUseridTradableitems = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/tradableItems',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    search: {},
    itemTargetTypes: {},
    sortBy: {},
    sortOrder: {},
    limit: {},
    cursor: {},
  },
  parameters: {
    userId: z.number().int(),
    search: z.string().optional(),
    itemTargetTypes: z
      .array(
        z.enum([
          'Unknown',
          'HatAccessory',
          'HairAccessory',
          'FaceAccessory',
          'NeckAccessory',
          'ShoulderAccessory',
          'FrontAccessory',
          'BackAccessory',
          'WaistAccessory',
          'Gear',
          'Face',
          'JacketAccessory',
          'SweaterAccessory',
          'DressSkirtAccessory',
          'Character',
          'DynamicHead',
          'Shoes',
          'Animation',
        ]),
      )
      .optional(),
    sortBy: z.enum(['Unknown', 'CreationTime', 'AcquisitionTime']).optional().default('CreationTime'),
    sortOrder: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .optional()
      .default(2),
    limit: z.number().int().optional().default(25),
    cursor: z.string().optional(),
  },
  response: Roblox_Trades_Api_Models_V2_GetUserTradableItemsResponse,
  errors: [
    {
      status: 400,
      description: `25: The cursor provided is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
    {
      status: 403,
      description: `4: You are not authorized to modify this trade.`,
    },
    {
      status: 404,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://trades.roblox.com/v2/users/me/can-trade
 */
export const getUsersMeCanTrade = endpoint({
  method: 'GET',
  path: '/v2/users/me/can-trade',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  response: Roblox_Trades_Api_Models_V2_CanTradeResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized to modify this trade.`,
    },
  ],
});
