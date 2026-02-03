import { z } from 'zod';
import { endpoint } from '..';

/**
 * @api GET https://premiumfeatures.roblox.com/v1/users/:userId/premium-upsell-precheck
 * @param userId
 * @param universeId
 * @param placeId
 */
export const getUsersUseridPremiumUpsellPrecheck = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/premium-upsell-precheck',
  baseUrl: 'https://premiumfeatures.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    universeId: {},
    placeId: {},
  },
  parameters: {
    userId: z.number().int(),
    universeId: z.number().int(),
    placeId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://premiumfeatures.roblox.com/v1/users/:userId/validate-membership
 * @param userId
 */
export const getUsersUseridValidateMembership = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/validate-membership',
  baseUrl: 'https://premiumfeatures.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
