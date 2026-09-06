import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Web_Responses_Groups_GroupOwnerType_ = z.object({
  id: z.number().int(),
  type: z.literal('User'),
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
  type: z.enum(['User', 'Group']),
  name: z.string(),
});
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_ = z.object({
  id: z.number().int(),
  type: z.enum([
    'Image',
    'TShirt',
    'Audio',
    'Mesh',
    'Lua',
    'HTML',
    'Text',
    'Hat',
    'Place',
    'Model',
    'Shirt',
    'Pants',
    'Decal',
    'Avatar',
    'Head',
    'Face',
    'Gear',
    'Badge',
    'GroupEmblem',
    'Animation',
    'Arms',
    'Legs',
    'Torso',
    'RightArm',
    'LeftArm',
    'LeftLeg',
    'RightLeg',
    'Package',
    'YouTubeVideo',
    'GamePass',
    'App',
    'Code',
    'Plugin',
    'SolidModel',
    'MeshPart',
    'HairAccessory',
    'FaceAccessory',
    'NeckAccessory',
    'ShoulderAccessory',
    'FrontAccessory',
    'BackAccessory',
    'WaistAccessory',
    'ClimbAnimation',
    'DeathAnimation',
    'FallAnimation',
    'IdleAnimation',
    'JumpAnimation',
    'RunAnimation',
    'SwimAnimation',
    'WalkAnimation',
    'PoseAnimation',
    'LocalizationTableManifest',
    'LocalizationTableTranslation',
    'EmoteAnimation',
    'Video',
    'TexturePack',
    'TShirtAccessory',
    'ShirtAccessory',
    'PantsAccessory',
    'JacketAccessory',
    'SweaterAccessory',
    'ShortsAccessory',
    'LeftShoeAccessory',
    'RightShoeAccessory',
    'DressSkirtAccessory',
    'FontFamily',
    'FontFace',
    'MeshHiddenSurfaceRemoval',
    'EyebrowAccessory',
    'EyelashAccessory',
    'MoodAnimation',
    'DynamicHead',
    'CodeSnippet',
    'AdsVideo',
    'OtaUpdate',
    'Screenshot',
    'RuntimePropertySet',
    'StorePreviewVideo',
    'GamePreviewVideo',
    'CreatorExperienceConfig',
    'FaceMakeup',
    'LipMakeup',
    'EyeMakeup',
    'VoxelFragment',
    'AvatarBackground',
    'TextDocument',
    'Post',
    'AnimatedImage',
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
const Roblox_Groups_Api_ShoutResponse = z.object({
  body: z.string(),
  poster: Roblox_Groups_Api_Models_Response_UserModel,
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_Groups_Client_TierRequirement = z.object({
  key: z.enum([
    'OwnerModerationStatusOk',
    'OwnerAgeEstimationVerified',
    'OwnerIdVerified',
    'OwnerTwoStepVerified',
    'CommunityMeetsPlayerRequirement',
  ]),
  satisfied: z.boolean(),
});
const Roblox_Groups_Client_TierCapabilities = z.object({
  isEligibleForUnrestrictedMessages: z.boolean(),
});
const Roblox_Groups_Client_CommunityTierInfoResponse = z.object({
  groupId: z.number().int(),
  currentTier: z.number().int(),
  previousTier: z.number().int(),
  tierUpdatedTime: z.string().datetime({ offset: true }),
  lastEvaluatedTime: z.string().datetime({ offset: true }),
  requirements: z.array(Roblox_Groups_Client_TierRequirement),
  capabilities: Roblox_Groups_Client_TierCapabilities,
});
const Roblox_Groups_Api_GroupDetailResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  owner: Roblox_Groups_Api_Models_Response_UserModel,
  shout: Roblox_Groups_Api_ShoutResponse,
  memberCount: z.number().int(),
  isBuildersClubOnly: z.boolean(),
  publicEntryAllowed: z.boolean(),
  isLocked: z.boolean(),
  hasVerifiedBadge: z.boolean(),
  hasSocialModules: z.boolean(),
  communityTier: Roblox_Groups_Client_CommunityTierInfoResponse,
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupDetailResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupDetailResponse),
});
const Roblox_Groups_Api_Models_Response_GroupRelationshipsV2Response = z.object({
  groupId: z.number().int(),
  relationshipType: z.enum(['Allies', 'Enemies']),
  groupResponses: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupDetailResponse_,
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
  type: z.enum([
    'AnnouncementCreatedNotification',
    'ForumPostCreatedNotification',
    'ForumCommentCreatedNotification',
    'ForumCommentReplyCreatedNotification',
    'ForumSubscriberNotification',
  ]),
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
 * @summary Multi-get groups information by Ids.
 * @param groupIds The group Ids.
 * @description If a group comes back as null, it will not be returned in the response.
 */
export const getGroups = endpoint({
  method: 'GET',
  path: '/v2/groups',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
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
 * @api GET https://groups.roblox.com/v2/groups/:groupId/experiences
 * @summary Gets experiences created by the specified group id.
 * @param groupId The group Id
 * @param accessFilter The access type of the experiences.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidExperiences = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/experiences',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    accessFilter: {
      style: 'form',
      explode: true,
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
 * @api GET https://groups.roblox.com/v2/groups/:groupId/relationships/:groupRelationshipType
 * @summary Gets a group's relationships with cursor-based pagination.
 * @param groupId The group Id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidRelationshipsGrouprelationshiptype = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/relationships/:groupRelationshipType',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
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
    groupRelationshipType: z.string(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Groups_Api_Models_Response_GroupRelationshipsV2Response,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
4: Group relationship type or request type is invalid.
8: Invalid or missing pagination parameters`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v2/groups/:groupId/relationships/:groupRelationshipType/requests
 * @summary Gets a group's relationship requests with cursor-based pagination.
 * @param groupId The group Id.
 * @param groupRelationshipType The group relationship type of the request, only allies are supported.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidRelationshipsGrouprelationshiptypeRequests = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
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
    groupRelationshipType: z.string(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Groups_Api_Models_Response_GroupRelationshipsV2Response,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
4: Group relationship type or request type is invalid.
8: Invalid or missing pagination parameters`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `5: You don&#x27;t have permission to manage this group&#x27;s relationships.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v2/users/:userId/groups/roles
 * @summary Gets a list of all group roles for groups the specified user is in.
 * @param userId The user id.
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
    discoveryType: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    includeLocked: z.boolean(),
    includeNotificationPreferences: z.boolean(),
    discoveryType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
    },
  ],
});
