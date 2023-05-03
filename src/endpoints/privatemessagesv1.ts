import { z } from 'zod';

const Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse = z.object({
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_PrivateMessages_Api_Models_AnnouncementsDetailsResponse = z.object({
  id: z.number().int(),
  sender: Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  subject: z.string(),
  body: z.string(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
});
const Roblox_PrivateMessages_Api_Models_GetAnnouncementsResponse = z.object({
  collection: z.array(Roblox_PrivateMessages_Api_Models_AnnouncementsDetailsResponse),
  totalCollectionSize: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_AnnouncementsMetadataResponse = z.object({
  numOfAnnouncements: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_MessageDetailsResponse = z.object({
  id: z.number().int(),
  sender: Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  recipient: Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  subject: z.string(),
  body: z.string(),
  created: z.string().datetime(),
  updated: z.string().datetime(),
  isRead: z.boolean(),
  isSystemMessage: z.boolean(),
  isReportAbuseDisplayed: z.boolean(),
});
const Roblox_PrivateMessages_Api_Models_GetMessagesResponse = z.object({
  collection: z.array(Roblox_PrivateMessages_Api_Models_MessageDetailsResponse),
  totalCollectionSize: z.number().int(),
  totalPages: z.number().int(),
  pageNumber: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_Messages_Response_CanMessageResponse = z.object({ canMessage: z.boolean() });
const Roblox_PrivateMessages_Api_Models_UnreadMessagesCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_BatchMessagesRequest = z.object({
  messageIds: z.array(z.number()),
});
const Roblox_PrivateMessages_Api_Models_FailedMessageResponse = z.object({
  messageId: z.number().int(),
  errorMessage: z.string(),
});
const Roblox_PrivateMessages_Api_Models_BatchMessagesResponse = z.object({
  failedMessages: z.array(Roblox_PrivateMessages_Api_Models_FailedMessageResponse),
});
const Roblox_PrivateMessages_Api_Models_SendMessageRequest = z.object({
  userId: z.number().int(),
  subject: z.string(),
  body: z.string(),
  recipientId: z.number().int(),
  replyMessageId: z.number().int(),
  includePreviousMessage: z.boolean(),
});
const Roblox_PrivateMessages_Api_Models_SendMessageResponse = z.object({
  success: z.boolean(),
  shortMessage: z.string(),
  message: z.string(),
});

const schemas = {
  Roblox_PrivateMessages_Api_Models_VerifiedSkinnyUserResponse,
  Roblox_PrivateMessages_Api_Models_AnnouncementsDetailsResponse,
  Roblox_PrivateMessages_Api_Models_GetAnnouncementsResponse,
  Roblox_PrivateMessages_Api_Models_AnnouncementsMetadataResponse,
  Roblox_PrivateMessages_Api_Models_MessageDetailsResponse,
  Roblox_PrivateMessages_Api_Models_GetMessagesResponse,
  Roblox_PrivateMessages_Api_Models_Messages_Response_CanMessageResponse,
  Roblox_PrivateMessages_Api_Models_UnreadMessagesCountResponse,
  Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  Roblox_PrivateMessages_Api_Models_FailedMessageResponse,
  Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  Roblox_PrivateMessages_Api_Models_SendMessageRequest,
  Roblox_PrivateMessages_Api_Models_SendMessageResponse,
};

/**
 * @api get https://privatemessages.roblox.com/v1/announcements
 */
export const getAnnouncements = {
  method: 'get' as const,
  path: '/v1/announcements',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_PrivateMessages_Api_Models_GetAnnouncementsResponse,
  errors: [
    {
      status: 400,
      description: `2: Message does not exist or the current user is not authorized to view it.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://privatemessages.roblox.com/v1/announcements/metadata
 */
export const getAnnouncementsMetadata = {
  method: 'get' as const,
  path: '/v1/announcements/metadata',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ numOfAnnouncements: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://privatemessages.roblox.com/v1/messages
 * @param pageNumber
 * @param pageSize
 * @param messageTab
 */
export const getMessages = {
  method: 'get' as const,
  path: '/v1/messages',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    pageNumber: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
    messageTab: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    pageNumber: z.number().int().optional(),
    pageSize: z.number().int().optional().default(20),
    messageTab: z.enum(['Inbox', 'Sent', 'Archive']).optional().default('Inbox'),
  },
  response: Roblox_PrivateMessages_Api_Models_GetMessagesResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://privatemessages.roblox.com/v1/messages/:messageId
 * @param messageId
 */
export const getMessagesMessageid = {
  method: 'get' as const,
  path: '/v1/messages/:messageId',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    messageId: {
      style: 'simple',
    },
  },
  parameters: {
    messageId: z.number().int(),
  },
  response: Roblox_PrivateMessages_Api_Models_MessageDetailsResponse,
  errors: [
    {
      status: 400,
      description: `2: Message does not exist or the current user is not authorized to view it.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://privatemessages.roblox.com/v1/messages/:userId/can-message
 * @param userId
 */
export const getMessagesUseridCanMessage = {
  method: 'get' as const,
  path: '/v1/messages/:userId/can-message',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ canMessage: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `8: Invalid user ID.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://privatemessages.roblox.com/v1/messages/archive
 * @param body
 */
export const postMessagesArchive = {
  method: 'post' as const,
  path: '/v1/messages/archive',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  },
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
      schema: z.void(),
    },
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
 * @api post https://privatemessages.roblox.com/v1/messages/mark-read
 * @param body
 */
export const postMessagesMarkRead = {
  method: 'post' as const,
  path: '/v1/messages/mark-read',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  },
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
      schema: z.void(),
    },
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
 * @api post https://privatemessages.roblox.com/v1/messages/mark-unread
 * @param body
 */
export const postMessagesMarkUnread = {
  method: 'post' as const,
  path: '/v1/messages/mark-unread',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  },
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
      schema: z.void(),
    },
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
 * @api post https://privatemessages.roblox.com/v1/messages/send
 * @param body
 */
export const postMessagesSend = {
  method: 'post' as const,
  path: '/v1/messages/send',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_PrivateMessages_Api_Models_SendMessageRequest,
  },
  response: Roblox_PrivateMessages_Api_Models_SendMessageResponse,
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
 * @api post https://privatemessages.roblox.com/v1/messages/unarchive
 * @param body
 */
export const postMessagesUnarchive = {
  method: 'post' as const,
  path: '/v1/messages/unarchive',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  },
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
      schema: z.void(),
    },
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
 * @api get https://privatemessages.roblox.com/v1/messages/unread/count
 */
export const getMessagesUnreadCount = {
  method: 'get' as const,
  path: '/v1/messages/unread/count',
  baseUrl: 'https://privatemessages.roblox.com',
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
