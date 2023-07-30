import { z } from "zod";
import { endpoint } from "..";

const Roblox_Api_Avatar_Models_AssetTypeModel = z
  .object({ id: z.number().int(), name: z.string() })
  .passthrough();
const Roblox_Api_Avatar_Models_AssetMetaModelV1 = z
  .object({
    order: z.number().int(),
    puffiness: z.number(),
    version: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AssetModelV2 = z
  .object({
    id: z.number().int(),
    name: z.string(),
    assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
    currentVersionId: z.number().int(),
    meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
  })
  .passthrough();
const Roblox_Api_Avatar_Models_BodyColors3Model = z
  .object({
    headColor3: z.string(),
    torsoColor3: z.string(),
    rightArmColor3: z.string(),
    leftArmColor3: z.string(),
    rightLegColor3: z.string(),
    leftLegColor3: z.string(),
  })
  .passthrough();
const Roblox_Web_Responses_Avatar_ScaleModel = z
  .object({
    height: z.number(),
    width: z.number(),
    head: z.number(),
    depth: z.number(),
    proportion: z.number(),
    bodyType: z.number(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_OutfitDetailsModelV2 = z
  .object({
    id: z.number().int(),
    name: z.string(),
    assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
    bodyColor3s: Roblox_Api_Avatar_Models_BodyColors3Model,
    scale: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.string(),
    outfitType: z.string(),
    isEditable: z.boolean(),
  })
  .passthrough();
const Roblox_Platform_Avatar_BodyColorsModelV2 = z
  .object({
    headColor3: z.string(),
    torsoColor3: z.string(),
    rightArmColor3: z.string(),
    leftArmColor3: z.string(),
    rightLegColor3: z.string(),
    leftLegColor3: z.string(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AssetWearModel = z
  .object({
    id: z.number().int(),
    meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
  })
  .passthrough();
const Roblox_Api_Avatar_Models_OutfitUpdateModelV3 = z
  .object({
    name: z.string(),
    bodyColor3s: Roblox_Platform_Avatar_BodyColorsModelV2,
    assets: z.array(Roblox_Api_Avatar_Models_AssetWearModel),
    scale: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.string(),
    outfitType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Api_Avatar_Models_OutfitModel = z
  .object({ id: z.number().int(), name: z.string(), isEditable: z.boolean() })
  .passthrough();

const schemas = {
  Roblox_Api_Avatar_Models_AssetTypeModel,
  Roblox_Api_Avatar_Models_AssetMetaModelV1,
  Roblox_Api_Avatar_Models_AssetModelV2,
  Roblox_Api_Avatar_Models_BodyColors3Model,
  Roblox_Web_Responses_Avatar_ScaleModel,
  Roblox_Api_Avatar_Models_OutfitDetailsModelV2,
  Roblox_Platform_Avatar_BodyColorsModelV2,
  Roblox_Api_Avatar_Models_AssetWearModel,
  Roblox_Api_Avatar_Models_OutfitUpdateModelV3,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Api_Avatar_Models_OutfitModel,
};

/**
 * @api patch https://avatar.roblox.com/v3/outfits/:userOutfitId
 * @param body The updated outfit
 * @param userOutfitId 
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types.
Accepts partial updates.
 */
export const patchOutfitsUseroutfitid = endpoint({
  method: "patch" as const,
  path: "/v3/outfits/:userOutfitId",
  baseUrl: "https://avatar.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: "simple",
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
});
/**
 * @api get https://avatar.roblox.com/v3/outfits/:userOutfitId/details
 * @param userOutfitId
 */
export const getOutfitsUseroutfitidDetails = endpoint({
  method: "get" as const,
  path: "/v3/outfits/:userOutfitId/details",
  baseUrl: "https://avatar.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    userOutfitId: {
      style: "simple",
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
      schema: z.void(),
    },
    {
      status: 403,
      description: `3: The requester does not have access to the details for the given user outfit.`,
      schema: z.void(),
    },
  ],
});
/**
 * @api post https://avatar.roblox.com/v3/outfits/:userOutfitId/update
 * @param body The updated outfit
 * @param userOutfitId
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types.
 */
export const postOutfitsUseroutfitidUpdate = endpoint({
  method: "post" as const,
  path: "/v3/outfits/:userOutfitId/update",
  baseUrl: "https://avatar.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: "simple",
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV3,
  response: z.object({}).passthrough(),
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
});
/**
 * @api post https://avatar.roblox.com/v3/outfits/create
 * @param body The new outfit
 * @description Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.
 */
export const postOutfitsCreate = endpoint({
  method: "post" as const,
  path: "/v3/outfits/create",
  baseUrl: "https://avatar.roblox.com",
  requestFormat: "json" as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV3,
  response: z.object({}).passthrough(),
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
});
