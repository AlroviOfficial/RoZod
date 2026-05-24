import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Followings_Api_Models_UserFollowingUniverseResponse = z.object({
  universeId: z.number().int(),
  userId: z.number().int(),
});
const Roblox_Followings_Api_Models_UserFollowingUniverseStatusResponse = z.object({
  UniverseId: z.number().int(),
  UserId: z.number().int(),
  CanFollow: z.boolean(),
  IsFollowing: z.boolean(),
  FollowingCountByType: z.number().int(),
  FollowingLimitByType: z.number().int(),
});

/**
 * @api GET https://followings.roblox.com/v1/users/:userId/universes
 * @summary Gets all the followings between a user with userId and universes
 * @param userId
 */
export const getUsersUseridUniverses = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/universes',
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
  response: z.array(Roblox_Followings_Api_Models_UserFollowingUniverseResponse),
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
/**
 * @api POST https://followings.roblox.com/v1/users/:userId/universes/:universeId
 * @summary Creates the following between a user with userId and universe with universeId
 * @param userId
 * @param universeId
 */
export const postUsersUseridUniversesUniverseid = endpoint({
  method: 'POST',
  path: '/v1/users/:userId/universes/:universeId',
  baseUrl: 'https://followings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    universeId: z.number().int(),
  },
  response: Roblox_Followings_Api_Models_UserFollowingUniverseResponse,
  errors: [
    {
      status: 400,
      description: `The user has reached the limit of number of followed universes.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `User is not authorized for this action.
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api DELETE https://followings.roblox.com/v1/users/:userId/universes/:universeId
 * @summary Deletes the following between a user with userId and universe with universeId
 * @param userId
 * @param universeId
 */
export const deleteUsersUseridUniversesUniverseid = endpoint({
  method: 'DELETE',
  path: '/v1/users/:userId/universes/:universeId',
  baseUrl: 'https://followings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    universeId: z.number().int(),
  },
  response: Roblox_Followings_Api_Models_UserFollowingUniverseResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `User is not authorized for this action.
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://followings.roblox.com/v1/users/:userId/universes/:universeId/status
 * @summary Gets the status of a following relationship between a user and a universe.
 * @param userId
 * @param universeId
 */
export const getUsersUseridUniversesUniverseidStatus = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/universes/:universeId/status',
  baseUrl: 'https://followings.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    universeId: z.number().int(),
  },
  response: Roblox_Followings_Api_Models_UserFollowingUniverseStatusResponse,
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
