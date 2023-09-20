import { z } from 'zod';
import { endpoint } from '..';

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
const Roblox_Api_Avatar_Models_BodyColorsModel = z
  .object({
    headColorId: z.number().int(),
    torsoColorId: z.number().int(),
    rightArmColorId: z.number().int(),
    leftArmColorId: z.number().int(),
    rightLegColorId: z.number().int(),
    leftLegColorId: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AssetTypeModel = z.object({ id: z.number().int(), name: z.string() }).passthrough();
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
const Roblox_Api_Avatar_Models_EmoteResponseModel = z
  .object({
    assetId: z.number().int(),
    assetName: z.string(),
    position: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AvatarModelV2 = z
  .object({
    scales: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.union([z.literal(1), z.literal(3)]),
    bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
    assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
    defaultShirtApplied: z.boolean(),
    defaultPantsApplied: z.boolean(),
    emotes: z.array(Roblox_Api_Avatar_Models_EmoteResponseModel),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AvatarMetadataModel = z
  .object({
    enableDefaultClothingMessage: z.boolean(),
    isAvatarScaleEmbeddedInTab: z.boolean(),
    isBodyTypeScaleOutOfTab: z.boolean(),
    scaleHeightIncrement: z.number(),
    scaleWidthIncrement: z.number(),
    scaleHeadIncrement: z.number(),
    scaleProportionIncrement: z.number(),
    scaleBodyTypeIncrement: z.number(),
    supportProportionAndBodyType: z.boolean(),
    showDefaultClothingMessageOnPageLoad: z.boolean(),
    areThreeDeeThumbsEnabled: z.boolean(),
    isAvatarWearingApiCallsLockingOnFrontendEnabled: z.boolean(),
    isOutfitHandlingOnFrontendEnabled: z.boolean(),
    isJustinUiChangesEnabled: z.boolean(),
    isCategoryReorgEnabled: z.boolean(),
    LCEnabledInEditorAndCatalog: z.boolean(),
    isLCCompletelyEnabled: z.boolean(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_ScaleRulesModel = z
  .object({ min: z.number(), max: z.number(), increment: z.number() })
  .passthrough();
const Roblox_Api_Avatar_Models_AssetTypeRulesModel = z
  .object({
    maxNumber: z.number().int(),
    id: z.number().int(),
    name: z.string(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_BodyColorModel = z
  .object({
    brickColorId: z.number().int(),
    hexColor: z.string(),
    name: z.string(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_DefaultClothingAssets = z
  .object({
    defaultShirtAssetIds: z.array(z.number()),
    defaultPantAssetIds: z.array(z.number()),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AvatarRulesModel = z
  .object({
    playerAvatarTypes: z.array(z.union([z.literal(1), z.literal(3)])),
    scales: z.record(Roblox_Api_Avatar_Models_ScaleRulesModel),
    wearableAssetTypes: z.array(Roblox_Api_Avatar_Models_AssetTypeRulesModel),
    bodyColorsPalette: z.array(Roblox_Api_Avatar_Models_BodyColorModel),
    basicBodyColorsPalette: z.array(Roblox_Api_Avatar_Models_BodyColorModel),
    minimumDeltaEBodyColorDifference: z.number(),
    proportionsAndBodyTypeEnabledForUser: z.boolean(),
    defaultClothingAssetLists: Roblox_Api_Avatar_Models_DefaultClothingAssets,
    bundlesEnabledForUser: z.boolean(),
    emotesEnabledForUser: z.boolean(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_UniverseAvatarAssetOverrideResponseModel = z
  .object({
    assetID: z.number().int(),
    assetTypeID: z.number().int(),
    isPlayerChoice: z.boolean(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_GameStartInfoResponse = z
  .object({
    gameAvatarType: z.string(),
    allowCustomAnimations: z.string(),
    universeAvatarCollisionType: z.string(),
    universeAvatarBodyType: z.string(),
    jointPositioningType: z.string(),
    message: z.string(),
    universeAvatarMinScales: Roblox_Web_Responses_Avatar_ScaleModel,
    universeAvatarMaxScales: Roblox_Web_Responses_Avatar_ScaleModel,
    universeAvatarAssetOverrides: z.array(Roblox_Api_Avatar_Models_UniverseAvatarAssetOverrideResponseModel),
    moderationStatus: z.string(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_OutfitDetailsModel = z
  .object({
    id: z.number().int(),
    universeId: z.number().int(),
    name: z.string(),
    assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
    bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
    scale: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.string(),
    outfitType: z.string(),
    isEditable: z.boolean(),
    moderationStatus: z.string(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_RecentItemModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    type: z.union([z.literal(1), z.literal(2)]),
    assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
    isEditable: z.boolean(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiLegacyPageResponse_Roblox_Api_Avatar_Models_RecentItemModel_ = z
  .object({
    data: z.array(Roblox_Api_Avatar_Models_RecentItemModel),
    total: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AssetIdListModel = z.object({ assetIds: z.array(z.number()) }).passthrough();
const Roblox_Api_Avatar_Models_OutfitModel = z
  .object({ id: z.number().int(), name: z.string(), isEditable: z.boolean() })
  .passthrough();
const Roblox_Api_Avatar_Models_AvatarFilteredPageResponse_Roblox_Api_Avatar_Models_OutfitModel_ = z
  .object({
    filteredCount: z.number().int(),
    data: z.array(Roblox_Api_Avatar_Models_OutfitModel),
    total: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_AvatarApiSuccessResponse = z.object({ success: z.boolean() }).passthrough();
const Roblox_Api_Avatar_Controllers_V1_AvatarController_EmptyResponse = z.object({}).passthrough();
const Roblox_Api_Avatar_Models_PlayerAvatarTypeModel = z
  .object({ playerAvatarType: z.union([z.literal(1), z.literal(3)]) })
  .passthrough();
const Roblox_Api_Avatar_Models_WearResponseModel = z
  .object({
    invalidAssets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
    invalidAssetIds: z.array(z.number()),
    success: z.boolean(),
  })
  .passthrough();
const Roblox_Api_Avatar_Models_OutfitUpdateModelV1 = z
  .object({
    name: z.string(),
    bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
    assetIds: z.array(z.number()),
    scale: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.string(),
    outfitType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  })
  .passthrough();

const schemas = {
  Roblox_Web_Responses_Avatar_ScaleModel,
  Roblox_Api_Avatar_Models_BodyColorsModel,
  Roblox_Api_Avatar_Models_AssetTypeModel,
  Roblox_Api_Avatar_Models_AssetMetaModelV1,
  Roblox_Api_Avatar_Models_AssetModelV2,
  Roblox_Api_Avatar_Models_EmoteResponseModel,
  Roblox_Api_Avatar_Models_AvatarModelV2,
  Roblox_Api_Avatar_Models_AvatarMetadataModel,
  Roblox_Api_Avatar_Models_ScaleRulesModel,
  Roblox_Api_Avatar_Models_AssetTypeRulesModel,
  Roblox_Api_Avatar_Models_BodyColorModel,
  Roblox_Api_Avatar_Models_DefaultClothingAssets,
  Roblox_Api_Avatar_Models_AvatarRulesModel,
  Roblox_Api_Avatar_Models_UniverseAvatarAssetOverrideResponseModel,
  Roblox_Api_Avatar_Models_GameStartInfoResponse,
  Roblox_Api_Avatar_Models_OutfitDetailsModel,
  Roblox_Api_Avatar_Models_RecentItemModel,
  Roblox_Web_WebAPI_Models_ApiLegacyPageResponse_Roblox_Api_Avatar_Models_RecentItemModel_,
  Roblox_Api_Avatar_Models_AssetIdListModel,
  Roblox_Api_Avatar_Models_OutfitModel,
  Roblox_Api_Avatar_Models_AvatarFilteredPageResponse_Roblox_Api_Avatar_Models_OutfitModel_,
  Roblox_Api_Avatar_Models_AvatarApiSuccessResponse,
  Roblox_Api_Avatar_Controllers_V1_AvatarController_EmptyResponse,
  Roblox_Api_Avatar_Models_PlayerAvatarTypeModel,
  Roblox_Api_Avatar_Models_WearResponseModel,
  Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
};

/**
 * @api GET https://avatar.roblox.com/v1/avatar
 * @summary Returns details about the authenticated user's avatar
 */
export const getAvatar = endpoint({
  method: 'get' as const,
  path: '/v1/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarModelV2,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v1/avatar-rules
 * @summary Returns the business rules related to avatars
 * @description BodyColorsPalette is a list of valid brickColors you can choose for your avatar.
WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.
Does not include packages because they cannot be worn on your avatar directly.
PlayerAvatarTypes are the types of avatars you can choose between.
 */
export const getAvatarRules = endpoint({
  method: 'get' as const,
  path: '/v1/avatar-rules',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarRulesModel,
  errors: [],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/assets/:assetId/remove
 * @summary Removes the asset from the authenticated user's avatar.
 * @param assetId The asset id.
 */
export const postAvatarAssetsAssetidRemove = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/assets/:assetId/remove',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `2: Failed to remove asset.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: You must be wearing the asset to remove it.`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/assets/:assetId/wear
 * @summary Puts the asset on the authenticated user's avatar.
- Flagged as obsolete, does not support layered clothing meta params
 * @param assetId The asset id.
 */
export const postAvatarAssetsAssetidWear = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/assets/:assetId/wear',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `2: Failed to wear asset.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: You must own an asset to wear it.`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v1/avatar/metadata
 * @summary Returns metadata used by the avatar page of the website
 */
export const getAvatarMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/avatar/metadata',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarMetadataModel,
  errors: [],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/redraw-thumbnail
 * @summary Requests the authenticated user's thumbnail be redrawn
 */
export const postAvatarRedrawThumbnail = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/redraw-thumbnail',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 429,
      description: `1: Redrawing your avatar thumbnail is floodchecked at this time
1: Redrawing your avatar thumbnail is floodchecked at this time`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/set-body-colors
 * @summary Sets the authenticated user's body colors
 * @param body
 */
export const postAvatarSetBodyColors = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/set-body-colors',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_BodyColorsModel,
  response: z.object({ success: z.boolean() }).passthrough(),
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
 * @api POST https://avatar.roblox.com/v1/avatar/set-player-avatar-type
 * @summary Sets the authenticated user's player avatar type (e.g. R6 or R15).
 * @param body R6 or R15
 * @description This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
 */
export const postAvatarSetPlayerAvatarType = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/set-player-avatar-type',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_PlayerAvatarTypeModel,
  response: z.object({ success: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Invalid playerAvatarType. Valid values are: `,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You are not allowed to change player avatar type.`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/set-scales
 * @summary Sets the authenticated user's scales
 * @param body
 */
export const postAvatarSetScales = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/set-scales',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Web_Responses_Avatar_ScaleModel,
  response: z.object({ success: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: Please pass in the scales JSON`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: The user does not have permissions to change scales.`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/set-wearing-assets
 * @summary Sets the avatar's current assets to the list
- Flagged as obsolete, does not support layered clothing meta params
 * @param body The list of asset IDs
 * @description Only allows items that you own, are not expired, and are wearable asset types.
Any assets being worn before this method is called are automatically removed.
 */
export const postAvatarSetWearingAssets = endpoint({
  method: 'post' as const,
  path: '/v1/avatar/set-wearing-assets',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_AssetIdListModel,
  response: Roblox_Api_Avatar_Models_WearResponseModel,
  errors: [
    {
      status: 400,
      description: `3: Invalid assetId`,
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
 * @api GET https://avatar.roblox.com/v1/game-start-info
 * @summary The server will call this on game server start to request general information about the universe
This is version 1.1, which returns an entry from the UniverseAvatarType enum.
During mixed mode this may return unreliable results.
 * @param universeId 
 */
export const getGameStartInfo = endpoint({
  method: 'get' as const,
  path: '/v1/game-start-info',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_GameStartInfoResponse,
  errors: [],
});
/**
 * @api PATCH https://avatar.roblox.com/v1/outfits/:userOutfitId
 * @summary Updates the contents of an outfit. Deprecated. There are no calls to this API
 * @param body The updated outfit
 * @param userOutfitId The user outfit id.
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
 */
export const patchOutfitsUseroutfitid = endpoint({
  method: 'patch' as const,
  path: '/v1/outfits/:userOutfitId',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
  response: Roblox_Api_Avatar_Models_OutfitModel,
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfit does not exist!
1: Must provide both assetIds and bodyColors in to update outfit contents.
3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you
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
 * @api POST https://avatar.roblox.com/v1/outfits/:userOutfitId/delete
 * @summary Deletes the outfit
 * @param userOutfitId The user outfit id
 * @description You are only allowed to delete outfits you created.
 */
export const postOutfitsUseroutfitidDelete = endpoint({
  method: 'post' as const,
  path: '/v1/outfits/:userOutfitId/delete',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfitId is invalid!`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You don&#x27;t have permission to delete this outfit.`,
    },
    {
      status: 500,
      description: `3: An error occurred while deleting the outfit.`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v1/outfits/:userOutfitId/details
 * @summary Gets details about the contents of an outfit.
 * @param userOutfitId The user outfit id.
 */
export const getOutfitsUseroutfitidDetails = endpoint({
  method: 'get' as const,
  path: '/v1/outfits/:userOutfitId/details',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_OutfitDetailsModel,
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
 * @api POST https://avatar.roblox.com/v1/outfits/:userOutfitId/update
 * @summary Updates the contents of the outfit. Deprecated. There are no calls to this API
 * @param body The updated outfit
 * @param userOutfitId The user outfit id.
 * @description Fails if the user does not own any of the assetIds or if they are not wearable asset types.
 */
export const postOutfitsUseroutfitidUpdate = endpoint({
  method: 'post' as const,
  path: '/v1/outfits/:userOutfitId/update',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
  response: z.object({ success: z.boolean() }).passthrough(),
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
 * @api POST https://avatar.roblox.com/v1/outfits/:userOutfitId/wear
 * @summary Wears the outfit
 * @param userOutfitId The user outfit id
 * @description Applies the outfit's appearance to your avatar
If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.
 */
export const postOutfitsUseroutfitidWear = endpoint({
  method: 'post' as const,
  path: '/v1/outfits/:userOutfitId/wear',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userOutfitId: {
      style: 'simple',
    },
  },
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_WearResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfitId is invalid!`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You don&#x27;t have permission to wear this outfit!`,
    },
    {
      status: 429,
      description: `3: The flood limit has been exceeded!`,
    },
  ],
});
/**
 * @api POST https://avatar.roblox.com/v1/outfits/create
 * @summary Creates a new outfit.
 * @param body The new outfit
 * @description Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.
 */
export const postOutfitsCreate = endpoint({
  method: 'post' as const,
  path: '/v1/outfits/create',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
  response: z.object({ success: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you and was not added to the outfit
7: Invalid Player Avatar Type. Valid types are R6 and R15
8: Invalid assetIds`,
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
/**
 * @api GET https://avatar.roblox.com/v1/recent-items/:recentItemListType/list
 * @summary Returns a list of recent items
Recent items can be Assets or Outfits
 * @param recentItemListType 
 */
export const getRecentItemsRecentitemlisttypeList = endpoint({
  method: 'get' as const,
  path: '/v1/recent-items/:recentItemListType/list',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    recentItemListType: {
      style: 'simple',
    },
  },
  parameters: {
    recentItemListType: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
    ]),
  },
  response: Roblox_Web_WebAPI_Models_ApiLegacyPageResponse_Roblox_Api_Avatar_Models_RecentItemModel_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v1/users/:userId/avatar
 * @summary Returns details about a specified user's avatar
 * @param userId
 * @description Includes assets, bodycolors, and playerAvatarType.
 */
export const getUsersUseridAvatar = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_AvatarModelV2,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v1/users/:userId/currently-wearing
 * @summary Gets a list of asset ids that the user is currently wearing
 * @param userId The user id.
 */
export const getUsersUseridCurrentlyWearing = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/currently-wearing',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_AssetIdListModel,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
    },
  ],
});
/**
 * @api GET https://avatar.roblox.com/v1/users/:userId/outfits
 * @summary Gets a list of outfits for the specified user.
 * @param userId The user id
 * @param outfitType The outfit type being searched for
 * @param page The page number
 * @param itemsPerPage The max number of outfits that can be returned
 * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
 */
export const getUsersUseridOutfits = endpoint({
  method: 'get' as const,
  path: '/v1/users/:userId/outfits',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
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
    outfitType: z.string().optional(),
    page: z.number().int().optional().default(1),
    itemsPerPage: z.number().int().optional().default(25),
    isEditable: z.boolean().optional().default(true),
  },
  response: Roblox_Api_Avatar_Models_AvatarFilteredPageResponse_Roblox_Api_Avatar_Models_OutfitModel_,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
    },
  ],
});
