import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_ = z.object({
  data: z.array(z.string()),
});
const Roblox_TranslationRoles_Api_Assignee = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.enum(['user', 'group', 'groupRole']),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_TranslationRoles_Api_Assignee_ = z.object({
  data: z.array(Roblox_TranslationRoles_Api_Assignee),
});
const Roblox_GameLocalization_Client_GameLocalizationRoles_Assignee = z.object({
  assigneeType: z.enum(['user', 'group', 'groupRole']),
  id: z.number().int(),
});
const Roblox_GameLocalization_Client_GameLocalizationRoles_GameLocalizationRoleAssignment = z.object({
  gameId: z.number().int(),
  assignee: Roblox_GameLocalization_Client_GameLocalizationRoles_Assignee,
});
const Roblox_TranslationRoles_Api_GetGameLocalizationRoleAssignmentsForUserResponse = z.object({
  games: z.array(Roblox_GameLocalization_Client_GameLocalizationRoles_GameLocalizationRoleAssignment),
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
});
const Roblox_TranslationRoles_Api_UpdateRoleRequest = z.object({
  assigneeId: z.number().int(),
  assigneeType: z.enum(['user', 'group', 'groupRole']),
  role: z.literal('translator'),
  revoke: z.boolean(),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

/**
 * @api PATCH https://translationroles.roblox.com/v1/game-localization-roles/games/:gameId
 * @summary Assigns or revokes a role
 * @param body The request body
 * @param gameId The id of the game
 */
export const patchGameLocalizationRolesGamesGameid = endpoint({
  method: 'PATCH',
  path: '/v1/game-localization-roles/games/:gameId',
  baseUrl: 'https://translationroles.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    gameId: {
      style: 'simple',
    },
  },
  parameters: {
    gameId: z.number().int(),
  },
  body: Roblox_TranslationRoles_Api_UpdateRoleRequest.optional(),
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: Invalid game id
4: Invalid assignee id
6: Request body can&#x27;t be null
7: The role you are assigning has reached max limit`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: You must be authorized to use this endpoint`,
    },
    {
      status: 429,
      description: `5: Too many attempts. Please try again later.`,
    },
    {
      status: 503,
      description: `2: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://translationroles.roblox.com/v1/game-localization-roles/games/:gameId/current-user/roles
 * @summary Retrieves the list of roles granted to current logged-in user
 * @param gameId The id of the game
 */
export const getGameLocalizationRolesGamesGameidCurrentUserRoles = endpoint({
  method: 'GET',
  path: '/v1/game-localization-roles/games/:gameId/current-user/roles',
  baseUrl: 'https://translationroles.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_,
  errors: [
    {
      status: 400,
      description: `3: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 503,
      description: `2: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://translationroles.roblox.com/v1/game-localization-roles/games/:gameId/roles/:role/assignees
 * @summary Gets list of users assigned a specific role in a game.
 * @param gameId The id of the game
 * @param role The Roblox.GameLocalization.Client.GameLocalizationRoles.GameLocalizationRoleType
 */
export const getGameLocalizationRolesGamesGameidRolesRoleAssignees = endpoint({
  method: 'GET',
  path: '/v1/game-localization-roles/games/:gameId/roles/:role/assignees',
  baseUrl: 'https://translationroles.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
    role: {
      style: 'simple',
    },
  },
  parameters: {
    gameId: z.number().int(),
    role: z.literal('translator'),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_TranslationRoles_Api_Assignee_,
  errors: [
    {
      status: 400,
      description: `3: Invalid game id`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `1: You must be authorized to use this endpoint`,
    },
    {
      status: 503,
      description: `2: Feature is disabled`,
    },
  ],
});
/**
 * @api GET https://translationroles.roblox.com/v1/game-localization-roles/roles/:role/current-user
 * @summary Gets the list of games and associated role assignment info for the requested user and role.
 * @param role The Roblox.GameLocalization.Client.GameLocalizationRoles.GameLocalizationRoleType
 * @param exclusiveStartKey Part of pagination. Last primary key of returned items in previous operation.
 * @param pageSize Part of pagination. Maximum number of items that might be returned in the page.
 * @param groupId Optional seleted groupId of resources requested for the user and role.
 */
export const getGameLocalizationRolesRolesRoleCurrentUser = endpoint({
  method: 'GET',
  path: '/v1/game-localization-roles/roles/:role/current-user',
  baseUrl: 'https://translationroles.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    role: {
      style: 'simple',
    },
    exclusiveStartKey: {
      style: 'form',
      explode: true,
    },
    pageSize: {
      style: 'form',
      explode: true,
    },
    groupId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    role: z.literal('translator'),
    exclusiveStartKey: z.string().optional(),
    pageSize: z.number().int().optional(),
    groupId: z.number().int().optional(),
  },
  response: Roblox_TranslationRoles_Api_GetGameLocalizationRoleAssignmentsForUserResponse,
  errors: [
    {
      status: 400,
      description: `10: Invalid page size
11: Maximum page size exceeded
12: Invalid exclusive start key`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `0: An unknown error occurred`,
    },
    {
      status: 503,
      description: `2: Feature is disabled`,
    },
  ],
});
