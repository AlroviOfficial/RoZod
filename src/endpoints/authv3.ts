import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Authentication_Api_TwoStepVerificationLoginRequest = z
  .object({
    challengeId: z.string(),
    verificationToken: z.string(),
    rememberDevice: z.boolean(),
    accountBlob: z.string(),
  })
  .passthrough();
const Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse = z
  .object({
    identityVerificationLoginTicket: z.string(),
    accountBlob: z.string(),
  })
  .passthrough();

const schemas = {
  Roblox_Authentication_Api_TwoStepVerificationLoginRequest,
  Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse,
};

/**
 * @api post https://auth.roblox.com/v3/users/:userId/two-step-verification/login
 * @param body The Roblox.Authentication.Api.TwoStepVerificationLoginRequest.
 * @param userId
 */
export const postUsersUseridTwoStepVerificationLogin = endpoint({
  method: 'post' as const,
  path: '/v3/users/:userId/two-step-verification/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_Authentication_Api_TwoStepVerificationLoginRequest,
  response: Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse,
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
});
