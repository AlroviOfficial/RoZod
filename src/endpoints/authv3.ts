import { z } from 'zod';

const Roblox_Authentication_Api_TwoStepVerificationLoginRequest = z.object({
  challengeId: z.string(),
  verificationToken: z.string(),
  rememberDevice: z.boolean(),
});
const Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse = z.object({
  identityVerificationLoginTicket: z.string(),
});

const schemas = {
  Roblox_Authentication_Api_TwoStepVerificationLoginRequest,
  Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse,
};

/**
 * @api post https://auth.roblox.com/v3/users/:userId/two-step-verification/login
 * @param body The Roblox.Authentication.Api.TwoStepVerificationLoginRequest.
 * @param userId
 */
export const postUsersUseridTwoStepVerificationLogin = {
  method: 'post' as const,
  path: '/v3/users/:userId/two-step-verification/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_TwoStepVerificationLoginRequest,
    userId: z.number().int(),
  },
  response: z.object({ identityVerificationLoginTicket: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User is invalid.
5: Invalid two step verification ticket.
10: Invalid verification token.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
