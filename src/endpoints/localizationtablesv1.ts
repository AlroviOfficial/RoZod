import { z } from 'zod';
import { endpoint } from '..';

const Roblox_LocalizationTables_Api_AutoLocalizationMetadataResponse = z.object({
  isReactVersionEnabledForAutoLocalizationSettings: z.boolean(),
  isTabbedUIEnabledForConfigureLocalizationPage: z.boolean(),
  isAutomaticTranslationToggleUIEnabled: z.boolean(),
  isAutomaticTranslationQuotaUIEnabled: z.boolean(),
});
const Roblox_LocalizationTables_Api_Language = z.object({
  name: z.string(),
  nativeName: z.string(),
  languageCode: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_LocalizationTables_Api_Language_ = z.object({
  data: z.array(Roblox_LocalizationTables_Api_Language),
});
const Roblox_LocalizationTables_Api_EntryOperationLimits = z.object({
  maxContextLength: z.number().int(),
  maxKeyLength: z.number().int(),
  maxSourceLength: z.number().int(),
  maxExampleLength: z.number().int(),
  maxGameLocationPathLength: z.number().int(),
});
const Roblox_LocalizationTables_Api_TableOperationLimits = z.object({
  maxEntriesPerUpdate: z.number().int(),
});
const Roblox_LocalizationTables_Api_GetLimitsResponse = z.object({
  entryOperationLimits: Roblox_LocalizationTables_Api_EntryOperationLimits,
  tableOperationLimits: Roblox_LocalizationTables_Api_TableOperationLimits,
});
const Roblox_LocalizationTables_Api_LocalizationTablesMetadataResponse = z.object({
  isBulkUploadFeatureEnabled: z.boolean(),
  isCsvDownloadEnabled: z.boolean(),
  isAccessToTranslationMetaDataEnabled: z.boolean(),
  isTranslationManagementRedirectionEnabled: z.boolean(),
  isUntranslatedFilterEnabled: z.boolean(),
  isAutomaticTranslationFilterEnabled: z.boolean(),
});
const Roblox_LocalizationTables_Api_GetTableResponse = z.object({
  id: z.string().uuid(),
  name: z.string(),
  ownerType: z.enum(['User', 'Group']),
  ownerId: z.number().int(),
  assetId: z.number().int(),
});
const Roblox_LocalizationTables_Api_EntryIdentifier = z.object({
  key: z.string(),
  context: z.string(),
  source: z.string(),
  entryFormat: z.enum(['Invalid', 'Legacy', 'Icu']),
});
const Roblox_InGameContentTables_Client_GameLocation = z.object({
  path: z.string(),
});
const Roblox_LocalizationTables_Api_EntryMetadata = z.object({
  example: z.string(),
  gameLocations: z.array(Roblox_InGameContentTables_Client_GameLocation),
  entryFormat: z.enum(['Invalid', 'Legacy', 'Icu']),
});
const Roblox_Localizationtables_Localizationtables_V1_ChangeAgent = z.object({
  ChangeAgentType: z.enum(['Invalid', 'User', 'Automation', 'Default']),
  Id: z.string(),
  OptionalIdCase: z.enum(['None', 'Id']),
});
const Roblox_LocalizationTables_Api_PatchTranslation = z.object({
  locale: z.string(),
  translationText: z.string(),
  delete: z.boolean(),
  changeAgent: Roblox_Localizationtables_Localizationtables_V1_ChangeAgent,
  updatedTime: z.string().datetime({ offset: true }),
});
const Roblox_LocalizationTables_Api_PatchEntry = z.object({
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  metadata: Roblox_LocalizationTables_Api_EntryMetadata,
  translations: z.array(Roblox_LocalizationTables_Api_PatchTranslation),
  delete: z.boolean(),
});
const Roblox_LocalizationTables_Api_UpdateTableContentsRequest = z.object({
  name: z.string(),
  entries: z.array(Roblox_LocalizationTables_Api_PatchEntry),
});
const Roblox_LocalizationTables_Api_Error = z.object({
  errorCode: z.number().int(),
  errorMessage: z.string(),
});
const Roblox_LocalizationTables_Api_Translator = z.object({
  id: z.number().int(),
  agentType: z.enum(['User', 'Automation']),
});
const Roblox_LocalizationTables_Api_Translation = z.object({
  locale: z.string(),
  translationText: z.string(),
  translator: Roblox_LocalizationTables_Api_Translator,
  updatedTime: z.string().datetime({ offset: true }),
  feedbackCount: z.number().int(),
});
const Roblox_LocalizationTables_Api_FailedEntry = z.object({
  error: Roblox_LocalizationTables_Api_Error,
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  metadata: Roblox_LocalizationTables_Api_EntryMetadata,
  translations: z.array(Roblox_LocalizationTables_Api_Translation),
  createdTime: z.string().datetime({ offset: true }),
});
const Roblox_LocalizationTables_Api_ModifiedEntry = z.object({
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  translations: z.array(Roblox_LocalizationTables_Api_Translation),
});
const Roblox_LocalizationTables_Api_UpdateTableContentsResponse = z.object({
  failedEntriesAndTranslations: z.array(Roblox_LocalizationTables_Api_FailedEntry),
  modifiedEntriesAndTranslations: z.array(Roblox_LocalizationTables_Api_ModifiedEntry),
});
const Roblox_LocalizationTables_Api_Entry = z.object({
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  metadata: Roblox_LocalizationTables_Api_EntryMetadata,
  translations: z.array(Roblox_LocalizationTables_Api_Translation),
  createdTime: z.string().datetime({ offset: true }),
});
const Roblox_LocalizationTables_Api_GetTableEntriesPagedResponse = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_LocalizationTables_Api_Entry),
});
const Roblox_LocalizationTables_Api_GetTableEntryCountResponse = z.object({
  id: z.string().uuid(),
  entryCount: z.number().int(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_LocalizationTables_Api_RaiseEventForAutoScrapedEntriesCleanupRequest = z.object({
  maxAgeForFlush: z.string(),
});
const Roblox_LocalizationTables_Api_GameAutolocalizationInformationResponse = z.object({
  isAutolocalizationEnabled: z.boolean(),
  isAutomaticEntriesSettingEnabled: z.boolean(),
  isAutomaticEntriesDeletionEnabled: z.boolean(),
  shouldUseLocalizationTable: z.boolean(),
  autoLocalizationTableId: z.string().uuid(),
  sourceLanguage: z.string(),
  assetId: z.number().int(),
});
const Roblox_LocalizationTables_Api_SetAutolocalizationTableForGameRequest = z.object({ tableId: z.string().uuid() });
const Roblox_LocalizationTables_Api_CreateTableRequest = z.object({
  name: z.string(),
  ownerType: z.enum(['User', 'Group']),
  ownerId: z.number().int(),
});
const Roblox_LocalizationTables_Api_CreateTableResponse = z.object({
  id: z.string().uuid(),
  assetId: z.number().int(),
});
const Roblox_LocalizationTables_Api_EntryIdentifierWithTranslation = z.object({
  translation: Roblox_LocalizationTables_Api_Translation,
  key: z.string(),
  context: z.string(),
  source: z.string(),
  entryFormat: z.enum(['Invalid', 'Legacy', 'Icu']),
});
const Roblox_LocalizationTables_Api_GetTableEntriesTranslationFeedbackRequest = z.object({
  sourceLocale: z.string(),
  entries: z.array(Roblox_LocalizationTables_Api_EntryIdentifierWithTranslation),
});
const Roblox_LocalizationTables_Api_EntryTranslationFeedback = z.object({
  identifier: Roblox_LocalizationTables_Api_EntryIdentifierWithTranslation,
  feedbackCount: z.number().int(),
  playerSuggestionText: z.array(z.string()),
  reasons: z.array(z.enum(['None', 'Untranslated', 'Inaccurate', 'SpellingOrGrammar', 'Inappropriate'])),
  robloxSuggestionText: z.string(),
});
const Roblox_LocalizationTables_Api_GetTableEntriesTranslationFeedbackResponse = z.object({
  tableId: z.string().uuid(),
  entries: z.array(Roblox_LocalizationTables_Api_EntryTranslationFeedback),
});
const Roblox_LocalizationTables_Api_CursorEntryIdentifier = z.object({
  cursor: z.string(),
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  count: z.number().int(),
  sortOrder: z.enum(['Asc', 'Desc']),
});
const Roblox_LocalizationTables_Api_GetTableEntriesTranslationHistoryRequest = z.object({
  locale: z.string(),
  entries: z.array(Roblox_LocalizationTables_Api_CursorEntryIdentifier),
});
const Roblox_LocalizationTables_Api_TranslationHistory = z.object({
  translationText: z.string(),
  translator: Roblox_LocalizationTables_Api_Translator,
  created: z.string().datetime({ offset: true }),
});
const Roblox_LocalizationTables_Api_EntryTranslationHistoryPaged = z.object({
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  history: z.array(Roblox_LocalizationTables_Api_TranslationHistory),
  nextCursor: z.string(),
});
const Roblox_LocalizationTables_Api_FailedEntryTranslationHistoryPaged = z.object({
  identifier: Roblox_LocalizationTables_Api_EntryIdentifier,
  count: z.number().int(),
  error: Roblox_LocalizationTables_Api_Error,
});
const Roblox_LocalizationTables_Api_GetTableEntriesTranslationHistoryResponse = z.object({
  tableId: z.string().uuid(),
  locale: z.string(),
  entries: z.array(Roblox_LocalizationTables_Api_EntryTranslationHistoryPaged),
  failedEntries: z.array(Roblox_LocalizationTables_Api_FailedEntryTranslationHistoryPaged),
});
const Roblox_LocalizationTables_Api_MatchedEntry = z.object({
  source: z.string(),
  matchedParamIndex: z.number().int(),
});
const Roblox_LocalizationTables_Api_AutoScrapeEntryMetadata = z.object({
  text: z.string(),
  userId: z.number().int(),
  osPlatform: z.string(),
  sessionId: z.string().uuid(),
  matchedEntry: Roblox_LocalizationTables_Api_MatchedEntry,
});
const Roblox_LocalizationTables_Api_AutoScrapeEntry = z.object({
  context: z.string(),
  source: z.string(),
  screenshot: z.string(),
  meta: Roblox_LocalizationTables_Api_AutoScrapeEntryMetadata,
});
const Roblox_LocalizationTables_Api_IngestContentMetadataPlaceInformation = z.object({
  placeId: z.number().int(),
  placeVersionNumber: z.number().int(),
});
const Roblox_LocalizationTables_Api_IngestContentMetadata = z.object({
  placeInformation: Roblox_LocalizationTables_Api_IngestContentMetadataPlaceInformation,
});
const Roblox_LocalizationTables_Api_IngestAutoScrapedContentForGameRequest = z.object({
  entries: z.array(Roblox_LocalizationTables_Api_AutoScrapeEntry),
  metadata: Roblox_LocalizationTables_Api_IngestContentMetadata,
});
const Roblox_LocalizationTables_Api_SetAutolocalizationSettingsForGameRequest = z.object({
  isAutolocalizationEnabled: z.boolean(),
  isAutomaticEntriesSettingEnabled: z.boolean(),
  isAutomaticEntriesDeletionsEnabled: z.boolean(),
  shouldUseLocalizationTable: z.boolean(),
});

/**
 * @api POST https://localizationtables.roblox.com/v1/auto-localization-table/games/:gameId/assets-generation-request
 * @summary Generates localization asset of a game.
 * @param gameId The game id.
 */
export const postAutoLocalizationTableGamesGameidAssetsGenerationRequest = endpoint({
  method: 'POST',
  path: '/v1/auto-localization-table/games/:gameId/assets-generation-request',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.
14: Invalid game id
29: You do not have permission to generate asset for this table.
32: LocalizationTable is not available for the game.
34: Actor provided is invalid`,
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
      description: `24: Too many attempts.Please try again later.`,
    },
  ],
});
/**
 * @api POST https://localizationtables.roblox.com/v1/auto-localization-table/games/:gameId/auto-scrape-cleanup-request
 * @summary Enqueues an event to flush the auto scraped entries which doesn't have translations.
 * @param body
 * @param gameId The id of the game.
 */
export const postAutoLocalizationTableGamesGameidAutoScrapeCleanupRequest = endpoint({
  method: 'POST',
  path: '/v1/auto-localization-table/games/:gameId/auto-scrape-cleanup-request',
  baseUrl: 'https://localizationtables.roblox.com',
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
  body: z.object({ maxAgeForFlush: z.string() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
31: You do not have permission to flush auto scraped entries asset for this game.
32: LocalizationTable is not available for the game.
34: Actor provided is invalid`,
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
      description: `33: Too many attempts to flush the game.Please try again later.`,
    },
  ],
});
/**
 * @api PATCH https://localizationtables.roblox.com/v1/auto-localization-table/games/:gameId/ingestion
 * @summary Ingests entries for auto localization. Needs to be an authorized user.
 * @param body The request body.
 * @param gameId The game id.
 */
export const patchAutoLocalizationTableGamesGameidIngestion = endpoint({
  method: 'PATCH',
  path: '/v1/auto-localization-table/games/:gameId/ingestion',
  baseUrl: 'https://localizationtables.roblox.com',
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
  body: Roblox_LocalizationTables_Api_IngestAutoScrapedContentForGameRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `10: Maximum entries exceeded. Please keep the number of entries per request below the maximum.
13: Request body can&#x27;t be null
16: Entries can&#x27;t be null or empty
34: Actor provided is invalid`,
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
/**
 * @api POST https://localizationtables.roblox.com/v1/autolocalization/games/:gameId/autolocalizationtable
 * @param gameId
 */
export const postAutolocalizationGamesGameidAutolocalizationtable = endpoint({
  method: 'POST',
  path: '/v1/autolocalization/games/:gameId/autolocalizationtable',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_LocalizationTables_Api_GameAutolocalizationInformationResponse,
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
 * @api PATCH https://localizationtables.roblox.com/v1/autolocalization/games/:gameId/autolocalizationtable
 * @param body
 * @param gameId
 */
export const patchAutolocalizationGamesGameidAutolocalizationtable = endpoint({
  method: 'PATCH',
  path: '/v1/autolocalization/games/:gameId/autolocalizationtable',
  baseUrl: 'https://localizationtables.roblox.com',
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
 * @api PATCH https://localizationtables.roblox.com/v1/autolocalization/games/:gameId/settings
 * @summary Sets a game's auto-localization related settings
 * @param body The request body.
 * @param gameId The id of the game.
 */
export const patchAutolocalizationGamesGameidSettings = endpoint({
  method: 'PATCH',
  path: '/v1/autolocalization/games/:gameId/settings',
  baseUrl: 'https://localizationtables.roblox.com',
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
  body: Roblox_LocalizationTables_Api_SetAutolocalizationSettingsForGameRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `14: Invalid game id
61: IsAutomaticEntriesSettingEnabled can only be enabled if IsAutolocalizationEnabled is also enabled.`,
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
 * @api GET https://localizationtables.roblox.com/v1/autolocalization/metadata
 * @summary Metadata for AutoLocalization Configuration
 */
export const getAutolocalizationMetadata = endpoint({
  method: 'GET',
  path: '/v1/autolocalization/metadata',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  response: Roblox_LocalizationTables_Api_AutoLocalizationMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/available-languages
 * @summary Gets the supported language codes that can be used by localization tables.
 */
export const getLocalizationTableAvailableLanguages = endpoint({
  method: 'GET',
  path: '/v1/localization-table/available-languages',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_LocalizationTables_Api_Language_,
  errors: [],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/limits
 * @summary Get limits for translation table entries operations
 */
export const getLocalizationTableLimits = endpoint({
  method: 'GET',
  path: '/v1/localization-table/limits',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  response: Roblox_LocalizationTables_Api_GetLimitsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/metadata
 * @summary Get metadata for localization UI
 */
export const getLocalizationTableMetadata = endpoint({
  method: 'GET',
  path: '/v1/localization-table/metadata',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  response: Roblox_LocalizationTables_Api_LocalizationTablesMetadataResponse,
  errors: [],
});
/**
 * @api POST https://localizationtables.roblox.com/v1/localization-table/tables
 * @summary Creates a Localization Table with the given data.
Note that this endpoint simply creates a table and does not associate it with any universe, so if intending to use this to create tables usable in experience more setup will be needed to grant those experiences access.
 * @param body 
 */
export const postLocalizationTableTables = endpoint({
  method: 'POST',
  path: '/v1/localization-table/tables',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_LocalizationTables_Api_CreateTableRequest,
  response: Roblox_LocalizationTables_Api_CreateTableResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to get this table.`,
    },
  ],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/tables/:assetId
 * @summary Get table information by the assetId of the table.
 * @param assetId The asset id associated with the table.
 */
export const getLocalizationTableTablesAssetid = endpoint({
  method: 'GET',
  path: '/v1/localization-table/tables/:assetId',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: Roblox_LocalizationTables_Api_GetTableResponse,
  errors: [
    {
      status: 400,
      description: `12: Invalid asset id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You do not have permission to get this table.`,
    },
  ],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/tables/:tableId
 * @summary Get table information by the id of the table.
 * @param tableId
 */
export const getLocalizationTableTablesTableid = endpoint({
  method: 'GET',
  path: '/v1/localization-table/tables/:tableId',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tableId: {
      style: 'simple',
    },
  },
  parameters: {
    tableId: z.string().uuid(),
  },
  response: Roblox_LocalizationTables_Api_GetTableResponse,
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You do not have permission to get this table.`,
    },
  ],
});
/**
 * @api PATCH https://localizationtables.roblox.com/v1/localization-table/tables/:tableId
 * @summary Updates the tables contents based on what is provided.
 * @param body The metadata object is optional.
 * @param tableId The table guid for the table to update.
 * @param gameId The game id.
 */
export const patchLocalizationTableTablesTableid = endpoint({
  method: 'PATCH',
  path: '/v1/localization-table/tables/:tableId',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    tableId: {
      style: 'simple',
    },
    gameId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    tableId: z.string().uuid(),
    gameId: z.number().int().optional(),
  },
  body: Roblox_LocalizationTables_Api_UpdateTableContentsRequest,
  response: Roblox_LocalizationTables_Api_UpdateTableContentsResponse,
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.
4: Table does not exist.
10: Maximum entries exceeded. Please keep the number of entries per request below the maximum.
13: Request body can&#x27;t be null
14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You do not have permission to create this table.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/tables/:tableId/entries
 * @summary Gets a batch of entries for a table.
 * @param tableId
 * @param cursor If null, there are no more entries in the table and you've reached the last page.
 * @param gameId
 * @param entryFormat
 */
export const getLocalizationTableTablesTableidEntries = endpoint({
  method: 'GET',
  path: '/v1/localization-table/tables/:tableId/entries',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tableId: {
      style: 'simple',
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    gameId: {
      style: 'form',
      explode: true,
    },
    entryFormat: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    tableId: z.string().uuid(),
    cursor: z.string().optional(),
    gameId: z.number().int().optional(),
    entryFormat: z.enum(['Invalid', 'Legacy', 'Icu']).optional().default('Legacy'),
  },
  response: Roblox_LocalizationTables_Api_GetTableEntriesPagedResponse,
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.
14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You do not have permission to get this table.`,
    },
  ],
});
/**
 * @api POST https://localizationtables.roblox.com/v1/localization-table/tables/:tableId/entries/translation-feedback
 * @summary Gets the translation feedback for each entry passed in.
 * @param body A request body containing all relevant data for entry translation feedback lookup.
 * @param tableId The entries' tableId.
 * @param gameId The game id.
 */
export const postLocalizationTableTablesTableidEntriesTranslationFeedback = endpoint({
  method: 'POST',
  path: '/v1/localization-table/tables/:tableId/entries/translation-feedback',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    tableId: {
      style: 'simple',
    },
    gameId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    tableId: z.string().uuid(),
    gameId: z.number().int().optional(),
  },
  body: Roblox_LocalizationTables_Api_GetTableEntriesTranslationFeedbackRequest,
  response: Roblox_LocalizationTables_Api_GetTableEntriesTranslationFeedbackResponse,
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.
13: Request body can&#x27;t be null
14: Invalid game id
16: Entries can&#x27;t be null or empty
35: The entries provided are invalid
37: Invalid locale code.
38: Invalid entry identifier.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to get this table.`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api POST https://localizationtables.roblox.com/v1/localization-table/tables/:tableId/entries/translation-history
 * @summary Gets the translation history for each entry passed in.
 * @param body A request body containing all relevant data for entry history lookup.
 * @param tableId The entries' tableId.
 * @param gameId The game id.
 */
export const postLocalizationTableTablesTableidEntriesTranslationHistory = endpoint({
  method: 'POST',
  path: '/v1/localization-table/tables/:tableId/entries/translation-history',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    tableId: {
      style: 'simple',
    },
    gameId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    tableId: z.string().uuid(),
    gameId: z.number().int().optional(),
  },
  body: Roblox_LocalizationTables_Api_GetTableEntriesTranslationHistoryRequest,
  response: Roblox_LocalizationTables_Api_GetTableEntriesTranslationHistoryResponse,
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.
13: Request body can&#x27;t be null
14: Invalid game id
16: Entries can&#x27;t be null or empty
35: The entries provided are invalid
37: Invalid locale code.
38: Invalid entry identifier.
39: Count should be at least 1.
45: Invalid exclusive start id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to get this table.`,
    },
    {
      status: 429,
      description: `24: Too many attempts.Please try again later.`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://localizationtables.roblox.com/v1/localization-table/tables/:tableId/entry-count
 * @summary Gets the number of entries in the specified table
 * @param tableId The table id
 * @param gameId The game id
 * @param entryFormat
 */
export const getLocalizationTableTablesTableidEntryCount = endpoint({
  method: 'GET',
  path: '/v1/localization-table/tables/:tableId/entry-count',
  baseUrl: 'https://localizationtables.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    tableId: {
      style: 'simple',
    },
    gameId: {
      style: 'form',
      explode: true,
    },
    entryFormat: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    tableId: z.string().uuid(),
    gameId: z.number().int().optional(),
    entryFormat: z.enum(['Invalid', 'Legacy', 'Icu']).optional().default('Legacy'),
  },
  response: Roblox_LocalizationTables_Api_GetTableEntryCountResponse,
  errors: [
    {
      status: 400,
      description: `3: Invalid table id.
14: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You do not have permission to get this table.`,
    },
  ],
});
