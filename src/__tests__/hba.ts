import { z } from 'zod';
import {
  fetchApi,
  endpoint,
  configureServer,
  clearServerConfig,
  getServerConfig,
  changeHBAKeys,
  hbaClient,
} from '../index';

const originalFetch = globalThis.fetch;

const METADATA_URL = 'https://www.roblox.com/charts';

// Minimal page matching roblox-bat's FETCH_TOKEN_METADATA_REGEX and FETCH_USER_DATA_REGEX
const VALID_METADATA_PAGE = `
<html><head>
<meta name="user-data" data-userid="1" />
<meta name="hardware-backed-authentication-data"
  data-is-secure-authentication-intent-enabled="true"
  data-is-bound-auth-token-enabled="true"
  data-bound-auth-token-whitelist="{&quot;Whitelist&quot;:[{&quot;apiSite&quot;:&quot;.roblox.com&quot;,&quot;sampleRate&quot;:&quot;100&quot;}]}"
  data-bound-auth-token-exemptlist="{&quot;Exemptlist&quot;:[]}"
  data-hba-indexed-db-name="hbaDB"
  data-hba-indexed-db-obj-store-name="hbaObjectStore"
  data-hba-indexed-db-key-name="hba_keys"
  data-hba-indexed-db-version="1" />
</head><body></body></html>`;

const UNPARSEABLE_PAGE = '<html><body>Access denied</body></html>';

const testEndpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://test.roblox.com',
  path: '/hba-test',
  response: z.object({ ok: z.boolean() }),
});

let metadataRequests: { init?: RequestInit }[] = [];
let apiRequestHeaders: Headers[] = [];
let metadataPage = UNPARSEABLE_PAGE;

async function generateKeys(): Promise<CryptoKeyPair> {
  return (await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, false, [
    'sign',
    'verify',
  ])) as CryptoKeyPair;
}

beforeEach(() => {
  clearServerConfig();
  metadataRequests = [];
  apiRequestHeaders = [];
  metadataPage = UNPARSEABLE_PAGE;

  hbaClient.cachedTokenMetadata = undefined;
  hbaClient.suppliedCryptoKeyPair = undefined;
  hbaClient.isAuthenticated = undefined;
  (hbaClient as unknown as { metadataFailureAt: number }).metadataFailureAt = 0;

  globalThis.fetch = jest.fn(async (url: string | URL | Request, init?: RequestInit) => {
    const urlStr = String(url instanceof Request ? url.url : url);
    if (urlStr.startsWith(METADATA_URL)) {
      metadataRequests.push({ init });
      return new Response(metadataPage, { status: 200, headers: { 'content-type': 'text/html' } });
    }
    apiRequestHeaders.push(new Headers(init?.headers));
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }) as typeof fetch;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  clearServerConfig();
});

describe('HBA server behavior', () => {
  test('skips the token metadata fetch entirely when no crypto key source exists', async () => {
    // Node/Bun without IndexedDB and without supplied keys: a BAT can never be
    // signed, so no metadata should ever be fetched.
    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(metadataRequests).toHaveLength(0);
    expect(apiRequestHeaders).toHaveLength(2);
  });

  test('does not refetch metadata per request after a failed parse', async () => {
    hbaClient.suppliedCryptoKeyPair = await generateKeys();

    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(metadataRequests).toHaveLength(1);
    expect(apiRequestHeaders).toHaveLength(3);
  });

  test('retries metadata after the failure TTL expires', async () => {
    hbaClient.suppliedCryptoKeyPair = await generateKeys();

    await fetchApi(testEndpoint, undefined);
    expect(metadataRequests).toHaveLength(1);

    // Simulate the failure TTL having elapsed
    (hbaClient as unknown as { metadataFailureAt: number }).metadataFailureAt = Date.now() - 10 * 60 * 1000;

    await fetchApi(testEndpoint, undefined);
    expect(metadataRequests).toHaveLength(2);
  });

  test('bounds the metadata fetch with a timeout and applies the configured user agent', async () => {
    hbaClient.suppliedCryptoKeyPair = await generateKeys();
    configureServer({ userAgents: ['TestUA/9.9'] });

    await fetchApi(testEndpoint, undefined);

    expect(metadataRequests).toHaveLength(1);
    const init = metadataRequests[0].init;
    expect(init?.signal).toBeInstanceOf(AbortSignal);
    expect(new Headers(init?.headers).get('user-agent')).toBe('TestUA/9.9');
  });

  test('generates a bound auth token when keys are supplied and metadata parses', async () => {
    metadataPage = VALID_METADATA_PAGE;
    hbaClient.suppliedCryptoKeyPair = await generateKeys();
    configureServer({ cookies: 'test-cookie-value' });

    await fetchApi(testEndpoint, undefined);

    expect(metadataRequests).toHaveLength(1);
    expect(apiRequestHeaders).toHaveLength(1);
    expect(apiRequestHeaders[0].get('x-bound-auth-token')).toBeTruthy();
  });

  test('caches successfully parsed metadata across requests', async () => {
    metadataPage = VALID_METADATA_PAGE;
    hbaClient.suppliedCryptoKeyPair = await generateKeys();
    configureServer({ cookies: 'test-cookie-value' });

    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(metadataRequests).toHaveLength(1);
    expect(apiRequestHeaders).toHaveLength(2);
  });

  test('concurrent requests share a single in-flight metadata lookup, including failures', async () => {
    hbaClient.suppliedCryptoKeyPair = await generateKeys();

    await Promise.all([
      fetchApi(testEndpoint, undefined),
      fetchApi(testEndpoint, undefined),
      fetchApi(testEndpoint, undefined),
      fetchApi(testEndpoint, undefined),
      fetchApi(testEndpoint, undefined),
    ]);

    expect(metadataRequests).toHaveLength(1);
    expect(apiRequestHeaders).toHaveLength(5);
  });

  test('supplying keys clears the negative metadata cache', async () => {
    hbaClient.suppliedCryptoKeyPair = await generateKeys();

    // First lookup fails and is negative-cached
    await fetchApi(testEndpoint, undefined);
    expect(metadataRequests).toHaveLength(1);

    // Reconfiguring keys must allow an immediate retry, not wait out the TTL
    metadataPage = VALID_METADATA_PAGE;
    configureServer({ cookies: 'test-cookie-value', hbaKeys: await generateKeys() });

    await fetchApi(testEndpoint, undefined);
    expect(metadataRequests).toHaveLength(2);
    expect(apiRequestHeaders[1].get('x-bound-auth-token')).toBeTruthy();
  });

  test('configureServer wires hbaKeys to the HBA client and clearServerConfig removes them', async () => {
    const keys = await generateKeys();
    configureServer({ hbaKeys: keys });

    expect(hbaClient.suppliedCryptoKeyPair).toBe(keys);

    clearServerConfig();
    expect(hbaClient.suppliedCryptoKeyPair).toBeUndefined();
  });
});

describe('per-cookie HBA keys', () => {
  let signSpy: jest.SpyInstance;

  beforeEach(() => {
    metadataPage = VALID_METADATA_PAGE;
    signSpy = jest.spyOn(crypto.subtle, 'sign');
  });

  afterEach(() => {
    signSpy.mockRestore();
  });

  function signedKeys(): Set<CryptoKey> {
    return new Set(signSpy.mock.calls.map((call) => call[1] as CryptoKey));
  }

  test('signs each request with the key pair matching the selected cookie', async () => {
    const keysA = await generateKeys();
    const keysB = await generateKeys();
    configureServer({
      cookies: ['cookie-a', 'cookie-b'],
      cookieRotation: 'round-robin',
      hbaKeys: [keysA, keysB],
    });

    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(apiRequestHeaders).toHaveLength(2);
    expect(apiRequestHeaders[0].get('x-bound-auth-token')).toBeTruthy();
    expect(apiRequestHeaders[1].get('x-bound-auth-token')).toBeTruthy();
    expect(signedKeys()).toEqual(new Set([keysA.privateKey, keysB.privateKey]));
  });

  test('a null entry sends no BAT for that cookie while keyed cookies still sign', async () => {
    const keysA = await generateKeys();
    configureServer({
      cookies: ['cookie-a', 'cookie-b'],
      cookieRotation: 'round-robin',
      hbaKeys: [keysA, null],
    });

    await fetchApi(testEndpoint, undefined); // cookie-a
    await fetchApi(testEndpoint, undefined); // cookie-b

    expect(apiRequestHeaders[0].get('x-bound-auth-token')).toBeTruthy();
    expect(apiRequestHeaders[1].get('x-bound-auth-token')).toBeNull();
    expect(signedKeys()).toEqual(new Set([keysA.privateKey]));
  });

  test('throws when the key array length does not match the cookie pool', async () => {
    const keysA = await generateKeys();
    expect(() =>
      configureServer({
        cookies: ['cookie-a', 'cookie-b'],
        hbaKeys: [keysA],
      }),
    ).toThrow(/hbaKeys/);
  });

  test('per-cookie clients share one metadata lookup', async () => {
    configureServer({
      cookies: ['cookie-a', 'cookie-b'],
      cookieRotation: 'round-robin',
      hbaKeys: [await generateKeys(), await generateKeys()],
    });

    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(metadataRequests).toHaveLength(1);
  });

  test('reconfiguring without hbaKeys drops per-cookie keys instead of misaligning them', async () => {
    configureServer({
      cookies: ['cookie-a', 'cookie-b'],
      cookieRotation: 'round-robin',
      hbaKeys: [await generateKeys(), await generateKeys()],
    });

    // New pool, no keys: the old per-cookie keys belong to other sessions
    // and must not be used to sign.
    configureServer({ cookies: ['cookie-c', 'cookie-d'], cookieRotation: 'round-robin' });

    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(apiRequestHeaders[0].get('x-bound-auth-token')).toBeNull();
    expect(apiRequestHeaders[1].get('x-bound-auth-token')).toBeNull();
    expect(signedKeys().size).toBe(0);
    expect(getServerConfig().hbaKeys).toBeUndefined();
  });

  test('changeHBAKeys replaces per-cookie keys with one pair for all requests', async () => {
    configureServer({
      cookies: ['cookie-a', 'cookie-b'],
      cookieRotation: 'round-robin',
      hbaKeys: [await generateKeys(), await generateKeys()],
    });

    const globalKeys = await generateKeys();
    changeHBAKeys(globalKeys);

    await fetchApi(testEndpoint, undefined);
    await fetchApi(testEndpoint, undefined);

    expect(apiRequestHeaders[0].get('x-bound-auth-token')).toBeTruthy();
    expect(apiRequestHeaders[1].get('x-bound-auth-token')).toBeTruthy();
    expect(signedKeys()).toEqual(new Set([globalKeys.privateKey]));
  });

  test('clearServerConfig removes per-cookie keys and getServerConfig reports them', async () => {
    const pool = [await generateKeys(), await generateKeys()];
    configureServer({ cookies: ['cookie-a', 'cookie-b'], hbaKeys: pool });

    expect(getServerConfig().hbaKeys).toEqual(pool);

    clearServerConfig();
    expect(getServerConfig().hbaKeys).toBeUndefined();

    await fetchApi(testEndpoint, undefined);
    expect(apiRequestHeaders[0].get('x-bound-auth-token')).toBeNull();
  });
});
