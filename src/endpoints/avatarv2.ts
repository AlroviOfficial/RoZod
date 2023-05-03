import { z } from 'zod';

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
const Roblox_Api_Avatar_Models_AssetMetaModelV1 = z.object({
  order: z.number().int(),
  puffiness: z.number(),
  version: z.number().int(),
});
const Roblox_Api_Avatar_Models_AssetModelV2 = z.object({
  id: z.number().int(),
  name: z.string(),
  assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
  currentVersionId: z.number().int(),
  meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
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
  invalidAssetIds: z.array(z.number()),
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
  outfitType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Api_Avatar_Models_OutfitModel = z.object({
  id: z.number().int(),
  name: z.string(),
  isEditable: z.boolean(),
});

const schemas = {
  Roblox_Web_Responses_Avatar_ScaleModel,
  Roblox_Api_Avatar_Models_BodyColors3Model,
  Roblox_Api_Avatar_Models_AssetTypeModel,
  Roblox_Api_Avatar_Models_AssetMetaModelV1,
  Roblox_Api_Avatar_Models_AssetModelV2,
  Roblox_Api_Avatar_Models_EmoteResponseModel,
  Roblox_Api_Avatar_Models_AvatarModelV3,
  Roblox_Platform_Avatar_BodyColorsModelV2,
  Roblox_Api_Avatar_Models_AvatarApiSuccessResponse,
  Roblox_Api_Avatar_Models_AssetWearModel,
  Roblox_Api_Avatar_Models_WearRequestModel,
  Roblox_Api_Avatar_Models_WearResponseModel,
  Roblox_Api_Avatar_Models_BodyColorsModel,
  Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Api_Avatar_Models_OutfitModel,
};

/**
 * @api get https://avatar.roblox.com/v2/avatar/avatar
 */
export const getAvatarAvatar = {
  method: 'get' as const,
  path: '/v2/avatar/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarModelV3,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://avatar.roblox.com/v2/avatar/set-body-colors
 * @param body
 */
export const postAvatarSetBodyColors = {
  method: 'post' as const,
  path: '/v2/avatar/set-body-colors',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_Platform_Avatar_BodyColorsModelV2,
  },
  response: z.object({ success: z.boolean() }),
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
 * @api post https://avatar.roblox.com/v2/avatar/set-wearing-assets
 * @param body Model of assets to be worn
 */
export const postAvatarSetWearingAssets = {
  method: 'post' as const,
  path: '/v2/avatar/set-wearing-assets',
  baseUrl: 'https://avatar.roblox.com',
  description: `Only allows items that you own, are not expired, and are wearable asset types.
Any assets being worn before this method is called are automatically removed.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_Api_Avatar_Models_WearRequestModel,
  },
  response: Roblox_Api_Avatar_Models_WearResponseModel,
  errors: [
    {
      status: 400,
      description: `3: Invalid assetId
5: Meta does not apply to specified asset type`,
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
    {
      status: 500,
      description: `2: Failed to wear asset.`,
      schema: z.void(),
    },
  ],
};
/**
 * @api get https://avatar.roblox.com/v2/avatar/users/:userId/avatar
 * @param userId
 */
export const getAvatarUsersUseridAvatar = {
  method: 'get' as const,
  path: '/v2/avatar/users/:userId/avatar',
  baseUrl: 'https://avatar.roblox.com',
  description: `Includes assets, bodycolors, and playerAvatarType.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_AvatarModelV3,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
      schema: z.void(),
    },
  ],
};
/**
 * @api patch https://avatar.roblox.com/v2/outfits/:userOutfitId
 * @param body The updated outfit
 * @param userOutfitId
 */
export const patchOutfitsUseroutfitid = {
  method: 'patch' as const,
  path: '/v2/outfits/:userOutfitId',
  baseUrl: 'https://avatar.roblox.com',
  description: `Fails if the user does not own any of the assetIds or if they are not wearable asset types.
Accepts partial updates.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
    userOutfitId: z.number().int(),
  },
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
9: Invalid user outfit.`,
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
2: You don&#x27;t have permission to update this outfit.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `6: An error occurred while trying to update the outfit`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://avatar.roblox.com/v2/outfits/:userOutfitId/update
 * @param body The updated outfit
 * @param userOutfitId
 */
export const postOutfitsUseroutfitidUpdate = {
  method: 'post' as const,
  path: '/v2/outfits/:userOutfitId/update',
  baseUrl: 'https://avatar.roblox.com',
  description: `Fails if the user does not own any of the assetIds or if they are not wearable asset types.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
    userOutfitId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfit does not exist!
3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you
7: Invalid assetIds
8: Invalid Player Avatar Type. Valid types are R6 and R15`,
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
2: You don&#x27;t have permission to update this outfit.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `6: An error occurred while trying to update the outfit`,
      schema: z.void(),
    },
  ],
};
/**
 * @api post https://avatar.roblox.com/v2/outfits/create
 * @param body The new outfit
 */
export const postOutfitsCreate = {
  method: 'post' as const,
  path: '/v2/outfits/create',
  baseUrl: 'https://avatar.roblox.com',
  description: `Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.`,
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {
    body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you and was not added to the outfit
7: Invalid Player Avatar Type. Valid types are R6 and R15
8: Invalid assetIds
9: Meta does not apply to specified asset type`,
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
1: You already have the maximum number of outfits`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `6: An error occurred while creating the outfit`,
      schema: z.void(),
    },
  ],
};
