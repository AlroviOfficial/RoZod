import { z } from "zod";
import { endpoint } from "..";

const Roblox_Web_Responses_Economy_CurrencyResponse = z
  .object({ robux: z.number().int() })
  .passthrough();

const schemas = {
  Roblox_Web_Responses_Economy_CurrencyResponse,
};

/**
 * @api get https://economy.roblox.com/v1/user/currency
 * @description Currency can only be retrieved for the authenticated user.
 */
export const getUserCurrency = endpoint({
  method: "get" as const,
  path: "/v1/user/currency",
  baseUrl: "https://economy.roblox.com",
  requestFormat: "json" as const,
  response: z.object({ robux: z.number().int() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `1: The user is invalid.`,
      schema: z.void(),
    },
  ],
});
