import { z } from 'zod';
import { endpoint } from '..';

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
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
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
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
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
const Roblox_PrivateMessages_Api_Models_UnreadMessagesCountResponse = z.object({
  count: z.number().int(),
});
const Roblox_PrivateMessages_Api_Models_BatchMessagesRequest = z.object({
  messageIds: z.array(z.number().int()),
});
const Roblox_PrivateMessages_Api_Models_FailedMessageResponse = z.object({
  messageId: z.number().int(),
  errorMessage: z.string(),
});
const Roblox_PrivateMessages_Api_Models_BatchMessagesResponse = z.object({
  failedMessages: z.array(Roblox_PrivateMessages_Api_Models_FailedMessageResponse),
});

/**
 * @api GET https://privatemessages.roblox.com/v1/announcements
 */
export const getAnnouncements = endpoint({
  method: 'GET',
  path: '/v1/announcements',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  response: Roblox_PrivateMessages_Api_Models_GetAnnouncementsResponse,
  errors: [
    {
      status: 400,
      description: `2: Message does not exist or the current user is not authorized to view it.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/announcements/metadata
 */
export const getAnnouncementsMetadata = endpoint({
  method: 'GET',
  path: '/v1/announcements/metadata',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  response: z.object({ numOfAnnouncements: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/messages
 * @param pageNumber
 * @param pageSize
 * @param messageTab
 */
export const getMessages = endpoint({
  method: 'GET',
  path: '/v1/messages',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    pageNumber: {},
    pageSize: {},
    messageTab: {},
  },
  parameters: {
    pageNumber: z.number().int().optional().default(0),
    pageSize: z.number().int().optional().default(20),
    messageTab: z.enum(['Inbox', 'Sent', 'Archive']).optional().default('Inbox'),
  },
  response: Roblox_PrivateMessages_Api_Models_GetMessagesResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://privatemessages.roblox.com/v1/messages/:messageId
 * @param messageId
 */
export const getMessagesMessageid = endpoint({
  method: 'GET',
  path: '/v1/messages/:messageId',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    messageId: {},
  },
  parameters: {
    messageId: z.number().int(),
  },
  response: Roblox_PrivateMessages_Api_Models_MessageDetailsResponse,
  errors: [
    {
      status: 400,
      description: `2: Message does not exist or the current user is not authorized to view it.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://privatemessages.roblox.com/v1/messages/archive
 * @param body
 */
export const postMessagesArchive = endpoint({
  method: 'POST',
  path: '/v1/messages/archive',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
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
 * @api POST https://privatemessages.roblox.com/v1/messages/mark-read
 * @param body
 */
export const postMessagesMarkRead = endpoint({
  method: 'POST',
  path: '/v1/messages/mark-read',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
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
 * @api POST https://privatemessages.roblox.com/v1/messages/mark-unread
 * @param body
 */
export const postMessagesMarkUnread = endpoint({
  method: 'POST',
  path: '/v1/messages/mark-unread',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
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
 * @api POST https://privatemessages.roblox.com/v1/messages/unarchive
 * @param body
 */
export const postMessagesUnarchive = endpoint({
  method: 'POST',
  path: '/v1/messages/unarchive',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_PrivateMessages_Api_Models_BatchMessagesRequest,
  response: Roblox_PrivateMessages_Api_Models_BatchMessagesResponse,
  errors: [
    {
      status: 400,
      description: `5: Too many ids in a batch request.`,
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
 * @api GET https://privatemessages.roblox.com/v1/messages/unread/count
 */
export const getMessagesUnreadCount = endpoint({
  method: 'GET',
  path: '/v1/messages/unread/count',
  baseUrl: 'https://privatemessages.roblox.com',
  requestFormat: 'json',
  response: z.object({ count: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
