import { EndpointSchema, fetchApi, fetchApiSplit } from '../index';
import { getGamesIcons, getUsersAvatarHeadshot } from '../endpoints/thumbnailsv1';
import { getGroupsGroupidMembership } from '../endpoints/groupsv1';
import { getGamesMultigetPlaceDetails, getGamesUniverseidFavoritesCount } from '../endpoints/gamesv1';
import { z } from 'zod';

test('fetch game icons', async () => {
  return fetchApiSplit(
    getGamesIcons,
    {
      universeIds: [1534453623, 65241, 110181652, 2585430167, 3262314006],
      format: 'Png',
    },
    { universeIds: 100 },
    (response) => response.data,
  ).then((data) => {
    const flattened = data.flat(1);
    expect(flattened).toHaveLength(5);
    expect(flattened[0]).toHaveProperty('targetId');
  });
});

// Should fail, since no cookie is provided.
test('fetch group members', async () => {
  return fetchApi(getGroupsGroupidMembership, { groupId: 11479637 }).catch((error: Error) => {
    expect(error.message).toBe('Invalid response data');
  });
});

test('fetch games favoritedCount', async () => {
  return fetchApi(getGamesUniverseidFavoritesCount, { universeId: 1534453623 }).then((data) => {
    expect(data).toHaveProperty('favoritesCount');
  });
});

// Custom endpoint. Won't work either, as we are not authenticated.
test('fetch omni recommendations', async () => {
  const endpoint = {
    method: 'post' as const,
    baseUrl: 'https://apis.roblox.com/',
    path: 'discovery-api/omni-recommendation-metadata',
    requestFormat: 'json' as const,
    response: z.object({
      contentMetadata: z.object({
        Game: z.array(
          z.object({
            id: z.number(),
            rootPlaceId: z.number(),
          }),
        ),
      }),
      sorts: z.array(
        z.object({
          topic: z.string(),
          recommendationList: z.number().array(),
        }),
      ),
    }),
  };
  return fetchApi(endpoint).catch((error: Error) => {
    expect(error.message).toBe('Invalid response data');
  });
});

test('fetch place details', async () => {
  return fetchApiSplit(
    getUsersAvatarHeadshot,
    {
      userIds: [4464722397, 3304424800, 138957456],
    },
    { userIds: 100 },
    (response) => response.data,
  ).then((data) => {
    const flattened = data.flat(1);
    expect(flattened).toHaveLength(3);
    expect(flattened[0]).toHaveProperty('targetId');
  });
});