import { z } from 'zod';
import { endpoint } from '..';

/**
 * @api GET https://premiumfeatures.roblox.com/v1/users/:userId/premium-upsell-precheck
 * @summary Premium upsell precheck
 * @param userId User ID
 * @param universeId
 * @param placeId
 */
export const getUsersUseridPremiumUpsellPrecheck = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/premium-upsell-precheck',
  baseUrl: 'https://premiumfeatures.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    universeId: {
      style: 'form',
      explode: true,
    },
    placeId: {
      style: 'form',
      explode: true,
    },
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
 * @summary Get if a user has a Premium membership
 * @param userId User ID
 */
export const getUsersUseridValidateMembership = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/validate-membership',
  baseUrl: 'https://premiumfeatures.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
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
