import { z } from 'zod';

const Roblox_Web_Responses_Avatar_ScaleModel = z
  .object({
    height: z.number(),
    width: z.number(),
    head: z.number(),
    depth: z.number(),
    proportion: z.number(),
    bodyType: z.number(),
  })
  .partial();
const Roblox_Api_Avatar_Models_BodyColorsModel = z
  .object({
    headColorId: z.number().int(),
    torsoColorId: z.number().int(),
    rightArmColorId: z.number().int(),
    leftArmColorId: z.number().int(),
    rightLegColorId: z.number().int(),
    leftLegColorId: z.number().int(),
  })
  .partial();
const Roblox_Api_Avatar_Models_AssetTypeModel = z.object({ id: z.number().int(), name: z.string() }).partial();
const Roblox_Api_Avatar_Models_AssetMetaModelV1 = z
  .object({
    order: z.number().int(),
    puffiness: z.number(),
    version: z.number().int(),
  })
  .partial();
const Roblox_Api_Avatar_Models_AssetModelV2 = z
  .object({
    id: z.number().int(),
    name: z.string(),
    assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
    currentVersionId: z.number().int(),
    meta: Roblox_Api_Avatar_Models_AssetMetaModelV1,
  })
  .partial();
const Roblox_Api_Avatar_Models_EmoteResponseModel = z
  .object({
    assetId: z.number().int(),
    assetName: z.string(),
    position: z.number().int(),
  })
  .partial();
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
  .partial();
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
  .partial();
const Roblox_Api_Avatar_Models_ScaleRulesModel = z
  .object({ min: z.number(), max: z.number(), increment: z.number() })
  .partial();
const Roblox_Api_Avatar_Models_AssetTypeRulesModel = z
  .object({
    maxNumber: z.number().int(),
    id: z.number().int(),
    name: z.string(),
  })
  .partial();
const Roblox_Api_Avatar_Models_BodyColorModel = z
  .object({
    brickColorId: z.number().int(),
    hexColor: z.string(),
    name: z.string(),
  })
  .partial();
const Roblox_Api_Avatar_Models_DefaultClothingAssets = z
  .object({
    defaultShirtAssetIds: z.array(z.number()),
    defaultPantAssetIds: z.array(z.number()),
  })
  .partial();
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
  .partial();
const Roblox_Api_Avatar_Models_UniverseAvatarAssetOverrideResponseModel = z
  .object({
    assetID: z.number().int(),
    assetTypeID: z.number().int(),
    isPlayerChoice: z.boolean(),
  })
  .partial();
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
  .partial();
const Roblox_Api_Avatar_Models_OutfitDetailsModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
    bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
    scale: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.string(),
    outfitType: z.string(),
    isEditable: z.boolean(),
  })
  .partial();
const Roblox_Api_Avatar_Models_RecentItemModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    type: z.union([z.literal(1), z.literal(2)]),
    assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
    isEditable: z.boolean(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiLegacyPageResponse_Roblox_Api_Avatar_Models_RecentItemModel_ = z
  .object({
    data: z.array(Roblox_Api_Avatar_Models_RecentItemModel),
    total: z.number().int(),
  })
  .partial();
const Roblox_Api_Avatar_Models_AssetIdListModel = z.object({ assetIds: z.array(z.number()) }).partial();
const Roblox_Api_Avatar_Models_OutfitModel = z
  .object({ id: z.number().int(), name: z.string(), isEditable: z.boolean() })
  .partial();
const Roblox_Api_Avatar_Models_AvatarFilteredPageResponse_Roblox_Api_Avatar_Models_OutfitModel_ = z
  .object({
    filteredCount: z.number().int(),
    data: z.array(Roblox_Api_Avatar_Models_OutfitModel),
    total: z.number().int(),
  })
  .partial();
const Roblox_Api_Avatar_Models_AvatarApiSuccessResponse = z.object({ success: z.boolean() }).partial();
const Roblox_Api_Avatar_Controllers_V1_AvatarController_EmptyResponse = z.object({}).partial();
const Roblox_Api_Avatar_Models_PlayerAvatarTypeModel = z
  .object({ playerAvatarType: z.union([z.literal(1), z.literal(3)]) })
  .partial();
const Roblox_Api_Avatar_Models_WearResponseModel = z
  .object({
    invalidAssets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
    invalidAssetIds: z.array(z.number()),
    success: z.boolean(),
  })
  .partial();
const Roblox_Api_Avatar_Models_OutfitUpdateModelV1 = z
  .object({
    name: z.string(),
    bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
    assetIds: z.array(z.number()),
    scale: Roblox_Web_Responses_Avatar_ScaleModel,
    playerAvatarType: z.string(),
    outfitType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  })
  .partial();

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

export const getV1avatar = {
  method: 'get' as const,
  path: '/v1/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarModelV2,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1avatarRules = {
  method: 'get' as const,
  path: '/v1/avatar-rules',
  baseUrl: 'https://avatar.roblox.com',
  description: `BodyColorsPalette is a list of valid brickColors you can choose for your avatar.
WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.
Does not include packages because they cannot be worn on your avatar directly.
PlayerAvatarTypes are the types of avatars you can choose between.`,
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarRulesModel,
  errors: [],
};
export const postV1avatarassetsAssetIdremove = {
  method: 'post' as const,
  path: '/v1/avatar/assets/:assetId/remove',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `2: Failed to remove asset.`,
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
1: You must be wearing the asset to remove it.`,
      schema: z.void(),
    },
  ],
};
export const postV1avatarassetsAssetIdwear = {
  method: 'post' as const,
  path: '/v1/avatar/assets/:assetId/wear',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `2: Failed to wear asset.`,
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
1: You must own an asset to wear it.`,
      schema: z.void(),
    },
  ],
};
export const getV1avatarmetadata = {
  method: 'get' as const,
  path: '/v1/avatar/metadata',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Avatar_Models_AvatarMetadataModel,
  errors: [],
};
export const postV1avatarredrawThumbnail = {
  method: 'post' as const,
  path: '/v1/avatar/redraw-thumbnail',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({}).partial(),
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
    {
      status: 429,
      description: `1: Redrawing your avatar thumbnail is floodchecked at this time
1: Redrawing your avatar thumbnail is floodchecked at this time`,
      schema: z.void(),
    },
  ],
};
export const postV1avatarsetBodyColors = {
  method: 'post' as const,
  path: '/v1/avatar/set-body-colors',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Avatar_Models_BodyColorsModel,
  },
  response: z.object({ success: z.boolean() }).partial(),
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
export const postV1avatarsetPlayerAvatarType = {
  method: 'post' as const,
  path: '/v1/avatar/set-player-avatar-type',
  baseUrl: 'https://avatar.roblox.com',
  description: `This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Avatar_Models_PlayerAvatarTypeModel,
  },
  response: z.object({ success: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: Invalid playerAvatarType. Valid values are: `,
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
2: You are not allowed to change player avatar type.`,
      schema: z.void(),
    },
  ],
};
export const postV1avatarsetScales = {
  method: 'post' as const,
  path: '/v1/avatar/set-scales',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Web_Responses_Avatar_ScaleModel,
  },
  response: z.object({ success: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: Please pass in the scales JSON`,
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
3: The user does not have permissions to change scales.`,
      schema: z.void(),
    },
  ],
};
export const postV1avatarsetWearingAssets = {
  method: 'post' as const,
  path: '/v1/avatar/set-wearing-assets',
  baseUrl: 'https://avatar.roblox.com',
  description: `Only allows items that you own, are not expired, and are wearable asset types.
Any assets being worn before this method is called are automatically removed.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Avatar_Models_AssetIdListModel,
  },
  response: Roblox_Api_Avatar_Models_WearResponseModel,
  errors: [
    {
      status: 400,
      description: `3: Invalid assetId`,
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
export const getV1gameStartInfo = {
  method: 'get' as const,
  path: '/v1/game-start-info',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_GameStartInfoResponse,
  errors: [],
};
export const patchV1outfitsUserOutfitId = {
  method: 'patch' as const,
  path: '/v1/outfits/:userOutfitId',
  baseUrl: 'https://avatar.roblox.com',
  description: `Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
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
export const postV1outfitsUserOutfitIddelete = {
  method: 'post' as const,
  path: '/v1/outfits/:userOutfitId/delete',
  baseUrl: 'https://avatar.roblox.com',
  description: `You are only allowed to delete outfits you created.`,
  requestFormat: 'json' as const,
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfitId is invalid!`,
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
2: You don&#x27;t have permission to delete this outfit.`,
      schema: z.void(),
    },
    {
      status: 500,
      description: `3: An error occurred while deleting the outfit.`,
      schema: z.void(),
    },
  ],
};
export const getV1outfitsUserOutfitIddetails = {
  method: 'get' as const,
  path: '/v1/outfits/:userOutfitId/details',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_OutfitDetailsModel,
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
};
export const postV1outfitsUserOutfitIdupdate = {
  method: 'post' as const,
  path: '/v1/outfits/:userOutfitId/update',
  baseUrl: 'https://avatar.roblox.com',
  description: `Fails if the user does not own any of the assetIds or if they are not wearable asset types.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
    userOutfitId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }).partial(),
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
export const postV1outfitsUserOutfitIdwear = {
  method: 'post' as const,
  path: '/v1/outfits/:userOutfitId/wear',
  baseUrl: 'https://avatar.roblox.com',
  description: `Applies the outfit&#x27;s appearance to your avatar
If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.`,
  requestFormat: 'json' as const,
  parameters: {
    userOutfitId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_WearResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The specified userOutfitId is invalid!`,
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
2: You don&#x27;t have permission to wear this outfit!`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `3: The flood limit has been exceeded!`,
      schema: z.void(),
    },
  ],
};
export const postV1outfitscreate = {
  method: 'post' as const,
  path: '/v1/outfits/create',
  baseUrl: 'https://avatar.roblox.com',
  description: `Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.`,
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
  },
  response: z.object({ success: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `3: Body colors must be valid BrickColor IDs
4: Invalid outfit name
5: Asset is not wearable by you and was not added to the outfit
7: Invalid Player Avatar Type. Valid types are R6 and R15
8: Invalid assetIds`,
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
export const getV1recentItemsRecentItemListTypelist = {
  method: 'get' as const,
  path: '/v1/recent-items/:recentItemListType/list',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdavatar = {
  method: 'get' as const,
  path: '/v1/users/:userId/avatar',
  baseUrl: 'https://avatar.roblox.com',
  description: `Includes assets, bodycolors, and playerAvatarType.`,
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_AvatarModelV2,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdcurrentlyWearing = {
  method: 'get' as const,
  path: '/v1/users/:userId/currently-wearing',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Api_Avatar_Models_AssetIdListModel,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist.
2: An account for the given userId does not exist!`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdoutfits = {
  method: 'get' as const,
  path: '/v1/users/:userId/outfits',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
  ],
};
