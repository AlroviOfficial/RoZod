import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Assets_AssetFormatLocation = z.object({
  assetFormat: z.string(),
  location: z.string(),
});
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
  ]),
});
const Roblox_Web_Assets_AssetContentRepresentationSpecifier = z.object({
  format: z.string(),
  majorVersion: z.string(),
  fidelity: z.string(),
});
const Roblox_Web_Assets_AssetResponseItemV2 = z.object({
  locations: z.array(Roblox_Web_Assets_AssetFormatLocation),
  errors: z.array(Roblox_Web_Assets_IAssetItemError),
  requestId: z.string(),
  IsHashDynamic: z.boolean(),
  IsCopyrightProtected: z.boolean(),
  isArchived: z.boolean(),
  assetTypeId: z.number().int(),
  contentRepresentationSpecifier: Roblox_Web_Assets_AssetContentRepresentationSpecifier,
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
  contentRepresentationPriorityList: z.string(),
  doNotFallbackToBaselineRepresentation: z.boolean(),
});

/**
 * @api GET https://assetdelivery.roblox.com/v2/alias/:alias
 * @param alias
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
export const getAliasAlias = endpoint({
  method: 'get',
  path: '/v2/alias/:alias',
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
  },
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v2/asset
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
 */
export const getAsset = endpoint({
  method: 'get',
  path: '/v2/asset',
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
  },
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v2/assetId/:assetId
 * @param assetId
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
 */
export const getAssetidAssetid = endpoint({
  method: 'get',
  path: '/v2/assetId/:assetId',
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
  },
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v2/assetId/:assetId/version/:version
 * @param assetId
 * @param version
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
 */
export const getAssetidAssetidVersionVersion = endpoint({
  method: 'get',
  path: '/v2/assetId/:assetId/version/:version',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
    version: {
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
  },
  parameters: {
    assetId: z.number().int(),
    version: z.number().int(),
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
  },
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
/**
 * @api POST https://assetdelivery.roblox.com/v2/assets/batch
 * @param body
 * @param Roblox-Place-Id
 * @param Accept
 * @param Roblox-Browser-Asset-Request
 */
export const postAssetsBatch = endpoint({
  method: 'post',
  path: '/v2/assets/batch',
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
    'Roblox-Browser-Asset-Request': {
      style: 'simple',
    },
  },
  parameters: {
    'Roblox-Place-Id': z.number().int(),
    Accept: z.string(),
    'Roblox-Browser-Asset-Request': z.string(),
  },
  body: z.array(Roblox_Web_Assets_BatchAssetRequestItem),
  response: z.array(Roblox_Web_Assets_AssetResponseItemV2),
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v2/assetVersionId/:assetVersionId
 * @param assetVersionId
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
export const getAssetversionidAssetversionid = endpoint({
  method: 'get',
  path: '/v2/assetVersionId/:assetVersionId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetVersionId: {
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
    assetVersionId: z.number().int(),
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
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v2/marAssetHash/:marAssetHash/marCheckSum/:marCheckSum
 * @param marAssetHash
 * @param marCheckSum
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
  method: 'get',
  path: '/v2/marAssetHash/:marAssetHash/marCheckSum/:marCheckSum',
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
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
/**
 * @api GET https://assetdelivery.roblox.com/v2/userAssetId/:userAssetId
 * @param userAssetId
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
export const getUserassetidUserassetid = endpoint({
  method: 'get',
  path: '/v2/userAssetId/:userAssetId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userAssetId: {
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
    userAssetId: z.number().int(),
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
  response: Roblox_Web_Assets_AssetResponseItemV2,
  errors: [],
});
