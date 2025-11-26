import { z } from 'zod';
import { endpoint } from '..';

const Roblox_ClientSettings_Api_Models_Response_ClientVersionResponse = z.object({
  version: z.string(),
  clientVersionUpload: z.string(),
  bootstrapperVersion: z.string(),
  nextClientVersionUpload: z.string(),
  nextClientVersion: z.string(),
});
const Roblox_ClientSettings_Api_Models_Response_MobileClientVersionResponseData = z.object({
  UpgradeAction: z.string(),
});
const Roblox_ClientSettings_Api_Models_Response_MobileClientVersionResponse = z.object({
  activeVersion: z.string(),
  upgradeSource: z.string(),
  MD5Sum: z.string(),
  data: Roblox_ClientSettings_Api_Models_Response_MobileClientVersionResponseData,
});

/**
 * @api GET https://clientsettings.roblox.com/v1/client-version/:binaryType
 * @summary Get client version information for specific binary type
 * @param binaryType Platform(WindowsPlayer, WindowsStudio, MacPlayer or MacStudio) for which we want the latest version
 */
export const getClientVersionBinarytype = endpoint({
  method: 'GET',
  path: '/v1/client-version/:binaryType',
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
 * @api GET https://clientsettings.roblox.com/v1/installer-cdns
 * @summary Get information about which CDNs to use for installation.
 */
export const getInstallerCdns = endpoint({
  method: 'GET',
  path: '/v1/installer-cdns',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://clientsettings.roblox.com/v1/mobile-client-version
 * @summary Get mobile client version information based on app version parameter
 * @param appVersion AppiOSV2.13, AppVersioniOS2.0.1, etc
 */
export const getMobileClientVersion = endpoint({
  method: 'GET',
  path: '/v1/mobile-client-version',
  baseUrl: 'https://clientsettings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    appVersion: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    appVersion: z.string(),
  },
  response: Roblox_ClientSettings_Api_Models_Response_MobileClientVersionResponse,
  errors: [
    {
      status: 400,
      description: `2: Invalid binaryType.`,
    },
  ],
});
