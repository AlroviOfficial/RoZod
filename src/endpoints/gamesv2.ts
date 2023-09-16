import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Games_GameMediaItemResponseV2 = z
  .object({
    assetTypeId: z.number().int(),
    assetType: z.string(),
    imageId: z.number().int(),
    videoHash: z.string(),
    videoTitle: z.string(),
    approved: z.boolean(),
    altText: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Games_GameMediaItemResponseV2_ = z
  .object({
    data: z.array(Roblox_Web_Responses_Games_GameMediaItemResponseV2),
  })
  .passthrough();
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_ = z
  .object({
    id: z.number().int(),
    type: z.union([z.literal(0), z.literal(1)]),
    name: z.string(),
  })
  .passthrough();
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_ = z
  .object({
    id: z.number().int(),
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
      z.literal(11),
      z.literal(12),
      z.literal(13),
      z.literal(16),
      z.literal(17),
      z.literal(18),
      z.literal(19),
      z.literal(21),
      z.literal(22),
      z.literal(24),
      z.literal(25),
      z.literal(26),
      z.literal(27),
      z.literal(28),
      z.literal(29),
      z.literal(30),
      z.literal(31),
      z.literal(32),
      z.literal(33),
      z.literal(34),
      z.literal(35),
      z.literal(37),
      z.literal(38),
      z.literal(39),
      z.literal(40),
      z.literal(41),
      z.literal(42),
      z.literal(43),
      z.literal(44),
      z.literal(45),
      z.literal(46),
      z.literal(47),
      z.literal(48),
      z.literal(49),
      z.literal(50),
      z.literal(51),
      z.literal(52),
      z.literal(53),
      z.literal(54),
      z.literal(55),
      z.literal(56),
      z.literal(59),
      z.literal(60),
      z.literal(61),
      z.literal(62),
      z.literal(63),
      z.literal(64),
      z.literal(65),
      z.literal(66),
      z.literal(67),
      z.literal(68),
      z.literal(69),
      z.literal(70),
      z.literal(71),
      z.literal(72),
      z.literal(73),
      z.literal(74),
      z.literal(75),
      z.literal(76),
      z.literal(77),
      z.literal(78),
      z.literal(79),
      z.literal(80),
    ]),
    name: z.string(),
  })
  .passthrough();
const Roblox_Web_Responses_Games_GameResponseV2 = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    creator: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_,
    rootPlace: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_,
    created: z.string().datetime({ offset: true }),
    updated: z.string().datetime({ offset: true }),
    placeVisits: z.number().int(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Web_Responses_Games_GameResponseV2),
  })
  .passthrough();

const schemas = {
  Roblox_Web_Responses_Games_GameMediaItemResponseV2,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Games_GameMediaItemResponseV2_,
  Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_,
  Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_,
  Roblox_Web_Responses_Games_GameResponseV2,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_,
};

/**
 * @api GET https://games.roblox.com/v2/games/:universeId/media
 * @summary Get the game media data
 * @param universeId The id of the universe we get media data from.
 */
export const getGamesUniverseidMedia = endpoint({
  method: 'get' as const,
  path: '/v2/games/:universeId/media',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Games_GameMediaItemResponseV2_,
  errors: [
    {
      status: 400,
      description: `3: The universe&#x27;s root place is invalid.`,
    },
    {
      status: 404,
      description: `2: The requested universe does not exist.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v2/groups/:groupId/games
 * @summary Gets games created by the specified group.
 * @param groupId The group Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidGames = endpoint({
  method: 'get' as const,
  path: '/v2/groups/:groupId/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    accessFilter: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    accessFilter: z
      .union([z.literal(1), z.literal(2), z.literal(4)])
      .optional()
      .default(1),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_,
  errors: [
    {
      status: 403,
      description: `3: Not authorized.`,
    },
    {
      status: 500,
      description: `0: Compliance Context service is unavailable.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v2/groups/:groupId/gamesV2
 * @summary Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
 * @param groupId The group Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidGamesv2 = endpoint({
  method: 'get' as const,
  path: '/v2/groups/:groupId/gamesV2',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    accessFilter: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    accessFilter: z
      .union([z.literal(1), z.literal(2), z.literal(4)])
      .optional()
      .default(1),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_,
  errors: [
    {
      status: 500,
      description: `0: Compliance Context service is unavailable.`,
    },
    {
      status: 501,
      description: `1: Code path is not Implemented.`,
    },
  ],
});
/**
 * @api GET https://games.roblox.com/v2/users/:userId/favorite/games
 * @summary Gets users favorite games.
 * @param userId The user Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersUseridFavoriteGames = endpoint({
  method: 'get' as const,
  path: '/v2/users/:userId/favorite/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    accessFilter: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    accessFilter: z
      .union([z.literal(1), z.literal(2), z.literal(4)])
      .optional()
      .default(2),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_,
  errors: [],
});
/**
 * @api GET https://games.roblox.com/v2/users/:userId/games
 * @summary Gets games created by the specified user.
 * @param userId The user Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersUseridGames = endpoint({
  method: 'get' as const,
  path: '/v2/users/:userId/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    accessFilter: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    accessFilter: z
      .union([z.literal(1), z.literal(2), z.literal(4)])
      .optional()
      .default(2),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_,
  errors: [],
});
