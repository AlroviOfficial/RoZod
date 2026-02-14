import { z } from 'zod';
import { endpoint } from '../..';

const Decimal = z.object({
  significand: z.number().int(),
  exponent: z.number().int(),
});
const Money = z.object({ currencyCode: z.string(), quantity: Decimal });
const CreatorStoreProduct = z.object({
  path: z.string(),
  basePrice: Money,
  purchasePrice: Money,
  published: z.boolean(),
  restrictions: z.array(
    z.enum([
      'RESTRICTION_UNSPECIFIED',
      'SOLD_ITEM_RESTRICTED',
      'SELLER_TEMPORARILY_RESTRICTED',
      'SELLER_PERMANENTLY_RESTRICTED',
      'SELLER_NO_LONGER_ACTIVE',
    ]),
  ),
  purchasable: z.boolean(),
  userSeller: z.string(),
  groupSeller: z.string(),
  modelAssetId: z.string(),
  pluginAssetId: z.string(),
  audioAssetId: z.string(),
  decalAssetId: z.string(),
  meshPartAssetId: z.string(),
  videoAssetId: z.string(),
  fontFamilyAssetId: z.string(),
});
const Group = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  id: z.string(),
  displayName: z.string(),
  description: z.string(),
  owner: z.string(),
  memberCount: z.number().int(),
  publicEntryAllowed: z.boolean(),
  locked: z.boolean(),
  verified: z.boolean(),
});
const GroupForumCategory = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  groupForumCategoryId: z.string(),
  displayName: z.string(),
  creator: z.string(),
  archiveTime: z.string().datetime({ offset: true }),
  archiver: z.string(),
});
const ListGroupForumCategoriesResponse = z.object({
  groupForumCategories: z.array(GroupForumCategory),
  nextPageToken: z.string(),
});
const MessageReaction = z.object({
  emoteId: z.string(),
  count: z.number().int(),
});
const ContentMessage = z.object({
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  plainText: z.string(),
  author: z.string(),
  messageReaction: z.array(MessageReaction),
});
const GroupForumComment = z.object({
  path: z.string(),
  groupForumCommentId: z.string(),
  message: ContentMessage,
});
const GroupForumPost = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  pinned: z.boolean(),
  locked: z.boolean(),
  groupForumPostId: z.string(),
  title: z.string(),
  firstComment: GroupForumComment,
  author: z.string(),
  archiveTime: z.string().datetime({ offset: true }),
  archiver: z.string(),
  commentCount: z.number().int(),
});
const ListGroupForumPostsResponse = z.object({
  groupForumPosts: z.array(GroupForumPost),
  nextPageToken: z.string(),
});
const ListGroupForumCommentsResponse = z.object({
  groupForumComments: z.array(GroupForumComment),
  nextPageToken: z.string(),
});
const GroupJoinRequest = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  user: z.string(),
});
const ListGroupJoinRequestsResponse = z.object({
  groupJoinRequests: z.array(GroupJoinRequest),
  nextPageToken: z.string(),
});
const AcceptGroupJoinRequestRequest = z.object({});
const DeclineGroupJoinRequestRequest = z.object({});
const GroupMembership = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  user: z.string(),
  role: z.string(),
});
const ListGroupMembershipsResponse = z.object({
  groupMemberships: z.array(GroupMembership),
  nextPageToken: z.string(),
});
const GroupRole_RolePermissions = z.object({
  viewWallPosts: z.boolean(),
  createWallPosts: z.boolean(),
  deleteWallPosts: z.boolean(),
  viewGroupShout: z.boolean(),
  createGroupShout: z.boolean(),
  changeRank: z.boolean(),
  acceptRequests: z.boolean(),
  exileMembers: z.boolean(),
  manageRelationships: z.boolean(),
  viewAuditLog: z.boolean(),
  spendGroupFunds: z.boolean(),
  advertiseGroup: z.boolean(),
  createAvatarItems: z.boolean(),
  manageAvatarItems: z.boolean(),
  manageGroupUniverses: z.boolean(),
  viewUniverseAnalytics: z.boolean(),
  createApiKeys: z.boolean(),
  manageApiKeys: z.boolean(),
  banMembers: z.boolean(),
  viewForums: z.boolean(),
  manageCategories: z.boolean(),
  createPosts: z.boolean(),
  lockPosts: z.boolean(),
  pinPosts: z.boolean(),
  removePosts: z.boolean(),
  createComments: z.boolean(),
  removeComments: z.boolean(),
  manageBlockedWords: z.boolean(),
  viewBlockedWords: z.boolean(),
  bypassSlowMode: z.boolean(),
});
const GroupRole = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  id: z.string(),
  displayName: z.string(),
  description: z.string(),
  rank: z.number().int(),
  memberCount: z.number().int(),
  permissions: GroupRole_RolePermissions,
});
const ListGroupRolesResponse = z.object({
  groupRoles: z.array(GroupRole),
  nextPageToken: z.string(),
});
const GroupShout = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  content: z.string(),
  poster: z.string(),
});
const Universe_SocialLink = z.object({ title: z.string(), uri: z.string() });
const Universe = z.object({
  path: z.string().optional(),
  createTime: z.string().datetime({ offset: true }).optional(),
  updateTime: z.string().datetime({ offset: true }).optional(),
  displayName: z.string().optional(),
  description: z.string().optional(),
  user: z.string().optional(),
  group: z.string().optional(),
  visibility: z.enum(['VISIBILITY_UNSPECIFIED', 'PUBLIC', 'PRIVATE']).optional(),
  facebookSocialLink: Universe_SocialLink.optional(),
  twitterSocialLink: Universe_SocialLink.optional(),
  youtubeSocialLink: Universe_SocialLink.optional(),
  twitchSocialLink: Universe_SocialLink.optional(),
  discordSocialLink: Universe_SocialLink.optional(),
  robloxGroupSocialLink: Universe_SocialLink.optional(),
  guildedSocialLink: Universe_SocialLink.optional(),
  voiceChatEnabled: z.boolean().optional(),
  ageRating: z
    .enum(['AGE_RATING_UNSPECIFIED', 'AGE_RATING_ALL', 'AGE_RATING_9_PLUS', 'AGE_RATING_13_PLUS', 'AGE_RATING_17_PLUS'])
    .optional(),
  privateServerPriceRobux: z.number().int().optional(),
  desktopEnabled: z.boolean().optional(),
  mobileEnabled: z.boolean().optional(),
  tabletEnabled: z.boolean().optional(),
  consoleEnabled: z.boolean().optional(),
  vrEnabled: z.boolean().optional(),
  rootPlace: z.string().optional(),
  templateRootPlace: z.string(),
});
const DataStore = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  expireTime: z.string().datetime({ offset: true }),
  state: z.enum(['STATE_UNSPECIFIED', 'ACTIVE', 'DELETED']),
  id: z.string(),
});
const ListDataStoresResponse = z.object({
  dataStores: z.array(DataStore),
  nextPageToken: z.string(),
});
const GoogleProtobufValue = z.unknown();
const DataStoreEntry = z
  .object({
    path: z.string(),
    createTime: z.string().datetime({ offset: true }),
    revisionId: z.string(),
    revisionCreateTime: z.string().datetime({ offset: true }),
    state: z.enum(['STATE_UNSPECIFIED', 'ACTIVE', 'DELETED']),
    etag: z.string(),
    value: GoogleProtobufValue,
    id: z.string(),
    users: z.array(z.string()),
    attributes: z.object({}),
  })
  .passthrough();
const ListDataStoreEntriesResponse = z.object({
  dataStoreEntries: z.array(DataStoreEntry),
  nextPageToken: z.string(),
});
const IncrementDataStoreEntryRequest = z
  .object({
    amount: z.number(),
    users: z.array(z.string()),
    attributes: z.object({}),
  })
  .passthrough();
const ListDataStoreEntryRevisionsResponse = z.object({
  dataStoreEntries: z.array(DataStoreEntry),
  nextPageToken: z.string(),
});
const UndeleteDataStoreRequest = z.object({});
const SnapshotDataStoresRequest = z.object({});
const SnapshotDataStoresResponse = z.object({
  newSnapshotTaken: z.boolean(),
  latestSnapshotTime: z.string().datetime({ offset: true }),
});
const LuauExecutionSessionTaskBinaryInput = z.object({
  path: z.string(),
  size: z.number().int(),
  uploadUri: z.string(),
});
const MemoryStoreQueueItem = z.object({
  path: z.string(),
  data: GoogleProtobufValue,
  priority: z.number(),
  ttl: z.string(),
  expireTime: z.string().datetime({ offset: true }),
  id: z.string(),
});
const DiscardMemoryStoreQueueItemsRequest = z.object({ readId: z.string() });
const ReadMemoryStoreQueueItemsResponse = z.object({
  readId: z.string(),
  items: z.array(MemoryStoreQueueItem),
});
const MemoryStoreSortedMapItem = z.object({
  path: z.string(),
  value: GoogleProtobufValue,
  etag: z.string(),
  ttl: z.string(),
  expireTime: z.string().datetime({ offset: true }),
  id: z.string(),
  stringSortKey: z.string(),
  numericSortKey: z.number(),
});
const ListMemoryStoreSortedMapItemsResponse = z.object({
  memoryStoreSortedMapItems: z.array(MemoryStoreSortedMapItem),
  nextPageToken: z.string(),
});
const FlushMemoryStoreRequest = z.object({});
const GoogleProtobufAny = z.object({ '@type': z.string() });
const Status = z.object({
  code: z.number().int(),
  message: z.string(),
  details: z.array(GoogleProtobufAny),
});
const Operation = z.object({
  path: z.string(),
  metadata: GoogleProtobufAny,
  done: z.boolean(),
  error: Status,
  response: GoogleProtobufAny,
});
const OrderedDataStoreEntry = z.object({
  path: z.string(),
  value: z.number(),
  id: z.string(),
});
const ListOrderedDataStoreEntriesResponse = z.object({
  orderedDataStoreEntries: z.array(OrderedDataStoreEntry),
  nextPageToken: z.string(),
});
const IncrementOrderedDataStoreEntryRequest = z.object({ amount: z.number() });
const Place = z.object({
  path: z.string().optional(),
  createTime: z.string().datetime({ offset: true }).optional(),
  updateTime: z.string().datetime({ offset: true }).optional(),
  displayName: z.string().optional(),
  description: z.string().optional(),
  serverSize: z.number().int().optional(),
  root: z.boolean().optional(),
  universeRuntimeCreation: z.boolean().optional(),
  templatePlace: z.string(),
});
const roblox_engine_Folder = z.object({});
const roblox_engine_LocalScript = z.object({
  Enabled: z.boolean(),
  RunContext: z.enum(['Legacy', 'Server', 'Client', 'Plugin']),
  Source: z.string(),
});
const roblox_engine_ModuleScript = z.object({ Source: z.string() });
const roblox_engine_Script = z.object({
  Enabled: z.boolean(),
  RunContext: z.enum(['Legacy', 'Server', 'Client', 'Plugin']),
  Source: z.string(),
});
const roblox_engine_InstanceDetails = z.object({
  Folder: roblox_engine_Folder,
  LocalScript: roblox_engine_LocalScript,
  ModuleScript: roblox_engine_ModuleScript,
  Script: roblox_engine_Script,
});
const roblox_engine_Instance = z.object({
  Id: z.string(),
  Parent: z.string(),
  Name: z.string(),
  Details: roblox_engine_InstanceDetails,
});
const Instance = z.object({
  path: z.string(),
  hasChildren: z.boolean(),
  engineInstance: roblox_engine_Instance,
});
const LuauExecutionSessionTask_Error = z.object({
  code: z.enum([
    'ERROR_CODE_UNSPECIFIED',
    'SCRIPT_ERROR',
    'DEADLINE_EXCEEDED',
    'OUTPUT_SIZE_LIMIT_EXCEEDED',
    'INTERNAL_ERROR',
  ]),
  message: z.string(),
});
const LuauExecutionSessionTask_Output = z.object({
  results: z.array(GoogleProtobufValue),
});
const LuauExecutionSessionTask = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  user: z.string(),
  state: z.enum(['STATE_UNSPECIFIED', 'QUEUED', 'PROCESSING', 'CANCELLED', 'COMPLETE', 'FAILED']),
  script: z.string(),
  timeout: z.string(),
  error: LuauExecutionSessionTask_Error,
  output: LuauExecutionSessionTask_Output,
  binaryInput: z.string(),
  enableBinaryOutput: z.boolean(),
  binaryOutputUri: z.string(),
});
const UserRestriction_GameJoinRestriction = z.object({
  active: z.boolean(),
  startTime: z.string().datetime({ offset: true }),
  duration: z.string(),
  privateReason: z.string(),
  displayReason: z.string(),
  excludeAltAccounts: z.boolean(),
  inherited: z.boolean(),
});
const UserRestriction = z.object({
  path: z.string(),
  updateTime: z.string().datetime({ offset: true }),
  user: z.string(),
  gameJoinRestriction: UserRestriction_GameJoinRestriction,
});
const ListUserRestrictionsResponse = z.object({
  userRestrictions: z.array(UserRestriction),
  nextPageToken: z.string(),
});
const LuauExecutionSessionTaskLog_LogMessage = z.object({
  message: z.string(),
  createTime: z.string().datetime({ offset: true }),
  messageType: z.enum(['MESSAGE_TYPE_UNSPECIFIED', 'OUTPUT', 'INFO', 'WARNING', 'ERROR']),
});
const LuauExecutionSessionTaskLog = z.object({
  path: z.string(),
  messages: z.array(z.string()),
  structuredMessages: z.array(LuauExecutionSessionTaskLog_LogMessage),
});
const ListLuauExecutionSessionTaskLogsResponse = z.object({
  luauExecutionSessionTaskLogs: z.array(LuauExecutionSessionTaskLog),
  nextPageToken: z.string(),
});
const Subscription_ExpirationDetails = z.object({
  reason: z.enum([
    'EXPIRATION_REASON_UNSPECIFIED',
    'PRODUCT_INACTIVE',
    'PRODUCT_DELETED',
    'SUBSCRIBER_CANCELLED',
    'SUBSCRIBER_REFUNDED',
    'LAPSED',
  ]),
});
const Subscription = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  updateTime: z.string().datetime({ offset: true }),
  active: z.boolean(),
  willRenew: z.boolean(),
  lastBillingTime: z.string().datetime({ offset: true }),
  nextRenewTime: z.string().datetime({ offset: true }),
  expireTime: z.string().datetime({ offset: true }),
  state: z.enum([
    'STATE_UNSPECIFIED',
    'SUBSCRIBED_WILL_RENEW',
    'SUBSCRIBED_WILL_NOT_RENEW',
    'SUBSCRIBED_RENEWAL_PAYMENT_PENDING',
    'EXPIRED',
  ]),
  expirationDetails: Subscription_ExpirationDetails,
  purchasePlatform: z.enum(['PURCHASE_PLATFORM_UNSPECIFIED', 'DESKTOP', 'MOBILE']),
  paymentProvider: z.enum(['PAYMENT_PROVIDER_UNSPECIFIED', 'STRIPE', 'APPLE', 'GOOGLE', 'ROBLOX_CREDIT']),
  user: z.string(),
});
const UserRestrictionLog_Moderator_GameServerScript = z.object({});
const UserRestrictionLog_Moderator = z.object({
  robloxUser: z.string(),
  gameServerScript: UserRestrictionLog_Moderator_GameServerScript,
});
const UserRestrictionLog_RestrictionType_GameJoinRestriction = z.object({});
const UserRestrictionLog_RestrictionType = z.object({
  gameJoinRestriction: UserRestrictionLog_RestrictionType_GameJoinRestriction,
});
const UserRestrictionLog = z.object({
  user: z.string(),
  place: z.string(),
  moderator: UserRestrictionLog_Moderator,
  createTime: z.string().datetime({ offset: true }),
  active: z.boolean(),
  startTime: z.string().datetime({ offset: true }),
  duration: z.string(),
  privateReason: z.string(),
  displayReason: z.string(),
  restrictionType: UserRestrictionLog_RestrictionType,
  excludeAltAccounts: z.boolean(),
});
const ListUserRestrictionLogsResponse = z.object({
  logs: z.array(UserRestrictionLog),
  nextPageToken: z.string(),
});
const GenerateSpeechAssetRequest_GeneratedSpeechStyle = z.object({
  voiceId: z.string(),
  pitch: z.number(),
  speed: z.number(),
});
const GenerateSpeechAssetRequest = z.object({
  text: z.string(),
  speechStyle: GenerateSpeechAssetRequest_GeneratedSpeechStyle.optional(),
});
const PublishUniverseMessageRequest = z.object({
  topic: z.string(),
  message: z.string(),
});
const RestartUniverseServersRequest = z.object({
  placeIds: z.array(z.number()),
  closeAllVersions: z.boolean(),
  bleedOffServers: z.boolean(),
  bleedOffDurationMinutes: z.number().int(),
});
const RestartUniverseServersResponse = z.object({});
const TranslateTextRequest = z.object({
  text: z.string(),
  sourceLanguageCode: z.string().optional(),
  targetLanguageCodes: z.array(z.string()).optional(),
});
const TranslateTextResponse = z.object({
  sourceLanguageCode: z.string(),
  translations: z.string(),
});
const User_SocialNetworkProfiles = z.object({
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
const User = z.object({
  path: z.string(),
  createTime: z.string().datetime({ offset: true }),
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  about: z.string(),
  locale: z.string(),
  premium: z.boolean(),
  idVerified: z.boolean(),
  socialNetworkProfiles: User_SocialNetworkProfiles,
});
const AssetQuota = z.object({
  path: z.string(),
  quotaType: z.enum(['QUOTA_TYPE_UNSPECIFIED', 'RATE_LIMIT_UPLOAD', 'RATE_LIMIT_CREATOR_STORE_DISTRIBUTE']),
  assetType: z.enum([
    'ASSET_TYPE_UNSPECIFIED',
    'IMAGE',
    'TSHIRT',
    'AUDIO',
    'MESH',
    'LUA',
    'HAT',
    'PLACE',
    'MODEL',
    'SHIRT',
    'PANTS',
    'DECAL',
    'HEAD',
    'FACE',
    'GEAR',
    'ANIMATION',
    'TORSO',
    'RIGHT_ARM',
    'LEFT_ARM',
    'LEFT_LEG',
    'RIGHT_LEG',
    'YOUTUBE_VIDEO',
    'APP',
    'CODE',
    'PLUGIN',
    'SOLID_MODEL',
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
    'LOCALIZATION_TABLE_MANIFEST',
    'LOCALIZATION_TABLE_TRANSLATION',
    'EMOTE_ANIMATION',
    'VIDEO',
    'TEXTURE_PACK',
    'TSHIRT_ACCESSORY',
    'SHIRT_ACCESSORY',
    'PANTS_ACCESSORY',
    'JACKET_ACCESSORY',
    'SWEATER_ACCESSORY',
    'SHORTS_ACCESSORY',
    'LEFT_SHOE_ACCESSORY',
    'RIGHT_SHOE_ACCESSORY',
    'DRESS_SKIRT_ACCESSORY',
    'FONT_FAMILY',
    'FONT_FACE',
    'MESH_HIDDEN_SURFACE_REMOVAL',
    'EYEBROW_ACCESSORY',
    'EYELASH_ACCESSORY',
    'MOOD_ANIMATION',
    'DYNAMIC_HEAD',
    'CODE_SNIPPET',
    'ADS_VIDEO',
  ]),
  usage: z.number().int(),
  capacity: z.number().int(),
  period: z.enum(['PERIOD_UNSPECIFIED', 'MONTH', 'DAY']),
  usageResetTime: z.string().datetime({ offset: true }),
});
const ListAssetQuotasResponse = z.object({
  assetQuotas: z.array(AssetQuota),
  nextPageToken: z.string(),
});
const InventoryItem_CollectibleDetails = z.object({
  itemId: z.string(),
  instanceId: z.string(),
  instanceState: z.enum(['COLLECTIBLE_ITEM_INSTANCE_STATE_UNSPECIFIED', 'AVAILABLE', 'HOLD']),
  serialNumber: z.number().int(),
});
const InventoryItem_AssetDetails = z.object({
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
  collectibleDetails: InventoryItem_CollectibleDetails,
});
const InventoryItem_BadgeDetails = z.object({ badgeId: z.string() });
const InventoryItem_GamePassDetails = z.object({ gamePassId: z.string() });
const InventoryItem_PrivateServerDetails = z.object({
  privateServerId: z.string(),
});
const InventoryItem = z.object({
  path: z.string(),
  assetDetails: InventoryItem_AssetDetails,
  badgeDetails: InventoryItem_BadgeDetails,
  gamePassDetails: InventoryItem_GamePassDetails,
  privateServerDetails: InventoryItem_PrivateServerDetails,
  addTime: z.string().datetime({ offset: true }),
});
const ListInventoryItemsResponse = z.object({
  inventoryItems: z.array(InventoryItem),
  nextPageToken: z.string(),
});
const UserNotification_Source = z.object({ universe: z.string() });
const UserNotification_Payload_ParameterValue = z.object({
  stringValue: z.string(),
  int64Value: z.number().int(),
});
const UserNotification_Payload_JoinExperience = z.object({
  launchData: z.string(),
});
const UserNotification_Payload_AnalyticsData = z.object({
  category: z.string(),
});
const UserNotification_Payload = z.object({
  type: z.enum(['TYPE_UNSPECIFIED', 'MOMENT']),
  messageId: z.string(),
  parameters: UserNotification_Payload_ParameterValue,
  joinExperience: UserNotification_Payload_JoinExperience,
  analyticsData: UserNotification_Payload_AnalyticsData,
});
const UserNotification = z.object({
  path: z.string(),
  id: z.string(),
  source: UserNotification_Source,
  payload: UserNotification_Payload,
});

/**
 * `BETA`
 *
 * Add a Creator Store product. Only use this method if your product has never
been distributed on the Creator Store; otherwise, use the `PATCH` method to
update the product.
 *
 * **Scopes:** `creator-store-product:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 */
export const postCloudV2CreatorStoreProducts = endpoint({
  method: 'POST',
  path: '/cloud/v2/creator-store-products',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['creator-store-product:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: CreatorStoreProduct,
  response: CreatorStoreProduct,
  errors: [],
});
/**
 * `BETA`
 *
 * Get a Creator Store product.
 *
 * **Scopes:** `creator-store-product:read`
 * **Engine:** Not available in-engine
 *
 * @param creator_store_product_id The creator-store-product ID.
 */
export const getCloudV2CreatorStoreProductsCreatorStoreProductId = endpoint({
  method: 'GET',
  path: '/cloud/v2/creator-store-products/:creator_store_product_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['creator-store-product:read'],
  requestFormat: 'json',
  serializationMethod: {
    creator_store_product_id: {},
  },
  parameters: {
    creator_store_product_id: z.string(),
  },
  response: CreatorStoreProduct,
  errors: [],
});
/**
 * `BETA`
 *
 * Update a Creator Store product.
 *
 * **Scopes:** `creator-store-product:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param creator_store_product_id The creator-store-product ID.
 * @param updateMask The list of fields to update.
 * @param allowMissing If set to true, and the creator store product is not found, a creator store
product is created. In this situation, `update_mask` is ignored.
 */
export const patchCloudV2CreatorStoreProductsCreatorStoreProductId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/creator-store-products/:creator_store_product_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['creator-store-product:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    creator_store_product_id: {},
    updateMask: {},
    allowMissing: {},
  },
  parameters: {
    creator_store_product_id: z.string(),
    updateMask: z.string().optional(),
    allowMissing: z.boolean().optional(),
  },
  body: CreatorStoreProduct,
  response: CreatorStoreProduct,
  errors: [],
});
/**
 * `BETA`
 *
 * Gets the specified group.
 *
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 */
export const getCloudV2GroupsGroupId = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
  },
  parameters: {
    group_id: z.string(),
  },
  response: Group,
  errors: [],
});
/**
 * `BETA`
 *
 * Lists forum categories in the group.
 *
 * **Scopes:** `group-forum:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param maxPageSize The maximum number of group forum categories to return. The service might
return fewer than this value. If unspecified, at most 10 group forum
categories are returned. The maximum value is 10 and higher values are set
to 10.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

Filtering conforms to Common Expression Language (CEL). Only the boolean
field `archived` and `==` operator are supported. If `archived=false`,
archived categories are not returned. The default value is `false`.
Example: `"filter=archived==true"`
 */
export const getCloudV2GroupsGroupIdForumCategories = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/forum-categories',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group-forum:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    group_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListGroupForumCategoriesResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Lists forum posts in the group's forum category.
 *
 * **Scopes:** `group-forum:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param forum_category_id The forum-category ID.
 * @param maxPageSize The maximum number of group forum posts to return. The service might return
fewer than this value. If unspecified, at most 10 group forum posts are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

Filtering conforms to Common Expression Language (CEL). Only the query
`filter=pinned==true` is supported, where only pinned posts are returned.
`filter=pinned==false`is not supported.
 * @param view The view in which to retrieve the group forum post.

Supports FULL and FULL_WITH_FIRST_COMMENT.

Defaults to FULL.

Possible values:

  | Value | Description |
  | --- | --- |
  | VIEW_UNSPECIFIED | The group forum post view is not specified; the default will be used. |
  | FULL | Includes all fields but does not dereference `first_comment`. Only the `path` field is populated. |
  | FULL_WITH_FIRST_COMMENT | Includes all fields and also fully populates `first_comment`. The default view. |
 */
export const getCloudV2GroupsGroupIdForumCategoriesForumCategoryIdPosts = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/forum-categories/:forum_category_id/posts',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group-forum:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    forum_category_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
    view: {},
  },
  parameters: {
    group_id: z.string(),
    forum_category_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
    view: z.enum(['VIEW_UNSPECIFIED', 'FULL', 'FULL_WITH_FIRST_COMMENT']).optional(),
  },
  response: ListGroupForumPostsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Lists forum comments on a group's forum post.
 *
 * **Scopes:** `group-forum:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param forum_category_id The forum-category ID.
 * @param post_id The post ID.
 * @param maxPageSize The maximum number of group forum comments to return. The service might
return fewer than this value. If unspecified, at most 10 group forum
comments are returned. The maximum value is 100 and higher values are set
to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

Filtering conforms to Common Expression Language (CEL). Only the string
field `repliesToCommentId` and the `==` operator are supported.
If `repliesToCommentId` is specified, only comments that respond to the
comment are returned. The default value is `''`. If
`repliesToCommentId=''`, only comments responding directly to the post are
returned. Example:
`"filter=repliesToCommentId==01234567-89ab-cdef-0123-456789abcdef"`
 */
export const getCloudV2GroupsGroupIdForumCategoriesForumCategoryIdPostsPostIdComments = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/forum-categories/:forum_category_id/posts/:post_id/comments',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group-forum:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    forum_category_id: {},
    post_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    group_id: z.string(),
    forum_category_id: z.string(),
    post_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListGroupForumCommentsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * List join requests under a group.
 *
 * **Scopes:** `group:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param maxPageSize The maximum number of group join requests to return. The service might
return fewer than this value. If unspecified, at most 10 group join
requests are returned. The maximum value is 20 and higher values are set
to 20.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

Filtering conforms to Common Expression Language (CEL). Only the `user`
field and `==` operator are supported.


Example: `"user == 'users/156'"`
 */
export const getCloudV2GroupsGroupIdJoinRequests = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/join-requests',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    group_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListGroupJoinRequestsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Accepts a join request.
 *
 * **Scopes:** `group:write`
 * **Engine:** Usable with HttpService
 *
 * @param body
 * @param group_id The group ID.
 * @param join_request_id The join-request ID.
 */
export const postCloudV2GroupsGroupIdJoinRequestsJoinRequestIdAccept = endpoint({
  method: 'POST',
  path: '/cloud/v2/groups/:group_id/join-requests/:join_request_id:accept',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    group_id: {},
    join_request_id: {},
  },
  parameters: {
    group_id: z.string(),
    join_request_id: z.string(),
  },
  body: z.object({}),
  response: z.void(),
  errors: [],
});
/**
 * `BETA`
 *
 * Declines a join request.
 *
 * **Scopes:** `group:write`
 * **Engine:** Usable with HttpService
 *
 * @param body
 * @param group_id The group ID.
 * @param join_request_id The join-request ID.
 */
export const postCloudV2GroupsGroupIdJoinRequestsJoinRequestIdDecline = endpoint({
  method: 'POST',
  path: '/cloud/v2/groups/:group_id/join-requests/:join_request_id:decline',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    group_id: {},
    join_request_id: {},
  },
  parameters: {
    group_id: z.string(),
    join_request_id: z.string(),
  },
  body: z.object({}),
  response: z.void(),
  errors: [],
});
/**
 * `BETA`
 *
 * List group members in a group.
 *
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param maxPageSize The maximum number of group memberships to return. The service might return
fewer than this value. If unspecified, at most 10 group memberships are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

See the
[filtering](/cloud/reference/patterns#list-group-memberships)
documentation for more information.
 */
export const getCloudV2GroupsGroupIdMemberships = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/memberships',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    group_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListGroupMembershipsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Updates the group membership for a particular group member. This action
requires the requester to be able to manage lower ranked members. Guest or
Owner ranks cannot be assigned, and a requester cannot change their own
rank.
 *
 * **Scopes:** `group:write`
 * **Engine:** Usable with HttpService
 *
 * @param body 
 * @param group_id The group ID.
 * @param membership_id The membership ID.
 */
export const patchCloudV2GroupsGroupIdMembershipsMembershipId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/groups/:group_id/memberships/:membership_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    group_id: {},
    membership_id: {},
  },
  parameters: {
    group_id: z.string(),
    membership_id: z.string(),
  },
  body: GroupMembership,
  response: GroupMembership,
  errors: [],
});
/**
 * `BETA`
 *
 * List roles in a group.

The permissions field for roles is viewable based on the requester's access
and scopes.

Permissions for the guest role are always visible - a scope is not needed.

If the requester is a member of the group and has the `group:read` scope,
permissions in their role are visible.

If the requester is the owner of the group and has the `group:read` scope,
permissions in all roles are visible.
 *
 * **Scopes:** `group:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param maxPageSize The maximum number of group roles to return. The service might return fewer
than this value. If unspecified, at most 10 group roles are returned. The
maximum value is 20 and higher values are set to 20.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 */
export const getCloudV2GroupsGroupIdRoles = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/roles',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    maxPageSize: {},
    pageToken: {},
  },
  parameters: {
    group_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: ListGroupRolesResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Get the group role
 *
 * **Scopes:** `group:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 * @param role_id The role ID.
 */
export const getCloudV2GroupsGroupIdRolesRoleId = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/roles/:role_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
    role_id: {},
  },
  parameters: {
    group_id: z.string(),
    role_id: z.string(),
  },
  response: GroupRole,
  errors: [],
});
/**
 * `BETA`
 *
 * Gets the group shout.

If a guest can view the group shout, this is always retrievable.

If a guest cannot, a member who has the permissions to view the group
shout, along with the `group:read` scope, will be able to read the group
shout.
 *
 * **Scopes:** `group:read`
 * **Engine:** Usable with HttpService
 *
 * @param group_id The group ID.
 */
export const getCloudV2GroupsGroupIdShout = endpoint({
  method: 'GET',
  path: '/cloud/v2/groups/:group_id/shout',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['group:read'],
  requestFormat: 'json',
  serializationMethod: {
    group_id: {},
  },
  parameters: {
    group_id: z.string(),
  },
  response: GroupShout,
  errors: [],
});
/**
 * `STABLE`
 *
 * Gets the specified universe.
 *
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 */
export const getCloudV2UniversesUniverseId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  response: Universe,
  errors: [],
});
/**
 * `STABLE`
 *
 * Updates the specified universe.

This method is guaranteed to return all updated fields.
This method may additionally return the full resource.
 *
 * **Scopes:** `universe:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param updateMask The list of fields to update.
 */
export const patchCloudV2UniversesUniverseId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    updateMask: {},
  },
  parameters: {
    universe_id: z.string(),
    updateMask: z.string().optional(),
  },
  body: Universe,
  response: Universe,
  errors: [],
});
/**
 * `BETA`
 *
 * Generates an English speech audio asset from the specified text.

This endpoint requires the `asset:read` and `asset:write` scopes in
addition to the `universe:write` scope.

The response returns an `Operation` object that must be prefixed with
`/assets/v1`. For example, the URL to discover the result of the operation
could be
`https://apis.roblox.com/assets/v1/operations/8b42ef30-9c17-4526-b8cf-2ff0136ca94d`.
 *
 * **Scopes:** `universe:write`, `asset:read`, `asset:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdGenerateSpeechAsset = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id:generateSpeechAsset',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe:write', 'asset:read', 'asset:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: GenerateSpeechAssetRequest,
  response: Operation,
  errors: [],
});
/**
 * `STABLE`
 *
 * Publishes a message to the universe's live servers.

Servers can consume messages via
[MessagingService](https://create.roblox.com/docs/reference/engine/classes/MessagingService).
 *
 * **Scopes:** `universe-messaging-service:publish`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdPublishMessage = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id:publishMessage',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-messaging-service:publish'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: PublishUniverseMessageRequest,
  response: z.void(),
  errors: [],
});
/**
 * `STABLE`
 *
 * Restarts active servers for a specific universe. Defaults to only
restarting servers running older versions, but can be configured to restart
all servers regardless of version. Used for releasing experience updates.
 *
 * **Scopes:** `universe:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdRestartServers = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id:restartServers',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: RestartUniverseServersRequest,
  response: z.object({}),
  errors: [],
});
/**
 * `BETA`
 *
 * Translates the provided text from one language to another.
 *
 * **Scopes:** `universe:write`
 * **Engine:** Not available in-engine
 *
 * @param body
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdTranslateText = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id:translateText',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: TranslateTextRequest,
  response: TranslateTextResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Returns a list of data stores.

Data stores scheduled for permanent deletion are omitted from the results
by default (or when `showDeleted` is set to `false`). When this is the
case, the operation will check up to 512 data stores. If all checked data
stores are deleted, it will return an empty list with a page token to
continue iteration.
 *
 * **Scopes:** `universe-datastores.control:list`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param maxPageSize The maximum number of data stores to return. The service might return fewer
than this value. If unspecified, at most 10 data stores are returned. The
maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

The `filter` field supports a very small subset of CEL:

* Only the `id` field is supported.
* Only the `startsWith` function is available; no other operators nor
  built-ins are supported.

Example filter: `id.startsWith("foo")`
 * @param showDeleted If true, resources marked for pending deletion will be included in the
results.
 */
export const getCloudV2UniversesUniverseIdDataStores = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.control:list'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
    showDeleted: {},
  },
  parameters: {
    universe_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
    showDeleted: z.boolean().optional(),
  },
  response: ListDataStoresResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Takes a new snapshot of the data stores in an experience.

After a snapshot, the next write to every key in the experience will
create a versioned backup of the previous data, regardless of the time of
the last write.

In effect, all data current at the time of the snapshot is guaranteed to be
available as a versioned backup for at least 30 days.

Snapshots can be taken once per UTC day, per experience. If the latest
snapshot was taken within the same UTC day, this operation is a no-op and
the time of the latest snapshot will be returned.

For more information on using snapshots, see the [Data
stores](https://create.roblox.com/docs/cloud-services/data-stores#snapshots)
Engine guide.
 *
 * **Scopes:** `universe-datastores.control:snapshot`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdDataStoresSnapshot = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/data-stores:snapshot',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.control:snapshot'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: z.object({}),
  response: SnapshotDataStoresResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Schedules the specified data store for permanent deletion.

This operation assigns the data store an expiry time 30 days in the future,
at which point permanent deletion begins. To cancel, use the
`UndeleteDataStore` operation before the data store's expiry time.

Permanent deletion consists of deleting all of the entries in the data
store and then the data store resource itself. The data store is no longer
returned by the `ListDataStores` Open Cloud endpoint or
`ListDataStoresAsync` Luau API, and you can reuse the data store's name.

The duration of the permanent deletion process depends on the number of
entries in the data store. However, you can expect a data store with 1
million or fewer entries to be permanently deleted within 3 days.

Data stores scheduled for permanent deletion are returned by the
`ListDataStores` Open Cloud endpoint when the query parameter `showDeleted`
is set to `true`. In the return value, each data store will have a
`DELETED` state and an `expireTime` field.

Data stores scheduled for permanent deletion are immediately made
inaccessible, meaning attempts to read or write to their entries will fail.

Note: Due to caching in the backend service, attempts to read from or write
to entries in these data stores can continue to succeed for a limited time
after the deletion:
* `GetDataStoreEntry`: can succeed for up to 24 hours.
* All other endpoints: can succeed for several minutes.

If the data store is already in a `DELETED` state, this operation is a
no-op, and the data store is returned as-is.
 *
 * **Scopes:** `universe-datastores.control:delete`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 */
export const deleteCloudV2UniversesUniverseIdDataStoresDataStoreId = endpoint({
  method: 'DELETE',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.control:delete'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
  },
  response: DataStore,
  errors: [],
});
/**
 * `BETA`
 *
 * Restore the data store
 *
 * **Scopes:** `universe-datastores.control:delete`
 * **Engine:** Not available in-engine
 *
 * @param body
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 */
export const postCloudV2UniversesUniverseIdDataStoresDataStoreIdUndelete = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id:undelete',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.control:delete'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
  },
  body: z.object({}),
  response: DataStore,
  errors: [],
});
/**
 * `STABLE`
 *
 * Returns a list of entries from a data store.

Only the `path` and `id` fields are populated; use `GetDataStoreEntry`
to retrieve other fields.

Specify the wildcard scope (`-`) to list entries from all scopes.
 *
 * **Scopes:** `universe-datastores.objects:list`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param maxPageSize The maximum number of data store entries to return. The service might
return fewer than this value. If unspecified, at most 10 data store entries
are returned. The maximum value is 256 and higher values are set to 256.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

The `filter` field supports a very small subset of CEL:

* Only the `id` field is supported.
* Only the `startsWith` function is available; no other operators nor
  built-ins are supported.

Example filter: `id.startsWith("foo")`
 * @param showDeleted If true, resources marked for pending deletion will be included in the
results.
 */
export const getCloudV2UniversesUniverseIdDataStoresDataStoreIdEntries = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:list'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
    showDeleted: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
    showDeleted: z.boolean().optional(),
  },
  response: ListDataStoreEntriesResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Creates an entry with the provided ID and value.

Returns a 400 Bad Request if the entry exists.
 *
 * **Scopes:** `universe-datastores.objects:create`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param id The ID to use for the data store entry, which will become the final
component of the data store entry's resource path.

This value should be a 1-50 character string. We strongly recommend using
only lowercase letters, numeric digits, and hyphens.
 */
export const postCloudV2UniversesUniverseIdDataStoresDataStoreIdEntries = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:create'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
    id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    id: z.string().optional(),
  },
  body: DataStoreEntry,
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Gets the specified entry.

To get the entry at a specific revision, add `@<revisionId>` to the end of
the path.

For example, to get `my-entry` at the revision ID
`08DC3D3F43F9FCC1.0000000001.08DC3D3F43F9FCC1.01`, use the path
`/cloud/v2/universes/1234/data-stores/5678/entries/my-entry@08DC3D3F43F9FCC1.0000000001.08DC3D3F43F9FCC1.01`.

If your entry ID contains one or more `@` characters, and you want to get
the latest version rather than at any specific revision, append the special
revision ID `@latest` to the end of the path. Otherwise, the segment of the
entry ID after the last `@` will be interpreted as a revision ID.

For example, to get the latest revision of `my-entry`, use the path
`/cloud/v2/universes/1234/data-stores/5678/entries/my@entry@latest`.

To get the entry that was current at a specific time, add
`@latest:<timestamp>` to the end of the path, where `<timestamp>` is
RFC-3339 formatted. The given timestamp must be after
the Unix epoch (1/1/1970) and not more than ten minutes in the future.

For example, to get the revision of `my-entry` that was current on
12/2/2024 at 06:00 UTC, use the path
`/cloud/v2/universes/1234/data-stores/5678/entries/my-entry@latest:2024-12-02T06:00:00Z`.
 *
 * **Scopes:** `universe-datastores.objects:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param entry_id The entry ID.
 */
export const getCloudV2UniversesUniverseIdDataStoresDataStoreIdEntriesEntryId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    entry_id: z.string(),
  },
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Marks the specified entry for deletion.

Entries are not be deleted immediately; instead, the `state` field will
be set to `DELETED`. Permanent deletion occurs after 30 days.

On success, returns 200 OK. If the entry doesn't exist, returns
404 Not Found.
 *
 * **Scopes:** `universe-datastores.objects:delete`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param entry_id The entry ID.
 */
export const deleteCloudV2UniversesUniverseIdDataStoresDataStoreIdEntriesEntryId = endpoint({
  method: 'DELETE',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:delete'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    entry_id: z.string(),
  },
  response: z.void(),
  errors: [],
});
/**
 * `STABLE`
 *
 * Updates the value, attributes, and users of an entry.

Updating specific revisions of the entry is **unsupported**. If you specify
a revision ID in the path and `allow_missing` is `true`, the update request
will instead create a new entry with the `@<revisionId>` suffix as part of
the key.

Partial update is **unsupported**. If attributes or users are not
provided when updating the value, they will be cleared. Value must always
be provided when updating an entry.
 *
 * **Scopes:** `universe-datastores.objects:update`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param entry_id The entry ID.
 * @param allowMissing If set to true, and the data store entry is not found, a data store entry
is created.
 */
export const patchCloudV2UniversesUniverseIdDataStoresDataStoreIdEntriesEntryId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:update'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
    entry_id: {},
    allowMissing: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    entry_id: z.string(),
    allowMissing: z.boolean().optional(),
  },
  body: DataStoreEntry,
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Increments the value of the specified entry. Both the existing value and
the increment amount must be integers.

If the entry doesn't exist, creates an entry with the specified value.

Incrementing specific revisions of the entry is **unsupported**. If you
specify a revision ID in the path, the increment request will create a new
entry with the `@<revisionId>` suffix as part of the key.

Known issue: the value may be incremented past the valid range of  values.
When this happens, the returned value will be clamped to the valid range,
but the backend may persist the original value. This behavior is maintained
for backwards compatibility reasons, but may change in a future version of
this API.
 *
 * **Scopes:** `universe-datastores.objects:create`, `universe-datastores.objects:update`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param entry_id The entry ID.
 */
export const postCloudV2UniversesUniverseIdDataStoresDataStoreIdEntriesEntryIdIncrement = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries/:entry_id:increment',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:create', 'universe-datastores.objects:update'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    entry_id: z.string(),
  },
  body: IncrementDataStoreEntryRequest,
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * List revisions of the data store entry.

This method returns partial data store entries.

In particular, only the `path`, `id`, `createTime`, `revisionCreateTime`,
`revisionId`, `etag`, and `state` fields are populated. Both the `path` and
`id` fields will have an `@<version>` suffix.

In order to get the full entry at a revision, you can use the provided
`path` field with the `GetDataStoreEntry` method, i.e. `GET
/cloud/v2/universes/1234/data-stores/5678/entries/my-entry@<version>`.
 *
 * **Scopes:** `universe-datastores.versions:list`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param entry_id The entry ID.
 * @param maxPageSize The maximum number of revisions to return per page.

The service might return fewer than the maximum number of revisions.
If unspecified, at most 10 revisions are returned.
The maximum value is 100 values and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call
must match the call that provided the page token.
 * @param filter Supports the following subset of CEL:

* Only the `&&`, `<=`, and `>=` operators are supported.
* Only the `revision_create_time` field is supported.

For example:

  `"revision_create_time >= 2000-01-01T00:00:00Z && revision_create_time <=
  2001-01-01T00:00:00Z"`
 */
export const getCloudV2UniversesUniverseIdDataStoresDataStoreIdEntriesEntryIdListRevisions = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/entries/:entry_id:listRevisions',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.versions:list'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    entry_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    entry_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListDataStoreEntryRevisionsResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Returns a list of entries from a data store.

Only the `path` and `id` fields are populated; use `GetDataStoreEntry`
to retrieve other fields.

Specify the wildcard scope (`-`) to list entries from all scopes.
 *
 * **Scopes:** `universe-datastores.objects:list`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param maxPageSize The maximum number of data store entries to return. The service might
return fewer than this value. If unspecified, at most 10 data store entries
are returned. The maximum value is 256 and higher values are set to 256.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

The `filter` field supports a very small subset of CEL:

* Only the `id` field is supported.
* Only the `startsWith` function is available; no other operators nor
  built-ins are supported.

Example filter: `id.startsWith("foo")`
 * @param showDeleted If true, resources marked for pending deletion will be included in the
results.
 */
export const getCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntries = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:list'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
    showDeleted: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
    showDeleted: z.boolean().optional(),
  },
  response: ListDataStoreEntriesResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Creates an entry with the provided ID and value.

Returns a 400 Bad Request if the entry exists.
 *
 * **Scopes:** `universe-datastores.objects:create`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param id The ID to use for the data store entry, which will become the final
component of the data store entry's resource path.

This value should be a 1-50 character string. We strongly recommend using
only lowercase letters, numeric digits, and hyphens.
 */
export const postCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntries = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:create'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    id: z.string().optional(),
  },
  body: DataStoreEntry,
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Gets the specified entry.

To get the entry at a specific revision, add `@<revisionId>` to the end of
the path.

For example, to get `my-entry` at the revision ID
`08DC3D3F43F9FCC1.0000000001.08DC3D3F43F9FCC1.01`, use the path
`/cloud/v2/universes/1234/data-stores/5678/entries/my-entry@08DC3D3F43F9FCC1.0000000001.08DC3D3F43F9FCC1.01`.

If your entry ID contains one or more `@` characters, and you want to get
the latest version rather than at any specific revision, append the special
revision ID `@latest` to the end of the path. Otherwise, the segment of the
entry ID after the last `@` will be interpreted as a revision ID.

For example, to get the latest revision of `my-entry`, use the path
`/cloud/v2/universes/1234/data-stores/5678/entries/my@entry@latest`.

To get the entry that was current at a specific time, add
`@latest:<timestamp>` to the end of the path, where `<timestamp>` is
RFC-3339 formatted. The given timestamp must be after
the Unix epoch (1/1/1970) and not more than ten minutes in the future.

For example, to get the revision of `my-entry` that was current on
12/2/2024 at 06:00 UTC, use the path
`/cloud/v2/universes/1234/data-stores/5678/entries/my-entry@latest:2024-12-02T06:00:00Z`.
 *
 * **Scopes:** `universe-datastores.objects:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 */
export const getCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntriesEntryId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
  },
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Marks the specified entry for deletion.

Entries are not be deleted immediately; instead, the `state` field will
be set to `DELETED`. Permanent deletion occurs after 30 days.

On success, returns 200 OK. If the entry doesn't exist, returns
404 Not Found.
 *
 * **Scopes:** `universe-datastores.objects:delete`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 */
export const deleteCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntriesEntryId = endpoint({
  method: 'DELETE',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:delete'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
  },
  response: z.void(),
  errors: [],
});
/**
 * `STABLE`
 *
 * Updates the value, attributes, and users of an entry.

Updating specific revisions of the entry is **unsupported**. If you specify
a revision ID in the path and `allow_missing` is `true`, the update request
will instead create a new entry with the `@<revisionId>` suffix as part of
the key.

Partial update is **unsupported**. If attributes or users are not
provided when updating the value, they will be cleared. Value must always
be provided when updating an entry.
 *
 * **Scopes:** `universe-datastores.objects:update`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 * @param allowMissing If set to true, and the data store entry is not found, a data store entry
is created.
 */
export const patchCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntriesEntryId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:update'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    entry_id: {},
    allowMissing: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
    allowMissing: z.boolean().optional(),
  },
  body: DataStoreEntry,
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Increments the value of the specified entry. Both the existing value and
the increment amount must be integers.

If the entry doesn't exist, creates an entry with the specified value.

Incrementing specific revisions of the entry is **unsupported**. If you
specify a revision ID in the path, the increment request will create a new
entry with the `@<revisionId>` suffix as part of the key.

Known issue: the value may be incremented past the valid range of  values.
When this happens, the returned value will be clamped to the valid range,
but the backend may persist the original value. This behavior is maintained
for backwards compatibility reasons, but may change in a future version of
this API.
 *
 * **Scopes:** `universe-datastores.objects:create`, `universe-datastores.objects:update`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 */
export const postCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntriesEntryIdIncrement = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries/:entry_id:increment',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.objects:create', 'universe-datastores.objects:update'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
  },
  body: IncrementDataStoreEntryRequest,
  response: DataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * List revisions of the data store entry.

This method returns partial data store entries.

In particular, only the `path`, `id`, `createTime`, `revisionCreateTime`,
`revisionId`, `etag`, and `state` fields are populated. Both the `path` and
`id` fields will have an `@<version>` suffix.

In order to get the full entry at a revision, you can use the provided
`path` field with the `GetDataStoreEntry` method, i.e. `GET
/cloud/v2/universes/1234/data-stores/5678/entries/my-entry@<version>`.
 *
 * **Scopes:** `universe-datastores.versions:list`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param data_store_id The data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 * @param maxPageSize The maximum number of revisions to return per page.

The service might return fewer than the maximum number of revisions.
If unspecified, at most 10 revisions are returned.
The maximum value is 100 values and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call
must match the call that provided the page token.
 * @param filter Supports the following subset of CEL:

* Only the `&&`, `<=`, and `>=` operators are supported.
* Only the `revision_create_time` field is supported.

For example:

  `"revision_create_time >= 2000-01-01T00:00:00Z && revision_create_time <=
  2001-01-01T00:00:00Z"`
 */
export const getCloudV2UniversesUniverseIdDataStoresDataStoreIdScopesScopeIdEntriesEntryIdListRevisions = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/data-stores/:data_store_id/scopes/:scope_id/entries/:entry_id:listRevisions',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe-datastores.versions:list'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    data_store_id: {},
    scope_id: {},
    entry_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    universe_id: z.string(),
    data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListDataStoreEntryRevisionsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Create a new `LuauExecutionSessionTaskBinaryInput`.
 *
 * **Scopes:** `universe.place.luau-execution-session:write`
 * **Engine:** Not available in-engine
 *
 * @param body
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdLuauExecutionSessionTaskBinaryInputs = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/luau-execution-session-task-binary-inputs',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place.luau-execution-session:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: LuauExecutionSessionTaskBinaryInput,
  response: LuauExecutionSessionTaskBinaryInput,
  errors: [],
});
/**
 * `STABLE`
 *
 * Asynchronously flush all data structures in the universe.
 *
 * **Scopes:** `memory-store:flush`
 * **Engine:** Not available in-engine
 *
 * @param body
 * @param universe_id The universe ID.
 */
export const postCloudV2UniversesUniverseIdMemoryStoreFlush = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/memory-store:flush',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store:flush'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
  },
  parameters: {
    universe_id: z.string(),
  },
  body: z.object({}),
  response: Operation,
  errors: [],
});
/**
 * `STABLE`
 *
 * Creates a new queue item.

If `ttl` is set, the item will automatically be removed from the queue
after the time interval specified.

If a numerical `priority` is set, the item will be inserted into the queue
based on the priority value. The higher the value, the closer to the front
of the queue the item will be. If priority values are the same then the
item will be inserted after existing values with the same priority.
 *
 * **Scopes:** `memory-store.queue:add`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param queue_id The queue ID.
 */
export const postCloudV2UniversesUniverseIdMemoryStoreQueuesQueueIdItems = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/memory-store/queues/:queue_id/items',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.queue:add'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    queue_id: {},
  },
  parameters: {
    universe_id: z.string(),
    queue_id: z.string(),
  },
  body: MemoryStoreQueueItem,
  response: MemoryStoreQueueItem,
  errors: [],
});
/**
 * `STABLE`
 *
 * Discards read items from the front of the queue.

Takes a `readId` from a previous `Read` operation.
 *
 * **Scopes:** `memory-store.queue:discard`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param queue_id The queue ID.
 */
export const postCloudV2UniversesUniverseIdMemoryStoreQueuesQueueIdItemsDiscard = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/memory-store/queues/:queue_id/items:discard',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.queue:discard'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    queue_id: {},
  },
  parameters: {
    universe_id: z.string(),
    queue_id: z.string(),
  },
  body: z.object({ readId: z.string() }),
  response: z.void(),
  errors: [],
});
/**
 * `STABLE`
 *
 * Returns the specified number of items at the front of the queue.


 *
 * **Scopes:** `memory-store.queue:dequeue`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param queue_id The queue ID.
 * @param count The number of items to read from the queue
If unspecified, 1 item will be returned.
The maximum value is 200; values above 200 will be coerced to 200.
 * @param allOrNothing If `all_or_nothing` is true and the requested number of objects is not
available, will return a 404 Error.

Otherwise, will return the path and read_id of the read operation and a
list of the MemoryStoreQueue items.
 * @param invisibilityWindow Invisibility window for items read, in seconds.

Items read are invisible in subsequent reads during the invisibility
window duration.

It must be written in seconds greater than 0 and end with `s`.

Defaults to `30s`.
 */
export const getCloudV2UniversesUniverseIdMemoryStoreQueuesQueueIdItemsRead = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/memory-store/queues/:queue_id/items:read',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.queue:dequeue'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    queue_id: {},
    count: {},
    allOrNothing: {},
    invisibilityWindow: {},
  },
  parameters: {
    universe_id: z.string(),
    queue_id: z.string(),
    count: z.number().int().optional(),
    allOrNothing: z.boolean().optional(),
    invisibilityWindow: z.string().optional(),
  },
  response: ReadMemoryStoreQueueItemsResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Gets and returns items in the map with a given order and filter.
 *
 * **Scopes:** `memory-store.sorted-map:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param sorted_map_id The sorted-map ID.
 * @param maxPageSize The maximum number of memory store sorted map items to return. The service
might return fewer than this value. If unspecified, at most 1 memory store
sorted map items are returned. The maximum value is 100 and higher values
are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param orderBy If specified, results are ordered according to the specified fields.

Values must be a comma-separated list of fields, with an optional,
per-field " desc" suffix to sort by descending rather than ascending
values. You can access subfields with a `.` operator.

Results may be ordered by the following fields: id.

Example: "id desc"

 * @param filter This field may be set in order to filter the resources returned.

Filtering conforms to Common Expression Language (CEL). Only the `id`
and `sortKey` fields are supported. In terms of operators, only `<`, `>`
and `&&` are allowed'

Example: `id > "key-001" && id < "key-100"`
 */
export const getCloudV2UniversesUniverseIdMemoryStoreSortedMapsSortedMapIdItems = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/memory-store/sorted-maps/:sorted_map_id/items',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.sorted-map:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    sorted_map_id: {},
    maxPageSize: {},
    pageToken: {},
    orderBy: {},
    filter: {},
  },
  parameters: {
    universe_id: z.string(),
    sorted_map_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    orderBy: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListMemoryStoreSortedMapItemsResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Creates the specified map item if it doesn't exist.
 *
 * **Scopes:** `memory-store.sorted-map:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param sorted_map_id The sorted-map ID.
 * @param id The ID to use for the memory store sorted map item, which will become the
final component of the memory store sorted map item's resource path.

This value should be a 1-127 character string that supports alphanumeric
and special characters. This id is case sensitive. The id must be url
encoded if it contains any url breaking special characters.
 */
export const postCloudV2UniversesUniverseIdMemoryStoreSortedMapsSortedMapIdItems = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/memory-store/sorted-maps/:sorted_map_id/items',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.sorted-map:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    sorted_map_id: {},
    id: {},
  },
  parameters: {
    universe_id: z.string(),
    sorted_map_id: z.string(),
    id: z.string().optional(),
  },
  body: MemoryStoreSortedMapItem,
  response: MemoryStoreSortedMapItem,
  errors: [],
});
/**
 * `STABLE`
 *
 * Gets and returns the value of the given key in the map.
 *
 * **Scopes:** `memory-store.sorted-map:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param sorted_map_id The sorted-map ID.
 * @param item_id The item ID.
 */
export const getCloudV2UniversesUniverseIdMemoryStoreSortedMapsSortedMapIdItemsItemId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/memory-store/sorted-maps/:sorted_map_id/items/:item_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.sorted-map:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    sorted_map_id: {},
    item_id: {},
  },
  parameters: {
    universe_id: z.string(),
    sorted_map_id: z.string(),
    item_id: z.string(),
  },
  response: MemoryStoreSortedMapItem,
  errors: [],
});
/**
 * `STABLE`
 *
 * Deletes the specified item from the map.
 *
 * **Scopes:** `memory-store.sorted-map:write`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param sorted_map_id The sorted-map ID.
 * @param item_id The item ID.
 */
export const deleteCloudV2UniversesUniverseIdMemoryStoreSortedMapsSortedMapIdItemsItemId = endpoint({
  method: 'DELETE',
  path: '/cloud/v2/universes/:universe_id/memory-store/sorted-maps/:sorted_map_id/items/:item_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.sorted-map:write'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    sorted_map_id: {},
    item_id: {},
  },
  parameters: {
    universe_id: z.string(),
    sorted_map_id: z.string(),
    item_id: z.string(),
  },
  response: z.void(),
  errors: [],
});
/**
 * `STABLE`
 *
 * Updates the specified map item.
 *
 * **Scopes:** `memory-store.sorted-map:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param sorted_map_id The sorted-map ID.
 * @param item_id The item ID.
 * @param allowMissing If set to true, and the memory store sorted map item is not found, a memory
store sorted map item is created.
 */
export const patchCloudV2UniversesUniverseIdMemoryStoreSortedMapsSortedMapIdItemsItemId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/memory-store/sorted-maps/:sorted_map_id/items/:item_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['memory-store.sorted-map:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    sorted_map_id: {},
    item_id: {},
    allowMissing: {},
  },
  parameters: {
    universe_id: z.string(),
    sorted_map_id: z.string(),
    item_id: z.string(),
    allowMissing: z.boolean().optional(),
  },
  body: MemoryStoreSortedMapItem,
  response: MemoryStoreSortedMapItem,
  errors: [],
});
/**
 * `STABLE`
 *
 * Returns a list of entries from an ordered data store.
 *
 * **Scopes:** `universe.ordered-data-store.scope.entry:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param ordered_data_store_id The ordered-data-store ID.
 * @param scope_id The scope ID.
 * @param maxPageSize The maximum number of ordered data store entries to return. The service
might return fewer than this value. If unspecified, at most 10 ordered data
store entries are returned. The maximum value is 100 and higher values are
set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param orderBy If specified, results are ordered according to the specified fields.

Values must be a comma-separated list of fields, with an optional,
per-field " desc" suffix to sort by descending rather than ascending
values. You can access subfields with a `.` operator.

Results may be ordered by the following fields: value.

Example: "value desc"

 * @param filter This field may be set in order to filter the resources returned.

We support two comparison operators for this operation: `<=` and `>=`.These
comparison operators act as a minValue and maxValue for the values
returned. If filtering is needed for a value between a minValue and
maxValue the user can use the logical operator `&&`. All tokens in the
filter expression must be separated by a single space.

Example filters: `entry <= 10`; `entry >= 10 && entry <= 30`
 */
export const getCloudV2UniversesUniverseIdOrderedDataStoresOrderedDataStoreIdScopesScopeIdEntries = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/ordered-data-stores/:ordered_data_store_id/scopes/:scope_id/entries',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.ordered-data-store.scope.entry:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    ordered_data_store_id: {},
    scope_id: {},
    maxPageSize: {},
    pageToken: {},
    orderBy: {},
    filter: {},
  },
  parameters: {
    universe_id: z.string(),
    ordered_data_store_id: z.string(),
    scope_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    orderBy: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListOrderedDataStoreEntriesResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Creates an entry with the provided ID and value.

Returns a 400 Bad Request if the entry exists.
 *
 * **Scopes:** `universe.ordered-data-store.scope.entry:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param ordered_data_store_id The ordered-data-store ID.
 * @param scope_id The scope ID.
 * @param id The ID to use for the ordered data store entry, which will become the final
component of the ordered data store entry's resource path.

This value should be A 1-63 character string. We strongly recommend using
only lowercase letters, numeric digits, and hyphens.
 */
export const postCloudV2UniversesUniverseIdOrderedDataStoresOrderedDataStoreIdScopesScopeIdEntries = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/ordered-data-stores/:ordered_data_store_id/scopes/:scope_id/entries',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.ordered-data-store.scope.entry:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    ordered_data_store_id: {},
    scope_id: {},
    id: {},
  },
  parameters: {
    universe_id: z.string(),
    ordered_data_store_id: z.string(),
    scope_id: z.string(),
    id: z.string().optional(),
  },
  body: OrderedDataStoreEntry,
  response: OrderedDataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Gets the specified entry.
 *
 * **Scopes:** `universe.ordered-data-store.scope.entry:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param ordered_data_store_id The ordered-data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 */
export const getCloudV2UniversesUniverseIdOrderedDataStoresOrderedDataStoreIdScopesScopeIdEntriesEntryId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/ordered-data-stores/:ordered_data_store_id/scopes/:scope_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.ordered-data-store.scope.entry:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    ordered_data_store_id: {},
    scope_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    ordered_data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
  },
  response: OrderedDataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Deletes the specified entry.

On success, returns 200 OK. If the entry doesn't exist, returns
404 Not Found.
 *
 * **Scopes:** `universe.ordered-data-store.scope.entry:write`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param ordered_data_store_id The ordered-data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 */
export const deleteCloudV2UniversesUniverseIdOrderedDataStoresOrderedDataStoreIdScopesScopeIdEntriesEntryId = endpoint({
  method: 'DELETE',
  path: '/cloud/v2/universes/:universe_id/ordered-data-stores/:ordered_data_store_id/scopes/:scope_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.ordered-data-store.scope.entry:write'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    ordered_data_store_id: {},
    scope_id: {},
    entry_id: {},
  },
  parameters: {
    universe_id: z.string(),
    ordered_data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
  },
  response: z.void(),
  errors: [],
});
/**
 * `STABLE`
 *
 * Updates the value of an entry.
 *
 * **Scopes:** `universe.ordered-data-store.scope.entry:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param ordered_data_store_id The ordered-data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 * @param allowMissing If set to true, and the ordered data store entry is not found, a ordered
data store entry is created.
 */
export const patchCloudV2UniversesUniverseIdOrderedDataStoresOrderedDataStoreIdScopesScopeIdEntriesEntryId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/ordered-data-stores/:ordered_data_store_id/scopes/:scope_id/entries/:entry_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.ordered-data-store.scope.entry:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    ordered_data_store_id: {},
    scope_id: {},
    entry_id: {},
    allowMissing: {},
  },
  parameters: {
    universe_id: z.string(),
    ordered_data_store_id: z.string(),
    scope_id: z.string(),
    entry_id: z.string(),
    allowMissing: z.boolean().optional(),
  },
  body: OrderedDataStoreEntry,
  response: OrderedDataStoreEntry,
  errors: [],
});
/**
 * `STABLE`
 *
 * Increments the value of the specified entry. Both the existing value and
the increment amount must be integers.

If the entry doesn't exist, creates an entry with the specified value.

Known issue: the value may be incremented past the valid range of  values.
When this happens, the returned value will be clamped to the valid range,
but the backend may persist the original value. This behavior is maintained
for backwards compatibility reasons, but may change in a future version of
this API.
 *
 * **Scopes:** `universe.ordered-data-store.scope.entry:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param ordered_data_store_id The ordered-data-store ID.
 * @param scope_id The scope ID.
 * @param entry_id The entry ID.
 */
export const postCloudV2UniversesUniverseIdOrderedDataStoresOrderedDataStoreIdScopesScopeIdEntriesEntryIdIncrement =
  endpoint({
    method: 'POST',
    path: '/cloud/v2/universes/:universe_id/ordered-data-stores/:ordered_data_store_id/scopes/:scope_id/entries/:entry_id:increment',
    baseUrl: 'https://apis.roblox.com',
    scopes: ['universe.ordered-data-store.scope.entry:write'],
    requestFormat: 'json',
    serializationMethod: {
      body: {},
      universe_id: {},
      ordered_data_store_id: {},
      scope_id: {},
      entry_id: {},
    },
    parameters: {
      universe_id: z.string(),
      ordered_data_store_id: z.string(),
      scope_id: z.string(),
      entry_id: z.string(),
    },
    body: z.object({ amount: z.number() }),
    response: OrderedDataStoreEntry,
    errors: [],
  });
/**
 * `STABLE`
 *
 * Gets the specified place.
 *
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/places/:place_id',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    place_id: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
  },
  response: Place,
  errors: [],
});
/**
 * `STABLE`
 *
 * Updates the specified place.
 *
 * **Scopes:** `universe.place:write`
 * **Engine:** Not available in-engine
 *
 * @param body
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param updateMask The list of fields to update.
 */
export const patchCloudV2UniversesUniverseIdPlacesPlaceId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/places/:place_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    place_id: {},
    updateMask: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    updateMask: z.string().optional(),
  },
  body: Place,
  response: Place,
  errors: [],
});
/**
 * `BETA`
 *
 * Gets an instance and its property data.

The maximum supported response data size is 500,000 bytes. If this limit is
exceeded, the returned `Operation` will be completed with an error result
that has an error code of `422`.

 *
 * **Scopes:** `universe.place.instance:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param instance_id The instance ID.
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceIdInstancesInstanceId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/instances/:instance_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place.instance:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    place_id: {},
    instance_id: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    instance_id: z.string(),
  },
  response: Operation,
  errors: [],
});
/**
 * `BETA`
 *
 * Updates an instance's property data.

When updating a `Script` instance's source property, the maximum supported
property size is 200,000 bytes after UTF-8 encoding.
 *
 * **Scopes:** `universe.place.instance:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param instance_id The instance ID.
 * @param updateMask The list of fields to update.
 */
export const patchCloudV2UniversesUniverseIdPlacesPlaceIdInstancesInstanceId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/instances/:instance_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place.instance:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    place_id: {},
    instance_id: {},
    updateMask: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    instance_id: z.string(),
    updateMask: z.string().optional(),
  },
  body: Instance,
  response: Operation,
  errors: [],
});
/**
 * `BETA`
 *
 * Lists an instance's children.

The maximum supported response data size is 500,000 bytes. If this limit is
exceeded, the returned `Operation` will be completed with an error result
that has an error code of `422`.


 *
 * **Scopes:** `universe.place.instance:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param instance_id The instance ID.
 * @param maxPageSize The maximum number of child instance to return. The service may return
fewer than this value. If unspecified, at most 200 children will be
returned. The maximum value is 200; values above 200 will be coerced to
200.
 * @param pageToken A page token, received from a previous `ListInstanceChildrenRequest` call.
Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to
`ListInstanceChildrenRequest` must match the call that provided the page
token.
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceIdInstancesInstanceIdListChildren = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/instances/:instance_id:listChildren',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place.instance:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    place_id: {},
    instance_id: {},
    maxPageSize: {},
    pageToken: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    instance_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: Operation,
  errors: [],
});
/**
 * `BETA`
 *
 * Creates a task but does not wait for the task to complete.

To check whether a task has
completed, call the `GetLuauExecutionSessionTask` method and inspect the
`state` field of the returned resource.

Quotas:
* 5 calls per minute per API key owner
* 45 calls per minute per IP address
 *
 * **Scopes:** `universe.place.luau-execution-session:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 */
export const postCloudV2UniversesUniverseIdPlacesPlaceIdLuauExecutionSessionTasks = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/luau-execution-session-tasks',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place.luau-execution-session:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    place_id: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
  },
  body: LuauExecutionSessionTask,
  response: LuauExecutionSessionTask,
  errors: [],
});
/**
 * `BETA`
 *
 * List user restrictions for users that have ever been banned in either a
universe or a specific place.
 *
 * **Scopes:** `universe.user-restriction:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param maxPageSize The maximum number of user restrictions to return. The service might return
fewer than this value. If unspecified, at most 10 user restrictions are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceIdUserRestrictions = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/user-restrictions',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    place_id: {},
    maxPageSize: {},
    pageToken: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: ListUserRestrictionsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Get the user restriction.
 *
 * **Scopes:** `universe.user-restriction:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param user_restriction_id The user-restriction ID.
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceIdUserRestrictionsUserRestrictionId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/user-restrictions/:user_restriction_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    place_id: {},
    user_restriction_id: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    user_restriction_id: z.string(),
  },
  response: UserRestriction,
  errors: [],
});
/**
 * `BETA`
 *
 * Update the user restriction.
 *
 * **Scopes:** `universe.user-restriction:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param user_restriction_id The user-restriction ID.
 * @param updateMask The list of fields to update.

The `game_join_restriction` field must be updated atomically; field masks
that index into `game_join_restriction` (such as
`"game_join_restriction.active"`) are not supported.
 * @param idempotencyKey.key The unique key to use for idempotency.
 * @param idempotencyKey.firstSent The timestamp at which the first request was sent.

If this is further in the past than the lifetime of the idempotency key
(which *may* exceed the annotated minimum lifetime), the server *must*
return an error.
 */
export const patchCloudV2UniversesUniverseIdPlacesPlaceIdUserRestrictionsUserRestrictionId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/user-restrictions/:user_restriction_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    place_id: {},
    user_restriction_id: {},
    updateMask: {},
    'idempotencyKey.key': {},
    'idempotencyKey.firstSent': {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    user_restriction_id: z.string(),
    updateMask: z.string().optional(),
    'idempotencyKey.key': z.string().optional(),
    'idempotencyKey.firstSent': z.string().datetime({ offset: true }).optional(),
  },
  body: UserRestriction,
  response: UserRestriction,
  errors: [],
});
/**
 * `BETA`
 *
 * Creates a task but does not wait for the task to complete.

To check whether a task has
completed, call the `GetLuauExecutionSessionTask` method and inspect the
`state` field of the returned resource.

Quotas:
* 5 calls per minute per API key owner
* 45 calls per minute per IP address
 *
 * **Scopes:** `universe.place.luau-execution-session:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param version_id The version ID.
 */
export const postCloudV2UniversesUniverseIdPlacesPlaceIdVersionsVersionIdLuauExecutionSessionTasks = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universe_id/places/:place_id/versions/:version_id/luau-execution-session-tasks',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.place.luau-execution-session:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    place_id: {},
    version_id: {},
  },
  parameters: {
    universe_id: z.string(),
    place_id: z.string(),
    version_id: z.string(),
  },
  body: LuauExecutionSessionTask,
  response: LuauExecutionSessionTask,
  errors: [],
});
/**
 * `BETA`
 *
 * Gets information about a task.

Quotas:
* 45 calls per minute per API key owner or IP address
 *
 * **Scopes:** `universe.place.luau-execution-session:read`, `universe.place.luau-execution-session:write`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param version_id The version ID.
 * @param luau_execution_session_id The luau-execution-session ID.
 * @param task_id The task ID.
 * @param view The view in which to retrieve the luau execution session task.

Supports BASIC and FULL.

Defaults to BASIC.

Possible values:

  | Value | Description |
  | --- | --- |
  | VIEW_UNSPECIFIED | The luau execution session task view is not specified; the default will be used. |
  | BASIC | Excludes the `script` field. |
  | FULL | Includes all fields. |
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceIdVersionsVersionIdLuauExecutionSessionsLuauExecutionSessionIdTasksTaskId =
  endpoint({
    method: 'GET',
    path: '/cloud/v2/universes/:universe_id/places/:place_id/versions/:version_id/luau-execution-sessions/:luau_execution_session_id/tasks/:task_id',
    baseUrl: 'https://apis.roblox.com',
    scopes: ['universe.place.luau-execution-session:read', 'universe.place.luau-execution-session:write'],
    requestFormat: 'json',
    serializationMethod: {
      universe_id: {},
      place_id: {},
      version_id: {},
      luau_execution_session_id: {},
      task_id: {},
      view: {},
    },
    parameters: {
      universe_id: z.string(),
      place_id: z.string(),
      version_id: z.string(),
      luau_execution_session_id: z.string(),
      task_id: z.string(),
      view: z.enum(['VIEW_UNSPECIFIED', 'BASIC', 'FULL']).optional(),
    },
    response: LuauExecutionSessionTask,
    errors: [],
  });
/**
 * `BETA`
 *
 * Lists log chunks generated by a `LuauExecutionSessionTask`.

Quotas:
* 45 calls per minute per API key owner or IP address
 *
 * **Scopes:** `universe.place.luau-execution-session:read`, `universe.place.luau-execution-session:write`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param place_id The place ID.
 * @param version_id The version ID.
 * @param luau_execution_session_id The luau-execution-session ID.
 * @param task_id The task ID.
 * @param maxPageSize The maximum number of luau execution session task logs to return. The
service might return fewer than this value. If unspecified, at most 10000
luau execution session task logs are returned. The maximum value is 10000
and higher values are set to 10000.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param view The view in which to retrieve the luau execution session task log.

Supports FLAT and STRUCTURED.

Defaults to FLAT.

Possible values:

  | Value | Description |
  | --- | --- |
  | VIEW_UNSPECIFIED | The luau execution session task log view is not specified; the default will be used. |
  | FLAT | If this view is selected, the `messages` field will be populated (and the `structuredMessages` field will not). Each entry of the `messages` array contains only the log message, without additional medata. This is the default. |
  | STRUCTURED | If this view is selected, the `structuredMessages` field will be populated (and the `messages` field will not). Each entry of the `structuredMessages` array contains the log message plus additional metadata (see `LogMessage` for details). |
 */
export const getCloudV2UniversesUniverseIdPlacesPlaceIdVersionsVersionIdLuauExecutionSessionsLuauExecutionSessionIdTasksTaskIdLogs =
  endpoint({
    method: 'GET',
    path: '/cloud/v2/universes/:universe_id/places/:place_id/versions/:version_id/luau-execution-sessions/:luau_execution_session_id/tasks/:task_id/logs',
    baseUrl: 'https://apis.roblox.com',
    scopes: ['universe.place.luau-execution-session:read', 'universe.place.luau-execution-session:write'],
    requestFormat: 'json',
    serializationMethod: {
      universe_id: {},
      place_id: {},
      version_id: {},
      luau_execution_session_id: {},
      task_id: {},
      maxPageSize: {},
      pageToken: {},
      view: {},
    },
    parameters: {
      universe_id: z.string(),
      place_id: z.string(),
      version_id: z.string(),
      luau_execution_session_id: z.string(),
      task_id: z.string(),
      maxPageSize: z.number().int().optional(),
      pageToken: z.string().optional(),
      view: z.enum(['VIEW_UNSPECIFIED', 'FLAT', 'STRUCTURED']).optional(),
    },
    response: ListLuauExecutionSessionTaskLogsResponse,
    errors: [],
  });
/**
 * `BETA`
 *
 * Get the subscription.

The `universe.subscription-product.subscription:read` scope only allows
reading subscriptions of the user making the request. Because of this, the
subscription ID must match the user ID of the user making the request. Note
that this scope might be more relevant for OAuth 2.0 apps.

To read all subscriptions made by users for a particular universe, use the
`universe:write` scope instead.
 *
 * **Scopes:** `universe:write`, `universe.subscription-product.subscription:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param subscription_product_id The subscription-product ID.
 * @param subscription_id The subscription ID.
 * @param view The view in which to retrieve the subscription.

Supports BASIC and FULL.

Defaults to BASIC.

Possible values:

  | Value | Description |
  | --- | --- |
  | VIEW_UNSPECIFIED | The subscription view is not specified; the default will be used. |
  | BASIC | Includes only the `active` and `renewing` fields. |
  | FULL | Includes all fields. |
 */
export const getCloudV2UniversesUniverseIdSubscriptionProductsSubscriptionProductIdSubscriptionsSubscriptionId =
  endpoint({
    method: 'GET',
    path: '/cloud/v2/universes/:universe_id/subscription-products/:subscription_product_id/subscriptions/:subscription_id',
    baseUrl: 'https://apis.roblox.com',
    scopes: ['universe:write', 'universe.subscription-product.subscription:read'],
    requestFormat: 'json',
    serializationMethod: {
      universe_id: {},
      subscription_product_id: {},
      subscription_id: {},
      view: {},
    },
    parameters: {
      universe_id: z.string(),
      subscription_product_id: z.string(),
      subscription_id: z.string(),
      view: z.enum(['VIEW_UNSPECIFIED', 'BASIC', 'FULL']).optional(),
    },
    response: Subscription,
    errors: [],
  });
/**
 * `BETA`
 *
 * List user restrictions for users that have ever been banned in either a
universe or a specific place.
 *
 * **Scopes:** `universe.user-restriction:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param maxPageSize The maximum number of user restrictions to return. The service might return
fewer than this value. If unspecified, at most 10 user restrictions are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 */
export const getCloudV2UniversesUniverseIdUserRestrictions = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/user-restrictions',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    maxPageSize: {},
    pageToken: {},
  },
  parameters: {
    universe_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: ListUserRestrictionsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * List changes to UserRestriction resources within a given universe.
This includes both universe-level and place-level restrictions.

For universe-level restriction logs, the `place` field will be empty.
 *
 * **Scopes:** `universe.user-restriction:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param maxPageSize The maximum number of UserRestrictionLogs to return. The service may return
fewer than this value. If unspecified, at most 10 UserRestrictionLogs are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set to filter the logs returned.

The `filter` field supports a very small number of CEL:

* `user`
* `place`
* The `==` comparison operator is available.
* The `&&` logical operator is also supported.

As an example, filtering for a user and a place takes the form
`filter="user == 'users/123'" && "place == 'places/456'"`
 */
export const getCloudV2UniversesUniverseIdUserRestrictionsListLogs = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/user-restrictions:listLogs',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    maxPageSize: {},
    pageToken: {},
    filter: {},
  },
  parameters: {
    universe_id: z.string(),
    maxPageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListUserRestrictionLogsResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * Get the user restriction.
 *
 * **Scopes:** `universe.user-restriction:read`
 * **Engine:** Not available in-engine
 *
 * @param universe_id The universe ID.
 * @param user_restriction_id The user-restriction ID.
 */
export const getCloudV2UniversesUniverseIdUserRestrictionsUserRestrictionId = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universe_id/user-restrictions/:user_restriction_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:read'],
  requestFormat: 'json',
  serializationMethod: {
    universe_id: {},
    user_restriction_id: {},
  },
  parameters: {
    universe_id: z.string(),
    user_restriction_id: z.string(),
  },
  response: UserRestriction,
  errors: [],
});
/**
 * `BETA`
 *
 * Update the user restriction.
 *
 * **Scopes:** `universe.user-restriction:write`
 * **Engine:** Not available in-engine
 *
 * @param body 
 * @param universe_id The universe ID.
 * @param user_restriction_id The user-restriction ID.
 * @param updateMask The list of fields to update.

The `game_join_restriction` field must be updated atomically; field masks
that index into `game_join_restriction` (such as
`"game_join_restriction.active"`) are not supported.
 * @param idempotencyKey.key The unique key to use for idempotency.
 * @param idempotencyKey.firstSent The timestamp at which the first request was sent.

If this is further in the past than the lifetime of the idempotency key
(which *may* exceed the annotated minimum lifetime), the server *must*
return an error.
 */
export const patchCloudV2UniversesUniverseIdUserRestrictionsUserRestrictionId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universe_id/user-restrictions/:user_restriction_id',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['universe.user-restriction:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universe_id: {},
    user_restriction_id: {},
    updateMask: {},
    'idempotencyKey.key': {},
    'idempotencyKey.firstSent': {},
  },
  parameters: {
    universe_id: z.string(),
    user_restriction_id: z.string(),
    updateMask: z.string().optional(),
    'idempotencyKey.key': z.string().optional(),
    'idempotencyKey.firstSent': z.string().datetime({ offset: true }).optional(),
  },
  body: UserRestriction,
  response: UserRestriction,
  errors: [],
});
/**
 * `BETA`
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
 * **Engine:** Not available in-engine
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
  response: User,
  errors: [],
});
/**
 * `BETA`
 *
 * Generates and returns the URL for the user's avatar thumbnail.
 *
 * **Engine:** Not available in-engine
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
  errors: [],
});
/**
 * `BETA`
 *
 * Returns a list of asset quotas.
 *
 * **Scopes:** `asset:read`
 * **Engine:** Not available in-engine
 *
 * @param user_id The user ID.
 * @param maxPageSize The maximum number of asset quotas to return. The service might return
fewer than this value. If unspecified, at most 10 asset quotas are
returned. The maximum value is 100 and higher values are set to 100.
 * @param pageToken A page token, received from a previous call, to retrieve a subsequent page.

When paginating, all other parameters provided to the subsequent call must
match the call that provided the page token.
 * @param filter This field may be set in order to filter the resources returned.

Supports the following subset of CEL:
* Only the `quotaType` and `assetType` fields are supported.
* Only the `==` and `&&` operator are supported.

For example:
  `quotaType == RateLimitUpload && assetType == Audio`
 */
export const getCloudV2UsersUserIdAssetQuotas = endpoint({
  method: 'GET',
  path: '/cloud/v2/users/:user_id/asset-quotas',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['asset:read'],
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
  response: ListAssetQuotasResponse,
  errors: [],
});
/**
 * `BETA`
 *
 * List the inventory items in a user's inventory.

The inventory items returned depend on the target user’s choice under
**Settings > Privacy > Who can see my inventory?**:
* If the user granted inventory visibility to "Everyone," then any API key
or OAuth2 token can be used to view the target’s inventory, no matter what
scopes it has or who created it.
* If the user has not granted inventory visibility to "Everyone":
  * Their inventory can still be viewed with an API key created by the
  target user with **Inventory: Read** permission.
  * Their inventory can still be viewed with an OAuth2 token if the target
  user authorizes an app requesting permissions for the
  `user.inventory-item:read` scope.

Rate Limits:
* API Keys - 100 requests/minute per API key owner (can be user or group).
Rate limits are enforced across all of an owner's API keys.
* OAuth2 Tokens - 20 requests/minute per OAuth2 access token
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
  response: ListInventoryItemsResponse,
  errors: [],
});
/**
 * `STABLE`
 *
 * Sends a notification to a user.
 *
 * **Scopes:** `user.user-notification:write`
 * **Engine:** Not available in-engine
 *
 * @param body
 * @param user_id The user ID.
 */
export const postCloudV2UsersUserIdNotifications = endpoint({
  method: 'POST',
  path: '/cloud/v2/users/:user_id/notifications',
  baseUrl: 'https://apis.roblox.com',
  scopes: ['user.user-notification:write'],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    user_id: {},
  },
  parameters: {
    user_id: z.string(),
  },
  body: UserNotification,
  response: UserNotification,
  errors: [],
});
