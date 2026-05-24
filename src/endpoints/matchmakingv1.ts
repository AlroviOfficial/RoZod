import { z } from 'zod';
import { endpoint } from '..';

/**
 * @api GET https://matchmaking.roblox.com/v1/client-status
 * @summary Get the client-status
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
 * @summary Set the client-status
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
 * @summary Shutdown game instances.
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
 * @summary Shutdown all game instances.
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
 * @summary Create a PlayerAttributeDefinition.
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
 * @summary Delete the PlayerAttributeDefinition specified by attributeId.
 * @param attributeId
 */
export const deleteMatchmakingPlayerAttributeAttributeid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/player-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {
      style: 'simple',
    },
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/player-attribute/:attributeId
 * @summary Update the PlayerAttributeDefinition specified by attributeId.
 * @param attributeId
 */
export const patchMatchmakingPlayerAttributeAttributeid = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/player-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {
      style: 'simple',
    },
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/player-attributes/:universeId
 * @summary List all PlayerAttributeDefinitions of a universe.
 * @param universeId
 */
export const getMatchmakingPlayerAttributesUniverseid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/player-attributes/:universeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration
 * @summary Creates a matchmaking scoring configuration.
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
 * @summary Updates a matchmaking scoring configuration.
 * @param scoringConfigurationId
 */
export const getMatchmakingScoringConfigurationScoringconfigurationid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {
      style: 'simple',
    },
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId
 * @summary Deletes a matchmaking scoring configuration.
 * @param scoringConfigurationId
 */
export const deleteMatchmakingScoringConfigurationScoringconfigurationid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {
      style: 'simple',
    },
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId
 * @summary Updates a matchmaking scoring configuration.
 * @param scoringConfigurationId
 */
export const patchMatchmakingScoringConfigurationScoringconfigurationid = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {
      style: 'simple',
    },
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals
 * @summary Creates a matchmaking scoring configuration signal.
 * @param scoringConfigurationId
 */
export const postMatchmakingScoringConfigurationScoringconfigurationidSignals = endpoint({
  method: 'POST',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {
      style: 'simple',
    },
  },
  parameters: {
    scoringConfigurationId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api DELETE https://matchmaking.roblox.com/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName
 * @summary Deletes a matchmaking scoring configuration custom signal.
 * @param scoringConfigurationId
 * @param signalName
 */
export const deleteMatchmakingScoringConfigurationScoringconfigurationidSignalsSignalname = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {
      style: 'simple',
    },
    signalName: {
      style: 'simple',
    },
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
 * @summary Updates a matchmaking scoring configuration signal.
 * @param scoringConfigurationId
 * @param signalName
 */
export const patchMatchmakingScoringConfigurationScoringconfigurationidSignalsSignalname = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/scoring-configuration/:scoringConfigurationId/signals/:signalName',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    scoringConfigurationId: {
      style: 'simple',
    },
    signalName: {
      style: 'simple',
    },
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
 * @summary Sets a matchmaking scoring configuration for a place.
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
 * @summary Removes the matchmaking scoring configuration for a place.
 * @param placeId
 */
export const deleteMatchmakingScoringConfigurationPlacePlaceid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/scoring-configuration/place/:placeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
  },
  parameters: {
    placeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/scoring-configurations/:universeId
 * @summary List all matchmaking scoring configurations for a universe.
 * @param universeId
 */
export const getMatchmakingScoringConfigurationsUniverseid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configurations/:universeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/scoring-configurations/:universeId/places
 * @summary List all places with a matchmaking scoring configuration for a universe.
 * @param universeId
 */
export const getMatchmakingScoringConfigurationsUniverseidPlaces = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/scoring-configurations/:universeId/places',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api POST https://matchmaking.roblox.com/v1/matchmaking/server-attribute
 * @summary Create a ServerAttributeDefinition.
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
 * @summary Delete the ServerAttributeDefinition specified by attributeId.
 * @param attributeId
 */
export const deleteMatchmakingServerAttributeAttributeid = endpoint({
  method: 'DELETE',
  path: '/v1/matchmaking/server-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {
      style: 'simple',
    },
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api PATCH https://matchmaking.roblox.com/v1/matchmaking/server-attribute/:attributeId
 * @summary Update the ServerAttributeDefinition specified by attributeId.
 * @param attributeId
 */
export const patchMatchmakingServerAttributeAttributeid = endpoint({
  method: 'PATCH',
  path: '/v1/matchmaking/server-attribute/:attributeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    attributeId: {
      style: 'simple',
    },
  },
  parameters: {
    attributeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/server-attributes/:universeId
 * @summary List all ServerAttributeDefinitions of a universe.
 * @param universeId
 */
export const getMatchmakingServerAttributesUniverseid = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/server-attributes/:universeId',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://matchmaking.roblox.com/v1/matchmaking/universe/:universeId/feature-flags
 * @summary Gets feature flags for a customized matchmaking for a given universe.
 * @param universeId
 */
export const getMatchmakingUniverseUniverseidFeatureFlags = endpoint({
  method: 'GET',
  path: '/v1/matchmaking/universe/:universeId/feature-flags',
  baseUrl: 'https://matchmaking.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.unknown(),
  },
  response: z.void(),
  errors: [],
});
