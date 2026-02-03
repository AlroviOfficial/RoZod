import { z } from 'zod';
import { endpoint } from '..';

const Roblox_ClientSettings_Api_Models_Response_AndroidBinaryLibraryNames = z.object({ engine: z.string() });
const Roblox_ClientSettings_Api_Models_Response_AndroidBinaryResponse = z.object({
  moduleName: z.string(),
  libraryNames: Roblox_ClientSettings_Api_Models_Response_AndroidBinaryLibraryNames,
  supportsAndroidBinaries: z.boolean(),
});
const Roblox_ClientSettings_Api_Models_Response_ClientVersionResponse = z.object({
  version: z.string(),
  clientVersionUpload: z.string(),
  bootstrapperVersion: z.string(),
  nextClientVersionUpload: z.string(),
  nextClientVersion: z.string(),
});
const Roblox_ClientSettings_Api_Models_Response_OtaVersionResponse = z.object({
  name: z.string(),
  version: z.string(),
  downloadUrl: z.string(),
  isStandalone: z.boolean(),
  assetId: z.string(),
  assetVersion: z.string(),
  maxAppVersion: z.string(),
  tryoutName: z.string(),
  localAssetURI: z.string(),
  isForcedUpdate: z.boolean(),
  appStorageResetId: z.string(),
  isDevelopmentConfig: z.boolean(),
  assetsManifest: z.string(),
});
const Roblox_ClientSettings_Api_Models_Response_UserChannelResponse = z.object({
  channelName: z.string(),
  channelAssignmentType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  token: z.string(),
});

/**
 * @api GET https://clientsettings.roblox.com/v2/android-binaries/:version/channels/:channelName
 * @param version
 * @param channelName
 */
export const getAndroidBinariesVersionChannelsChannelname = endpoint({
  method: 'GET',
  path: '/v2/android-binaries/:version/channels/:channelName',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    version: {},
    channelName: {},
  },
  parameters: {
    version: z.string(),
    channelName: z.string(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_AndroidBinaryResponse,
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/client-version/:binaryType
 * @param binaryType
 */
export const getClientVersionBinarytype = endpoint({
  method: 'GET',
  path: '/v2/client-version/:binaryType',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {},
  },
  parameters: {
    binaryType: z.string(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_ClientVersionResponse,
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/client-version/:binaryType/channel/:channelName
 * @param binaryType
 * @param channelName
 */
export const getClientVersionBinarytypeChannelChannelname = endpoint({
  method: 'GET',
  path: '/v2/client-version/:binaryType/channel/:channelName',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {},
    channelName: {},
  },
  parameters: {
    binaryType: z.string(),
    channelName: z.string(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_ClientVersionResponse,
  errors: [
    {
      status: 401,
      description: `5: Not authorized to perform this action.`,
    },
  ],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/compression-dictionaries
 */
export const getCompressionDictionaries = endpoint({
  method: 'GET',
  path: '/v2/compression-dictionaries',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/compression-dictionaries/:dictionarySha256
 * @param dictionarySha256
 */
export const getCompressionDictionariesDictionarysha256 = endpoint({
  method: 'GET',
  path: '/v2/compression-dictionaries/:dictionarySha256',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    dictionarySha256: {},
  },
  parameters: {
    dictionarySha256: z.string(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/ota-version/:binaryType
 * @param binaryType
 * @param channel
 * @param version
 * @param tag
 * @param name
 */
export const getOtaVersionBinarytype = endpoint({
  method: 'GET',
  path: '/v2/ota-version/:binaryType',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {},
    channel: {},
    version: {},
    tag: {},
    name: {},
  },
  parameters: {
    binaryType: z.string(),
    channel: z.string().optional(),
    version: z.string().optional(),
    tag: z.string().optional(),
    name: z.string().optional(),
  },
  response: z.array(Roblox_ClientSettings_Api_Models_Response_OtaVersionResponse),
  errors: [
    {
      status: 400,
      description: `2: Invalid binaryType.
4: Invalid app version.
6: Missing or invalid channel.
7: Unsupported binaryType.`,
    },
    {
      status: 401,
      description: `5: Not authorized to perform this action.`,
    },
  ],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/user-channel
 * @param binaryType
 */
export const getUserChannel = endpoint({
  method: 'GET',
  path: '/v2/user-channel',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {},
  },
  parameters: {
    binaryType: z.string().optional(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_UserChannelResponse,
  errors: [],
});
