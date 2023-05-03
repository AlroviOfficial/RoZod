import { z } from "zod";

const Roblox_Presence_Api_Models_Request_LastOnlineRequest = z.object({
  userIds: z.array(z.number()),
});
const Roblox_Presence_Api_Models_Response_LastOnline = z.object({
  userId: z.number().int(),
  lastOnline: z.string().datetime(),
});
const Roblox_Presence_Api_Models_Response_LastOnlineResponse = z.object({
  lastOnlineTimestamps: z.array(Roblox_Presence_Api_Models_Response_LastOnline),
});
const Roblox_Presence_Api_Models_Request_RegisterAppPresenceRequest = z.object({
  location: z.string(),
  placeId: z.number().int(),
  disconnect: z.boolean(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Presence_Api_Models_Request_UserPresenceRequest = z.object({
  userIds: z.array(z.number()),
});
const Roblox_Presence_Api_Models_Response_UserPresence = z.object({
  userPresenceType: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  lastLocation: z.string(),
  placeId: z.number().int(),
  rootPlaceId: z.number().int(),
  gameId: z.string().uuid(),
  universeId: z.number().int(),
  userId: z.number().int(),
  lastOnline: z.string().datetime(),
});
const Roblox_Presence_Api_Models_Response_UserPresencesResponse = z.object({
  userPresences: z.array(Roblox_Presence_Api_Models_Response_UserPresence),
});

const schemas = {
  Roblox_Presence_Api_Models_Request_LastOnlineRequest,
  Roblox_Presence_Api_Models_Response_LastOnline,
  Roblox_Presence_Api_Models_Response_LastOnlineResponse,
  Roblox_Presence_Api_Models_Request_RegisterAppPresenceRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Presence_Api_Models_Request_UserPresenceRequest,
  Roblox_Presence_Api_Models_Response_UserPresence,
  Roblox_Presence_Api_Models_Response_UserPresencesResponse,
};

/**
 * @api post https://presence.roblox.com/v1/presence/last-online
 * @param body
 */
export const postPresenceLastOnline = {
  method: "post" as const,
  path: "/v1/presence/last-online",
  baseUrl: "https://presence.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_Presence_Api_Models_Request_LastOnlineRequest,
  },
  response: Roblox_Presence_Api_Models_Response_LastOnlineResponse,
  errors: [],
};
/**
 * @api post https://presence.roblox.com/v1/presence/register-app-presence
 * @param body
 */
export const postPresenceRegisterAppPresence = {
  method: "post" as const,
  path: "/v1/presence/register-app-presence",
  baseUrl: "https://presence.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_Presence_Api_Models_Request_RegisterAppPresenceRequest,
  },
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://presence.roblox.com/v1/presence/users
 * @param body
 */
export const postPresenceUsers = {
  method: "post" as const,
  path: "/v1/presence/users",
  baseUrl: "https://presence.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_Presence_Api_Models_Request_UserPresenceRequest,
  },
  response: Roblox_Presence_Api_Models_Response_UserPresencesResponse,
  errors: [],
};
