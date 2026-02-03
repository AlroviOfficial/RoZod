import { z } from 'zod';
import { endpoint } from '..';

const Roblox_GameInternationalization_Api_AutoLocalizationMetadataResponse = z.object({
  isReactVersionEnabledForAutoLocalizationSettings: z.boolean(),
  isTabbedUIEnabledForConfigureLocalizationPage: z.boolean(),
  isAutomaticTranslationToggleUIEnabled: z.boolean(),
  isAutomaticTranslationQuotaUIEnabled: z.boolean(),
});
const Roblox_GameInternationalization_Api_GetAutomaticTranslationFeatureStatusForGameResponse = z.object({
  gameId: z.number().int(),
  isAutomaticTranslationAllowed: z.boolean(),
  isAutomaticTranslationSwitchesUIEnabled: z.boolean(),
});
const Roblox_GameInternationalization_Api_MonthlyQuotaModel = z.object({
  previousRefreshDate: z.string().datetime({ offset: true }),
  nextRefreshDate: z.string().datetime({ offset: true }),
  remaining: z.number().int(),
  capacity: z.number().int(),
});
const Roblox_GameInternationalization_Api_QuotaModel = z.object({
  remaining: z.number().int(),
  capacity: z.number().int(),
});
const Roblox_GameInternationalization_Api_GetAutomaticTranslationQuotaForGameResponse = z.object({
  monthlyQuota: Roblox_GameInternationalization_Api_MonthlyQuotaModel,
  bankQuota: Roblox_GameInternationalization_Api_QuotaModel,
});
const Roblox_GameInternationalization_Api_AutomaticTranslationStatusTargetLanguage = z.object({
  languageCode: z.string(),
  isAutomaticTranslationAllowed: z.boolean(),
});
const Roblox_GameInternationalization_Api_GetAllowedAutomaticTranslationStatusForLanguagesResponse = z.object({
  sourceLanguage: z.string(),
  targetLanguages: z.array(Roblox_GameInternationalization_Api_AutomaticTranslationStatusTargetLanguage),
});
const Roblox_GameInternationalization_Api_GetBadgeIconResponse = z.object({
  imageId: z.string(),
  imageUrl: z.string(),
  state: z.enum(['Approved', 'PendingReview', 'UnAvailable', 'Rejected', 'Error']),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetBadgeIconResponse_ = z.object({
  data: z.array(Roblox_GameInternationalization_Api_GetBadgeIconResponse),
});
const Roblox_GameInternationalization_Api_NameDescription = z.object({
  name: z.string(),
  description: z.string(),
  updateType: z.enum(['Invalid', 'Name', 'Description']),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_NameDescription_ = z.object({
  data: z.array(Roblox_GameInternationalization_Api_NameDescription),
});
const Roblox_GameInternationalization_Api_GetDeveloperProductIconResponse = z.object({
  imageId: z.string(),
  imageUrl: z.string(),
  state: z.enum(['Approved', 'PendingReview', 'UnAvailable', 'Rejected', 'Error']),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetDeveloperProductIconResponse_ =
  z.object({
    data: z.array(Roblox_GameInternationalization_Api_GetDeveloperProductIconResponse),
  });
const Roblox_GameInternationalization_Api_GetGameIconResponse = z.object({
  imageId: z.string(),
  imageUrl: z.string(),
  state: z.enum(['Approved', 'PendingReview', 'UnAvailable', 'Rejected', 'Error']),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetGameIconResponse_ = z.object({
  data: z.array(Roblox_GameInternationalization_Api_GetGameIconResponse),
});
const Roblox_GameInternationalization_Api_TranslationCount = z.object({
  count: z.number().int(),
  translationStatus: z.literal('Approved'),
  translatorType: z.enum(['Automation', 'User']),
});
const Roblox_GameInternationalization_Api_TranslationCountCategoryInfoResponse = z.object({
  category: z.literal('InGameContent'),
  translationCounts: z.array(Roblox_GameInternationalization_Api_TranslationCount),
  totalTranslatableItemCount: z.number().int(),
});
const Roblox_GameInternationalization_Api_TranslationCountLanguageOrLocaleResponse = z.object({
  status: z.enum(['Success', 'LanguageOrLocaleNotSupportedForGame']),
  categories: z.array(Roblox_GameInternationalization_Api_TranslationCountCategoryInfoResponse),
  name: z.string(),
  languageCodeType: z.enum(['Language', 'Locale']),
  languageCode: z.string(),
});
const Roblox_GameInternationalization_Api_GetTranslationCountsForGameResponse = z.object({
  gameId: z.number().int(),
  languagesOrLocales: z.array(Roblox_GameInternationalization_Api_TranslationCountLanguageOrLocaleResponse),
});
const Roblox_GameInternationalization_Api_TranslationCountGameInfoResponse = z.object({
  gameId: z.number().int(),
  status: z.enum([
    'LanguageOrLocaleSupportedForGame',
    'LanguageOrLocaleNotSupportedForGame',
    'LanguageOrLocaleIsSource',
    'InsufficientPermission',
    'GameDoesNotExist',
    'GameDoesNotHaveTable',
    'UnknownError',
  ]),
  categories: z.array(Roblox_GameInternationalization_Api_TranslationCountCategoryInfoResponse),
});
const Roblox_GameInternationalization_Api_GetTranslationCountsForLanguageOrLocaleResponse = z.object({
  languageOrLocaleCode: z.string(),
  languageOrLocaleType: z.enum(['Language', 'Locale']),
  games: z.array(Roblox_GameInternationalization_Api_TranslationCountGameInfoResponse),
});
const Roblox_GameInternationalization_Api_GetGamePassIconResponse = z.object({
  imageId: z.string(),
  imageUrl: z.string(),
  state: z.enum(['Approved', 'PendingReview', 'UnAvailable', 'Rejected', 'Error']),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetGamePassIconResponse_ = z.object(
  {
    data: z.array(Roblox_GameInternationalization_Api_GetGamePassIconResponse),
  },
);
const Roblox_GameInternationalization_Api_MediaAssetResponse = z.object({
  mediaAssetId: z.string(),
  mediaAssetAltText: z.string(),
  state: z.enum(['Approved', 'PendingReview', 'UnAvailable', 'Rejected', 'Error']),
  mediaAssetUrl: z.string(),
});
const Roblox_GameInternationalization_Api_GetGameThumbnailsResponse = z.object({
  languageCode: z.string(),
  mediaAssets: z.array(Roblox_GameInternationalization_Api_MediaAssetResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetGameThumbnailsResponse_ =
  z.object({
    data: z.array(Roblox_GameInternationalization_Api_GetGameThumbnailsResponse),
  });
const Roblox_GameInternationalization_Api_UpdateNameDescriptionsRequest = z.object({
  data: z.array(Roblox_GameInternationalization_Api_NameDescription),
});
const Roblox_GameInternationalization_Api_FailedNameDescription = z.object({
  languageCode: z.string(),
  errorCode: z.number().int(),
});
const Roblox_GameInternationalization_Api_UpdateNameDescriptionsResponse = z.object({
  successOperations: z.array(Roblox_GameInternationalization_Api_NameDescription),
  failedOperations: z.array(Roblox_GameInternationalization_Api_FailedNameDescription),
});
const Roblox_GameInternationalization_Api_Models_Response_GameNameDescriptionMetadataResponse = z.object({
  isNameDescriptionMigrationEnabled: z.boolean(),
});
const Roblox_GameInternationalization_Api_Language = z.object({
  name: z.string(),
  nativeName: z.string(),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Localization_Client_LanguageFamily = z.object({
  id: z.number().int(),
  name: z.string(),
  nativeName: z.string(),
  languageCode: z.string(),
  isRightToLeft: z.boolean(),
});
const Roblox_Localization_Client_SupportedLocale = z.object({
  id: z.number().int(),
  locale: z.enum([
    'en_us',
    'es_es',
    'fr_fr',
    'id_id',
    'it_it',
    'ja_jp',
    'ko_kr',
    'ru_ru',
    'th_th',
    'tr_tr',
    'vi_vn',
    'pt_br',
    'de_de',
    'zh_cn',
    'zh_tw',
    'bg_bg',
    'bn_bd',
    'cs_cz',
    'da_dk',
    'el_gr',
    'et_ee',
    'fi_fi',
    'hi_in',
    'hr_hr',
    'hu_hu',
    'ka_ge',
    'kk_kz',
    'km_kh',
    'lt_lt',
    'lv_lv',
    'ms_my',
    'my_mm',
    'nb_no',
    'nl_nl',
    'fil_ph',
    'pl_pl',
    'ro_ro',
    'uk_ua',
    'si_lk',
    'sk_sk',
    'sl_sl',
    'sq_al',
    'bs_ba',
    'sr_rs',
    'sv_se',
    'zh_cjv',
    'ar_001',
    'en_gb',
    'pt_pt',
    'es_mx',
    'fr_ca',
  ]),
  localeCode: z.string(),
  name: z.string(),
  nativeName: z.string(),
  language: Roblox_Localization_Client_LanguageFamily,
});
const Roblox_GameInternationalization_Api_SourceLanguageWithLocales = z.object({
  languageFamily: Roblox_GameInternationalization_Api_Language,
  defaultLocale: Roblox_Localization_Client_SupportedLocale,
  childLocales: z.array(Roblox_Localization_Client_SupportedLocale),
});
const Roblox_GameInternationalization_Api_LanguageOrLocale = z.object({
  name: z.string(),
  languageCodeType: z.enum(['Language', 'Locale']),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageOrLocale_ = z.object({
  data: z.array(Roblox_GameInternationalization_Api_LanguageOrLocale),
});
const Roblox_GameInternationalization_Api_PatchLanguage = z.object({
  languageCodeType: z.enum(['Language', 'Locale']),
  languageCode: z.string(),
  delete: z.boolean(),
});
const Roblox_GameInternationalization_Api_LanguageOrLocaleSettings = z.object({
  languageCodeType: z.enum(['Language', 'Locale']),
  languageCode: z.string(),
  isAutomaticTranslationEnabled: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageOrLocaleSettings_ =
  z.object({
    data: z.array(Roblox_GameInternationalization_Api_LanguageOrLocaleSettings),
  });
const Roblox_GameInternationalization_Api_UniverseDisplayInfoAutomaticTranslationSettings = z.object({
  languageCode: z.string(),
  isUniverseDisplayInfoAutomaticTranslationEnabled: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_UniverseDisplayInfoAutomaticTranslationSettings_ =
  z.object({
    data: z.array(Roblox_GameInternationalization_Api_UniverseDisplayInfoAutomaticTranslationSettings),
  });
const Roblox_GameInternationalization_Api_SupportedLanguagesMetadataResponse = z.object({
  isFeatureEnabled: z.boolean(),
  areAllLanguagesEnabled: z.boolean(),
  minimumUniverseIdForFeature: z.number().int(),
  isHumanTranslationProgressUIEnabled: z.boolean(),
  isAutomaticTranslationProgressUIEnabled: z.boolean(),
  isSupportedLanguagesChildLocalesUIEnabled: z.boolean(),
});
const Roblox_GameInternationalization_Api_TranslationAnalyticsMetadataResponse = z.object({
  isFeatureEnabledOnUI: z.boolean(),
  reportRequestPollingIntervalSeconds: z.number().int(),
  minimumDateTimeForAnalyticsReport: z.string().datetime({ offset: true }),
});
const Roblox_GameInternationalization_Api_GetUiConfigurationsResponse = z.object({
  isGameProductsEnabled: z.boolean(),
  isBadgeIconEnabled: z.boolean(),
  isGamePassEnabled: z.boolean(),
  isDeveloperProductEnabled: z.boolean(),
});
const Roblox_GameLocalization_Client_UserUniverseLocalizationSettingValue = z.object({
  settingType: z.enum(['LanguageFamily', 'SupportedLocale', 'SourceOrTranslation']),
  settingTargetId: z.number().int(),
});
const Roblox_GameInternationalization_Api_Models_Response_GetUserLocalizationSettingsForUniverseResponse = z.object({
  userUniverseLocalizationSettingValue: Roblox_GameLocalization_Client_UserUniverseLocalizationSettingValue,
});
const Roblox_GameInternationalization_Api_Models_Request_SetUserLocalizationSettingsRequest = z.object({
  settingValue: Roblox_GameLocalization_Client_UserUniverseLocalizationSettingValue,
});
const Roblox_GameInternationalization_Api_Models_Response_SetUserLocalizationSettingsResponse = z.object({});
const Roblox_GameInternationalization_Api_GameAutolocalizationInformationResponse = z.object({
  isAutolocalizationEnabled: z.boolean(),
  shouldUseLocalizationTable: z.boolean(),
  autoLocalizationTableId: z.string().uuid(),
  assetId: z.number().int(),
});
const Roblox_GameInternationalization_Api_SetAutolocalizationTableForGameRequest = z.object({
  tableId: z.string().uuid(),
});
const languagecodes_languageCode_body = z.object({ Files: z.instanceof(File) });
const languagecodes_languageCode_body_1 = z.object({
  Files: z.instanceof(File),
});
const languagecodes_languageCode_body_2 = z.object({
  Files: z.instanceof(File),
});
const languagecodes_languageCode_body_3 = z.object({
  Files: z.instanceof(File),
});
const Roblox_GameInternationalization_Api_UpdateThumbnailAltTextRequest = z.object({
  thumbnailId: z.number().int(),
  altText: z.string(),
});
const languageCode_image_body = z.object({ Files: z.instanceof(File) });
const Roblox_GameInternationalization_Api_Models_Response_UploadImageForGameThumbnailResponse = z.object({
  mediaAssetId: z.string(),
});
const Roblox_GameInternationalization_Api_SortImageIdsRequest = z.object({
  mediaAssetIds: z.array(z.number().int()),
});
const Roblox_GameInternationalization_Api_GetNameDescriptionHistoryV2Request = z.object({
  contentId: z.number().int(),
  contentType: z.enum([
    'UniverseDisplayNames',
    'UniverseDisplayDescriptions',
    'BadgeDisplayName',
    'BadgeDisplayDescription',
    'DeveloperProductDisplayName',
    'DeveloperProductDisplayDescription',
    'GamePassDisplayName',
    'GamePassDisplayDescription',
  ]),
  languageCode: z.string(),
  cursor: z.string(),
  count: z.number().int(),
  sortOrder: z.enum(['Asc', 'Desc']),
});
const Roblox_GameInternationalization_Api_Translator = z.object({
  id: z.number().int(),
  agentType: z.enum(['User', 'Automation']),
});
const Roblox_GameInternationalization_Api_TranslationHistory = z.object({
  translationText: z.string(),
  translator: Roblox_GameInternationalization_Api_Translator,
  created: z.string().datetime({ offset: true }),
});
const Roblox_GameInternationalization_Api_GetNameDescriptionHistoryResponse = z.object({
  history: z.array(Roblox_GameInternationalization_Api_TranslationHistory),
  lastEvaluatedId: z.string(),
});
const Roblox_GameInternationalization_Api_RequestTranslationAnalyticsReportRequest = z.object({
  startDateTime: z.string().datetime({ offset: true }),
  endDateTime: z.string().datetime({ offset: true }),
  reportType: z.enum([
    'GameTranslationStatus',
    'GameTranslationStatusForTranslator',
    'GameTranslationStatusForTranslatorGroup',
    'Test',
  ]),
  reportSubjectTargetId: z.number().int(),
});
const Roblox_GameInternationalization_Api_RequestTranslationAnalyticsReportResponse = z.object({
  reportGenerationStatus: z.enum(['inProgress', 'ready', 'unavailable']),
});
const Roblox_GameInternationalization_Api_SetAutolocalizationSettingsForGameRequest = z.object({
  isAutolocalizationEnabled: z.boolean(),
  shouldUseLocalizationTable: z.boolean(),
});
const Roblox_GameInternationalization_Api_UpdateBadgeDescriptionRequest = z.object({ description: z.string() });
const Roblox_GameInternationalization_Api_UpdateBadgeDescriptionResponse = z.object({ description: z.string() });
const Roblox_GameInternationalization_Api_UpdateBadgeNameDescriptionRequest = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateBadgeNameDescriptionResponse = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateBadgeNameRequest = z.object({
  name: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateBadgeNameResponse = z.object({
  name: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateDeveloperProductDescriptionRequest = z.object({
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateDeveloperProductDescriptionResponse = z.object({
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateDeveloperProductNameDescriptionRequest = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateDeveloperProductNameDescriptionResponse = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateDeveloperProductNameRequest = z.object({ name: z.string() });
const Roblox_GameInternationalization_Api_UpdateDeveloperProductNameResponse = z.object({ name: z.string() });
const Roblox_GameInternationalization_Api_UpdateGamePassDescriptionRequest = z.object({ description: z.string() });
const Roblox_GameInternationalization_Api_UpdateGamePassDescriptionResponse = z.object({ description: z.string() });
const Roblox_GameInternationalization_Api_UpdateGamePassNameDescriptionRequest = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateGamePassNameDescriptionResponse = z.object({
  name: z.string(),
  description: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateGamePassNameRequest = z.object({
  name: z.string(),
});
const Roblox_GameInternationalization_Api_UpdateGamePassNameResponse = z.object({ name: z.string() });
const Roblox_GameInternationalization_Api_LocalizationTableGameAssociation = z.object({
  id: z.string().uuid(),
  dissociate: z.boolean(),
});
const Roblox_GameInternationalization_Api_AssociateLocalizationTablesToGameRequest = z.object({
  tables: z.array(Roblox_GameInternationalization_Api_LocalizationTableGameAssociation),
});
const Roblox_GameInternationalization_Api_AssociateLocalizationTablesToGameResponse = z.object({
  success: z.boolean(),
});
const Roblox_GameInternationalization_Api_EditAutomaticTranslationStatusForGameAndLanguageResponse = z.object({
  gameId: z.number().int(),
  languageCode: z.string(),
  isAutomaticTranslationEnabled: z.boolean(),
});
const Roblox_GameInternationalization_Api_UpdateUniverseDisplayInfoAutomaticTranslationSettingsResponse = z.object({
  gameId: z.number().int(),
  languageCode: z.string(),
  isUniverseDisplayInfoAutomaticTranslationEnabled: z.boolean(),
});

/**
 * @api POST https://gameinternationalization.roblox.com/v1/autolocalization/games/:gameId/autolocalizationtable
 * @param gameId
 */
export const postAutolocalizationGamesGameidAutolocalizationtable = endpoint({
  method: 'POST',
  path: '/v1/autolocalization/games/:gameId/autolocalizationtable',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_GameAutolocalizationInformationResponse,
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
 * @api PATCH https://gameinternationalization.roblox.com/v1/autolocalization/games/:gameId/autolocalizationtable
 * @param body
 * @param gameId
 */
export const patchAutolocalizationGamesGameidAutolocalizationtable = endpoint({
  method: 'PATCH',
  path: '/v1/autolocalization/games/:gameId/autolocalizationtable',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: z.object({ tableId: z.string().uuid() }),
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
 * @api PATCH https://gameinternationalization.roblox.com/v1/autolocalization/games/:gameId/settings
 * @param body The request body.
 * @param gameId
 */
export const patchAutolocalizationGamesGameidSettings = endpoint({
  method: 'PATCH',
  path: '/v1/autolocalization/games/:gameId/settings',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: Roblox_GameInternationalization_Api_SetAutolocalizationSettingsForGameRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/autolocalization/metadata
 */
export const getAutolocalizationMetadata = endpoint({
  method: 'GET',
  path: '/v1/autolocalization/metadata',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  response: Roblox_GameInternationalization_Api_AutoLocalizationMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/automatic-translation/games/:gameId/feature-status
 * @param gameId
 */
export const getAutomaticTranslationGamesGameidFeatureStatus = endpoint({
  method: 'GET',
  path: '/v1/automatic-translation/games/:gameId/feature-status',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_GetAutomaticTranslationFeatureStatusForGameResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/automatic-translation/games/:gameId/quota
 * @param gameId
 */
export const getAutomaticTranslationGamesGameidQuota = endpoint({
  method: 'GET',
  path: '/v1/automatic-translation/games/:gameId/quota',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_GetAutomaticTranslationQuotaForGameResponse,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/automatic-translation/languages/:languageCode/target-languages
 * @param languageCode
 * @param targetLanguages
 * @param gameId
 */
export const getAutomaticTranslationLanguagesLanguagecodeTargetLanguages = endpoint({
  method: 'GET',
  path: '/v1/automatic-translation/languages/:languageCode/target-languages',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    languageCode: {},
    targetLanguages: {},
    gameId: {},
  },
  parameters: {
    languageCode: z.string(),
    targetLanguages: z.array(z.string()).optional(),
    gameId: z.number().int().optional(),
  },
  response: Roblox_GameInternationalization_Api_GetAllowedAutomaticTranslationStatusForLanguagesResponse,
  errors: [
    {
      status: 400,
      description: `73: Maximum languages exceeded. Please keep the number of languages per request below the maximum.
74: A target language cannot be null or whitespace.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/badges/:badgeId/description/language-codes/:languageCode
 * @param body The request
 * @param badgeId
 * @param languageCode
 */
export const patchBadgesBadgeidDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/badges/:badgeId/description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    badgeId: {},
    languageCode: {},
  },
  parameters: {
    badgeId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ description: z.string() }),
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/badges/:badgeId/icons
 * @param badgeId
 * @param width
 * @param height
 */
export const getBadgesBadgeidIcons = endpoint({
  method: 'GET',
  path: '/v1/badges/:badgeId/icons',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {},
    width: {},
    height: {},
  },
  parameters: {
    badgeId: z.number().int(),
    width: z.number().int().optional().default(150),
    height: z.number().int().optional().default(150),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetBadgeIconResponse_,
  errors: [
    {
      status: 400,
      description: `52: Image dimensions are invalid
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/badges/:badgeId/icons/language-codes/:languageCode
 * @param body
 * @param badgeId
 * @param languageCode
 */
export const postBadgesBadgeidIconsLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/badges/:badgeId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    badgeId: {},
    languageCode: {},
  },
  parameters: {
    badgeId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
26: You can&#x27;t update translations for source language
45: File uploaded does not match known image format
46: File not present in request
53: Language is not supported for the game.
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/badges/:badgeId/icons/language-codes/:languageCode
 * @param badgeId
 * @param languageCode
 */
export const deleteBadgesBadgeidIconsLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/badges/:badgeId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {},
    languageCode: {},
  },
  parameters: {
    badgeId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/badges/:badgeId/name-description
 * @param badgeId
 */
export const getBadgesBadgeidNameDescription = endpoint({
  method: 'GET',
  path: '/v1/badges/:badgeId/name-description',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {},
  },
  parameters: {
    badgeId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_NameDescription_,
  errors: [
    {
      status: 400,
      description: `62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/badges/:badgeId/name-description/language-codes/:languageCode
 * @param badgeId
 * @param languageCode
 */
export const deleteBadgesBadgeidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/badges/:badgeId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {},
    languageCode: {},
  },
  parameters: {
    badgeId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/badges/:badgeId/name-description/language-codes/:languageCode
 * @param body The request
 * @param badgeId
 * @param languageCode
 */
export const patchBadgesBadgeidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/badges/:badgeId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    badgeId: {},
    languageCode: {},
  },
  parameters: {
    badgeId: z.number().int(),
    languageCode: z.string(),
  },
  body: Roblox_GameInternationalization_Api_UpdateBadgeNameDescriptionRequest,
  response: Roblox_GameInternationalization_Api_UpdateBadgeNameDescriptionResponse,
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/badges/:badgeId/name/language-codes/:languageCode
 * @param body The request
 * @param badgeId
 * @param languageCode
 */
export const patchBadgesBadgeidNameLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/badges/:badgeId/name/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    badgeId: {},
    languageCode: {},
  },
  parameters: {
    badgeId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ name: z.string() }),
  response: z.object({ name: z.string() }),
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
62: Invalid game badge id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/description/language-codes/:languageCode
 * @param body The request
 * @param developerProductId
 * @param languageCode
 */
export const patchDeveloperProductsDeveloperproductidDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/developer-products/:developerProductId/description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    developerProductId: {},
    languageCode: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ description: z.string() }),
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/icons
 * @param developerProductId
 * @param width
 * @param height
 */
export const getDeveloperProductsDeveloperproductidIcons = endpoint({
  method: 'GET',
  path: '/v1/developer-products/:developerProductId/icons',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {},
    width: {},
    height: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    width: z.number().int().optional().default(150),
    height: z.number().int().optional().default(150),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetDeveloperProductIconResponse_,
  errors: [
    {
      status: 400,
      description: `52: Image dimensions are invalid
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/icons/language-codes/:languageCode
 * @param body
 * @param developerProductId
 * @param languageCode
 */
export const postDeveloperProductsDeveloperproductidIconsLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/developer-products/:developerProductId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    developerProductId: {},
    languageCode: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
26: You can&#x27;t update translations for source language
45: File uploaded does not match known image format
46: File not present in request
53: Language is not supported for the game.
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/icons/language-codes/:languageCode
 * @param developerProductId
 * @param languageCode
 */
export const deleteDeveloperProductsDeveloperproductidIconsLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/developer-products/:developerProductId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {},
    languageCode: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/name-description
 * @param developerProductId
 */
export const getDeveloperProductsDeveloperproductidNameDescription = endpoint({
  method: 'GET',
  path: '/v1/developer-products/:developerProductId/name-description',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {},
  },
  parameters: {
    developerProductId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_NameDescription_,
  errors: [
    {
      status: 400,
      description: `70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/name-description/language-codes/:languageCode
 * @param developerProductId
 * @param languageCode
 */
export const deleteDeveloperProductsDeveloperproductidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/developer-products/:developerProductId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {},
    languageCode: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/name-description/language-codes/:languageCode
 * @param body The request
 * @param developerProductId
 * @param languageCode
 */
export const patchDeveloperProductsDeveloperproductidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/developer-products/:developerProductId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    developerProductId: {},
    languageCode: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    languageCode: z.string(),
  },
  body: Roblox_GameInternationalization_Api_UpdateDeveloperProductNameDescriptionRequest,
  response: Roblox_GameInternationalization_Api_UpdateDeveloperProductNameDescriptionResponse,
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/developer-products/:developerProductId/name/language-codes/:languageCode
 * @param body The request
 * @param developerProductId
 * @param languageCode
 */
export const patchDeveloperProductsDeveloperproductidNameLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/developer-products/:developerProductId/name/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    developerProductId: {},
    languageCode: {},
  },
  parameters: {
    developerProductId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ name: z.string() }),
  response: z.object({ name: z.string() }),
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
70: Invalid developer product id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/game-icon/games/:gameId
 * @param gameId
 * @param width
 * @param height
 */
export const getGameIconGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/game-icon/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
    width: {},
    height: {},
  },
  parameters: {
    gameId: z.number().int(),
    width: z.number().int().optional().default(512),
    height: z.number().int().optional().default(512),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetGameIconResponse_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
52: Image dimensions are invalid`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/game-icon/games/:gameId/language-codes/:languageCode
 * @param body
 * @param gameId
 * @param languageCode
 */
export const postGameIconGamesGameidLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/game-icon/games/:gameId/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
26: You can&#x27;t update translations for source language
45: File uploaded does not match known image format
46: File not present in request
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/game-icon/games/:gameId/language-codes/:languageCode
 * @param gameId
 * @param languageCode
 */
export const deleteGameIconGamesGameidLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/game-icon/games/:gameId/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/game-localization-status/:gameId/translation-counts
 * @param gameId
 */
export const getGameLocalizationStatusGameidTranslationCounts = endpoint({
  method: 'GET',
  path: '/v1/game-localization-status/:gameId/translation-counts',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_GetTranslationCountsForGameResponse,
  errors: [
    {
      status: 400,
      description: `4: Table does not exist.
14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/game-localization-status/translation-counts-for-language-or-locale
 * @param gameIds
 * @param languageOrLocaleCode
 * @param languageOrLocaleType
 */
export const getGameLocalizationStatusTranslationCountsForLanguageOrLocale = endpoint({
  method: 'GET',
  path: '/v1/game-localization-status/translation-counts-for-language-or-locale',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameIds: {},
    languageOrLocaleCode: {},
    languageOrLocaleType: {},
  },
  parameters: {
    gameIds: z.array(z.number().int()),
    languageOrLocaleCode: z.string(),
    languageOrLocaleType: z.enum(['Language', 'Locale']),
  },
  response: Roblox_GameInternationalization_Api_GetTranslationCountsForLanguageOrLocaleResponse,
  errors: [
    {
      status: 400,
      description: `66: Games can&#x27;t be null or empty
67: Maximum games exceeded. Please keep the number of games per request below the maximum.
68: LanguageOrLocaleCode is null or whitespace`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/description/language-codes/:languageCode
 * @param body The request
 * @param gamePassId
 * @param languageCode
 */
export const patchGamePassesGamepassidDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/game-passes/:gamePassId/description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gamePassId: {},
    languageCode: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ description: z.string() }),
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/icons
 * @param gamePassId
 * @param width
 * @param height
 */
export const getGamePassesGamepassidIcons = endpoint({
  method: 'GET',
  path: '/v1/game-passes/:gamePassId/icons',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {},
    width: {},
    height: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    width: z.number().int().optional().default(150),
    height: z.number().int().optional().default(150),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetGamePassIconResponse_,
  errors: [
    {
      status: 400,
      description: `52: Image dimensions are invalid
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/icons/language-codes/:languageCode
 * @param body
 * @param gamePassId
 * @param languageCode
 */
export const postGamePassesGamepassidIconsLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/game-passes/:gamePassId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gamePassId: {},
    languageCode: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
26: You can&#x27;t update translations for source language
45: File uploaded does not match known image format
46: File not present in request
53: Language is not supported for the game.
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/icons/language-codes/:languageCode
 * @param gamePassId
 * @param languageCode
 */
export const deleteGamePassesGamepassidIconsLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/game-passes/:gamePassId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {},
    languageCode: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/name-description
 * @param gamePassId
 */
export const getGamePassesGamepassidNameDescription = endpoint({
  method: 'GET',
  path: '/v1/game-passes/:gamePassId/name-description',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {},
  },
  parameters: {
    gamePassId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_NameDescription_,
  errors: [
    {
      status: 400,
      description: `61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/name-description/language-codes/:languageCode
 * @param gamePassId
 * @param languageCode
 */
export const deleteGamePassesGamepassidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/game-passes/:gamePassId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {},
    languageCode: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/name-description/language-codes/:languageCode
 * @param body The request
 * @param gamePassId
 * @param languageCode
 */
export const patchGamePassesGamepassidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/game-passes/:gamePassId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gamePassId: {},
    languageCode: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    languageCode: z.string(),
  },
  body: Roblox_GameInternationalization_Api_UpdateGamePassNameDescriptionRequest,
  response: Roblox_GameInternationalization_Api_UpdateGamePassNameDescriptionResponse,
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/game-passes/:gamePassId/name/language-codes/:languageCode
 * @param body The request
 * @param gamePassId
 * @param languageCode
 */
export const patchGamePassesGamepassidNameLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/game-passes/:gamePassId/name/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gamePassId: {},
    languageCode: {},
  },
  parameters: {
    gamePassId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ name: z.string() }),
  response: z.object({ name: z.string() }),
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.
61: Invalid game pass id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/game-thumbnails/games/:gameId/images
 * @param gameId
 * @param width
 * @param height
 */
export const getGameThumbnailsGamesGameidImages = endpoint({
  method: 'GET',
  path: '/v1/game-thumbnails/games/:gameId/images',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
    width: {},
    height: {},
  },
  parameters: {
    gameId: z.number().int(),
    width: z.number().int().optional().default(768),
    height: z.number().int().optional().default(432),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_GetGameThumbnailsResponse_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
52: Image dimensions are invalid`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/alt-text
 * @param body The game thumbnail alt text update request.
 * @param gameId
 * @param languageCode
 */
export const postGameThumbnailsGamesGameidLanguageCodesLanguagecodeAltText = endpoint({
  method: 'POST',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/alt-text',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  body: Roblox_GameInternationalization_Api_UpdateThumbnailAltTextRequest,
  response: z.string(),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
26: You can&#x27;t update translations for source language
45: File uploaded does not match known image format
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.
88: Failed to filter text`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/image
 * @param body
 * @param gameId
 * @param languageCode
 */
export const postGameThumbnailsGamesGameidLanguageCodesLanguagecodeImage = endpoint({
  method: 'POST',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/image',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({ mediaAssetId: z.string() }),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api DELETE https://gameinternationalization.roblox.com/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/images/:imageId
 * @param gameId
 * @param languageCode
 * @param imageId
 */
export const deleteGameThumbnailsGamesGameidLanguageCodesLanguagecodeImagesImageid = endpoint({
  method: 'DELETE',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/images/:imageId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
    languageCode: {},
    imageId: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
    imageId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
23: You can&#x27;t delete translations for source language
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/images/order
 * @param body The request.
 * @param gameId
 * @param languageCode
 */
export const postGameThumbnailsGamesGameidLanguageCodesLanguagecodeImagesOrder = endpoint({
  method: 'POST',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/images/order',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  body: Roblox_GameInternationalization_Api_SortImageIdsRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/localizationtable/gametables/:gameId
 * @param body
 * @param gameId
 */
export const patchLocalizationtableGametablesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/localizationtable/gametables/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: Roblox_GameInternationalization_Api_AssociateLocalizationTablesToGameRequest,
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
 * @api GET https://gameinternationalization.roblox.com/v1/name-description/games/:gameId
 * @param gameId
 */
export const getNameDescriptionGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/name-description/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_NameDescription_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/name-description/games/:gameId
 * @param body The request body.
 * @param gameId
 */
export const patchNameDescriptionGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/name-description/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: Roblox_GameInternationalization_Api_UpdateNameDescriptionsRequest,
  response: Roblox_GameInternationalization_Api_UpdateNameDescriptionsResponse,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
19: New name is null or whitespaces or new name/description is too long
20: New name or description is moderated
22: Invalid language code
23: You can&#x27;t delete translations for source language
26: You can&#x27;t update translations for source language
53: Language is not supported for the game.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/name-description/games/translation-history
 * @param body The request.
 */
export const postNameDescriptionGamesTranslationHistory = endpoint({
  method: 'POST',
  path: '/v1/name-description/games/translation-history',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameInternationalization_Api_GetNameDescriptionHistoryV2Request,
  response: Roblox_GameInternationalization_Api_GetNameDescriptionHistoryResponse,
  errors: [
    {
      status: 400,
      description: `13: Request body can&#x27;t be null
14: Invalid game id
18: You do not have permission to manage this game
22: Invalid language code
39: Count should be at least 1 and less than 50.
53: Language is not supported for the game.
54: No history available for source data
55: Invalid exclusive start Id`,
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
      description: `0: An unknown error occurred.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/name-description/metadata
 */
export const getNameDescriptionMetadata = endpoint({
  method: 'GET',
  path: '/v1/name-description/metadata',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  response: z.object({ isNameDescriptionMigrationEnabled: z.boolean() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/source-language/games/:gameId
 * @param gameId
 */
export const getSourceLanguageGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/source-language/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_Language,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/source-language/games/:gameId
 * @param gameId
 * @param languageCode
 */
export const patchSourceLanguageGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/source-language/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `85: Failed to disable automatic translation status for languages`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/source-language/games/:gameId/language-with-locales
 * @param gameId
 */
export const getSourceLanguageGamesGameidLanguageWithLocales = endpoint({
  method: 'GET',
  path: '/v1/source-language/games/:gameId/language-with-locales',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_SourceLanguageWithLocales,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId
 * @param gameId
 */
export const getSupportedLanguagesGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageOrLocale_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId
 * @param body The languages to add or remove. LanguageCodeType can be "Language" or "Locale".
 * @param gameId
 */
export const patchSupportedLanguagesGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/supported-languages/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: z.array(Roblox_GameInternationalization_Api_PatchLanguage),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
49: Duplicate language codes are not allowed.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId/automatic-translation-status
 * @param gameId
 */
export const getSupportedLanguagesGamesGameidAutomaticTranslationStatus = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId/automatic-translation-status',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageOrLocaleSettings_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId/in-experience-language-selection
 * @param gameId
 */
export const getSupportedLanguagesGamesGameidInExperienceLanguageSelection = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId/in-experience-language-selection',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageOrLocale_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId/languages/:languageCode/automatic-translation-status
 * @param body Flag to indicate if automatic translation should be enabled or disabled.
 * @param gameId
 * @param languageCode
 */
export const patchSupportedLanguagesGamesGameidLanguagesLanguagecodeAutomaticTranslationStatus = endpoint({
  method: 'PATCH',
  path: '/v1/supported-languages/games/:gameId/languages/:languageCode/automatic-translation-status',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
    languageCode: {},
  },
  parameters: {
    gameId: z.number().int(),
    languageCode: z.string(),
  },
  body: z.boolean(),
  response: Roblox_GameInternationalization_Api_EditAutomaticTranslationStatusForGameAndLanguageResponse,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code
53: Language is not supported for the game.
72: Automatic translation cannot be enabled for game.
75: Automatic translation cannot be enabled for language.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api PATCH https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId/languages/:languageCode/universe-display-info-automatic-translation-settings
 * @param body Whether to enable automatic translation for universe display info.
 * @param gameId
 * @param languageCode
 */
export const patchSupportedLanguagesGamesGameidLanguagesLanguagecodeUniverseDisplayInfoAutomaticTranslationSettings =
  endpoint({
    method: 'PATCH',
    path: '/v1/supported-languages/games/:gameId/languages/:languageCode/universe-display-info-automatic-translation-settings',
    baseUrl: 'https://gameinternationalization.roblox.com',
    requestFormat: 'json',
    serializationMethod: {
      body: {},
      gameId: {},
      languageCode: {},
    },
    parameters: {
      gameId: z.number().int(),
      languageCode: z.string(),
    },
    body: z.boolean(),
    response: Roblox_GameInternationalization_Api_UpdateUniverseDisplayInfoAutomaticTranslationSettingsResponse,
    errors: [
      {
        status: 400,
        description: `14: Invalid game id
72: Automatic translation cannot be enabled for game.`,
      },
      {
        status: 401,
        description: `0: Authorization has been denied for this request.`,
      },
      {
        status: 403,
        description: `0: Token Validation Failed
18: You do not have permission to manage this game`,
      },
      {
        status: 500,
        description: `77: Content localization set settings return error code invalid
79: Invalid content instance settings
80: Invalid quota settings
81: Invalid change agent
82: Failed to update UniverseDisplayInformation content instance auto translation settings`,
      },
    ],
  });
/**
 * @api GET https://gameinternationalization.roblox.com/v1/supported-languages/games/:gameId/universe-display-info-automatic-translation-settings
 * @param gameId
 */
export const getSupportedLanguagesGamesGameidUniverseDisplayInfoAutomaticTranslationSettings = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId/universe-display-info-automatic-translation-settings',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_UniverseDisplayInfoAutomaticTranslationSettings_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `18: You do not have permission to manage this game`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred.
22: Invalid language code
83: Failed to get UniverseDisplayInformation content instance auto translation settings
84: Count of language code is larger than max batch get size`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/supported-languages/metadata
 */
export const getSupportedLanguagesMetadata = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/metadata',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  response: Roblox_GameInternationalization_Api_SupportedLanguagesMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/translation-analytics/games/:gameId/download-translation-analytics-report
 * @param gameId
 * @param startDateTime
 * @param endDateTime
 * @param reportType
 * @param reportSubjectTargetId
 */
export const getTranslationAnalyticsGamesGameidDownloadTranslationAnalyticsReport = endpoint({
  method: 'GET',
  path: '/v1/translation-analytics/games/:gameId/download-translation-analytics-report',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {},
    startDateTime: {},
    endDateTime: {},
    reportType: {},
    reportSubjectTargetId: {},
  },
  parameters: {
    gameId: z.number().int(),
    startDateTime: z.string().datetime({ offset: true }),
    endDateTime: z.string().datetime({ offset: true }),
    reportType: z.enum([
      'GameTranslationStatus',
      'GameTranslationStatusForTranslator',
      'GameTranslationStatusForTranslatorGroup',
      'Test',
    ]),
    reportSubjectTargetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
56: You need to provide a valid translator group id to get report.
58: Start datetime or end datetime is invlaid.
59: Report type is invalid`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `57: You do not have permission to request translation analytics report.`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/translation-analytics/games/:gameId/request-translation-analytics-report
 * @param body The request body
 * @param gameId
 */
export const postTranslationAnalyticsGamesGameidRequestTranslationAnalyticsReport = endpoint({
  method: 'POST',
  path: '/v1/translation-analytics/games/:gameId/request-translation-analytics-report',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {},
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: Roblox_GameInternationalization_Api_RequestTranslationAnalyticsReportRequest,
  response: Roblox_GameInternationalization_Api_RequestTranslationAnalyticsReportResponse,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
56: You need to provide a valid translator group id to get report.
58: Start datetime or end datetime is invlaid.
59: Report type is invalid`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
57: You do not have permission to request translation analytics report.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/translation-analytics/metadata
 */
export const getTranslationAnalyticsMetadata = endpoint({
  method: 'GET',
  path: '/v1/translation-analytics/metadata',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  response: Roblox_GameInternationalization_Api_TranslationAnalyticsMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/ui-configurations
 */
export const getUiConfigurations = endpoint({
  method: 'GET',
  path: '/v1/ui-configurations',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  response: Roblox_GameInternationalization_Api_GetUiConfigurationsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://gameinternationalization.roblox.com/v1/user-localization-settings/universe/:universeId
 * @param universeId
 */
export const getUserLocalizationSettingsUniverseUniverseid = endpoint({
  method: 'GET',
  path: '/v1/user-localization-settings/universe/:universeId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_GameInternationalization_Api_Models_Response_GetUserLocalizationSettingsForUniverseResponse,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
21: The language is not supported
22: Invalid language code`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://gameinternationalization.roblox.com/v1/user-localization-settings/universe/:universeId
 * @param body The request body
 * @param universeId
 */
export const postUserLocalizationSettingsUniverseUniverseid = endpoint({
  method: 'POST',
  path: '/v1/user-localization-settings/universe/:universeId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: Roblox_GameInternationalization_Api_Models_Request_SetUserLocalizationSettingsRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
22: Invalid language code`,
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
      description: `17: Feature is disabled`,
    },
  ],
});
