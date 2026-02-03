import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Contacts_Api_Models_Response_ContactsMetadataResponseModel = z.object({
  multiGetContactsMaxSize: z.number().int(),
  multiGetContactsCacheTTLinMS: z.number().int(),
});
const Roblox_Contacts_Api_Response_ValidateUserTagResponseModel = z.object({
  status: z.enum(['Success', 'Moderated', 'TooLong']),
});
const Roblox_Contacts_Api_Request_GetUserTagsRequestModel = z.object({
  targetUserIds: z.array(z.number().int()),
});
const Roblox_Contacts_Api_Response_GetUserTagsResponseModel = z.object({
  targetUserId: z.number().int(),
  targetUserTag: z.string(),
});
const Roblox_Contacts_Api_Request_SetUserTagRequestModel = z.object({
  targetUserId: z.number().int(),
  userTag: z.string(),
});
const Roblox_Contacts_Api_Response_SetUserTagResponseModel = z.object({
  status: z.enum(['Success', 'Moderated']),
});

/**
 * @api GET https://contacts.roblox.com/v1/contacts/metadata
 */
export const getContactsMetadata = endpoint({
  method: 'GET',
  path: '/v1/contacts/metadata',
  baseUrl: 'https://contacts.roblox.com',
  requestFormat: 'json',
  response: Roblox_Contacts_Api_Models_Response_ContactsMetadataResponseModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://contacts.roblox.com/v1/user/get-tags
 * @param body
 */
export const postUserGetTags = endpoint({
  method: 'POST',
  path: '/v1/user/get-tags',
  baseUrl: 'https://contacts.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Contacts_Api_Request_GetUserTagsRequestModel,
  response: z.array(Roblox_Contacts_Api_Response_GetUserTagsResponseModel),
  errors: [
    {
      status: 400,
      description: `4: Invalid parameters.
8: Too many user Tags are requested.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 429,
      description: `10: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api POST https://contacts.roblox.com/v1/user/tag
 * @param body The tag receiving userId and the tag itself
 */
export const postUserTag = endpoint({
  method: 'POST',
  path: '/v1/user/tag',
  baseUrl: 'https://contacts.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Contacts_Api_Request_SetUserTagRequestModel,
  response: Roblox_Contacts_Api_Response_SetUserTagResponseModel,
  errors: [
    {
      status: 400,
      description: `2: The target user is invalid or does not exist.
4: Invalid parameters.
6: The userTag is too long.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
5: The user cannot tag themselves.`,
    },
    {
      status: 429,
      description: `10: The flood limit has been exceeded.`,
    },
  ],
});
/**
 * @api GET https://contacts.roblox.com/v1/user/tag/validate
 * @param alias
 */
export const getUserTagValidate = endpoint({
  method: 'GET',
  path: '/v1/user/tag/validate',
  baseUrl: 'https://contacts.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    alias: {},
  },
  parameters: {
    alias: z.string().optional(),
  },
  response: Roblox_Contacts_Api_Response_ValidateUserTagResponseModel,
  errors: [
    {
      status: 400,
      description: `4: Invalid parameters.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 429,
      description: `10: The flood limit has been exceeded.`,
    },
  ],
});
