import { z } from 'zod';

const Roblox_AccountInformation_Api_Models_BirthdateResponse = z
  .object({
    birthMonth: z.number().int(),
    birthDay: z.number().int(),
    birthYear: z.number().int(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_BirthdateRequest = z
  .object({
    birthMonth: z.number().int(),
    birthDay: z.number().int(),
    birthYear: z.number().int(),
    password: z.string(),
  })
  .partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();
const Roblox_AccountInformation_Api_Models_DescriptionResponse = z.object({ description: z.string() }).partial();
const Roblox_AccountInformation_Api_Models_DescriptionRequest = z.object({ description: z.string() }).partial();
const Roblox_AccountInformation_Api_Models_GenderResponse = z.object({ gender: z.number().int() }).partial();
const Roblox_AccountInformation_Api_Models_GenderRequest = z.object({ gender: z.string() }).partial();
const Roblox_AccountInformation_Api_Models_MetadataResponse = z
  .object({
    isAllowedNotificationsEndpointDisabled: z.boolean(),
    isAccountSettingsPolicyEnabled: z.boolean(),
    isPhoneNumberEnabled: z.boolean(),
    MaxUserDescriptionLength: z.number().int(),
    isUserDescriptionEnabled: z.boolean(),
    isUserBlockEndpointsUpdated: z.boolean(),
    isPasswordRequiredForAgingDown: z.boolean(),
    shouldUsePersonaForIdVerification: z.boolean(),
    shouldDisplaySessionManagement: z.boolean(),
    shouldUseSecurityReactUI: z.boolean(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_PhoneResponse = z
  .object({
    countryCode: z.string(),
    prefix: z.string(),
    phone: z.string(),
    isVerified: z.boolean(),
    verificationCodeLength: z.number().int(),
    canBypassPasswordForPhoneUpdate: z.boolean(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_PhoneRequest = z
  .object({
    countryCode: z.string(),
    prefix: z.string(),
    phone: z.string(),
    password: z.string(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_PromotionChannelsResponse = z
  .object({
    promotionChannelsVisibilityPrivacy: z.string(),
    facebook: z.string(),
    twitter: z.string(),
    youtube: z.string(),
    twitch: z.string(),
    guilded: z.string(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_PromotionChannelsRequest = z
  .object({
    facebook: z.string(),
    twitter: z.string(),
    youtube: z.string(),
    twitch: z.string(),
    guilded: z.string(),
    promotionChannelsVisibilityPrivacy: z.string(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse = z
  .object({ userId: z.number().int(), name: z.string(), code: z.string() })
  .partial();
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest = z.object({ code: z.string() }).partial();
const Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse = z
  .object({
    facebook: z.string(),
    twitter: z.string(),
    youtube: z.string(),
    twitch: z.string(),
    guilded: z.string(),
  })
  .partial();
const Roblox_AccountInformation_Api_RobloxBadgeResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    imageUrl: z.string(),
  })
  .partial();
const Roblox_AccountInformation_Api_Models_ConsecutiveLoginDaysResponse = z
  .object({ count: z.number().int() })
  .partial();
const Roblox_AccountInformation_Api_Models_VerifyEmailRequest = z.object({ ticket: z.string() }).partial();
const Roblox_AccountInformation_Api_Models_VerifyEmailResponse = z
  .object({ verifiedUserHatAssetId: z.number().int() })
  .partial();
const Roblox_AccountInformation_Api_Models_EmptyRequest = z.object({}).partial();
const Roblox_AccountInformation_Api_Models_VerifyPhoneRequest = z.object({ code: z.string() }).partial();

const schemas = {
  Roblox_AccountInformation_Api_Models_BirthdateResponse,
  Roblox_AccountInformation_Api_Models_BirthdateRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_AccountInformation_Api_Models_DescriptionResponse,
  Roblox_AccountInformation_Api_Models_DescriptionRequest,
  Roblox_AccountInformation_Api_Models_GenderResponse,
  Roblox_AccountInformation_Api_Models_GenderRequest,
  Roblox_AccountInformation_Api_Models_MetadataResponse,
  Roblox_AccountInformation_Api_Models_PhoneResponse,
  Roblox_AccountInformation_Api_Models_PhoneRequest,
  Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest,
  Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  Roblox_AccountInformation_Api_RobloxBadgeResponse,
  Roblox_AccountInformation_Api_Models_ConsecutiveLoginDaysResponse,
  Roblox_AccountInformation_Api_Models_VerifyEmailRequest,
  Roblox_AccountInformation_Api_Models_VerifyEmailResponse,
  Roblox_AccountInformation_Api_Models_EmptyRequest,
  Roblox_AccountInformation_Api_Models_VerifyPhoneRequest,
};

export const getV1birthdate = {
  method: 'get' as const,
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_BirthdateResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1birthdate = {
  method: 'post' as const,
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_BirthdateRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: User not found.
4: The birthdate provided is invalid.
8: Password is incorrect.`,
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
2: PIN is locked.
5: Invalid birthdate change.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: Invalid birthdate change.`,
      schema: z.void(),
    },
  ],
};
export const getV1description = {
  method: 'get' as const,
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ description: z.string() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1description = {
  method: 'post' as const,
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ description: z.string() }).partial(),
  },
  response: z.object({ description: z.string() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
2: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `3: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1emailverify = {
  method: 'post' as const,
  path: '/v1/email/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ ticket: z.string() }).partial(),
  },
  response: z.object({ verifiedUserHatAssetId: z.number().int() }).partial(),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1gender = {
  method: 'get' as const,
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ gender: z.number().int() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1gender = {
  method: 'post' as const,
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ gender: z.string() }).partial(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: User not found.
6: The gender provided is invalid.`,
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
2: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
export const getV1metadata = {
  method: 'get' as const,
  path: '/v1/metadata',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_MetadataResponse,
  errors: [],
};
export const getV1phone = {
  method: 'get' as const,
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_PhoneResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
export const postV1phone = {
  method: 'post' as const,
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
8: Invalid Phone Number Type`,
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
4: Account Pin Locked
5: Incorrect Password
10: `,
      schema: z.void(),
    },
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1phonedelete = {
  method: 'post' as const,
  path: '/v1/phone/delete',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: Account Pin Locked
5: Incorrect Password`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1phoneresend = {
  method: 'post' as const,
  path: '/v1/phone/resend',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({}).partial(),
  },
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
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1phoneverify = {
  method: 'post' as const,
  path: '/v1/phone/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ code: z.string() }).partial(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
7: Invalid Code`,
      schema: z.void(),
    },
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
    {
      status: 429,
      description: `6: Flooded`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const getV1promotionChannels = {
  method: 'get' as const,
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1promotionChannels = {
  method: 'post' as const,
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `2: The request was empty.
11: The Facebook profile url is invalid.
12: The Twitter handle is invalid.
13: The YouTube url is invalid.
14: The Twitch profile url is invalid.
15: The Guilded profile url is invalid.`,
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
3: PIN is locked.
4: Only users who are over twelve years of age may edit social network channels.`,
      schema: z.void(),
    },
  ],
};
export const deleteV1starCodeAffiliates = {
  method: 'delete' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
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
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
export const getV1starCodeAffiliates = {
  method: 'get' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
export const postV1starCodeAffiliates = {
  method: 'post' as const,
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ code: z.string() }).partial(),
  },
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 400,
      description: `1: The code was invalid.`,
      schema: z.void(),
    },
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
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdpromotionChannels = {
  method: 'get' as const,
  path: '/v1/users/:userId/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdrobloxBadges = {
  method: 'get' as const,
  path: '/v1/users/:userId/roblox-badges',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: z.array(Roblox_AccountInformation_Api_RobloxBadgeResponse),
  errors: [],
};
export const getV1xboxLiveconsecutiveLoginDays = {
  method: 'get' as const,
  path: '/v1/xbox-live/consecutive-login-days',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: The account is not connected to an Xbox Live account`,
      schema: z.void(),
    },
  ],
};
