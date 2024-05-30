import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_ = z
  .object({ id: z.number().int(), type: z.literal(0), name: z.string() })
  .passthrough();
const Roblox_Web_Responses_Groups_GroupResponseV2 = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    owner: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_,
    memberCount: z.number().int(),
    created: z.string().datetime({ offset: true }),
    hasVerifiedBadge: z.boolean(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupResponseV2_ = z
  .object({ data: z.array(Roblox_Web_Responses_Groups_GroupResponseV2) })
  .passthrough();
const Roblox_Groups_Api_Models_Response_UserModel = z
  .object({
    buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    hasVerifiedBadge: z.boolean(),
    userId: z.number().int(),
    username: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Groups_Api_GroupRoleResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    rank: z.number().int(),
    memberCount: z.number().int(),
  })
  .passthrough();
const Roblox_Groups_Api_UserGroupRoleResponse = z
  .object({
    user: Roblox_Groups_Api_Models_Response_UserModel,
    role: Roblox_Groups_Api_GroupRoleResponse,
  })
  .passthrough();
const Roblox_Groups_Api_GroupWallPostV2Model = z
  .object({
    id: z.number().int(),
    poster: Roblox_Groups_Api_UserGroupRoleResponse,
    body: z.string(),
    created: z.string().datetime({ offset: true }),
    updated: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupWallPostV2Model_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Groups_Api_GroupWallPostV2Model),
  })
  .passthrough();
const Roblox_Groups_Api_CreateWallPostRequest = z
  .object({
    body: z.string(),
    captchaId: z.string(),
    captchaToken: z.string(),
    captchaProvider: z.string(),
    challengeId: z.string(),
  })
  .passthrough();
const Roblox_Web_Responses_Groups_GroupBasicResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    memberCount: z.number().int(),
    hasVerifiedBadge: z.boolean(),
  })
  .passthrough();
const Roblox_Web_Responses_Groups_GroupRoleBasicResponse = z
  .object({ id: z.number().int(), name: z.string(), rank: z.number().int() })
  .passthrough();
const Roblox_Groups_Api_GroupMembershipResponse = z
  .object({
    group: Roblox_Web_Responses_Groups_GroupBasicResponse,
    role: Roblox_Web_Responses_Groups_GroupRoleBasicResponse,
    isNotificationsEnabled: z.boolean(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_ = z
  .object({ data: z.array(Roblox_Groups_Api_GroupMembershipResponse) })
  .passthrough();

/**
 * @api GET https://groups.roblox.com/v2/groups
 * @summary Multi-get groups information by Ids.
 * @param groupIds The group Ids.
 * @description If a group comes back as null, it will not be returned in the response.
 */
export const getGroups = endpoint({
  method: 'get' as const,
  path: '/v2/groups',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupIds: {
      style: 'form',
    },
  },
  parameters: {
    groupIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupResponseV2_,
  errors: [
    {
      status: 400,
      description: `2: Too many ids in request.
3: Ids could not be parsed from request.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v2/groups/:groupId/wall/posts
 * @summary Gets a list of group wall posts.
 * @param groupId The group id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by group wall post Id
 */
export const getGroupsGroupidWallPosts = endpoint({
  method: 'get' as const,
  path: '/v2/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupWallPostV2Model_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 403,
      description: `2: You do not have permission to access this group wall.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v2/groups/:groupId/wall/posts
 * @summary Creates a post on a group wall
 * @param body The Roblox.Groups.Api.CreateWallPostRequest.
 * @param groupId The group id.
 */
export const postGroupsGroupidWallPosts = endpoint({
  method: 'post' as const,
  path: '/v2/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_CreateWallPostRequest,
  response: Roblox_Groups_Api_GroupWallPostV2Model,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
5: Your post was empty, white space, or more than 500 characters.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to access this group wall.`,
    },
    {
      status: 429,
      description: `4: You are posting too fast, please try again in a few minutes.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v2/users/:userId/groups/roles
 * @summary Gets a list of all group roles for groups the specified user is in.
 * @param userId The user id.
 * @param includeLocked
 * @param includeNotificationPreferences
 */
export const getUsersUseridGroupsRoles = endpoint({
  method: 'get' as const,
  path: '/v2/users/:userId/groups/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    includeLocked: {
      style: 'form',
      explode: true,
    },
    includeNotificationPreferences: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    includeLocked: z.boolean(),
    includeNotificationPreferences: z.boolean(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
    },
  ],
});
