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
const Roblox_Api_Notifications_Models_PushNotificationClientMetadata = z
  .object({
    notificationId: z.string().uuid(),
    type: z.string(),
    detail: z.object({}),
    fallbackDelivered: z.boolean(),
  })
  .passthrough();
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
const Roblox_Api_Notifications_Models_NotificationStreamEntriesModel = z
  .object({
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
  })
  .passthrough();
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
 * @summary Get Chrome Manifest to link GCM project to Chrome Browser
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
 * @summary De-register all devices to disable push notifications
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
 * @summary De-register current device to disable push notifications
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
 * @summary De-register current device to disable pushkit notifications
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
 * @summary Gets the current device destination
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
 * @summary Gets valid destinations associated with the signed user
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
 * @summary Gets the corresponding metadata for the specified notification
 * @param notificationToken Token for the notification
 * @param notificationId Id of the specified notification
 */
export const getPushNotificationsMetadata = endpoint({
  method: 'GET',
  path: '/v2/push-notifications/metadata',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    notificationToken: {
      style: 'form',
      explode: true,
    },
    notificationId: {
      style: 'form',
      explode: true,
    },
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
 * @summary Register Android Native for push notifications
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
 * @summary Registers IOS device for push notifications
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
 * @summary Registers IOS device for pushkit notifications
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
 * @summary Clears the unread Notification stream count
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
 * @summary Get the latest non aggregated Game Updates sent to the logged in user
 * @param universeIds List of universe IDs
 * @param sinceDateTime For retrieving only updates that created after a time point.
 */
export const getStreamNotificationsGetLatestGameUpdates = endpoint({
  method: 'GET',
  path: '/v2/stream-notifications/get-latest-game-updates',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeIds: {
      style: 'form',
      explode: true,
    },
    sinceDateTime: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeIds: z.array(z.number()),
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
 * @summary Gets the recent entries from the notification stream
 * @param startIndex Index to start the entries from. (Optional : Defaults to 0 which means the most recent entry)
 * @param maxRows Number of entries to be returned. (Optional : Defaults to 10 entries)
 */
export const getStreamNotificationsGetRecent = endpoint({
  method: 'GET',
  path: '/v2/stream-notifications/get-recent',
  baseUrl: 'https://notifications.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    startIndex: {
      style: 'form',
      explode: true,
    },
    maxRows: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    startIndex: z.number().int().optional(),
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
 * @summary Get Notification Stream metadata.
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
 * @summary Gets the count of unread Notification stream entries
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
