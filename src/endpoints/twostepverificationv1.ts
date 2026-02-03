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
  isSettingsTabRedesignEnabled: z.boolean(),
  twoStepCopyTextEnrollmentStatus: z.number().int(),
  isEppUIEnabled: z.boolean(),
  maskedUserEmail: z.string(),
  isUserU13: z.boolean(),
  isDelayedUiEnabled: z.boolean(),
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
 * @param userId 
 * @param challengeId 
 * @param actionType 
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
    userId: {},
    challengeId: {},
    actionType: {},
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
 * @param body The Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesAuthenticatorVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/authenticator/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.RetractDialogRequest.
 * @param userId
 */
export const postUsersUseridChallengesCrossDeviceRetract = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/cross-device/retract',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.RetryApprovalRequest.
 * @param userId
 */
export const postUsersUseridChallengesCrossDeviceRetry = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/cross-device/retry',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.VerifyApprovalRequest.
 * @param userId
 */
export const postUsersUseridChallengesCrossDeviceVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/cross-device/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesEmailSendCode = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/email/send-code',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesEmailVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/email/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request bodyRoblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesPasskeyVerifyFinish = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/passkey/verify-finish',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request bodyRoblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesPasskeyVerifyStart = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/passkey/verify-start',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/password/verify
 * @param body The request body.Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesPasswordVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/password/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
4: The password is invalid.`,
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
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/challenges/recovery-codes/verify
 * @param body The Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 * @description Once a recovery code has been used to verify a challenge it cannot be used again.
 */
export const postUsersUseridChallengesRecoveryCodesVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/recovery-codes/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request bodyRoblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesSecurityKeyVerifyFinish = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/security-key/verify-finish',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request bodyRoblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesSecurityKeyVerifyStart = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/security-key/verify-start',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.SendCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesSmsSendCode = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/sms/send-code',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.VerifyCodeRequest.
 * @param userId
 */
export const postUsersUseridChallengesSmsVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/challenges/sms/verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param userId
 * @param challengeId
 * @param actionType
 */
export const getUsersUseridConfiguration = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/configuration',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    challengeId: {},
    actionType: {},
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
 * @param body The Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationAuthenticatorDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/authenticator/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.EnableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationAuthenticatorEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/authenticator/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.EnableVerifyAuthenticatorRequest.
 * @param userId 
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
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationEmailDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/email/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.
 * @param userId
 */
export const postUsersUseridConfigurationEmailEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/email/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
2: The user ID is invalid.`,
    },
    {
      status: 503,
      description: `7: Two step verification is currently under maintenance.`,
    },
  ],
});
/**
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/configuration/security-key/disable
 * @param body The request bodyRoblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationSecurityKeyDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.EnableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationSecurityKeyEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.EnableVerifySecurityKeyRequest.
 * @param userId
 */
export const postUsersUseridConfigurationSecurityKeyEnableVerify = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/enable-verify',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param userId
 */
export const postUsersUseridConfigurationSecurityKeyList = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/security-key/list',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationSmsDisable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/sms/disable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
 * @param body The request body.Roblox.TwoStepVerification.Api.EnableTwoStepVerificationRequest.
 * @param userId
 */
export const postUsersUseridConfigurationSmsEnable = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/configuration/sms/enable',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
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
2: The user ID is invalid.`,
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
 * @param userId
 */
export const getUsersUseridRecoveryCodes = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/recovery-codes',
  baseUrl: 'https://twostepverification.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
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
 * @param body The Roblox.TwoStepVerification.Api.ClearRecoveryCodesRequest.
 * @param userId 
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
    userId: {},
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
 * @api POST https://twostepverification.roblox.com/v1/users/:userId/recovery-codes/regenerate
 * @param body The Roblox.TwoStepVerification.Api.RegenerateRecoveryCodesRequest.
 * @param userId 
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
    userId: {},
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
