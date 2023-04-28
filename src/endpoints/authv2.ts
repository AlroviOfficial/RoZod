import { z } from 'zod';

const Roblox_Authentication_Api_Models_AuthMetaDataResponse = z
  .object({ cookieLawNoticeTimeout: z.number().int() })
  .partial();
const Roblox_Authentication_Api_Models_CanSendCredentialsVerificationMessageResponse = z
  .object({ canSend: z.boolean() })
  .partial();
const Roblox_Authentication_Api_Models_SendCredentialsVerificationMessageRequest = z
  .object({
    credentialType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    credentialValue: z.string(),
    password: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_MetadataResponse = z
  .object({
    isUpdateUsernameEnabled: z.boolean(),
    ftuxAvatarAssetMap: z.string(),
    IsEmailUpsellAtLogoutEnabled: z.boolean(),
    ShouldFetchEmailUpsellIXPValuesAtLogout: z.boolean(),
    IsAccountRecoveryPromptEnabled: z.boolean(),
    IsContactMethodRequiredAtSignup: z.boolean(),
    IsUserAgreementsSignupIntegrationEnabled: z.boolean(),
    IsKoreaIdVerificationEnabled: z.boolean(),
    IsPasswordRequiredForUsernameChange: z.boolean(),
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordStatusResponse = z.object({ valid: z.boolean() }).partial();
const Roblox_Web_Responses_Users_LegacyUserResponse = z
  .object({
    userId: z.number().int(),
    username: z.string(),
    displayName: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordResetMetadataResponse = z
  .object({ users: z.array(Roblox_Web_Responses_Users_LegacyUserResponse) })
  .partial();
const Roblox_Authentication_Api_Models_PasswordResetModel = z
  .object({
    targetType: z.union([z.literal(0), z.literal(1)]),
    ticket: z.string(),
    userId: z.number().int(),
    password: z.string(),
    passwordRepeated: z.string(),
    twoStepVerificationChallengeId: z.string(),
    twoStepVerificationToken: z.string(),
  })
  .partial();
const Roblox_Web_Responses_Users_SkinnyUserResponse = z
  .object({ id: z.number().int(), name: z.string(), displayName: z.string() })
  .partial();
const Roblox_Authentication_Api_Models_TwoStepVerificationSentResponse = z
  .object({
    mediaType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    ticket: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_LoginResponse = z
  .object({
    user: Roblox_Web_Responses_Users_SkinnyUserResponse,
    twoStepVerificationData: Roblox_Authentication_Api_Models_TwoStepVerificationSentResponse,
    identityVerificationLoginTicket: z.string(),
    isBanned: z.boolean(),
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordValidationResponse = z
  .object({
    code: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
    message: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordValidationModel = z
  .object({ username: z.string(), password: z.string() })
  .partial();
const Roblox_Authentication_Api_Models_RecoveryMetadataResponse = z
  .object({
    isOnPhone: z.boolean(),
    codeLength: z.number().int(),
    isPhoneFeatureEnabledForUsername: z.boolean(),
    isPhoneFeatureEnabledForPassword: z.boolean(),
    isBedev2CaptchaEnabledForPasswordReset: z.boolean(),
  })
  .partial();
const Roblox_Authentication_Api_Models_RevertAccountInfoResponse = z
  .object({
    isTwoStepVerificationEnabled: z.boolean(),
    isEmailVerified: z.boolean(),
    isEmailChanged: z.boolean(),
    isPhoneVerified: z.boolean(),
    userId: z.number().int(),
    username: z.string(),
    ticket: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_RevertAccountSubmitRequest = z
  .object({
    UserId: z.number().int(),
    NewPassword: z.string(),
    NewPasswordRepeated: z.string(),
    Ticket: z.string(),
    TwoStepVerificationChallengeId: z.string(),
    TwoStepVerificationToken: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_TwoStepVerificationMetadataResponse = z
  .object({
    codeLength: z.number().int(),
    loadingImageUrl: z.string(),
    supportUrl: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_UsernamesResponse = z.object({ usernames: z.array(z.string()) }).partial();
const Roblox_Authentication_Api_Models_UsernameValidationResponse = z
  .object({
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
  })
  .partial();
const Roblox_Authentication_Api_Models_UsernameValidationRequest = z
  .object({
    username: z.string(),
    birthday: z.string().datetime(),
    context: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  })
  .partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();
const Roblox_Authentication_Api_Models_Request_IdentityVerificationLoginRequest = z
  .object({ loginTicket: z.string(), resultToken: z.string() })
  .partial();
const Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel = z
  .object({
    clientPublicKey: z.string(),
    clientEpochTimestamp: z.number().int(),
    saiSignature: z.string(),
    serverNonce: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_LoginRequest = z
  .object({
    ctype: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    cvalue: z.string(),
    password: z.string(),
    userId: z.number().int(),
    securityQuestionSessionId: z.string(),
    securityQuestionRedemptionToken: z.string(),
    secureAuthenticationIntent: Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
    captchaId: z.string(),
    captchaToken: z.string(),
    captchaProvider: z.string(),
    challengeId: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_SendResetPasswordRequest = z
  .object({
    targetType: z.union([z.literal(0), z.literal(1)]),
    target: z.string(),
    captchaId: z.string(),
    captchaToken: z.string(),
    captchaProvider: z.string(),
    challengeId: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_SendResetPasswordResponse = z
  .object({
    nonce: z.string(),
    transmissionType: z.union([z.literal(0), z.literal(1)]),
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordResetVerificationRequest = z
  .object({
    targetType: z.union([z.literal(0), z.literal(1)]),
    nonce: z.string(),
    code: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_ForgotPasswordUserResponse = z
  .object({
    user: Roblox_Web_Responses_Users_LegacyUserResponse,
    ticket: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordResetVerificationResponse = z
  .object({
    userTickets: z.array(Roblox_Authentication_Api_Models_ForgotPasswordUserResponse),
  })
  .partial();
const Roblox_Authentication_Api_Models_ReferralDataModel = z
  .object({
    acquisitionTime: z.string().datetime(),
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
  })
  .partial();
const Roblox_Authentication_Api_Models_Request_OtpSessionModel = z
  .object({
    otpSessionToken: z.string(),
    otpContactType: z.union([z.literal(1), z.literal(2)]),
  })
  .partial();
const Roblox_Authentication_Api_Models_SignupRequest = z
  .object({
    username: z.string(),
    password: z.string(),
    gender: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    birthday: z.string().datetime(),
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
    captchaId: z.string(),
    captchaToken: z.string(),
    captchaProvider: z.string(),
    challengeId: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_SignupResponse = z
  .object({ userId: z.number().int(), starterPlaceId: z.number().int() })
  .partial();
const Roblox_Authentication_Api_Models_TwoStepVerificationTicketRequest = z
  .object({
    username: z.string(),
    ticket: z.string(),
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
  })
  .partial();
const Roblox_Authentication_Api_Models_TwoStepVerificationVerifyRequest = z
  .object({
    username: z.string(),
    ticket: z.string(),
    code: z.string(),
    rememberDevice: z.boolean(),
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
  })
  .partial();
const Roblox_Authentication_Api_Models_PasswordChangeModel = z
  .object({ currentPassword: z.string(), newPassword: z.string() })
  .partial();
const Roblox_Authentication_Api_Models_UsernameChangeRequest = z
  .object({ username: z.string(), password: z.string() })
  .partial();
const Roblox_Authentication_Api_Models_RecoverUsernameRequest = z
  .object({
    targetType: z.union([z.literal(0), z.literal(1)]),
    target: z.string(),
  })
  .partial();
const Roblox_Authentication_Api_Models_RecoverUsernameResponse = z
  .object({ transmissionType: z.union([z.literal(0), z.literal(1)]) })
  .partial();

const schemas = {
  Roblox_Authentication_Api_Models_AuthMetaDataResponse,
  Roblox_Authentication_Api_Models_CanSendCredentialsVerificationMessageResponse,
  Roblox_Authentication_Api_Models_SendCredentialsVerificationMessageRequest,
  Roblox_Authentication_Api_Models_MetadataResponse,
  Roblox_Authentication_Api_Models_PasswordStatusResponse,
  Roblox_Web_Responses_Users_LegacyUserResponse,
  Roblox_Authentication_Api_Models_PasswordResetMetadataResponse,
  Roblox_Authentication_Api_Models_PasswordResetModel,
  Roblox_Web_Responses_Users_SkinnyUserResponse,
  Roblox_Authentication_Api_Models_TwoStepVerificationSentResponse,
  Roblox_Authentication_Api_Models_LoginResponse,
  Roblox_Authentication_Api_Models_PasswordValidationResponse,
  Roblox_Authentication_Api_Models_PasswordValidationModel,
  Roblox_Authentication_Api_Models_RecoveryMetadataResponse,
  Roblox_Authentication_Api_Models_RevertAccountInfoResponse,
  Roblox_Authentication_Api_Models_RevertAccountSubmitRequest,
  Roblox_Authentication_Api_Models_TwoStepVerificationMetadataResponse,
  Roblox_Authentication_Api_Models_UsernamesResponse,
  Roblox_Authentication_Api_Models_UsernameValidationResponse,
  Roblox_Authentication_Api_Models_UsernameValidationRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Authentication_Api_Models_Request_IdentityVerificationLoginRequest,
  Roblox_Authentication_Api_Models_Request_SecureAuthenticationIntentModel,
  Roblox_Authentication_Api_Models_LoginRequest,
  Roblox_Authentication_Api_Models_SendResetPasswordRequest,
  Roblox_Authentication_Api_Models_SendResetPasswordResponse,
  Roblox_Authentication_Api_Models_PasswordResetVerificationRequest,
  Roblox_Authentication_Api_Models_ForgotPasswordUserResponse,
  Roblox_Authentication_Api_Models_PasswordResetVerificationResponse,
  Roblox_Authentication_Api_Models_ReferralDataModel,
  Roblox_Authentication_Api_Models_Request_OtpSessionModel,
  Roblox_Authentication_Api_Models_SignupRequest,
  Roblox_Authentication_Api_Models_SignupResponse,
  Roblox_Authentication_Api_Models_TwoStepVerificationTicketRequest,
  Roblox_Authentication_Api_Models_TwoStepVerificationVerifyRequest,
  Roblox_Authentication_Api_Models_PasswordChangeModel,
  Roblox_Authentication_Api_Models_UsernameChangeRequest,
  Roblox_Authentication_Api_Models_RecoverUsernameRequest,
  Roblox_Authentication_Api_Models_RecoverUsernameResponse,
};

export const getV2authmetadata = {
  method: 'get' as const,
  path: '/v2/auth/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ cookieLawNoticeTimeout: z.number().int() }).partial(),
  errors: [],
};
export const getV2credentialsverification = {
  method: 'get' as const,
  path: '/v2/credentials/verification',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    CredentialType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    CredentialValue: z.string(),
    Password: z.string(),
  },
  response: z.object({ canSend: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `0: An unexpected error occurred.
1: Credential value and password are required. Please try again.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `2: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `5: Credentials verification operation is unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV2credentialsverification = {
  method: 'post' as const,
  path: '/v2/credentials/verification',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_SendCredentialsVerificationMessageRequest,
  },
  response: z.object({ canSend: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `0: An unexpected error occurred.
1: Credential value and password are required. Please try again.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `2: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `5: Credentials verification operation is unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV2credentialsverificationsend = {
  method: 'post' as const,
  path: '/v2/credentials/verification/send',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_SendCredentialsVerificationMessageRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `0: An unexpected error occurred.
1: Credential value and password are required. Please try again.
3: Verification with received credential type is not supported.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: Could not send a verification message. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `2: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `5: Credentials verification operation is unavailable. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV2identityVerificationlogin = {
  method: 'post' as const,
  path: '/v2/identity-verification/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_Request_IdentityVerificationLoginRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed
1: Invalid login ticket.
2: Invalid result token.
3: Invalid user.
4: Authentication failure.`,
      schema: z.void(),
    },
  ],
};
export const postV2login = {
  method: 'post' as const,
  path: '/v2/login',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_LoginRequest,
  },
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `0: An unexpected error occurred.
3: Username and Password are required. Please try again.
8: Login with received credential type is not supported.`,
      schema: z.void(),
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
15: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `7: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `11: Service unavailable. Please try again.`,
      schema: z.void(),
    },
  ],
};
export const postV2logout = {
  method: 'post' as const,
  path: '/v2/logout',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({}).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const postV2logoutfromallsessionsandreauthenticate = {
  method: 'post' as const,
  path: '/v2/logoutfromallsessionsandreauthenticate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({}).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV2metadata = {
  method: 'get' as const,
  path: '/v2/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Authentication_Api_Models_MetadataResponse,
  errors: [],
};
export const getV2passwordscurrentStatus = {
  method: 'get' as const,
  path: '/v2/passwords/current-status',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ valid: z.boolean() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV2passwordsreset = {
  method: 'get' as const,
  path: '/v2/passwords/reset',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    TargetType: z.union([z.literal(0), z.literal(1)]),
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
      schema: z.void(),
    },
    {
      status: 403,
      description: `11: The password reset ticket is invalid.
16: The ticket is expired.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: Unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV2passwordsreset = {
  method: 'post' as const,
  path: '/v2/passwords/reset',
  baseUrl: 'https://auth.roblox.com',
  description: `This will log the user out of all sessions and re-authenticate.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_PasswordResetModel,
  },
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
11: The password reset ticket is invalid.
12: The user is invalid.
20: The password is invalid.
21: Passwords do not match.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
16: The ticket is expired.
17: The nonce is expired.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: Unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV2passwordsresetsend = {
  method: 'post' as const,
  path: '/v2/passwords/reset/send',
  baseUrl: 'https://auth.roblox.com',
  description: `Phone target must be a csv with 3 values: &quot;internationalPrefixNumber,nationalNumber,countryCode&quot;`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_SendResetPasswordRequest,
  },
  response: Roblox_Authentication_Api_Models_SendResetPasswordResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
9: The target type is invalid.
10: The target is invalid.
12: The user is invalid.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: Captcha is required.
23: Authenticate with Luobu instead.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `2: Too many attempts. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: Unknown error occured.
19: Message could not be sent.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV2passwordsresetverify = {
  method: 'post' as const,
  path: '/v2/passwords/reset/verify',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_PasswordResetVerificationRequest,
  },
  response: Roblox_Authentication_Api_Models_PasswordResetVerificationResponse,
  errors: [
    {
      status: 400,
      description: `3: Request was empty.
9: The target type is invalid.
14: The nonce is invalid.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
13: The code is invalid.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: Unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: Feature temporarily disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const getV2passwordsvalidate = {
  method: 'get' as const,
  path: '/v2/passwords/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    Username: z.string(),
    Password: z.string(),
  },
  response: Roblox_Authentication_Api_Models_PasswordValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: Valid Username and Password are required. Please try again.`,
      schema: z.void(),
    },
  ],
};
export const postV2passwordsvalidate = {
  method: 'post' as const,
  path: '/v2/passwords/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_PasswordValidationModel,
  },
  response: Roblox_Authentication_Api_Models_PasswordValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: Valid Username and Password are required. Please try again.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV2recoverymetadata = {
  method: 'get' as const,
  path: '/v2/recovery/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Authentication_Api_Models_RecoveryMetadataResponse,
  errors: [
    {
      status: 503,
      description: `7: The Roblox WeChat API is currently unavailable.`,
      schema: z.void(),
    },
  ],
};
export const getV2revertaccount = {
  method: 'get' as const,
  path: '/v2/revert/account',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    ticket: z.string(),
  },
  response: Roblox_Authentication_Api_Models_RevertAccountInfoResponse,
  errors: [
    {
      status: 400,
      description: `2: The account revert ticket is not valid`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is disabled`,
      schema: z.void(),
    },
  ],
};
export const postV2revertaccount = {
  method: 'post' as const,
  path: '/v2/revert/account',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_RevertAccountSubmitRequest,
  },
  response: Roblox_Authentication_Api_Models_LoginResponse,
  errors: [
    {
      status: 400,
      description: `2: The account revert ticket is not valid
3: Password is not valid
4: Passwords do not match
5: Password cannot be used
8: The account security ticket is expired.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `0: Unknown
1: This feature is disabled`,
      schema: z.void(),
    },
  ],
};
export const postV2signup = {
  method: 'post' as const,
  path: '/v2/signup',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_SignupRequest,
  },
  response: Roblox_Authentication_Api_Models_SignupResponse,
  errors: [
    {
      status: 400,
      description: `Bad request
16: User agreement ids are null.`,
      schema: z.void(),
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
17: One time Passcode session was not valid`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `3: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `Internal server error
15: Insert acceptances failed.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `Service unavailable`,
      schema: z.void(),
    },
  ],
};
export const getV2twostepverificationmetadata = {
  method: 'get' as const,
  path: '/v2/twostepverification/metadata',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Authentication_Api_Models_TwoStepVerificationMetadataResponse,
  errors: [],
};
export const postV2twostepverificationresend = {
  method: 'post' as const,
  path: '/v2/twostepverification/resend',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_TwoStepVerificationTicketRequest,
  },
  response: Roblox_Authentication_Api_Models_TwoStepVerificationSentResponse,
  errors: [
    {
      status: 400,
      description: `1: User is invalid.
5: Invalid two step verification ticket.
7: The action is unsupported.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `3: Too many attempts. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `4: Account issue. Please contact Support.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `2: The two step verification feature is not enabled at this time.`,
      schema: z.void(),
    },
  ],
};
export const postV2twostepverificationverify = {
  method: 'post' as const,
  path: '/v2/twostepverification/verify',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_TwoStepVerificationVerifyRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: User is invalid.
5: Invalid two step verification ticket.
6: The code is invalid.
7: The action is unsupported.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `3: Too many attempts. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `2: The two step verification feature is not enabled at this time.`,
      schema: z.void(),
    },
  ],
};
export const postV2userpasswordschange = {
  method: 'post' as const,
  path: '/v2/user/passwords/change',
  baseUrl: 'https://auth.roblox.com',
  description: `The current password is needed for verification that the password can be changed.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_PasswordChangeModel,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.Web.Authentication.Passwords.PasswordResponseCodes.InvalidCurrentPassword
            OR
            Roblox.Web.Authentication.Passwords.PasswordResponseCodes.InvalidPassword`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.Web.Authentication.Passwords.PasswordResponseCodes.PinLocked
0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `Roblox.Web.Authentication.Passwords.PasswordResponseCodes.Flooded`,
      schema: z.void(),
    },
  ],
};
export const postV2username = {
  method: 'post' as const,
  path: '/v2/username',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_UsernameChangeRequest,
  },
  response: z.object({}).partial(),
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
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: PIN is locked.
2: A verified email is missing
3: Your password is incorrect.
100: Unknown birthday`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: You don&#x27;t have enough Robux to change your username.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `4: The feature is currently not available. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const getV2usernames = {
  method: 'get' as const,
  path: '/v2/usernames',
  baseUrl: 'https://auth.roblox.com',
  description: `This endpoint can be expanded in the future to include other query parameters such as &quot;startsWith&quot;`,
  requestFormat: 'json' as const,
  parameters: {
    username: z.string().optional(),
  },
  response: Roblox_Authentication_Api_Models_UsernamesResponse,
  errors: [],
};
export const postV2usernamesrecover = {
  method: 'post' as const,
  path: '/v2/usernames/recover',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_RecoverUsernameRequest,
  },
  response: Roblox_Authentication_Api_Models_RecoverUsernameResponse,
  errors: [
    {
      status: 400,
      description: `20: Invalid Email
21: Invalid Phone
23: No Account Found`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
11: Too many attempts. Please wait a bit.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unexpected error occurred.`,
      schema: z.void(),
    },
  ],
};
export const getV2usernamesvalidate = {
  method: 'get' as const,
  path: '/v2/usernames/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    Username: z.string(),
    Birthday: z.string().datetime(),
    Context: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  },
  response: Roblox_Authentication_Api_Models_UsernameValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: A valid username is required.
2: A valid birthday or authenticated user is required.`,
      schema: z.void(),
    },
  ],
};
export const postV2usernamesvalidate = {
  method: 'post' as const,
  path: '/v2/usernames/validate',
  baseUrl: 'https://auth.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Authentication_Api_Models_UsernameValidationRequest,
  },
  response: Roblox_Authentication_Api_Models_UsernameValidationResponse,
  errors: [
    {
      status: 400,
      description: `1: A valid username is required.
2: A valid birthday or authenticated user is required.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
