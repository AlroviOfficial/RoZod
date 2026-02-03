import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Api_Notifications_Models_ChromeManifestModel = z.object({
  name: z.string(),
  gcm_sender_id: z.string(),
});
const Roblox_Api_Notifications_Models_NotificationUser = z.object({
  name: z.string(),
  userId: z.number().int(),
});
const Roblox_Api_Notifications_Models_UserPushDestination = z.object({
  user: Roblox_Api_Notifications_Models_NotificationUser,
  name: z.string(),
  notificationToken: z.string(),
  supportsUpdateNotifications: z.boolean(),
  userPushNotificationDestinationId: z.number().int(),
  application: z.string(),
  platform: z.enum([
    'ChromeOnDesktop',
    'AndroidNative',
    'FirefoxOnDesktop',
    'IOSNative',
    'AndroidAmazon',
    'IOSTencent',
    'AndroidTencentService',
    'IOSPushKit',
  ]),
});
const Roblox_Api_Notifications_Models_GetCurrentPushDestinationResponseModel = z.object({
  destination: Roblox_Api_Notifications_Models_UserPushDestination,
  statusMessage: z.string(),
});
const Roblox_Api_Notifications_Models_GetPushDestinationsResponseModel = z.object({
  destinations: z.array(Roblox_Api_Notifications_Models_UserPushDestination),
  statusMessage: z.string(),
});
const Roblox_Api_Notifications_Models_PushNotificationClientMetadata = z.object({
  notificationId: z.string().uuid(),
  type: z.string(),
  detail: z.object({}),
  fallbackDelivered: z.boolean(),
});
const Roblox_Api_Notifications_Models_GetMetadataResponseModel = z.object({
  metadata: Roblox_Api_Notifications_Models_PushNotificationClientMetadata,
  statusMessage: z.string(),
});
const Roblox_Api_Notifications_Models_GameUpdateNotificationModel = z.object({
  universeId: z.number().int(),
  rootPlaceId: z.number().int(),
  createdOn: z.string().datetime({ offset: true }),
  createdOnKey: z.string(),
  content: z.string(),
  universeName: z.string(),
});
const Roblox_Api_Notifications_Models_NotificationStreamEntriesModel = z.object({
  id: z.string().uuid(),
  notificationSourceType: z.enum([
    'Test',
    'FriendRequestReceived',
    'FriendRequestAccepted',
    'PartyInviteReceived',
    'PartyMemberJoined',
    'ChatNewMessage',
    'PrivateMessageReceived',
    'UserAddedToPrivateServerWhiteList',
    'ConversationUniverseChanged',
    'TeamCreateInvite',
    'GameUpdate',
    'DeveloperMetricsAvailable',
    'GroupJoinRequestAccepted',
    'Sendr',
    'ExperienceInvitation',
  ]),
  eventDate: z.string().datetime({ offset: true }),
  timestamp: z.string(),
  isInteracted: z.boolean(),
  metadataCollection: z.array(z.object({})),
  eventCount: z.number().int(),
  content: z.object({}).passthrough(),
});
const Roblox_Api_Notifications_Models_ResponseModels_NotificationStreamMetadataResponse = z.object({
  bannerDismissTimeSpan: z.number().int(),
  signalRDisconnectionResponseInMilliseconds: z.number().int(),
  canLaunchGameFromGameUpdate: z.boolean(),
});
const Roblox_Api_Notifications_Models_UnreadStreamNotificationsModel = z.object({
  unreadNotifications: z.number().int(),
  statusMessage: z.string(),
});
const Roblox_Api_Notifications_Models_SuccessResponseModel = z.object({
  statusMessage: z.string(),
});
const Roblox_Api_Notifications_Models_RegisterAndroidRequestModel = z.object({
  notificationToken: z.string(),
  authorizeForUser: z.boolean(),
  oldNotificationToken: z.string(),
  deviceName: z.string(),
});
const Roblox_Api_Notifications_Models_PushNotificationRegistration = z.object({
  userPushNotificationDestinationId: z.number().int(),
  name: z.string(),
  notificationToken: z.string(),
  application: z.string(),
  platform: z.enum([
    'ChromeOnDesktop',
    'AndroidNative',
    'FirefoxOnDesktop',
    'IOSNative',
    'AndroidAmazon',
    'IOSTencent',
    'AndroidTencentService',
    'IOSPushKit',
  ]),
});
const Roblox_Api_Notifications_Models_RegistrationResponseModel = z.object({
  registration: Roblox_Api_Notifications_Models_PushNotificationRegistration,
  statusMessage: z.string(),
});
const Roblox_Api_Notifications_Models_RegisterIOSNativeRequestModel = z.object({
  notificationToken: z.string(),
  destinationIdentifier: z.string(),
  authorizeForUser: z.boolean(),
  oldNotificationToken: z.string(),
  deviceName: z.string(),
});
const Roblox_Api_Notifications_Models_RegisterIOSPushKitRequestModel = z.object({
  notificationToken: z.string(),
  destinationIdentifier: z.string(),
  authorizeForUser: z.boolean(),
  oldNotificationToken: z.string(),
  deviceName: z.string(),
});

/**
 * @api GET https://notifications.roblox.com/v2/push-notifications/chrome-manifest
 */
export const getPushNotificationsChromeManifest = endpoint({
  method: 'GET',
  path: '/v2/push-notifications/chrome-manifest',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Notifications_Models_ChromeManifestModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://notifications.roblox.com/v2/push-notifications/deregister-all-devices
 */
export const postPushNotificationsDeregisterAllDevices = endpoint({
  method: 'POST',
  path: '/v2/push-notifications/deregister-all-devices',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: z.object({ statusMessage: z.string() }),
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
 * @api POST https://notifications.roblox.com/v2/push-notifications/deregister-current-device
 */
export const postPushNotificationsDeregisterCurrentDevice = endpoint({
  method: 'POST',
  path: '/v2/push-notifications/deregister-current-device',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: z.object({ statusMessage: z.string() }),
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
 * @api POST https://notifications.roblox.com/v2/push-notifications/deregister-current-device-ios-pushkit
 */
export const postPushNotificationsDeregisterCurrentDeviceIosPushkit = endpoint({
  method: 'POST',
  path: '/v2/push-notifications/deregister-current-device-ios-pushkit',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: z.object({ statusMessage: z.string() }),
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
 * @api GET https://notifications.roblox.com/v2/push-notifications/get-current-device-destination
 */
export const getPushNotificationsGetCurrentDeviceDestination = endpoint({
  method: 'GET',
  path: '/v2/push-notifications/get-current-device-destination',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Notifications_Models_GetCurrentPushDestinationResponseModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://notifications.roblox.com/v2/push-notifications/get-destinations
 */
export const getPushNotificationsGetDestinations = endpoint({
  method: 'GET',
  path: '/v2/push-notifications/get-destinations',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Notifications_Models_GetPushDestinationsResponseModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://notifications.roblox.com/v2/push-notifications/metadata
 * @param notificationToken
 * @param notificationId
 */
export const getPushNotificationsMetadata = endpoint({
  method: 'GET',
  path: '/v2/push-notifications/metadata',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    notificationToken: {},
    notificationId: {},
  },
  parameters: {
    notificationToken: z.string(),
    notificationId: z.string().uuid(),
  },
  response: Roblox_Api_Notifications_Models_GetMetadataResponseModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://notifications.roblox.com/v2/push-notifications/register-android-native
 * @param body
 */
export const postPushNotificationsRegisterAndroidNative = endpoint({
  method: 'POST',
  path: '/v2/push-notifications/register-android-native',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Notifications_Models_RegisterAndroidRequestModel,
  response: Roblox_Api_Notifications_Models_RegistrationResponseModel,
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
 * @api POST https://notifications.roblox.com/v2/push-notifications/register-ios-native
 * @param body
 */
export const postPushNotificationsRegisterIosNative = endpoint({
  method: 'POST',
  path: '/v2/push-notifications/register-ios-native',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Notifications_Models_RegisterIOSNativeRequestModel,
  response: Roblox_Api_Notifications_Models_RegistrationResponseModel,
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
 * @api POST https://notifications.roblox.com/v2/push-notifications/register-ios-pushkit
 * @param body
 */
export const postPushNotificationsRegisterIosPushkit = endpoint({
  method: 'POST',
  path: '/v2/push-notifications/register-ios-pushkit',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Notifications_Models_RegisterIOSPushKitRequestModel,
  response: Roblox_Api_Notifications_Models_RegistrationResponseModel,
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
 * @api POST https://notifications.roblox.com/v2/stream-notifications/clear-unread
 */
export const postStreamNotificationsClearUnread = endpoint({
  method: 'POST',
  path: '/v2/stream-notifications/clear-unread',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: z.object({ statusMessage: z.string() }),
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
 * @api GET https://notifications.roblox.com/v2/stream-notifications/get-latest-game-updates
 * @param universeIds
 * @param sinceDateTime
 */
export const getStreamNotificationsGetLatestGameUpdates = endpoint({
  method: 'GET',
  path: '/v2/stream-notifications/get-latest-game-updates',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeIds: {},
    sinceDateTime: {},
  },
  parameters: {
    universeIds: z.array(z.number().int()),
    sinceDateTime: z.string().datetime({ offset: true }).optional(),
  },
  response: z.array(Roblox_Api_Notifications_Models_GameUpdateNotificationModel),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://notifications.roblox.com/v2/stream-notifications/get-recent
 * @param startIndex
 * @param maxRows
 */
export const getStreamNotificationsGetRecent = endpoint({
  method: 'GET',
  path: '/v2/stream-notifications/get-recent',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    startIndex: {},
    maxRows: {},
  },
  parameters: {
    startIndex: z.number().int().optional().default(0),
    maxRows: z.number().int().optional().default(10),
  },
  response: z.array(Roblox_Api_Notifications_Models_NotificationStreamEntriesModel),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://notifications.roblox.com/v2/stream-notifications/metadata
 */
export const getStreamNotificationsMetadata = endpoint({
  method: 'GET',
  path: '/v2/stream-notifications/metadata',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Notifications_Models_ResponseModels_NotificationStreamMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://notifications.roblox.com/v2/stream-notifications/unread-count
 */
export const getStreamNotificationsUnreadCount = endpoint({
  method: 'GET',
  path: '/v2/stream-notifications/unread-count',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Notifications_Models_UnreadStreamNotificationsModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
