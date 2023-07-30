import { z } from "zod";
import { endpoint } from "..";

const Roblox_Users_Api_BirthdateResponse = z
  .object({
    birthMonth: z.number().int(),
    birthDay: z.number().int(),
    birthYear: z.number().int(),
  })
  .passthrough();
const Roblox_Users_Api_BirthdateRequest = z
  .object({
    birthMonth: z.number().int(),
    birthDay: z.number().int(),
    birthYear: z.number().int(),
    password: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Users_Api_DescriptionResponse = z
  .object({ description: z.string() })
  .passthrough();
const Roblox_Users_Api_DescriptionRequest = z
  .object({ description: z.string() })
  .passthrough();
const Roblox_Users_Api_GenderResponse = z
  .object({ gender: z.number().int() })
  .passthrough();
const Roblox_Users_Api_GenderRequest = z
  .object({ gender: z.string() })
  .passthrough();
const Roblox_Users_Api_GetUserResponse = z
  .object({
    description: z.string(),
    created: z.string().datetime({ offset: true }),
    isBanned: z.boolean(),
    externalAppDisplayName: z.string(),
    hasVerifiedBadge: z.boolean(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Users_Api_UsernameHistoryResponse = z
  .object({ name: z.string() })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UsernameHistoryResponse_ =
  z
    .object({
      previousPageCursor: z.string(),
      nextPageCursor: z.string(),
      data: z.array(Roblox_Users_Api_UsernameHistoryResponse),
    })
    .passthrough();
const Roblox_Users_Api_AuthenticatedUserResponse = z
  .object({ id: z.number().int(), name: z.string(), displayName: z.string() })
  .passthrough();
const Roblox_Users_Api_UserAgeBracketResponse = z
  .object({ ageBracket: z.number().int() })
  .passthrough();
const Roblox_Users_Api_UserCountryCodeResponse = z
  .object({ countryCode: z.string() })
  .passthrough();
const Roblox_Users_Api_UserRolesResponse = z
  .object({ roles: z.array(z.string()) })
  .passthrough();
const Roblox_Users_Api_UserSearchResponse = z
  .object({
    previousUsernames: z.array(z.string()),
    hasVerifiedBadge: z.boolean(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UserSearchResponse_ =
  z
    .object({
      previousPageCursor: z.string(),
      nextPageCursor: z.string(),
      data: z.array(Roblox_Users_Api_UserSearchResponse),
    })
    .passthrough();
const Roblox_Users_Api_MultiGetByUsernameRequest = z
  .object({ usernames: z.array(z.string()), excludeBannedUsers: z.boolean() })
  .passthrough();
const Roblox_Users_Api_MultiGetUserByNameResponse = z
  .object({
    requestedUsername: z.string(),
    hasVerifiedBadge: z.boolean(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserByNameResponse_ =
  z
    .object({ data: z.array(Roblox_Users_Api_MultiGetUserByNameResponse) })
    .passthrough();
const Roblox_Users_Api_MultiGetByUserIdRequest = z
  .object({ userIds: z.array(z.number()), excludeBannedUsers: z.boolean() })
  .passthrough();
const Roblox_Users_Api_VerifiedBadgeUserResponse = z
  .object({
    hasVerifiedBadge: z.boolean(),
    id: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_VerifiedBadgeUserResponse_ =
  z
    .object({ data: z.array(Roblox_Users_Api_VerifiedBadgeUserResponse) })
    .passthrough();
const Roblox_Users_Api_SetDisplayNameRequest = z
  .object({ newDisplayName: z.string() })
  .passthrough();

const schemas = {
  Roblox_Users_Api_BirthdateResponse,
  Roblox_Users_Api_BirthdateRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Users_Api_DescriptionResponse,
  Roblox_Users_Api_DescriptionRequest,
  Roblox_Users_Api_GenderResponse,
  Roblox_Users_Api_GenderRequest,
  Roblox_Users_Api_GetUserResponse,
  Roblox_Users_Api_UsernameHistoryResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UsernameHistoryResponse_,
  Roblox_Users_Api_AuthenticatedUserResponse,
  Roblox_Users_Api_UserAgeBracketResponse,
  Roblox_Users_Api_UserCountryCodeResponse,
  Roblox_Users_Api_UserRolesResponse,
  Roblox_Users_Api_UserSearchResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UserSearchResponse_,
  Roblox_Users_Api_MultiGetByUsernameRequest,
  Roblox_Users_Api_MultiGetUserByNameResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserByNameResponse_,
  Roblox_Users_Api_MultiGetByUserIdRequest,
  Roblox_Users_Api_VerifiedBadgeUserResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_VerifiedBadgeUserResponse_,
  Roblox_Users_Api_SetDisplayNameRequest,
};

/**
 * @api get https://users.roblox.com/v1/birthdate
 */
export const getBirthdate = endpoint({
  method: "get" as const,
  path: "/v1/birthdate",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: Roblox_Users_Api_BirthdateResponse,
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://users.roblox.com/v1/birthdate
 * @param body The Roblox.Users.Api.BirthdateRequest
 */
export const postBirthdate = endpoint({
  method: "post" as const,
  path: "/v1/birthdate",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_BirthdateRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.
4: The birthdate provided is invalid.
8: Password is incorrect.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.
5: Invalid birthdate change.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.
5: Invalid birthdate change.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/description
 */
export const getDescription = endpoint({
  method: "get" as const,
  path: "/v1/description",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: z.object({ description: z.string() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://users.roblox.com/v1/description
 * @param body The Roblox.Users.Api.DescriptionRequest
 */
export const postDescription = endpoint({
  method: "post" as const,
  path: "/v1/description",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ description: z.string() }).passthrough(),
  response: z.object({ description: z.string() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `3: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/display-names/validate
 * @param displayName
 * @param birthdate
 */
export const getDisplayNamesValidate = endpoint({
  method: "get" as const,
  path: "/v1/display-names/validate",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    displayName: {
      style: "form",
      explode: true,
    },
    birthdate: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    displayName: z.string(),
    birthdate: z.string().datetime({ offset: true }),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Display name is too short
2: Display name is too long
3: Display name contains invalid characters
4: Display name has been moderated
6: Request must contain a birthdate`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: Display name updates for this user have been throttled`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/gender
 */
export const getGender = endpoint({
  method: "get" as const,
  path: "/v1/gender",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: z.object({ gender: z.number().int() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://users.roblox.com/v1/gender
 * @param body The Roblox.Users.Api.GenderRequest
 */
export const postGender = endpoint({
  method: "post" as const,
  path: "/v1/gender",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ gender: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: User not found.
6: The gender provided is invalid.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://users.roblox.com/v1/usernames/users
 * @param body The Roblox.Users.Api.MultiGetByUsernameRequest.
 * @description This endpoint will also check previous usernames.
Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
 */
export const postUsernamesUsers = endpoint({
  method: "post" as const,
  path: "/v1/usernames/users",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_MultiGetByUsernameRequest,
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_MultiGetUserByNameResponse_,
  errors: [
    {
      status: 400,
      description: `2: Too many usernames.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://users.roblox.com/v1/users
 * @param body The Roblox.Users.Api.MultiGetByUserIdRequest.
 * @description Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
 */
export const postUsers = endpoint({
  method: "post" as const,
  path: "/v1/users",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Users_Api_MultiGetByUserIdRequest,
  response:
    Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Users_Api_VerifiedBadgeUserResponse_,
  errors: [
    {
      status: 400,
      description: `1: Too many ids.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/:userId
 * @param userId
 */
export const getUsersUserid = endpoint({
  method: "get" as const,
  path: "/v1/users/:userId",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    userId: {
      style: "simple",
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Users_Api_GetUserResponse,
  errors: [
    {
      status: 404,
      description: `3: The user id is invalid.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api patch https://users.roblox.com/v1/users/:userId/display-names
 * @param body Roblox.Users.Api.SetDisplayNameRequest
 * @param userId
 */
export const patchUsersUseridDisplayNames = endpoint({
  method: "patch" as const,
  path: "/v1/users/:userId/display-names",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    userId: {
      style: "simple",
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  body: z.object({ newDisplayName: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Display name is too short
2: Display name is too long
3: Display name contains invalid characters
4: Display name has been moderated`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed
7: The user id is invalid.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: Display name updates for this user have been throttled`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/:userId/display-names/validate
 * @param userId
 * @param displayName
 */
export const getUsersUseridDisplayNamesValidate = endpoint({
  method: "get" as const,
  path: "/v1/users/:userId/display-names/validate",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    userId: {
      style: "simple",
    },
    displayName: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    displayName: z.string(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Display name is too short
2: Display name is too long
3: Display name contains invalid characters
4: Display name has been moderated`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `7: The user id is invalid.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `5: Display name updates for this user have been throttled`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/:userId/username-history
 * @param userId
 * @param limit
 * @param cursor
 * @param sortOrder
 */
export const getUsersUseridUsernameHistory = endpoint({
  method: "get" as const,
  path: "/v1/users/:userId/username-history",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    userId: {
      style: "simple",
    },
    limit: {
      style: "form",
      explode: true,
    },
    cursor: {
      style: "form",
      explode: true,
    },
    sortOrder: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(["Asc", "Desc"]).optional().default("Asc"),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UsernameHistoryResponse_,
  errors: [
    {
      status: 400,
      description: `3: The user id is invalid.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/authenticated
 */
export const getUsersAuthenticated = endpoint({
  method: "get" as const,
  path: "/v1/users/authenticated",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: Roblox_Users_Api_AuthenticatedUserResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/authenticated/age-bracket
 */
export const getUsersAuthenticatedAgeBracket = endpoint({
  method: "get" as const,
  path: "/v1/users/authenticated/age-bracket",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: z.object({ ageBracket: z.number().int() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/authenticated/country-code
 */
export const getUsersAuthenticatedCountryCode = endpoint({
  method: "get" as const,
  path: "/v1/users/authenticated/country-code",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: z.object({ countryCode: z.string() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/authenticated/roles
 */
export const getUsersAuthenticatedRoles = endpoint({
  method: "get" as const,
  path: "/v1/users/authenticated/roles",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  response: Roblox_Users_Api_UserRolesResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api get https://users.roblox.com/v1/users/search
 * @param keyword
 * @param limit
 * @param cursor
 */
export const getUsersSearch = endpoint({
  method: "get" as const,
  path: "/v1/users/search",
  baseUrl: "https://users.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    keyword: {
      style: "form",
      explode: true,
    },
    limit: {
      style: "form",
      explode: true,
    },
    cursor: {
      style: "form",
      explode: true,
    },
  },
  parameters: {
    keyword: z.string(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response:
    Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Users_Api_UserSearchResponse_,
  errors: [
    {
      status: 400,
      description: `5: The keyword was filtered.
6: The keyword is too short.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `4: Too many requests.`,
      schema: z.void(),
    },
  ],
});
