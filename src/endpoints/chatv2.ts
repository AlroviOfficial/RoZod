import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Chat_Api_Models_ChatSettingsResponse = z.object({
  chatEnabled: z.boolean(),
  isActiveChatUser: z.boolean(),
  isConnectTabEnabled: z.boolean(),
});
const Roblox_Chat_Api_Models_ChatParticipant = z.object({
  type: z.enum(['User', 'System']),
  targetId: z.number().int(),
  name: z.string(),
  displayName: z.string(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Chat_Api_Models_ConversationTitle = z.object({
  titleForViewer: z.string(),
  isDefaultTitle: z.boolean(),
});
const Roblox_Chat_Api_Models_ConversationUniverse = z.object({
  universeId: z.number().int(),
  rootPlaceId: z.number().int(),
});
const Roblox_Chat_Api_Models_Conversation = z.object({
  id: z.number().int(),
  title: z.string(),
  initiator: Roblox_Chat_Api_Models_ChatParticipant,
  hasUnreadMessages: z.boolean(),
  participants: z.array(Roblox_Chat_Api_Models_ChatParticipant),
  conversationType: z.enum(['OneToOneConversation', 'MultiUserConversation', 'CloudEditConversation']),
  conversationTitle: Roblox_Chat_Api_Models_ConversationTitle,
  lastUpdated: z.string().datetime({ offset: true }),
  conversationUniverse: Roblox_Chat_Api_Models_ConversationUniverse,
});
const Roblox_Chat_Api_Models_GameLink = z.object({
  universeId: z.number().int(),
});
const Roblox_Chat_Api_Models_Link = z.object({
  type: z.literal('Game'),
  game: Roblox_Chat_Api_Models_GameLink,
});
const Roblox_Chat_Api_Models_SetConversationUniverseEventBased = z.object({
  actorUserId: z.number().int(),
  universeId: z.number().int(),
});
const Roblox_Chat_Api_Models_EventBased = z.object({
  type: z.literal('SetConversationUniverse'),
  setConversationUniverse: Roblox_Chat_Api_Models_SetConversationUniverseEventBased,
});
const Roblox_Chat_Api_Models_ChatMessage = z.object({
  id: z.string().uuid(),
  senderType: z.enum(['User', 'System']),
  sent: z.string().datetime({ offset: true }),
  read: z.boolean(),
  messageType: z.enum(['PlainText', 'Link', 'EventBased']),
  decorators: z.array(z.string()),
  senderTargetId: z.number().int(),
  content: z.string(),
  link: Roblox_Chat_Api_Models_Link,
  eventBased: Roblox_Chat_Api_Models_EventBased,
});
const Roblox_Chat_Api_Models_RolloutSettingModel = z.object({
  featureName: z.enum(['LuaChat', 'ConversationUniverse', 'PlayTogether', 'Party', 'GameLink', 'OldPlayTogether']),
  isRolloutEnabled: z.boolean(),
});
const Roblox_Chat_Api_Models_RolloutSettingsResponse = z.object({
  rolloutFeatures: z.array(Roblox_Chat_Api_Models_RolloutSettingModel),
});
const Roblox_Chat_Api_Models_UnreadConversationCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_Chat_Api_Models_MultigetConversationMessagesResponse = z.object({
  conversationId: z.number().int(),
  chatMessages: z.array(Roblox_Chat_Api_Models_ChatMessage),
});
const Roblox_Chat_Api_Models_ChatMetadataResponse = z.object({
  isChatEnabledByPrivacySetting: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  languageForPrivacySettingUnavailable: z.string(),
  maxConversationTitleLength: z.number().int(),
  numberOfMembersForPartyChrome: z.number().int(),
  partyChromeDisplayTimeStampInterval: z.number().int(),
  signalRDisconnectionResponseInMilliseconds: z.number().int(),
  typingInChatFromSenderThrottleMs: z.number().int(),
  typingInChatForReceiverExpirationMs: z.number().int(),
  relativeValueToRecordUiPerformance: z.number(),
  isChatDataFromLocalStorageEnabled: z.boolean(),
  chatDataFromLocalStorageExpirationSeconds: z.number().int(),
  isUsingCacheToLoadFriendsInfoEnabled: z.boolean(),
  cachedDataFromLocalStorageExpirationMS: z.number().int(),
  senderTypesForUnknownMessageTypeError: z.array(z.string()),
  isInvalidMessageTypeFallbackEnabled: z.boolean(),
  isRespectingMessageTypeEnabled: z.boolean(),
  validMessageTypesWhiteList: z.array(z.string()),
  shouldRespectConversationHasUnreadMessageToMarkAsRead: z.boolean(),
  isAliasChatForClientSideEnabled: z.boolean(),
  isPlayTogetherForGameCardsEnabled: z.boolean(),
  isRoactChatEnabled: z.boolean(),
  webChatEventSampleRate: z.number().int(),
  isPlatformChatApiEnabled: z.boolean(),
});
const Roblox_Chat_Api_Models_AddUsersToConversationRequest = z.object({
  participantUserIds: z.array(z.number()),
  conversationId: z.number().int(),
});
const Roblox_Chat_Api_Models_RejectedChatParticipant = z.object({
  rejectedReason: z.string(),
  type: z.enum(['User', 'System']),
  targetId: z.number().int(),
  name: z.string(),
  displayName: z.string(),
  hasVerifiedBadge: z.boolean(),
});
const Roblox_Chat_Api_Models_AddUserToConversationResponse = z.object({
  conversationId: z.number().int(),
  rejectedParticipants: z.array(Roblox_Chat_Api_Models_RejectedChatParticipant),
  resultType: z.literal('Success'),
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_MarkAsReadRequest = z.object({
  conversationId: z.number().int(),
  endMessageId: z.string(),
});
const Roblox_Chat_Api_Models_MarkAsReadResponse = z.object({
  resultType: z.literal('Success'),
});
const Roblox_Chat_Api_Models_MarkAsSeenRequest = z.object({
  conversationsToMarkSeen: z.array(z.number()),
});
const Roblox_Chat_Api_Models_MarkAsSeenResponse = z.object({
  resultType: z.literal('Success'),
});
const Roblox_Chat_Api_Models_RemoveUserFromConversationRequest = z.object({
  participantUserId: z.number().int(),
  conversationId: z.number().int(),
});
const Roblox_Chat_Api_Models_RemoveUserFromConversationResponse = z.object({
  conversationId: z.number().int(),
  resultType: z.literal('Success'),
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_RenameGroupConversationRequest = z.object({
  conversationId: z.number().int(),
  newTitle: z.string(),
});
const Roblox_Chat_Api_Models_RenameConversationResponse = z.object({
  conversationTitle: z.string(),
  resultType: z.enum(['Success', 'Moderated', 'TextTooLong']),
  title: Roblox_Chat_Api_Models_ConversationTitle,
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_SendGameLinkChatMessageRequest = z.object({
  universeId: z.number().int(),
  isExperienceInvite: z.boolean(),
  userId: z.number().int(),
  placeId: z.number().int(),
  conversationId: z.number().int(),
  decorators: z.array(z.string()),
});
const Roblox_Chat_Api_Models_SendLinkChatResponse = z.object({
  chatMessageLinkType: z.literal('Game'),
  messageId: z.string(),
  sent: z.string().datetime({ offset: true }),
  messageType: z.enum(['PlainText', 'Link', 'EventBased']),
  resultType: z.enum(['Success', 'Moderated', 'TextTooLong', 'NoRealtimeConnection']),
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_SendPlainTextChatMessageRequest = z.object({
  message: z.string(),
  isExperienceInvite: z.boolean(),
  userId: z.number().int(),
  conversationId: z.number().int(),
  decorators: z.array(z.string()),
});
const Roblox_Chat_Api_Models_SendPlainTextChatMessageResponse = z.object({
  content: z.string(),
  filteredForReceivers: z.boolean(),
  messageId: z.string(),
  sent: z.string().datetime({ offset: true }),
  messageType: z.enum(['PlainText', 'Link', 'EventBased']),
  resultType: z.enum(['Success', 'Moderated', 'TextTooLong', 'NoRealtimeConnection']),
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_CreateCloudEditConversationRequest = z.object({
  placeId: z.number().int(),
});
const Roblox_Chat_Api_Models_StartNewConversationResponse = z.object({
  conversation: Roblox_Chat_Api_Models_Conversation,
  rejectedParticipants: z.array(Roblox_Chat_Api_Models_RejectedChatParticipant),
  resultType: z.literal('Success'),
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_CreateGroupConversationRequest = z.object({
  participantUserIds: z.array(z.number()),
  title: z.string(),
});
const Roblox_Chat_Api_Models_CreateOneToOneConversationRequest = z.object({
  participantUserId: z.number().int(),
});
const Roblox_Chat_Api_Models_UpdateUserTypingStatusRequest = z.object({
  conversationId: z.number().int(),
  isTyping: z.boolean(),
});
const Roblox_Chat_Api_Models_UserVisibleStatusResponse = z.object({
  statusMessage: z.string(),
});

/**
 * @api POST https://chat.roblox.com/v2/add-to-conversation
 * @summary Adds users to an existing conversation
 * @param body
 */
export const postAddToConversation = endpoint({
  method: 'POST',
  path: '/v2/add-to-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_AddUsersToConversationRequest,
  response: Roblox_Chat_Api_Models_AddUserToConversationResponse,
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
 * @api GET https://chat.roblox.com/v2/chat-settings
 * @summary For every authenticated user, the clients hit this endpoint to get the chat related settings. Example : Chat is enabled or not
 */
export const getChatSettings = endpoint({
  method: 'GET',
  path: '/v2/chat-settings',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  response: Roblox_Chat_Api_Models_ChatSettingsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-conversations
 * @summary Gets conversations for the conversationIds specified in the parameters
 * @param conversationIds Ids of the conversations to be returned
 */
export const getGetConversations = endpoint({
  method: 'GET',
  path: '/v2/get-conversations',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    conversationIds: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    conversationIds: z.array(z.number()),
  },
  response: z.array(Roblox_Chat_Api_Models_Conversation),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-messages
 * @summary Gets messages corresponding to the given conversationId
 * @param conversationId
 * @param pageSize
 * @param exclusiveStartMessageId
 */
export const getGetMessages = endpoint({
  method: 'GET',
  path: '/v2/get-messages',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    conversationId: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
    exclusiveStartMessageId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    conversationId: z.number().int(),
    pageSize: z.number().int(),
    exclusiveStartMessageId: z.string().optional(),
  },
  response: z.array(Roblox_Chat_Api_Models_ChatMessage),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-rollout-settings
 * @summary Gets the rollout settings for requested feature
 * @param featureNames string array to request feature rollout settings
 */
export const getGetRolloutSettings = endpoint({
  method: 'GET',
  path: '/v2/get-rollout-settings',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    featureNames: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    featureNames: z.array(z.string()),
  },
  response: Roblox_Chat_Api_Models_RolloutSettingsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-unread-conversation-count
 * @summary Gets the count of unread conversations
 */
export const getGetUnreadConversationCount = endpoint({
  method: 'GET',
  path: '/v2/get-unread-conversation-count',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-unread-conversations
 * @summary Gets a list of unread conversations
 * @param pageNumber
 * @param pageSize
 */
export const getGetUnreadConversations = endpoint({
  method: 'GET',
  path: '/v2/get-unread-conversations',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    pageNumber: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    pageNumber: z.number().int(),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_Conversation),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-unread-messages
 * @summary Gets the unread messages for the conversationIds specified in the parameters
 * @param conversationIds
 * @param pageSize
 */
export const getGetUnreadMessages = endpoint({
  method: 'GET',
  path: '/v2/get-unread-messages',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    conversationIds: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    conversationIds: z.array(z.number()),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_MultigetConversationMessagesResponse),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/get-user-conversations
 * @summary Gets all conversations associated with the logged-in User
 * @param pageNumber
 * @param pageSize
 */
export const getGetUserConversations = endpoint({
  method: 'GET',
  path: '/v2/get-user-conversations',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    pageNumber: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    pageNumber: z.number().int(),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_Conversation),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://chat.roblox.com/v2/mark-as-read
 * @summary Mark the specified conversation messages as read
 * @param body
 */
export const postMarkAsRead = endpoint({
  method: 'POST',
  path: '/v2/mark-as-read',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_MarkAsReadRequest,
  response: Roblox_Chat_Api_Models_MarkAsReadResponse,
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
 * @api POST https://chat.roblox.com/v2/mark-as-seen
 * @summary Mark the specified conversation messages as seen
 * @param body
 */
export const postMarkAsSeen = endpoint({
  method: 'POST',
  path: '/v2/mark-as-seen',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_MarkAsSeenRequest,
  response: Roblox_Chat_Api_Models_MarkAsSeenResponse,
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
 * @api GET https://chat.roblox.com/v2/metadata
 * @summary Get Chat metadata.
 */
export const getMetadata = endpoint({
  method: 'GET',
  path: '/v2/metadata',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  response: Roblox_Chat_Api_Models_ChatMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://chat.roblox.com/v2/multi-get-latest-messages
 * @summary Gets latest messages corresponding to the given list of conversation Ids
 * @param conversationIds
 * @param pageSize
 */
export const getMultiGetLatestMessages = endpoint({
  method: 'GET',
  path: '/v2/multi-get-latest-messages',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    conversationIds: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    conversationIds: z.array(z.number()),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_MultigetConversationMessagesResponse),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://chat.roblox.com/v2/remove-from-conversation
 * @summary Removes a user from an existing conversation
 * @param body
 */
export const postRemoveFromConversation = endpoint({
  method: 'POST',
  path: '/v2/remove-from-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_RemoveUserFromConversationRequest,
  response: Roblox_Chat_Api_Models_RemoveUserFromConversationResponse,
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
 * @api POST https://chat.roblox.com/v2/rename-group-conversation
 * @summary Renames the title of an existing conversation
 * @param body
 */
export const postRenameGroupConversation = endpoint({
  method: 'POST',
  path: '/v2/rename-group-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_RenameGroupConversationRequest,
  response: Roblox_Chat_Api_Models_RenameConversationResponse,
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
 * @api POST https://chat.roblox.com/v2/send-game-link-message
 * @param body
 */
export const postSendGameLinkMessage = endpoint({
  method: 'POST',
  path: '/v2/send-game-link-message',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_SendGameLinkChatMessageRequest,
  response: Roblox_Chat_Api_Models_SendLinkChatResponse,
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
 * @api POST https://chat.roblox.com/v2/send-message
 * @summary Sends a chat message
 * @param body
 */
export const postSendMessage = endpoint({
  method: 'POST',
  path: '/v2/send-message',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_SendPlainTextChatMessageRequest,
  response: Roblox_Chat_Api_Models_SendPlainTextChatMessageResponse,
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
 * @api POST https://chat.roblox.com/v2/start-cloud-edit-conversation
 * @summary Creates a new cloud edit conversation
 * @param body
 */
export const postStartCloudEditConversation = endpoint({
  method: 'POST',
  path: '/v2/start-cloud-edit-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ placeId: z.number().int() }),
  response: Roblox_Chat_Api_Models_StartNewConversationResponse,
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
 * @api POST https://chat.roblox.com/v2/start-group-conversation
 * @summary Creates a new group conversation
 * @param body
 */
export const postStartGroupConversation = endpoint({
  method: 'POST',
  path: '/v2/start-group-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_CreateGroupConversationRequest,
  response: Roblox_Chat_Api_Models_StartNewConversationResponse,
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
 * @api POST https://chat.roblox.com/v2/start-one-to-one-conversation
 * @summary Creates a new one-on-one conversation
 * @param body
 */
export const postStartOneToOneConversation = endpoint({
  method: 'POST',
  path: '/v2/start-one-to-one-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ participantUserId: z.number().int() }),
  response: Roblox_Chat_Api_Models_StartNewConversationResponse,
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
 * @api POST https://chat.roblox.com/v2/update-user-typing-status
 * @summary Updates the status for whether a user is typing currently
 * @param body
 */
export const postUpdateUserTypingStatus = endpoint({
  method: 'POST',
  path: '/v2/update-user-typing-status',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Chat_Api_Models_UpdateUserTypingStatusRequest,
  response: z.object({ statusMessage: z.string() }),
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
