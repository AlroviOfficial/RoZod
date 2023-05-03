import { z } from "zod";

const Roblox_Translations_Api_TranslationsResponse = z.object({
  url: z.string(),
  locale: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Translations_Api_TranslationsResponse_ =
  z.object({ data: z.array(Roblox_Translations_Api_TranslationsResponse) });

const schemas = {
  Roblox_Translations_Api_TranslationsResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Translations_Api_TranslationsResponse_,
};

/**
 * @api get https://translations.roblox.com/v1/translations
 * @param consumerType
 */
export const getTranslations = {
  method: "get" as const,
  path: "/v1/translations",
  baseUrl: "https://translations.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    consumerType: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    consumerType: z.union([
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
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Translations_Api_TranslationsResponse_,
  errors: [
    {
      status: 400,
      description: `2: Consumer type not supported`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `3: Translations do not exist`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `4: Feature disabled`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://translations.roblox.com/v1/translations/:locale
 * @param locale
 * @param consumerType
 */
export const getTranslationsLocale = {
  method: "get" as const,
  path: "/v1/translations/:locale",
  baseUrl: "https://translations.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    locale: {
      style: "simple",
    },
    consumerType: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    locale: z.string(),
    consumerType: z.union([
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
  },
  response: Roblox_Translations_Api_TranslationsResponse,
  errors: [
    {
      status: 400,
      description: `1: Invalid locale
2: Consumer type not supported`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `3: Translations do not exist`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `4: Feature disabled`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://translations.roblox.com/v1/translations/language-resources
 * @param consumerType
 * @param contentNamespace
 * @param keys
 * @param localeCode
 */
export const getTranslationsLanguageResources = {
  method: "get" as const,
  path: "/v1/translations/language-resources",
  baseUrl: "https://translations.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    consumerType: {
      style: "form",
      explode: true,
    },
    contentNamespace: {
      style: "form",
      explode: true,
    },
    keys: {
      style: "form",
      explode: true,
    },
    localeCode: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    consumerType: z.union([
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
    contentNamespace: z.string(),
    keys: z.array(z.string()),
    localeCode: z.string().optional(),
  },
  response: z.record(z.string()),
  errors: [
    {
      status: 400,
      description: `1: Invalid locale
2: Consumer type not supported`,
      schema: z.void(),
    },
    {
      status: 404,
      description: `3: Translations do not exist`,
      schema: z.void(),
    },
  ],
};
