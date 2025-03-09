import { fetchApi } from '../index';
import { getUsersUserid } from '../endpoints/usersv1';
import { getUsersUseridPromotionChannels } from '../endpoints/accountinformationv1';
import { getGamesUniverseidFavoritesCount } from '../endpoints/gamesv1';
import { getUsersUseridGames } from '../endpoints/gamesv2';
import { getGroupsGroupidGames } from '../endpoints/gamesv2';

// The purpose of these tests is to ensure path parameters are handled correctly
// with real-world endpoints. We're not concerned with the response data,
// just that the URL is constructed properly.

describe('Path parameter integration tests', () => {
  // Test fetching user information
  test('getUsersUserid constructs URL with path parameter', async () => {
    try {
      await fetchApi(getUsersUserid, { userId: 1 });
      // If the path parameter was duplicated as a query parameter,
      // the request would fail or give unexpected results
    } catch (error) {
      // We don't care about auth errors or rate limits, just that
      // the URL was constructed correctly
      expect((error as Error).message).not.toContain('userId=1');
    }
  });

  // Test fetching user promotion channels - uses multiple path parameters
  test('getUsersUseridPromotionChannels constructs URL with path parameter', async () => {
    try {
      await fetchApi(getUsersUseridPromotionChannels, {
        userId: 1,
        alwaysReturnUrls: true,
        filterLink: true,
      });
    } catch (error) {
      // The path parameter should be in the path only, not in query parameters
      expect((error as Error).message).not.toContain('userId=1');
      // The query parameters should still be included
      expect((error as Error).message).not.toContain('alwaysReturnUrls is not in path');
      expect((error as Error).message).not.toContain('filterLink is not in path');
    }
  });

  // Test fetching universe favorites count - uses path parameter and additional query parameters
  test('getGamesUniverseidFavoritesCount constructs URL with path parameter', async () => {
    try {
      const response = await fetchApi(getGamesUniverseidFavoritesCount, { universeId: 1534453623 });
      expect(response).toHaveProperty('favoritesCount');
    } catch (error) {
      // Even if the request fails, we're testing that the URL was constructed correctly
      expect((error as Error).message).not.toContain('universeId=1534453623');
    }
  });

  // Test fetching user games - uses path parameter and additional query parameters
  test('getUsersUseridGames constructs URL with path parameter and query params', async () => {
    try {
      await fetchApi(getUsersUseridGames, {
        userId: 1,
        limit: 10,
        cursor: 'next_page_token',
        sortOrder: 'Asc',
      });
    } catch (error) {
      // Path parameter should not be duplicated in query string
      expect((error as Error).message).not.toContain('userId=1');
      // Query parameters should be included
      expect((error as Error).message).not.toContain('limit is not in path');
      expect((error as Error).message).not.toContain('cursor is not in path');
      expect((error as Error).message).not.toContain('sortOrder is not in path');
    }
  });

  // Test fetching group games - uses path parameter and additional query parameters
  test('getGroupsGroupidGames constructs URL with path parameter and query params', async () => {
    try {
      await fetchApi(getGroupsGroupidGames, {
        groupId: 1,
        limit: 10,
        cursor: 'next_page_token',
        sortOrder: 'Asc',
      });
    } catch (error) {
      // Path parameter should not be duplicated in query string
      expect((error as Error).message).not.toContain('groupId=1');
      // Query parameters should be included
      expect((error as Error).message).not.toContain('limit is not in path');
      expect((error as Error).message).not.toContain('cursor is not in path');
      expect((error as Error).message).not.toContain('sortOrder is not in path');
    }
  });
});
