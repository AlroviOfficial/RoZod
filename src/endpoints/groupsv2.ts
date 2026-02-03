import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_ = z.object({
  id: z.number().int(),
  type: z.literal(0),
  name: z.string(),
});
const Roblox_Web_Responses_Groups_GroupResponseV2 = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  owner: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_,
  memberCount: z.number().int(),
  created: z.string().datetime({ offset: true }),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupResponseV2_ = z.object({
  data: z.array(Roblox_Web_Responses_Groups_GroupResponseV2),
});
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_ = z.object({
  id: z.number().int(),
  type: z.union([z.literal(0), z.literal(1)]),
  name: z.string(),
});
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_ = z.object({
  id: z.number().int(),
  type: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(21),
    z.literal(22),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
    z.literal(28),
    z.literal(29),
    z.literal(30),
    z.literal(31),
    z.literal(32),
    z.literal(33),
    z.literal(34),
    z.literal(35),
    z.literal(37),
    z.literal(38),
    z.literal(39),
    z.literal(40),
    z.literal(41),
    z.literal(42),
    z.literal(43),
    z.literal(44),
    z.literal(45),
    z.literal(46),
    z.literal(47),
    z.literal(48),
    z.literal(49),
    z.literal(50),
    z.literal(51),
    z.literal(52),
    z.literal(53),
    z.literal(54),
    z.literal(55),
    z.literal(56),
    z.literal(59),
    z.literal(60),
    z.literal(61),
    z.literal(62),
    z.literal(63),
    z.literal(64),
    z.literal(65),
    z.literal(66),
    z.literal(67),
    z.literal(68),
    z.literal(69),
    z.literal(70),
    z.literal(71),
    z.literal(72),
    z.literal(73),
    z.literal(74),
    z.literal(75),
    z.literal(76),
    z.literal(77),
    z.literal(78),
    z.literal(79),
    z.literal(80),
    z.literal(81),
    z.literal(82),
    z.literal(83),
    z.literal(84),
    z.literal(85),
    z.literal(86),
    z.literal(87),
    z.literal(88),
    z.literal(89),
    z.literal(90),
  ]),
  name: z.string(),
});
const Roblox_Groups_Api_Models_Response_GroupExperienceResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  creator: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_,
  rootPlace: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_,
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
  placeVisits: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupExperienceResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_Models_Response_GroupExperienceResponse),
});
const Roblox_Groups_Api_Models_Response_UserModel = z.object({
  buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  hasVerifiedBadge: z.boolean(),
  userId: z.number().int(),
  username: z.string(),
  displayName: z.string(),
});
const Roblox_Groups_Api_GroupRoleResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
  memberCount: z.number().int(),
});
const Roblox_Groups_Api_UserGroupRoleResponse = z.object({
  user: Roblox_Groups_Api_Models_Response_UserModel,
  role: Roblox_Groups_Api_GroupRoleResponse,
});
const Roblox_Groups_Api_GroupWallPostV2Model = z.object({
  id: z.number().int(),
  poster: Roblox_Groups_Api_UserGroupRoleResponse,
  body: z.string(),
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupWallPostV2Model_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupWallPostV2Model),
});
const Roblox_Groups_Api_CreateWallPostRequest = z.object({
  body: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Web_Responses_Groups_GroupBasicResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  memberCount: z.number().int(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Web_Responses_Groups_GroupRoleBasicResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  rank: z.number().int(),
});
const Roblox_Groups_Api_GroupNotificationPreferenceData = z.object({
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  enabled: z.boolean(),
  name: z.string(),
  description: z.string(),
});
const Roblox_Groups_Api_GroupMembershipResponse = z.object({
  group: Roblox_Web_Responses_Groups_GroupBasicResponse,
  role: Roblox_Web_Responses_Groups_GroupRoleBasicResponse,
  isNotificationsEnabled: z.boolean(),
  notificationPreferences: z.array(Roblox_Groups_Api_GroupNotificationPreferenceData),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupMembershipResponse),
});

/**
 * @api GET https://groups.roblox.com/v2/groups
 * @param groupIds
 * @description If a group comes back as null, it will not be returned in the response.
 */
export const getGroups = endpoint({
  method: 'GET',
  path: '/v2/groups',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupIds: {},
  },
  parameters: {
    groupIds: z.array(z.number().int()),
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
 * @api GET https://groups.roblox.com/v2/groups/:groupId/experiences
 * @param groupId
 * @param accessFilter
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidExperiences = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/experiences',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {},
    accessFilter: {},
    limit: {},
    cursor: {},
    sortOrder: {},
  },
  parameters: {
    groupId: z.number().int(),
    accessFilter: z
      .union([z.literal(1), z.literal(2), z.literal(4)])
      .optional()
      .default(1),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupExperienceResponse_,
  errors: [
    {
      status: 501,
      description: `47: Code path is not implemented.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v2/groups/:groupId/wall/posts
 * @param groupId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getGroupsGroupidWallPosts = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {},
    limit: {},
    cursor: {},
    sortOrder: {},
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
 * @param body The Roblox.Groups.Api.CreateWallPostRequest.
 * @param groupId
 */
export const postGroupsGroupidWallPosts = endpoint({
  method: 'POST',
  path: '/v2/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {},
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
5: Your post was empty, white space, or more than 500 characters.
9: The provided content was moderated.`,
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
 * @param userId
 * @param includeLocked
 * @param includeNotificationPreferences
 * @param discoveryType
 */
export const getUsersUseridGroupsRoles = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/groups/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    includeLocked: {},
    includeNotificationPreferences: {},
    discoveryType: {},
  },
  parameters: {
    userId: z.number().int(),
    includeLocked: z.boolean(),
    includeNotificationPreferences: z.boolean(),
    discoveryType: z.union([z.literal(0), z.literal(1)]),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
    },
  ],
});
