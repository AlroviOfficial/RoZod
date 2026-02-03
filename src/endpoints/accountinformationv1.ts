import { z } from 'zod';
import { endpoint } from '..';

const Roblox_AccountInformation_Api_Models_BirthdateResponse = z.object({
  birthMonth: z.number().int(),
  birthDay: z.number().int(),
  birthYear: z.number().int(),
});
const Roblox_AccountInformation_Api_Models_DescriptionResponse = z.object({
  description: z.string(),
});
const Roblox_AccountInformation_Api_Models_DescriptionRequest = z.object({
  description: z.string(),
});
const Roblox_AccountInformation_Api_Models_GenderResponse = z.object({
  gender: z.number().int(),
});
const Roblox_AccountInformation_Api_Models_GenderRequest = z.object({
  gender: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_AccountInformation_Api_Models_MetadataResponse = z.object({
  isAllowedNotificationsEndpointDisabled: z.boolean(),
  isAccountSettingsPolicyEnabled: z.boolean(),
  isPhoneNumberEnabled: z.boolean(),
  MaxUserDescriptionLength: z.number().int(),
  isUserDescriptionEnabled: z.boolean(),
  isUserBlockEndpointsUpdated: z.boolean(),
  shouldUsePersonaForIdVerification: z.boolean(),
  shouldDisplaySessionManagement: z.boolean(),
  isPasswordRequiredForAgingDown: z.boolean(),
});
const Roblox_AccountInformation_Api_Models_PhoneResponse = z.object({
  countryCode: z.string(),
  prefix: z.string(),
  phone: z.string(),
  isVerified: z.boolean(),
  verificationCodeLength: z.number().int(),
  canBypassPasswordForPhoneUpdate: z.boolean(),
});
const Roblox_AccountInformation_Api_Models_PhoneRequest = z.object({
  countryCode: z.string(),
  prefix: z.string(),
  phone: z.string(),
  password: z.string(),
  verificationChannel: z.string(),
});
const Roblox_Platform_UserPhoneNumberVerification_Models_PendingVerificationResponse = z.object({
  verificationChannel: z.string(),
  data: z.string(),
});
const Roblox_AccountInformation_Api_Models_PromotionChannelsResponse = z.object({
  promotionChannelsVisibilityPrivacy: z.string(),
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
});
const Roblox_AccountInformation_Api_Models_PromotionChannelsRequest = z.object({
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
  promotionChannelsVisibilityPrivacy: z.string(),
});
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse = z.object({
  userId: z.number().int(),
  name: z.string(),
  code: z.string(),
});
const Roblox_AccountInformation_Api_Models_StarCodeAffiliateRequest = z.object({
  code: z.string(),
});
const Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse = z.object({
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
});
const Roblox_AccountInformation_Api_RobloxBadgeResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string(),
});
const Roblox_AccountInformation_Api_Models_VerifyEmailRequest = z.object({
  ticket: z.string(),
});
const Roblox_AccountInformation_Api_Models_VerifyEmailResponse = z.object({
  verifiedUserHatAssetId: z.number().int(),
});
const Roblox_AccountInformation_Api_Models_EmptyRequest = z.object({});
const Roblox_AccountInformation_Api_Models_VerifyPhoneRequest = z.object({
  code: z.string(),
});

/**
 * @api GET https://accountinformation.roblox.com/v1/birthdate
 */
export const getBirthdate = endpoint({
  method: 'GET',
  path: '/v1/birthdate',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: Roblox_AccountInformation_Api_Models_BirthdateResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/description
 */
export const getDescription = endpoint({
  method: 'GET',
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/description
 * @param body The Roblox.AccountInformation.Api.Models.DescriptionRequest
 */
export const postDescription = endpoint({
  method: 'POST',
  path: '/v1/description',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ description: z.string() }),
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
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
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `3: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/email/verify
 * @param body Roblox.AccountInformation.Api.Models.VerifyEmailRequest
 */
export const postEmailVerify = endpoint({
  method: 'POST',
  path: '/v1/email/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ ticket: z.string() }),
  response: z.object({ verifiedUserHatAssetId: z.number().int() }),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/gender
 */
export const getGender = endpoint({
  method: 'GET',
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: z.object({ gender: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/gender
 * @param body The Roblox.AccountInformation.Api.Models.GenderRequest
 */
export const postGender = endpoint({
  method: 'POST',
  path: '/v1/gender',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ gender: z.string() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: User not found.
6: The gender provided is invalid.`,
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
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/metadata
 */
export const getMetadata = endpoint({
  method: 'GET',
  path: '/v1/metadata',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: Roblox_AccountInformation_Api_Models_MetadataResponse,
  errors: [],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/phone
 */
export const getPhone = endpoint({
  method: 'GET',
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: Roblox_AccountInformation_Api_Models_PhoneResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhone = endpoint({
  method: 'POST',
  path: '/v1/phone',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  response: Roblox_Platform_UserPhoneNumberVerification_Models_PendingVerificationResponse,
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
8: Invalid Phone Number Type`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: Incorrect Password
10: `,
    },
    {
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone/delete
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhoneDelete = endpoint({
  method: 'POST',
  path: '/v1/phone/delete',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_PhoneRequest,
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: Incorrect Password`,
    },
    {
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone/resend
 * @param body Roblox.AccountInformation.Api.Models.PhoneRequest
 */
export const postPhoneResend = endpoint({
  method: 'POST',
  path: '/v1/phone/resend',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({}).optional(),
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
      status: 429,
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/phone/verify
 * @param body Roblox.AccountInformation.Api.Models.VerifyPhoneRequest
 */
export const postPhoneVerify = endpoint({
  method: 'POST',
  path: '/v1/phone/verify',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ code: z.string() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: Invalid Phone Number
3: Phone Number Already Associated
7: Invalid Code`,
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
      description: `6: Flooded`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `1: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/promotion-channels
 * @param alwaysReturnUrls
 * @param filterLink
 * @param onlyShortenTwitter
 */
export const getPromotionChannels = endpoint({
  method: 'GET',
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    alwaysReturnUrls: {},
    filterLink: {},
    onlyShortenTwitter: {},
  },
  parameters: {
    alwaysReturnUrls: z.boolean().optional().default(false),
    filterLink: z.boolean().optional().default(false),
    onlyShortenTwitter: z.boolean().optional().default(true),
  },
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/promotion-channels
 * @param body The Roblox.AccountInformation.Api.Models.PromotionChannelsRequest
 */
export const postPromotionChannels = endpoint({
  method: 'POST',
  path: '/v1/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountInformation_Api_Models_PromotionChannelsRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: The request was empty.
11: The Facebook profile url is invalid.
12: The Twitter handle is invalid.
13: The YouTube url is invalid.
14: The Twitch profile url is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: Only users who are over twelve years of age may edit social network channels.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/star-code-affiliates
 */
export const getStarCodeAffiliates = endpoint({
  method: 'GET',
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://accountinformation.roblox.com/v1/star-code-affiliates
 * @param body Roblox.AccountInformation.Api.Models.StarCodeAffiliateRequest
 */
export const postStarCodeAffiliates = endpoint({
  method: 'POST',
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ code: z.string() }),
  response: Roblox_AccountInformation_Api_Models_StarCodeAffiliateResponse,
  errors: [
    {
      status: 400,
      description: `1: The code was invalid.`,
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
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api DELETE https://accountinformation.roblox.com/v1/star-code-affiliates
 */
export const deleteStarCodeAffiliates = endpoint({
  method: 'DELETE',
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
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
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/users/:userId/promotion-channels
 * @param userId
 * @param alwaysReturnUrls
 * @param filterLink
 */
export const getUsersUseridPromotionChannels = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/promotion-channels',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    alwaysReturnUrls: {},
    filterLink: {},
  },
  parameters: {
    userId: z.number().int(),
    alwaysReturnUrls: z.boolean().optional().default(false),
    filterLink: z.boolean().optional().default(false),
  },
  response: Roblox_AccountInformation_Api_Models_PromotionChannelsByUserIdResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
  ],
});
/**
 * @api GET https://accountinformation.roblox.com/v1/users/:userId/roblox-badges
 * @param userId
 */
export const getUsersUseridRobloxBadges = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/roblox-badges',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.array(Roblox_AccountInformation_Api_RobloxBadgeResponse),
  errors: [],
});
