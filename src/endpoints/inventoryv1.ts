import { z } from 'zod';

const Roblox_Inventory_Api_Models_AssetIdListModel = z.object({ assetIds: z.array(z.number()) }).partial();
const Roblox_Inventory_Api_Models_CollectibleUserAssetModel = z
  .object({
    userAssetId: z.number().int(),
    serialNumber: z.number().int(),
    assetId: z.number().int(),
    name: z.string(),
    recentAveragePrice: z.number().int(),
    originalPrice: z.number().int(),
    assetStock: z.number().int(),
    buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    isOnHold: z.boolean(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_CollectibleUserAssetModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Inventory_Api_Models_CollectibleUserAssetModel),
  })
  .partial();
const Roblox_Inventory_Api_Models_CanViewInventoryResponse = z.object({ canView: z.boolean() }).partial();
const Roblox_Inventory_Api_AssetsExplorerCategoryItemModel = z
  .object({
    name: z.string(),
    displayName: z.string(),
    filter: z.string(),
    id: z.number().int(),
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    categoryType: z.string(),
  })
  .partial();
const Roblox_Inventory_Api_AssetsExplorerCategoryModel = z
  .object({
    name: z.string(),
    displayName: z.string(),
    categoryType: z.string(),
    items: z.array(Roblox_Inventory_Api_AssetsExplorerCategoryItemModel),
  })
  .partial();
const Roblox_Inventory_Api_CategoriesModel = z
  .object({
    categories: z.array(Roblox_Inventory_Api_AssetsExplorerCategoryModel),
  })
  .partial();
const Roblox_Inventory_Api_Models_InventoryPageResponse = z
  .object({
    data: z.array(z.unknown()),
    total: z.number().int(),
    includesAccessories: z.boolean(),
  })
  .partial();
const Roblox_Inventory_Api_Models_IItemModel = z
  .object({
    Id: z.number().int(),
    Name: z.string(),
    Type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    InstanceId: z.number().int(),
  })
  .partial();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_IItemModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Inventory_Api_Models_IItemModel),
  })
  .partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();

const schemas = {
  Roblox_Inventory_Api_Models_AssetIdListModel,
  Roblox_Inventory_Api_Models_CollectibleUserAssetModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_CollectibleUserAssetModel_,
  Roblox_Inventory_Api_Models_CanViewInventoryResponse,
  Roblox_Inventory_Api_AssetsExplorerCategoryItemModel,
  Roblox_Inventory_Api_AssetsExplorerCategoryModel,
  Roblox_Inventory_Api_CategoriesModel,
  Roblox_Inventory_Api_Models_InventoryPageResponse,
  Roblox_Inventory_Api_Models_IItemModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Inventory_Api_Models_IItemModel_,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
};

export const deleteV1collectionsitemsItemTypeItemTargetId = {
  method: 'delete' as const,
  path: '/v1/collections/items/:itemType/:itemTargetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    itemType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    itemTargetId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: The item type does not exist.
2: The asset does not exist.
3: The bundle does not exist.`,
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
8: The item is not in the collection.`,
      schema: z.void(),
    },
  ],
};
export const postV1collectionsitemsItemTypeItemTargetId = {
  method: 'post' as const,
  path: '/v1/collections/items/:itemType/:itemTargetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    itemType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    itemTargetId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `1: The item type does not exist.
2: The asset does not exist.
3: The bundle does not exist.`,
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
4: You don&#x27;t own the specified item.
5: Assets of this type are not allowed in collections.
6: Items of this type are not allowed in collections.
7: The item is already in the collection.
9: The collection is full.`,
      schema: z.void(),
    },
  ],
};
export const getV1packagesPackageIdassets = {
  method: 'get' as const,
  path: '/v1/packages/:packageId/assets',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    packageID: z.number().int(),
  },
  response: Roblox_Inventory_Api_Models_AssetIdListModel,
  errors: [],
};
export const getV1usersUserIdassetscollectibles = {
  method: 'get' as const,
  path: '/v1/users/:userId/assets/collectibles',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
    {
      status: 403,
      description: `The specified user&#x27;s inventory is hidden.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdcanViewInventory = {
  method: 'get' as const,
  path: '/v1/users/:userId/can-view-inventory',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({ canView: z.boolean() }).partial(),
  errors: [
    {
      status: 400,
      description: `1: The specified user does not exist!`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIdcategories = {
  method: 'get' as const,
  path: '/v1/users/:userId/categories',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Inventory_Api_CategoriesModel,
  errors: [],
};
export const getV1usersUserIdcategoriesfavorites = {
  method: 'get' as const,
  path: '/v1/users/:userId/categories/favorites',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: Roblox_Inventory_Api_CategoriesModel,
  errors: [],
};
export const getV1usersUserIdinventoryAssetType = {
  method: 'get' as const,
  path: '/v1/users/:userId/inventory/:assetType',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
    {
      status: 403,
      description: `1: The specified user does not exist!
11: You don&#x27;t have permissions to view the specified user&#x27;s inventory.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIditemsItemTypeItemTargetId = {
  method: 'get' as const,
  path: '/v1/users/:userId/items/:itemType/:itemTargetId',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
  ],
};
export const getV1usersUserIditemsItemTypeItemTargetIdisOwned = {
  method: 'get' as const,
  path: '/v1/users/:userId/items/:itemType/:itemTargetId/is-owned',
  baseUrl: 'https://inventory.roblox.com',
  requestFormat: 'json' as const,
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
      schema: z.void(),
    },
  ],
};
