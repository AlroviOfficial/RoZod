import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Followings_Api_Models_FollowsByTypeResponse = z.object({
  followerType: z.union([z.literal(0), z.literal(1)]),
  followerId: z.number().int(),
  sourceType: z.union([z.literal(0), z.literal(1)]),
  followedSources: z.record(z.string().datetime({ offset: true })),
});

/**
 * @api GET https://followings.roblox.com/v2/users/:userId/universes
 * @summary Gets all universes followed by a user.
 * @param userId The user ID.
 */
export const getUsersUseridUniverses = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/universes',
  baseUrl: 'https://followings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Followings_Api_Models_FollowsByTypeResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `User is not authorized for this action.`,
    },
  ],
});
