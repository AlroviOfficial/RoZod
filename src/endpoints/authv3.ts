import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Authentication_Api_Models_Request_LogoutV3Request = z.object({
  logoutReason: z.string(),
  url: z.string(),
  userId: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel = z.object({
  clientPublicKey: z.string(),
  clientEpochTimestamp: z.number().int(),
  saiSignature: z.string(),
  serverNonce: z.string(),
});
const Roblox_Authentication_Api_Models_AccountLinkParameters = z.object({
  LinkingPlatform: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(999),
  ]),
});
const Roblox_Authentication_Api_TwoStepVerificationLoginRequest = z.object({
  challengeId: z.string(),
  verificationToken: z.string(),
  rememberDevice: z.boolean(),
  secureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
  accountBlob: z.string(),
  accountLinkParameters: Roblox_Authentication_Api_Models_AccountLinkParameters,
});
const Roblox_Authentication_Api_Models_TwoStepVerificationV3LoginResponse = z.object({
  identityVerificationLoginTicket: z.string(),
  accountBlob: z.string(),
});

/**
 * @api POST https://auth.roblox.com/v3/logout
 * @param body The logout request with postBody which includes reason, url, and userIdString.
 */
export const postLogout = endpoint({
  method: 'POST',
  path: '/v3/logout',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_LogoutV3Request,
  response: z.object({}),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v3/users/:userId/two-step-verification/login
 * @param body The Roblox.Authentication.Api.TwoStepVerificationLoginRequest.
 * @param userId
 */
export const postUsersUseridTwoStepVerificationLogin = endpoint({
  method: 'POST',
  path: '/v3/users/:userId/two-step-verification/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
    },
    {
      status: 403,
      description: `0: Token Validation Failed
11: Maxium logged in accounts limit reached.`,
    },
  ],
});
