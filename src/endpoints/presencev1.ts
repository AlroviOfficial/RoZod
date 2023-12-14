import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Presence_Api_Models_Request_LastOnlineRequest = z.object({ userIds: z.array(z.number()) }).passthrough();
const Roblox_Presence_Api_Models_Response_LastOnline = z
  .object({
    userId: z.number().int(),
    lastOnline: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Presence_Api_Models_Response_LastOnlineResponse = z
  .object({
    lastOnlineTimestamps: z.array(Roblox_Presence_Api_Models_Response_LastOnline),
  })
  .passthrough();
const Roblox_Presence_Api_Models_Request_RegisterAppPresenceRequest = z
  .object({
    location: z.string(),
    placeId: z.number().int(),
    disconnect: z.boolean(),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Presence_Api_Models_Request_UserPresenceRequest = z.object({ userIds: z.array(z.number()) }).passthrough();
const Roblox_Presence_Api_Models_Response_UserPresence = z
  .object({
    userPresenceType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    lastLocation: z.string(),
    placeId: z.number().int(),
    rootPlaceId: z.number().int(),
    gameId: z.string().uuid(),
    universeId: z.number().int(),
    userId: z.number().int(),
    lastOnline: z.string().datetime({ offset: true }),
    invisibleModeExpiry: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Presence_Api_Models_Response_UserPresencesResponse = z
  .object({
    userPresences: z.array(Roblox_Presence_Api_Models_Response_UserPresence),
  })
  .passthrough();

/**
 * @api POST https://presence.roblox.com/v1/presence/last-online
 * @summary Get last online timestamps for a list of users.
 * @param body
 */
export const postPresenceLastOnline = endpoint({
  method: 'post' as const,
  path: '/v1/presence/last-online',
  baseUrl: 'https://presence.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Presence_Api_Models_Request_LastOnlineRequest,
  response: Roblox_Presence_Api_Models_Response_LastOnlineResponse,
  errors: [],
});
/**
 * @api POST https://presence.roblox.com/v1/presence/register-app-presence
 * @summary Register User Presence for IOS, Android, Xbox, regular studio session
 * @param body
 */
export const postPresenceRegisterAppPresence = endpoint({
  method: 'post' as const,
  path: '/v1/presence/register-app-presence',
  baseUrl: 'https://presence.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Presence_Api_Models_Request_RegisterAppPresenceRequest,
  response: z.object({}).passthrough(),
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
 * @api POST https://presence.roblox.com/v1/presence/users
 * @summary Get Presence for a list of users
 * @param body
 */
export const postPresenceUsers = endpoint({
  method: 'post' as const,
  path: '/v1/presence/users',
  baseUrl: 'https://presence.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Presence_Api_Models_Request_UserPresenceRequest,
  response: Roblox_Presence_Api_Models_Response_UserPresencesResponse,
  errors: [],
});
