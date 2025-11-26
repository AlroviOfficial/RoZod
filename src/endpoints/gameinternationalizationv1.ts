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
  mediaAssetIds: z.array(z.number()),
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
    gameId: {
      style: 'simple',
    },
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
    gameId: {
      style: 'simple',
    },
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
 * @summary Sets a game's auto-localization related settings
 * @param body The request body.
 * @param gameId The id of the game.
 */
export const patchAutolocalizationGamesGameidSettings = endpoint({
  method: 'PATCH',
  path: '/v1/autolocalization/games/:gameId/settings',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
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
 * @summary Metadata for AutoLocalization Configuration
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
 * @summary Checks if automatic translation can be enabled for a game.
The user must still have proper permissions for the game to get this info.
 * @param gameId The game id.
 */
export const getAutomaticTranslationGamesGameidFeatureStatus = endpoint({
  method: 'GET',
  path: '/v1/automatic-translation/games/:gameId/feature-status',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Returns the automatic translation quota info for a game.
The user must still have proper permissions for the game to get this info.
 * @param gameId The game id.
 */
export const getAutomaticTranslationGamesGameidQuota = endpoint({
  method: 'GET',
  path: '/v1/automatic-translation/games/:gameId/quota',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Checks if the requested target languages are allowed for automatic translation based on the source language.
If there are no requested target languages, then all allowed target languages for the source language will be returned.
 * @param languageCode The source language.
 * @param targetLanguages Optional target languages. If not passed in, all allowed target languages for the source language will be returned.
 * @param gameId Optional gameId. If not passed in, we'll return the default list of languages allowed.
 */
export const getAutomaticTranslationLanguagesLanguagecodeTargetLanguages = endpoint({
  method: 'GET',
  path: '/v1/automatic-translation/languages/:languageCode/target-languages',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    languageCode: {
      style: 'simple',
    },
    targetLanguages: {
      style: 'form',
      explode: true,
    },
    gameId: {
      style: 'form',
      explode: true,
    },
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
 * @summary Update localized description of a badge
 * @param body The request
 * @param badgeId The badge id
 * @param languageCode The language code of the description to update
 */
export const patchBadgesBadgeidDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/badges/:badgeId/description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    badgeId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get all icons for a badge
 * @param badgeId The id of the badge
 * @param width The width of the icon to request
 * @param height The height of the icon to request
 */
export const getBadgesBadgeidIcons = endpoint({
  method: 'GET',
  path: '/v1/badges/:badgeId/icons',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {
      style: 'simple',
    },
    width: {
      style: 'form',
      explode: true,
    },
    height: {
      style: 'form',
      explode: true,
    },
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
 * @summary Update a badge's icon
 * @param body
 * @param badgeId The id of the badge
 * @param languageCode The language code of this icon to update
 */
export const postBadgesBadgeidIconsLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/badges/:badgeId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    badgeId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Delete a localized icon from a badge
 * @param badgeId The id of the badge
 * @param languageCode The language code of the localized icon to delete
 */
export const deleteBadgesBadgeidIconsLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/badges/:badgeId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
    badgeId: {
      style: 'simple',
    },
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
 * @summary Delete localized name and description of a badge
 * @param badgeId The badge id
 * @param languageCode The language code of the name and description to delete
 */
export const deleteBadgesBadgeidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/badges/:badgeId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    badgeId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized name and description of a badge
 * @param body The request
 * @param badgeId The badge id
 * @param languageCode The language code of the name and description to Update
 */
export const patchBadgesBadgeidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/badges/:badgeId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    badgeId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized name of a badge
 * @param body The request
 * @param badgeId The badge id
 * @param languageCode The language code of the name to update
 */
export const patchBadgesBadgeidNameLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/badges/:badgeId/name/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    badgeId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized description of a developer product
 * @param body The request
 * @param developerProductId The developer product id
 * @param languageCode The language code of the description to update
 */
export const patchDeveloperProductsDeveloperproductidDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/developer-products/:developerProductId/description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    developerProductId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get all icons for a developer product
 * @param developerProductId The id of the developer product
 * @param width The width of the icon to request
 * @param height The height of the icon to request
 */
export const getDeveloperProductsDeveloperproductidIcons = endpoint({
  method: 'GET',
  path: '/v1/developer-products/:developerProductId/icons',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {
      style: 'simple',
    },
    width: {
      style: 'form',
      explode: true,
    },
    height: {
      style: 'form',
      explode: true,
    },
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
 * @summary Update a developer product's icon
 * @param body
 * @param developerProductId The id of the developer product
 * @param languageCode The language code of this icon to update
 */
export const postDeveloperProductsDeveloperproductidIconsLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/developer-products/:developerProductId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    developerProductId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Delete a localized icon from a developer product
 * @param developerProductId The id of the developer product
 * @param languageCode The language code of the localized icon to delete
 */
export const deleteDeveloperProductsDeveloperproductidIconsLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/developer-products/:developerProductId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get all names and descriptions of a developer product
 * @param developerProductId The developer product Id
 */
export const getDeveloperProductsDeveloperproductidNameDescription = endpoint({
  method: 'GET',
  path: '/v1/developer-products/:developerProductId/name-description',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {
      style: 'simple',
    },
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
 * @summary Delete localized name and description of a developer product
 * @param developerProductId The developer product id
 * @param languageCode The language code of the name and description to delete
 */
export const deleteDeveloperProductsDeveloperproductidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/developer-products/:developerProductId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    developerProductId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized name and description of a developer product
 * @param body The request
 * @param developerProductId The developer product id
 * @param languageCode The language code of the name and description to Update
 */
export const patchDeveloperProductsDeveloperproductidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/developer-products/:developerProductId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    developerProductId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized name of a developer product
 * @param body The request
 * @param developerProductId The developer product id
 * @param languageCode The language code of the name to update
 */
export const patchDeveloperProductsDeveloperproductidNameLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/developer-products/:developerProductId/name/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    developerProductId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get all icons for a game
 * @param gameId The id of the game
 * @param width The width of the icon to request
 * @param height The height of the icon to request
 */
export const getGameIconGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/game-icon/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    width: {
      style: 'form',
      explode: true,
    },
    height: {
      style: 'form',
      explode: true,
    },
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
 * @summary Update a game's icon
 * @param body
 * @param gameId The id of the game
 * @param languageCode The language code of this icon to update
 */
export const postGameIconGamesGameidLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/game-icon/games/:gameId/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Delete a localized icon from a game
 * @param gameId The id of the game
 * @param languageCode The language code of the localized icon to delete
 */
export const deleteGameIconGamesGameidLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/game-icon/games/:gameId/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Gets the language translation counts for all languages of a game
 * @param gameId GameID of the game to get translation counts for
 */
export const getGameLocalizationStatusGameidTranslationCounts = endpoint({
  method: 'GET',
  path: '/v1/game-localization-status/:gameId/translation-counts',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Gets the language translation counts for the specified table.
The languages to retrieve must be provided.
 * @param gameIds List of game ids to retrieve translation counts for.
 * @param languageOrLocaleCode The code for the language or locale.
 * @param languageOrLocaleType Indicates whether the languageOrLocaleCode represents a language or locale.
 */
export const getGameLocalizationStatusTranslationCountsForLanguageOrLocale = endpoint({
  method: 'GET',
  path: '/v1/game-localization-status/translation-counts-for-language-or-locale',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameIds: {
      style: 'form',
      explode: true,
    },
    languageOrLocaleCode: {
      style: 'form',
      explode: true,
    },
    languageOrLocaleType: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    gameIds: z.array(z.number()),
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
 * @summary Update localized description of a game pass
 * @param body The request
 * @param gamePassId The game pass id
 * @param languageCode The language code of description to update
 */
export const patchGamePassesGamepassidDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/game-passes/:gamePassId/description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gamePassId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get all icons for a game pass
 * @param gamePassId The game pass id
 * @param width The width of the icon to request
 * @param height The height of the icon to request
 */
export const getGamePassesGamepassidIcons = endpoint({
  method: 'GET',
  path: '/v1/game-passes/:gamePassId/icons',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {
      style: 'simple',
    },
    width: {
      style: 'form',
      explode: true,
    },
    height: {
      style: 'form',
      explode: true,
    },
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
 * @summary Update a game pass's icon
 * @param body
 * @param gamePassId The game pass id
 * @param languageCode The language code of this icon to update
 */
export const postGamePassesGamepassidIconsLanguageCodesLanguagecode = endpoint({
  method: 'POST',
  path: '/v1/game-passes/:gamePassId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gamePassId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Delete a localized icon from a game pass
 * @param gamePassId The game pass id
 * @param languageCode The language code of the localized icon to delete
 */
export const deleteGamePassesGamepassidIconsLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/game-passes/:gamePassId/icons/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get all names and descriptions of a game pass
 * @param gamePassId The game pass Id
 */
export const getGamePassesGamepassidNameDescription = endpoint({
  method: 'GET',
  path: '/v1/game-passes/:gamePassId/name-description',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {
      style: 'simple',
    },
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
 * @summary Delete localized name and description of a game pass
 * @param gamePassId The game pass id
 * @param languageCode The language code of the name and description to delete
 */
export const deleteGamePassesGamepassidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'DELETE',
  path: '/v1/game-passes/:gamePassId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gamePassId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized name and description of a game pass
 * @param body The request
 * @param gamePassId The game pass id
 * @param languageCode The language code of the name/description to update
 */
export const patchGamePassesGamepassidNameDescriptionLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/game-passes/:gamePassId/name-description/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gamePassId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update localized name of a game pass
 * @param body The request
 * @param gamePassId The game pass id
 * @param languageCode The language code of the name to update
 */
export const patchGamePassesGamepassidNameLanguageCodesLanguagecode = endpoint({
  method: 'PATCH',
  path: '/v1/game-passes/:gamePassId/name/language-codes/:languageCode',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gamePassId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Get the localized image ids in all languages for a game.
 * @param gameId The game identifier.
 * @param width The width.
 * @param height The height.
 */
export const getGameThumbnailsGamesGameidImages = endpoint({
  method: 'GET',
  path: '/v1/game-thumbnails/games/:gameId/images',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    width: {
      style: 'form',
      explode: true,
    },
    height: {
      style: 'form',
      explode: true,
    },
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
 * @summary Updates the game thumbnail alt text.
 * @param body The game thumbnail alt text update request.
 * @param gameId The game identifier.
 * @param languageCode The language code.
 */
export const postGameThumbnailsGamesGameidLanguageCodesLanguagecodeAltText = endpoint({
  method: 'POST',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/alt-text',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Uploads the game thumbnail.
 * @param body
 * @param gameId The game identifier.
 * @param languageCode The language code.
 */
export const postGameThumbnailsGamesGameidLanguageCodesLanguagecodeImage = endpoint({
  method: 'POST',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/image',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Deletes the game thumbnail.
 * @param gameId The game identifier.
 * @param languageCode The language code.
 * @param imageId The image identifier.
 */
export const deleteGameThumbnailsGamesGameidLanguageCodesLanguagecodeImagesImageid = endpoint({
  method: 'DELETE',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/images/:imageId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
    imageId: {
      style: 'simple',
    },
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
 * @summary Orders the specified image Ids for the game thumbnails.
 * @param body The request.
 * @param gameId The game identifier.
 * @param languageCode The language code.
 */
export const postGameThumbnailsGamesGameidLanguageCodesLanguagecodeImagesOrder = endpoint({
  method: 'POST',
  path: '/v1/game-thumbnails/games/:gameId/language-codes/:languageCode/images/order',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
    gameId: {
      style: 'simple',
    },
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
 * @summary Gets a game's name and description in all supported languages
 * @param gameId The id of the game
 */
export const getNameDescriptionGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/name-description/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Updates a game's name and/or description in multiple languages.
 * @param body The request body.
 * @param gameId The id of the game.
 */
export const patchNameDescriptionGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/name-description/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
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
 * @summary Gets the history for name or description in a provided language.
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
 * @summary Rollout settings for name/description migration to new page
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
 * @summary Gets the source language of a game
 * @param gameId
 */
export const getSourceLanguageGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/source-language/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Sets the source language of a game
 * @param gameId
 * @param languageCode
 */
export const patchSourceLanguageGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/source-language/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'form',
      explode: true,
    },
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
 * @summary Gets the source language of a game
 * @param gameId
 */
export const getSourceLanguageGamesGameidLanguageWithLocales = endpoint({
  method: 'GET',
  path: '/v1/source-language/games/:gameId/language-with-locales',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Get the supported languages for a game.
 * @param gameId The id of the game.
 */
export const getSupportedLanguagesGamesGameid = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Add or remove supported languages for a game.
 * @param body The languages to add or remove. LanguageCodeType can be "Language" or "Locale".
 * @param gameId The id of the game.
 */
export const patchSupportedLanguagesGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/supported-languages/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
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
 * @summary Get the automatic translation status of supported languages for a game.
 * @param gameId The id of the game.
 */
export const getSupportedLanguagesGamesGameidAutomaticTranslationStatus = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId/automatic-translation-status',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Get the user's in-experience language selector languages for a game.
 * @param gameId The id of the game.
 */
export const getSupportedLanguagesGamesGameidInExperienceLanguageSelection = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId/in-experience-language-selection',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Enable or disable automatic translation for a game and language.
 * @param body Flag to indicate if automatic translation should be enabled or disabled.
 * @param gameId The id of the game.
 * @param languageCode The language to enable or disable for automatic translation.
 */
export const patchSupportedLanguagesGamesGameidLanguagesLanguagecodeAutomaticTranslationStatus = endpoint({
  method: 'PATCH',
  path: '/v1/supported-languages/games/:gameId/languages/:languageCode/automatic-translation-status',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
    languageCode: {
      style: 'simple',
    },
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
 * @summary Update the switch which controls if the UniverseDisplayInformation should be automatically translated.
 * @param body Whether to enable automatic translation for universe display info.
 * @param gameId The game id.
 * @param languageCode The language code.
 */
export const patchSupportedLanguagesGamesGameidLanguagesLanguagecodeUniverseDisplayInfoAutomaticTranslationSettings =
  endpoint({
    method: 'PATCH',
    path: '/v1/supported-languages/games/:gameId/languages/:languageCode/universe-display-info-automatic-translation-settings',
    baseUrl: 'https://gameinternationalization.roblox.com',
    requestFormat: 'json',
    serializationMethod: {
      body: {},
      gameId: {
        style: 'simple',
      },
      languageCode: {
        style: 'simple',
      },
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
 * @summary Get UniverseDisplayInfo automatic translation settings.
 * @param gameId The game id.
 */
export const getSupportedLanguagesGamesGameidUniverseDisplayInfoAutomaticTranslationSettings = endpoint({
  method: 'GET',
  path: '/v1/supported-languages/games/:gameId/universe-display-info-automatic-translation-settings',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
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
 * @summary Rollout settings for supported languages of a game
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
 * @summary Download translation analytics report after the report is ready
 * @param gameId The game's id
 * @param startDateTime The inclusive start dateTime of report in UTC
 * @param endDateTime The exclusive end dateTime of report in UTC
 * @param reportType The report type
 * @param reportSubjectTargetId The translator group id
 */
export const getTranslationAnalyticsGamesGameidDownloadTranslationAnalyticsReport = endpoint({
  method: 'GET',
  path: '/v1/translation-analytics/games/:gameId/download-translation-analytics-report',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    startDateTime: {
      style: 'form',
      explode: true,
    },
    endDateTime: {
      style: 'form',
      explode: true,
    },
    reportType: {
      style: 'form',
      explode: true,
    },
    reportSubjectTargetId: {
      style: 'form',
      explode: true,
    },
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
 * @summary Request translation analytics report to be generated
 * @param body The request body
 * @param gameId The game's id
 */
export const postTranslationAnalyticsGamesGameidRequestTranslationAnalyticsReport = endpoint({
  method: 'POST',
  path: '/v1/translation-analytics/games/:gameId/request-translation-analytics-report',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
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
 * @summary Get metadata related to UI and rollout settings
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
 * @summary Get ui configurations for frontend to use.
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
 * @summary Get user localization settings for universe.
 * @param universeId The universe's ID.
 */
export const getUserLocalizationSettingsUniverseUniverseid = endpoint({
  method: 'GET',
  path: '/v1/user-localization-settings/universe/:universeId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
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
 * @summary Set user localization settings for universe.
 * @param body The request body
 * @param universeId The universe's ID.
 */
export const postUserLocalizationSettingsUniverseUniverseid = endpoint({
  method: 'POST',
  path: '/v1/user-localization-settings/universe/:universeId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
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
