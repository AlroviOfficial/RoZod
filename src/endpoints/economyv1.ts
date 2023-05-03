import { z } from "zod";

const Roblox_Web_Responses_Economy_CurrencyResponse = z.object({
  robux: z.number().int(),
});

const schemas = {
  Roblox_Web_Responses_Economy_CurrencyResponse,
};

/**
 * @api get https://economy.roblox.com/v1/user/currency
 */
export const getUserCurrency = {
  method: "get" as const,
  path: "/v1/user/currency",
  baseUrl: "https://economy.roblox.com",
  description: `Currency can only be retrieved for the authenticated user.`,
  requestFormat: "json" as const,
  response: z.object({ robux: z.number().int() }),
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
};
