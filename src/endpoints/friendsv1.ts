import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Friends_Api_Models_Response_FriendsPageMetadataResponse = z
  .object({
    isFriendsFilterBarEnabled: z.boolean(),
    isFriendsPageSortExperimentEnabled: z.boolean(),
    isFriendsUserDataStoreCacheEnabled: z.boolean(),
    frequentFriendSortRollout: z.number().int(),
    userName: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Friends_Api_FriendsCountResponse = z.object({ count: z.number().int() }).passthrough();
const Roblox_Friends_Api_FriendRequest = z
  .object({
    sentAt: z.string().datetime({ offset: true }),
    senderId: z.number().int(),
    sourceUniverseId: z.number().int(),
    originSourceType: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
    ]),
    contactName: z.string(),
  })
  .passthrough();
const Roblox_Friends_Api_FriendRequestResponse = z
  .object({
    friendRequest: Roblox_Friends_Api_FriendRequest,
    mutualFriendsList: z.array(z.string()),
    hasVerifiedBadge: z.boolean(),
    description: z.string(),
    created: z.string().datetime({ offset: true }),
    isBanned: z.boolean(),
    externalAppDisplayName: z.string(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_FriendRequestResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Friends_Api_FriendRequestResponse),
  })
  .passthrough();
const Roblox_Friends_Api_Models_Response_UserRecommendation = z
  .object({
    userId: z.number().int(),
    userName: z.string(),
    userProfilePageUrl: z.string(),
    userPresenceType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  })
  .passthrough();
const Roblox_Friends_Api_Models_Response_UserRecommendationsResponse = z
  .object({
    recommendedUsers: z.array(Roblox_Friends_Api_Models_Response_UserRecommendation),
  })
  .passthrough();
const Roblox_Friends_Api_PendingFriendRequestCountModel = z.object({ count: z.number().int() }).passthrough();
const Roblox_Friends_Api_Models_Response_UserResponse = z
  .object({
    isOnline: z.boolean(),
    presenceType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    isDeleted: z.boolean(),
    friendFrequentScore: z.number().int(),
    friendFrequentRank: z.number().int(),
    hasVerifiedBadge: z.boolean(),
    description: z.string(),
    created: z.string().datetime({ offset: true }),
    isBanned: z.boolean(),
    externalAppDisplayName: z.string(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Friends_Api_Models_Response_UserResponse),
  })
  .passthrough();
const Roblox_Friends_Api_FollowCountResponse = z.object({ count: z.number().int() }).passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_ = z
  .object({ data: z.array(Roblox_Friends_Api_Models_Response_UserResponse) })
  .passthrough();
const Roblox_Friends_Api_Models_Response_UserPresenceResponseModel = z
  .object({
    UserPresenceType: z.string(),
    UserLocationType: z.string(),
    lastLocation: z.string(),
    placeId: z.number().int(),
    rootPlaceId: z.number().int(),
    gameInstanceId: z.string().uuid(),
    universeId: z.number().int(),
    lastOnline: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Friends_Api_Models_Response_UserPresenceResponse = z
  .object({
    userPresence: Roblox_Friends_Api_Models_Response_UserPresenceResponseModel,
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserPresenceResponse_ = z
  .object({
    data: z.array(Roblox_Friends_Api_Models_Response_UserPresenceResponse),
  })
  .passthrough();
const Roblox_Friends_Api_FriendStatusResponse = z
  .object({
    id: z.number().int(),
    status: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_FriendStatusResponse_ = z
  .object({ data: z.array(Roblox_Friends_Api_FriendStatusResponse) })
  .passthrough();
const Roblox_Friends_Api_CaptchaStatusResponseModel = z
  .object({ success: z.boolean(), isCaptchaRequired: z.boolean() })
  .passthrough();
const Roblox_Friends_Api_FollowingExistsRequestModel = z.object({ targetUserIds: z.array(z.number()) }).passthrough();
const Roblox_Friends_Api_Models_Response_FollowingExistsResponse = z
  .object({
    isFollowing: z.boolean(),
    isFollowed: z.boolean(),
    userId: z.number().int(),
  })
  .passthrough();
const Roblox_Friends_Api_Models_Response_FollowingExistsResponseModel = z
  .object({
    followings: z.array(Roblox_Friends_Api_Models_Response_FollowingExistsResponse),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Friends_Api_Models_Request_FriendingTokenRequestModel = z
  .object({ friendingToken: z.string() })
  .passthrough();
const Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest = z
  .object({
    captchaId: z.string(),
    captchaToken: z.string(),
    captchaProvider: z.string(),
    challengeId: z.string(),
  })
  .passthrough();
const Roblox_Friends_Api_RecountResponse = z
  .object({
    existingCount: z.number().int(),
    computedCount: z.number().int(),
    updated: z.boolean(),
  })
  .passthrough();
const Roblox_Friends_Api_FriendshipRequestModel = z
  .object({
    friendshipOriginSourceType: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
    ]),
  })
  .passthrough();

const schemas = {
  Roblox_Friends_Api_Models_Response_FriendsPageMetadataResponse,
  Roblox_Friends_Api_FriendsCountResponse,
  Roblox_Friends_Api_FriendRequest,
  Roblox_Friends_Api_FriendRequestResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_FriendRequestResponse_,
  Roblox_Friends_Api_Models_Response_UserRecommendation,
  Roblox_Friends_Api_Models_Response_UserRecommendationsResponse,
  Roblox_Friends_Api_PendingFriendRequestCountModel,
  Roblox_Friends_Api_Models_Response_UserResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  Roblox_Friends_Api_FollowCountResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  Roblox_Friends_Api_Models_Response_UserPresenceResponseModel,
  Roblox_Friends_Api_Models_Response_UserPresenceResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserPresenceResponse_,
  Roblox_Friends_Api_FriendStatusResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_FriendStatusResponse_,
  Roblox_Friends_Api_CaptchaStatusResponseModel,
  Roblox_Friends_Api_FollowingExistsRequestModel,
  Roblox_Friends_Api_Models_Response_FollowingExistsResponse,
  Roblox_Friends_Api_Models_Response_FollowingExistsResponseModel,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Friends_Api_Models_Request_FriendingTokenRequestModel,
  Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest,
  Roblox_Friends_Api_RecountResponse,
  Roblox_Friends_Api_FriendshipRequestModel,
};

/**
 * @api POST https://friends.roblox.com/v1/contacts/:targetContactId/request-friendship
 * @summary Send a contact friend request to target user
 * @param targetContactId The target contact Id for friend request
 */
export const postContactsTargetcontactidRequestFriendship = endpoint({
  method: 'post' as const,
  path: '/v1/contacts/:targetContactId/request-friendship',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetContactId: {
      style: 'simple',
    },
  },
  parameters: {
    targetContactId: z.string(),
  },
  response: Roblox_Friends_Api_CaptchaStatusResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
5: The target user is already a friend.
6: Invalid parameters.
7: The user cannot be friends with itself.
31: User with max friends sent friend request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/metadata
 * @param targetUserId
 */
export const getMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/metadata',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    targetUserId: z.number().int().optional(),
  },
  response: Roblox_Friends_Api_Models_Response_FriendsPageMetadataResponse,
  errors: [],
});
/**
 * @api GET https://friends.roblox.com/v1/my/friends/count
 * @summary Get the number of friends a user has
 */
export const getMyFriendsCount = endpoint({
  method: 'get' as const,
  path: '/v1/my/friends/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/my/friends/requests
 * @summary Get all users that friend requests with targetUserId using exclusive start paging
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by scoring requests based on request time, mutual friends, and request origin
 */
export const getMyFriendsRequests = endpoint({
  method: 'get' as const,
  path: '/v1/my/friends/requests',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
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
    limit: z
      .union([z.literal(10), z.literal(18), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Desc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_FriendRequestResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: The user is banned from performing operation.
3: The user is blocked from performing this action.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/recommended-users
 * @summary Return a list of Recommendations for the Authenticated User.
V1 API to just return list of existing friends for the Authenticated user.
 */
export const getRecommendedUsers = endpoint({
  method: 'get' as const,
  path: '/v1/recommended-users',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Friends_Api_Models_Response_UserRecommendationsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/user/following-exists
 * @summary Returns whether or not the current user is following each userId in a list of userIds
 * @param body The userIds potentially being followed
 */
export const postUserFollowingExists = endpoint({
  method: 'post' as const,
  path: '/v1/user/following-exists',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Friends_Api_FollowingExistsRequestModel,
  response: Roblox_Friends_Api_Models_Response_FollowingExistsResponseModel,
  errors: [
    {
      status: 400,
      description: `0: An invalid userId was passed in.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `1: Followers are disabled at this time.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/user/friend-requests/count
 * @summary Return the number of pending friend requests.
 */
export const getUserFriendRequestsCount = endpoint({
  method: 'get' as const,
  path: '/v1/user/friend-requests/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/user/friend-requests/decline-all
 * @summary Decline all pending friend requests for the authenticated user.
 */
export const postUserFriendRequestsDeclineAll = endpoint({
  method: 'post' as const,
  path: '/v1/user/friend-requests/decline-all',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
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
 * @api POST https://friends.roblox.com/v1/users/:requesterUserId/accept-friend-request
 * @summary Accept a friend request.
 * @param requesterUserId The user Id of the requester
 */
export const postUsersRequesteruseridAcceptFriendRequest = endpoint({
  method: 'post' as const,
  path: '/v1/users/:requesterUserId/accept-friend-request',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    requesterUserId: {
      style: 'simple',
    },
  },
  parameters: {
    requesterUserId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
10: The friend request does not exist.
11: The current users friends limit has been exceeded.
12: The target users friends limit has been exceeded.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: The user is blocked from performing this action.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/users/:requesterUserId/decline-friend-request
 * @summary Decline a friend request.
 * @param requesterUserId The user Id of the requester
 */
export const postUsersRequesteruseridDeclineFriendRequest = endpoint({
  method: 'post' as const,
  path: '/v1/users/:requesterUserId/decline-friend-request',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    requesterUserId: {
      style: 'simple',
    },
  },
  parameters: {
    requesterUserId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
10: The friend request does not exist.`,
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
 * @api POST https://friends.roblox.com/v1/users/:senderUserId/accept-friend-request-with-token
 * @summary Accept a friend request with an Off Network Friending token.
 * @param body
 * @param senderUserId The user id of the sender of the off network friend request
 */
export const postUsersSenderuseridAcceptFriendRequestWithToken = endpoint({
  method: 'post' as const,
  path: '/v1/users/:senderUserId/accept-friend-request-with-token',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    senderUserId: {
      style: 'simple',
    },
  },
  parameters: {
    senderUserId: z.number().int(),
  },
  body: z.object({ friendingToken: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
3: The user is blocked from performing this action.
5: The target user is already a friend.
6: Invalid parameters.
7: The user cannot be friends with itself.
11: The current users friends limit has been exceeded.
12: The target users friends limit has been exceeded.`,
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
 * @api POST https://friends.roblox.com/v1/users/:targetUserId/follow
 * @summary Creates the following between a user and user with targetUserId
 * @param body
 * @param targetUserId
 */
export const postUsersTargetuseridFollow = endpoint({
  method: 'post' as const,
  path: '/v1/users/:targetUserId/follow',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  body: Roblox_Web_Captcha_Models_Request_CaptchaTokenRequest.optional(),
  response: Roblox_Friends_Api_CaptchaStatusResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.
8: The user cannot follow itself.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:targetUserId/followers
 * @summary Get all users that follow user with targetUserId in page response format
 * @param targetUserId
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersTargetuseridFollowers = endpoint({
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followers',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
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
    targetUserId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(18), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
    },
    {
      status: 403,
      description: `2: The user is banned from performing operation.
3: The user is blocked from performing this action.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:targetUserId/followers/count
 * @summary Get the number of following a user has
 * @param targetUserId
 */
export const getUsersTargetuseridFollowersCount = endpoint({
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followers/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({ count: z.number().int() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:targetUserId/followings
 * @summary Get all users that user with targetUserId is following in page response format
 * @param targetUserId
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersTargetuseridFollowings = endpoint({
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followings',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
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
    targetUserId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(18), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
    },
    {
      status: 403,
      description: `2: The user is banned from performing operation.
3: The user is blocked from performing this action.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:targetUserId/followings/count
 * @summary Get the number of following a user has
 * @param targetUserId
 */
export const getUsersTargetuseridFollowingsCount = endpoint({
  method: 'get' as const,
  path: '/v1/users/:targetUserId/followings/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({ count: z.number().int() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/users/:targetUserId/followings/recount
 * @summary Recompute the number of followings for a user by comparing the existing counter to list of followings
 * @param targetUserId
 */
export const postUsersTargetuseridFollowingsRecount = endpoint({
  method: 'post' as const,
  path: '/v1/users/:targetUserId/followings/recount',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  response: Roblox_Friends_Api_RecountResponse,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
32: Counter over limit.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/users/:targetUserId/request-friendship
 * @summary Send a friend request to target user
 * @param body The source which the friend request originated from
 * @param targetUserId The target user Id for friend request
 */
export const postUsersTargetuseridRequestFriendship = endpoint({
  method: 'post' as const,
  path: '/v1/users/:targetUserId/request-friendship',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  body: Roblox_Friends_Api_FriendshipRequestModel,
  response: Roblox_Friends_Api_CaptchaStatusResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
5: The target user is already a friend.
6: Invalid parameters.
7: The user cannot be friends with itself.
10: The friend request does not exist.
13: The users are not in the same game.
31: User with max friends sent friend request.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/users/:targetUserId/unfollow
 * @summary Deletes the following between a user and user with targetUserId
 * @param targetUserId
 */
export const postUsersTargetuseridUnfollow = endpoint({
  method: 'post' as const,
  path: '/v1/users/:targetUserId/unfollow',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.
8: The user cannot follow itself.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
    },
    {
      status: 429,
      description: `9: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api POST https://friends.roblox.com/v1/users/:targetUserId/unfriend
 * @summary Unfriend a user
 * @param targetUserId The target user id to unfriend
 */
export const postUsersTargetuseridUnfriend = endpoint({
  method: 'post' as const,
  path: '/v1/users/:targetUserId/unfriend',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    targetUserId: {
      style: 'simple',
    },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
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
 * @api GET https://friends.roblox.com/v1/users/:userId/friends
 * @summary Get list of all friends for the specified user.
 * @param userId The user Id to get the friends for.
 * @param userSort Specifies how to sort the returned friends.
 */
export const getUsersUseridFriends = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/friends',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    userSort: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    userSort: z.union([z.literal(0), z.literal(1), z.literal(2)]).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:userId/friends/count
 * @summary Get the number of friends a user has
 * @param userId
 */
export const getUsersUseridFriendsCount = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/friends/count',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ count: z.number().int() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:userId/friends/inactive
 * @summary Get list of inactive friends for the specified user.
 * @param userId The user Id to get the friends for.
 */
export const getUsersUseridFriendsInactive = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/friends/inactive',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:userId/friends/online
 * @summary Get list of all online friends for the specified user.
 * @param userId The user Id to get the friends for.
 */
export const getUsersUseridFriendsOnline = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/friends/online',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_Models_Response_UserPresenceResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
6: Invalid parameters.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://friends.roblox.com/v1/users/:userId/friends/statuses
 * @summary Gets a list of friend statuses of specified users against the specified user.
 * @param userId The user to check the friend statuses against.
 * @param userIds
 */
export const getUsersUseridFriendsStatuses = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/friends/statuses',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    userIds: {
      style: 'form',
    },
  },
  parameters: {
    userId: z.number().int(),
    userIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Friends_Api_FriendStatusResponse_,
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
15: Too many ids.
16: Invalid ids.`,
    },
  ],
});
