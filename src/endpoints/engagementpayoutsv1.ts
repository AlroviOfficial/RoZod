import { z } from 'zod';
import { endpoint } from '..';

const Roblox_EngagementPayouts_Api_PayoutResponseModel = z.object({
  engagementScore: z.number(),
  payoutInRobux: z.number().int(),
  payoutType: z.string(),
  eligibilityType: z.string(),
});

/**
 * @api GET https://engagementpayouts.roblox.com/v1/universe-payout-history
 * @param universeId
 * @param startDate
 * @param endDate
 */
export const getUniversePayoutHistory = endpoint({
  method: 'GET',
  path: '/v1/universe-payout-history',
  baseUrl: 'https://engagementpayouts.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    startDate: {},
    endDate: {},
  },
  parameters: {
    universeId: z.number().int(),
    startDate: z.string(),
    endDate: z.string(),
  },
  response: Roblox_EngagementPayouts_Api_PayoutResponseModel,
  errors: [
    {
      status: 400,
      description: `1: InvalidUniverseId
2: InvalidStartDate
3: InvalidEndDate
4: InvalidDateRange
5: Forbidden
6: TooManyDays`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
