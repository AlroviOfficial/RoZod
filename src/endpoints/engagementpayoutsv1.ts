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
 * @summary Gets the engagement payout history for a specific universe and a given date range, specified by start and end dates.
 * @param universeId The ID of the universe in question.
 * @param startDate The first date in the range, specified as yyyy-MM-dd.
 * @param endDate The last date in the range, specified as yyyy-MM-dd.
 */
export const getUniversePayoutHistory = endpoint({
  method: 'GET',
  path: '/v1/universe-payout-history',
  baseUrl: 'https://engagementpayouts.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {
      style: 'form',
      explode: true,
    },
    startDate: {
      style: 'form',
      explode: true,
    },
    endDate: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    startDate: z.string(),
    endDate: z.string(),
  },
  response: z.record(Roblox_EngagementPayouts_Api_PayoutResponseModel),
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
