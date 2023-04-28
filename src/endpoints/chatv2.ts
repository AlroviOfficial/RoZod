import { z } from 'zod';

const Roblox_Chat_Api_Models_ChatSettingsResponse = z
  .object({
    chatEnabled: z.boolean(),
    isActiveChatUser: z.boolean(),
    isConnectTabEnabled: z.boolean(),
  })
  .partial();
const Roblox_Chat_Api_Models_ChatParticipant = z
  .object({
    type: z.enum(['User', 'System']),
    targetId: z.number().int(),
    name: z.string(),
    displayName: z.string(),
    hasVerifiedBadge: z.boolean(),
  })
  .partial();
const Roblox_Chat_Api_Models_ConversationTitle = z
  .object({ titleForViewer: z.string(), isDefaultTitle: z.boolean() })
  .partial();
const Roblox_Chat_Api_Models_ConversationUniverse = z
  .object({ universeId: z.number().int(), rootPlaceId: z.number().int() })
  .partial();
const Roblox_Chat_Api_Models_Conversation = z
  .object({
    id: z.number().int(),
    title: z.string(),
    initiator: Roblox_Chat_Api_Models_ChatParticipant,
    hasUnreadMessages: z.boolean(),
    participants: z.array(Roblox_Chat_Api_Models_ChatParticipant),
    conversationType: z.enum(['OneToOneConversation', 'MultiUserConversation', 'CloudEditConversation']),
    conversationTitle: Roblox_Chat_Api_Models_ConversationTitle,
    lastUpdated: z.string().datetime(),
    conversationUniverse: Roblox_Chat_Api_Models_ConversationUniverse,
  })
  .partial();
const Roblox_Chat_Api_Models_GameLink = z.object({ universeId: z.number().int() }).partial();
const Roblox_Chat_Api_Models_Link = z
  .object({ type: z.literal('Game'), game: Roblox_Chat_Api_Models_GameLink })
  .partial();
const Roblox_Chat_Api_Models_SetConversationUniverseEventBased = z
  .object({ actorUserId: z.number().int(), universeId: z.number().int() })
  .partial();
const Roblox_Chat_Api_Models_EventBased = z
  .object({
    type: z.literal('SetConversationUniverse'),
    setConversationUniverse: Roblox_Chat_Api_Models_SetConversationUniverseEventBased,
  })
  .partial();
const Roblox_Chat_Api_Models_ChatMessage = z
  .object({
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
  })
  .partial();
const Roblox_Chat_Api_Models_RolloutSettingModel = z
  .object({
    featureName: z.enum(['LuaChat', 'ConversationUniverse', 'PlayTogether', 'Party', 'GameLink', 'OldPlayTogether']),
    isRolloutEnabled: z.boolean(),
  })
  .partial();
const Roblox_Chat_Api_Models_RolloutSettingsResponse = z
  .object({
    rolloutFeatures: z.array(Roblox_Chat_Api_Models_RolloutSettingModel),
  })
  .partial();
const Roblox_Chat_Api_Models_UnreadConversationCountResponse = z.object({ count: z.number().int() }).partial();
const Roblox_Chat_Api_Models_MultigetConversationMessagesResponse = z
  .object({
    conversationId: z.number().int(),
    chatMessages: z.array(Roblox_Chat_Api_Models_ChatMessage),
  })
  .partial();
const Roblox_Chat_Api_Models_ChatMetadataResponse = z
  .object({
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
  })
  .partial();
const Roblox_Chat_Api_Models_AddUsersToConversationRequest = z
  .object({
    participantUserIds: z.array(z.number()),
    conversationId: z.number().int(),
  })
  .partial();
const Roblox_Chat_Api_Models_RejectedChatParticipant = z
  .object({
    rejectedReason: z.string(),
    type: z.enum(['User', 'System']),
    targetId: z.number().int(),
    name: z.string(),
    displayName: z.string(),
    hasVerifiedBadge: z.boolean(),
  })
  .partial();
const Roblox_Chat_Api_Models_AddUserToConversationResponse = z
  .object({
    conversationId: z.number().int(),
    rejectedParticipants: z.array(Roblox_Chat_Api_Models_RejectedChatParticipant),
    resultType: z.literal('Success'),
    statusMessage: z.string(),
  })
  .partial();
const Roblox_Chat_Api_Models_MarkAsReadRequest = z
  .object({ conversationId: z.number().int(), endMessageId: z.string() })
  .partial();
const Roblox_Chat_Api_Models_MarkAsReadResponse = z.object({ resultType: z.literal('Success') }).partial();
const Roblox_Chat_Api_Models_MarkAsSeenRequest = z.object({ conversationsToMarkSeen: z.array(z.number()) }).partial();
const Roblox_Chat_Api_Models_MarkAsSeenResponse = z.object({ resultType: z.literal('Success') }).partial();
const Roblox_Chat_Api_Models_RemoveUserFromConversationRequest = z
  .object({
    participantUserId: z.number().int(),
    conversationId: z.number().int(),
  })
  .partial();
const Roblox_Chat_Api_Models_RemoveUserFromConversationResponse = z
  .object({
    conversationId: z.number().int(),
    resultType: z.literal('Success'),
    statusMessage: z.string(),
  })
  .partial();
const Roblox_Chat_Api_Models_RenameGroupConversationRequest = z
  .object({ conversationId: z.number().int(), newTitle: z.string() })
  .partial();
const Roblox_Chat_Api_Models_RenameConversationResponse = z
  .object({
    conversationTitle: z.string(),
    resultType: z.enum(['Success', 'Moderated', 'TextTooLong']),
    title: Roblox_Chat_Api_Models_ConversationTitle,
    statusMessage: z.string(),
  })
  .partial();
const Roblox_Chat_Api_Models_ResetConversationUniverseRequest = z
  .object({ conversationId: z.number().int() })
  .partial();
const Roblox_Chat_Api_Models_UserVisibleStatusResponse = z.object({ statusMessage: z.string() }).partial();
const Roblox_Chat_Api_Models_SendGameLinkChatMessageRequest = z
  .object({
    universeId: z.number().int(),
    isExperienceInvite: z.boolean(),
    userId: z.number().int(),
    placeId: z.number().int(),
    conversationId: z.number().int(),
    decorators: z.array(z.string()),
  })
  .partial();
const Roblox_Chat_Api_Models_SendLinkChatResponse = z
  .object({
    chatMessageLinkType: z.literal('Game'),
    messageId: z.string(),
    sent: z.string().datetime(),
    messageType: z.enum(['PlainText', 'Link', 'EventBased']),
    resultType: z.enum(['Success', 'Moderated', 'TextTooLong', 'NoRealtimeConnection']),
    statusMessage: z.string(),
  })
  .partial();
const Roblox_Chat_Api_Models_SendPlainTextChatMessageRequest = z
  .object({
    message: z.string(),
    isExperienceInvite: z.boolean(),
    userId: z.number().int(),
    conversationId: z.number().int(),
    decorators: z.array(z.string()),
  })
  .partial();
const Roblox_Chat_Api_Models_SendPlainTextChatMessageResponse = z
  .object({
    content: z.string(),
    filteredForReceivers: z.boolean(),
    messageId: z.string(),
    sent: z.string().datetime(),
    messageType: z.enum(['PlainText', 'Link', 'EventBased']),
    resultType: z.enum(['Success', 'Moderated', 'TextTooLong', 'NoRealtimeConnection']),
    statusMessage: z.string(),
  })
  .partial();
const Roblox_Chat_Api_Models_SetConversationUniverseRequest = z
  .object({ conversationId: z.number().int(), universeId: z.number().int() })
  .partial();
const Roblox_Chat_Api_Models_CreateCloudEditConversationRequest = z.object({ placeId: z.number().int() }).partial();
const Roblox_Chat_Api_Models_StartNewConversationResponse = z
  .object({
    conversation: Roblox_Chat_Api_Models_Conversation,
    rejectedParticipants: z.array(Roblox_Chat_Api_Models_RejectedChatParticipant),
    resultType: z.literal('Success'),
    statusMessage: z.string(),
  })
  .partial();
const Roblox_Chat_Api_Models_CreateGroupConversationRequest = z
  .object({ participantUserIds: z.array(z.number()), title: z.string() })
  .partial();
const Roblox_Chat_Api_Models_CreateOneToOneConversationRequest = z
  .object({ participantUserId: z.number().int() })
  .partial();
const Roblox_Chat_Api_Models_UpdateUserTypingStatusRequest = z
  .object({ conversationId: z.number().int(), isTyping: z.boolean() })
  .partial();

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

export const postV2addToConversation = {
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
export const getV2chatSettings = {
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
export const getV2getConversations = {
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
export const getV2getMessages = {
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
export const getV2getRolloutSettings = {
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
export const getV2getUnreadConversationCount = {
  method: 'get' as const,
  path: '/v2/get-unread-conversation-count',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ count: z.number().int() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV2getUnreadConversations = {
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
export const getV2getUnreadMessages = {
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
export const getV2getUserConversations = {
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
export const postV2markAsRead = {
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
export const postV2markAsSeen = {
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
export const getV2metadata = {
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
export const getV2multiGetLatestMessages = {
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
export const postV2removeFromConversation = {
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
export const postV2renameGroupConversation = {
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
export const postV2resetConversationUniverse = {
  method: 'post' as const,
  path: '/v2/reset-conversation-universe',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ conversationId: z.number().int() }).partial(),
  },
  response: z.object({ statusMessage: z.string() }).partial(),
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
export const postV2sendGameLinkMessage = {
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
export const postV2sendMessage = {
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
export const postV2setConversationUniverse = {
  method: 'post' as const,
  path: '/v2/set-conversation-universe',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_SetConversationUniverseRequest,
  },
  response: z.object({ statusMessage: z.string() }).partial(),
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
export const postV2startCloudEditConversation = {
  method: 'post' as const,
  path: '/v2/start-cloud-edit-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ placeId: z.number().int() }).partial(),
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
export const postV2startGroupConversation = {
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
export const postV2startOneToOneConversation = {
  method: 'post' as const,
  path: '/v2/start-one-to-one-conversation',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ participantUserId: z.number().int() }).partial(),
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
export const postV2updateUserTypingStatus = {
  method: 'post' as const,
  path: '/v2/update-user-typing-status',
  baseUrl: 'https://chat.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Chat_Api_Models_UpdateUserTypingStatusRequest,
  },
  response: z.object({ statusMessage: z.string() }).partial(),
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
