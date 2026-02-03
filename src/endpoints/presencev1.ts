import { z } from 'zod';
import { endpoint } from '..';

const UserPresenceRequest = z.object({
  userIds: z.array(z.number().int()).nullable(),
});
const presence_users_body = UserPresenceRequest;
const PresenceType = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]);
const UserPresence = z.object({
  userPresenceType: PresenceType,
  lastLocation: z.string().nullable(),
  placeId: z.number().int().nullable(),
  rootPlaceId: z.number().int().nullable(),
  gameId: z.string().uuid().nullable(),
  universeId: z.number().int().nullable(),
  userId: z.number().int(),
});
const UserPresencesResponse = z.object({
  userPresences: z.array(UserPresence).nullable(),
});
const Error = z.object({
  code: z.number().int(),
  message: z.string().nullable(),
});
const ErrorResponse = z.object({ errors: z.array(Error).nullable() });

/**
 * @api POST https://presence.roblox.com/v1/presence/users
 * @param body
 */
export const postPresenceUsers = endpoint({
  method: 'POST',
  path: '/v1/presence/users',
  baseUrl: 'https://presence.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: presence_users_body,
  response: UserPresencesResponse,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 429,
      description: `Too Many Requests`,
    },
  ],
});
