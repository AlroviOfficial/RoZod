import { endpoint, fetchApi } from '../index';
import { z } from 'zod';

// Mock the global fetch to intercept and check the URL
const originalFetch = global.fetch;
let lastFetchUrl: string | null = null;

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(async (url: string, options: RequestInit) => {
    lastFetchUrl = url;
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'content-type': 'application/json' },
    });
  });
});

afterAll(() => {
  global.fetch = originalFetch;
});

beforeEach(() => {
  lastFetchUrl = null;
  jest.clearAllMocks();
});

describe('Path parameters in URL construction', () => {
  // Test for path parameters not being duplicated as query parameters
  test('path parameters are not duplicated as query parameters', async () => {
    const testEndpoint = endpoint({
      method: 'GET',
      baseUrl: 'https://apis.roblox.com',
      path: '/users/:userId/info',
      response: z.object({
        success: z.boolean(),
      }),
      parameters: {
        userId: z.number(),
      },
    });

    await fetchApi(testEndpoint, { userId: 1234 });
    expect(lastFetchUrl).toBe('https://apis.roblox.com/users/1234/info');
  });

  // Test for multiple path parameters
  test('multiple path parameters are correctly replaced', async () => {
    const testEndpoint = endpoint({
      method: 'GET',
      baseUrl: 'https://apis.roblox.com',
      path: '/groups/:groupId/users/:userId/role',
      response: z.object({
        success: z.boolean(),
      }),
      parameters: {
        groupId: z.number(),
        userId: z.number(),
      },
    });

    await fetchApi(testEndpoint, { groupId: 5678, userId: 1234 });
    expect(lastFetchUrl).toBe('https://apis.roblox.com/groups/5678/users/1234/role');
  });

  // Test for mix of path and query parameters
  test('mix of path and query parameters are handled correctly', async () => {
    const testEndpoint = endpoint({
      method: 'GET',
      baseUrl: 'https://apis.roblox.com',
      path: '/users/:userId/friends',
      response: z.object({
        success: z.boolean(),
      }),
      parameters: {
        userId: z.number(),
        limit: z.number(),
        cursor: z.string().optional(),
      },
    });

    await fetchApi(testEndpoint, { userId: 1234, limit: 10, cursor: 'next_page' });
    expect(lastFetchUrl).toBe('https://apis.roblox.com/users/1234/friends?limit=10&cursor=next_page');
  });

  // Test for path parameter with same name as a query parameter
  test('path parameter is not duplicated as query even when query parameter has same name', async () => {
    const testEndpoint = endpoint({
      method: 'GET',
      baseUrl: 'https://apis.roblox.com',
      path: '/users/:userId',
      response: z.object({
        success: z.boolean(),
      }),
      parameters: {
        userId: z.number(),
        otherUserId: z.number(),
      },
    });

    await fetchApi(testEndpoint, { userId: 1234, otherUserId: 5678 });
    expect(lastFetchUrl).toBe('https://apis.roblox.com/users/1234?otherUserId=5678');
  });

  // Test with real Roblox endpoints
  test('real endpoint with path parameter', async () => {
    // Import a real endpoint from the project that uses path parameters
    const usersEndpoint = endpoint({
      method: 'GET',
      baseUrl: 'https://users.roblox.com/v1',
      path: '/users/:userId',
      response: z.object({
        success: z.boolean(),
      }),
      parameters: {
        userId: z.number(),
      },
    });

    await fetchApi(usersEndpoint, { userId: 1234 });
    expect(lastFetchUrl).toBe('https://users.roblox.com/v1/users/1234');
  });
});
