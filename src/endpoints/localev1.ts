import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Locale_Api_CountryRegion = z.object({
  code: z.string(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Locale_Api_CountryRegionListResponse = z.object({
  countryRegionList: z.array(Roblox_Locale_Api_CountryRegion),
});
const Roblox_Locale_Api_Language = z.object({
  id: z.number().int(),
  name: z.string(),
  nativeName: z.string(),
  languageCode: z.string(),
  isRightToLeft: z.boolean(),
});
const Roblox_Locale_Api_SupportedLocale = z.object({
  id: z.number().int(),
  locale: z.string(),
  name: z.string(),
  nativeName: z.string(),
  language: Roblox_Locale_Api_Language,
});
const Roblox_Locale_Api_SupportedLocaleLocus = z.object({
  locale: Roblox_Locale_Api_SupportedLocale,
  isEnabledForFullExperience: z.boolean(),
  isEnabledForSignupAndLogin: z.boolean(),
  isEnabledForInGameUgc: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Locale_Api_SupportedLocaleLocus_ = z.object({
  data: z.array(Roblox_Locale_Api_SupportedLocaleLocus),
});
const Roblox_Locale_Api_SupportedLocalesResponse = z.object({
  supportedLocales: z.array(Roblox_Locale_Api_SupportedLocale),
});
const Roblox_Locale_Api_UserLocaleResponse = z.object({
  supportedLocale: Roblox_Locale_Api_SupportedLocale,
  nativeLanguage: Roblox_Locale_Api_Language,
});
const Roblox_Locale_Api_UserLocalizationLocusLocalesResponse = z.object({
  signupAndLogin: Roblox_Locale_Api_SupportedLocale,
  generalExperience: Roblox_Locale_Api_SupportedLocale,
  ugc: Roblox_Locale_Api_SupportedLocale,
});
const Roblox_Locale_Api_SetSupportedLocaleForUserRequest = z.object({
  supportedLocaleCode: z.string(),
});
const Roblox_Locale_Api_SuccessResponse = z.object({ success: z.boolean() });

/**
 * @api GET https://locale.roblox.com/v1/country-regions
 * @summary Get list of country regions sorted by localized name
 * @param locale
 */
export const getCountryRegions = endpoint({
  method: 'GET',
  path: '/v1/country-regions',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    locale: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    locale: z.string().optional(),
  },
  response: Roblox_Locale_Api_CountryRegionListResponse,
  errors: [
    {
      status: 400,
      description: `2: Invalid supported locale code.`,
    },
    {
      status: 403,
      description: `7: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://locale.roblox.com/v1/locales
 * @summary Get list of Supported locales with user locus information.
 * @param displayValueLocale
 */
export const getLocales = endpoint({
  method: 'GET',
  path: '/v1/locales',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    displayValueLocale: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    displayValueLocale: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Locale_Api_SupportedLocaleLocus_,
  errors: [
    {
      status: 403,
      description: `Feature is turned off temporary`,
    },
    {
      status: 500,
      description: `Internal server error`,
    },
  ],
});
/**
 * @api POST https://locale.roblox.com/v1/locales/set-user-supported-locale
 * @summary Sets user's supported locale.
Null supported locale will clear out user's supported locale (set users' supported locale to null)
 * @param body Supported locale code that needs to be set for user
 */
export const postLocalesSetUserSupportedLocale = endpoint({
  method: 'POST',
  path: '/v1/locales/set-user-supported-locale',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ supportedLocaleCode: z.string() }),
  response: z.object({ success: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized
0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Feature is turned off temporary
0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `Internal server error`,
    },
  ],
});
/**
 * @api GET https://locale.roblox.com/v1/locales/supported-locales
 * @summary Get list of supported locales sorted by the Native Name property.
 */
export const getLocalesSupportedLocales = endpoint({
  method: 'GET',
  path: '/v1/locales/supported-locales',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  response: Roblox_Locale_Api_SupportedLocalesResponse,
  errors: [
    {
      status: 403,
      description: `Feature is turned off temporary`,
    },
    {
      status: 500,
      description: `Internal server error`,
    },
  ],
});
/**
 * @api GET https://locale.roblox.com/v1/locales/supported-locales-for-creators
 * @param displayValueLocale
 */
export const getLocalesSupportedLocalesForCreators = endpoint({
  method: 'GET',
  path: '/v1/locales/supported-locales-for-creators',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    displayValueLocale: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    displayValueLocale: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Locale_Api_SupportedLocaleLocus_,
  errors: [],
});
/**
 * @api GET https://locale.roblox.com/v1/locales/user-locale
 * @summary Gets user locale. If user is absent returns, locale from http request object.
 */
export const getLocalesUserLocale = endpoint({
  method: 'GET',
  path: '/v1/locales/user-locale',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  response: Roblox_Locale_Api_UserLocaleResponse,
  errors: [
    {
      status: 500,
      description: `Internal server error`,
    },
  ],
});
/**
 * @api GET https://locale.roblox.com/v1/locales/user-localization-locus-supported-locales
 * @summary Gets each of a user's localization locus supported locales. A localization locus supported locale is a page (or group of pages) that
have been defined by the International team which need independent locale support.
If the user is null we will attempt to return the locales appropriate for the user's device language.
 */
export const getLocalesUserLocalizationLocusSupportedLocales = endpoint({
  method: 'GET',
  path: '/v1/locales/user-localization-locus-supported-locales',
  baseUrl: 'https://locale.roblox.com',
  requestFormat: 'json',
  response: Roblox_Locale_Api_UserLocalizationLocusLocalesResponse,
  errors: [
    {
      status: 500,
      description: `Internal server error`,
    },
  ],
});
