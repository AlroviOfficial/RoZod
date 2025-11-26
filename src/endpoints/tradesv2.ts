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

/**
 * @api GET https://trades.roblox.com/v2/trades/:tradeId
 * @summary Gets the details of a trade.
 * @param tradeId The id of the trade.
 */
export const getTradesTradeid = endpoint({
  method: 'GET',
  path: '/v2/trades/:tradeId',
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
 * @api GET https://trades.roblox.com/v2/users/:userId/can-trade-with
 * @summary Checks if the user can trade with a specific user.
 * @param userId
 */
export const getUsersUseridCanTradeWith = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/can-trade-with',
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
 * @summary Gets tradable items for a user.
 * @param userId The id of the user.
 * @param search Optional search query to filter items by.
 * @param itemTargetTypes Optional list of item target types to filter by.
 * @param sortBy The key to sort tradable items by.
 * @param sortOrder The sort order for the tradable items.
 * @param limit The maximum number of items to return.
 * @param cursor The pagination cursor.
 */
export const getUsersUseridTradableitems = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/tradableItems',
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    search: {
      style: 'form',
      explode: true,
    },
    itemTargetTypes: {
      style: 'form',
      explode: true,
    },
    sortBy: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
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
 * @summary Checks if the calling user can trade with others.
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
