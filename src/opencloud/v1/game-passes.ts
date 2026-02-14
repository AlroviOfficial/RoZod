import { z } from 'zod';
import { endpoint } from '../..';

const GamePasses_CreateGamePass_Body = z.object({
  name: z.string(),
  description: z.string().nullish(),
  imageFile: z.instanceof(File).nullish(),
  isForSale: z.boolean().nullish(),
  price: z.number().int().nullish(),
  isRegionalPricingEnabled: z.boolean().nullish(),
});
const PricingFeature = z.enum(['Invalid', 'PriceOptimization', 'UserFixedPrice', 'RegionalPricing']);
const PriceInformationStruct = z.object({
  defaultPriceInRobux: z.number().int().nullable(),
  enabledFeatures: z.array(PricingFeature),
});
const GamePassConfigV2 = z.object({
  gamePassId: z.number().int(),
  name: z.string(),
  description: z.string(),
  isForSale: z.boolean(),
  iconAssetId: z.number().int(),
  createdTimestamp: z.string().datetime({ offset: true }),
  updatedTimestamp: z.string().datetime({ offset: true }),
  priceInformation: PriceInformationStruct.nullable(),
});
const ErrorCode = z.enum([
  'InternalError',
  'BadRequest',
  'NotFound',
  'UnauthorizedAccess',
  'NotAuthenticated',
  'PassNotFound',
  'TargetUnauthorizedAccess',
  'UniverseNotFound',
  'MissingArgument',
  'AssetCreationFailure',
  'PassRevokeFailure',
  'PassAlreadyRevoked',
  'SalesNotFound',
  'CommissionRateNotFound',
  'AssetNotFound',
  'FileTooLarge',
  'ActiveInPO',
  'NotForSale',
  'NotSameUniverse',
  'PricingConfigError',
  'InvalidCount',
  'Blocked',
  'InvalidPageSize',
]);
const ErrorResponse = z.object({
  errorCode: ErrorCode,
  errorMessage: z.string().nullable(),
  field: z.string().nullable(),
  hint: z.string().nullable(),
});
const GamePasses_UpdateGamePass_Body = z.object({
  name: z.string().nullable(),
  description: z.string().nullable(),
  file: z.instanceof(File).nullable(),
  isForSale: z.boolean().nullable(),
  price: z.number().int().nullable(),
  isRegionalPricingEnabled: z.boolean().nullable(),
});
const ListGamePassConfigsByUniverseResponse = z.object({
  gamePasses: z.array(GamePassConfigV2),
  nextPageToken: z.string().nullable(),
});

/**
 * @api POST https://apis.roblox.com/game-passes/v1/universes/:universeId/game-passes
 * @summary Create game pass
 * @param body
 * @param universeId The universe ID.
 * @description Creates a new game pass with the provided configuration details.
 */
export const postGamePassesV1UniversesUniverseIdGamePasses = endpoint({
  method: 'POST',
  path: '/game-passes/v1/universes/:universeId/game-passes',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    universeId: {},
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: GamePasses_CreateGamePass_Body,
  response: GamePassConfigV2,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
/**
 * @api PATCH https://apis.roblox.com/game-passes/v1/universes/:universeId/game-passes/:gamePassId
 * @summary Update game pass
 * @param body 
 * @param universeId The universe ID.
 * @param gamePassId The game pass ID.
 * @description Updates a game pass with the provided configuration details.
Note that only fields provided in the request will be updated.
 */
export const patchGamePassesV1UniversesUniverseIdGamePassesGamePassId = endpoint({
  method: 'PATCH',
  path: '/game-passes/v1/universes/:universeId/game-passes/:gamePassId',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'form-data',
  serializationMethod: {
    body: {},
    universeId: {},
    gamePassId: {},
  },
  parameters: {
    universeId: z.number().int(),
    gamePassId: z.number().int(),
  },
  body: GamePasses_UpdateGamePass_Body,
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
    {
      status: 409,
      description: `Conflict`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/game-passes/v1/universes/:universeId/game-passes/:gamePassId/creator
 * @summary Get game pass with configuration details
 * @param universeId The universe ID.
 * @param gamePassId The game pass ID.
 */
export const getGamePassesV1UniversesUniverseIdGamePassesGamePassIdCreator = endpoint({
  method: 'GET',
  path: '/game-passes/v1/universes/:universeId/game-passes/:gamePassId/creator',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    gamePassId: {},
  },
  parameters: {
    universeId: z.number().int(),
    gamePassId: z.number().int(),
  },
  response: GamePassConfigV2,
  errors: [
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/game-passes/v1/universes/:universeId/game-passes/creator
 * @summary List game passes by universe with configuration details
 * @param universeId The universe ID.
 * @param pageSize The number of results to return. Defaults to 50 if not provided.
 * @param pageToken The cursor token for pagination.
 */
export const getGamePassesV1UniversesUniverseIdGamePassesCreator = endpoint({
  method: 'GET',
  path: '/game-passes/v1/universes/:universeId/game-passes/creator',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    pageSize: {},
    pageToken: {},
  },
  parameters: {
    universeId: z.number().int(),
    pageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
  },
  response: ListGamePassConfigsByUniverseResponse,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 401,
      description: `Unauthorized`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
