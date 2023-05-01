import { z } from 'zod';

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
  lastUpdated: z.string().datetime(),
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
  sent: z.string().datetime(),
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
const Roblox_Chat_Api_Models_ResetConversationUniverseRequest = z.object({
  conversationId: z.number().int(),
});
const Roblox_Chat_Api_Models_UserVisibleStatusResponse = z.object({
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
  sent: z.string().datetime(),
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
  sent: z.string().datetime(),
  messageType: z.enum(['PlainText', 'Link', 'EventBased']),
  resultType: z.enum(['Success', 'Moderated', 'TextTooLong', 'NoRealtimeConnection']),
  statusMessage: z.string(),
});
const Roblox_Chat_Api_Models_SetConversationUniverseRequest = z.object({
  conversationId: z.number().int(),
  universeId: z.number().int(),
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

const schemas = {
  Roblox_Chat_Api_Models_ChatSettingsResponse,
  Roblox_Chat_Api_Models_ChatParticipant,
  Roblox_Chat_Api_Models_ConversationTitle,
  Roblox_Chat_Api_Models_ConversationUniverse,
  Roblox_Chat_Api_Models_Conversation,
  Roblox_Chat_Api_Models_GameLink,
  Roblox_Chat_Api_Models_Link,
  Roblox_Chat_Api_Models_SetConversationUniverseEventBased,
  Roblox_Chat_Api_Models_EventBased,
  Roblox_Chat_Api_Models_ChatMessage,
  Roblox_Chat_Api_Models_RolloutSettingModel,
  Roblox_Chat_Api_Models_RolloutSettingsResponse,
  Roblox_Chat_Api_Models_UnreadConversationCountResponse,
  Roblox_Chat_Api_Models_MultigetConversationMessagesResponse,
  Roblox_Chat_Api_Models_ChatMetadataResponse,
  Roblox_Chat_Api_Models_AddUsersToConversationRequest,
  Roblox_Chat_Api_Models_RejectedChatParticipant,
  Roblox_Chat_Api_Models_AddUserToConversationResponse,
  Roblox_Chat_Api_Models_MarkAsReadRequest,
  Roblox_Chat_Api_Models_MarkAsReadResponse,
  Roblox_Chat_Api_Models_MarkAsSeenRequest,
  Roblox_Chat_Api_Models_MarkAsSeenResponse,
  Roblox_Chat_Api_Models_RemoveUserFromConversationRequest,
  Roblox_Chat_Api_Models_RemoveUserFromConversationResponse,
  Roblox_Chat_Api_Models_RenameGroupConversationRequest,
  Roblox_Chat_Api_Models_RenameConversationResponse,
  Roblox_Chat_Api_Models_ResetConversationUniverseRequest,
  Roblox_Chat_Api_Models_UserVisibleStatusResponse,
  Roblox_Chat_Api_Models_SendGameLinkChatMessageRequest,
  Roblox_Chat_Api_Models_SendLinkChatResponse,
  Roblox_Chat_Api_Models_SendPlainTextChatMessageRequest,
  Roblox_Chat_Api_Models_SendPlainTextChatMessageResponse,
  Roblox_Chat_Api_Models_SetConversationUniverseRequest,
  Roblox_Chat_Api_Models_CreateCloudEditConversationRequest,
  Roblox_Chat_Api_Models_StartNewConversationResponse,
  Roblox_Chat_Api_Models_CreateGroupConversationRequest,
  Roblox_Chat_Api_Models_CreateOneToOneConversationRequest,
  Roblox_Chat_Api_Models_UpdateUserTypingStatusRequest,
};

/**
 * @api post https://chat.roblox.com/v2/add-to-conversation
 * @param body
 */
export const postAddToConversation = {
  method: 'post' as const,
  path: '/v2/add-to-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_AddUsersToConversationRequest,
  },
  response: Roblox_Chat_Api_Models_AddUserToConversationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/chat-settings
 */
export const getChatSettings = {
  method: 'get' as const,
  path: '/v2/chat-settings',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Chat_Api_Models_ChatSettingsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-conversations
 * @param conversationIds
 */
export const getGetConversations = {
  method: 'get' as const,
  path: '/v2/get-conversations',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    conversationIds: z.array(z.number()),
  },
  response: z.array(Roblox_Chat_Api_Models_Conversation),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-messages
 * @param conversationId
 * @param pageSize
 * @param exclusiveStartMessageId
 */
export const getGetMessages = {
  method: 'get' as const,
  path: '/v2/get-messages',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-rollout-settings
 * @param featureNames
 */
export const getGetRolloutSettings = {
  method: 'get' as const,
  path: '/v2/get-rollout-settings',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    featureNames: z.array(z.string()),
  },
  response: Roblox_Chat_Api_Models_RolloutSettingsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-unread-conversation-count
 */
export const getGetUnreadConversationCount = {
  method: 'get' as const,
  path: '/v2/get-unread-conversation-count',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-unread-conversations
 * @param pageNumber
 * @param pageSize
 */
export const getGetUnreadConversations = {
  method: 'get' as const,
  path: '/v2/get-unread-conversations',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    pageNumber: z.number().int(),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_Conversation),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-unread-messages
 * @param conversationIds
 * @param pageSize
 */
export const getGetUnreadMessages = {
  method: 'get' as const,
  path: '/v2/get-unread-messages',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    conversationIds: z.array(z.number()),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_MultigetConversationMessagesResponse),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/get-user-conversations
 * @param pageNumber
 * @param pageSize
 */
export const getGetUserConversations = {
  method: 'get' as const,
  path: '/v2/get-user-conversations',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    pageNumber: z.number().int(),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_Conversation),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/mark-as-read
 * @param body
 */
export const postMarkAsRead = {
  method: 'post' as const,
  path: '/v2/mark-as-read',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_MarkAsReadRequest,
  },
  response: Roblox_Chat_Api_Models_MarkAsReadResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/mark-as-seen
 * @param body
 */
export const postMarkAsSeen = {
  method: 'post' as const,
  path: '/v2/mark-as-seen',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_MarkAsSeenRequest,
  },
  response: Roblox_Chat_Api_Models_MarkAsSeenResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/metadata
 */
export const getMetadata = {
  method: 'get' as const,
  path: '/v2/metadata',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Chat_Api_Models_ChatMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://chat.roblox.com/v2/multi-get-latest-messages
 * @param conversationIds
 * @param pageSize
 */
export const getMultiGetLatestMessages = {
  method: 'get' as const,
  path: '/v2/multi-get-latest-messages',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    conversationIds: z.array(z.number()),
    pageSize: z.number().int(),
  },
  response: z.array(Roblox_Chat_Api_Models_MultigetConversationMessagesResponse),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/remove-from-conversation
 * @param body
 */
export const postRemoveFromConversation = {
  method: 'post' as const,
  path: '/v2/remove-from-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_RemoveUserFromConversationRequest,
  },
  response: Roblox_Chat_Api_Models_RemoveUserFromConversationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/rename-group-conversation
 * @param body
 */
export const postRenameGroupConversation = {
  method: 'post' as const,
  path: '/v2/rename-group-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_RenameGroupConversationRequest,
  },
  response: Roblox_Chat_Api_Models_RenameConversationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/reset-conversation-universe
 * @param body
 */
export const postResetConversationUniverse = {
  method: 'post' as const,
  path: '/v2/reset-conversation-universe',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ conversationId: z.number().int() }),
  },
  response: z.object({ statusMessage: z.string() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/send-game-link-message
 * @param body
 */
export const postSendGameLinkMessage = {
  method: 'post' as const,
  path: '/v2/send-game-link-message',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_SendGameLinkChatMessageRequest,
  },
  response: Roblox_Chat_Api_Models_SendLinkChatResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/send-message
 * @param body
 */
export const postSendMessage = {
  method: 'post' as const,
  path: '/v2/send-message',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_SendPlainTextChatMessageRequest,
  },
  response: Roblox_Chat_Api_Models_SendPlainTextChatMessageResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/set-conversation-universe
 * @param body
 */
export const postSetConversationUniverse = {
  method: 'post' as const,
  path: '/v2/set-conversation-universe',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_SetConversationUniverseRequest,
  },
  response: z.object({ statusMessage: z.string() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/start-cloud-edit-conversation
 * @param body
 */
export const postStartCloudEditConversation = {
  method: 'post' as const,
  path: '/v2/start-cloud-edit-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ placeId: z.number().int() }),
  },
  response: Roblox_Chat_Api_Models_StartNewConversationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/start-group-conversation
 * @param body
 */
export const postStartGroupConversation = {
  method: 'post' as const,
  path: '/v2/start-group-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_CreateGroupConversationRequest,
  },
  response: Roblox_Chat_Api_Models_StartNewConversationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/start-one-to-one-conversation
 * @param body
 */
export const postStartOneToOneConversation = {
  method: 'post' as const,
  path: '/v2/start-one-to-one-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ participantUserId: z.number().int() }),
  },
  response: Roblox_Chat_Api_Models_StartNewConversationResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://chat.roblox.com/v2/update-user-typing-status
 * @param body
 */
export const postUpdateUserTypingStatus = {
  method: 'post' as const,
  path: '/v2/update-user-typing-status',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_UpdateUserTypingStatusRequest,
  },
  response: z.object({ statusMessage: z.string() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
