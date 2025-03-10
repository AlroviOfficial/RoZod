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
const Roblox_Avatarcore_Shared_V3_AssetPosition = z.object({
  X: z.number(),
  Y: z.number(),
  Z: z.number(),
});
const Roblox_Avatarcore_Shared_V3_AssetRotation = z.object({
  X: z.number(),
  Y: z.number(),
  Z: z.number(),
});
const Roblox_Avatarcore_Shared_V3_AssetScale = z.object({
  X: z.number(),
  Y: z.number(),
  Z: z.number(),
});
const Roblox_Api_Avatar_Models_AssetMetaModelV1 = z.object({
  order: z.number().int(),
  puffiness: z.number(),
  position: Roblox_Avatarcore_Shared_V3_AssetPosition,
  rotation: Roblox_Avatarcore_Shared_V3_AssetRotation,
  scale: Roblox_Avatarcore_Shared_V3_AssetScale,
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
  outfitType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

/**
 * @api GET https://avatar.roblox.com/v2/avatar/avatar
 * @summary Returns details about the authenticated user's avatar
 */
export const getAvatarAvatar = endpoint({
  method: 'GET',
  path: '/v2/avatar/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
 * @summary Sets the authenticated user's body colors
 * @param body
 */
export const postAvatarSetBodyColors = endpoint({
  method: 'POST',
  path: '/v2/avatar/set-body-colors',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
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
 * @summary Sets the avatar's current assets to the list
 * @param body Model of assets to be worn
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
  },
  parameters: {},
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
 * @summary Returns details about a specified user's avatar
 * @param userId
 * @description Includes assets, bodycolors, and playerAvatarType.
 */
export const getAvatarUsersUseridAvatar = endpoint({
  method: 'GET',
  path: '/v2/avatar/users/:userId/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v2/avatar/users/:userId/outfits
 * @summary Gets a list of outfits for the specified user.
 * @param userId The user id.
 * @param paginationToken The token received from the response to get the next page. For the first request, this value should be empty. Note : If no value is sent the 1st page will be returned.
 * @param outfitType The outfit type being searched for, null will return all outfitTypes
 * @param page The page number of the current page of requests, default is 1.
 * @param itemsPerPage The max number of outfits that can be returned.
 * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
 */
export const getAvatarUsersUseridOutfits = endpoint({
  method: 'GET',
  path: '/v2/avatar/users/:userId/outfits',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    paginationToken: {
      style: 'form',
      explode: true,
    },
    outfitType: {
      style: 'form',
      explode: true,
    },
    page: {
      style: 'form',
      explode: true,
    },
    itemsPerPage: {
      style: 'form',
      explode: true,
    },
    isEditable: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    paginationToken: z.string().optional(),
    outfitType: z.string().optional(),
    page: z.number().int().optional().default(1),
    itemsPerPage: z.number().int().optional().default(25),
    isEditable: z.boolean().optional(),
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
 * @summary Updates the contents of an outfit.
 * @param body The updated outfit
 * @param userOutfitId The user outfit id.
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
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
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
 * @api POST https://avatar.roblox.com/v2/outfits/:userOutfitId/update
 * @summary Updates the contents of the outfit.
 * @param body The updated outfit
 * @param userOutfitId The user outfit id.
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types.
 */
export const postOutfitsUseroutfitidUpdate = endpoint({
  method: 'POST',
  path: '/v2/outfits/:userOutfitId/update',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
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
 * @summary Creates a new outfit.
 * @param body The new outfit
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
  },
  parameters: {},
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
