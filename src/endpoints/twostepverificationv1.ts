import { z } from 'zod';
import { endpoint } from '..';

const Roblox_TwoStepVerification_Api_MetadataResponse = z.object({
  twoStepVerificationEnabled: z.boolean(),
  authenticatorQrCodeSize: z.string(),
  emailCodeLength: z.number().int(),
  authenticatorCodeLength: z.number().int(),
  authenticatorHelpSiteAddress: z.string(),
  isPasswordRequiredForEnablingAuthenticator: z.boolean(),
  isPasswordRequiredForEnablingEmailTwoStepVerification: z.boolean(),
  isUsingTwoStepWebviewComponent: z.boolean(),
  isTwoStepEnabledRequiredForEmailPasswordRequirement: z.boolean(),
  isTwoStepEnabledRequiredForAuthenticatorPasswordRequirement: z.boolean(),
  isSingleMethodEnforcementEnabled: z.boolean(),
  isSmsTwoStepVerificationAvailable: z.boolean(),
  isSecurityKeyTwoStepVerificationAvailable: z.boolean(),
  isAuthenticatorWithVerifiedPhoneEnabled: z.boolean(),
  isPasswordRequiredForEnablingSecurityKey: z.boolean(),
  isPasswordRequiredForEnablingSms2SV: z.boolean(),
  isPasswordRequiredForChangingRecoveryCodes: z.boolean(),
  isPasswordRequiredForDisablingAuthenticator: z.boolean(),
  isPasswordRequiredForDisablingEmailTwoStepVerification: z.boolean(),
  isPasswordRequiredForDisablingSms2SV: z.boolean(),
  isRecoveryCodeGenerationForAuthenticatorSetupEnabled: z.boolean(),
  isSecurityKeyOnAllPlatformsEnabled: z.boolean(),
  receiveWarningsOnDisableTwoStep: z.boolean(),
  isAndroidSecurityKeyEnabled: z.boolean(),
});
const Roblox_TwoStepVerification_Api_UserConfigurationMethod = z.object({
  mediaType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
  ]),
  enabled: z.boolean(),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_TwoStepVerification_Api_UserConfiguration = z.object({
  primaryMediaType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
  ]),
  methods: z.array(Roblox_TwoStepVerification_Api_UserConfigurationMethod),
});
const Roblox_TwoStepVerification_Api_RecoveryCodesStatusResponse = z.object({
  activeCount: z.number().int(),
  created: z.string().datetime({ offset: true }),
});
const Roblox_TwoStepVerification_Api_VerifyCodeRequest = z.object({
  challengeId: z.string(),
  actionType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
  code: z.string(),
});
const Roblox_TwoStepVerification_Api_VerifyCodeResponse = z.object({
  verificationToken: z.string(),
});
const Roblox_TwoStepVerification_Api_RetractDialogRequest = z.object({
  challengeId: z.string(),
  actionType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
});
const Roblox_TwoStepVerification_Api_RetractDialogResponse = z.object({});
const Roblox_TwoStepVerification_Api_RetryApprovalRequest = z.object({
  challengeId: z.string(),
  actionType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
});
const Roblox_TwoStepVerification_Api_RetryApprovalResponse = z.object({});
const Roblox_TwoStepVerification_Api_VerifyApprovalRequest = z.object({
  challengeId: z.string(),
  actionType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
});
const Roblox_TwoStepVerification_Api_VerifyApprovalResponse = z.object({
  verificationToken: z.string(),
});
const Roblox_TwoStepVerification_Api_SendCodeRequest = z.object({
  challengeId: z.string(),
  actionType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_TwoStepVerification_Api_VerifyStartPasskeyResponse = z.object({
  authenticationOptions: z.string(),
  sessionId: z.string(),
});
const Roblox_TwoStepVerification_Api_VerifyStartSecurityKeyResponse = z.object({
  authenticationOptions: z.string(),
  sessionId: z.string(),
});
const Roblox_TwoStepVerification_Api_DisableTwoStepVerificationRequest = z.object({
  password: z.string(),
  reauthenticationToken: z.string(),
});
const Roblox_TwoStepVerification_Api_Models_Request_SecureAuthenticationIntentModel = z.object({
  clientPublicKey: z.string(),
  clientEpochTimestamp: z.number().int(),
  saiSignature: z.string(),
  serverNonce: z.string(),
});
const Roblox_TwoStepVerification_Api_EnableTwoStepVerificationRequest = z.object({
  password: z.string(),
  secureAuthenticationIntent: Roblox_TwoStepVerification_Api_Models_Request_SecureAuthenticationIntentModel,
});
const Roblox_TwoStepVerification_Api_EnableAuthenticatorResponse = z.object({
  setupToken: z.string(),
  qrCodeImageUrl: z.string(),
  manualEntryKey: z.string(),
});
const Roblox_TwoStepVerification_Api_EnableVerifyAuthenticatorRequest = z.object({
  setupToken: z.string(),
  code: z.string(),
  password: z.string(),
  secureAuthenticationIntent: Roblox_TwoStepVerification_Api_Models_Request_SecureAuthenticationIntentModel,
});
const Roblox_TwoStepVerification_Api_EnableVerifyAuthenticatorResponse = z.object({
  recoveryCodes: z.array(z.string()),
});
const Roblox_TwoStepVerification_Api_DisableSecurityKeyRequest = z.object({
  credentialNicknames: z.array(z.string()),
});
const Roblox_TwoStepVerification_Api_EnableSecurityKeyResponse = z.object({
  creationOptions: z.string(),
  sessionId: z.string(),
});
const Roblox_TwoStepVerification_Api_EnableVerifySecurityKeyRequest = z.object({
  sessionId: z.string(),
  credentialNickname: z.string(),
  attestationResponse: z.string(),
});
const Roblox_TwoStepVerification_Api_SecurityKeyCredential = z.object({
  nickname: z.string(),
});
const Roblox_TwoStepVerification_Api_ListSecurityKeyResponse = z.object({
  credentials: z.array(Roblox_TwoStepVerification_Api_SecurityKeyCredential),
});
const Roblox_TwoStepVerification_Api_ClearRecoveryCodesRequest = z.object({
  password: z.string(),
});
const Roblox_TwoStepVerification_Api_RegenerateRecoveryCodesRequest = z.object({
  password: z.string(),
});
const Roblox_TwoStepVerification_Api_RegenerateRecoveryCodesResponse = z.object({ recoveryCodes: z.array(z.string()) });

/**
 * @api GET https://twostepverification.roblox.com/v1/metadata
 * @summary Gets two step verification system metadata.
 * @param userId The user ID.
 * @param challengeId The active two step verification challenge ID if there is one.
 * @param actionType The Roblox.TwoStepVerification.Client.TwoStepVerificationActionType associated with the challenge.
 * @description The metadata endpoint takes in optional request parameters to output additional context
for when the user is unauthenticated but attempting to login with two step verification.

When supplied, all three request parameters must be sent and match up.
 */
export const getMetadata = endpoint({
  method: 'GET',
  path: '/v1/metadata',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'form',
      explode: true,
    },
    challengeId: {
      style: 'form',
      explode: true,
    },
    actionType: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int().optional(),
    challengeId: z.string().optional(),
    actionType: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
      ])
      .optional(),
  },
  response: Roblox_TwoStepVerification_Api_MetadataResponse,
  errors: [],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/authenticator/verify
 * @summary Verifies a two step verification challenge code via authenticator app.
 * @param body The Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesAuthenticatorVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/authenticator/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyCodeRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.
10: The two step verification challenge code is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/cross-device/retract
 * @summary Reverts a user's dialog state from ACTIVE to PENDING.
 * @param body The Roblox.TwoStepVerification.Api.RetractDialogRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesCrossDeviceRetract = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/cross-device/retract',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_RetractDialogRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
19: Challenge denied.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/cross-device/retry
 * @summary Retry a Cross Device two step verification approval.
 * @param body The Roblox.TwoStepVerification.Api.RetryApprovalRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesCrossDeviceRetry = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/cross-device/retry',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_RetryApprovalRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
19: Challenge denied.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/cross-device/verify
 * @summary Verifies a two step verification approval via Cross Device. Cross Device approval does not use a verification code.
 * @param body The Roblox.TwoStepVerification.Api.VerifyApprovalRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesCrossDeviceVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/cross-device/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyApprovalRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `0: An unknown error occurred with the request.
1: Invalid challenge ID.
2: The user ID is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
19: Challenge denied.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/email/send-code
 * @summary Sends a two step verification challenge code via email.
 * @param body The request body.Roblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesEmailSendCode = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/email/send-code',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_SendCodeRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/email/verify
 * @summary Verifies a two step verification challenge with a code sent via email.
 * @param body The request body.Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesEmailVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/email/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyCodeRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
10: The two step verification challenge code is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/passkey/verify-finish
 * @summary Validates the assertion data returned by the passkey.
 * @param body The request bodyRoblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesPasskeyVerifyFinish = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/passkey/verify-finish',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyCodeRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.
10: The two step verification challenge code is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/passkey/verify-start
 * @summary Provides a challenge for the passkey to authenticate.
 * @param body The request bodyRoblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesPasskeyVerifyStart = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/passkey/verify-start',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_SendCodeRequest,
  response: Roblox_TwoStepVerification_Api_VerifyStartPasskeyResponse,
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
8: The user is not allowed to perform the requested action.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/recovery-codes/verify
 * @summary Verifies a two step verification challenge via a recovery code.
 * @param body The Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId The user ID.
 * @description Once a recovery code has been used to verify a challenge it cannot be used again.
 */
export const postUsersUseridChallengesRecoveryCodesVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/recovery-codes/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyCodeRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.
10: The two step verification challenge code is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/security-key/verify-finish
 * @summary Validates the assertion data returned by the security key.
 * @param body The request bodyRoblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesSecurityKeyVerifyFinish = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/security-key/verify-finish',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyCodeRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.
10: The two step verification challenge code is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/security-key/verify-start
 * @summary Provides a challenge for the security key to authenticate.
 * @param body The request bodyRoblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesSecurityKeyVerifyStart = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/security-key/verify-start',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_SendCodeRequest,
  response: Roblox_TwoStepVerification_Api_VerifyStartSecurityKeyResponse,
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
8: The user is not allowed to perform the requested action.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/sms/send-code
 * @summary Sends a two step verification code via SMS for the specified user.
 * @param body The request body.Roblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesSmsSendCode = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/sms/send-code',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_SendCodeRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/sms/verify
 * @summary Verifies a two step verification challenge with a code sent via SMS.
 * @param body The request body.Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId The user ID.
 */
export const postUsersUseridChallengesSmsVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/sms/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_VerifyCodeRequest,
  response: z.object({ verificationToken: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.
2: The user ID is invalid.
10: The two step verification challenge code is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api GET https://twostepverification.roblox.com/v1/users/:userId/configuration
 * @summary Gets two step verification configuration for the specified user.
 * @param userId The Id of the user to get the configuration for.
 * @param challengeId The active challenge for the user (as an alternative when the user is unauthenticated).
 * @param actionType The action type the challengeId is associated with.
 */
export const getUsersUseridConfiguration = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/configuration',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    challengeId: {
      style: 'form',
      explode: true,
    },
    actionType: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    challengeId: z.string().optional(),
    actionType: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
      ])
      .optional(),
  },
  response: Roblox_TwoStepVerification_Api_UserConfiguration,
  errors: [
    {
      status: 400,
      description: `1: Invalid challenge ID.`,
    },
    {
      status: 403,
      description: `2: The user ID is invalid.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/authenticator/disable
 * @summary Disables two step verification via authenticator for the specified user.
 * @param body The Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationAuthenticatorDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/authenticator/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_DisableTwoStepVerificationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: The account pin is locked.
8: The user is not allowed to perform the requested action.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/authenticator/enable
 * @summary Initiates enabling authenticator-based two step verification for the specified user.
 * @param body The Roblox.TwoStepVerification.Api.EnableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationAuthenticatorEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/authenticator/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_EnableTwoStepVerificationRequest,
  response: Roblox_TwoStepVerification_Api_EnableAuthenticatorResponse,
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
3: The email is invalid.
4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: The account pin is locked.
11: The two step verification configuration is already enabled.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/authenticator/enable-verify
 * @summary Finishes enabling authenticator-based two step verification for the specified user.
 * @param body The Roblox.TwoStepVerification.Api.EnableVerifyAuthenticatorRequest.
 * @param userId The user ID.
 * @description Enabling authenticator-based two step verification requires two parts to help ensure
the user has properly stored the authenticator key in their authenticator app.
 */
export const postUsersUseridConfigurationAuthenticatorEnableVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/authenticator/enable-verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_EnableVerifyAuthenticatorRequest,
  response: Roblox_TwoStepVerification_Api_EnableVerifyAuthenticatorResponse,
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
4: The password is invalid.
10: The two step verification challenge code is invalid.
12: Invalid setup token.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
11: The two step verification configuration is already enabled.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/email/disable
 * @summary Disables two step verification via email for the specified user.
 * @param body The Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationEmailDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/email/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_DisableTwoStepVerificationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.
6: The account pin is locked.
8: The user is not allowed to perform the requested action.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/email/enable
 * @summary Enables two step verification via email for the specified user.
 * @param body The request body.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationEmailEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/email/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_EnableTwoStepVerificationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: The email is invalid.
4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.
6: The account pin is locked.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/security-key/disable
 * @summary Disables a batch of credentials for the specified user.
 * @param body The request bodyRoblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationSecurityKeyDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_DisableSecurityKeyRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: The account pin is locked.
8: The user is not allowed to perform the requested action.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/security-key/enable
 * @summary Initiates security key registration by providing credential creation options.
 * @param body The request body.Roblox.TwoStepVerification.Api.EnableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationSecurityKeyEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_EnableTwoStepVerificationRequest,
  response: Roblox_TwoStepVerification_Api_EnableSecurityKeyResponse,
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
9: The two step verification configuration is invalid for this action.
16: Reached limit of security keys registered.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/security-key/enable-verify
 * @summary Finishes security key registration and stores credential. Enables security key as a 2sv media type if it is a user's first key.
 * @param body The request body.Roblox.TwoStepVerification.Api.EnableVerifySecurityKeyRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationSecurityKeyEnableVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/enable-verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_EnableVerifySecurityKeyRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
17: Invalid security key nickname.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
17: Invalid security key nickname.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/security-key/list
 * @summary List a user's registered security keys.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationSecurityKeyList = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/list',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_TwoStepVerification_Api_ListSecurityKeyResponse,
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/sms/disable
 * @summary Disables two step verification via SMS for the specified user.
 * @param body The request body.Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationSmsDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/sms/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_DisableTwoStepVerificationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.
6: The account pin is locked.
8: The user is not allowed to perform the requested action.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/sms/enable
 * @summary Enables two step verification via SMS for the specified user.
 * @param body The request body.Roblox.TwoStepVerification.Api.EnableTwoStepVerificationRequest.
 * @param userId The user ID.
 */
export const postUsersUseridConfigurationSmsEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/sms/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: Roblox_TwoStepVerification_Api_EnableTwoStepVerificationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `4: The password is invalid.
15: The phone number is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user ID is invalid.
6: The account pin is locked.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.
8: The user is not allowed to perform the requested action.`,
    },
  ],
});
/**
 * @api GET https://twostepverification.roblox.com/v1/users/:userId/recovery-codes
 * @summary Gets the current status of recovery codes for a user.
 * @param userId The user ID.
 */
export const getUsersUseridRecoveryCodes = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/recovery-codes',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_TwoStepVerification_Api_RecoveryCodesStatusResponse,
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/recovery-codes/clear
 * @summary Clears any existing recovery codes for the user.
 * @param body The Roblox.TwoStepVerification.Api.ClearRecoveryCodesRequest.
 * @param userId The user ID.
 * @description Clearing recovery codes voids any recovery codes previously generated for the user.
New recovery codes will have to be generated to pass two step verification via recovery code.
 */
export const postUsersUseridRecoveryCodesClear = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/recovery-codes/clear',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: z.object({ password: z.string() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: The account pin is locked.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/recovery-codes/regenerate
 * @summary Clears any existing recovery codes and generates a new batch of recovery codes.
 * @param body The Roblox.TwoStepVerification.Api.RegenerateRecoveryCodesRequest.
 * @param userId The user ID to generate recovery codes for.
 * @description Two step verification recovery codes do not enforce that two step verification must be passed when logging in.
At least one two step verification media type must be enabled to trigger the two step verification flow.
Recovery codes are intended to be used to pass two step verification when the enabled media type is unavailable.

Recovery codes generated by this endpoint do not have an expiration.

Once a recovery code generated by this endpoint has been used it cannot be used again.
 */
export const postUsersUseridRecoveryCodesRegenerate = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/recovery-codes/regenerate',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: z.object({ password: z.string() }),
  response: Roblox_TwoStepVerification_Api_RegenerateRecoveryCodesResponse,
  errors: [
    {
      status: 400,
      description: `2: The user ID is invalid.
4: The password is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: The account pin is locked.`,
    },
    {
      status: 429,
      description: `5: Too many requests.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
