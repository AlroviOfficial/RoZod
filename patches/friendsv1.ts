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
