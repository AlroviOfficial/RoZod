import { z } from 'zod';
import { endpoint } from '..';

const Roblox_EconomyCreatorStats_Api_Models_StatisticsResponse = z.object({
  dataGranularity: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  data: z.array(z.array(z.number())),
});

/**
 * @api GET https://economycreatorstats.roblox.com/v1/universes/:universeId/stats
 * @summary Get statistics data for a universe.
 * @param universeId The universe id.
 * @param Type
 * @param StartTime
 * @param EndTime
 */
export const getUniversesUniverseidStats = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/stats',
  baseUrl: 'https://economycreatorstats.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    Type: {
      style: 'form',
      explode: true,
    },
    StartTime: {
      style: 'form',
      explode: true,
    },
    EndTime: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    Type: z.enum(['PremiumUpsells', 'PremiumVisits']),
    StartTime: z.string().datetime({ offset: true }),
    EndTime: z.string().datetime({ offset: true }),
  },
  response: Roblox_EconomyCreatorStats_Api_Models_StatisticsResponse,
  errors: [
    {
      status: 400,
      description: `1: The Universe is invalid.
3: Too many data points requested.
4: The requested data type is not known.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
2: Not authorized to perform this action.`,
    },
  ],
});
