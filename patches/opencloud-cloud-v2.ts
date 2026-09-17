// Patched endpoints missing from Roblox API docs

const Patch_ApiKeyIntrospectScope = z.object({
  name: z.string(),
  operations: z.array(z.string()),
  universeDatastores: z
    .array(z.object({ universeId: z.string(), datastoreName: z.string() }))
    .optional(),
  groupIds: z.array(z.string()).optional(),
  userIds: z.array(z.string()).optional(),
});

const Patch_ApiKeyIntrospectResponse = z.object({
  name: z.string(),
  authorizedUserId: z.number(),
  scopes: z.array(Patch_ApiKeyIntrospectScope),
  enabled: z.boolean(),
  expired: z.boolean(),
  expirationTimeUtc: z.string(),
});

export const postApiKeysIntrospect = endpoint({
  method: "POST",
  path: "/api-keys/v1/introspect",
  baseUrl: "https://apis.roblox.com",
  requestFormat: "json",
  serializationMethod: { body: {} },
  parameters: {},
  body: z.object({ apiKey: z.string() }),
  response: Patch_ApiKeyIntrospectResponse,
  errors: [],
});

export const deleteLegacyDevelopV2TeamtestByPlaceId = endpoint({
  method: "DELETE",
  path: "/legacy-develop/v2/teamtest/:placeId",
  baseUrl: "https://apis.roblox.com",
  requestFormat: "json",
  serializationMethod: { placeId: { style: "simple" } },
  parameters: { placeId: z.number().int() },
  response: z.object({}),
  errors: [],
});

// Users resource: still served (and listed in creator-docs' combined openapi.json) but
// dropped from cloud.docs.json, which is the file this generator consumes.

const Patch_User_SocialNetworkProfiles = z.object({
  facebook: z.string(),
  twitter: z.string(),
  youtube: z.string(),
  twitch: z.string(),
  guilded: z.string(),
  visibility: z.enum([
    'SOCIAL_NETWORK_VISIBILITY_UNSPECIFIED',
    'NO_ONE',
    'FRIENDS',
    'FRIENDS_AND_FOLLOWING',
    'FRIENDS_FOLLOWING_AND_FOLLOWERS',
    'EVERYONE',
  ]),
});
const Patch_User = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  about: z.string(),
  locale: z.string(),
  premium: z.boolean(),
  idVerified: z.boolean(),
  socialNetworkProfiles: Patch_User_SocialNetworkProfiles,
});
const Patch_InventoryItem_CollectibleDetails = z.object({
  itemId: z.string(),
  instanceId: z.string(),
  instanceState: z.enum(['COLLECTIBLE_ITEM_INSTANCE_STATE_UNSPECIFIED', 'AVAILABLE', 'HOLD']),
  serialNumber: z.number().int(),
});
const Patch_InventoryItem_AssetDetails = z.object({
  assetId: z.string(),
  inventoryItemAssetType: z.enum([
    'INVENTORY_ITEM_ASSET_TYPE_UNSPECIFIED',
    'CLASSIC_TSHIRT',
    'AUDIO',
    'HAT',
    'MODEL',
    'CLASSIC_SHIRT',
    'CLASSIC_PANTS',
    'DECAL',
    'CLASSIC_HEAD',
    'FACE',
    'GEAR',
    'ANIMATION',
    'TORSO',
    'RIGHT_ARM',
    'LEFT_ARM',
    'LEFT_LEG',
    'RIGHT_LEG',
    'PACKAGE',
    'PLUGIN',
    'MESH_PART',
    'HAIR_ACCESSORY',
    'FACE_ACCESSORY',
    'NECK_ACCESSORY',
    'SHOULDER_ACCESSORY',
    'FRONT_ACCESSORY',
    'BACK_ACCESSORY',
    'WAIST_ACCESSORY',
    'CLIMB_ANIMATION',
    'DEATH_ANIMATION',
    'FALL_ANIMATION',
    'IDLE_ANIMATION',
    'JUMP_ANIMATION',
    'RUN_ANIMATION',
    'SWIM_ANIMATION',
    'WALK_ANIMATION',
    'POSE_ANIMATION',
    'EMOTE_ANIMATION',
    'VIDEO',
    'TSHIRT_ACCESSORY',
    'SHIRT_ACCESSORY',
    'PANTS_ACCESSORY',
    'JACKET_ACCESSORY',
    'SWEATER_ACCESSORY',
    'SHORTS_ACCESSORY',
    'LEFT_SHOE_ACCESSORY',
    'RIGHT_SHOE_ACCESSORY',
    'DRESS_SKIRT_ACCESSORY',
    'EYEBROW_ACCESSORY',
    'EYELASH_ACCESSORY',
    'MOOD_ANIMATION',
    'DYNAMIC_HEAD',
    'CREATED_PLACE',
    'PURCHASED_PLACE',
  ]),
  instanceId: z.string(),
  collectibleDetails: Patch_InventoryItem_CollectibleDetails,
});
const Patch_InventoryItem_BadgeDetails = z.object({ badgeId: z.string() });
const Patch_InventoryItem_GamePassDetails = z.object({ gamePassId: z.string() });
const Patch_InventoryItem_PrivateServerDetails = z.object({ privateServerId: z.string() });
const Patch_InventoryItem = z.object({
  path: z.string(),
  assetDetails: Patch_InventoryItem_AssetDetails,
  badgeDetails: Patch_InventoryItem_BadgeDetails,
  gamePassDetails: Patch_InventoryItem_GamePassDetails,
  privateServerDetails: Patch_InventoryItem_PrivateServerDetails,
  addTime: z.string().datetime({ offset: true }),
});
const Patch_ListInventoryItemsResponse = z.object({
  inventoryItems: z.array(Patch_InventoryItem),
  nextPageToken: z.string(),
});
const Patch_GenerateUserThumbnailResponse = z.object({ imageUri: z.string() });

/**
 * `STABLE`
 *
 * Gets a user's basic and advanced information.

To access a user's public information, no additional scopes are required.

To access a user's verification status, you need the following scopes:
* user.advanced:read

To access a user's social account information, you need the following
scopes:
* user.social:read
 *
 * **Scopes:** `user.advanced:read`, `user.social:read`
 * **Engine:** Usable with HttpService
 *
 * @param user_id The user ID.
 */
export const getCloudV2UsersUserId = endpoint({
  method: 'GET',
  path: '/cloud/v2/users/:user_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['user.advanced:read', 'user.social:read'],
  requestFormat: 'json',
  serializationMethod: {
    user_id: {},
  },
  parameters: {
    user_id: z.string(),
  },
  response: Patch_User,
  errors: [],
});
/**
 * `STABLE`
 *
 * Generates and returns the URL for the user's avatar thumbnail.
 *
 * **Engine:** Usable with HttpService
 *
 * @param user_id The user ID.
 * @param size Size of the generated thumbnail. The generated thumbnail will have `size *
size` dimension.

Currently supported values:
48, 50, 60, 75, 100, 110, 150, 180, 352, 420, 720
Default is 420.
 * @param format Specify the format of the generated thumbnail. Default is `PNG`.

Possible values:

  | Value | Description |
  | --- | --- |
  | FORMAT_UNSPECIFIED | Default UserThumbnail Format -- set to png |
  | PNG | Generate thumbnail in `.png` format |
  | JPEG | Generate thumbnail in `.jpg` format |
 * @param shape Specify the shape of the thumbnail. Default is `ROUND` (circular).

Possible values:

  | Value | Description |
  | --- | --- |
  | SHAPE_UNSPECIFIED | Default UserThumbnail Shape -- set to round |
  | ROUND | Generate thumbnail as a circle. |
  | SQUARE | Generate thumbnail as a rectangle. |
 */
export const getCloudV2UsersUserIdGenerateThumbnail = endpoint({
  method: 'GET',
  path: '/cloud/v2/users/:user_id:generateThumbnail',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    user_id: {},
    size: {},
    format: {},
    shape: {},
  },
  parameters: {
    user_id: z.string(),
    size: z.number().int().optional(),
    format: z.enum(['FORMAT_UNSPECIFIED', 'PNG', 'JPEG']).optional(),
    shape: z.enum(['SHAPE_UNSPECIFIED', 'ROUND', 'SQUARE']).optional(),
  },
  response: Operation,
  resultResponse: Patch_GenerateUserThumbnailResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * List the inventory items in a user's inventory.

The inventory items returned depend on the target user's choice under
**Settings > Privacy > Who can see my inventory?**:
* If the user granted inventory visibility to "Everyone," then any API key
or OAuth2 token can be used to view the target's inventory, no matter what
scopes it has or who created it.
* If the user has not granted inventory visibility to "Everyone":
  * Their inventory can still be viewed with an API key created by the
  target user with **Inventory: Read** permission.
  * Their inventory can still be viewed with an OAuth2 token if the target
  user authorizes an app requesting permissions for the
  `user.inventory-item:read` scope.
 *
 * **Scopes:** `user.inventory-item:read`
 * **Engine:** Usable with HttpService
 *
 * @param user_id The user ID.
 * @param maxPageSize The maximum number of inventory items to return. The service might return
fewer than this value. If unspecified, at most 10 inventory items are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

See the
[filtering](/cloud/reference/patterns#list-inventory-items)
documentation for more information.
 */
export const getCloudV2UsersUserIdInventoryItems = endpoint({
  method: 'GET',
  path: '/cloud/v2/users/:user_id/inventory-items',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['user.inventory-item:read'],
  requestFormat: 'json',
  serializationMethod: {
    user_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    user_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: Patch_ListInventoryItemsResponse,
  errors: [],
});
