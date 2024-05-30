import { ExtractParams, ExtractResponse, fetchApi, fetchApiPages, fetchApiSplit } from '../index';
import { getGamesIcons, getUsersAvatarHeadshot, postBatch } from '../endpoints/thumbnailsv1';
import { getGroupsGroupidMembership } from '../endpoints/groupsv1';
import { getGamesUniverseidFavoritesCount } from '../endpoints/gamesv1';
import { getGroupsGroupidGames, getUsersUseridGames } from '../endpoints/gamesv2';
import { postPresenceUsers } from '../endpoints/presencev1';
import { z } from 'zod';

test('fetch game icons', () => {
  fetchApiSplit(
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
test('fetch group members', () => {
  fetchApi(getGroupsGroupidMembership, { groupId: 11479637, includeNotificationPreferences: false }).catch(
    (error: Error) => {
      expect(error.message).toBe('Invalid response data');
    },
  );
});

test('fetch games favoritedCount', () => {
  fetchApi(getGamesUniverseidFavoritesCount, { universeId: 1534453623 }).then((data) => {
    expect(data).toHaveProperty('favoritesCount');
  });
});

test('fetch raw', () => {
  fetchApi(getGamesUniverseidFavoritesCount, { universeId: 1534453623 }, { returnRaw: true }).then((data) => {
    expect(data).toHaveProperty('headers');
  });
});

// Custom endpoint. Won't work either, as we are not authenticated.
test('fetch omni recommendations', () => {
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
  fetchApi(endpoint).catch((error: Error) => {
    expect(error.message).toBe('Invalid response data');
  });
});

test('fetch avatar headshots', () => {
  type returnType = ExtractParams<typeof getUsersAvatarHeadshot>;
  fetchApiSplit(
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

test('post presence users', () => {
  fetchApi(postPresenceUsers, {
    body: {
      userIds: [4464722397, 3304424800, 138957456],
    },
  }).then((data) => {
    expect(data).toHaveProperty('userPresences');
  });
});

test('post games', () => {
  fetchApiPages(
    getUsersUseridGames,
    {
      userId: 4464722397,
      limit: 50,
    },
    {
      cacheType: 'memory',
      cacheKey: 'test',
      cacheTime: 1000 * 60,
    },
  ).then((data) => {
    expect(data[0]).toHaveProperty('data');
  });
});

test('fetch pages group games', () => {
  expect(
    fetchApiPages(
      getGroupsGroupidGames,
      {
        groupId: 10620626,
        limit: 100,
      },
      {
        throwOnError: true,
      },
    ),
  ).rejects.toThrow('3: Not authorized.');
});
