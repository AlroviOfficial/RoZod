import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Agents_AgentType_ = z.object({
  id: z.number().int(),
  type: z.enum(['User', 'Group']),
  name: z.string(),
});
const Roblox_Inventory_Api_V2_AssetOwnerResponse = z.object({
  id: z.number().int(),
  collectibleItemInstanceId: z.string(),
  serialNumber: z.number().int(),
  owner: Roblox_Web_Responses_RelatedEntityTypeResponse_Roblox_Agents_AgentType_,
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_AssetOwnerResponse_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_V2_AssetOwnerResponse),
});
const Roblox_Inventory_Api_V2_UserAssetItemModelV2 = z.object({
  assetId: z.number().int(),
  name: z.string(),
  assetType: z.enum([
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
  created: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_UserAssetItemModelV2_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_V2_UserAssetItemModelV2),
});
const Roblox_Inventory_Api_Models_UserModel = z.object({
  userId: z.number().int(),
  username: z.string(),
  buildersClubMembershipType: z.enum(['None', 'BC', 'TBC', 'OBC', 'RobloxPremium']),
});
const Roblox_Inventory_Api_Models_InventoryItemModel = z.object({
  expireAt: z.string().datetime({ offset: true }),
  userAssetId: z.number().int(),
  assetId: z.number().int(),
  assetName: z.string(),
  collectibleItemId: z.string(),
  collectibleItemInstanceId: z.string(),
  serialNumber: z.number().int(),
  owner: Roblox_Inventory_Api_Models_UserModel,
  created: z.string().datetime({ offset: true }),
  updated: z.string().datetime({ offset: true }),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_InventoryItemModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_Models_InventoryItemModel),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

/**
 * @api GET https://inventory.roblox.com/v2/assets/:assetId/owners
 * @summary Gets a list of owners of an asset.
 * @param assetId The asset id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by userAssetId
 */
export const getAssetsAssetidOwners = endpoint({
  method: 'GET',
  path: '/v2/assets/:assetId/owners',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
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
    assetId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_AssetOwnerResponse_,
  errors: [
    {
      status: 400,
      description: `1: The asset id is invalid.`,
    },
    {
      status: 403,
      description: `2: You do not have permission to view the owners of this asset.`,
    },
  ],
});
/**
 * @api DELETE https://inventory.roblox.com/v2/inventory/asset/:assetId
 * @summary Give up an asset owned by the authenticated user.
Assets that are created by Roblox user or are limited edition are not eligible for deletion
and will return NotEligibleForDelete.
 * @param assetId ID of the asset to delete.
 */
export const deleteInventoryAssetAssetid = endpoint({
  method: 'DELETE',
  path: '/v2/inventory/asset/:assetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    assetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
4: You are not authorized.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You don&#x27;t own the specified item.
3: The item is not allowed to be deleted.`,
    },
    {
      status: 404,
      description: `1: The item does not exist.`,
    },
    {
      status: 500,
      description: `0: An unknown error occured.`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v2/users/:userId/inventory
 * @summary Get user's inventory by multiple Roblox.Platform.Assets.AssetType.
 * @param userId The inventory owner's userId.
 * @param assetTypes The asset types to query.
 * @param filterDisapprovedAssets Filters moderated assets when enabled.
 * @param showApprovedOnly Filters moderated assets and assets pending review when enabled.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @description GamePass and Badges not allowed.
 */
export const getUsersUseridInventory = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/inventory',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetTypes: {
      style: 'form',
    },
    filterDisapprovedAssets: {
      style: 'form',
      explode: true,
    },
    showApprovedOnly: {
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
    assetTypes: z.array(z.object({})),
    filterDisapprovedAssets: z.boolean().optional(),
    showApprovedOnly: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_V2_UserAssetItemModelV2_,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset type Id.`,
    },
    {
      status: 403,
      description: `3: Insufficient permission.
4: You are not authorized to view this user&#x27;s inventory.`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v2/users/:userId/inventory/:assetTypeId
 * @summary Gets user's inventory based on specific asset type
 * @param userId The user Id of the inventory owner
 * @param assetTypeId The asset type Id of the items to get
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getUsersUseridInventoryAssettypeid = endpoint({
  method: 'GET',
  path: '/v2/users/:userId/inventory/:assetTypeId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetTypeId: {
      style: 'simple',
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
    assetTypeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_InventoryItemModel_,
  errors: [
    {
      status: 400,
      description: `1: Invalid user Id.
2: Invalid asset type Id.`,
    },
    {
      status: 403,
      description: `3: Insufficient permission.
4: You are not authorized to view this user&#x27;s inventory.`,
    },
  ],
});
