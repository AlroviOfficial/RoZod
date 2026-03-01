// Patched endpoints removed from Roblox API docs (v6.1.0 compat)

const Patch_GamePassResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
  productId: z.number().int(),
  price: z.number().int(),
  sellerName: z.string(),
  sellerId: z.number().int(),
  isOwned: z.boolean(),
});
const Patch_ApiPageResponse_GamePassResponse = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Patch_GamePassResponse),
});
const Patch_GameVoteResponse = z.object({
  id: z.number().int(),
  upVotes: z.number().int(),
  downVotes: z.number().int(),
});
const Patch_UserGameVoteResponse = z.object({
  canVote: z.boolean(),
  userVote: z.boolean(),
  reasonForNotVoteable: z.string(),
});
const Patch_ApiArrayResponse_GameVoteResponse = z.object({
  data: z.array(Patch_GameVoteResponse),
});
const Patch_MyPrivateServersData = z.object({
  active: z.boolean(),
  universeId: z.number().int(),
  placeId: z.number().int(),
  name: z.string(),
  ownerId: z.number().int(),
  ownerName: z.string(),
  priceInRobux: z.number().int(),
  privateServerId: z.number().int(),
  expirationDate: z.string().datetime({ offset: true }),
  willRenew: z.boolean(),
  universeName: z.string(),
});
const Patch_MyPrivateServersResponse = z.object({
  nextPageCursor: z.string(),
  previousPageCursor: z.string(),
  data: z.array(Patch_MyPrivateServersData),
});
const Patch_VipServerCanInviteResponse = z.object({
  canInvite: z.boolean(),
  doesOwnerPrivacyRestrictJoins: z.boolean(),
  inviteResponseType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
});
const Patch_PlaceResponse = z.object({
  id: z.number().int(),
  name: z.string(),
});
const Patch_GameResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  rootPlace: Patch_PlaceResponse,
});
const Patch_VipServerSubscriptionResponse = z.object({
  active: z.boolean(),
  expired: z.boolean(),
  expirationDate: z.string().datetime({ offset: true }),
  price: z.number().int(),
  canRenew: z.boolean(),
  hasInsufficientFunds: z.boolean(),
  hasRecurringProfile: z.boolean(),
  hasPriceChanged: z.boolean(),
});
const Patch_SkinnyUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Patch_VipServerPermissionsResponse = z.object({
  clanAllowed: z.boolean(),
  enemyClanId: z.number().int(),
  friendsAllowed: z.boolean(),
  users: z.array(Patch_SkinnyUserResponse),
});
const Patch_VipServerVoiceSettingsResponse = z.object({
  enabled: z.boolean(),
});
const Patch_VipServerResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  game: Patch_GameResponse,
  joinCode: z.string(),
  active: z.boolean(),
  subscription: Patch_VipServerSubscriptionResponse,
  permissions: Patch_VipServerPermissionsResponse,
  voiceSettings: Patch_VipServerVoiceSettingsResponse,
  link: z.string(),
});
const Patch_VipServerUpdateRequest = z.object({
  name: z.string(),
  newJoinCode: z.boolean(),
  active: z.boolean(),
});
const Patch_CreateVipServersRequest = z.object({
  name: z.string(),
  expectedPrice: z.number().int(),
  isPurchaseConfirmed: z.boolean(),
});
const Patch_VipServerUpdatePermissionsRequest = z.object({
  clanAllowed: z.boolean(),
  enemyClanId: z.number().int(),
  friendsAllowed: z.boolean(),
  usersToAdd: z.array(z.number()),
  usersToRemove: z.array(z.number()),
});
const Patch_VipServerUpdateSubscriptionRequest = z.object({
  active: z.boolean(),
  price: z.number().int(),
});

export const getGamesUniverseidGamePasses = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/game-passes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: { style: 'simple' },
    limit: { style: 'form', explode: true },
    sortOrder: { style: 'form', explode: true },
    cursor: { style: 'form', explode: true },
  },
  parameters: {
    universeId: z.number().int(),
    limit: z.number().int(),
    sortOrder: z.union([z.literal(1), z.literal(2)]).optional().default(1),
    cursor: z.string().optional(),
  },
  response: Patch_ApiPageResponse_GamePassResponse,
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.` },
    { status: 404, description: `1: The requested universe does not exist.` },
  ],
});

export const patchGamesUniverseidUserVotes = endpoint({
  method: 'PATCH',
  path: '/v1/games/:universeId/user-votes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  body: z.object({ vote: z.boolean() }),
  response: z.object({}),
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.\n3: The asset is not voteable.\n4: The requested vote is invalid.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed\n6: The user needs to play the game before vote.\n7: The user needs additional permission to vote.` },
    { status: 404, description: `1: The requested universe does not exist.` },
    { status: 429, description: `5: Too many attempts to vote. Please try again later.\n10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getGamesUniverseidVotes = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/votes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  response: Patch_GameVoteResponse,
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.\n3: The asset is not voteable.` },
    { status: 404, description: `1: The requested universe does not exist.` },
    { status: 429, description: `10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getGamesUniverseidVotesUser = endpoint({
  method: 'GET',
  path: '/v1/games/:universeId/votes/user',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  response: Patch_UserGameVoteResponse,
  errors: [
    { status: 400, description: `2: The universe's root place is invalid.\n3: The asset is not voteable.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 404, description: `1: The requested universe does not exist.` },
    { status: 429, description: `10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getGamesVotes = endpoint({
  method: 'GET',
  path: '/v1/games/votes',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { universeIds: { style: 'form' } },
  parameters: { universeIds: z.array(z.number()) },
  response: Patch_ApiArrayResponse_GameVoteResponse,
  errors: [
    { status: 400, description: `3: The asset is not voteable.\n8: No universe IDs were specified.\n9: Too many universe IDs were requested.` },
    { status: 429, description: `10: Internal service busy. Please try again later.` },
    { status: 500, description: `0: An unknown error occurred.` },
  ],
});

export const getPrivateServersMyPrivateServers = endpoint({
  method: 'GET',
  path: '/v1/private-servers/my-private-servers',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    privateServersTab: { style: 'form', explode: true },
    itemsPerPage: { style: 'form', explode: true },
    cursor: { style: 'form', explode: true },
  },
  parameters: {
    privateServersTab: z.union([z.literal(0), z.literal(1)]).optional(),
    itemsPerPage: z.number().int().optional().default(25),
    cursor: z.string().optional(),
  },
  response: Patch_MyPrivateServersResponse,
  errors: [
    { status: 400, description: `39: Invalid cursor provided in the request.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
  ],
});

export const getVipServerCanInviteUserid = endpoint({
  method: 'GET',
  path: '/v1/vip-server/can-invite/:userId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { userId: { style: 'simple' } },
  parameters: { userId: z.number().int() },
  response: Patch_VipServerCanInviteResponse,
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 404, description: `19: The user is does not exist.` },
  ],
});

export const getVipServersId = endpoint({
  method: 'GET',
  path: '/v1/vip-servers/:id',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  response: Patch_VipServerResponse,
  errors: [
    { status: 400, description: `8: The creator of this game has disabled private servers for this game.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `2: You are not the owner of this private server.` },
    { status: 404, description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.` },
  ],
});

export const patchVipServersId = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  body: Patch_VipServerUpdateRequest,
  response: Patch_VipServerResponse,
  errors: [
    { status: 400, description: `8: The creator of this game has disabled private servers for this game.\n10: The name of the private server is either empty or too long.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed\n2: You are not the owner of this private server.\n11: You cannot activate a cancelled private server.\n12: The game must not be Friends Only to allow private servers.\n13: Join Link can be generated only for active private servers.` },
    { status: 404, description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.` },
    { status: 429, description: `3: Please wait a few minutes before configuring your private server again.` },
  ],
});

export const patchVipServersIdPermissions = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id/permissions',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  body: Patch_VipServerUpdatePermissionsRequest,
  response: Patch_VipServerPermissionsResponse,
  errors: [
    { status: 400, description: `6: You cannot add so many players to the private server's invite list.\n8: The creator of this game has disabled private servers for this game.\n12: The game must not be Friends Only to allow private servers.\n28: You may only add or remove valid players to your private server's invite list.\n29: You may only add or remove players when your private server is active.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed\n2: You are not the owner of this private server.` },
    { status: 404, description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.` },
  ],
});

export const patchVipServersIdSubscription = endpoint({
  method: 'PATCH',
  path: '/v1/vip-servers/:id/subscription',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, id: { style: 'simple' } },
  parameters: { id: z.number().int() },
  body: Patch_VipServerUpdateSubscriptionRequest,
  response: Patch_VipServerSubscriptionResponse,
  errors: [
    { status: 400, description: `8: The creator of this game has disabled private servers for this game.\n32: You do not have enough funds available to renew the subscription for this private server.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed\n2: You are not the owner of this private server.\n21: You may not configure a cancelled private server. Please renew your subscription before configuring.` },
    { status: 404, description: `1: The private server is invalid or does not exist.\n4: The universe does not exist.` },
    { status: 429, description: `3: Please wait a few minutes before configuring your private server again.` },
  ],
});

export const postGamesVipServersUniverseid = endpoint({
  method: 'POST',
  path: '/v1/games/vip-servers/:universeId',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {}, universeId: { style: 'simple' } },
  parameters: { universeId: z.number().int() },
  body: Patch_CreateVipServersRequest,
  response: Roblox_Web_Responses_Games_GameServerResponse,
  errors: [
    { status: 400, description: `15: The price for purchasing this private server has changed. Please refresh the page and try again.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
    { status: 404, description: `4: The universe does not exist.` },
    { status: 500, description: `16: We are having a problem completing your purchase. Please try again in a few minutes.` },
  ],
});
