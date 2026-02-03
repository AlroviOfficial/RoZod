import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Authentication_Api_Models_AccountPinStatusResponse = z.object({
  isEnabled: z.boolean(),
  unlockedUntil: z.number(),
});
const Roblox_Authentication_Api_Models_AccountPinRequest = z.object({
  pin: z.string(),
  reauthenticationToken: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiSuccessResponse = z.object({
  success: z.boolean(),
});
const Roblox_Authentication_Api_Models_AuthMetaDataResponse = z.object({
  cookieLawNoticeTimeout: z.number().int(),
});
const Roblox_Authentication_Api_Models_Response_GetClientAssertionResponse = z.object({ clientAssertion: z.string() });
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
const Roblox_Authentication_Api_Models_ProviderInfoModel = z.object({
  provider: z.string(),
  identifier: z.string(),
});
const Roblox_Authentication_Api_Models_SocialProvidersResponse = z.object({
  providers: z.array(Roblox_Authentication_Api_Models_ProviderInfoModel),
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
const Roblox_Authentication_Api_Models_EmailValidationResponse = z.object({
  isEmailValid: z.boolean(),
});
const Roblox_Authentication_Api_Models_RecommendedUsernameResponse = z.object({
  didGenerateNewUsername: z.boolean(),
  suggestedUsernames: z.array(z.string()),
});
const Roblox_Authentication_Api_Models_RecommendedUsernameFromDisplayNameRequest = z.object({
  displayName: z.string(),
  birthday: z.string().datetime({ offset: true }),
});
const Roblox_Authentication_Api_Models_RecommendedUsernameRequest = z.object({
  username: z.string(),
  birthday: z.string().datetime({ offset: true }),
});
const Roblox_Authentication_Api_Models_XboxConnectionModel = z.object({
  hasConnectedXboxAccount: z.boolean(),
  gamertag: z.string(),
});
const Roblox_Authentication_Api_Models_XboxLoginConsecutiveDaysResponse = z.object({ count: z.number().int() });
const Roblox_Authentication_Api_Models_AccountPinResponse = z.object({
  unlockedUntil: z.number(),
});
const Roblox_Authentication_Api_Models_Request_ExternalAccessRequest = z.object({
  authenticationProof: z.string(),
  identityProviderPlatformType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  additionalInfoPayload: z.object({}),
});
const Roblox_Authentication_Api_Models_Response_ExternalIdentityGateway_ExternalIdentityAccessResponse = z.object({
  placeId: z.number().int(),
  isolationContext: z.string(),
  launchData: z.string(),
});
const Roblox_Authentication_Api_Models_Request_ExternalLoginRequest = z.object({
  identityProvider: z.union([
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
  additionalData: z.object({}),
  authenticationProof: z.string(),
});
const Roblox_Authentication_Api_Models_Response_ExternalIdentityGateway_ExternalLoginResponse = z.object({
  success: z.boolean(),
});
const Roblox_Authentication_Api_Models_Request_ExternalLoginAndLinkRequest = z.object({
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
  authenticationProof: z.string(),
  IdentityProviderPlatformType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  additionalInfoPayload: z.object({}),
});
const Roblox_Authentication_Api_Models_Request_ExternalSignupRequest = z.object({
  username: z.string(),
  password: z.string(),
  birthday: z.string().datetime({ offset: true }),
  locale: z.string(),
  authenticationProof: z.string(),
  IdentityProviderPlatformType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  additionalInfoPayload: z.object({}),
});
const Roblox_Authentication_Api_Models_Request_ExternalUnlinkRequest = z.object({
  IdentityProviderPlatformType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  additionalInfoPayload: z.object({}),
});
const Roblox_Authentication_Api_Models_Request_IdentityVerificationLoginRequest = z.object({
  loginTicket: z.string(),
  resultToken: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Authentication_Api_Models_Request_InitializeLoginRequest = z.object({
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
  cvalue: z.string().min(1),
  captchaId: z.string().optional(),
  captchaToken: z.string().optional(),
  captchaProvider: z.string().optional(),
  challengeId: z.string().optional(),
});
const Roblox_Authentication_Api_Models_LoginMethodModel = z.object({
  method: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  priority: z.number().int(),
});
const Roblox_Authentication_Api_Models_Response_InitializeLoginResponse = z.object({
  loginMethods: z.array(Roblox_Authentication_Api_Models_LoginMethodModel),
});
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
const Roblox_Authentication_Api_Models_Request_DeletePasskeysRequest = z.object({
  credentialNicknames: z.array(z.string()),
});
const Roblox_Authentication_Api_Models_Request_FinishPasskeyPreauthRegistrationRequest = z.object({
  sessionId: z.string(),
  registrationResponse: z.string(),
});
const Roblox_Authentication_Api_Models_Request_FinishPasskeyRegistrationRequest = z.object({
  sessionId: z.string(),
  credentialNickname: z.string(),
  attestationResponse: z.string(),
});
const Roblox_Authentication_Api_Models_Request_ListPasskeysRequest = z.object({
  all: z.boolean(),
});
const Roblox_Authentication_Api_Models_Response_PasskeyCredential = z.object({
  nickname: z.string(),
});
const Roblox_Authentication_Api_Models_Response_ListPasskeyCredentialResponse = z.object({
  credentials: z.array(Roblox_Authentication_Api_Models_Response_PasskeyCredential),
});
const Roblox_Authentication_Api_Models_Request_StartAuthenticationByUserRequest = z.object({
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
  cvalue: z.string().min(1),
});
const Roblox_Authentication_Api_Models_Response_StartAuthenticationByUserResponse = z.object({
  authenticationOptions: z.string(),
  sessionId: z.string(),
});
const Roblox_Authentication_Api_Models_Request_StartPasskeyPreauthRegistrationRequest = z.object({
  username: z.string(),
});
const Roblox_Authentication_Api_Models_Response_StartPasskeyPreauthRegistrationResponse = z.object({
  creationOptions: z.string(),
  sessionId: z.string(),
});
const Roblox_Authentication_Api_Models_Response_StartAuthenticationResponse = z.object({
  authenticationOptions: z.string(),
  sessionId: z.string(),
});
const Roblox_Authentication_Api_Models_Request_StartPasskeyRegistrationRequest = z.object({
  isSilentUpgrade: z.boolean(),
});
const Roblox_Authentication_Api_Models_Response_StartPasskeyRegistrationResponse = z.object({
  creationOptions: z.string(),
  sessionId: z.string(),
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
  assetIds: z.array(z.number()),
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
const Roblox_Authentication_Api_Models_SocialAuthenticationDisconnectRequest = z.object({ Password: z.string() });
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
const Roblox_Authentication_Api_Models_XboxTranslateRequest = z.object({
  ids: z.array(z.string()),
});
const Roblox_Authentication_Api_Models_XboxUserModel = z.object({
  Id: z.string(),
  UserId: z.number().int(),
  Username: z.string(),
});
const Roblox_Authentication_Api_Models_XboxCollectionsOfUserResponse = z.object({
  Users: z.array(Roblox_Authentication_Api_Models_XboxUserModel),
});

/**
 * @api GET https://auth.roblox.com/v1/account/pin
 * @summary Gets the account pin status.
 */
export const getAccountPin = endpoint({
  method: 'GET',
  path: '/v1/account/pin',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_AccountPinStatusResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/account/pin
 * @summary Request to create the account pin.
 * @param body The Roblox.Authentication.Api.Models.AccountPinRequest.
 */
export const postAccountPin = endpoint({
  method: 'POST',
  path: '/v1/account/pin',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_AccountPinRequest,
  response: z.object({ success: z.boolean() }),
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
 * @api DELETE https://auth.roblox.com/v1/account/pin
 * @summary Request for deletes the account pin from the account.
 * @param body
 */
export const deleteAccountPin = endpoint({
  method: 'DELETE',
  path: '/v1/account/pin',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_AccountPinRequest.optional(),
  response: z.object({ success: z.boolean() }),
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
 * @api PATCH https://auth.roblox.com/v1/account/pin
 * @summary Request made to update the account pin on the account.
 * @param body The request body.
 */
export const patchAccountPin = endpoint({
  method: 'PATCH',
  path: '/v1/account/pin',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_AccountPinRequest,
  response: z.object({ success: z.boolean() }),
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
 * @api POST https://auth.roblox.com/v1/account/pin/lock
 * @summary Request to locks the account which has an account pin enabled.
 */
export const postAccountPinLock = endpoint({
  method: 'POST',
  path: '/v1/account/pin/lock',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ success: z.boolean() }),
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
 * @api POST https://auth.roblox.com/v1/account/pin/unlock
 * @summary Requests to unlock the account pin.
 * @param body The Roblox.Authentication.Api.Models.AccountPinRequest containing the entered pin.
 */
export const postAccountPinUnlock = endpoint({
  method: 'POST',
  path: '/v1/account/pin/unlock',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_AccountPinRequest,
  response: z.object({ unlockedUntil: z.number() }),
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
 * @api GET https://auth.roblox.com/v1/auth/metadata
 * @summary Gets Auth meta data
 */
export const getAuthMetadata = endpoint({
  method: 'GET',
  path: '/v1/auth/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ cookieLawNoticeTimeout: z.number().int() }),
  errors: [],
});
/**
 * @api GET https://auth.roblox.com/v1/client-assertion
 * @summary Creates a client assertion to be used when generating an auth ticket.
 */
export const getClientAssertion = endpoint({
  method: 'GET',
  path: '/v1/client-assertion',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ clientAssertion: z.string() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/external/:identityProviderId/sso/oauth/callback
 * @summary Callback function that external identity provider calls post user authentication.
 * @param identityProviderId
 * @param code
 * @param state
 */
export const getExternalIdentityprovideridSsoOauthCallback = endpoint({
  method: 'GET',
  path: '/v1/external/:identityProviderId/sso/oauth/callback',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    identityProviderId: {
      style: 'simple',
    },
    code: {
      style: 'form',
      explode: true,
    },
    state: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    identityProviderId: z.number().int(),
    code: z.string(),
    state: z.string(),
  },
  response: z.void(),
  errors: [
    {
      status: 302,
      description: `Redirect`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/external/:identityProviderId/sso/oauth/init
 * @summary Signs a user up for Roblox and links the account to the authenticated external provider ID.
 * @param identityProviderId
 */
export const getExternalIdentityprovideridSsoOauthInit = endpoint({
  method: 'GET',
  path: '/v1/external/:identityProviderId/sso/oauth/init',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    identityProviderId: {
      style: 'simple',
    },
  },
  parameters: {
    identityProviderId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 302,
      description: `Redirect`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/external/access
 * @summary Signs a user up for Roblox and links the account to the authenticated external provider ID.
 * @param body
 */
export const postExternalAccess = endpoint({
  method: 'POST',
  path: '/v1/external/access',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_ExternalAccessRequest,
  response: Roblox_Authentication_Api_Models_Response_ExternalIdentityGateway_ExternalIdentityAccessResponse,
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v1/external/login
 * @summary Logs in a user to Roblox based on the user's authenticated external provider session
 * @param body
 */
export const postExternalLogin = endpoint({
  method: 'POST',
  path: '/v1/external/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_ExternalLoginRequest,
  response: z.object({ success: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `30: Platform is not supported for SSO login.`,
    },
    {
      status: 401,
      description: `31: No linked account found for SSO login.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `0: An unexpected error occurred.`,
    },
    {
      status: 501,
      description: `0: An unexpected error occurred.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/external/loginAndLink
 * @summary Deprecated endpoint
Logins in a user to Roblox, then links the Roblox account to the external provider ID
 * @param body 
 */
export const postExternalLoginandlink = endpoint({
  method: 'POST',
  path: '/v1/external/loginAndLink',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_ExternalLoginAndLinkRequest,
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/external/signup
 * @summary Signs a user up for Roblox and links the account to the authenticated external provider ID
 * @param body
 */
export const postExternalSignup = endpoint({
  method: 'POST',
  path: '/v1/external/signup',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_ExternalSignupRequest,
  response: z.void(),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/external/unlink
 * @summary Unlink the logged in Roblox account from the current external provider ID
 * @param body
 */
export const postExternalUnlink = endpoint({
  method: 'POST',
  path: '/v1/external/unlink',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_ExternalUnlinkRequest,
  response: z.void(),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/identity-verification/login
 * @summary Endpoint for login with identity verification
 * @param body
 */
export const postIdentityVerificationLogin = endpoint({
  method: 'POST',
  path: '/v1/identity-verification/login',
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
 * @api POST https://auth.roblox.com/v1/identity/initialize-login
 * @summary Initiates identifier-first login flow by returning a list of login methods for user(s).
 * @param body
 */
export const postIdentityInitializeLogin = endpoint({
  method: 'POST',
  path: '/v1/identity/initialize-login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_InitializeLoginRequest,
  response: Roblox_Authentication_Api_Models_Response_InitializeLoginResponse,
  errors: [
    {
      status: 400,
      description: `3: User identifier and type are required.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: Invalid user identifier.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `1: This feature is disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/login
 * @summary Authenticates a user.
 * @param body Roblox.Authentication.Api.Models.LoginRequest.
 */
export const postLogin = endpoint({
  method: 'POST',
  path: '/v1/login',
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
 * @api POST https://auth.roblox.com/v1/login/linked
 * @summary Endpoint for logging in a user, specifically for linked
authentication on PCGDK
 * @param body Roblox.Authentication.Api.Models.LoginRequest
 */
export const postLoginLinked = endpoint({
  method: 'POST',
  path: '/v1/login/linked',
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
 * @api POST https://auth.roblox.com/v1/logout
 * @summary Destroys the current authentication session.
 */
export const postLogout = endpoint({
  method: 'POST',
  path: '/v1/logout',
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
 * @api POST https://auth.roblox.com/v1/logoutfromallsessionsandreauthenticate
 * @summary Logs out user from all other sessions.
 * @param body
 */
export const postLogoutfromallsessionsandreauthenticate = endpoint({
  method: 'POST',
  path: '/v1/logoutfromallsessionsandreauthenticate',
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
 * @api GET https://auth.roblox.com/v1/metadata
 * @summary Get the metadata
 */
export const getMetadata = endpoint({
  method: 'GET',
  path: '/v1/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_MetadataResponse,
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/DeleteCredentialBatch
 * @summary Disables a batch of credentials for the specified user.
 * @param body The request body!:DisableTwoStepVerificationRequest.
 */
export const postPasskeyDeletecredentialbatch = endpoint({
  method: 'POST',
  path: '/v1/passkey/DeleteCredentialBatch',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_DeletePasskeysRequest,
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
0: An unknown error occurred with the request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/finish-preauth-registration
 * @param body
 */
export const postPasskeyFinishPreauthRegistration = endpoint({
  method: 'POST',
  path: '/v1/passkey/finish-preauth-registration',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_FinishPasskeyPreauthRegistrationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `0: An unknown error occurred with the request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
0: An unknown error occurred with the request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: Reached limit of pass keys registered.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred with the request.`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/FinishRegistration
 * @summary Complete Passkey registration by providing credential creation options.
 * @param body The request body.Roblox.Authentication.Api.Models.Request.FinishPasskeyRegistrationRequest.
 */
export const postPasskeyFinishregistration = endpoint({
  method: 'POST',
  path: '/v1/passkey/FinishRegistration',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_FinishPasskeyRegistrationRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `0: An unknown error occurred with the request.
3: Invalid security key nickname.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
0: An unknown error occurred with the request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: Invalid security key nickname.`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/ListCredentials
 * @summary List a user's registered passkeys.
 * @param body
 */
export const postPasskeyListcredentials = endpoint({
  method: 'POST',
  path: '/v1/passkey/ListCredentials',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ all: z.boolean() }),
  response: Roblox_Authentication_Api_Models_Response_ListPasskeyCredentialResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
0: An unknown error occurred with the request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/start-authentication-by-user
 * @summary Initializes passkey authentication for the user(s) corresponding to the identifier provided.
 * @param body
 */
export const postPasskeyStartAuthenticationByUser = endpoint({
  method: 'POST',
  path: '/v1/passkey/start-authentication-by-user',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_Request_StartAuthenticationByUserRequest,
  response: Roblox_Authentication_Api_Models_Response_StartAuthenticationByUserResponse,
  errors: [
    {
      status: 400,
      description: `5: User identifier and type are required.
6: Multi-user passkey authentication is not supported for this credential type.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: No passkeys registered for any users found.`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/start-preauth-registration
 * @summary Initiates  Passkey preauthenticated registration by providing credential creation options.
 * @param body
 */
export const postPasskeyStartPreauthRegistration = endpoint({
  method: 'POST',
  path: '/v1/passkey/start-preauth-registration',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ username: z.string() }),
  response: Roblox_Authentication_Api_Models_Response_StartPasskeyPreauthRegistrationResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/StartAuthentication
 * @summary Provides a challenge for the Passkey to authenticate.
 */
export const postPasskeyStartauthentication = endpoint({
  method: 'POST',
  path: '/v1/passkey/StartAuthentication',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_Response_StartAuthenticationResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/passkey/StartRegistration
 * @summary Initiates Passkey registration by providing credential creation options.
 * @param body
 * @param flow
 */
export const postPasskeyStartregistration = endpoint({
  method: 'POST',
  path: '/v1/passkey/StartRegistration',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    flow: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    flow: z.string().optional(),
  },
  body: z.object({ isSilentUpgrade: z.boolean() }),
  response: Roblox_Authentication_Api_Models_Response_StartPasskeyRegistrationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
0: An unknown error occurred with the request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: Reached limit of pass keys registered.`,
    },
    {
      status: 503,
      description: `2: Feature disabled.`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/passwords/validate
 * @summary Endpoint for checking if a password is valid.
 * @param Username
 * @param Password
 */
export const getPasswordsValidate = endpoint({
  method: 'GET',
  path: '/v1/passwords/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Username: {
      style: 'form',
      explode: true,
    },
    Password: {
      style: 'form',
      explode: true,
    },
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
 * @api POST https://auth.roblox.com/v1/passwords/validate
 * @summary Endpoint for checking if a password is valid.
 * @param body The Roblox.Authentication.Api.Models.PasswordValidationModel.
 */
export const postPasswordsValidate = endpoint({
  method: 'POST',
  path: '/v1/passwords/validate',
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
 * @api GET https://auth.roblox.com/v1/recovery/metadata
 * @summary Get metadata for forgot endpoints
 */
export const getRecoveryMetadata = endpoint({
  method: 'GET',
  path: '/v1/recovery/metadata',
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
 * @api GET https://auth.roblox.com/v1/revert/account
 * @summary Get Revert Account ticket info
 * @param ticket Ticket Guid to revert account.
 */
export const getRevertAccount = endpoint({
  method: 'GET',
  path: '/v1/revert/account',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    ticket: {
      style: 'form',
      explode: true,
    },
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
 * @api POST https://auth.roblox.com/v1/revert/account
 * @summary Submit Revert Account Request
 * @param body The Roblox.Authentication.Api.Models.RevertAccountSubmitRequest containing the necessary information to revert account.
 */
export const postRevertAccount = endpoint({
  method: 'POST',
  path: '/v1/revert/account',
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
 * @api POST https://auth.roblox.com/v1/revert/invalidate-tickets
 * @summary Invalidates all account security tickets for the authenticated user.
This endpoint should be called before enrolling in EPP to ensure old revert links cannot be used.
 */
export const postRevertInvalidateTickets = endpoint({
  method: 'POST',
  path: '/v1/revert/invalidate-tickets',
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
 * @api POST https://auth.roblox.com/v1/session/refresh
 * @summary Logs out user from the current session and create a new one.
 */
export const postSessionRefresh = endpoint({
  method: 'POST',
  path: '/v1/session/refresh',
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
 * @api POST https://auth.roblox.com/v1/signup
 * @summary Endpoint for signing up a new user
 * @param body Roblox.Authentication.Api.Models.SignupRequest
 */
export const postSignup = endpoint({
  method: 'POST',
  path: '/v1/signup',
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
 * @api POST https://auth.roblox.com/v1/signup/linked
 * @summary Endpoint for signing up a new user, specifically for linked
authentication on PCGDK
 * @param body Roblox.Authentication.Api.Models.SignupRequest
 */
export const postSignupLinked = endpoint({
  method: 'POST',
  path: '/v1/signup/linked',
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
 * @api POST https://auth.roblox.com/v1/social/:provider/disconnect
 * @summary Removes the given social authentication method from current Roblox user if it is connected.
 * @param body The request body for additional parameters that may be required for disconnect
 * @param provider The social authentication provider, e.g. Facebook
 */
export const postSocialProviderDisconnect = endpoint({
  method: 'POST',
  path: '/v1/social/:provider/disconnect',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    provider: {
      style: 'simple',
    },
  },
  parameters: {
    provider: z.string(),
  },
  body: z.object({ Password: z.string() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `Bad request
2: Unsupported social provider type.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Forbidden
0: Token Validation Failed
3: Cannot disconnect the only authentication method. Password on account is required.
4: The password provided is invalid.`,
    },
    {
      status: 500,
      description: `Internal server error`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/social/connected-providers
 * @summary Get social network user information if the given social auth method is connected to current user.
 */
export const getSocialConnectedProviders = endpoint({
  method: 'GET',
  path: '/v1/social/connected-providers',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_SocialProvidersResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/user/passwords/change
 * @summary Changes the password for the authenticated user.
 * @param body The request model including the current password, and the new password.
 * @description The current password is needed for verification that the password can be changed.
 */
export const postUserPasswordsChange = endpoint({
  method: 'POST',
  path: '/v1/user/passwords/change',
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
 * @api POST https://auth.roblox.com/v1/username
 * @summary Change the user's username
 * @param body The Roblox.Authentication.Api.Models.UsernameChangeRequest
 */
export const postUsername = endpoint({
  method: 'POST',
  path: '/v1/username',
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
 * @api GET https://auth.roblox.com/v1/usernames
 * @summary Gets a list of existing usernames on Roblox based on the query parameters
 * @param username The username
 * @description This endpoint can be expanded in the future to include other query parameters such as "startsWith"
 */
export const getUsernames = endpoint({
  method: 'GET',
  path: '/v1/usernames',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    username: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    username: z.string().optional(),
  },
  response: Roblox_Authentication_Api_Models_UsernamesResponse,
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v1/usernames/recover
 * @summary Sends an email of all accounts belonging to an email
 * @param body
 */
export const postUsernamesRecover = endpoint({
  method: 'POST',
  path: '/v1/usernames/recover',
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
 * @api GET https://auth.roblox.com/v1/usernames/validate
 * @summary Checks if a username is valid.
 * @param Username
 * @param Birthday
 * @param Context
 */
export const getUsernamesValidate = endpoint({
  method: 'GET',
  path: '/v1/usernames/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Username: {
      style: 'form',
      explode: true,
    },
    Birthday: {
      style: 'form',
      explode: true,
    },
    Context: {
      style: 'form',
      explode: true,
    },
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
 * @api POST https://auth.roblox.com/v1/usernames/validate
 * @summary Checks if a username is valid.
 * @param body The Roblox.Authentication.Api.Models.UsernameValidationRequest.
 */
export const postUsernamesValidate = endpoint({
  method: 'POST',
  path: '/v1/usernames/validate',
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
/**
 * @api GET https://auth.roblox.com/v1/validators/email
 * @summary Tries to check if an email is valid
 * @param Email
 */
export const getValidatorsEmail = endpoint({
  method: 'GET',
  path: '/v1/validators/email',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Email: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    Email: z.string(),
  },
  response: z.object({ isEmailValid: z.boolean() }),
  errors: [],
});
/**
 * @api GET https://auth.roblox.com/v1/validators/recommendedUsernameFromDisplayName
 * @summary Validates the given display name, and if valid, will convert it to a valid username and return suggested username(s) if available.
 * @param DisplayName
 * @param BirthDay
 */
export const getValidatorsRecommendedusernamefromdisplayname = endpoint({
  method: 'GET',
  path: '/v1/validators/recommendedUsernameFromDisplayName',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    DisplayName: {
      style: 'form',
      explode: true,
    },
    BirthDay: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    DisplayName: z.string(),
    BirthDay: z.string().datetime({ offset: true }),
  },
  response: Roblox_Authentication_Api_Models_RecommendedUsernameResponse,
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v1/validators/recommendedUsernameFromDisplayName
 * @summary Validates the given display name, and if valid, will convert it to a valid username and return suggested username(s) if available.
            
This is a POST request and explicitly does not receive the parameter values from the query
 * @param body 
 */
export const postValidatorsRecommendedusernamefromdisplayname = endpoint({
  method: 'POST',
  path: '/v1/validators/recommendedUsernameFromDisplayName',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_RecommendedUsernameFromDisplayNameRequest,
  response: Roblox_Authentication_Api_Models_RecommendedUsernameResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/validators/username
 * @summary Tries to get a valid username if the current username is taken
 * @param Username
 * @param BirthDay
 */
export const getValidatorsUsername = endpoint({
  method: 'GET',
  path: '/v1/validators/username',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    Username: {
      style: 'form',
      explode: true,
    },
    BirthDay: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    Username: z.string(),
    BirthDay: z.string().datetime({ offset: true }),
  },
  response: Roblox_Authentication_Api_Models_RecommendedUsernameResponse,
  errors: [],
});
/**
 * @api POST https://auth.roblox.com/v1/validators/username
 * @summary Tries to get a valid username if the current username is taken
This is a POST request and explicitly does not receive the parameter values from the query
 * @param body 
 */
export const postValidatorsUsername = endpoint({
  method: 'POST',
  path: '/v1/validators/username',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_RecommendedUsernameRequest,
  response: Roblox_Authentication_Api_Models_RecommendedUsernameResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/xbox/connection
 * @summary Check if the current user has an Xbox connected.
Also returns the gamertag of the Xbox account if connected.
 */
export const getXboxConnection = endpoint({
  method: 'GET',
  path: '/v1/xbox/connection',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: Roblox_Authentication_Api_Models_XboxConnectionModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/xbox/disconnect
 * @summary Unlink the current ROBLOX account from the Xbox live account.
 */
export const postXboxDisconnect = endpoint({
  method: 'POST',
  path: '/v1/xbox/disconnect',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ success: z.boolean() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Forbidden
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://auth.roblox.com/v1/xbox/get-login-consecutive-days
 * @summary Get the consecutive days the xbox user has been logged in.
 */
export const getXboxGetLoginConsecutiveDays = endpoint({
  method: 'GET',
  path: '/v1/xbox/get-login-consecutive-days',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `36: Invalid Xbox Live Account`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
    },
  ],
});
/**
 * @api POST https://auth.roblox.com/v1/xbox/translate
 * @summary Translate the xbox user to roblox user.
 * @param body
 */
export const postXboxTranslate = endpoint({
  method: 'POST',
  path: '/v1/xbox/translate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Authentication_Api_Models_XboxTranslateRequest,
  response: Roblox_Authentication_Api_Models_XboxCollectionsOfUserResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `
0: Token Validation Failed`,
    },
  ],
});
