import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Presence_Api_Models_Request_LastOnlineRequest = z.object({
  userIds: z.array(z.number()),
});
const Roblox_Presence_Api_Models_Response_LastOnline = z.object({
  userId: z.number().int(),
  lastOnline: z.string().datetime({ offset: true }),
});
const Roblox_Presence_Api_Models_Response_LastOnlineResponse = z.object({
  lastOnlineTimestamps: z.array(Roblox_Presence_Api_Models_Response_LastOnline),
});
const Roblox_Presence_Api_Models_Request_UserPresenceRequest = z.object({
  userIds: z.array(z.number()),
});
const Roblox_Presence_Api_Models_Response_UserPresence = z.object({
  userPresenceType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  lastLocation: z.string(),
  placeId: z.number().int(),
  rootPlaceId: z.number().int(),
  gameId: z.string().uuid(),
  universeId: z.number().int(),
  userId: z.number().int(),
  lastOnline: z.string().datetime({ offset: true }),
  invisibleModeExpiry: z.string().datetime({ offset: true }),
});
const Roblox_Presence_Api_Models_Response_UserPresencesResponse = z.object({
  userPresences: z.array(Roblox_Presence_Api_Models_Response_UserPresence),
});

/**
 * @api POST https://presence.roblox.com/v1/presence/last-online
 * @summary Get last online timestamps for a list of users.
 * @param body
 */
export const postPresenceLastOnline = endpoint({
  method: 'post',
  path: '/v1/presence/last-online',
  baseUrl: 'https://presence.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Presence_Api_Models_Request_LastOnlineRequest,
  response: Roblox_Presence_Api_Models_Response_LastOnlineResponse,
  errors: [],
});
/**
 * @api POST https://presence.roblox.com/v1/presence/users
 * @summary Get Presence for a list of users
 * @param body
 */
export const postPresenceUsers = endpoint({
  method: 'post',
  path: '/v1/presence/users',
  baseUrl: 'https://presence.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Presence_Api_Models_Request_UserPresenceRequest,
  response: Roblox_Presence_Api_Models_Response_UserPresencesResponse,
  errors: [],
});
