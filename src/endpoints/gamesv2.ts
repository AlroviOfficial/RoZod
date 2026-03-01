import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Games_GameMediaItemResponseV2 = z.object({
  assetTypeId: z.number().int(),
  assetType: z.string(),
  imageId: z.number().int(),
  videoHash: z.string(),
  videoTitle: z.string(),
  approved: z.boolean(),
  altText: z.string(),
  videoId: z.string(),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Games_GameMediaItemResponseV2_ = z.object({
  data: z.array(Roblox_Web_Responses_Games_GameMediaItemResponseV2),
});
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_ = z.object({
  id: z.number().int(),
  type: z.enum(['User', 'Group']),
  name: z.string(),
});
const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_ = z.object({
  id: z.number().int(),
  type: z.enum([
    'Image',
    'TShirt',
    'Audio',
    'Mesh',
    'Lua',
    'HTML',
    'Text',
    'Hat',
    'Place',
    'Model',
    'Shirt',
    'Pants',
    'Decal',
    'Avatar',
    'Head',
    'Face',
    'Gear',
    'Badge',
    'GroupEmblem',
    'Animation',
    'Arms',
    'Legs',
    'Torso',
    'RightArm',
    'LeftArm',
    'LeftLeg',
    'RightLeg',
    'Package',
    'YouTubeVideo',
    'GamePass',
    'App',
    'Code',
    'Plugin',
    'SolidModel',
    'MeshPart',
    'HairAccessory',
    'FaceAccessory',
    'NeckAccessory',
    'ShoulderAccessory',
    'FrontAccessory',
    'BackAccessory',
    'WaistAccessory',
    'ClimbAnimation',
    'DeathAnimation',
    'FallAnimation',
    'IdleAnimation',
    'JumpAnimation',
    'RunAnimation',
    'SwimAnimation',
    'WalkAnimation',
    'PoseAnimation',
    'LocalizationTableManifest',
    'LocalizationTableTranslation',
    'EmoteAnimation',
    'Video',
    'TexturePack',
    'TShirtAccessory',
    'ShirtAccessory',
    'PantsAccessory',
    'JacketAccessory',
    'SweaterAccessory',
    'ShortsAccessory',
    'LeftShoeAccessory',
    'RightShoeAccessory',
    'DressSkirtAccessory',
    'FontFamily',
    'FontFace',
    'MeshHiddenSurfaceRemoval',
    'EyebrowAccessory',
    'EyelashAccessory',
    'MoodAnimation',
    'DynamicHead',
    'CodeSnippet',
    'AdsVideo',
    'OtaUpdate',
    'Screenshot',
    'RuntimePropertySet',
    'StorePreviewVideo',
    'GamePreviewVideo',
    'CreatorExperienceConfig',
    'FaceMakeup',
    'LipMakeup',
    'EyeMakeup',
  ]),
  name: z.string(),
});
const Roblox_Web_Responses_Games_GameFavoriteResponseModel = z.object({
  price: z.number().int(),
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  creator: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_,
  rootPlace: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_,
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
  placeVisits: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameFavoriteResponseModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Web_Responses_Games_GameFavoriteResponseModel),
});
const Roblox_Web_Responses_Games_GameResponseV2 = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  creator: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Core_CreatorType_,
  rootPlace: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Platform_Assets_AssetType_,
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
  placeVisits: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Web_Responses_Games_GameResponseV2),
});

/**
 * @api GET https://games.roblox.com/v2/games/:universeId/media
 * @summary Get the game media data
 * @param universeId The id of the universe we get media data from.
 * @param fetchAllExperienceRelatedMedia to tell if the API query is to fetch all related media for this experience
 */
export const getGamesUniverseidMedia = endpoint({
  method: 'GET',
  path: '/v2/games/:universeId/media',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    fetchAllExperienceRelatedMedia: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    fetchAllExperienceRelatedMedia: z.boolean().optional(),
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
 * @api GET https://games.roblox.com/v2/users/:userId/favorite/games
 * @summary Gets users favorite games.
 * @param userId The user Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersUseridFavoriteGames = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/favorite/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
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
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Desc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameFavoriteResponseModel_,
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
  method: 'GET',
  path: '/v2/users/:userId/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
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
 * @api GET https://games.roblox.com/v2/groups/:groupId/gamesV2
 * @summary Gets games created by the specified group. (gamesV2 path - removed from docs)
 * @param groupId The group Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidGamesv2 = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/gamesV2',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: { style: 'simple' },
    accessFilter: { style: 'form', explode: true },
    limit: { style: 'form', explode: true },
    cursor: { style: 'form', explode: true },
    sortOrder: { style: 'form', explode: true },
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
    { status: 500, description: `0: Compliance Context service is unavailable.` },
    { status: 501, description: `1: Code path is not Implemented.` },
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
  method: 'GET',
  path: '/v2/groups/:groupId/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
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
