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
const Roblox_Api_Avatar_Models_BodyColorsModel = z.object({
  headColorId: z.number().int(),
  torsoColorId: z.number().int(),
  rightArmColorId: z.number().int(),
  leftArmColorId: z.number().int(),
  rightLegColorId: z.number().int(),
  leftLegColorId: z.number().int(),
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
const Roblox_Api_Avatar_Models_AvatarModelV2 = z.object({
  scales: Roblox_Web_Responses_Avatar_ScaleModel,
  playerAvatarType: z.union([z.literal(1), z.literal(3)]),
  bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
  assets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
  defaultShirtApplied: z.boolean(),
  defaultPantsApplied: z.boolean(),
  emotes: z.array(Roblox_Api_Avatar_Models_EmoteResponseModel),
});
const Roblox_Api_Avatar_Models_ScaleRulesModel = z.object({
  min: z.number(),
  max: z.number(),
  increment: z.number(),
});
const Roblox_Api_Avatar_Models_AssetTypeRulesModel = z.object({
  maxNumber: z.number().int(),
  id: z.number().int(),
  name: z.string(),
});
const Roblox_Avatarcore_Common_Models_AccessoryPositionModel = z.object({
  xPosition: z.number(),
  yPosition: z.number(),
  zPosition: z.number(),
});
const Roblox_Avatarcore_Common_Models_AccessoryRotationModel = z.object({
  xRotation: z.number(),
  yRotation: z.number(),
  zRotation: z.number(),
});
const Roblox_Avatarcore_Common_Models_AccessoryScaleModel = z.object({
  xScale: z.number(),
  yScale: z.number(),
  zScale: z.number(),
});
const Roblox_Avatarcore_Common_Models_AccessoryRefinementModel = z.object({
  position: Roblox_Avatarcore_Common_Models_AccessoryPositionModel,
  rotation: Roblox_Avatarcore_Common_Models_AccessoryRotationModel,
  scale: Roblox_Avatarcore_Common_Models_AccessoryScaleModel,
});
const Roblox_Api_Avatar_Models_AvatarRulesModel_accessoryRefinementLowerBounds = z.object({
  Image: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  TShirt: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Audio: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Mesh: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Lua: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  HTML: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Text: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Hat: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Place: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Model: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Shirt: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Pants: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Decal: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Avatar: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Head: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Face: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Gear: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Badge: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  GroupEmblem: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Animation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Arms: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Legs: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Torso: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  RightArm: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  LeftArm: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  LeftLeg: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  RightLeg: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Package: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  YouTubeVideo: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  GamePass: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  App: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Code: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Plugin: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  SolidModel: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  MeshPart: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  HairAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  FaceAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  NeckAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  ShoulderAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  FrontAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  BackAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  WaistAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  ClimbAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  DeathAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  FallAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  IdleAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  JumpAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  RunAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  SwimAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  WalkAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  PoseAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  LocalizationTableManifest: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  LocalizationTableTranslation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  EmoteAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  Video: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  TexturePack: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  TShirtAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  ShirtAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  PantsAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  JacketAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  SweaterAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  ShortsAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  LeftShoeAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  RightShoeAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  DressSkirtAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  FontFamily: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  FontFace: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  MeshHiddenSurfaceRemoval: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  EyebrowAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  EyelashAccessory: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  MoodAnimation: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  DynamicHead: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  CodeSnippet: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  AdsVideo: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
  OtaUpdate: Roblox_Avatarcore_Common_Models_AccessoryRefinementModel,
});
const Roblox_Api_Avatar_Models_BodyColorModel = z.object({
  brickColorId: z.number().int(),
  hexColor: z.string(),
  name: z.string(),
});
const Roblox_Api_Avatar_Models_DefaultClothingAssets = z.object({
  defaultShirtAssetIds: z.array(z.number()),
  defaultPantAssetIds: z.array(z.number()),
});
const Roblox_Api_Avatar_Models_AvatarRulesModel = z.object({
  playerAvatarTypes: z.array(z.union([z.literal(1), z.literal(3)])),
  scales: z.record(Roblox_Api_Avatar_Models_ScaleRulesModel),
  wearableAssetTypes: z.array(Roblox_Api_Avatar_Models_AssetTypeRulesModel),
  accessoryRefinementTypes: z.array(
    z.union([
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
      z.literal(81),
      z.literal(82),
    ]),
  ),
  accessoryRefinementLowerBounds: Roblox_Api_Avatar_Models_AvatarRulesModel_accessoryRefinementLowerBounds,
  accessoryRefinementUpperBounds: z.unknown(),
  bodyColorsPalette: z.array(Roblox_Api_Avatar_Models_BodyColorModel),
  basicBodyColorsPalette: z.array(Roblox_Api_Avatar_Models_BodyColorModel),
  minimumDeltaEBodyColorDifference: z.number(),
  proportionsAndBodyTypeEnabledForUser: z.boolean(),
  defaultClothingAssetLists: Roblox_Api_Avatar_Models_DefaultClothingAssets,
  bundlesEnabledForUser: z.boolean(),
  emotesEnabledForUser: z.boolean(),
});
const Roblox_Api_Avatar_Models_AvatarMetadataModel = z.object({
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
});
const Roblox_Api_Avatar_Models_UniverseAvatarAssetOverrideResponseModel = z.object({
  assetID: z.number().int(),
  assetTypeID: z.number().int(),
  isPlayerChoice: z.boolean(),
});
const Roblox_Api_Avatar_Models_GameStartInfoResponse = z.object({
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
});
const Roblox_Api_Avatar_Models_OutfitDetailsModel = z.object({
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
});
const Roblox_Api_Avatar_Models_RecentItemModel = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.union([z.literal(1), z.literal(2)]),
  assetType: Roblox_Api_Avatar_Models_AssetTypeModel,
  isEditable: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiLegacyPageResponse_Roblox_Api_Avatar_Models_RecentItemModel_ = z.object({
  data: z.array(Roblox_Api_Avatar_Models_RecentItemModel),
  total: z.number().int(),
});
const Roblox_Api_Avatar_Models_AssetIdListModel = z.object({
  assetIds: z.array(z.number()),
});
const Roblox_Api_Avatar_Models_OutfitModel = z.object({
  id: z.number().int(),
  name: z.string(),
  isEditable: z.boolean(),
  outfitType: z.string(),
});
const Roblox_Api_Avatar_Models_AvatarFilteredPageResponse_Roblox_Api_Avatar_Models_OutfitModel_ = z.object({
  filteredCount: z.number().int(),
  data: z.array(Roblox_Api_Avatar_Models_OutfitModel),
  total: z.number().int(),
});
const Roblox_Api_Avatar_Models_AvatarApiSuccessResponse = z.object({
  success: z.boolean(),
});
const Roblox_Api_Avatar_Controllers_V1_AvatarController_EmptyResponse = z.object({});
const Roblox_Api_Avatar_Models_PlayerAvatarTypeModel = z.object({
  playerAvatarType: z.union([z.literal(1), z.literal(3)]),
});
const Roblox_Api_Avatar_Models_WearResponseModel = z.object({
  invalidAssets: z.array(Roblox_Api_Avatar_Models_AssetModelV2),
  invalidAssetIds: z.array(z.number()),
  success: z.boolean(),
});
const Roblox_Api_Avatar_Models_OutfitUpdateModelV1 = z.object({
  name: z.string(),
  bodyColors: Roblox_Api_Avatar_Models_BodyColorsModel,
  assetIds: z.array(z.number()),
  scale: Roblox_Web_Responses_Avatar_ScaleModel,
  playerAvatarType: z.string(),
  outfitType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});

/**
 * @api GET https://avatar.roblox.com/v1/avatar
 * @summary Returns details about the authenticated user's avatar
 */
export const getAvatar = endpoint({
  method: 'GET',
  path: '/v1/avatar',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
  method: 'GET',
  path: '/v1/avatar-rules',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Avatar_Models_AvatarRulesModel,
  errors: [],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/assets/:assetId/remove
 * @summary Removes the asset from the authenticated user's avatar.
 * @param assetId The asset id.
 */
export const postAvatarAssetsAssetidRemove = endpoint({
  method: 'POST',
  path: '/v1/avatar/assets/:assetId/remove',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }),
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
  method: 'POST',
  path: '/v1/avatar/assets/:assetId/wear',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({ success: z.boolean() }),
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
  method: 'GET',
  path: '/v1/avatar/metadata',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  response: Roblox_Api_Avatar_Models_AvatarMetadataModel,
  errors: [],
});
/**
 * @api POST https://avatar.roblox.com/v1/avatar/redraw-thumbnail
 * @summary Requests the authenticated user's thumbnail be redrawn
 */
export const postAvatarRedrawThumbnail = endpoint({
  method: 'POST',
  path: '/v1/avatar/redraw-thumbnail',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
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
  method: 'POST',
  path: '/v1/avatar/set-body-colors',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_BodyColorsModel,
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
 * @api POST https://avatar.roblox.com/v1/avatar/set-player-avatar-type
 * @summary Sets the authenticated user's player avatar type (e.g. R6 or R15).
 * @param body R6 or R15
 * @description This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
 */
export const postAvatarSetPlayerAvatarType = endpoint({
  method: 'POST',
  path: '/v1/avatar/set-player-avatar-type',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_PlayerAvatarTypeModel,
  response: z.object({ success: z.boolean() }),
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
  method: 'POST',
  path: '/v1/avatar/set-scales',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Web_Responses_Avatar_ScaleModel,
  response: z.object({ success: z.boolean() }),
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
  method: 'POST',
  path: '/v1/avatar/set-wearing-assets',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
  method: 'GET',
  path: '/v1/game-start-info',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
  method: 'PATCH',
  path: '/v1/outfits/:userOutfitId',
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
  method: 'POST',
  path: '/v1/outfits/:userOutfitId/delete',
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
  response: z.object({ success: z.boolean() }),
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
 * @param userOutfitId
 */
export const getOutfitsUseroutfitidDetails = endpoint({
  method: 'GET',
  path: '/v1/outfits/:userOutfitId/details',
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
  method: 'POST',
  path: '/v1/outfits/:userOutfitId/update',
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
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
  response: z.object({ success: z.boolean() }),
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
 * @api POST https://avatar.roblox.com/v1/outfits/create
 * @summary Creates a new outfit.
 * @param body The new outfit
 * @description Fails if any of the assetIds are not owned by the user, or not wearable types.
The name property of the request is optional as one will be auto-generated when the request has a null name.
 */
export const postOutfitsCreate = endpoint({
  method: 'POST',
  path: '/v1/outfits/create',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV1,
  response: z.object({ success: z.boolean() }),
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
  method: 'GET',
  path: '/v1/recent-items/:recentItemListType/list',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
  method: 'GET',
  path: '/v1/users/:userId/avatar',
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
  method: 'GET',
  path: '/v1/users/:userId/currently-wearing',
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
 * @summary Deprecated, user v2.
Gets a list of outfits for the specified user.
 * @param userId The user id.
 * @param outfitType The outfit type being searched for, null will return all outfitTypes
 * @param page The page number of the current page of requests, default is 1.
 * @param itemsPerPage The max number of outfits that can be returned.
 * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
 */
export const getUsersUseridOutfits = endpoint({
  method: 'GET',
  path: '/v1/users/:userId/outfits',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
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
    isEditable: z.boolean().optional(),
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
