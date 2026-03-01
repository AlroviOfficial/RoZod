/**
 * @api GET https://games.roblox.com/v2/groups/:groupId/games
 * @summary Gets games created by the specified group.
 * @param groupId The group Id.
 * @param accessFilter Filtering option via access level.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 */
export const getGroupsGroupidGames = endpoint({
  method: 'GET',
  path: '/v2/groups/:groupId/games',
  baseUrl: 'https://games.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    accessFilter: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    accessFilter: z
      .union([z.literal(1), z.literal(2), z.literal(4)])
      .optional()
      .default(1),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Web_Responses_Games_GameResponseV2_,
  errors: [
    {
      status: 403,
      description: `3: Not authorized.`,
    },
    {
      status: 500,
      description: `0: Compliance Context service is unavailable.`,
    },
  ],
});
