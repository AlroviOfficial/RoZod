import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Inventory_Api_Models_AssetIdListModel = z.object({
  assetIds: z.array(z.number()),
});
const Roblox_Inventory_Api_Models_CollectibleUserAssetModel = z.object({
  userAssetId: z.number().int(),
  serialNumber: z.number().int(),
  assetId: z.number().int(),
  name: z.string(),
  recentAveragePrice: z.number().int(),
  originalPrice: z.number().int(),
  assetStock: z.number().int(),
  buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  isOnHold: z.boolean(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_CollectibleUserAssetModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_Models_CollectibleUserAssetModel),
});
const Roblox_Inventory_Api_Models_CanViewInventoryResponse = z.object({
  canView: z.boolean(),
});
const Roblox_Inventory_Api_AssetsExplorerCategoryItemModel = z.object({
  name: z.string(),
  displayName: z.string(),
  filter: z.string(),
  id: z.number().int(),
  type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  categoryType: z.string(),
});
const Roblox_Inventory_Api_AssetsExplorerCategoryModel = z.object({
  name: z.string(),
  displayName: z.string(),
  categoryType: z.string(),
  items: z.array(Roblox_Inventory_Api_AssetsExplorerCategoryItemModel),
});
const Roblox_Inventory_Api_CategoriesModel = z.object({
  categories: z.array(Roblox_Inventory_Api_AssetsExplorerCategoryModel),
});
const Roblox_Inventory_Api_Models_InventoryPageResponse = z
  .object({
    data: z.array(z.object({})),
    total: z.number().int(),
    includesAccessories: z.boolean(),
  })
  .passthrough();
const Roblox_Inventory_Api_Models_IItemModel = z.object({
  Id: z.number().int(),
  Name: z.string(),
  Type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  InstanceId: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_IItemModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_Models_IItemModel),
});
const Roblox_Inventory_Api_Models_CreatorModel = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.union([z.literal(1), z.literal(2)]),
});
const Roblox_Inventory_Api_Models_PlaceModel = z.object({
  universeId: z.number().int(),
  placeId: z.number().int(),
  name: z.string(),
  creator: Roblox_Inventory_Api_Models_CreatorModel,
  priceInRobux: z.number().int(),
});
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_PlaceModel_ = z.object({
  previousPageCursor: z.string(),
  nextPageCursor: z.string(),
  data: z.array(Roblox_Inventory_Api_Models_PlaceModel),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});

/**
 * @api POST https://inventory.roblox.com/v1/collections/items/:itemType/:itemTargetId
 * @summary Adds an item to the appropriate collection
 * @param itemType Type of the item (ie. Asset, Bundle)
 * @param itemTargetId ID of the item
 */
export const postCollectionsItemsItemtypeItemtargetid = endpoint({
  method: 'post',
  path: '/v1/collections/items/:itemType/:itemTargetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    itemType: {
      style: 'simple',
    },
    itemTargetId: {
      style: 'simple',
    },
  },
  parameters: {
    itemType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    itemTargetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The item type does not exist.
2: The asset does not exist.
3: The bundle does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: You don&#x27;t own the specified item.
5: Assets of this type are not allowed in collections.
6: Items of this type are not allowed in collections.
7: The item is already in the collection.
9: The collection is full.`,
    },
  ],
});
/**
 * @api DELETE https://inventory.roblox.com/v1/collections/items/:itemType/:itemTargetId
 * @summary Removes an item to the appropriate collection
 * @param itemType Type of the item (ie. Asset, Bundle)
 * @param itemTargetId ID of the item
 */
export const deleteCollectionsItemsItemtypeItemtargetid = endpoint({
  method: 'delete',
  path: '/v1/collections/items/:itemType/:itemTargetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    itemType: {
      style: 'simple',
    },
    itemTargetId: {
      style: 'simple',
    },
  },
  parameters: {
    itemType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    itemTargetId: z.number().int(),
  },
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The item type does not exist.
2: The asset does not exist.
3: The bundle does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
8: The item is not in the collection.`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v1/packages/:packageId/assets
 * @summary Given a package ID, returns the list of asset IDs for that package
 * @param packageID The asset ID of the package
 */
export const getPackagesPackageidAssets = endpoint({
  method: 'get',
  path: '/v1/packages/:packageId/assets',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    packageID: {
      style: 'simple',
    },
  },
  parameters: {
    packageID: z.number().int(),
  },
  response: Roblox_Inventory_Api_Models_AssetIdListModel,
  errors: [],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/assets/collectibles
 * @summary Gets all collectible assets owned by the specified user.
 * @param userId The userid of the owner of the collectibles.
 * @param assetType The asset type for the collectibles you're trying to get.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by userAssetId
 */
export const getUsersUseridAssetsCollectibles = endpoint({
  method: 'get',
  path: '/v1/users/:userId/assets/collectibles',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetType: {
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
    assetType: z
      .union([
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
        z.literal(83),
      ])
      .optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_CollectibleUserAssetModel_,
  errors: [
    {
      status: 400,
      description: `The specified asset type(s) are invalid.`,
    },
    {
      status: 403,
      description: `The specified user&#x27;s inventory is hidden.`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/can-view-inventory
 * @summary Gets whether the specified user's inventory can be viewed.
 * @param userId The user identifier.
 */
export const getUsersUseridCanViewInventory = endpoint({
  method: 'get',
  path: '/v1/users/:userId/can-view-inventory',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ canView: z.boolean() }),
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist!`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/categories
 * @summary Return inventory categories for a user
 * @param userId
 */
export const getUsersUseridCategories = endpoint({
  method: 'get',
  path: '/v1/users/:userId/categories',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Inventory_Api_CategoriesModel,
  errors: [],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/categories/favorites
 * @summary Return favorites categories for a user
 * @param userId
 */
export const getUsersUseridCategoriesFavorites = endpoint({
  method: 'get',
  path: '/v1/users/:userId/categories/favorites',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Inventory_Api_CategoriesModel,
  errors: [],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/inventory/:assetType
 * @summary Gets a list of assets by type for the specified user.
Note that the 'Hat' asset type may return accessories while we are migrating.
 * @param userId The user identifier.
 * @param assetType The asset type.
 * @param pageNumber The start index.
 * @param itemsPerPage The max number of items that can be returned.
 * @param keyword Filter results for items containing this.
 */
export const getUsersUseridInventoryAssettype = endpoint({
  method: 'get',
  path: '/v1/users/:userId/inventory/:assetType',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetType: {
      style: 'simple',
    },
    pageNumber: {
      style: 'form',
      explode: true,
    },
    itemsPerPage: {
      style: 'form',
      explode: true,
    },
    keyword: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    assetType: z.union([
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
      z.literal(83),
    ]),
    pageNumber: z.number().int().optional().default(1),
    itemsPerPage: z.number().int().optional().default(25),
    keyword: z.string().optional(),
  },
  response: Roblox_Inventory_Api_Models_InventoryPageResponse,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist!
3: Specified asset type is invalid!`,
    },
    {
      status: 403,
      description: `1: The specified user does not exist!
11: You don&#x27;t have permissions to view the specified user&#x27;s inventory.`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/items/:itemType/:itemTargetId
 * @summary Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.
Place creators can make requests as if they were the Game Server.
 * @param userId ID of the user in question
 * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
 * @param itemTargetId ID of the item in question
 */
export const getUsersUseridItemsItemtypeItemtargetid = endpoint({
  method: 'get',
  path: '/v1/users/:userId/items/:itemType/:itemTargetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    itemType: {
      style: 'simple',
    },
    itemTargetId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    itemType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    itemTargetId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_IItemModel_,
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist!
5: The specified game pass does not exist! Are you using the new game pass ID?
6: The specified item type does not exist.
7: The specified Asset does not exist!
10: The specified asset is not a badge!
12: The specified bundle does not exist!`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/items/:itemType/:itemTargetId/is-owned
 * @summary Gets whether a user owns an item of type itemType with id itemTargetId.
 * @param userId ID of the user in question
 * @param itemType Type of the item in question (ie. Asset, GamePass, Badge, Bundle)
 * @param itemTargetId ID of the item in question
 */
export const getUsersUseridItemsItemtypeItemtargetidIsOwned = endpoint({
  method: 'get',
  path: '/v1/users/:userId/items/:itemType/:itemTargetId/is-owned',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    itemType: {
      style: 'simple',
    },
    itemTargetId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    itemType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    itemTargetId: z.number().int(),
  },
  response: z.boolean(),
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist!
5: The specified game pass does not exist! Are you using the new game pass ID?
6: The specified item type does not exist.
7: The specified Asset does not exist!
10: The specified asset is not a badge!
12: The specified bundle does not exist!`,
    },
  ],
});
/**
 * @api GET https://inventory.roblox.com/v1/users/:userId/places/inventory
 * @summary Gets Created, MyGames, or OtherGames places inventory for a user
 * @param userId
 * @param placesTab
 * @param itemsPerPage
 * @param cursor
 */
export const getUsersUseridPlacesInventory = endpoint({
  method: 'get',
  path: '/v1/users/:userId/places/inventory',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    placesTab: {
      style: 'form',
      explode: true,
    },
    itemsPerPage: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    userId: z.number().int(),
    placesTab: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
    itemsPerPage: z.number().int(),
    cursor: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_PlaceModel_,
  errors: [
    {
      status: 400,
      description: `6: Invalid request`,
    },
    {
      status: 403,
      description: `3: Insufficient permission.`,
    },
  ],
});
