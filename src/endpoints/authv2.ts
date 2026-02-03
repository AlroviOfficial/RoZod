import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Authentication_Api_Models_AuthMetaDataResponse = z.object({
  cookieLawNoticeTimeout: z.number().int(),
});
const Roblox_Authentication_Api_Models_MetadataResponse = z.object({
  isUpdateUsernameEnabled: z.boolean(),
  ftuxAvatarAssetMap: z.string(),
  IsEmailUpsellAtLogoutEnabled: z.boolean(),
  ShouldFetchEmailUpsellIXPValuesAtLogout: z.boolean(),
  IsAccountRecoveryPromptEnabled: z.boolean(),
  IsContactMethodRequiredAtSignup: z.boolean(),
  IsUserAgreementsSignupIntegrationEnabled: z.boolean(),
  IsPasswordRequiredForUsernameChange: z.boolean(),
  IsPasskeyFeatureEnabled: z.boolean(),
  IsAltBrowserTracker: z.boolean(),
  IsLoginRedirectPageEnabled: z.boolean(),
});
const Roblox_Authentication_Api_Models_PasswordStatusResponse = z.object({
  valid: z.boolean(),
});
const Roblox_Web_Responses_Users_LegacyUserResponse = z.object({
  userId: z.number().int(),
  username: z.string(),
  displayName: z.string(),
});
const Roblox_Authentication_Api_Models_PasswordResetMetadataResponse = z.object({
  users: z.array(Roblox_Web_Responses_Users_LegacyUserResponse),
});
const Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel = z.object({
  clientPublicKey: z.string(),
  clientEpochTimestamp: z.number().int(),
  saiSignature: z.string(),
  serverNonce: z.string(),
});
const Roblox_Authentication_Api_Models_PasswordResetModel = z.object({
  targetType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  ticket: z.string(),
  userId: z.number().int(),
  password: z.string(),
  passwordRepeated: z.string(),
  twoStepVerificationChallengeId: z.string(),
  twoStepVerificationToken: z.string(),
  accountBlob: z.string(),
  secureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
  newEmail: z.string(),
  passkeySessionId: z.string(),
  passkeyRegistrationResponse: z.string(),
});
const Roblox_Web_Responses_Users_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Authentication_Api_Models_TwoStepVerificationSentResponse = z.object({
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
  ticket: z.string(),
});
const Roblox_Authentication_Api_Models_LoginResponse = z.object({
  user: Roblox_Web_Responses_Users_SkinnyUserResponse,
  twoStepVerificationData: Roblox_Authentication_Api_Models_TwoStepVerificationSentResponse,
  identityVerificationLoginTicket: z.string(),
  isBanned: z.boolean(),
  accountBlob: z.string(),
  shouldUpdateEmail: z.boolean(),
  recoveryEmail: z.string(),
  passkeyRegistrationSucceeded: z.boolean(),
  shouldAutoLoginFromRecovery: z.boolean(),
});
const Roblox_Authentication_Api_Models_PasswordValidationResponse = z.object({
  code: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  message: z.string(),
});
const Roblox_Authentication_Api_Models_PasswordValidationModel = z.object({
  username: z.string(),
  password: z.string(),
});
const Roblox_Authentication_Api_Models_RecoveryMetadataResponse = z.object({
  isOnPhone: z.boolean(),
  codeLength: z.number().int(),
  isPhoneFeatureEnabledForUsername: z.boolean(),
  isPhoneFeatureEnabledForPassword: z.boolean(),
  isBedev2CaptchaEnabledForPasswordReset: z.boolean(),
  isUsernameRecoveryDeprecated: z.boolean(),
});
const Roblox_Authentication_Api_Models_RevertAccountInfoResponse = z.object({
  isTwoStepVerificationEnabled: z.boolean(),
  isEmailVerified: z.boolean(),
  isEmailChanged: z.boolean(),
  isPhoneVerified: z.boolean(),
  userId: z.number().int(),
  username: z.string(),
  ticket: z.string(),
});
const Roblox_Authentication_Api_Models_RevertAccountSubmitRequest = z.object({
  UserId: z.number().int(),
  NewPassword: z.string(),
  NewPasswordRepeated: z.string(),
  Ticket: z.string(),
  TwoStepVerificationChallengeId: z.string(),
  TwoStepVerificationToken: z.string(),
});
const Roblox_Authentication_Api_Models_UsernamesResponse = z.object({
  usernames: z.array(z.string()),
});
const Roblox_Authentication_Api_Models_UsernameValidationResponse = z.object({
  code: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(10),
    z.literal(12),
  ]),
  message: z.string(),
});
const Roblox_Authentication_Api_Models_UsernameValidationRequest = z.object({
  username: z.string(),
  birthday: z.string().datetime({ offset: true }),
  context: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Authentication_Api_Models_Request_IdentityVerificationLoginRequest = z.object({
  loginTicket: z.string(),
  resultToken: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
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
const Roblox_Authentication_Api_Models_LoginRequest = z.object({
  ctype: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
  ]),
  cvalue: z.string(),
  password: z.string(),
  userId: z.number().int(),
  securityQuestionSessionId: z.string(),
  securityQuestionRedemptionToken: z.string(),
  secureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
  accountBlob: z.string(),
  accountLinkParameters: Roblox_Authentication_Api_Models_AccountLinkParameters,
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Authentication_Api_Models_Request_LogoutFromAllSessionsAndReauthenticateRequest = z.object({
  SecureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
});
const Roblox_Authentication_Api_Models_SendResetPasswordRequest = z.object({
  targetType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  target: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Authentication_Api_Models_SendResetPasswordResponse = z.object({
  nonce: z.string(),
  transmissionType: z.union([z.literal(0), z.literal(1)]),
});
const Roblox_Authentication_Api_Models_PasswordResetVerificationRequest = z.object({
  targetType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  nonce: z.string(),
  code: z.string(),
});
const Roblox_Authentication_Api_Models_ForgotPasswordUserResponse = z.object({
  user: Roblox_Web_Responses_Users_LegacyUserResponse,
  ticket: z.string(),
});
const Roblox_Authentication_Api_Models_PasswordResetVerificationResponse = z.object({
  userTickets: z.array(Roblox_Authentication_Api_Models_ForgotPasswordUserResponse),
});
const Roblox_Authentication_Api_Models_ReferralDataModel = z.object({
  acquisitionTime: z.string().datetime({ offset: true }),
  acquisitionReferrer: z.string(),
  medium: z.string(),
  source: z.string(),
  campaign: z.string(),
  adGroup: z.string(),
  keyword: z.string(),
  matchType: z.string(),
  sendInfo: z.boolean(),
  requestSessionId: z.string(),
  offerId: z.string(),
});
const Roblox_Authentication_Api_Models_Request_OtpSessionModel = z.object({
  otpSessionToken: z.string(),
  otpContactType: z.union([z.literal(1), z.literal(2)]),
});
const Roblox_Authentication_Api_Models_Request_AuditContentValue = z.object({
  translationKey: z.string(),
  translationNamespace: z.string(),
  translatedSourceString: z.string(),
  parameters: z.string(),
});
const Roblox_Authentication_Api_Models_Request_AuditSystemContent = z.object({
  capturedAuditContent: Roblox_Authentication_Api_Models_Request_AuditContentValue,
  additionalAuditContent: z.string(),
});
const Roblox_Authentication_Api_Models_SignupRequest = z.object({
  username: z.string(),
  password: z.string(),
  gender: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  birthday: z.string().datetime({ offset: true }),
  displayName: z.string(),
  isTosAgreementBoxChecked: z.boolean(),
  email: z.string(),
  locale: z.string(),
  assetIds: z.array(z.number().int()),
  bodyColorId: z.number().int(),
  bodyTypeScale: z.number(),
  headScale: z.number(),
  heightScale: z.number(),
  widthScale: z.number(),
  proportionScale: z.number(),
  referralData: Roblox_Authentication_Api_Models_ReferralDataModel,
  agreementIds: z.array(z.string()),
  identityVerificationResultToken: z.string(),
  secureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
  otpSession: Roblox_Authentication_Api_Models_Request_OtpSessionModel,
  dataToken: z.string(),
  accountBlob: z.string(),
  passkeySessionId: z.string(),
  passkeyRegistrationResponse: z.string(),
  accountLinkParameters: Roblox_Authentication_Api_Models_AccountLinkParameters,
  auditSystemContent: Roblox_Authentication_Api_Models_Request_AuditSystemContent,
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Authentication_Api_Models_SignupResponse = z.object({
  userId: z.number().int(),
  starterPlaceId: z.number().int(),
  returnUrl: z.string(),
  accountBlob: z.string(),
});
const Roblox_Authentication_Api_Models_PasswordChangeModel = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  secureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
});
const Roblox_Authentication_Api_Models_UsernameChangeRequest = z.object({
  username: z.string(),
  password: z.string(),
});
const Roblox_Authentication_Api_Models_RecoverUsernameRequest = z.object({
  targetType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  target: z.string(),
});
const Roblox_Authentication_Api_Models_RecoverUsernameResponse = z.object({
  transmissionType: z.union([z.literal(0), z.literal(1)]),
});

/**
 * @api GET https://auth.roblox.com/v2/auth/metadata
 */
export const getAuthMetadata = endpoint({
  method: 'GET',
  path: '/v2/auth/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ cookieLawNoticeTimeout: z.number().int() }),
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v2/identity-verification/login
 * @param body
 */
export const postIdentityVerificationLogin = endpoint({
  method: 'POST',
  path: '/v2/identity-verification/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_IdentityVerificationLoginRequest,
  response: z.object({}),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed
1: Invalid login ticket.
2: Invalid result token.
3: Invalid user.
4: Authentication failure.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/login
 * @param body Roblox.Authentication.Api.Models.LoginRequest.
 */
export const postLogin = endpoint({
  method: 'POST',
  path: '/v2/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_LoginRequest,
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `0: An unexpected error occurred.
3: Username and Password are required. Please try again.
8: Login with received credential type is not supported.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: Incorrect username or password. Please try again.
2: You must pass the robot test before logging in.
4: Account has been locked. Please request a password reset.
5: Unable to login. Please use Social Network sign on.
6: Account issue. Please contact Support.
9: Unable to login with provided credentials. Default login is required.
10: Received credentials are unverified.
12: Existing login session found. Please log out first.
14: The account is unable to log in. Please log in to the LuoBu app.
15: Too many attempts. Please wait a bit.
27: The account is unable to login. Please log in with the VNG app.`,
    },
    {
      status: 429,
      description: `7: Too many attempts. Please wait a bit.`,
    },
    {
      status: 503,
      description: `11: Service unavailable. Please try again.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/login/linked
 * @param body Roblox.Authentication.Api.Models.LoginRequest
 */
export const postLoginLinked = endpoint({
  method: 'POST',
  path: '/v2/login/linked',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_LoginRequest,
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `0: An unexpected error occurred.
3: Username and Password are required. Please try again.
8: Login with received credential type is not supported.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: Incorrect username or password. Please try again.
2: You must pass the robot test before logging in.
4: Account has been locked. Please request a password reset.
5: Unable to login. Please use Social Network sign on.
6: Account issue. Please contact Support.
9: Unable to login with provided credentials. Default login is required.
10: Received credentials are unverified.
12: Existing login session found. Please log out first.
14: The account is unable to log in. Please log in to the LuoBu app.
15: Too many attempts. Please wait a bit.
27: The account is unable to login. Please log in with the VNG app.`,
    },
    {
      status: 429,
      description: `7: Too many attempts. Please wait a bit.`,
    },
    {
      status: 503,
      description: `11: Service unavailable. Please try again.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/logout
 */
export const postLogout = endpoint({
  method: 'POST',
  path: '/v2/logout',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/logoutfromallsessionsandreauthenticate
 * @param body
 */
export const postLogoutfromallsessionsandreauthenticate = endpoint({
  method: 'POST',
  path: '/v2/logoutfromallsessionsandreauthenticate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_LogoutFromAllSessionsAndReauthenticateRequest,
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/metadata
 */
export const getMetadata = endpoint({
  method: 'GET',
  path: '/v2/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_MetadataResponse,
  errors: [],
});
/**
 * @api GET https://auth.roblox.com/v2/passwords/current-status
 */
export const getPasswordsCurrentStatus = endpoint({
  method: 'GET',
  path: '/v2/passwords/current-status',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ valid: z.boolean() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/passwords/reset
 * @param TargetType
 * @param Ticket
 */
export const getPasswordsReset = endpoint({
  method: 'GET',
  path: '/v2/passwords/reset',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    TargetType: {},
    Ticket: {},
  },
  parameters: {
    TargetType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    Ticket: z.string(),
  },
  response: Roblox_Authentication_Api_Models_PasswordResetMetadataResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
9: The target type is invalid.
11: The password reset ticket is invalid.
14: The nonce is invalid.`,
    },
    {
      status: 403,
      description: `11: The password reset ticket is invalid.
16: The ticket is expired.`,
    },
    {
      status: 500,
      description: `0: Unknown error occured.`,
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/passwords/reset
 * @param body The request model including the target type, ticket, user id, and new password, Roblox.Authentication.Api.Models.PasswordResetModel
 * @description This will log the user out of all sessions and re-authenticate.
 */
export const postPasswordsReset = endpoint({
  method: 'POST',
  path: '/v2/passwords/reset',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_PasswordResetModel,
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
11: The password reset ticket is invalid.
12: The user is invalid.
20: The password is invalid.
21: Passwords do not match.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
16: The ticket is expired.
17: The nonce is expired.`,
    },
    {
      status: 500,
      description: `0: Unknown error occured.`,
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/passwords/reset/send
 * @param body The request model containing the target type and a target.
 * @description Phone target must be a csv with 3 values: "internationalPrefixNumber,nationalNumber,countryCode"
 */
export const postPasswordsResetSend = endpoint({
  method: 'POST',
  path: '/v2/passwords/reset/send',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_SendResetPasswordRequest,
  response: Roblox_Authentication_Api_Models_SendResetPasswordResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
9: The target type is invalid.
10: The target is invalid.
12: The user is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: Captcha is required.
23: Authenticate with Luobu instead.`,
    },
    {
      status: 429,
      description: `2: Too many attempts. Please try again later.`,
    },
    {
      status: 500,
      description: `0: Unknown error occured.
19: Message could not be sent.`,
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/passwords/reset/verify
 * @param body The request model containing the nonce and the solution. Roblox.Authentication.Api.Models.PasswordResetVerificationRequest
 */
export const postPasswordsResetVerify = endpoint({
  method: 'POST',
  path: '/v2/passwords/reset/verify',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_PasswordResetVerificationRequest,
  response: Roblox_Authentication_Api_Models_PasswordResetVerificationResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
9: The target type is invalid.
14: The nonce is invalid.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
13: The code is invalid.`,
    },
    {
      status: 500,
      description: `0: Unknown error occured.`,
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/passwords/validate
 * @param Username
 * @param Password
 */
export const getPasswordsValidate = endpoint({
  method: 'GET',
  path: '/v2/passwords/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Username: {},
    Password: {},
  },
  parameters: {
    Username: z.string(),
    Password: z.string(),
  },
  response: Roblox_Authentication_Api_Models_PasswordValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: Valid Username and Password are required. Please try again.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/passwords/validate
 * @param body The Roblox.Authentication.Api.Models.PasswordValidationModel.
 */
export const postPasswordsValidate = endpoint({
  method: 'POST',
  path: '/v2/passwords/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_PasswordValidationModel,
  response: Roblox_Authentication_Api_Models_PasswordValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: Valid Username and Password are required. Please try again.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/recovery/metadata
 */
export const getRecoveryMetadata = endpoint({
  method: 'GET',
  path: '/v2/recovery/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_RecoveryMetadataResponse,
  errors: [
    {
      status: 503,
      description: `7: The Roblox WeChat API is currently unavailable.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/revert/account
 * @param ticket
 */
export const getRevertAccount = endpoint({
  method: 'GET',
  path: '/v2/revert/account',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    ticket: {},
  },
  parameters: {
    ticket: z.string(),
  },
  response: Roblox_Authentication_Api_Models_RevertAccountInfoResponse,
  errors: [
    {
      status: 400,
      description: `2: The account revert ticket is not valid`,
    },
    {
      status: 403,
      description: `13: Revert links are disabled for users in the Enhanced Protection Program.`,
    },
    {
      status: 503,
      description: `1: This feature is disabled`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/revert/account
 * @param body The Roblox.Authentication.Api.Models.RevertAccountSubmitRequest containing the necessary information to revert account.
 */
export const postRevertAccount = endpoint({
  method: 'POST',
  path: '/v2/revert/account',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_RevertAccountSubmitRequest,
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `2: The account revert ticket is not valid
3: Password is not valid
4: Passwords do not match
5: Password cannot be used
8: The account security ticket is expired.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `0: Unknown
1: This feature is disabled`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/revert/invalidate-tickets
 */
export const postRevertInvalidateTickets = endpoint({
  method: 'POST',
  path: '/v2/revert/invalidate-tickets',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
  errors: [
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
      description: `1: This feature is disabled`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/session/refresh
 */
export const postSessionRefresh = endpoint({
  method: 'POST',
  path: '/v2/session/refresh',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/signup
 * @param body Roblox.Authentication.Api.Models.SignupRequest
 */
export const postSignup = endpoint({
  method: 'POST',
  path: '/v2/signup',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_SignupRequest,
  response: Roblox_Authentication_Api_Models_SignupResponse,
  errors: [
    {
      status: 400,
      description: `Bad request
16: User agreement ids are null.
21: Empty account switch blob required`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: Captcha Failed.
4: Invalid Birthday.
5: Invalid Username.
6: Username already taken.
7: Invalid Password.
8: Password and Username are same.
9: Password is too simple.
10: Email is invalid.
11: Asset is invalid.
12: Too many attempts. Please wait a bit.
17: One time Passcode session was not valid
22: Maximum logged in accounts limit reached.`,
    },
    {
      status: 429,
      description: `3: Too many attempts. Please wait a bit.`,
    },
    {
      status: 500,
      description: `Internal server error
15: Insert acceptances failed.
27: Pre-auth passkey registration failed`,
    },
    {
      status: 503,
      description: `Service unavailable`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/signup/linked
 * @param body Roblox.Authentication.Api.Models.SignupRequest
 */
export const postSignupLinked = endpoint({
  method: 'POST',
  path: '/v2/signup/linked',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_SignupRequest,
  response: Roblox_Authentication_Api_Models_SignupResponse,
  errors: [
    {
      status: 400,
      description: `Bad request
16: User agreement ids are null.
21: Empty account switch blob required`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: Captcha Failed.
4: Invalid Birthday.
5: Invalid Username.
6: Username already taken.
7: Invalid Password.
8: Password and Username are same.
9: Password is too simple.
10: Email is invalid.
11: Asset is invalid.
12: Too many attempts. Please wait a bit.
17: One time Passcode session was not valid
22: Maximum logged in accounts limit reached.`,
    },
    {
      status: 429,
      description: `3: Too many attempts. Please wait a bit.`,
    },
    {
      status: 500,
      description: `Internal server error
15: Insert acceptances failed.
27: Pre-auth passkey registration failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/user/passwords/change
 * @param body The request model including the current password, and the new password.
 * @description The current password is needed for verification that the password can be changed.
 */
export const postUserPasswordsChange = endpoint({
  method: 'POST',
  path: '/v2/user/passwords/change',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_PasswordChangeModel,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `Roblox.Web.Authentication.Passwords.PasswordResponseCodes.InvalidCurrentPassword
            OR
            Roblox.Web.Authentication.Passwords.PasswordResponseCodes.InvalidPassword`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.Web.Authentication.Passwords.PasswordResponseCodes.PinLocked
0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `Roblox.Web.Authentication.Passwords.PasswordResponseCodes.Flooded`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/username
 * @param body The Roblox.Authentication.Api.Models.UsernameChangeRequest
 */
export const postUsername = endpoint({
  method: 'POST',
  path: '/v2/username',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_UsernameChangeRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `5: You don&#x27;t have enough Robux to change your username.
10: This username is already in use
11: Username not appropriate for Roblox
12: Usernames can be 3 to 20 characters long
13: Usernames can’t start or end with _ and can have at most one _
14: Only a-z, A-Z, 0-9, and _ are allowed
15: Username is null
16: Username might contain private information
17: This username is not available
18: Username is same as current`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: PIN is locked.
2: A verified email is missing
3: Your password is incorrect.
100: Unknown birthday`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: You don&#x27;t have enough Robux to change your username.`,
    },
    {
      status: 503,
      description: `4: The feature is currently not available. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/usernames
 * @param username
 * @description This endpoint can be expanded in the future to include other query parameters such as "startsWith"
 */
export const getUsernames = endpoint({
  method: 'GET',
  path: '/v2/usernames',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    username: {},
  },
  parameters: {
    username: z.string().optional(),
  },
  response: Roblox_Authentication_Api_Models_UsernamesResponse,
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v2/usernames/recover
 * @param body
 */
export const postUsernamesRecover = endpoint({
  method: 'POST',
  path: '/v2/usernames/recover',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_RecoverUsernameRequest,
  response: Roblox_Authentication_Api_Models_RecoverUsernameResponse,
  errors: [
    {
      status: 400,
      description: `20: Invalid Email
21: Invalid Phone
23: No Account Found`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
11: Too many attempts. Please wait a bit.`,
    },
    {
      status: 500,
      description: `0: An unexpected error occurred.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v2/usernames/validate
 * @param Username
 * @param Birthday
 * @param Context
 */
export const getUsernamesValidate = endpoint({
  method: 'GET',
  path: '/v2/usernames/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Username: {},
    Birthday: {},
    Context: {},
  },
  parameters: {
    Username: z.string(),
    Birthday: z.string().datetime({ offset: true }),
    Context: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  },
  response: Roblox_Authentication_Api_Models_UsernameValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: A valid username is required.
2: A valid birthday or authenticated user is required.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v2/usernames/validate
 * @param body The Roblox.Authentication.Api.Models.UsernameValidationRequest.
 */
export const postUsernamesValidate = endpoint({
  method: 'POST',
  path: '/v2/usernames/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_UsernameValidationRequest,
  response: Roblox_Authentication_Api_Models_UsernameValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: A valid username is required.
2: A valid birthday or authenticated user is required.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
