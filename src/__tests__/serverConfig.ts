import {
  configureServer,
  clearServerConfig,
  getServerConfig,
  getCookies,
  updateCookie,
  CookieRefreshEvent,
} from '../index';

// Store original fetch to restore later
const originalFetch = globalThis.fetch;

// Mock fetch to capture request details
let lastRequestHeaders: Headers | null = null;
let requestCount = 0;

beforeEach(() => {
  clearServerConfig();
  lastRequestHeaders = null;
  requestCount = 0;

  // Mock globalThis.fetch
  globalThis.fetch = jest.fn(async (url: string | URL | Request, init?: RequestInit) => {
    requestCount++;
    lastRequestHeaders = new Headers(init?.headers);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  });
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  clearServerConfig();
});

// Helper to trigger a fetch through rozod's internal fetch wrapper
// We need to import the actual fetch mechanism
import { fetchApi, endpoint } from '../index';
import { z } from 'zod';

const testEndpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://test.roblox.com',
  path: '/test',
  response: z.object({ success: z.boolean() }),
});

describe('Server Configuration', () => {
  describe('configureServer', () => {
    test('should set single cookie', () => {
      configureServer({ cookies: 'test-cookie-value' });
      const config = getServerConfig();
      expect(config.cookies).toBe('test-cookie-value');
    });

    test('should set multiple cookies', () => {
      const cookies = ['cookie1', 'cookie2', 'cookie3'];
      configureServer({ cookies });
      const config = getServerConfig();
      expect(config.cookies).toEqual(cookies);
    });

    test('should set cookie rotation mode', () => {
      configureServer({ cookies: ['a', 'b'], cookieRotation: 'random' });
      const config = getServerConfig();
      expect(config.cookieRotation).toBe('random');
    });

    test('should set custom user agents', () => {
      const userAgents = ['Agent1', 'Agent2'];
      configureServer({ userAgents });
      const config = getServerConfig();
      expect(config.userAgents).toEqual(userAgents);
    });

    test('should set user agent rotation mode', () => {
      configureServer({ userAgentRotation: 'round-robin' });
      const config = getServerConfig();
      expect(config.userAgentRotation).toBe('round-robin');
    });
  });

  describe('clearServerConfig', () => {
    test('should clear all configuration', () => {
      configureServer({
        cookies: ['cookie1', 'cookie2'],
        cookieRotation: 'random',
        userAgents: ['Agent1'],
        userAgentRotation: 'round-robin',
      });

      clearServerConfig();
      const config = getServerConfig();

      expect(config.cookies).toBeUndefined();
      expect(config.cookieRotation).toBeUndefined();
      expect(config.userAgents).toBeUndefined();
      expect(config.userAgentRotation).toBeUndefined();
    });
  });

  describe('getServerConfig', () => {
    test('should return read-only copy without internal state', () => {
      configureServer({ cookies: 'test' });
      const config = getServerConfig();

      // Should not have internal properties
      expect((config as any)._cookieIndex).toBeUndefined();
      expect((config as any)._userAgentIndex).toBeUndefined();
      expect((config as any)._sessionCookie).toBeUndefined();
      expect((config as any)._sessionUserAgent).toBeUndefined();
    });
  });
});

describe('Cookie Pool Integration', () => {
  test('should apply single cookie to requests', async () => {
    configureServer({ cookies: 'my-test-cookie' });
    await fetchApi(testEndpoint, undefined);

    expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=my-test-cookie');
  });

  test('should use round-robin rotation by default for multiple cookies', async () => {
    const cookies = ['cookie-a', 'cookie-b', 'cookie-c'];
    configureServer({ cookies });

    // Make 6 requests - should cycle through a, b, c, a, b, c
    const observedCookies: string[] = [];
    for (let i = 0; i < 6; i++) {
      await fetchApi(testEndpoint, undefined);
      observedCookies.push(lastRequestHeaders?.get('cookie') || '');
    }

    expect(observedCookies).toEqual([
      '.ROBLOSECURITY=cookie-a',
      '.ROBLOSECURITY=cookie-b',
      '.ROBLOSECURITY=cookie-c',
      '.ROBLOSECURITY=cookie-a',
      '.ROBLOSECURITY=cookie-b',
      '.ROBLOSECURITY=cookie-c',
    ]);
  });

  test('should use "none" rotation for single cookie', async () => {
    configureServer({ cookies: 'single-cookie' });

    // Make multiple requests - all should use same cookie
    for (let i = 0; i < 3; i++) {
      await fetchApi(testEndpoint, undefined);
      expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=single-cookie');
    }
  });

  test('should respect explicit cookieRotation: none', async () => {
    configureServer({ cookies: ['cookie-1', 'cookie-2'], cookieRotation: 'none' });

    // All requests should use first cookie
    for (let i = 0; i < 3; i++) {
      await fetchApi(testEndpoint, undefined);
      expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=cookie-1');
    }
  });

  test('should use random rotation when specified', async () => {
    const cookies = ['random-a', 'random-b', 'random-c'];
    configureServer({ cookies, cookieRotation: 'random' });

    // Make many requests and verify we see variety (probabilistic test)
    const observedCookies = new Set<string>();
    for (let i = 0; i < 50; i++) {
      await fetchApi(testEndpoint, undefined);
      observedCookies.add(lastRequestHeaders?.get('cookie') || '');
    }

    // With 50 requests and 3 cookies, we should see at least 2 different cookies
    expect(observedCookies.size).toBeGreaterThanOrEqual(2);
  });

  test('should not override manually provided cookie header', async () => {
    configureServer({ cookies: 'server-cookie' });

    await fetchApi(testEndpoint, undefined, {
      headers: { cookie: '.ROBLOSECURITY=manual-cookie' },
    });

    expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=manual-cookie');
  });
});

describe('User Agent Pool Integration', () => {
  test('should apply default user agent when no custom agents configured', async () => {
    configureServer({ cookies: 'test' });
    await fetchApi(testEndpoint, undefined);

    const userAgent = lastRequestHeaders?.get('user-agent');
    expect(userAgent).toBeTruthy();
    expect(userAgent).toContain('Mozilla'); // Default UAs are browser-like
  });

  test('should apply custom user agents', async () => {
    configureServer({ userAgents: ['CustomBot/1.0'] });
    await fetchApi(testEndpoint, undefined);

    expect(lastRequestHeaders?.get('user-agent')).toBe('CustomBot/1.0');
  });

  test('should disable user agent when empty array provided', async () => {
    configureServer({ userAgents: [] });
    await fetchApi(testEndpoint, undefined);

    // User agent should not be set by rozod (fetch mock starts with no headers)
    // The header might be undefined or empty depending on implementation
    const userAgent = lastRequestHeaders?.get('user-agent');
    expect(userAgent).toBeFalsy();
  });

  test('should use consistent user agent per session with none rotation (default)', async () => {
    configureServer({ userAgents: ['UA1', 'UA2', 'UA3'] });

    const firstUA = (await fetchApi(testEndpoint, undefined), lastRequestHeaders?.get('user-agent'));

    // All subsequent requests should use same UA
    for (let i = 0; i < 5; i++) {
      await fetchApi(testEndpoint, undefined);
      expect(lastRequestHeaders?.get('user-agent')).toBe(firstUA);
    }
  });

  test('should rotate user agents with round-robin', async () => {
    configureServer({
      userAgents: ['UA-A', 'UA-B', 'UA-C'],
      userAgentRotation: 'round-robin',
    });

    const observedUAs: string[] = [];
    for (let i = 0; i < 6; i++) {
      await fetchApi(testEndpoint, undefined);
      observedUAs.push(lastRequestHeaders?.get('user-agent') || '');
    }

    expect(observedUAs).toEqual(['UA-A', 'UA-B', 'UA-C', 'UA-A', 'UA-B', 'UA-C']);
  });

  test('should not override manually provided user-agent header', async () => {
    configureServer({ userAgents: ['ServerUA'] });

    await fetchApi(testEndpoint, undefined, {
      headers: { 'user-agent': 'ManualUA' },
    });

    expect(lastRequestHeaders?.get('user-agent')).toBe('ManualUA');
  });
});

describe('Combined Cookie and User Agent Configuration', () => {
  test('should apply both cookie and user agent defaults', async () => {
    configureServer({
      cookies: 'combined-cookie',
      userAgents: ['CombinedUA/1.0'],
    });

    await fetchApi(testEndpoint, undefined);

    expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=combined-cookie');
    expect(lastRequestHeaders?.get('user-agent')).toBe('CombinedUA/1.0');
  });

  test('should handle independent rotation of cookies and user agents', async () => {
    configureServer({
      cookies: ['C1', 'C2'],
      cookieRotation: 'round-robin',
      userAgents: ['UA1', 'UA2', 'UA3'],
      userAgentRotation: 'round-robin',
    });

    // Track 6 requests
    const results: { cookie: string; ua: string }[] = [];
    for (let i = 0; i < 6; i++) {
      await fetchApi(testEndpoint, undefined);
      results.push({
        cookie: lastRequestHeaders?.get('cookie') || '',
        ua: lastRequestHeaders?.get('user-agent') || '',
      });
    }

    // Cookies: C1, C2, C1, C2, C1, C2
    // UAs: UA1, UA2, UA3, UA1, UA2, UA3
    expect(results.map((r) => r.cookie)).toEqual([
      '.ROBLOSECURITY=C1',
      '.ROBLOSECURITY=C2',
      '.ROBLOSECURITY=C1',
      '.ROBLOSECURITY=C2',
      '.ROBLOSECURITY=C1',
      '.ROBLOSECURITY=C2',
    ]);
    expect(results.map((r) => r.ua)).toEqual(['UA1', 'UA2', 'UA3', 'UA1', 'UA2', 'UA3']);
  });
});

describe('Configuration Reset on Reconfigure', () => {
  test('should reset indices when reconfiguring', async () => {
    configureServer({
      cookies: ['A', 'B', 'C'],
      cookieRotation: 'round-robin',
    });

    // Advance the index
    await fetchApi(testEndpoint, undefined); // A
    await fetchApi(testEndpoint, undefined); // B

    // Reconfigure - should reset
    configureServer({
      cookies: ['X', 'Y', 'Z'],
      cookieRotation: 'round-robin',
    });

    await fetchApi(testEndpoint, undefined);
    expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=X');
  });
});

// OpenCloud API key tests - OpenCloud uses /cloud/ in the path
const openCloudEndpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://apis.roblox.com/cloud',
  path: '/v1/universes/123',
  response: z.object({ success: z.boolean() }),
});

const openCloudV2Endpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://apis.roblox.com',
  path: '/cloud/v2/universes/123',
  response: z.object({ success: z.boolean() }),
});

// Cookie-based apis.roblox.com endpoint (not OpenCloud - no /cloud/ in path)
const apisRobloxCookieEndpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://apis.roblox.com',
  path: '/some-cookie-api/v1/data',
  response: z.object({ success: z.boolean() }),
});

// Non-Roblox domain with /cloud/ in path (should NOT get API key)
const externalCloudEndpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://api.example.com',
  path: '/cloud/v1/resources',
  response: z.object({ success: z.boolean() }),
});

describe('OpenCloud API Key Integration', () => {
  test('should apply API key to OpenCloud v1 requests (/cloud in baseUrl)', async () => {
    configureServer({ cloudKey: 'test-api-key-12345' });
    await fetchApi(openCloudEndpoint, undefined);

    expect(lastRequestHeaders?.get('x-api-key')).toBe('test-api-key-12345');
  });

  test('should apply API key to OpenCloud v2 requests (/cloud/ in path)', async () => {
    configureServer({ cloudKey: 'test-api-key-v2' });
    await fetchApi(openCloudV2Endpoint, undefined);

    expect(lastRequestHeaders?.get('x-api-key')).toBe('test-api-key-v2');
  });

  test('should not apply API key to non-OpenCloud requests', async () => {
    configureServer({ cloudKey: 'test-api-key' });
    await fetchApi(testEndpoint, undefined); // testEndpoint uses test.roblox.com

    expect(lastRequestHeaders?.get('x-api-key')).toBeNull();
  });

  test('should not apply API key to non-Roblox domains even with /cloud/ in path', async () => {
    configureServer({ cloudKey: 'test-api-key' });
    await fetchApi(externalCloudEndpoint, undefined);

    // Should NOT get the API key - it's not apis.roblox.com
    expect(lastRequestHeaders?.get('x-api-key')).toBeNull();
  });

  test('should apply cookie (not API key) to cookie-based apis.roblox.com endpoints', async () => {
    configureServer({
      cookies: 'my-cookie',
      cloudKey: 'my-api-key',
    });
    await fetchApi(apisRobloxCookieEndpoint, undefined);

    // Should use cookie auth, not API key (no /cloud/ in path)
    expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=my-cookie');
    expect(lastRequestHeaders?.get('x-api-key')).toBeNull();
  });

  test('should not apply cookie to OpenCloud requests', async () => {
    configureServer({
      cookies: 'my-cookie',
      cloudKey: 'my-api-key',
    });
    await fetchApi(openCloudEndpoint, undefined);

    expect(lastRequestHeaders?.get('x-api-key')).toBe('my-api-key');
    expect(lastRequestHeaders?.get('cookie')).toBeNull();
  });

  test('should apply cookie to classic API but not OpenCloud', async () => {
    configureServer({
      cookies: 'my-cookie',
      cloudKey: 'my-api-key',
    });

    // Classic API request
    await fetchApi(testEndpoint, undefined);
    expect(lastRequestHeaders?.get('cookie')).toBe('.ROBLOSECURITY=my-cookie');
    expect(lastRequestHeaders?.get('x-api-key')).toBeNull();

    // OpenCloud request
    await fetchApi(openCloudEndpoint, undefined);
    expect(lastRequestHeaders?.get('x-api-key')).toBe('my-api-key');
    expect(lastRequestHeaders?.get('cookie')).toBeNull();
  });

  test('should not override manually provided x-api-key header', async () => {
    configureServer({ cloudKey: 'server-key' });

    await fetchApi(openCloudEndpoint, undefined, {
      headers: { 'x-api-key': 'manual-key' },
    });

    expect(lastRequestHeaders?.get('x-api-key')).toBe('manual-key');
  });

  test('should still apply user agent to OpenCloud requests', async () => {
    configureServer({
      cloudKey: 'api-key',
      userAgents: ['TestBot/1.0'],
    });
    await fetchApi(openCloudEndpoint, undefined);

    expect(lastRequestHeaders?.get('x-api-key')).toBe('api-key');
    expect(lastRequestHeaders?.get('user-agent')).toBe('TestBot/1.0');
  });

  test('should set cloudKey in config', () => {
    configureServer({ cloudKey: 'my-cloud-key' });
    const config = getServerConfig();
    expect(config.cloudKey).toBe('my-cloud-key');
  });

  test('should clear cloudKey on clearServerConfig', () => {
    configureServer({ cloudKey: 'my-cloud-key' });
    clearServerConfig();
    const config = getServerConfig();
    expect(config.cloudKey).toBeUndefined();
  });
});

describe('Cookie Rotation Handling', () => {
  test('getCookies should return empty array when no cookies configured', () => {
    expect(getCookies()).toEqual([]);
  });

  test('getCookies should return array for single cookie', () => {
    configureServer({ cookies: 'single-cookie' });
    expect(getCookies()).toEqual(['single-cookie']);
  });

  test('getCookies should return copy of cookie array', () => {
    const original = ['cookie1', 'cookie2'];
    configureServer({ cookies: original });
    const result = getCookies();

    expect(result).toEqual(original);
    // Verify it's a copy, not the same reference
    result.push('cookie3');
    expect(getCookies()).toEqual(['cookie1', 'cookie2']);
  });

  test('updateCookie should update single cookie', () => {
    configureServer({ cookies: 'old-cookie' });
    const result = updateCookie(0, 'new-cookie');

    expect(result).toBe(true);
    expect(getCookies()).toEqual(['new-cookie']);
  });

  test('updateCookie should update specific cookie in pool', () => {
    configureServer({ cookies: ['cookie0', 'cookie1', 'cookie2'] });
    const result = updateCookie(1, 'updated-cookie1');

    expect(result).toBe(true);
    expect(getCookies()).toEqual(['cookie0', 'updated-cookie1', 'cookie2']);
  });

  test('updateCookie should return false for invalid index', () => {
    configureServer({ cookies: ['cookie0', 'cookie1'] });

    expect(updateCookie(-1, 'new')).toBe(false);
    expect(updateCookie(2, 'new')).toBe(false);
    expect(updateCookie(100, 'new')).toBe(false);
  });

  test('updateCookie should return false when no cookies configured', () => {
    expect(updateCookie(0, 'new')).toBe(false);
  });

  test('onCookieRefresh callback should be stored in config', () => {
    const callback = jest.fn();
    configureServer({ cookies: 'test', onCookieRefresh: callback });

    const config = getServerConfig();
    expect(config.onCookieRefresh).toBe(callback);
  });

  test('onCookieRefresh callback should be cleared on clearServerConfig', () => {
    const callback = jest.fn();
    configureServer({ cookies: 'test', onCookieRefresh: callback });
    clearServerConfig();

    const config = getServerConfig();
    expect(config.onCookieRefresh).toBeUndefined();
  });

  test('should invoke onCookieRefresh when Set-Cookie header contains new cookie', async () => {
    const refreshEvents: CookieRefreshEvent[] = [];
    const callback = jest.fn((event: CookieRefreshEvent) => {
      refreshEvents.push(event);
    });

    configureServer({
      cookies: 'original-cookie-value',
      onCookieRefresh: callback,
    });

    // Mock fetch to return a Set-Cookie header with a new cookie
    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'set-cookie': '.ROBLOSECURITY=new-rotated-cookie-value; Path=/; HttpOnly',
        },
      });
    });

    await fetchApi(testEndpoint, undefined);

    // Callback should have been invoked
    expect(callback).toHaveBeenCalledTimes(1);
    expect(refreshEvents[0].oldCookie).toBe('original-cookie-value');
    expect(refreshEvents[0].newCookie).toBe('new-rotated-cookie-value');
    expect(refreshEvents[0].poolIndex).toBe(0);

    // Internal cookie should be updated
    expect(getCookies()).toEqual(['new-rotated-cookie-value']);
  });

  test('should invoke onCookieRefresh for correct pool index with multiple cookies', async () => {
    const refreshEvents: CookieRefreshEvent[] = [];
    const callback = jest.fn((event: CookieRefreshEvent) => {
      refreshEvents.push(event);
    });

    configureServer({
      cookies: ['cookie-a', 'cookie-b', 'cookie-c'],
      cookieRotation: 'round-robin',
      onCookieRefresh: callback,
    });

    // First request uses cookie-a (index 0) - no rotation
    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    });
    await fetchApi(testEndpoint, undefined);

    // Second request uses cookie-b (index 1) - with rotation
    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'set-cookie': '.ROBLOSECURITY=cookie-b-rotated; Path=/',
        },
      });
    });
    await fetchApi(testEndpoint, undefined);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(refreshEvents[0].oldCookie).toBe('cookie-b');
    expect(refreshEvents[0].newCookie).toBe('cookie-b-rotated');
    expect(refreshEvents[0].poolIndex).toBe(1);

    // Cookie pool should be updated at correct index
    expect(getCookies()).toEqual(['cookie-a', 'cookie-b-rotated', 'cookie-c']);
  });

  test('should not invoke callback when cookie has not changed', async () => {
    const callback = jest.fn();

    configureServer({
      cookies: 'same-cookie',
      onCookieRefresh: callback,
    });

    // Mock returns the same cookie value
    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'set-cookie': '.ROBLOSECURITY=same-cookie; Path=/',
        },
      });
    });

    await fetchApi(testEndpoint, undefined);

    expect(callback).not.toHaveBeenCalled();
  });

  test('should not invoke callback when no Set-Cookie header', async () => {
    const callback = jest.fn();

    configureServer({
      cookies: 'my-cookie',
      onCookieRefresh: callback,
    });

    // Mock returns no Set-Cookie header
    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    });

    await fetchApi(testEndpoint, undefined);

    expect(callback).not.toHaveBeenCalled();
  });

  test('should handle cookie with _| prefix in Set-Cookie header', async () => {
    const callback = jest.fn();

    configureServer({
      cookies: '_|WARNING:-DO-NOT-SHARE|_oldvalue123',
      onCookieRefresh: callback,
    });

    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'set-cookie': '.ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE|_newvalue456; Path=/; HttpOnly',
        },
      });
    });

    await fetchApi(testEndpoint, undefined);

    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        newCookie: '_|WARNING:-DO-NOT-SHARE|_newvalue456',
      }),
    );
  });

  test('callback errors should not break request flow', async () => {
    const errorCallback = jest.fn(() => {
      throw new Error('Callback error');
    });

    configureServer({
      cookies: 'original',
      onCookieRefresh: errorCallback,
    });

    globalThis.fetch = jest.fn(async () => {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'set-cookie': '.ROBLOSECURITY=rotated; Path=/',
        },
      });
    });

    // Should not throw despite callback error
    const result = await fetchApi(testEndpoint, undefined);
    expect(result).toEqual({ success: true });

    // Cookie should still be updated
    expect(getCookies()).toEqual(['rotated']);
  });
});
