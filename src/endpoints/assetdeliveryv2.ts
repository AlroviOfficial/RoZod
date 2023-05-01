import { z } from 'zod';

const Roblox_Web_Assets_AssetFormatLocation = z.object({ assetFormat: z.string(), location: z.string() });
const Roblox_Web_Assets_IAssetItemError = z.object({
  Code: z.number().int(),
  Message: z.string(),
  CustomErrorCode: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Web_Assets_IAssetResponseItemV2 = z.object({
  Locations: z.array(Roblox_Web_Assets_AssetFormatLocation),
  Errors: z.array(Roblox_Web_Assets_IAssetItemError),
  RequestId: z.string(),
  IsHashDynamic: z.boolean(),
  IsCopyrightProtected: z.boolean(),
  IsArchived: z.boolean(),
  AssetTypeId: z.number().int(),
});
const Roblox_Web_Assets_IAssetResponseItem = z.object({
  Location: z.string(),
  Errors: z.array(Roblox_Web_Assets_IAssetItemError),
  RequestId: z.string(),
  IsHashDynamic: z.boolean(),
  IsCopyrightProtected: z.boolean(),
  IsArchived: z.boolean(),
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
});

const schemas = {
  Roblox_Web_Assets_AssetFormatLocation,
  Roblox_Web_Assets_IAssetItemError,
  Roblox_Web_Assets_IAssetResponseItemV2,
  Roblox_Web_Assets_IAssetResponseItem,
  Roblox_Web_Assets_BatchAssetRequestItem,
};

/**
 * @api get https://assetdelivery.roblox.com/v2/alias/:alias
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
export const getAliasAlias = {
  method: 'get' as const,
  path: '/v2/alias/:alias',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    alias: z.string().regex(/^[0-9]+\\/),
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
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/asset
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
 */
export const getAsset = {
  method: 'get' as const,
  path: '/v2/asset',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
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
  },
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/assetHash/:hash
 * @param hash
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
export const getAssethashHash = {
  method: 'get' as const,
  path: '/v2/assetHash/:hash',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    hash: z.string(),
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
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/assetId/:assetId
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
 */
export const getAssetidAssetid = {
  method: 'get' as const,
  path: '/v2/assetId/:assetId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
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
  },
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/assetId/:assetId/version/:version
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
 */
export const getAssetidAssetidVersionVersion = {
  method: 'get' as const,
  path: '/v2/assetId/:assetId/version/:version',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
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
  },
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
/**
 * @api post https://assetdelivery.roblox.com/v2/assets/batch
 * @param body
 * @param Roblox-Place-Id
 * @param Accept
 * @param Roblox-Browser-Asset-Request
 */
export const postAssetsBatch = {
  method: 'post' as const,
  path: '/v2/assets/batch',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.array(Roblox_Web_Assets_BatchAssetRequestItem),
    'Roblox-Place-Id': z.number().int(),
    Accept: z.string(),
    'Roblox-Browser-Asset-Request': z.string(),
  },
  response: z.array(Roblox_Web_Assets_IAssetResponseItemV2),
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/assetVersionId/:assetVersionId
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
export const getAssetversionidAssetversionid = {
  method: 'get' as const,
  path: '/v2/assetVersionId/:assetVersionId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
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
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/marAssetHash/:marAssetHash/marCheckSum/:marCheckSum
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
export const getMarassethashMarassethashMarchecksumMarchecksum = {
  method: 'get' as const,
  path: '/v2/marAssetHash/:marAssetHash/marCheckSum/:marCheckSum',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
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
  response: Roblox_Web_Assets_IAssetResponseItem,
  errors: [],
};
/**
 * @api get https://assetdelivery.roblox.com/v2/userAssetId/:userAssetId
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
export const getUserassetidUserassetid = {
  method: 'get' as const,
  path: '/v2/userAssetId/:userAssetId',
  baseUrl: 'https://assetdelivery.roblox.com',
  requestFormat: 'json' as const,
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
  response: Roblox_Web_Assets_IAssetResponseItemV2,
  errors: [],
};
