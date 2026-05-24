import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Economy_CurrencyResponse = z.object({
  robux: z.number().int(),
});

/**
 * @api GET https://economy.roblox.com/v1/user/currency
 * @summary Gets currency for the authenticated user.
 * @description Currency can only be retrieved for the authenticated user.
 */
export const getUserCurrency = endpoint({
  method: 'GET',
  path: '/v1/user/currency',
  baseUrl: 'https://economy.roblox.com',
  requestFormat: 'json',
  response: z.object({ robux: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `1: The user is invalid.`,
    },
  ],
});
