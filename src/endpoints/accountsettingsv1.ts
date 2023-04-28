import { z } from 'zod';

const Roblox_AccountSettings_Api_Models_AccountsSettingsMetadataModel = z
  .object({
    IsAccountsRestrictionsSpamBugFixEnabled: z.boolean(),
    MaximumParentalControlsMonthlySpendLimitInUSD: z.number().int(),
    IsParentalMonthlyLimitInUIEnabled: z.boolean(),
    IsParentalNotificationSettingsInUIEnabled: z.boolean(),
    IsContentControlsEnabled: z.boolean(),
  })
  .partial();
const Roblox_AccountSettings_Api_AppChatPrivacyResponse = z.object({ appChatPrivacy: z.string() }).partial();
const Roblox_AccountSettings_Api_AppChatPrivacyRequest = z
  .object({
    appChatPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .partial();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).partial();
const Roblox_AccountSettings_Api_EmailResponse = z
  .object({
    emailAddress: z.string(),
    verified: z.boolean(),
    canBypassPasswordForEmailUpdate: z.boolean(),
  })
  .partial();
const Roblox_AccountSettings_Api_UpdateEmailRequest = z
  .object({
    password: z.string(),
    emailAddress: z.string(),
    skipVerificationEmail: z.boolean(),
    isAdsAccount: z.boolean(),
  })
  .partial();
const Roblox_AccountSettings_Api_GameChatPrivacyResponse = z.object({ gameChatPrivacy: z.string() }).partial();
const Roblox_AccountSettings_Api_GameChatPrivacyRequest = z
  .object({
    gameChatPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .partial();
const Roblox_AccountSettings_Api_InventoryPrivacyResponse = z
  .object({
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .partial();
const Roblox_AccountSettings_Api_InventoryPrivacyRequest = z
  .object({
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .partial();
const Roblox_AccountSettings_Api_InventoryPrivacyUpdateResponse = z
  .object({
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
    tradePrivacy: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
    privacySettingResponse: z.union([z.literal(0), z.literal(1)]),
  })
  .partial();
const Roblox_AccountSettings_Api_PrivateMessagePrivacyResponse = z
  .object({ privateMessagePrivacy: z.string() })
  .partial();
const Roblox_AccountSettings_Api_PrivateMessagePrivacyRequest = z
  .object({ privateMessagePrivacy: z.string() })
  .partial();
const Roblox_AccountSettings_Api_ThemeConfigurationResponse = z.object({ themeType: z.string() }).partial();
const Roblox_AccountSettings_Api_ThemeConfigurationRequest = z.object({ themeType: z.string() }).partial();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_ = z.object({ data: z.array(z.string()) }).partial();
const Roblox_AccountSettings_Api_TradePrivacyResponse = z.object({ tradePrivacy: z.string() }).partial();
const Roblox_AccountSettings_Api_UpdateTradePrivacyRequest = z
  .object({
    tradePrivacy: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
  })
  .partial();
const Roblox_AccountSettings_Api_TradePrivacyUpdateResponse = z
  .object({
    tradePrivacy: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
    privacySettingResponse: z.union([z.literal(0), z.literal(1)]),
  })
  .partial();
const Roblox_AccountSettings_Api_TradeValueResponse = z.object({ tradeValue: z.string() }).partial();
const Roblox_AccountSettings_Api_TradeValueRequest = z
  .object({
    tradeValue: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  })
  .partial();
const Roblox_AccountSettings_Api_Models_Response_GetBlockedUsersResponse = z
  .object({ blockedUserIds: z.array(z.number()) })
  .partial();
const Roblox_AccountSettings_Api_Models_BlockedUser = z
  .object({
    userId: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .partial();
const Roblox_AccountSettings_Api_Models_Response_GetDetailedBlockedUsersResponse = z
  .object({
    blockedUsers: z.array(Roblox_AccountSettings_Api_Models_BlockedUser),
    maxBlockedUsers: z.number().int(),
    total: z.number().int(),
  })
  .partial();
const Roblox_AccountSettings_Api_SendVerifyEmailRequest = z
  .object({ freeItem: z.boolean(), isAdsAccount: z.boolean() })
  .partial();

const schemas = {
  Roblox_AccountSettings_Api_Models_AccountsSettingsMetadataModel,
  Roblox_AccountSettings_Api_AppChatPrivacyResponse,
  Roblox_AccountSettings_Api_AppChatPrivacyRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_AccountSettings_Api_EmailResponse,
  Roblox_AccountSettings_Api_UpdateEmailRequest,
  Roblox_AccountSettings_Api_GameChatPrivacyResponse,
  Roblox_AccountSettings_Api_GameChatPrivacyRequest,
  Roblox_AccountSettings_Api_InventoryPrivacyResponse,
  Roblox_AccountSettings_Api_InventoryPrivacyRequest,
  Roblox_AccountSettings_Api_InventoryPrivacyUpdateResponse,
  Roblox_AccountSettings_Api_PrivateMessagePrivacyResponse,
  Roblox_AccountSettings_Api_PrivateMessagePrivacyRequest,
  Roblox_AccountSettings_Api_ThemeConfigurationResponse,
  Roblox_AccountSettings_Api_ThemeConfigurationRequest,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_,
  Roblox_AccountSettings_Api_TradePrivacyResponse,
  Roblox_AccountSettings_Api_UpdateTradePrivacyRequest,
  Roblox_AccountSettings_Api_TradePrivacyUpdateResponse,
  Roblox_AccountSettings_Api_TradeValueResponse,
  Roblox_AccountSettings_Api_TradeValueRequest,
  Roblox_AccountSettings_Api_Models_Response_GetBlockedUsersResponse,
  Roblox_AccountSettings_Api_Models_BlockedUser,
  Roblox_AccountSettings_Api_Models_Response_GetDetailedBlockedUsersResponse,
  Roblox_AccountSettings_Api_SendVerifyEmailRequest,
};

export const getV1accountsettingsmetadata = {
  method: 'get' as const,
  path: '/v1/account/settings/metadata',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_Models_AccountsSettingsMetadataModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1appChatPrivacy = {
  method: 'get' as const,
  path: '/v1/app-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ appChatPrivacy: z.string() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1appChatPrivacy = {
  method: 'post' as const,
  path: '/v1/app-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_AppChatPrivacyRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InvalidSettingOption`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.SettingLockedCuratedGamesEnabled
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1email = {
  method: 'get' as const,
  path: '/v1/email',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_EmailResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const patchV1email = {
  method: 'patch' as const,
  path: '/v1/email',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_UpdateEmailRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `8: Password is incorrect.
9: Invalid email address.`,
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
1: PIN is locked.
3: There are too many accounts associated with this email address.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `4: This is already the current email.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `6: Too many attempts to update email. Please try again later.
7: Too many attempts to send verification email. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `2: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1email = {
  method: 'post' as const,
  path: '/v1/email',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_UpdateEmailRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `8: Password is incorrect.
9: Invalid email address.`,
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
1: PIN is locked.
3: There are too many accounts associated with this email address.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `4: This is already the current email.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `6: Too many attempts to update email. Please try again later.
7: Too many attempts to send verification email. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `2: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1emailverify = {
  method: 'post' as const,
  path: '/v1/email/verify',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_SendVerifyEmailRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `10: No email address is associated with the account.`,
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
1: PIN is locked.`,
      schema: z.void(),
    },
    {
      status: 409,
      description: `5: The email is already verified.`,
      schema: z.void(),
    },
    {
      status: 429,
      description: `7: Too many attempts to send verification email. Please try again later.`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `2: This feature is currently disabled. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const getV1gameChatPrivacy = {
  method: 'get' as const,
  path: '/v1/game-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ gameChatPrivacy: z.string() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1gameChatPrivacy = {
  method: 'post' as const,
  path: '/v1/game-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_GameChatPrivacyRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InvalidSettingOption`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.SettingLockedCuratedGamesEnabled
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1inventoryPrivacy = {
  method: 'get' as const,
  path: '/v1/inventory-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_InventoryPrivacyResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1inventoryPrivacy = {
  method: 'post' as const,
  path: '/v1/inventory-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_InventoryPrivacyRequest,
  },
  response: Roblox_AccountSettings_Api_InventoryPrivacyUpdateResponse,
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InventoryHidingFeatureDisabled
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1privateMessagePrivacy = {
  method: 'get' as const,
  path: '/v1/private-message-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ privateMessagePrivacy: z.string() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1privateMessagePrivacy = {
  method: 'post' as const,
  path: '/v1/private-message-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ privateMessagePrivacy: z.string() }).partial(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InvalidSettingOption`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.SettingLockedCuratedGamesEnabled
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1themesConsumerTypeConsumerId = {
  method: 'get' as const,
  path: '/v1/themes/:consumerType/:consumerId',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    consumerType: z.literal(1),
    consumerId: z.string(),
  },
  response: z.object({ themeType: z.string() }).partial(),
  errors: [
    {
      status: 400,
      description: `3: Invalid consumer type.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const patchV1themesConsumerTypeConsumerId = {
  method: 'patch' as const,
  path: '/v1/themes/:consumerType/:consumerId',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: z.object({ themeType: z.string() }).partial(),
    consumerType: z.literal(1),
    consumerId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `2: Invalid theme type.`,
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
  ],
};
export const getV1themestypes = {
  method: 'get' as const,
  path: '/v1/themes/types',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_,
  errors: [],
};
export const getV1tradePrivacy = {
  method: 'get' as const,
  path: '/v1/trade-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ tradePrivacy: z.string() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1tradePrivacy = {
  method: 'post' as const,
  path: '/v1/trade-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_UpdateTradePrivacyRequest,
  },
  response: Roblox_AccountSettings_Api_TradePrivacyUpdateResponse,
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.InvalidTradePrivacy`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.UserCannotTrade
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const getV1tradeValue = {
  method: 'get' as const,
  path: '/v1/trade-value',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ tradeValue: z.string() }).partial(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const postV1tradeValue = {
  method: 'post' as const,
  path: '/v1/trade-value',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    body: Roblox_AccountSettings_Api_TradeValueRequest,
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.InvalidTradeValue`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.UserCannotTrade
0: Token Validation Failed`,
      schema: z.void(),
    },
  ],
};
export const postV1usersUserIdblock = {
  method: 'post' as const,
  path: '/v1/users/:userId/block',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `0: Target user does not exist.
1: Target user already blocked.
2: User sending block request has reached their block limit.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: User is not logged in.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `3: User blocking is disabled.
8: The request failed internally. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const postV1usersUserIdunblock = {
  method: 'post' as const,
  path: '/v1/users/:userId/unblock',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({}).partial(),
  errors: [
    {
      status: 400,
      description: `0: Target user does not exist.
4: Target user for unblock request is not currently blocked.`,
      schema: z.void(),
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: User is not logged in.`,
      schema: z.void(),
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
      schema: z.void(),
    },
    {
      status: 503,
      description: `3: User blocking is disabled.
8: The request failed internally. Please try again later.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersgetBlockedUsers = {
  method: 'get' as const,
  path: '/v1/users/get-blocked-users',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_Models_Response_GetBlockedUsersResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
export const getV1usersgetDetailedBlockedUsers = {
  method: 'get' as const,
  path: '/v1/users/get-detailed-blocked-users',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_Models_Response_GetDetailedBlockedUsersResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
      schema: z.void(),
    },
  ],
};
