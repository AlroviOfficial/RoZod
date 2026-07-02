// Patched endpoints removed from Roblox API docs (v6.1.0 compat)

const Patch_TrustedFriendStatusResponse = z.object({
  status: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
});
const Patch_MultigetAreTrustedFriendsResponse = z.object({
  trustedFriendsId: z.array(z.number()),
});

export const getMyTrustedFriendsUseridStatus = endpoint({
  method: 'GET',
  path: '/v1/my/trusted-friends/:userId/status',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: { userId: { style: 'simple' } },
  parameters: { userId: z.number().int() },
  response: Patch_TrustedFriendStatusResponse,
  errors: [
    { status: 400, description: `1: The target user is invalid or does not exist.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
  ],
});

export const getUserUseridMultigetAreTrustedFriends = endpoint({
  method: 'GET',
  path: '/v1/user/:userId/multiget-are-trusted-friends',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: { style: 'simple' },
    userIds: { style: 'form' },
  },
  parameters: {
    userId: z.number().int(),
    userIds: z.array(z.number()),
  },
  response: Patch_MultigetAreTrustedFriendsResponse,
  errors: [
    { status: 400, description: `1: The target user is invalid or does not exist.` },
  ],
});

// Friend-management write endpoints Roblox removed from its published API docs but
// which remain functional. Not on the official deprecated-endpoints list; the docs
// only list the older /api/friends/* and api.roblox.com/user/* variants as removed.

const Patch_FriendshipRequestModel = z.object({
  friendshipOriginSourceType: z.enum([
    'Unknown',
    'PlayerSearch',
    'QrCode',
    'InGame',
    'UserProfile',
    'QqContactImporter',
    'WeChatContactImporter',
    'ProfileShare',
    'PhoneContactImporter',
    'FriendRecommendations',
    'UserCommunities',
  ]),
  senderNickname: z.string(),
});

export const postContactsTargetcontactidRequestFriendship = endpoint({
  method: 'POST',
  path: '/v1/contacts/:targetContactId/request-friendship',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    targetContactId: { style: 'simple' },
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
    { status: 401, description: `0: Authorization has been denied for this request.` },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
    },
    { status: 429, description: `9: The flood limit has been exceeded.` },
  ],
});

export const deleteMyNewFriendRequests = endpoint({
  method: 'DELETE',
  path: '/v1/my/new-friend-requests',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  response: z.object({ status: z.boolean() }),
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
  ],
});

export const postUserFriendRequestsDeclineAll = endpoint({
  method: 'POST',
  path: '/v1/user/friend-requests/decline-all',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  response: z.object({ backgrounded: z.boolean() }),
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
  ],
});

export const postUsersRequesteruseridAcceptFriendRequest = endpoint({
  method: 'POST',
  path: '/v1/users/:requesterUserId/accept-friend-request',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    requesterUserId: { style: 'simple' },
  },
  parameters: {
    requesterUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
10: The friend request does not exist.
11: The current users friends limit has been exceeded.
12: The target users friends limit has been exceeded.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    {
      status: 403,
      description: `0: Token Validation Failed
3: The user is blocked from performing this action.`,
    },
  ],
});

export const postUsersRequesteruseridDeclineFriendRequest = endpoint({
  method: 'POST',
  path: '/v1/users/:requesterUserId/decline-friend-request',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    requesterUserId: { style: 'simple' },
  },
  parameters: {
    requesterUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The target user is invalid or does not exist.
10: The friend request does not exist.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
  ],
});

export const postUsersSenderuseridAcceptFriendRequestWithToken = endpoint({
  method: 'POST',
  path: '/v1/users/:senderUserId/accept-friend-request-with-token',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    senderUserId: { style: 'simple' },
  },
  parameters: {
    senderUserId: z.number().int(),
  },
  body: z.object({ friendingToken: z.string() }),
  response: z.object({}),
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
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
  ],
});

export const postUsersTargetuseridRequestFriendship = endpoint({
  method: 'POST',
  path: '/v1/users/:targetUserId/request-friendship',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    targetUserId: { style: 'simple' },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  body: Patch_FriendshipRequestModel,
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
31: User with max friends sent friend request.
35: Invalid nickname.`,
    },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    {
      status: 403,
      description: `0: Token Validation Failed
2: The user is banned from performing operation.
3: The user is blocked from performing this action.
14: The user has not passed the captcha.`,
    },
    { status: 429, description: `9: The flood limit has been exceeded.` },
  ],
});

export const postUsersTargetuseridUnfriend = endpoint({
  method: 'POST',
  path: '/v1/users/:targetUserId/unfriend',
  baseUrl: 'https://friends.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    targetUserId: { style: 'simple' },
  },
  parameters: {
    targetUserId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    { status: 400, description: `1: The target user is invalid or does not exist.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
  ],
});
