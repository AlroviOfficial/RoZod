import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Users_Api_BirthdateResponse = z.object({
  birthMonth: z.number().int(),
  birthDay: z.number().int(),
  birthYear: z.number().int(),
});
const Roblox_Users_Api_BirthdateRequest = z.object({
  birthMonth: z.number().int(),
  birthDay: z.number().int(),
  birthYear: z.number().int(),
  password: z.string(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Users_Api_DescriptionResponse = z.object({
  description: z.string(),
});
const Roblox_Users_Api_DescriptionRequest = z.object({
  description: z.string(),
});
const Roblox_Users_Api_GenderResponse = z.object({ gender: z.number().int() });
const Roblox_Users_Api_GenderRequest = z.object({
  gender: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Users_Api_GetUserResponse = z.object({
  description: z.string(),
  created: z.string().datetime({ offset: true }),
  isBanned: z.boolean(),
  externalAppDisplayName: z.string(),
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Users_Api_UsernameHistoryResponse = z.object({ name: z.string() });
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UsernameHistoryResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Users_Api_UsernameHistoryResponse),
});
const Roblox_Users_Api_AuthenticatedGetUserResponse = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Users_Api_UserAgeBracketResponse = z.object({
  ageBracket: z.number().int(),
});
const Roblox_Users_Api_UserCountryCodeResponse = z.object({
  countryCode: z.string(),
});
const Roblox_Users_Api_UserRolesResponse = z.object({
  roles: z.array(z.string()),
});
const Roblox_Users_Api_SearchGetUserResponse = z.object({
  previousUsernames: z.array(z.string()),
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_SearchGetUserResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Users_Api_SearchGetUserResponse),
});
const Roblox_Users_Api_MultiGetByUsernameRequest = z.object({
  usernames: z.array(z.string()),
  excludeBannedUsers: z.boolean(),
});
const Roblox_Users_Api_MultiGetUserByNameResponse = z.object({
  requestedUsername: z.string(),
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserByNameResponse_ = z.object({
  data: z.array(Roblox_Users_Api_MultiGetUserByNameResponse),
});
const Roblox_Users_Api_MultiGetByUserIdRequest = z.object({
  userIds: z.array(z.number().int()),
  excludeBannedUsers: z.boolean(),
});
const Roblox_Users_Api_MultiGetUserResponse = z.object({
  hasVerifiedBadge: z.boolean(),
  id: z.number().int(),
  name: z.string(),
  displayName: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserResponse_ = z.object({
  data: z.array(Roblox_Users_Api_MultiGetUserResponse),
});
const Roblox_Users_Api_SetDisplayNameRequest = z.object({
  newDisplayName: z.string(),
});

/**
 * @api GET https://users.roblox.com/v1/birthdate
 */
export const getBirthdate = endpoint({
  method: 'GET',
  path: '/v1/birthdate',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: Roblox_Users_Api_BirthdateResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://users.roblox.com/v1/birthdate
 * @param body The Roblox.Users.Api.BirthdateRequest
 */
export const postBirthdate = endpoint({
  method: 'POST',
  path: '/v1/birthdate',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_BirthdateRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: User not found.
4: The birthdate provided is invalid.
8: Password is incorrect.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.
5: Invalid birthdate change.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: Invalid birthdate change.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/description
 */
export const getDescription = endpoint({
  method: 'GET',
  path: '/v1/description',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://users.roblox.com/v1/description
 * @param body The Roblox.Users.Api.DescriptionRequest
 */
export const postDescription = endpoint({
  method: 'POST',
  path: '/v1/description',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ description: z.string() }),
  response: z.object({ description: z.string() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
    {
      status: 503,
      description: `3: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/display-names/validate
 * @param displayName
 * @param birthdate
 */
export const getDisplayNamesValidate = endpoint({
  method: 'GET',
  path: '/v1/display-names/validate',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    displayName: {},
    birthdate: {},
  },
  parameters: {
    displayName: z.string(),
    birthdate: z.string().datetime({ offset: true }),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Display name is too short
2: Display name is too long
3: Display name contains invalid characters
4: Display name has been moderated
6: Request must contain a birthdate
8: Display name has too many combinations of character sets`,
    },
    {
      status: 429,
      description: `5: Display name updates for this user have been throttled`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/gender
 */
export const getGender = endpoint({
  method: 'GET',
  path: '/v1/gender',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: z.object({ gender: z.number().int() }),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://users.roblox.com/v1/gender
 * @param body The Roblox.Users.Api.GenderRequest
 */
export const postGender = endpoint({
  method: 'POST',
  path: '/v1/gender',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_GenderRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: User not found.
6: The gender provided is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api POST https://users.roblox.com/v1/usernames/users
 * @param body The Roblox.Users.Api.MultiGetByUsernameRequest.
 * @description This endpoint will also check previous usernames.
Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
 */
export const postUsernamesUsers = endpoint({
  method: 'POST',
  path: '/v1/usernames/users',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_MultiGetByUsernameRequest,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserByNameResponse_,
  errors: [
    {
      status: 400,
      description: `2: Too many usernames.`,
    },
  ],
});
/**
 * @api POST https://users.roblox.com/v1/users
 * @param body The Roblox.Users.Api.MultiGetByUserIdRequest.
 * @description Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
 */
export const postUsers = endpoint({
  method: 'POST',
  path: '/v1/users',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_MultiGetByUserIdRequest,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserResponse_,
  errors: [
    {
      status: 400,
      description: `1: Too many ids.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/:userId
 * @param userId
 */
export const getUsersUserid = endpoint({
  method: 'GET',
  path: '/v1/users/:userId',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Users_Api_GetUserResponse,
  errors: [
    {
      status: 404,
      description: `3: The user id is invalid.`,
    },
  ],
});
/**
 * @api PATCH https://users.roblox.com/v1/users/:userId/display-names
 * @param body Roblox.Users.Api.SetDisplayNameRequest
 * @param userId
 */
export const patchUsersUseridDisplayNames = endpoint({
  method: 'PATCH',
  path: '/v1/users/:userId/display-names',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userId: {},
  },
  parameters: {
    userId: z.number().int(),
  },
  body: z.object({ newDisplayName: z.string() }),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Display name is too short
2: Display name is too long
3: Display name contains invalid characters
4: Display name has been moderated
8: Display name has too many combinations of character sets`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
7: The user id is invalid.`,
    },
    {
      status: 429,
      description: `5: Display name updates for this user have been throttled`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/:userId/display-names/validate
 * @param userId
 * @param displayName
 */
export const getUsersUseridDisplayNamesValidate = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/display-names/validate',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    displayName: {},
  },
  parameters: {
    userId: z.number().int(),
    displayName: z.string(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: Display name is too short
2: Display name is too long
3: Display name contains invalid characters
4: Display name has been moderated
8: Display name has too many combinations of character sets`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `7: The user id is invalid.`,
    },
    {
      status: 429,
      description: `5: Display name updates for this user have been throttled`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/:userId/username-history
 * @param userId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersUseridUsernameHistory = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/username-history',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    limit: {},
    cursor: {},
    sortOrder: {},
  },
  parameters: {
    userId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UsernameHistoryResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user id is invalid.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/authenticated
 */
export const getUsersAuthenticated = endpoint({
  method: 'GET',
  path: '/v1/users/authenticated',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: Roblox_Users_Api_AuthenticatedGetUserResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/authenticated/age-bracket
 */
export const getUsersAuthenticatedAgeBracket = endpoint({
  method: 'GET',
  path: '/v1/users/authenticated/age-bracket',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: z.object({ ageBracket: z.number().int() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/authenticated/country-code
 */
export const getUsersAuthenticatedCountryCode = endpoint({
  method: 'GET',
  path: '/v1/users/authenticated/country-code',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: z.object({ countryCode: z.string() }),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/authenticated/roles
 */
export const getUsersAuthenticatedRoles = endpoint({
  method: 'GET',
  path: '/v1/users/authenticated/roles',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  response: Roblox_Users_Api_UserRolesResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://users.roblox.com/v1/users/search
 * @param keyword
 * @param sessionId
 * @param limit
 * @param cursor
 */
export const getUsersSearch = endpoint({
  method: 'GET',
  path: '/v1/users/search',
  baseUrl: 'https://users.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    keyword: {},
    sessionId: {},
    limit: {},
    cursor: {},
  },
  parameters: {
    keyword: z.string(),
    sessionId: z.string().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_SearchGetUserResponse_,
  errors: [
    {
      status: 400,
      description: `5: The keyword was filtered.
6: The keyword is too short.`,
    },
    {
      status: 429,
      description: `4: Too many requests.`,
    },
  ],
});
