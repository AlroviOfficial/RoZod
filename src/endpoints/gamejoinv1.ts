import { z } from 'zod';
import { endpoint } from '..';

const Roblox_GameJoin_Api_GameJoinRequest = z.object({
  isoContext: z.string(),
  eventId: z.string().uuid(),
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_Web_GameJoin_StatusData_CreatorExperienceBanData = z.object({
  startTime: z.string().datetime({ offset: true }),
  durationSeconds: z.number().int(),
  displayReason: z.string(),
  displayReasonTextFilterStatus: z.number().int(),
  isInherited: z.boolean(),
});
const Roblox_Web_GameJoin_StatusData = z.object({
  creatorExperienceBan: Roblox_Web_GameJoin_StatusData_CreatorExperienceBanData,
});
const Roblox_Web_GameLaunch_ConnectionFlow_ServerConnection = z.object({
  Address: z.string(),
  Port: z.number().int(),
});
const Roblox_Web_GameLaunch_ConnectionFlow_UdmuxEndpoint = z.object({
  Address: z.string(),
  Port: z.number().int(),
});
const Roblox_Web_GameLaunch_ConnectionFlow_JoinInformation = z.object({
  ClientPort: z.number().int(),
  MachineAddress: z.string(),
  ServerPort: z.number().int(),
  ServerConnections: z.array(Roblox_Web_GameLaunch_ConnectionFlow_ServerConnection),
  UdmuxEndpoints: z.array(Roblox_Web_GameLaunch_ConnectionFlow_UdmuxEndpoint),
  DirectServerReturn: z.boolean(),
  TokenGenAlgorithm: z.number().int(),
  PepperId: z.number().int(),
  TokenValue: z.string(),
  PingUrl: z.string(),
  PingInterval: z.number().int(),
  UserName: z.string(),
  DisplayName: z.string(),
  HasVerifiedBadge: z.boolean(),
  SeleniumTestMode: z.boolean(),
  UserId: z.number().int(),
  RobloxLocale: z.string(),
  GameLocale: z.string(),
  SuperSafeChat: z.boolean(),
  FlexibleChatEnabled: z.boolean(),
  CharacterAppearance: z.string(),
  ClientTicket: z.string(),
  GameId: z.string(),
  PlaceId: z.number().int(),
  BaseUrl: z.string(),
  ChatStyle: z.string(),
  CreatorId: z.number().int(),
  CreatorTypeEnum: z.string(),
  MembershipType: z.string(),
  AccountAge: z.number().int(),
  CookieStoreFirstTimePlayKey: z.string(),
  CookieStoreFiveMinutePlayKey: z.string(),
  CookieStoreEnabled: z.boolean(),
  IsUnknownOrUnder13: z.boolean(),
  GameChatType: z.string(),
  SessionId: z.string(),
  AnalyticsSessionId: z.string(),
  DataCenterId: z.number().int(),
  UniverseId: z.number().int(),
  FollowUserId: z.number().int(),
  characterAppearanceId: z.number().int(),
  CountryCode: z.string(),
  AlternateName: z.string(),
  RandomSeed1: z.string().regex(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/),
  ClientPublicKeyData: z.string(),
  RccVersion: z.string(),
  ChannelName: z.string(),
  VerifiedAMP: z.number().int(),
  PrivateServerOwnerID: z.number().int(),
  PrivateServerID: z.string(),
  EventID: z.string(),
  EphemeralEarlyPubKey: z.string(),
  PartyId: z.string(),
});
const Roblox_GameJoin_Api_GameJoinResponse = z.object({
  jobId: z.string(),
  status: z.number().int(),
  statusData: Roblox_Web_GameJoin_StatusData,
  joinScriptUrl: z.string(),
  authenticationUrl: z.string(),
  authenticationTicket: z.string(),
  message: z.string(),
  joinScript: Roblox_Web_GameLaunch_ConnectionFlow_JoinInformation,
  queuePosition: z.number().int(),
});
const Roblox_GameJoin_Api_JoinGameInstanceRequest = z.object({
  gameId: z.string().uuid(),
  cId: z.string(),
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_GameJoin_Api_JoinPlayTogetherGameRequest = z.object({
  conversationId: z.number().int(),
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_GameJoin_Api_JoinPrivateGameRequest = z.object({
  accessCode: z.string(),
  linkCode: z.string(),
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_GameJoin_Api_JoinReservedGameRequest = z.object({
  accessCode: z.string(),
  cId: z.string(),
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_GameJoin_Api_PlayWithUserRequest = z.object({
  userIdToFollow: z.number().int(),
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_GameJoin_Api_TeamCreateRequest = z.object({
  gameJoinAttemptId: z.string().uuid(),
  placeId: z.number().int(),
  gamerTag: z.string(),
  isPlayTogetherGame: z.boolean(),
  browserTrackerId: z.number().int(),
  isTeleport: z.boolean(),
  isQueueAllowedOverride: z.boolean(),
  isImmersiveAdsTeleport: z.boolean(),
  channelName: z.string(),
  joinOrigin: z.string(),
  partyId: z.string().uuid(),
});
const Roblox_GameJoin_Api_TeamCreateResponse = z
  .object({
    status: z.number().int(),
    message: z.string(),
    settings: z.object({}),
  })
  .passthrough();

/**
 * @api POST https://gamejoin.roblox.com/v1/join-game
 * @summary Endpoint to join a game
 * @param body The Roblox.GameJoin.Api.GameJoinRequest in JSON format
 */
export const postJoinGame = endpoint({
  method: 'post',
  path: '/v1/join-game',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_GameJoinRequest,
  response: Roblox_GameJoin_Api_GameJoinResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/join-game-instance
 * @summary Endpoint to join a particular game instance
 * @param body The Roblox.GameJoin.Api.JoinGameInstanceRequest in JSON format
 */
export const postJoinGameInstance = endpoint({
  method: 'post',
  path: '/v1/join-game-instance',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_JoinGameInstanceRequest,
  response: Roblox_GameJoin_Api_GameJoinResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/join-play-together-game
 * @summary Endpoint to join play together game
 * @param body The Roblox.GameJoin.Api.JoinPlayTogetherGameRequest in JSON format
 */
export const postJoinPlayTogetherGame = endpoint({
  method: 'post',
  path: '/v1/join-play-together-game',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_JoinPlayTogetherGameRequest,
  response: Roblox_GameJoin_Api_GameJoinResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/join-private-game
 * @summary Endpoint to join a private game
 * @param body The Roblox.GameJoin.Api.JoinPrivateGameRequest in JSON format
 */
export const postJoinPrivateGame = endpoint({
  method: 'post',
  path: '/v1/join-private-game',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_JoinPrivateGameRequest,
  response: Roblox_GameJoin_Api_GameJoinResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/join-reserved-game
 * @summary Endpoint to join a reserved game
 * @param body The Roblox.GameJoin.Api.JoinReservedGameRequest in JSON format
 */
export const postJoinReservedGame = endpoint({
  method: 'post',
  path: '/v1/join-reserved-game',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_JoinReservedGameRequest,
  response: Roblox_GameJoin_Api_GameJoinResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/play-with-user
 * @summary Endpoint to play with user
 * @param body The Roblox.GameJoin.Api.PlayWithUserRequest in JSON format
 */
export const postPlayWithUser = endpoint({
  method: 'post',
  path: '/v1/play-with-user',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_PlayWithUserRequest,
  response: Roblox_GameJoin_Api_GameJoinResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/team-create
 * @summary Endpoint to join team create session
 * @param body The Roblox.GameJoin.Api.TeamCreateRequest in JSON format
 * @description Xsrf protection disabled because it will only be used on Roblox clients. Adding an extra
round-trip would impact client performance.
 */
export const postTeamCreate = endpoint({
  method: 'post',
  path: '/v1/team-create',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_TeamCreateRequest,
  response: Roblox_GameJoin_Api_TeamCreateResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 403,
      description: `1: Request is not authorized from specified origin.
2: User is invalid or does not exist.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
/**
 * @api POST https://gamejoin.roblox.com/v1/team-create-preemptive
 * @summary Endpoint to preemptively start team create session.
 * @param body The Roblox.GameJoin.Api.TeamCreateRequest in JSON format
 * @description Since the request origin might not be Roblox software, this endpoint implements a different set of security rules.
More specifically, it requires Xsrf protection and disables user-agent check so that it can be called from browsers.
 */
export const postTeamCreatePreemptive = endpoint({
  method: 'post',
  path: '/v1/team-create-preemptive',
  baseUrl: 'https://gamejoin.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_GameJoin_Api_TeamCreateRequest,
  response: Roblox_GameJoin_Api_TeamCreateResponse,
  errors: [
    {
      status: 400,
      description: `-1: An unknown error occurred.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: Request is not authorized from specified origin.
2: User is invalid or does not exist.`,
    },
    {
      status: 429,
      description: `3: Too many requests, please slow down.`,
    },
  ],
});
