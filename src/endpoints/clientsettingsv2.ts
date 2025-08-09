import { z } from 'zod';
import { endpoint } from '..';

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
});
const Roblox_ClientSettings_Api_Models_Response_UserChannelResponse = z.object({
  channelName: z.string(),
  channelAssignmentType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  token: z.string(),
});

/**
 * @api GET https://clientsettings.roblox.com/v2/client-version/:binaryType
 * @summary Get client version information for specific binary type
 * @param binaryType Platform(WindowsPlayer, WindowsStudio, MacPlayer or MacStudio) for which we want the latest version
 */
export const getClientVersionBinarytype = endpoint({
  method: 'GET',
  path: '/v2/client-version/:binaryType',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {
      style: 'simple',
    },
  },
  parameters: {
    binaryType: z.string(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_ClientVersionResponse,
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/client-version/:binaryType/channel/:channelName
 * @summary Get client version information for specific binary type
 * @param binaryType Platform(WindowsPlayer, WindowsStudio, MacPlayer or MacStudio) for which we want the latest version
 * @param channelName Channel Name
 */
export const getClientVersionBinarytypeChannelChannelname = endpoint({
  method: 'GET',
  path: '/v2/client-version/:binaryType/channel/:channelName',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {
      style: 'simple',
    },
    channelName: {
      style: 'simple',
    },
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
 * @summary Returns a listing of all known compression dictionaries, including their SHA256 and creation date.
This will be sorted by creation date, with the most recent dictionaries first.
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
 * @summary Returns the specified compression dictionary as a file download.
 * @param dictionarySha256 The SHA256 of the dictionary we wish to download.
 */
export const getCompressionDictionariesDictionarysha256 = endpoint({
  method: 'GET',
  path: '/v2/compression-dictionaries/:dictionarySha256',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    dictionarySha256: {
      style: 'simple',
    },
  },
  parameters: {
    dictionarySha256: z.string(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v2/ota-version/:binaryType
 * @summary Get OTA information for a specific binary type with a given version on some channel.
Returns empty list if no updates are found or channel/application with the given version does not exist in CVS.
 * @param binaryType Binary type of the application to get info for
 * @param channel Channel name. If not provided, production is assumed.
 * @param version Application version
 */
export const getOtaVersionBinarytype = endpoint({
  method: 'GET',
  path: '/v2/ota-version/:binaryType',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {
      style: 'simple',
    },
    channel: {
      style: 'form',
      explode: true,
    },
    version: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    binaryType: z.string(),
    channel: z.string().optional(),
    version: z.string().optional(),
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
 * @summary Get channel name for currently logged in user
 * @param binaryType
 */
export const getUserChannel = endpoint({
  method: 'GET',
  path: '/v2/user-channel',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    binaryType: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    binaryType: z.string().optional(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_UserChannelResponse,
  errors: [],
});
