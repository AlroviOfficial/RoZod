import { z } from 'zod';
import { endpoint } from '..';

/**
 * @api GET https://matchmaking.roblox.com/v1/client-status
 */
export const getClientStatus = endpoint({
  method: 'GET',
  path: '/v1/client-status',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/client-status
 */
export const postClientStatus = endpoint({
  method: 'POST',
  path: '/v1/client-status',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/game-instances/shutdown
 */
export const postGameInstancesShutdown = endpoint({
  method: 'POST',
  path: '/v1/game-instances/shutdown',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/game-instances/shutdown-all
 */
export const postGameInstancesShutdownAll = endpoint({
  method: 'POST',
  path: '/v1/game-instances/shutdown-all',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/player-attribute
 */
export const postMatchmakingPlayerAttribute = endpoint({
  method: 'POST',
  path: '/v1/matchmaking/player-attribute',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/player-attribute/:attributeId
 * @param attributeId
 */
export const deleteMatchmakingPlayerAttributeAttributeid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/player-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {},
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/player-attribute/:attributeId
 * @param attributeId
 */
export const patchMatchmakingPlayerAttributeAttributeid = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/player-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {},
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/player-attributes/:universeId
 * @param universeId
 */
export const getMatchmakingPlayerAttributesUniverseid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/player-attributes/:universeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration
 */
export const postMatchmakingScoringConfiguration = endpoint({
  method: 'POST',
  path: '/v1/matchmaking/scoring-configuration',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId
 * @param scoringConfigurationId
 */
export const getMatchmakingScoringConfigurationScoringconfigurationid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {},
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId
 * @param scoringConfigurationId
 */
export const deleteMatchmakingScoringConfigurationScoringconfigurationid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {},
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId
 * @param scoringConfigurationId
 */
export const patchMatchmakingScoringConfigurationScoringconfigurationid = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {},
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals
 * @param scoringConfigurationId
 */
export const postMatchmakingScoringConfigurationScoringconfigurationidSignals = endpoint({
  method: 'POST',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {},
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName
 * @param scoringConfigurationId
 * @param signalName
 */
export const deleteMatchmakingScoringConfigurationScoringconfigurationidSignalsSignalname = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {},
    signalName: {},
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
    signalName: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName
 * @param scoringConfigurationId
 * @param signalName
 */
export const patchMatchmakingScoringConfigurationScoringconfigurationidSignalsSignalname = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {},
    signalName: {},
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
    signalName: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/default-weights
 */
export const getMatchmakingScoringConfigurationDefaultWeights = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configuration/default-weights',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/place
 */
export const postMatchmakingScoringConfigurationPlace = endpoint({
  method: 'POST',
  path: '/v1/matchmaking/scoring-configuration/place',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/place/:placeId
 * @param placeId
 */
export const deleteMatchmakingScoringConfigurationPlacePlaceid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/scoring-configuration/place/:placeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    placeId: {},
  },
  parameters: {
    placeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/scoring-configurations/:universeId
 * @param universeId
 */
export const getMatchmakingScoringConfigurationsUniverseid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configurations/:universeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/scoring-configurations/:universeId/places
 * @param universeId
 */
export const getMatchmakingScoringConfigurationsUniverseidPlaces = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configurations/:universeId/places',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/server-attribute
 */
export const postMatchmakingServerAttribute = endpoint({
  method: 'POST',
  path: '/v1/matchmaking/server-attribute',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/server-attribute/:attributeId
 * @param attributeId
 */
export const deleteMatchmakingServerAttributeAttributeid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/server-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {},
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/server-attribute/:attributeId
 * @param attributeId
 */
export const patchMatchmakingServerAttributeAttributeid = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/server-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {},
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/server-attributes/:universeId
 * @param universeId
 */
export const getMatchmakingServerAttributesUniverseid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/server-attributes/:universeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/universe/:universeId/feature-flags
 * @param universeId
 */
export const getMatchmakingUniverseUniverseidFeatureFlags = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/universe/:universeId/feature-flags',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
