import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Assets_IAssetItemError = z.object({
  Code: z.number().int(),
  Message: z.string(),
  CustomErrorCode: z.union([
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
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
  ]),
});
const Roblox_Web_Assets_AssetContentRepresentationSpecifier = z.object({
  format: z.string(),
  majorVersion: z.string(),
  fidelity: z.string(),
});
const Roblox_AssetDelivery_Api_AssetMetadata = z.object({
  metadataType: z.literal(1),
  value: z.string(),
});
const Roblox_Web_Assets_AssetResponseItemV1 = z.object({
  location: z.string(),
  errors: z.array(Roblox_Web_Assets_IAssetItemError),
  requestId: z.string(),
  isArchived: z.boolean(),
  assetTypeId: z.number().int(),
  contentRepresentationSpecifier: Roblox_Web_Assets_AssetContentRepresentationSpecifier,
  assetMetadatas: z.array(Roblox_AssetDelivery_Api_AssetMetadata),
  isRecordable: z.boolean(),
});
const Roblox_Web_Assets_BatchAssetRequestItem = z.object({
  assetName: z.string(),
  assetType: z.string(),
  clientInsert: z.boolean(),
  placeId: z.number().int(),
  requestId: z.string(),
  scriptInsert: z.boolean(),
  serverPlaceId: z.number().int(),
  universeId: z.number().int(),
  accept: z.string(),
  encoding: z.string(),
  hash: z.string(),
  userAssetId: z.number().int(),
  assetId: z.number().int(),
  version: z.number().int(),
  assetVersionId: z.number().int(),
  modulePlaceId: z.number().int(),
  assetFormat: z.string(),
  'roblox-assetFormat': z.string(),
  assetResolutionMode: z.string(),
  accessContext: z.string(),
  contentRepresentationPriorityList: z.string(),
  doNotFallbackToBaselineRepresentation: z.boolean(),
});

/**
 * @api GET https://assetdelivery.roblox.com/v1/alias/:alias
 * @summary Retrieves an asset by its alias (universeID/name)
 * @param alias The alias of the asset to retrieve.
 * @param Accept-Encoding
 * @param Roblox-Place-Id
 * @param AssetType
 * @param Accept
 * @param AssetFormat
 * @param Roblox-AssetFormat
 * @param skipSigningScripts
 * @param clientInsert
 * @param scriptinsert
 * @param modulePlaceId
 * @param serverplaceid
 * @param expectedAssetType
 * @param accessContext
 */
export const getAliasAlias = endpoint({
  method: 'GET',
  path: '/v1/alias/:alias',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    alias: {
      style: 'simple',
    },
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
    accessContext: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    alias: z.string().regex(/^[0-9]+\/.+/),
    'Accept-Encoding': z.string(),
    'Roblox-Place-Id': z.number().int(),
    AssetType: z.string(),
    Accept: z.string(),
    AssetFormat: z.string(),
    'Roblox-AssetFormat': z.string(),
    skipSigningScripts: z.boolean().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.number().int().optional(),
    expectedAssetType: z.string().optional(),
    accessContext: z.string().optional(),
  },
  response: Roblox_Web_Assets_AssetResponseItemV1,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v1/asset
 * @param Accept-Encoding
 * @param Roblox-Place-Id
 * @param AssetType
 * @param Accept
 * @param AssetFormat
 * @param Roblox-AssetFormat
 * @param id
 * @param userAssetId
 * @param assetVersionId
 * @param version
 * @param universeId
 * @param clientInsert
 * @param scriptinsert
 * @param modulePlaceId
 * @param serverplaceid
 * @param assetName
 * @param hash
 * @param marAssetHash
 * @param marCheckSum
 * @param expectedAssetType
 * @param skipSigningScripts
 * @param permissionContext
 * @param doNotFallbackToBaselineRepresentation
 * @param contentRepresentationPriorityList
 * @param assetResolutionMode
 * @param accessContext
 */
export const getAsset = endpoint({
  method: 'GET',
  path: '/v1/asset',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    id: {
      style: 'form',
      explode: true,
    },
    userAssetId: {
      style: 'form',
      explode: true,
    },
    assetVersionId: {
      style: 'form',
      explode: true,
    },
    version: {
      style: 'form',
      explode: true,
    },
    universeId: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    assetName: {
      style: 'form',
      explode: true,
    },
    hash: {
      style: 'form',
      explode: true,
    },
    marAssetHash: {
      style: 'form',
      explode: true,
    },
    marCheckSum: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    permissionContext: {
      style: 'form',
      explode: true,
    },
    doNotFallbackToBaselineRepresentation: {
      style: 'form',
      explode: true,
    },
    contentRepresentationPriorityList: {
      style: 'form',
      explode: true,
    },
    assetResolutionMode: {
      style: 'form',
      explode: true,
    },
    accessContext: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    'Accept-Encoding': z.string(),
    'Roblox-Place-Id': z.number().int(),
    AssetType: z.string(),
    Accept: z.string(),
    AssetFormat: z.string(),
    'Roblox-AssetFormat': z.string(),
    id: z.number().int().optional(),
    userAssetId: z.number().int().optional(),
    assetVersionId: z.number().int().optional(),
    version: z.number().int().optional(),
    universeId: z.number().int().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.string().optional(),
    assetName: z.string().optional(),
    hash: z.string().optional(),
    marAssetHash: z.string().optional(),
    marCheckSum: z.string().optional(),
    expectedAssetType: z.string().optional(),
    skipSigningScripts: z.boolean().optional(),
    permissionContext: z.string().optional(),
    doNotFallbackToBaselineRepresentation: z.boolean().optional(),
    contentRepresentationPriorityList: z.string().optional(),
    assetResolutionMode: z.string().optional(),
    accessContext: z.string().optional(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v1/assetId/:assetId
 * @summary Retrieves an asset by its ID
 * @param assetId The ID of the asset to retrieve.
 * @param Accept-Encoding
 * @param Roblox-Place-Id
 * @param AssetType
 * @param Accept
 * @param AssetFormat
 * @param Roblox-AssetFormat
 * @param skipSigningScripts
 * @param clientInsert
 * @param scriptinsert
 * @param modulePlaceId
 * @param serverplaceid
 * @param expectedAssetType
 * @param doNotFallbackToBaselineRepresentation
 * @param contentRepresentationPriorityList
 * @param accessContext
 */
export const getAssetidAssetid = endpoint({
  method: 'GET',
  path: '/v1/assetId/:assetId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
    doNotFallbackToBaselineRepresentation: {
      style: 'form',
      explode: true,
    },
    contentRepresentationPriorityList: {
      style: 'form',
      explode: true,
    },
    accessContext: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
    'Accept-Encoding': z.string(),
    'Roblox-Place-Id': z.number().int(),
    AssetType: z.string(),
    Accept: z.string(),
    AssetFormat: z.string(),
    'Roblox-AssetFormat': z.string(),
    skipSigningScripts: z.boolean().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.number().int().optional(),
    expectedAssetType: z.string().optional(),
    doNotFallbackToBaselineRepresentation: z.boolean().optional(),
    contentRepresentationPriorityList: z.string().optional(),
    accessContext: z.string().optional(),
  },
  response: Roblox_Web_Assets_AssetResponseItemV1,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v1/assetId/:assetId/version/:versionNumber
 * @summary Retrieves an asset by its ID and version number.
 * @param assetId The ID of the asset to retrieve.
 * @param versionNumber The version of the asset to retrieve.
 * @param Accept-Encoding
 * @param Roblox-Place-Id
 * @param AssetType
 * @param Accept
 * @param AssetFormat
 * @param Roblox-AssetFormat
 * @param skipSigningScripts
 * @param clientInsert
 * @param scriptinsert
 * @param modulePlaceId
 * @param serverplaceid
 * @param expectedAssetType
 * @param doNotFallbackToBaselineRepresentation
 * @param contentRepresentationPriorityList
 * @param accessContext
 */
export const getAssetidAssetidVersionVersionnumber = endpoint({
  method: 'GET',
  path: '/v1/assetId/:assetId/version/:versionNumber',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
    versionNumber: {
      style: 'simple',
    },
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
    doNotFallbackToBaselineRepresentation: {
      style: 'form',
      explode: true,
    },
    contentRepresentationPriorityList: {
      style: 'form',
      explode: true,
    },
    accessContext: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
    versionNumber: z.number().int(),
    'Accept-Encoding': z.string(),
    'Roblox-Place-Id': z.number().int(),
    AssetType: z.string(),
    Accept: z.string(),
    AssetFormat: z.string(),
    'Roblox-AssetFormat': z.string(),
    skipSigningScripts: z.boolean().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.number().int().optional(),
    expectedAssetType: z.string().optional(),
    doNotFallbackToBaselineRepresentation: z.boolean().optional(),
    contentRepresentationPriorityList: z.string().optional(),
    accessContext: z.string().optional(),
  },
  response: Roblox_Web_Assets_AssetResponseItemV1,
  errors: [],
});
/**
 * @api POST https://assetdelivery.roblox.com/v1/assets/batch
 * @param body
 * @param Roblox-Place-Id
 * @param Accept
 */
export const postAssetsBatch = endpoint({
  method: 'POST',
  path: '/v1/assets/batch',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    'Roblox-Place-Id': {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
  },
  parameters: {
    'Roblox-Place-Id': z.number().int(),
    Accept: z.string(),
  },
  body: z.array(Roblox_Web_Assets_BatchAssetRequestItem),
  response: z.array(Roblox_Web_Assets_AssetResponseItemV1),
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v1/marAssetHash/:marAssetHash/marCheckSum/:marCheckSum
 * @summary Retrieves an asset by its mar (moderation agnostic) hash and mar (moderation agnostic) checksum.
 * @param marAssetHash The mar (moderation agnostic) hash of the asset to retrieve.
 * @param marCheckSum The mar (moderation agnostic) checksum of the asset to retrieve.
 * @param Accept-Encoding
 * @param Roblox-Place-Id
 * @param AssetType
 * @param Accept
 * @param AssetFormat
 * @param Roblox-AssetFormat
 * @param skipSigningScripts
 * @param clientInsert
 * @param scriptinsert
 * @param modulePlaceId
 * @param serverplaceid
 * @param expectedAssetType
 */
export const getMarassethashMarassethashMarchecksumMarchecksum = endpoint({
  method: 'GET',
  path: '/v1/marAssetHash/:marAssetHash/marCheckSum/:marCheckSum',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    marAssetHash: {
      style: 'simple',
    },
    marCheckSum: {
      style: 'simple',
    },
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    marAssetHash: z.string(),
    marCheckSum: z.string(),
    'Accept-Encoding': z.string(),
    'Roblox-Place-Id': z.number().int(),
    AssetType: z.string(),
    Accept: z.string(),
    AssetFormat: z.string(),
    'Roblox-AssetFormat': z.string(),
    skipSigningScripts: z.boolean().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.number().int().optional(),
    expectedAssetType: z.string().optional(),
  },
  response: Roblox_Web_Assets_AssetResponseItemV1,
  errors: [
    {
      status: 400,
      description: `2: invalid server request
3: Encoding cannot be empty`,
    },
    {
      status: 404,
      description: `5: Asset hash cannot be empty`,
    },
  ],
});
/**
 * @api GET https://assetdelivery.roblox.com/v1/openCloud/assetId/:assetId
 * @summary Retrieves an asset by its ID with OpenCloud auth.
 * @param assetId The ID of the asset to retrieve.
 * @param Accept-Encoding The Accept-Encoding header value specifying compression formats (e.g., "gzip, deflate"). Defaults to "gzip, deflate" if not provided.
 * @param Roblox-Place-Id The Roblox-Place-Id header value identifying the place making the request.
 * @param AssetType The AssetType header value specifying the expected asset type.
 * @param Accept The Accept header value specifying the preferred response content type.
 * @param AssetFormat The AssetFormat header value specifying the desired asset format. Overridden by robloxAssetFormat if both are provided.
 * @param Roblox-AssetFormat The Roblox-AssetFormat header value specifying the preferred Roblox-specific asset format. Takes precedence over assetFormat.
 * @param skipSigningScripts Whether to skip script signing for the returned asset. Used for script assets that don't require signing.
 * @param clientInsert Set to 1 to indicate this is a client insert request.
 * @param scriptinsert Set to 1 to indicate this is a script insert request.
 * @param modulePlaceId The place ID of the module making the request.
 * @param serverplaceid The server place ID making the request.
 * @param expectedAssetType The expected asset type as a fallback when assetType header is not provided.
 * @param doNotFallbackToBaselineRepresentation Whether to prevent fallback to baseline representation when specific content representations are not available.
 * @param contentRepresentationPriorityList Base64URL-encoded JSON string specifying the priority list of desired content representations (format, version, fidelity).
 * @param accessContext 
 * @description Returns an object containing a `location` property which is a temporary CDN URL for the asset content. All asset types are supported.
You should request that URL with the `Accept-Encoding: gzip` header and decompress the result if the response is gzipped. If you are using cURL, the `--compressed` flag will automate these steps for you.
This endpoint is expected to be called with API key authentication through `apis.roblox.com/asset-delivery-api/v1/assetId/{assetId}`.
While you are able to make requests to this endpoint with Cookie authentication via `assetdelivery.roblox.com/v1/openCloud/assetId/{assetId}`, we highly discourage use this way.
Expect unannounced removal of this second route in the future.
 */
export const getOpencloudAssetidAssetid = endpoint({
  method: 'GET',
  path: '/v1/openCloud/assetId/:assetId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
    doNotFallbackToBaselineRepresentation: {
      style: 'form',
      explode: true,
    },
    contentRepresentationPriorityList: {
      style: 'form',
      explode: true,
    },
    accessContext: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
    'Accept-Encoding': z.string().optional(),
    'Roblox-Place-Id': z.number().int().optional(),
    AssetType: z.string().optional(),
    Accept: z.string().optional(),
    AssetFormat: z.string().optional(),
    'Roblox-AssetFormat': z.string().optional(),
    skipSigningScripts: z.boolean().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.number().int().optional(),
    expectedAssetType: z.string().optional(),
    doNotFallbackToBaselineRepresentation: z.boolean().optional(),
    contentRepresentationPriorityList: z.string().optional(),
    accessContext: z.string().optional(),
  },
  response: Roblox_Web_Assets_AssetResponseItemV1,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://assetdelivery.roblox.com/v1/openCloud/assetId/:assetId/version/:versionNumber
 * @summary Retrieves an asset by its ID and version number with OpenCloud auth.
 * @param assetId The ID of the asset to retrieve.
 * @param versionNumber The version number of the asset to retrieve.
 * @param Accept-Encoding 
 * @param Roblox-Place-Id 
 * @param AssetType 
 * @param Accept 
 * @param AssetFormat 
 * @param Roblox-AssetFormat 
 * @param skipSigningScripts 
 * @param clientInsert 
 * @param scriptinsert 
 * @param modulePlaceId 
 * @param serverplaceid 
 * @param expectedAssetType 
 * @param doNotFallbackToBaselineRepresentation 
 * @param contentRepresentationPriorityList 
 * @param accessContext 
 * @description Refer to the assetId endpoint for details on usage.
This endpoint is expected to be called with API key authentication through `apis.roblox.com/asset-delivery-api/v1/assetId/{assetId}/version/{versionNumber}`.
While you are able to make requests to this endpoint with Cookie authentication via `assetdelivery.roblox.com/v1/openCloud/assetId/{assetId}/version/{versionNumber}`, we highly discourage use this way.
Expect unannounced removal of this second route in the future.
 */
export const getOpencloudAssetidAssetidVersionVersionnumber = endpoint({
  method: 'GET',
  path: '/v1/openCloud/assetId/:assetId/version/:versionNumber',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
    versionNumber: {
      style: 'simple',
    },
    'Accept-Encoding': {
      style: 'simple',
    },
    'Roblox-Place-Id': {
      style: 'simple',
    },
    AssetType: {
      style: 'simple',
    },
    Accept: {
      style: 'simple',
    },
    AssetFormat: {
      style: 'simple',
    },
    'Roblox-AssetFormat': {
      style: 'simple',
    },
    skipSigningScripts: {
      style: 'form',
      explode: true,
    },
    clientInsert: {
      style: 'form',
      explode: true,
    },
    scriptinsert: {
      style: 'form',
      explode: true,
    },
    modulePlaceId: {
      style: 'form',
      explode: true,
    },
    serverplaceid: {
      style: 'form',
      explode: true,
    },
    expectedAssetType: {
      style: 'form',
      explode: true,
    },
    doNotFallbackToBaselineRepresentation: {
      style: 'form',
      explode: true,
    },
    contentRepresentationPriorityList: {
      style: 'form',
      explode: true,
    },
    accessContext: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    assetId: z.number().int(),
    versionNumber: z.number().int(),
    'Accept-Encoding': z.string().optional(),
    'Roblox-Place-Id': z.number().int().optional(),
    AssetType: z.string().optional(),
    Accept: z.string().optional(),
    AssetFormat: z.string().optional(),
    'Roblox-AssetFormat': z.string().optional(),
    skipSigningScripts: z.boolean().optional(),
    clientInsert: z.number().int().optional(),
    scriptinsert: z.number().int().optional(),
    modulePlaceId: z.number().int().optional(),
    serverplaceid: z.number().int().optional(),
    expectedAssetType: z.string().optional(),
    doNotFallbackToBaselineRepresentation: z.boolean().optional(),
    contentRepresentationPriorityList: z.string().optional(),
    accessContext: z.string().optional(),
  },
  response: Roblox_Web_Assets_AssetResponseItemV1,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
