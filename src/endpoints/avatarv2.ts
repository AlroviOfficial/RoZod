import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Avatar_ScaleModel = z.object({
  height: z.number(),
  width: z.number(),
  head: z.number(),
  depth: z.number(),
  proportion: z.number(),
  bodyType: z.number(),
});
const Roblox_Api_Avatar_Models_BodyColors3Model = z.object({
  headColor3: z.string(),
  torsoColor3: z.string(),
  rightArmColor3: z.string(),
  leftArmColor3: z.string(),
  rightLegColor3: z.string(),
  leftLegColor3: z.string(),
});
const Roblox_Api_Avatar_Models_AssetTypeModel = z.object({
  id: z.number().int(),
  name: z.string(),
});
const Roblox_Api_Avatar_Models_AssetPosition = z.object({
  X: z.number(),
  Y: z.number(),
  Z: z.number(),
});
const Roblox_Api_Avatar_Models_AssetRotation = z.object({
  X: z.number(),
  Y: z.number(),
  Z: z.number(),
});
const Roblox_Api_Avatar_Models_AssetScale = z.object({
  X: z.number(),
  Y: z.number(),
  Z: z.number(),
});
const Roblox_Api_Avatar_Models_AssetMetaModelV1 = z.object({
  order: z.number().int(),
  puffiness: z.number(),
  position: Roblox_Api_Avatar_Models_AssetPosition,
  rotation: Roblox_Api_Avatar_Models_AssetRotation,
  scale: Roblox_Api_Avatar_Models_AssetScale,
  headShape: z.union([
    z.literal(0),
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
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
    z.literal(28),
    z.literal(29),
  ]),
  version: z.number().int(),
});
const Roblox_Api_Avatar_Models_AssetModelV2 = z.object({
  id: z.number().int(),
  name: z.string(),
  assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
  currentVersionId: z.number().int(),
  meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
  availabilityStatus: z.string(),
  expirationTime: z.string().datetime({ offset: true }),
  supportsHeadShapes: z.boolean(),
});
const Roblox_Api_Avatar_Models_EmoteResponseModel = z.object({
  assetId: z.number().int(),
  assetName: z.string(),
  position: z.number().int(),
});
const Roblox_Api_Avatar_Models_AvatarModelV3 = z.object({
  scales: Roblox_Web_Responses_Avatar_ScaleModel,
  playerAvatarType: z.union([z.literal(1), z.literal(3)]),
  bodyColor3s: Roblox_Api_Avatar_Models_BodyColors3Model,
  assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
  defaultShirtApplied: z.boolean(),
  defaultPantsApplied: z.boolean(),
  emotes: z.array(Roblox_Api_Avatar_Models_EmoteResponseModel),
});
const Roblox_Api_Avatar_Models_OutfitModel = z.object({
  id: z.number().int(),
  name: z.string(),
  isEditable: z.boolean(),
  outfitType: z.string(),
});
const Roblox_Api_Avatar_Models_AvatarPageResponse_Roblox_Api_Avatar_Models_OutfitModel_ = z.object({
  data: z.array(Roblox_Api_Avatar_Models_OutfitModel),
  paginationToken: z.string(),
});
const Roblox_Platform_Avatar_BodyColorsModelV2 = z.object({
  headColor3: z.string(),
  torsoColor3: z.string(),
  rightArmColor3: z.string(),
  leftArmColor3: z.string(),
  rightLegColor3: z.string(),
  leftLegColor3: z.string(),
});
const Roblox_Api_Avatar_Models_AvatarApiSuccessResponse = z.object({
  success: z.boolean(),
});
const Roblox_Api_Avatar_Models_AssetWearModel = z.object({
  id: z.number().int(),
  meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
});
const Roblox_Api_Avatar_Models_WearRequestModel = z.object({
  assets: z.array(Roblox_Api_Avatar_Models_AssetWearModel),
});
const Roblox_Api_Avatar_Models_WearResponseModel = z.object({
  invalidAssets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
  invalidAssetIds: z.array(z.number().int()),
  success: z.boolean(),
});
const Roblox_Api_Avatar_Models_BodyColorsModel = z.object({
  headColorId: z.number().int(),
  torsoColorId: z.number().int(),
  rightArmColorId: z.number().int(),
  leftArmColorId: z.number().int(),
  rightLegColorId: z.number().int(),
  leftLegColorId: z.number().int(),
});
const Roblox_Api_Avatar_Models_OutfitUpdateModelV2 = z.object({
  name: z.string(),
  bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
  assets: z.array(Roblox_Api_Avatar_Models_AssetWearModel),
  scale: Roblox_Web_Responses_Avatar_ScaleModel,
  playerAvatarType: z.string(),
  outfitType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(5)]),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

/**
 * @api GET https://avatar.roblox.com/v2/avatar/avatar
 * @param Roblox-Place-Id
 * @param checkAssetAvailability
 */
export const getAvatarAvatar = endpoint({
  method: 'GET',
  path: '/v2/avatar/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    'Roblox-Place-Id': {},
    checkAssetAvailability: {},
  },
  parameters: {
    'Roblox-Place-Id': z.number().int().optional(),
    checkAssetAvailability: z.boolean().optional().default(false),
  },
  response: Roblox_Api_Avatar_Models_AvatarModelV3,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v2/avatar/set-body-colors
 * @param body
 * @param Roblox-Place-Id
 */
export const postAvatarSetBodyColors = endpoint({
  method: 'POST',
  path: '/v2/avatar/set-body-colors',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    'Roblox-Place-Id': {},
  },
  parameters: {
    'Roblox-Place-Id': z.number().int().optional(),
  },
  body: Roblox_Platform_Avatar_BodyColorsModelV2,
  response: z.object({ success: z.boolean() }),
  errors: [
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
 * @api POST https://avatar.roblox.com/v2/avatar/set-wearing-assets
 * @param body Model of assets to be worn.
 * @param Roblox-Place-Id 
 * @description Only allows items that you own, are not expired, and are wearable asset types.
Any assets being worn before this method is called are automatically removed.
 */
export const postAvatarSetWearingAssets = endpoint({
  method: 'POST',
  path: '/v2/avatar/set-wearing-assets',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    'Roblox-Place-Id': {},
  },
  parameters: {
    'Roblox-Place-Id': z.number().int().optional(),
  },
  body: Roblox_Api_Avatar_Models_WearRequestModel,
  response: Roblox_Api_Avatar_Models_WearResponseModel,
  errors: [
    {
      status: 400,
      description: `3: Invalid assetId
5: Meta does not apply to specified asset type
7: Required meta is not provided for the specific asset type`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 500,
      description: `2: Failed to wear asset.`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v2/avatar/users/:userId/avatar
 * @param userId
 * @param Roblox-Place-Id
 * @param checkAssetAvailability
 * @description Includes assets, bodycolors, and playerAvatarType.
 */
export const getAvatarUsersUseridAvatar = endpoint({
  method: 'GET',
  path: '/v2/avatar/users/:userId/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    'Roblox-Place-Id': {},
    checkAssetAvailability: {},
  },
  parameters: {
    userId: z.number().int(),
    'Roblox-Place-Id': z.number().int().optional(),
    checkAssetAvailability: z.boolean().optional().default(false),
  },
  response: Roblox_Api_Avatar_Models_AvatarModelV3,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v2/avatar/users/:userId/outfits
 * @param userId
 * @param paginationToken
 * @param outfitType
 * @param page
 * @param itemsPerPage
 * @param isEditable
 * @param Roblox-Place-Id
 */
export const getAvatarUsersUseridOutfits = endpoint({
  method: 'GET',
  path: '/v2/avatar/users/:userId/outfits',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {},
    paginationToken: {},
    outfitType: {},
    page: {},
    itemsPerPage: {},
    isEditable: {},
    'Roblox-Place-Id': {},
  },
  parameters: {
    userId: z.number().int(),
    paginationToken: z.string().optional(),
    outfitType: z.string().optional(),
    page: z.number().int().optional().default(1),
    itemsPerPage: z.number().int().optional().default(25),
    isEditable: z.boolean().optional(),
    'Roblox-Place-Id': z.number().int().optional(),
  },
  response: Roblox_Api_Avatar_Models_AvatarPageResponse_Roblox_Api_Avatar_Models_OutfitModel_,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
    },
  ],
});
/**
 * @api PATCH https://avatar.roblox.com/v2/outfits/:userOutfitId
 * @param body The updated outfit.
 * @param userOutfitId 
 * @param Roblox-Place-Id 
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types.
Accepts partial updates.
 */
export const patchOutfitsUseroutfitid = endpoint({
  method: 'PATCH',
  path: '/v2/outfits/:userOutfitId',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userOutfitId: {},
    'Roblox-Place-Id': {},
  },
  parameters: {
    userOutfitId: z.number().int(),
    'Roblox-Place-Id': z.number().int().optional(),
  },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
  response: Roblox_Api_Avatar_Models_OutfitModel,
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfit does not exist!
1: Must provide both assetIds and bodyColors in to update outfit contents.
3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you
8: Invalid Player Avatar Type. Valid types are R6 and R15
11: Meta does not apply to specified asset type
12: Meta is required for this specific asset type`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You don&#x27;t have permission to update this outfit.`,
    },
    {
      status: 500,
      description: `6: An error occurred while trying to update the outfit`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v2/outfits/create
 * @param body The new outfit.
 * @param Roblox-Place-Id 
 * @description Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.
 */
export const postOutfitsCreate = endpoint({
  method: 'POST',
  path: '/v2/outfits/create',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    'Roblox-Place-Id': {},
  },
  parameters: {
    'Roblox-Place-Id': z.number().int().optional(),
  },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you and was not added to the outfit
7: Invalid Player Avatar Type. Valid types are R6 and R15
8: Invalid assetIds
9: Meta does not apply to specified asset type
10: Required meta is not provided for the specific asset type`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: You already have the maximum number of outfits`,
    },
    {
      status: 500,
      description: `6: An error occurred while creating the outfit`,
    },
  ],
});
