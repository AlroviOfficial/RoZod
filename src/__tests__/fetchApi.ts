import { ExtractParams, ExtractResponse, fetchApi, fetchApiPages, fetchApiSplit } from '../index';
import { getGamesIcons, getUsersAvatarHeadshot, postBatch } from '../endpoints/thumbnailsv1';
import { getGroupsGroupidMembership } from '../endpoints/groupsv1';
import { getGamesUniverseidFavoritesCount } from '../endpoints/gamesv1';
import { getUsersUseridGames } from '../endpoints/gamesv2';
import { postPresenceUsers } from '../endpoints/presencev1';
import { z } from 'zod';

test('fetch game icons', async () => {
  return fetchApiSplit(
    getGamesIcons,
    {
      universeIds: [1534453623, 65241, 110181652, 2585430167, 3262314006],
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

test('fetch avatar headshots', async () => {
  type returnType = ExtractParams<typeof getUsersAvatarHeadshot>;
  return fetchApiSplit(
    getUsersAvatarHeadshot,
    {
      userIds: [4464722397, 3304424800, 138957456],
      size: '150x150',
    },
    { userIds: 100 },
    (response) => response.data,
  ).then((data) => {
    const flattened = data.flat(1);
    expect(flattened).toHaveLength(3);
    expect(flattened[0]).toHaveProperty('targetId');
  });
});

test('post presence users', async () => {
  return fetchApi(postPresenceUsers, {
    body: {
      userIds: [4464722397, 3304424800, 138957456],
    },
  }).then((data) => {
    expect(data).toHaveProperty('userPresences');
  });
});

test('post games', async () => {
  return fetchApiPages(getUsersUseridGames, {
    userId: 4464722397,
    limit: 50,
  }).then((data) => {
    expect(data[0]).toHaveProperty('data');
  });
}, 10000);
