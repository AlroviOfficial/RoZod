import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Groups_Client_GroupFeaturedContentResponse = z.object({
  groupId: z.number().int(),
  contentType: z.string(),
  contentId: z.string(),
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
const Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem = z
  .object({
    actor: Roblox_Groups_Api_UserGroupRoleResponse,
    actionType: z.string(),
    description: z.object({}),
    created: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Groups_Api_GroupAuditLogPageResponse_Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem_ =
  z.object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem),
  });
const Roblox_Groups_Api_GroupJoinRequestResponse = z.object({
  requester: Roblox_Groups_Api_Models_Response_UserModel,
  created: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupJoinRequestResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupJoinRequestResponse),
});
const Roblox_Groups_Api_MembersRequest = z.object({
  UserIds: z.array(z.number()),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Groups_Api_GroupPostsPermissionsModel = z.object({
  viewWall: z.boolean(),
  postToWall: z.boolean(),
  deleteFromWall: z.boolean(),
  viewStatus: z.boolean(),
  postToStatus: z.boolean(),
});
const Roblox_Groups_Api_GroupForumsPermissionsModel = z.object({
  manageCategories: z.boolean(),
  createPosts: z.boolean(),
  removePosts: z.boolean(),
  lockPosts: z.boolean(),
  pinPosts: z.boolean(),
  createComments: z.boolean(),
  removeComments: z.boolean(),
});
const Roblox_Groups_Api_GroupMembershipPermissionsModel = z.object({
  changeRank: z.boolean(),
  inviteMembers: z.boolean(),
  removeMembers: z.boolean(),
  banMembers: z.boolean(),
});
const Roblox_Groups_Api_GroupManagementPermissionsModel = z.object({
  manageRelationships: z.boolean(),
  manageClan: z.boolean(),
  viewAuditLogs: z.boolean(),
});
const Roblox_Groups_Api_GroupEconomyPermissionsModel = z.object({
  spendGroupFunds: z.boolean(),
  advertiseGroup: z.boolean(),
  createItems: z.boolean(),
  manageItems: z.boolean(),
  addGroupPlaces: z.boolean(),
  manageGroupGames: z.boolean(),
  viewGroupPayouts: z.boolean(),
  viewAnalytics: z.boolean(),
});
const Roblox_Groups_Api_GroupOpenCloudPermissionsModel = z.object({
  useCloudAuthentication: z.boolean(),
  administerCloudAuthentication: z.boolean(),
});
const Roblox_Groups_Api_GroupPermissionsModel = z.object({
  groupPostsPermissions: Roblox_Groups_Api_GroupPostsPermissionsModel,
  groupForumsPermissions: Roblox_Groups_Api_GroupForumsPermissionsModel,
  groupMembershipPermissions: Roblox_Groups_Api_GroupMembershipPermissionsModel,
  groupManagementPermissions: Roblox_Groups_Api_GroupManagementPermissionsModel,
  groupEconomyPermissions: Roblox_Groups_Api_GroupEconomyPermissionsModel,
  groupOpenCloudPermissions: Roblox_Groups_Api_GroupOpenCloudPermissionsModel,
});
const Roblox_Groups_Api_GroupNotificationPreferenceData = z.object({
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  enabled: z.boolean(),
  name: z.string(),
  description: z.string(),
});
const Roblox_Groups_Api_GroupMembershipMetadataResponse = z.object({
  groupId: z.number().int(),
  isPrimary: z.boolean(),
  isPendingJoin: z.boolean(),
  userRole: Roblox_Groups_Api_UserGroupRoleResponse,
  permissions: Roblox_Groups_Api_GroupPermissionsModel,
  areGroupGamesVisible: z.boolean(),
  areGroupFundsVisible: z.boolean(),
  areEnemiesAllowed: z.boolean(),
  canConfigure: z.boolean(),
  isNotificationsEnabled: z.boolean(),
  notificationPreferences: z.array(Roblox_Groups_Api_GroupNotificationPreferenceData),
  isBannedFromGroup: z.boolean(),
  isBanEvading: z.boolean(),
});
const Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem = z.object({
  name: z.string(),
  created: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem_ =
  z.object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem),
  });
const Roblox_Groups_Api_GroupPayoutRestrictionResponse = z.object({
  canUseRecurringPayout: z.boolean(),
  canUseOneTimePayout: z.boolean(),
});
const Roblox_Groups_Api_GroupPayoutResponse = z.object({
  user: Roblox_Groups_Api_Models_Response_UserModel,
  percentage: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPayoutResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupPayoutResponse),
});
const Roblox_Groups_Api_PayoutRecipientRequest = z.object({
  recipientId: z.number().int(),
  recipientType: z.union([z.literal(0), z.literal(1)]),
  amount: z.number().int(),
});
const Roblox_Groups_Api_PayoutRequest = z.object({
  PayoutType: z.union([z.literal(1), z.literal(2)]),
  Recipients: z.array(Roblox_Groups_Api_PayoutRecipientRequest),
});
const Roblox_Groups_Api_GroupRelationshipsResponse = z.object({
  groupId: z.number().int(),
  relationshipType: z.union([z.literal(1), z.literal(2)]),
  totalGroupCount: z.number().int(),
  relatedGroups: z.array(Roblox_Groups_Api_GroupDetailResponse),
  nextRowIndex: z.number().int(),
});
const Roblox_Groups_Api_RelationshipsRequest = z.object({
  GroupIds: z.array(z.number()),
});
const Roblox_Groups_Api_GroupAllRolesResponse = z.object({
  groupId: z.number().int(),
  roles: z.array(Roblox_Groups_Api_GroupRoleResponse),
});
const Roblox_Groups_Api_GroupPermissionsResponse = z.object({
  groupId: z.number().int(),
  role: Roblox_Groups_Api_GroupRoleResponse,
  permissions: Roblox_Groups_Api_GroupPermissionsModel,
});
const Roblox_Groups_Api_UpdatePermissionsRequest_permissions = z.object({
  DeleteFromWall: z.boolean(),
  PostToWall: z.boolean(),
  InviteMembers: z.boolean(),
  PostToStatus: z.boolean(),
  RemoveMembers: z.boolean(),
  BanMembers: z.boolean(),
  ViewStatus: z.boolean(),
  ViewWall: z.boolean(),
  ChangeRank: z.boolean(),
  AdvertiseGroup: z.boolean(),
  ManageRelationships: z.boolean(),
  AddGroupPlaces: z.boolean(),
  ViewAuditLogs: z.boolean(),
  CreateItems: z.boolean(),
  ManageItems: z.boolean(),
  SpendGroupFunds: z.boolean(),
  ManageClan: z.boolean(),
  ManageGroupGames: z.boolean(),
  UseCloudAuthentication: z.boolean(),
  AdministerCloudAuthentication: z.boolean(),
  ViewAnalytics: z.boolean(),
  ManageCategories: z.boolean(),
  CreatePosts: z.boolean(),
  RemovePosts: z.boolean(),
  LockPosts: z.boolean(),
  PinPosts: z.boolean(),
  CreateComments: z.boolean(),
  RemoveComments: z.boolean(),
});
const Roblox_Groups_Api_UpdatePermissionsRequest = z.object({
  permissions: Roblox_Groups_Api_UpdatePermissionsRequest_permissions,
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_UserModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_Models_Response_UserModel),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPermissionsResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupPermissionsResponse),
});
const Roblox_Groups_Api_GroupSettingsResponse = z.object({
  isApprovalRequired: z.boolean(),
  isBuildersClubRequired: z.boolean(),
  areEnemiesAllowed: z.boolean(),
  areGroupFundsVisible: z.boolean(),
  areGroupGamesVisible: z.boolean(),
  isGroupNameChangeEnabled: z.boolean(),
});
const Roblox_Groups_Api_UpdateGroupSettingsRequest = z.object({
  isApprovalRequired: z.boolean(),
  areEnemiesAllowed: z.boolean(),
  areGroupFundsVisible: z.boolean(),
  areGroupGamesVisible: z.boolean(),
});
const Roblox_Groups_Api_SocialLinkResponse = z.object({
  id: z.number().int(),
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
  url: z.string(),
  title: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_SocialLinkResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_SocialLinkResponse),
});
const Roblox_Groups_Api_SocialLinkRequest = z.object({
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
  ]),
  url: z.string(),
  title: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_UserGroupRoleResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_UserGroupRoleResponse),
});
const Roblox_Groups_Api_JoinGroupRequest = z.object({
  sessionId: z.string(),
  redemptionToken: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Groups_Api_Models_Response_GroupWallPostModel = z.object({
  id: z.number().int(),
  poster: Roblox_Groups_Api_Models_Response_UserModel,
  body: z.string(),
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupWallPostModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_Models_Response_GroupWallPostModel),
});
const Roblox_Groups_Api_CreateWallPostRequest = z.object({
  body: z.string(),
  captchaId: z.string(),
  captchaToken: z.string(),
  captchaProvider: z.string(),
  challengeId: z.string(),
});
const Roblox_Groups_Api_GroupConfigurationResponse = z.object({
  nameMaxLength: z.number().int(),
  descriptionMaxLength: z.number().int(),
  iconMaxFileSizeMb: z.number().int(),
  cost: z.number().int(),
  isUsingTwoStepWebviewComponent: z.boolean(),
});
const Roblox_Groups_Api_RecurringPayoutsConfigurationResponse = z.object({
  maxPayoutPartners: z.number().int(),
});
const Roblox_Groups_Api_RoleConfigurationResponse = z.object({
  nameMaxLength: z.number().int(),
  descriptionMaxLength: z.number().int(),
  limit: z.number().int(),
  cost: z.number().int(),
  minRank: z.number().int(),
  maxRank: z.number().int(),
});
const Roblox_Groups_Api_GroupNameChangeConfigurationResponse = z.object({
  cost: z.number().int(),
  cooldownInDays: z.number().int(),
  ownershipCooldownInDays: z.number().int(),
});
const Roblox_Groups_Api_GroupConfigurationDisplayOptionsResponse = z.object({
  groupConfiguration: Roblox_Groups_Api_GroupConfigurationResponse,
  recurringPayoutsConfiguration: Roblox_Groups_Api_RecurringPayoutsConfigurationResponse,
  roleConfiguration: Roblox_Groups_Api_RoleConfigurationResponse,
  groupNameChangeConfiguration: Roblox_Groups_Api_GroupNameChangeConfigurationResponse,
  isPremiumPayoutsEnabled: z.boolean(),
  isDefaultEmblemPolicyEnabled: z.boolean(),
});
const Roblox_Groups_Api_GroupsDisplayOptionsResponse = z.object({
  groupLimit: z.number().int(),
  currentGroupCount: z.number().int(),
  groupStatusMaxLength: z.number().int(),
  groupPostMaxLength: z.number().int(),
  isGroupWallNotificationsEnabled: z.boolean(),
  groupWallNotificationsSubscribeIntervalInMilliseconds: z.number().int(),
  areProfileGroupsHidden: z.boolean(),
  isGroupDetailsPolicyEnabled: z.boolean(),
  showPreviousGroupNames: z.boolean(),
  areGroupBansEnabled: z.boolean(),
  canEnableGroupNotifications: z.boolean(),
});
const Roblox_Groups_Api_GroupSearchResponseItem = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  memberCount: z.number().int(),
  previousName: z.string(),
  publicEntryAllowed: z.boolean(),
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Groups_Api_GroupSearchPageResponse = z.object({
  keyword: z.string(),
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Groups_Api_GroupSearchResponseItem),
});
const Roblox_Web_Responses_Groups_GroupBasicResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  memberCount: z.number().int(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupBasicResponse_ = z.object({
  data: z.array(Roblox_Web_Responses_Groups_GroupBasicResponse),
});
const Roblox_Groups_Api_GroupSearchMetadataResponse = z.object({
  SuggestedGroupKeywords: z.array(z.string()),
  ShowFriendsGroupsSort: z.boolean(),
});
const Roblox_Groups_Api_GroupRoleDetailResponse = z.object({
  groupId: z.number().int(),
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
  memberCount: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupRoleDetailResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupRoleDetailResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupDetailResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupDetailResponse),
});
const Roblox_Groups_Api_GroupMembershipDetailResponse = z.object({
  group: Roblox_Groups_Api_GroupDetailResponse,
  role: Roblox_Groups_Api_GroupRoleResponse,
  isPrimaryGroup: z.boolean(),
  isNotificationsEnabled: z.boolean(),
  notificationPreferences: z.array(Roblox_Groups_Api_GroupNotificationPreferenceData),
});
const Roblox_Groups_Api_UserGroupMembershipResponse = z.object({
  user: Roblox_Groups_Api_Models_Response_UserModel,
  groups: z.array(Roblox_Groups_Api_GroupMembershipDetailResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_UserGroupMembershipResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_UserGroupMembershipResponse),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipDetailResponse_ = z.object({
  data: z.array(Roblox_Groups_Api_GroupMembershipDetailResponse),
});
const Roblox_Groups_Api_ChangeOwnerRequest = z.object({
  userId: z.number().int(),
});
const Roblox_Groups_Api_Models_Request_CreateRoleSetRequest = z.object({
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
  usingGroupFunds: z.boolean(),
});
const groups_create_body = z.object({
  name: z.string(),
  description: z.string(),
  publicGroup: z.boolean(),
  buildersClubMembersOnly: z.boolean(),
  Files: z.instanceof(File),
});
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
const Roblox_Groups_Api_GroupPolicyRequest = z.object({
  groupIds: z.array(z.number()),
});
const Roblox_Groups_Api_GroupPolicyResponse = z.object({
  canViewGroup: z.boolean(),
  groupId: z.number().int(),
});
const Roblox_Groups_Api_GroupPoliciesResponse = z.object({
  groups: z.array(Roblox_Groups_Api_GroupPolicyResponse),
});
const Roblox_Groups_Api_PrimaryGroupRequest = z.object({
  groupId: z.number().int(),
});
const Roblox_Groups_Api_UpdateGroupDescriptionRequest = z.object({
  description: z.string(),
});
const Roblox_Groups_Api_GroupDescriptionResponse = z.object({
  newDescription: z.string(),
});
const Roblox_Groups_Api_UpdateGroupNameRequest = z.object({ name: z.string() });
const Roblox_Groups_Api_UpdateGroupNameResponse = z.object({
  newName: z.string(),
});
const Roblox_Groups_Api_UpdateGroupNotificationPreferenceRequest = z.object({
  notificationsEnabled: z.boolean(),
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});
const Roblox_Groups_Api_Models_Request_UpdateRoleSetRequest = z.object({
  name: z.string(),
  description: z.string(),
  rank: z.number().int(),
});
const Roblox_Groups_Api_PostGroupStatusRequest = z.object({
  message: z.string(),
});
const Roblox_Groups_Api_UpdateUserRoleRequest = z.object({
  roleId: z.number().int(),
});
const groups_icon_body = z.object({ Files: z.instanceof(File) });

/**
 * @api GET https://groups.roblox.com/v1/featured-content/event
 * @summary Gets the featured event for a group
 * @param groupId The group Id.
 */
export const getFeaturedContentEvent = endpoint({
  method: 'get',
  path: '/v1/featured-content/event',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Client_GroupFeaturedContentResponse,
  errors: [],
});
/**
 * @api POST https://groups.roblox.com/v1/featured-content/event
 * @summary Sets the featured event for a group
 * @param groupId The group Id.
 * @param eventId The event Id.
 */
export const postFeaturedContentEvent = endpoint({
  method: 'post',
  path: '/v1/featured-content/event',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'form',
      explode: true,
    },
    eventId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    eventId: z.number().int(),
  },
  response: Roblox_Groups_Client_GroupFeaturedContentResponse,
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed
3: User is not authorized to set featured content for this group.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/featured-content/event
 * @summary Deletes the featured event for a group
 * @param groupId The group Id.
 * @param eventId The event Id.
 */
export const deleteFeaturedContentEvent = endpoint({
  method: 'delete',
  path: '/v1/featured-content/event',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'form',
      explode: true,
    },
    eventId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    eventId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 403,
      description: `0: Token Validation Failed
3: User is not authorized to set featured content for this group.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId
 * @summary Gets group information
 * @param groupId The group Id.
 */
export const getGroupsGroupid = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupDetailResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/audit-log
 * @summary Gets the Group's audit log
 * @param groupId The id of the group the user is in.
 * @param actionType
 * @param userId Filter for specific user id
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidAuditLog = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/audit-log',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    actionType: {
      style: 'form',
      explode: true,
    },
    userId: {
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
    actionType: z
      .enum([
        'DeletePost',
        'RemoveMember',
        'AcceptJoinRequest',
        'DeclineJoinRequest',
        'PostStatus',
        'ChangeRank',
        'BuyAd',
        'SendAllyRequest',
        'CreateEnemy',
        'AcceptAllyRequest',
        'DeclineAllyRequest',
        'DeleteAlly',
        'DeleteEnemy',
        'AddGroupPlace',
        'RemoveGroupPlace',
        'CreateItems',
        'ConfigureItems',
        'SpendGroupFunds',
        'ChangeOwner',
        'Delete',
        'AdjustCurrencyAmounts',
        'Abandon',
        'Claim',
        'Rename',
        'ChangeDescription',
        'InviteToClan',
        'KickFromClan',
        'CancelClanInvite',
        'BuyClan',
        'CreateGroupAsset',
        'UpdateGroupAsset',
        'ConfigureGroupAsset',
        'RevertGroupAsset',
        'CreateGroupDeveloperProduct',
        'ConfigureGroupGame',
        'CreateGroupDeveloperSubscriptionProduct',
        'Lock',
        'Unlock',
        'CreateGamePass',
        'CreateBadge',
        'ConfigureBadge',
        'SavePlace',
        'PublishPlace',
        'UpdateRolesetRank',
        'UpdateRolesetData',
        'BanMember',
        'UnbanMember',
      ])
      .optional(),
    userId: z.number().int().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Groups_Api_GroupAuditLogPageResponse_Roblox_Groups_Api_Models_Response_GroupAuditLogResponseItem_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
8: Invalid or missing pagination parameters`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `23: Insufficient permissions to complete the request.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/change-owner
 * @summary Changes the group owner to another user.
 * @param body The request.
 * @param groupId The group Id.
 */
export const postGroupsGroupidChangeOwner = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/change-owner',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: z.object({ userId: z.number().int() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.
15: User is not a member of the group.
16: The user does not have the necessary level of premium membership.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
17: You are not authorized to change the owner of this group.
25: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/claim-ownership
 * @summary Claims ownership of the group as the authenticated user
 * @param groupId The group Id.
 */
export const postGroupsGroupidClaimOwnership = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/claim-ownership',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
11: You are not authorized to claim this group
12: This group already has an owner
13: Too many attempts to claim groups. Please try again later.`,
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/description
 * @summary Updates the groups description
 * @param body The Roblox.Groups.Api.UpdateGroupDescriptionRequest.
 * @param groupId The id of the group the user is in.
 */
export const patchGroupsGroupidDescription = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/description',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: z.object({ description: z.string() }),
  response: z.object({ newDescription: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
29: Your group description was empty.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
18: The description is too long.
23: Insufficient permissions to complete the request.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/join-requests
 * @summary Gets a page of Group Join Requests for a group.
 * @param groupId The group id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidJoinRequests = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/join-requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_GroupJoinRequestResponse_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `19: You have insufficient permissions for this request.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/join-requests
 * @summary Batch accepts group join requests
 * @param body The Roblox.Groups.Api.MembersRequest.
 * @param groupId The group id.
 */
export const postGroupsGroupidJoinRequests = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/join-requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_MembersRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.
20: The group join request is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are already in the maximum number of groups.
19: You have insufficient permissions for this request.`,
    },
    {
      status: 500,
      description: `0: Something went wrong.`,
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/join-requests
 * @summary Batch declines group join requests
 * @param body The Roblox.Groups.Api.MembersRequest.
 * @param groupId The group id.
 */
export const deleteGroupsGroupidJoinRequests = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/join-requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_MembersRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.`,
    },
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
 * @api GET https://groups.roblox.com/v1/groups/:groupId/join-requests/users/:userId
 * @summary Gets a group join request by userId.
 * @param groupId The group Id.
 * @param userId The user Id.
 */
export const getGroupsGroupidJoinRequestsUsersUserid = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/join-requests/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupJoinRequestResponse,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `19: You have insufficient permissions for this request.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/join-requests/users/:userId
 * @summary Accepts a group join request.
 * @param groupId The group Id.
 * @param userId The user Id.
 */
export const postGroupsGroupidJoinRequestsUsersUserid = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/join-requests/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.
20: The group join request is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are already in the maximum number of groups.
19: You have insufficient permissions for this request.`,
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/join-requests/users/:userId
 * @summary Declines/cancels a group join request.
 * @param groupId The group Id.
 * @param userId The user Id.
 */
export const deleteGroupsGroupidJoinRequestsUsersUserid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/join-requests/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: You do not have permission to manage this member.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/membership
 * @summary Gets group membership information in the context of the authenticated user
 * @param groupId The group Id.
 * @param includeNotificationPreferences
 */
export const getGroupsGroupidMembership = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/membership',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    includeNotificationPreferences: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    includeNotificationPreferences: z.boolean(),
  },
  response: Roblox_Groups_Api_GroupMembershipMetadataResponse,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/name
 * @summary Updates the group's name.
 * @param body The Roblox.Groups.Api.UpdateGroupNameRequest.
 * @param groupId The id of the group the user is in.
 * @description This endpoint will charge Robux for the group rename.
 */
export const patchGroupsGroupidName = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/name',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: z.object({ name: z.string() }),
  response: z.object({ newName: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
13: The name is invalid.
19: The name is too long.
20: The name has been taken.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
12: Insufficient Robux funds.
14: The name is moderated.
23: Insufficient permissions to complete the request.
38: Your account must be verified in order to change your group&#x27;s name.
39: The group ownership was changed too recently.`,
    },
    {
      status: 409,
      description: `36: The name was changed too recently.
37: The name was in use too recently.`,
    },
    {
      status: 413,
      description: `0: Unknown error.`,
    },
    {
      status: 429,
      description: `17: Too many requests.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/name-history
 * @summary Gets the Group's name change history.
 * @param groupId The id of the group.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidNameHistory = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/name-history',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupNameHistoryResponseItem_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 403,
      description: `23: Insufficient permissions to complete the request.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/notification-preference
 * @summary Updates the group's settings
 * @param body Roblox.Groups.Api.UpdateGroupSettingsRequest
 * @param groupId The id of the group the user is in.
 */
export const patchGroupsGroupidNotificationPreference = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/notification-preference',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_UpdateGroupNotificationPreferenceRequest,
  response: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
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
 * @api GET https://groups.roblox.com/v1/groups/:groupId/payout-restriction
 * @summary Gets a value indicating whether the group can use payout feature
 * @param groupId The group id.
 */
export const getGroupsGroupidPayoutRestriction = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/payout-restriction',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPayoutRestrictionResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `9: You don&#x27;t have permission to view this group&#x27;s payouts.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/payouts
 * @summary Gets a list of the group payout percentages
 * @param groupId The group id.
 */
export const getGroupsGroupidPayouts = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/payouts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPayoutResponse_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `9: You don&#x27;t have permission to view this group&#x27;s payouts.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/payouts
 * @summary Pays out a user in Robux.
 * @param body The Roblox.Groups.Api.PayoutRequest.
 * @param groupId The group Id.
 */
export const postGroupsGroupidPayouts = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/payouts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_PayoutRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
12: Insufficient Robux funds.
24: Invalid payout type.
25: The amount is invalid.
26: Too many recipients.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
23: Insufficient permissions to complete the request.
28: Group has paid out too recently. Please wait and try again.
35: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
    },
    {
      status: 503,
      description: `22: The feature is disabled.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/payouts/recurring
 * @summary Updates recurring payouts.
 * @param body The Roblox.Groups.Api.PayoutRequest.
 * @param groupId The group Id.
 * @description This endpoint will remove any recipients not sent in the request.
If a recipient in the request is not a valid member in the group they will not be added to the recurring payouts.
 */
export const postGroupsGroupidPayoutsRecurring = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/payouts/recurring',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_PayoutRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
24: Invalid payout type.
25: The amount is invalid.
26: Too many recipients.
27: The recipients are invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
12: Insufficient Robux funds.
28: Group has paid out too recently. Please wait and try again.
35: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
    },
    {
      status: 503,
      description: `22: The feature is disabled.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType
 * @summary Gets a group's relationships
 * @param groupId The group Id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param StartRowIndex The start index of the page request
 * @param MaxRows The maximum number of rows for the page request, should be at least 1.
 */
export const getGroupsGroupidRelationshipsGrouprelationshiptype = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
    StartRowIndex: {
      style: 'form',
      explode: true,
    },
    MaxRows: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    StartRowIndex: z.number().int(),
    MaxRows: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupRelationshipsResponse,
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
 * @api POST https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId
 * @summary Create a group relationship.
 * @param groupId The group id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param relatedGroupId The id of the group you want to create a relationship with.
 */
export const postGroupsGroupidRelationshipsGrouprelationshiptypeRelatedgroupid = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
    relatedGroupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group relationship type or request type is invalid.
2: Invalid group.
3: Target group is invalid or does not exist.
4: Your group cannot establish a relationship with itself.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: Your group does not allow enemy declarations.
6: Other group does not allow enemy declarations.
7: Your group already has a relationship with the target group.
8: You are blocked from communicating with this user.
9: Insufficient permissions.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId
 * @summary Deletes a group relationship.
 * @param groupId The group id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param relatedGroupId The id of the group you want to delete the relationship with.
 */
export const deleteGroupsGroupidRelationshipsGrouprelationshiptypeRelatedgroupid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
    relatedGroupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: Invalid group.
3: Target group is invalid or does not exist.
11: Relationship does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
8: You are blocked from communicating with this user.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests
 * @summary Gets a group's relationship requests
 * @param groupId The group Id.
 * @param groupRelationshipType The group relationship type of the request, only allies are supported.
 * @param StartRowIndex The start index of the page request
 * @param MaxRows The maximum number of rows for the page request, should be at least 1.
 */
export const getGroupsGroupidRelationshipsGrouprelationshiptypeRequests = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
    StartRowIndex: {
      style: 'form',
      explode: true,
    },
    MaxRows: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    StartRowIndex: z.number().int(),
    MaxRows: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupRelationshipsResponse,
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
 * @api POST https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests
 * @summary Batch accepts group affiliate requests
 * @param body The Roblox.Groups.Api.RelationshipsRequest.
 * @param groupId The group id.
 * @param groupRelationshipType The type of group relationship being made
 */
export const postGroupsGroupidRelationshipsGrouprelationshiptypeRequests = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
  },
  body: Roblox_Groups_Api_RelationshipsRequest,
  response: z.object({}),
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
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests
 * @summary Batch declines group affiliate requests
 * @param body The Roblox.Groups.Api.RelationshipsRequest.
 * @param groupId The group id.
 * @param groupRelationshipType The type of group relationship being made
 */
export const deleteGroupsGroupidRelationshipsGrouprelationshiptypeRequests = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
  },
  body: Roblox_Groups_Api_RelationshipsRequest,
  response: z.object({}),
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
 * @api POST https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId
 * @summary Accepts a group relationship request.
 * @param groupId The group id.
 * @param groupRelationshipType The group relationship type, enemies or allies, only allies are supported.
 * @param relatedGroupId The id of the group you want to accept the relationship request with.
 */
export const postGroupsGroupidRelationshipsGrouprelationshiptypeRequestsRelatedgroupid = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
    relatedGroupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group relationship type or request type is invalid.
2: Invalid group.
3: Target group is invalid or does not exist.
10: Relationship request does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
9: Insufficient permissions.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId
 * @summary Declines a group relationship request.
 * @param groupId The group id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param relatedGroupId The id of the group you want to accept the relationship request with.
 */
export const deleteGroupsGroupidRelationshipsGrouprelationshiptypeRequestsRelatedgroupid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/relationships/:groupRelationshipType/requests/:relatedGroupId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    groupRelationshipType: {
      style: 'simple',
    },
    relatedGroupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    groupRelationshipType: z.string(),
    relatedGroupId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group relationship type or request type is invalid.
2: Invalid group.
3: Target group is invalid or does not exist.
10: Relationship request does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
9: Insufficient permissions.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/roles
 * @summary Gets a list of the rolesets in a group.
 * @param groupId The group id.
 */
export const getGroupsGroupidRoles = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupAllRolesResponse,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/roles/:roleSetId/permissions
 * @summary Gets the permissions for a group's roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
 * @param groupId The group id.
 * @param roleSetId The group's role set id.
 */
export const getGroupsGroupidRolesRolesetidPermissions = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/roles/:roleSetId/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    roleSetId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    roleSetId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
2: The roleset is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `3: You are not authorized to view/edit permissions for this role.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/roles/:roleSetId/permissions
 * @summary Updates the permissions for a group's roleset. The authorized user must be the group owner.
 * @param body The request.
 * @param groupId The group's id.
 * @param roleSetId The roleset's id.
 */
export const patchGroupsGroupidRolesRolesetidPermissions = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/roles/:roleSetId/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
    roleSetId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    roleSetId: z.number().int(),
  },
  body: Roblox_Groups_Api_UpdatePermissionsRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
2: The roleset is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: You are not authorized to view/edit permissions for this role.
4: This role&#x27;s permissions can not be modified.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/roles/:roleSetId/users
 * @summary Gets a list of users in a group for a specific roleset.
 * @param groupId The group id.
 * @param roleSetId The group's role set id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidRolesRolesetidUsers = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/roles/:roleSetId/users',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    roleSetId: {
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
    roleSetId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_UserModel_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 403,
      description: `2: The roleset is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/roles/guest/permissions
 * @summary Gets the permissions for a group's guest roleset. These can be viewed by all (members and guests) users.
 * @param groupId The group id.
 */
export const getGroupsGroupidRolesGuestPermissions = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/roles/guest/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/roles/permissions
 * @summary Gets all permissions for each role
 * @param groupId The group id.
 */
export const getGroupsGroupidRolesPermissions = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/roles/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupPermissionsResponse_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/rolesets/:rolesetId
 * @summary Deletes existing group roleset.
 * @param groupId The group Id.
 * @param rolesetId The roleset Id.
 */
export const deleteGroupsGroupidRolesetsRolesetid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/rolesets/:rolesetId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    rolesetId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    rolesetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `10: This group does not exist.
15: This role does not exist.
17: Cannot remove any more roles
18: Cannot delete this role.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
9: You do not have permissions to perform this action.
16: There are users in this role.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/rolesets/:rolesetId
 * @summary Updates existing group roleset.
 * @param body The Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest.
 * @param groupId The group Id.
 * @param rolesetId The roleset Id.
 */
export const patchGroupsGroupidRolesetsRolesetid = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/rolesets/:rolesetId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
    rolesetId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    rolesetId: z.number().int(),
  },
  body: Roblox_Groups_Api_Models_Request_UpdateRoleSetRequest,
  response: Roblox_Groups_Api_GroupRoleResponse,
  errors: [
    {
      status: 400,
      description: `5: Role name already exists.
6: Rank value is out of bounds.
7: The role name is too long.
8: The role description is too long.
10: This group does not exist.
14: Role name can not be empty.
15: This role does not exist.
19: Cannot update Guest role.
20: Cannot update Owner role rank.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
9: You do not have permissions to perform this action.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/rolesets/create
 * @summary Creates new group roleset.
 * @param body The Roblox.Groups.Api.Models.Request.CreateRoleSetRequest.
 * @param groupId The group Id.
 */
export const postGroupsGroupidRolesetsCreate = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/rolesets/create',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_Models_Request_CreateRoleSetRequest,
  response: Roblox_Groups_Api_GroupRoleResponse,
  errors: [
    {
      status: 400,
      description: `0: Something went wrong.
3: You do not have enough funds to purchase this role.
5: Role name already exists.
6: Rank value is out of bounds.
7: The role name is too long.
8: The role description is too long.
10: This group does not exist.
11: Failed to process payment to purchase role.
12: Limit for roles have been reached on this group.
14: Role name can not be empty.
15: This role does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
9: You do not have permissions to perform this action.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/settings
 * @summary Gets the Group's settings
 * @param groupId The id of the group the user is in.
 */
export const getGroupsGroupidSettings = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/settings',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupSettingsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `23: Insufficient permissions to complete the request.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/settings
 * @summary Updates the group's settings
 * @param body Roblox.Groups.Api.UpdateGroupSettingsRequest
 * @param groupId The id of the group the user is in.
 */
export const patchGroupsGroupidSettings = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/settings',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_UpdateGroupSettingsRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
23: Insufficient permissions to complete the request.`,
    },
    {
      status: 503,
      description: `31: Service is currently unavailable.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/social-links
 * @summary Get social link data associated with a group
 * @param groupId The Id of the game
 */
export const getGroupsGroupidSocialLinks = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/social-links',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_SocialLinkResponse_,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `13: Only users who are over thirteen years of age may edit social links.`,
    },
    {
      status: 404,
      description: `11: Social links cannot be processed as this time.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/social-links
 * @summary Posts a social links
 * @param body The Roblox.Groups.Api.SocialLinkRequest
 * @param groupId The id of the game
 */
export const postGroupsGroupidSocialLinks = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/social-links',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_SocialLinkRequest,
  response: Roblox_Groups_Api_SocialLinkResponse,
  errors: [
    {
      status: 400,
      description: `3: The social link title is too long.
4: The social link title cannot be empty.
5: The social link url cannot be empty.
7: The request was null.
9: The social link type is invalid.
12: The social link title was moderated.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to configure this social link.`,
    },
    {
      status: 404,
      description: `8: The requested group or social link was not found.`,
    },
    {
      status: 503,
      description: `11: Social links cannot be processed as this time.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/social-links/:socialLinkId
 * @summary Deletes a social link
 * @param groupId The id of the game you are editting, required for permissions checking
 * @param socialLinkId The id of the social link
 */
export const deleteGroupsGroupidSocialLinksSociallinkid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/social-links/:socialLinkId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    socialLinkId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    socialLinkId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
10: The social link is not for a group.
15: The social link id doesn&#x27;t match the group id.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to configure this social link.
13: Only users who are over thirteen years of age may edit social links.`,
    },
    {
      status: 404,
      description: `11: Social links cannot be processed as this time.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/social-links/:socialLinkId
 * @summary Updates a social link
 * @param body The Roblox.Groups.Api.SocialLinkRequest.
 * @param groupId The id of the universe
 * @param socialLinkId The id of the social link being updated
 */
export const patchGroupsGroupidSocialLinksSociallinkid = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/social-links/:socialLinkId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
    socialLinkId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    socialLinkId: z.number().int(),
  },
  body: Roblox_Groups_Api_SocialLinkRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
3: The social link title is too long.
4: The social link title cannot be empty.
5: The social link url cannot be empty.
6: The social link url was improperly formatted.
7: The request was null.
8: The requested group or social link was not found.
9: The social link type is invalid.
10: The social link is not for a group.
12: The social link title was moderated.
16: A social link with this type already exists on this group.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You do not have permission to configure this social link.`,
    },
    {
      status: 404,
      description: `11: Social links cannot be processed as this time.`,
    },
    {
      status: 503,
      description: `11: Social links cannot be processed as this time.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/status
 * @summary Sets group status
 * @param body The Roblox.Groups.Api.PostGroupStatusRequest.
 * @param groupId The group Id.
 */
export const patchGroupsGroupidStatus = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/status',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: z.object({ message: z.string() }),
  response: Roblox_Groups_Api_ShoutResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
7: Missing group status content.
32: Description was filtered.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are not authorized to set the status of this group`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/users
 * @summary Gets a list of users in a group.
 * @param groupId The group id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidUsers = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/users',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_UserGroupRoleResponse_,
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/users
 * @summary Joins a group
 * @param body Only supplied when captcha has been solved.
 * @param groupId The group Id.
 */
export const postGroupsGroupidUsers = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/users',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: Roblox_Groups_Api_JoinGroupRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
6: You are already in the maximum number of groups.
9: You do not have the builders club membership necessary to join this group.
14: You cannot join a closed group.`,
    },
    {
      status: 409,
      description: `7: You have already requested to join this group.
8: You are already a member of this group.`,
    },
    {
      status: 429,
      description: `10: Too many attempts to join the group. Please try again later.`,
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/users/:userId
 * @summary Removes a user from a group
 * @param groupId The group Id.
 * @param userId The Id of the user being removed.
 */
export const deleteGroupsGroupidUsersUserid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The user is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: You do not have permission to manage this member.
25: 2-Step Verification is required to make further transactions. Go to Settings &gt; Security to complete 2-Step Verification.`,
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/:groupId/users/:userId
 * @summary Updates a users role in a group.
 * @param body The Roblox.Groups.Api.UpdateUserRoleRequest.
 * @param groupId The id of the group the user is in.
 * @param userId The id of the user being updated.
 */
export const patchGroupsGroupidUsersUserid = endpoint({
  method: 'patch',
  path: '/v1/groups/:groupId/users/:userId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  body: z.object({ roleId: z.number().int() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
2: The roleset is invalid or does not exist.
3: The user is invalid or does not exist.
23: You cannot change your own role.
26: You cannot change the user&#x27;s role to the same role.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: You do not have permission to manage this member.`,
    },
    {
      status: 503,
      description: `18: The operation is temporarily unavailable. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/users/:userId/permissions
 * @summary Gets the permissions a user has in a group. Only available to group owner and RCC
 * @param groupId The group id.
 * @param userId The user id.
 */
export const getGroupsGroupidUsersUseridPermissions = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/users/:userId/permissions',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupPermissionsResponse,
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 403,
      description: `3: You are not authorized to view/edit permissions for this role.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/:groupId/wall/posts
 * @summary Gets a list of group wall posts.
 * @param groupId The group id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by group wall post Id
 */
export const getGroupsGroupidWallPosts = endpoint({
  method: 'get',
  path: '/v1/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
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
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Groups_Api_Models_Response_GroupWallPostModel_,
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
 * @api POST https://groups.roblox.com/v1/groups/:groupId/wall/posts
 * @summary Creates a post on a group wall
 * @param body The Roblox.Groups.Api.CreateWallPostRequest.
 * @param groupId The group id.
 */
export const postGroupsGroupidWallPosts = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/wall/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
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
  response: Roblox_Groups_Api_Models_Response_GroupWallPostModel,
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
      status: 405,
      description: `1: The group is invalid or does not exist.`,
    },
    {
      status: 429,
      description: `4: You are posting too fast, please try again in a few minutes.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/wall/posts/:postId
 * @summary Deletes a group wall post.
 * @param groupId The group id.
 * @param postId The group wall post id.
 */
export const deleteGroupsGroupidWallPostsPostid = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/wall/posts/:postId',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    postId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    postId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
3: The group wall post id is invalid or does not exist.`,
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
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/:groupId/wall/subscribe
 * @summary Subscribes the authenticated user to notifications of group wall events.
 * @param groupId The group id.
 */
export const postGroupsGroupidWallSubscribe = endpoint({
  method: 'post',
  path: '/v1/groups/:groupId/wall/subscribe',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.`,
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
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/groups/:groupId/wall/users/:userId/posts
 * @summary Deletes all group wall posts made by a specific user.
 * @param groupId The group id.
 * @param userId The user id.
 */
export const deleteGroupsGroupidWallUsersUseridPosts = endpoint({
  method: 'delete',
  path: '/v1/groups/:groupId/wall/users/:userId/posts',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    groupId: z.number().int(),
    userId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The group is invalid or does not exist.
6: The user specified is invalid or does not exist.`,
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
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/configuration/metadata
 * @summary Gets Group configuration contextual information
 */
export const getGroupsConfigurationMetadata = endpoint({
  method: 'get',
  path: '/v1/groups/configuration/metadata',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  response: Roblox_Groups_Api_GroupConfigurationDisplayOptionsResponse,
  errors: [],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/create
 * @summary Creates a new group.
 * @param body 
 * @description This endpoint will charge Robux for the group purchase.
Http status code 413 is thrown when the group icon file size is too large.
 */
export const postGroupsCreate = endpoint({
  method: 'post',
  path: '/v1/groups/create',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: groups_create_body,
  response: Roblox_Web_Responses_Groups_GroupResponseV2,
  errors: [
    {
      status: 400,
      description: `13: The name is invalid.
15: The group icon is invalid.
16: The group icon is missing from the request.
18: The description is too long.
19: The name is too long.
20: The name has been taken.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: User must have builders club membership.
11: User is in maximum number of groups.
12: Insufficient Robux funds.
14: The name is moderated.`,
    },
    {
      status: 409,
      description: `37: The name was in use too recently.`,
    },
    {
      status: 413,
      description: `0: Unknown error.`,
    },
    {
      status: 429,
      description: `17: Too many requests.`,
    },
    {
      status: 503,
      description: `21: Group creation is currently disabled.`,
    },
  ],
});
/**
 * @api PATCH https://groups.roblox.com/v1/groups/icon
 * @summary Updates the group icon.
 * @param body
 * @param groupId The group Id.
 */
export const patchGroupsIcon = endpoint({
  method: 'patch',
  path: '/v1/groups/icon',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    groupId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
  },
  body: z.object({ Files: z.instanceof(File) }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.
16: The group icon is missing from the request.
17: Too many requests.
30: Invalid file type for group icon.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
23: Insufficient permissions to complete the request.`,
    },
    {
      status: 413,
      description: `0: Unknown error.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/metadata
 * @summary Gets Groups contextual information:
Max number of groups a user can be part of.
Current number of groups a user is a member of.
Whether to show/hide certain features based on device type.
 */
export const getGroupsMetadata = endpoint({
  method: 'get',
  path: '/v1/groups/metadata',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  response: Roblox_Groups_Api_GroupsDisplayOptionsResponse,
  errors: [],
});
/**
 * @api POST https://groups.roblox.com/v1/groups/policies
 * @summary Gets group policy info used for compliance.
 * @param body
 */
export const postGroupsPolicies = endpoint({
  method: 'post',
  path: '/v1/groups/policies',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Groups_Api_GroupPolicyRequest,
  response: Roblox_Groups_Api_GroupPoliciesResponse,
  errors: [
    {
      status: 400,
      description: `1: Too many ids in request.
2: Ids could not be parsed from request.`,
    },
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
 * @api GET https://groups.roblox.com/v1/groups/search
 * @summary Search for groups by keyword.
 * @param keyword The keyword or phrase to use as the search parameter.
 * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 */
export const getGroupsSearch = endpoint({
  method: 'get',
  path: '/v1/groups/search',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    keyword: {
      style: 'form',
      explode: true,
    },
    prioritizeExactMatch: {
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
  },
  parameters: {
    keyword: z.string(),
    prioritizeExactMatch: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Groups_Api_GroupSearchPageResponse,
  errors: [
    {
      status: 400,
      description: `2: Search term not appropriate for Roblox.
3: Search term was left empty.
4: Search terms can be 2 to 50 characters long.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/search/lookup
 * @summary Looks up groups by a name. Prioritizes an exact match as the first result.
 * @param groupName The group name.
 * @description Should only be used for direct lookups where a user is inputting a group name, shouldn't be used for search pages.
 */
export const getGroupsSearchLookup = endpoint({
  method: 'get',
  path: '/v1/groups/search/lookup',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupName: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupName: z.string(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Groups_GroupBasicResponse_,
  errors: [
    {
      status: 400,
      description: `1: Name is missing or has invalid characters.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/groups/search/metadata
 * @summary Get suggested groups and other miscellaneous information needed for the group/join page like flags
 * @description Although there is no reason for this to require an authenticated user right now, in the future,
we will use coco to return different suggested groups based upon that user's request context
 */
export const getGroupsSearchMetadata = endpoint({
  method: 'get',
  path: '/v1/groups/search/metadata',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  response: Roblox_Groups_Api_GroupSearchMetadataResponse,
  errors: [
    {
      status: 404,
      description: `5: No Localized Version of group search category exists`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/roles
 * @summary Gets the Roles by their ids.
 * @param ids A list of role ids
 */
export const getRoles = endpoint({
  method: 'get',
  path: '/v1/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    ids: {
      style: 'form',
    },
  },
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupRoleDetailResponse_,
  errors: [
    {
      status: 400,
      description: `1: Ids could not be parsed from request.
2: Too many ids in request.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/user/groups/pending
 * @summary Gets groups that the authenticated user has requested to join
 */
export const getUserGroupsPending = endpoint({
  method: 'get',
  path: '/v1/user/groups/pending',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupDetailResponse_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://groups.roblox.com/v1/user/groups/primary
 * @summary Sets the authenticated user's primary group
 * @param body The request body containing the group id.
 */
export const postUserGroupsPrimary = endpoint({
  method: 'post',
  path: '/v1/user/groups/primary',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ groupId: z.number().int() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Group is invalid or does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You aren&#x27;t a member of the group specified.`,
    },
  ],
});
/**
 * @api DELETE https://groups.roblox.com/v1/user/groups/primary
 * @summary Removes the authenticated user's primary group
 */
export const deleteUserGroupsPrimary = endpoint({
  method: 'delete',
  path: '/v1/user/groups/primary',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
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
 * @api GET https://groups.roblox.com/v1/users/:userId/friends/groups/roles
 * @summary Gets a list of all groups the specified users' friends are in.
 * @param userId The user id.
 */
export const getUsersUseridFriendsGroupsRoles = endpoint({
  method: 'get',
  path: '/v1/users/:userId/friends/groups/roles',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_UserGroupMembershipResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
    },
    {
      status: 403,
      description: `3: The user is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/users/:userId/groups/primary/role
 * @summary Gets a user's primary group.
 * @param userId The user id.
 */
export const getUsersUseridGroupsPrimaryRole = endpoint({
  method: 'get',
  path: '/v1/users/:userId/groups/primary/role',
  baseUrl: 'https://groups.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Groups_Api_GroupMembershipDetailResponse,
  errors: [
    {
      status: 400,
      description: `4: User is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://groups.roblox.com/v1/users/:userId/groups/roles
 * @summary Gets a list of all group roles for groups the specified user is in.
 * @param userId The user id.
 * @param includeLocked
 * @param includeNotificationPreferences
 */
export const getUsersUseridGroupsRoles = endpoint({
  method: 'get',
  path: '/v1/users/:userId/groups/roles',
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
  },
  parameters: {
    userId: z.number().int(),
    includeLocked: z.boolean(),
    includeNotificationPreferences: z.boolean(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Groups_Api_GroupMembershipDetailResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user is invalid or does not exist.`,
    },
  ],
});
