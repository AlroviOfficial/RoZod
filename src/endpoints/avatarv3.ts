import { z } from 'zod';
import { endpoint } from '..';

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
const Roblox_Api_Avatar_Models_BodyColors3Model = z.object({
  headColor3: z.string(),
  torsoColor3: z.string(),
  rightArmColor3: z.string(),
  leftArmColor3: z.string(),
  rightLegColor3: z.string(),
  leftLegColor3: z.string(),
});
const Roblox_Web_Responses_Avatar_ScaleModel = z.object({
  height: z.number(),
  width: z.number(),
  head: z.number(),
  depth: z.number(),
  proportion: z.number(),
  bodyType: z.number(),
});
const Roblox_Api_Avatar_Models_OutfitDetailsModelV2 = z.object({
  id: z.number().int(),
  name: z.string(),
  assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
  bodyColor3s: Roblox_Api_Avatar_Models_BodyColors3Model,
  scale: Roblox_Web_Responses_Avatar_ScaleModel,
  playerAvatarType: z.string(),
  outfitType: z.string(),
  isEditable: z.boolean(),
  universeId: z.number().int(),
  moderationStatus: z.string(),
  bundleId: z.number().int(),
});
const Roblox_Platform_Avatar_BodyColorsModelV2 = z.object({
  headColor3: z.string(),
  torsoColor3: z.string(),
  rightArmColor3: z.string(),
  leftArmColor3: z.string(),
  rightLegColor3: z.string(),
  leftLegColor3: z.string(),
});
const Roblox_Api_Avatar_Models_AssetWearModel = z.object({
  id: z.number().int(),
  meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
});
const Roblox_Api_Avatar_Models_OutfitUpdateModelV3 = z.object({
  name: z.string(),
  bodyColor3s: Roblox_Platform_Avatar_BodyColorsModelV2,
  assets: z.array(Roblox_Api_Avatar_Models_AssetWearModel),
  scale: Roblox_Web_Responses_Avatar_ScaleModel,
  playerAvatarType: z.string(),
  outfitType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});
const Roblox_Api_Avatar_Models_OutfitModel = z.object({
  id: z.number().int(),
  name: z.string(),
  isEditable: z.boolean(),
  outfitType: z.string(),
});

/**
 * @api PATCH https://avatar.roblox.com/v3/outfits/:userOutfitId
 * @summary Updates the contents of an outfit.
 * @param body The updated outfit
 * @param userOutfitId The user outfit id.
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types.
Accepts partial updates.
 */
export const patchOutfitsUseroutfitid = endpoint({
  method: 'PATCH',
  path: '/v3/outfits/:userOutfitId',
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
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV3,
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
 * @api GET https://avatar.roblox.com/v3/outfits/:userOutfitId/details
 * @summary Gets details about the contents of an outfit.
 * @param userOutfitId The user outfit id.
 */
export const getOutfitsUseroutfitidDetails = endpoint({
  method: 'GET',
  path: '/v3/outfits/:userOutfitId/details',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_OutfitDetailsModelV2,
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfitId is invalid.
2: The outfit for the specified userOutfit is invalid.`,
    },
    {
      status: 403,
      description: `3: The requester does not have access to the details for the given user outfit.`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v3/outfits/create
 * @summary Creates a new outfit.
 * @param body The new outfit
 * @description Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.
 */
export const postOutfitsCreate = endpoint({
  method: 'POST',
  path: '/v3/outfits/create',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV3,
  response: Roblox_Api_Avatar_Models_OutfitModel,
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
