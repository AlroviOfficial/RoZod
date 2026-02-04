import { z } from 'zod';
import { Cache, ChromeStore, LocalStorageStore, MemoryStore } from './cache';
import { HBAClient } from 'roblox-bat';
import {
  type ParsedChallenge,
  type AnyError,
  parseChallengeHeaders,
  parseBEDEV1Error,
  parseBEDEV2Error,
  GENERIC_CHALLENGE_ID_HEADER,
  GENERIC_CHALLENGE_METADATA_HEADER,
  GENERIC_CHALLENGE_TYPE_HEADER,
} from 'parse-roblox-errors';
export type { AnyError } from 'parse-roblox-errors';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type RequestFormat = 'json' | 'text' | 'form-data';

type SerializationMethod = Record<string, { style?: string; explode?: boolean }>;

type EndpointBase = {
  method: RequestMethod;
  path: string;
  baseUrl: string;
  serializationMethod?: SerializationMethod;
  requestFormat?: RequestFormat;
  errors?: {
    status: number;
    description?: string;
  }[];
};

export type EndpointSchema = EndpointBase & {
  parameters?: any;
  body?: any;
  response: any;
};

/**
 * This is a hack to allow us to show the parameters and response types of an endpoint
 * as the inferred types of the parameters and response properties.
 */
export type EndpointGeneric<T, U, E> = EndpointBase & {
  parameters?: T;
  body?: E;
  response: U;
};

// Infer zod object to include optional properties
type InferZodObjectOptional<T extends z.ZodRawShape> = {
  [K in keyof T]: T[K] extends z.ZodOptional<any> | z.ZodDefault<any> ? K : never;
}[keyof T];

type InferZodObjectRequired<T extends z.ZodRawShape> = {
  [K in keyof T]: T[K] extends z.ZodOptional<any> | z.ZodDefault<any> ? never : K;
}[keyof T];

type Merge<T, U> = T & U extends object ? { [K in keyof (T & U)]: (T & U)[K] } : T & U;

type InferNonEmpty<T extends Record<string, z.Schema<any>>> = Merge<
  { [K in InferZodObjectRequired<T>]: z.infer<T[K]> },
  { [K in InferZodObjectOptional<T>]?: z.infer<T[K]> }
>;

const endpoint = <
  T extends Record<string, z.Schema<any>>,
  U extends z.ZodTypeAny,
  E extends z.ZodTypeAny | undefined = undefined,
>(
  endpoint: EndpointGeneric<T, U, E>,
): EndpointGeneric<InferNonEmpty<T>, z.infer<U>, E extends z.ZodTypeAny ? z.infer<E> : undefined> => {
  return endpoint as any;
};

// Extract the parameter, and also include the body as a parameter, if it exists. Parameters shouldn't be undefined if body exists
// true only when T is exactly undefined (not when T is a union including undefined)
type IsExactlyUndefined<T> = [T] extends [undefined] ? ([undefined] extends [T] ? true : false) : false;

type ExtractParams<S extends EndpointGeneric<any, any, any>> = S['parameters'] extends undefined
  ? IsExactlyUndefined<S['body']> extends true
    ? undefined
    : { body: S['body'] }
  : IsExactlyUndefined<S['body']> extends true
    ? S['parameters']
    : S['parameters'] & { body: S['body'] };

type ExtractResponse<S extends EndpointGeneric<any, any, any>> = S['response'];

function extractDefaultValues<S extends EndpointSchema>(endpoint: S): Partial<ExtractParams<S>> {
  const defaultValues: Partial<ExtractParams<S>> = {};

  type ParamKey = keyof S['parameters'];
  const paramKeys = Object.keys(endpoint.parameters || {}) as ParamKey[];

  for (const key of paramKeys) {
    const schema = endpoint.parameters?.[key as string];
    if (schema instanceof z.ZodDefault) {
      (defaultValues as Record<string, unknown>)[key as string] = schema._zod.def.defaultValue;
    }
  }

  return defaultValues;
}

type RetryOptions = {
  retries?: number;
  retryDelay?: number;
};

type ErrorOptions = {
  throwOnError?: boolean;
};

type CacheOptions = {
  cacheTime?: number;
  cacheKey?: string;
  cacheType?: 'memory' | 'local' | 'chrome';
};

type RequestOptions<R = boolean> = RequestInit & RetryOptions & ErrorOptions & CacheOptions & { returnRaw?: R };

// A helper function to serialize a value into a query parameter
function serializeQueryParam(key: string, value: any, serializationMethod?: SerializationMethod) {
  const mapStr = (v: any, joiner: string) => v.map(String).join(joiner);

  if (!serializationMethod?.[key]) {
    return Array.isArray(value) ? mapStr(value, ',') : String(value);
  }

  const { style, explode } = serializationMethod[key];
  if (!Array.isArray(value) || !style) {
    return String(value);
  }

  const joinTbl: Record<string, string> = {
    form: ',',
    spaceDelimited: ' ',
    pipeDelimited: '|',
  };

  const joiner = joinTbl[style] ?? ',';
  return explode ? mapStr(value, `&${key}=`) : mapStr(value, joiner);
}

function prepareRequestUrl<S extends EndpointSchema>(endpoint: S, extendedParams: ExtractParams<S> | undefined) {
  let processedPath = endpoint.path;
  const queryParts: string[] = [];
  const usedPathParams: Set<string> = new Set();
  const paramsObject = (extendedParams ?? {}) as Record<string, any>;

  // First pass: identify path parameters
  for (const key in paramsObject) {
    if (!Object.hasOwn(paramsObject, key)) continue;
    if (key === 'body') continue;

    const value = paramsObject[key];
    const pathParamPattern = new RegExp(`:${key}`);

    // Check if this is a path parameter
    if (pathParamPattern.test(processedPath)) {
      processedPath = processedPath.replace(pathParamPattern, String(value));
      usedPathParams.add(key);
    }
  }

  // Second pass: add remaining parameters as query parameters
  for (const key in paramsObject) {
    if (!Object.hasOwn(paramsObject, key)) continue;
    if (key === 'body' || usedPathParams.has(key)) continue;

    const value = paramsObject[key];
    const serializationMethod = endpoint.serializationMethod?.[key];

    // Handle exploded arrays by creating separate query params for each element
    if (Array.isArray(value) && serializationMethod?.explode) {
      for (const item of value) {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
      }
    } else {
      const serializedValue = serializeQueryParam(key, value, endpoint.serializationMethod);
      if (serializedValue !== undefined) {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(serializedValue)}`);
      }
    }
  }

  const query = queryParts.length > 0 ? '?' + queryParts.join('&') : '';

  return endpoint.baseUrl + processedPath + query;
}

function prepareRequestBody<S extends EndpointSchema>(
  method: string,
  requestFormat: string,
  body: S['body'],
  headers: Headers,
): string {
  if (method !== 'GET' && requestFormat === 'json') {
    body = JSON.stringify(body);
    headers.set('content-type', 'application/json');
  }

  return body;
}

const onRobloxSite = 'document' in globalThis && globalThis.location.href.includes('.roblox.com');
export const hbaClient = new HBAClient({
  onSite: onRobloxSite,
});

// ============================================================================
// Server/Node.js Configuration
// ============================================================================

/**
 * Default user agents pool - common browser user agents for server-side requests.
 * These help avoid rate limiting and blocks when making requests from Node.js.
 */
const DEFAULT_USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
];

export type PoolRotation = 'none' | 'random' | 'round-robin';

/**
 * Event data passed to the cookie refresh callback when Roblox rotates a cookie.
 */
export type CookieRefreshEvent = {
  /** The old cookie value that was used in the request */
  oldCookie: string;
  /** The new cookie value received from Roblox */
  newCookie: string;
  /** The index in the cookie pool that was updated (0 for single cookie, should not be -1 in normal operation) */
  poolIndex: number;
};

/**
 * Callback function invoked when Roblox rotates a .ROBLOSECURITY cookie.
 * Use this to persist the new cookie value to your storage (env vars, database, etc.).
 *
 * @param event - Contains the old cookie, new cookie, and pool index
 * @returns void or Promise<void>
 *
 * @example
 * ```ts
 * configureServer({
 *   cookies: process.env.ROBLOX_COOKIE,
 *   onCookieRefresh: async (event) => {
 *     // Update your environment variable or database
 *     await updateDatabaseCookie(event.newCookie);
 *     console.log('Cookie rotated! Old cookie index:', event.poolIndex);
 *   }
 * });
 * ```
 */
export type CookieRefreshCallback = (event: CookieRefreshEvent) => void | Promise<void>;

export type ServerConfig = {
  /**
   * Pool of .ROBLOSECURITY cookie values (without the cookie name prefix).
   * Can be a single string or an array for multiple accounts.
   * Used for classic Roblox web API authentication.
   */
  cookies?: string | string[];
  /**
   * How to select cookies from the pool.
   * - 'none': Use the first cookie only (default for single cookie)
   * - 'random': Pick a random cookie per request
   * - 'round-robin': Cycle through cookies sequentially
   * Default: 'round-robin' when multiple cookies provided, 'none' for single cookie
   */
  cookieRotation?: PoolRotation;
  /**
   * OpenCloud API key for apis.roblox.com endpoints.
   * Automatically applied as 'x-api-key' header for OpenCloud requests.
   */
  cloudKey?: string;
  /**
   * Custom user agents pool. If not provided, uses built-in defaults.
   * Set to empty array to disable user agent injection.
   */
  userAgents?: string[];
  /**
   * How to select user agents from the pool.
   * - 'none': Use first/consistent UA for the session
   * - 'random': Pick a random UA per request
   * - 'round-robin': Cycle through UAs sequentially
   * Default: 'none'
   */
  userAgentRotation?: PoolRotation;
  /**
   * Callback invoked when Roblox rotates a .ROBLOSECURITY cookie.
   * Roblox is gradually implementing cookie rotation for security.
   * Use this callback to persist the new cookie value to your storage.
   *
   * The internal cookie pool is automatically updated, so you only need
   * this callback if you want to persist the new cookie across restarts.
   *
   * @example
   * ```ts
   * configureServer({
   *   cookies: process.env.ROBLOX_COOKIE,
   *   onCookieRefresh: async ({ oldCookie, newCookie, poolIndex }) => {
   *     await db.updateCookie(poolIndex, newCookie);
   *     console.log('Cookie rotated for account', poolIndex);
   *   }
   * });
   * ```
   */
  onCookieRefresh?: CookieRefreshCallback;
};

type ServerConfigInternal = ServerConfig & {
  _cookieIndex: number;
  _userAgentIndex: number;
  _sessionUserAgent?: string;
  _sessionCookie?: string;
};

const serverConfig: ServerConfigInternal = {
  _cookieIndex: 0,
  _userAgentIndex: 0,
};

/**
 * Configures RoZod for server/Node.js environments.
 * Sets default cookies and user-agents that will be automatically applied to all requests.
 *
 * @param config The server configuration options.
 * @example
 * ```ts
 * // Single account
 * configureServer({ cookies: '_|WARNING:-DO-NOT-SHARE-THIS...' });
 *
 * // Multiple accounts with round-robin rotation (default)
 * configureServer({
 *   cookies: [
 *     '_|WARNING:-DO-NOT-SHARE-THIS-1...',
 *     '_|WARNING:-DO-NOT-SHARE-THIS-2...',
 *     '_|WARNING:-DO-NOT-SHARE-THIS-3...',
 *   ],
 * });
 *
 * // Multiple accounts with random selection
 * configureServer({
 *   cookies: ['cookie1', 'cookie2', 'cookie3'],
 *   cookieRotation: 'random',
 * });
 *
 * // With custom user agents and rotation
 * configureServer({
 *   cookies: ['...'],
 *   userAgents: ['MyBot/1.0', 'MyBot/2.0'],
 *   userAgentRotation: 'round-robin',
 * });
 *
 * // Disable user agent injection
 * configureServer({ cookies: '...', userAgents: [] });
 * ```
 */
export function configureServer(config: ServerConfig): void {
  serverConfig.cookies = config.cookies;
  serverConfig.cookieRotation = config.cookieRotation;
  serverConfig.cloudKey = config.cloudKey;
  serverConfig.userAgents = config.userAgents;
  serverConfig.userAgentRotation = config.userAgentRotation;
  serverConfig.onCookieRefresh = config.onCookieRefresh;
  // Reset indices and session values when config changes
  serverConfig._cookieIndex = 0;
  serverConfig._userAgentIndex = 0;
  serverConfig._sessionUserAgent = undefined;
  serverConfig._sessionCookie = undefined;
}

/**
 * Clears the server configuration.
 */
export function clearServerConfig(): void {
  serverConfig.cookies = undefined;
  serverConfig.cookieRotation = undefined;
  serverConfig.cloudKey = undefined;
  serverConfig.userAgents = undefined;
  serverConfig.userAgentRotation = undefined;
  serverConfig.onCookieRefresh = undefined;
  serverConfig._cookieIndex = 0;
  serverConfig._userAgentIndex = 0;
  serverConfig._sessionUserAgent = undefined;
  serverConfig._sessionCookie = undefined;
}

/**
 * Gets the current server configuration (read-only copy, excluding internal state).
 */
export function getServerConfig(): Readonly<ServerConfig> {
  return {
    cookies: serverConfig.cookies,
    cookieRotation: serverConfig.cookieRotation,
    cloudKey: serverConfig.cloudKey,
    userAgents: serverConfig.userAgents,
    userAgentRotation: serverConfig.userAgentRotation,
    onCookieRefresh: serverConfig.onCookieRefresh,
  };
}

function selectFromPool<T>(
  pool: T[],
  rotation: PoolRotation,
  indexKey: '_cookieIndex' | '_userAgentIndex',
  sessionKey: '_sessionCookie' | '_sessionUserAgent',
): T | undefined {
  if (pool.length === 0) return undefined;
  if (pool.length === 1) return pool[0];

  switch (rotation) {
    case 'random':
      return pool[Math.floor(Math.random() * pool.length)];

    case 'round-robin': {
      const index = serverConfig[indexKey];
      serverConfig[indexKey] = (index + 1) % pool.length;
      return pool[index];
    }

    case 'none':
    default: {
      // Use consistent value for the session
      const cached = serverConfig[sessionKey] as T | undefined;
      if (cached !== undefined) return cached;
      const selected = pool[0];
      (serverConfig[sessionKey] as T) = selected;
      return selected;
    }
  }
}

type CookieSelection = { cookie: string; index: number } | undefined;

/**
 * Selects a cookie from the pool and returns both the cookie value and its index.
 * This allows proper tracking for concurrent request scenarios.
 */
function getServerCookieWithIndex(): CookieSelection {
  const cookies = serverConfig.cookies;
  if (!cookies) return undefined;

  const cookiePool = Array.isArray(cookies) ? cookies : [cookies];
  if (cookiePool.length === 0) return undefined;

  // Default rotation: round-robin for multiple cookies, none for single
  const defaultRotation: PoolRotation = cookiePool.length > 1 ? 'round-robin' : 'none';
  const rotation = serverConfig.cookieRotation ?? defaultRotation;

  let cookie: string | undefined;
  let indexUsed: number;

  if (cookiePool.length === 1) {
    cookie = cookiePool[0];
    indexUsed = 0;
  } else {
    switch (rotation) {
      case 'random': {
        indexUsed = Math.floor(Math.random() * cookiePool.length);
        cookie = cookiePool[indexUsed];
        break;
      }
      case 'round-robin': {
        indexUsed = serverConfig._cookieIndex;
        serverConfig._cookieIndex = (indexUsed + 1) % cookiePool.length;
        cookie = cookiePool[indexUsed];
        break;
      }
      case 'none':
      default: {
        // Use consistent value for the session
        if (serverConfig._sessionCookie !== undefined) {
          cookie = serverConfig._sessionCookie;
          indexUsed = cookiePool.indexOf(cookie);
          if (indexUsed === -1) indexUsed = 0;
        } else {
          cookie = cookiePool[0];
          indexUsed = 0;
          serverConfig._sessionCookie = cookie;
        }
        break;
      }
    }
  }

  return cookie ? { cookie, index: indexUsed } : undefined;
}

function getServerUserAgent(): string | undefined {
  const userAgents = serverConfig.userAgents ?? DEFAULT_USER_AGENTS;
  if (userAgents.length === 0) return undefined;

  const rotation = serverConfig.userAgentRotation ?? 'none';
  return selectFromPool(userAgents, rotation, '_userAgentIndex', '_sessionUserAgent');
}

/**
 * Extracts the .ROBLOSECURITY cookie value from a Set-Cookie header.
 * Returns undefined if no .ROBLOSECURITY cookie is found.
 */
function extractRoblosecurityFromSetCookie(setCookieHeader: string | null): string | undefined {
  if (!setCookieHeader) return undefined;

  // Match .ROBLOSECURITY cookie value - handles both with and without _| prefix
  const match = setCookieHeader.match(/\.ROBLOSECURITY=(_\|[^|]+\|_)?([^;]+)/);
  if (match) {
    // Return the full cookie value (prefix + actual value if prefix exists, or just the value)
    return match[1] ? match[1] + match[2] : match[2];
  }
  return undefined;
}

/**
 * Updates a cookie in the internal pool and session cache.
 * @internal
 */
function updateCookieInPool(oldCookie: string, newCookie: string, poolIndex: number): void {
  const cookies = serverConfig.cookies;
  if (!cookies) return;

  if (Array.isArray(cookies)) {
    if (poolIndex >= 0 && poolIndex < cookies.length) {
      cookies[poolIndex] = newCookie;
    }
  } else {
    serverConfig.cookies = newCookie;
  }

  // Also update session cookie if using 'none' rotation
  if (serverConfig._sessionCookie === oldCookie) {
    serverConfig._sessionCookie = newCookie;
  }
}

/**
 * Invokes the onCookieRefresh callback if configured.
 * Errors are caught and logged to prevent breaking the request flow.
 * @internal
 */
async function invokeRefreshCallback(oldCookie: string, newCookie: string, poolIndex: number): Promise<void> {
  if (!serverConfig.onCookieRefresh) return;

  try {
    await serverConfig.onCookieRefresh({ oldCookie, newCookie, poolIndex });
  } catch {
    // Don't let callback errors break the request flow
    // Log a generic message to avoid leaking potentially sensitive data from user errors
    console.error('RoZod: Error in onCookieRefresh callback');
  }
}

/**
 * Handles cookie rotation by checking response headers for a new .ROBLOSECURITY cookie.
 * If a new cookie is detected, updates the internal pool and invokes the callback.
 *
 * @param response - The fetch response to check for Set-Cookie headers
 * @param usedCookie - The cookie that was used for this specific request (for concurrent request safety)
 */
async function handleCookieRotation(response: Response, usedCookie?: CookieSelection): Promise<void> {
  // Only process if we know which cookie was used for this request
  if (!usedCookie) return;

  // Check for Set-Cookie header with new .ROBLOSECURITY
  const setCookieHeaders = response.headers.get('set-cookie');
  if (!setCookieHeaders) return;

  const newCookie = extractRoblosecurityFromSetCookie(setCookieHeaders);
  if (!newCookie) return;

  // Check if cookie actually changed (rotation occurred)
  if (newCookie === usedCookie.cookie) return;

  // Update the internal cookie pool and invoke callback
  updateCookieInPool(usedCookie.cookie, newCookie, usedCookie.index);
  await invokeRefreshCallback(usedCookie.cookie, newCookie, usedCookie.index);
}

/**
 * Updates a specific cookie in the cookie pool by index.
 * Useful for manually updating cookies when you receive rotation events through other means.
 *
 * @param index - The index in the cookie pool to update (0 for single cookie)
 * @param newCookie - The new cookie value
 * @returns true if the cookie was updated, false if the index was invalid
 *
 * @example
 * ```ts
 * // Update the first (or only) cookie
 * updateCookie(0, 'new_cookie_value');
 *
 * // Update a specific account in a pool
 * updateCookie(2, 'new_cookie_for_account_3');
 * ```
 */
export function updateCookie(index: number, newCookie: string): boolean {
  const cookies = serverConfig.cookies;
  if (!cookies) return false;

  if (Array.isArray(cookies)) {
    if (index >= 0 && index < cookies.length) {
      const oldCookie = cookies[index];
      cookies[index] = newCookie;
      // Update session cookie if it matches the old value (for 'none' rotation mode)
      if (serverConfig._sessionCookie === oldCookie) {
        serverConfig._sessionCookie = newCookie;
      }
      return true;
    }
    return false;
  } else {
    if (index === 0) {
      const oldCookie = serverConfig.cookies;
      serverConfig.cookies = newCookie;
      // Update session cookie if it matches the old value (for 'none' rotation mode)
      if (serverConfig._sessionCookie === oldCookie) {
        serverConfig._sessionCookie = newCookie;
      }
      return true;
    }
    return false;
  }
}

/**
 * Gets the current cookie values from the pool.
 * Useful for debugging or persisting all current cookie values.
 *
 * @returns Array of current cookie values, or empty array if none configured
 */
export function getCookies(): string[] {
  const cookies = serverConfig.cookies;
  if (!cookies) return [];
  return Array.isArray(cookies) ? [...cookies] : [cookies];
}

/**
 * Result of a manual cookie refresh operation.
 */
export type RefreshCookieResult = {
  success: boolean;
  /** The new cookie value if refresh was successful */
  newCookie?: string;
  /** Error message if refresh failed */
  error?: string;
  /** The index in the cookie pool that was refreshed */
  poolIndex: number;
};

/**
 * Proactively refreshes a cookie session using Roblox's session refresh endpoint.
 * This creates a new session and invalidates the old one, returning the new cookie.
 *
 * Use this to manually trigger cookie rotation before the automatic rotation kicks in,
 * or to refresh cookies on a schedule to ensure they don't expire.
 *
 * This function uses the library's internal fetch mechanism, which includes:
 * - Automatic CSRF token handling
 * - Hardware-backed authentication (HBA) signatures
 * - Generic challenge handling (if configured)
 *
 * @param cookieIndex - Index in the cookie pool to refresh (default: 0). Ignored if using single cookie.
 * @returns Result object with success status and new cookie value if successful
 *
 * @example
 * ```ts
 * // Refresh the default/first cookie
 * const result = await refreshCookie();
 * if (result.success) {
 *   console.log('New cookie:', result.newCookie);
 *   // Persist the new cookie to your storage
 *   await db.updateCookie(result.poolIndex, result.newCookie);
 * }
 *
 * // Refresh a specific cookie in the pool
 * const result = await refreshCookie(2); // Refresh third account
 *
 * // Refresh all cookies in a pool
 * const cookies = getCookies();
 * for (let i = 0; i < cookies.length; i++) {
 *   const result = await refreshCookie(i);
 *   if (result.success) {
 *     await db.updateCookie(i, result.newCookie);
 *   }
 * }
 * ```
 */
export async function refreshCookie(cookieIndex: number = 0): Promise<RefreshCookieResult> {
  const cookies = serverConfig.cookies;
  if (!cookies) {
    return { success: false, error: 'No cookies configured', poolIndex: cookieIndex };
  }

  const cookiePool = Array.isArray(cookies) ? cookies : [cookies];
  if (cookieIndex < 0 || cookieIndex >= cookiePool.length) {
    return { success: false, error: `Invalid cookie index: ${cookieIndex}`, poolIndex: cookieIndex };
  }

  const cookieToRefresh = cookiePool[cookieIndex];

  try {
    // Use the internal fetch which handles CSRF, HBA, and challenges automatically
    // We manually set the cookie header to bypass automatic cookie selection from the pool
    const response = await fetch(
      'https://auth.roblox.com/v1/session/refresh',
      {
        method: 'POST',
        headers: {
          cookie: `.ROBLOSECURITY=${cookieToRefresh}`,
        },
        credentials: 'include',
      },
      undefined, // challengeData
      0, // csrfRetries
      0, // challengeRetries
      { cookie: cookieToRefresh, index: cookieIndex }, // pass specific cookie for rotation tracking
    );

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      return {
        success: false,
        error: `Session refresh failed: ${response.status} ${errorText}`,
        poolIndex: cookieIndex,
      };
    }

    // Extract the new cookie from Set-Cookie header
    const setCookieHeader = response.headers.get('set-cookie');
    const newCookie = extractRoblosecurityFromSetCookie(setCookieHeader);

    if (!newCookie) {
      return {
        success: false,
        error: 'No new cookie received from session refresh',
        poolIndex: cookieIndex,
      };
    }

    // Update internal pool and invoke callback using shared helpers
    // Note: handleCookieRotation in fetch() may have already done this if the cookie changed,
    // but we call it again to ensure consistency in case the response was cached or the cookie
    // in the response matches the old cookie exactly (rare edge case)
    updateCookieInPool(cookieToRefresh, newCookie, cookieIndex);
    await invokeRefreshCallback(cookieToRefresh, newCookie, cookieIndex);

    return { success: true, newCookie, poolIndex: cookieIndex };
  } catch (error) {
    return {
      success: false,
      error: `Network error during refresh: ${error instanceof Error ? error.message : String(error)}`,
      poolIndex: cookieIndex,
    };
  }
}

/**
 * Applies server defaults (user-agent, API key) to request headers WITHOUT touching cookies.
 * Used when a specific cookie is being used (e.g., refreshCookie or retry with specific cookie).
 */
function applyServerDefaultsWithoutCookie(headers: Headers, url: string): void {
  // Only apply in non-browser environments
  if (onRobloxSite) return;

  // OpenCloud endpoints are on apis.roblox.com AND contain /cloud/ in the path
  const isOpenCloud = url.includes('apis.roblox.com') && (url.includes('/cloud/') || url.includes('/cloud?'));

  // Apply OpenCloud API key for /cloud/ endpoints
  if (isOpenCloud && serverConfig.cloudKey && !headers.has('x-api-key')) {
    headers.set('x-api-key', serverConfig.cloudKey);
  }

  // Apply user agent if not already set
  if (!headers.has('user-agent')) {
    const userAgent = getServerUserAgent();
    if (userAgent) {
      headers.set('user-agent', userAgent);
    }
  }
}

/**
 * Applies server defaults (cookie, user-agent, API key) to request headers.
 * Returns the cookie selection used for this request (for concurrent request tracking).
 */
function applyServerDefaults(headers: Headers, url: string): CookieSelection {
  // Only apply in non-browser environments
  if (onRobloxSite) return undefined;

  // OpenCloud endpoints are on apis.roblox.com AND contain /cloud/ in the path
  // (apis.roblox.com/cloud/... for v1, apis.roblox.com/cloud/v2/... for v2)
  // Note: apis.roblox.com also hosts cookie-based APIs that don't use /cloud/
  const isOpenCloud = url.includes('apis.roblox.com') && (url.includes('/cloud/') || url.includes('/cloud?'));

  // Apply OpenCloud API key for /cloud/ endpoints
  if (isOpenCloud && serverConfig.cloudKey && !headers.has('x-api-key')) {
    headers.set('x-api-key', serverConfig.cloudKey);
  }

  // Apply cookie if configured and not already set (for non-OpenCloud requests)
  let cookieSelection: CookieSelection;
  if (!isOpenCloud && !headers.has('cookie')) {
    cookieSelection = getServerCookieWithIndex();
    if (cookieSelection) {
      headers.set('cookie', `.ROBLOSECURITY=${cookieSelection.cookie}`);
    }
  }

  // Apply user agent if not already set
  if (!headers.has('user-agent')) {
    const userAgent = getServerUserAgent();
    if (userAgent) {
      headers.set('user-agent', userAgent);
    }
  }

  return cookieSelection;
}

// ============================================================================

const getSHA256Hash = async (input: string) => {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map((item) => item.toString(16).padStart(2, '0')).join('');
  return hash;
};

const csrfAllowedMethods = new Set(['post', 'patch', 'delete', 'put']);

let handleGenericChallengeFn:
  | ((challenge: ParsedChallenge) => Promise<ParsedChallenge | undefined> | ParsedChallenge | undefined)
  | undefined;

/**
 * Allows you to set the function that will be used to handle Roblox generic challenges, i.e. captchas, two-step verification.
 * @param fn The function to use.
 */
export function setHandleGenericChallenge(fn: typeof handleGenericChallengeFn) {
  handleGenericChallengeFn = fn;
}

const csrfTokenMap: Record<string, string> = {};
const MAX_CSRF_RETRIES = 3;
const MAX_CHALLENGE_RETRIES = 3;

async function fetch(
  url: string,
  info?: RequestInit,
  challengeData?: ParsedChallenge,
  csrfRetries: number = 0,
  challengeRetries: number = 0,
  cookieUsed?: CookieSelection,
): Promise<Response> {
  const headers = new Headers(info?.headers);

  // Apply server defaults (cookie, user-agent, API key) for Node.js environments
  // If cookieUsed is provided, we use that specific cookie instead of selecting from pool
  let cookieSelection: CookieSelection;
  if (cookieUsed) {
    // Use the provided cookie, but still apply other defaults (user agent, API key)
    cookieSelection = cookieUsed;
    applyServerDefaultsWithoutCookie(headers, url);
  } else {
    // Normal flow: apply all defaults including cookie selection
    cookieSelection = applyServerDefaults(headers, url);
  }

  if (!onRobloxSite) {
    hbaClient.isAuthenticated = headers.get('cookie')?.includes('.ROBLOSECURITY');
  }
  const setHeaders = await hbaClient.generateBaseHeaders(
    url,
    info?.method,
    info?.credentials === 'include',
    info?.body,
  );
  for (const key in setHeaders) {
    headers.set(key, setHeaders[key]);
  }

  if (challengeData) {
    headers.set(GENERIC_CHALLENGE_TYPE_HEADER, challengeData.challengeType);
    headers.set(GENERIC_CHALLENGE_ID_HEADER, challengeData.challengeId);
    headers.set(GENERIC_CHALLENGE_METADATA_HEADER, challengeData.challengeBase64Metadata);
  }

  let csrfKey: string = 'false';
  if (info?.method && csrfAllowedMethods.has(info.method.toLowerCase())) {
    // Temp i guess? RoZod isn't built for something like this. so we grab the .ROBLOSECURITY and hash it before setting it to object.
    if (headers.get('cookie')?.includes('.ROBLOSECURITY')) {
      const cookieRegex = /\.ROBLOSECURITY=(_\|.+\|_)?(.+?)(;|$| )/;
      const parsedCookieValue = cookieRegex.exec(headers.get('cookie')!)?.[2];
      if (parsedCookieValue) {
        csrfKey = await getSHA256Hash(parsedCookieValue);
      }
    } else if (info.credentials === 'include') {
      csrfKey = 'true';
    }

    if (csrfTokenMap[csrfKey]) {
      headers.set('x-csrf-token', csrfTokenMap[csrfKey]);
    }
  }

  const res = await globalThis.fetch(url, {
    ...info,
    headers,
  });

  // Handle cookie rotation from response headers (pass the specific cookie used for this request)
  await handleCookieRotation(res, cookieSelection);

  if (res.headers.has('x-csrf-token')) {
    csrfTokenMap[csrfKey] = res.headers.get('x-csrf-token')!;

    if (csrfRetries < MAX_CSRF_RETRIES) {
      return fetch(url, info, challengeData, csrfRetries + 1, challengeRetries, cookieSelection);
    }
  } else if (handleGenericChallengeFn) {
    const challenge = parseChallengeHeaders(res.headers);
    if (challenge && challengeRetries < MAX_CHALLENGE_RETRIES) {
      const data = await handleGenericChallengeFn(challenge);
      if (data) {
        return fetch(url, info, data, csrfRetries, challengeRetries + 1, cookieSelection);
      }
    }
  }

  return res;
}

/**
 * Allows you to change the Crypto Key pair used by the internal hardware-based authentication signatures. This should only be used in a NodeJS context.
 *
 * @param keys The crypto key pair.
 */
export function changeHBAKeys(keys?: CryptoKeyPair) {
  hbaClient.suppliedCryptoKeyPair = keys;
}
async function handleRetryFetch(
  url: string,
  requestOptions: RequestOptions,
  retries: number,
  retryDelay: number,
  body?: string,
  method?: string,
) {
  let response: Response | undefined = undefined;

  while (response === undefined) {
    try {
      response = await fetch(url, {
        method,
        body,
        ...requestOptions,
      });
      break;
    } catch (error) {
      if (retries <= 0) {
        throw error;
      }
      retries--;
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  return response;
}

const localStorageCache = new Cache(new LocalStorageStore());
const chromeStorageCache = new Cache(new ChromeStore());
const cache = new Cache(new MemoryStore());

interface TypedJsonResponse<T> extends Response {
  json: () => Promise<T>;
}

/**
 * Fetches the data from the given endpoint and returns it.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params The parameters to pass to the endpoint.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The response from the endpoint.
 */
// Overloads for returnRaw: presence of returnRaw: true is required
async function fetchApi<S extends EndpointSchema>(
  endpoint: S,
  params: ExtractParams<S>,
  requestOptions: Omit<RequestOptions<true>, 'returnRaw'> & { returnRaw: true },
): Promise<TypedJsonResponse<ExtractResponse<S>>>;
async function fetchApi<S extends EndpointSchema>(
  endpoint: S & { parameters: undefined },
  params: ExtractParams<S> | undefined,
  requestOptions: Omit<RequestOptions<true>, 'returnRaw'> & { returnRaw: true },
): Promise<TypedJsonResponse<ExtractResponse<S>>>;

// Overloads for throwOnError: true (and not returnRaw)
async function fetchApi<S extends EndpointSchema>(
  endpoint: S,
  params: ExtractParams<S>,
  requestOptions: Omit<RequestOptions<false>, 'throwOnError' | 'returnRaw'> & { throwOnError: true; returnRaw?: false },
): Promise<ExtractResponse<S>>;
async function fetchApi<S extends EndpointSchema>(
  endpoint: S & { parameters: undefined },
  params: ExtractParams<S> | undefined,
  requestOptions: Omit<RequestOptions<false>, 'throwOnError' | 'returnRaw'> & { throwOnError: true; returnRaw?: false },
): Promise<ExtractResponse<S>>;

// Default overloads (no returnRaw and throwOnError not true): may return AnyError
async function fetchApi<S extends EndpointSchema>(
  endpoint: S,
  params: ExtractParams<S>,
  requestOptions?: Omit<RequestOptions<false>, 'returnRaw'> & { returnRaw?: false },
): Promise<ExtractResponse<S> | AnyError>;
async function fetchApi<S extends EndpointSchema>(
  endpoint: S & { parameters: undefined },
  params?: ExtractParams<S>,
  requestOptions?: Omit<RequestOptions<false>, 'returnRaw'> & { returnRaw?: false },
): Promise<ExtractResponse<S> | AnyError>;

/**
 * Fetches the data from the given endpoint and returns it.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params Optional parameters to pass to the endpoint.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The response from the endpoint.
 */
// Back-compat generic signature (less precise)
async function fetchApi<S extends EndpointSchema, R extends boolean = false>(
  endpoint: S,
  params: ExtractParams<S> | undefined,
  requestOptions?: RequestOptions<R>,
): Promise<R extends true ? TypedJsonResponse<ExtractResponse<S>> : ExtractResponse<S> | AnyError>;

/**
 * Fetches the data from the given endpoint and returns it.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params The parameters to pass to the endpoint.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The response from the endpoint.
 */
async function fetchApi<S extends EndpointSchema, R extends boolean = false>(
  endpoint: S,
  params?: ExtractParams<S>,
  requestOptions: RequestOptions<R> = {},
): Promise<R extends true ? TypedJsonResponse<ExtractResponse<S>> : ExtractResponse<S> | AnyError> {
  const { method, requestFormat = 'json' } = endpoint;
  const defaultValues = extractDefaultValues(endpoint);
  const extendedParams = { ...defaultValues, ...params } as ExtractParams<S>;

  // Merge default request options with provided options
  const mergedRequestOptions = {
    mode: 'cors' as RequestMode,
    credentials: 'include' as RequestCredentials,
    ...requestOptions,
  };

  const headers = new Headers(mergedRequestOptions.headers);

  const url = prepareRequestUrl(endpoint, extendedParams);
  const body = prepareRequestBody(method, requestFormat, params?.body, headers);

  const cacheKey = mergedRequestOptions.cacheKey;

  let cacheToUse: typeof Cache.prototype;
  if (mergedRequestOptions.cacheType === 'local') {
    cacheToUse = localStorageCache;
  } else if (mergedRequestOptions.cacheType === 'chrome') {
    cacheToUse = chromeStorageCache;
  } else {
    cacheToUse = cache;
  }

  const cachedResponse = cacheKey && (await cacheToUse.get('rozod_cache:' + cacheKey));
  if (cachedResponse) {
    return cachedResponse;
  }

  const retries = mergedRequestOptions.retries ?? 0;
  const retryDelay = mergedRequestOptions.retryDelay ?? 0;

  const response = await handleRetryFetch(
    url,
    {
      ...mergedRequestOptions,
      headers,
    },
    retries,
    retryDelay,
    body,
    method,
  );

  if (mergedRequestOptions.returnRaw) {
    return response;
  }

  // Parse and return structured AnyError for non-OK responses
  if (!response.ok) {
    const baseLower = (endpoint.baseUrl ?? '').toLowerCase();
    const isRobloxDomain = baseLower.includes('roblox.com');

    let parsedError: AnyError;
    if (isRobloxDomain) {
      const useV2 = baseLower.includes('apis.roblox.com');
      const parsedErrors = await (useV2 ? parseBEDEV2Error(response) : parseBEDEV1Error(response));
      parsedError = Array.isArray(parsedErrors)
        ? (parsedErrors[0] ?? { message: 'Unknown error' })
        : (parsedErrors as unknown as AnyError);
    } else {
      // Generic fallback for non-roblox domains: best-effort textual message
      try {
        const contentType = response.headers.get('content-type') ?? '';
        if (contentType.includes('application/json')) {
          const json: any = await response.json();
          const jsonMessage = typeof json?.message === 'string' ? json.message : JSON.stringify(json);
          parsedError = { message: jsonMessage };
        } else {
          const text = await response.text();
          parsedError = { message: text?.slice(0, 1000) || response.statusText || `HTTP ${response.status}` };
        }
      } catch {
        parsedError = { message: response.statusText || `HTTP ${response.status}` };
      }
    }

    if (mergedRequestOptions.throwOnError === true) {
      throw new Error(parsedError.userFacingMessage ?? parsedError.message);
    }

    return parsedError as any;
  }

  const responseFormat = response.headers.get('content-type')?.includes('application/json') ? 'json' : 'text';

  if (response.ok && mergedRequestOptions.cacheTime && cacheKey) {
    const responseClone = response.clone();
    const cacheTime = mergedRequestOptions.cacheTime;
    setTimeout(() => {
      cacheToUse.delete('rozod_cache:' + cacheKey);
    }, cacheTime);
    cacheToUse.set(
      'rozod_cache:' + cacheKey,
      responseFormat === 'json' ? await responseClone.json() : await responseClone.text(),
      cacheTime,
    );
  }

  const successPayload =
    responseFormat === 'json'
      ? ((await response.json()) as ExtractResponse<S>)
      : ((await response.text()) as unknown as ExtractResponse<S>);

  return successPayload as any;
}

export function isAnyErrorResponse<T>(value: T | AnyError): value is AnyError;
export function isAnyErrorResponse<T>(value: T[] | AnyError): value is AnyError;
export function isAnyErrorResponse(value: unknown): value is AnyError {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate['message'] === 'string';
}

/**
 * Fetches the data from the given endpoint, but splits the request into multiple requests if the specified parameter is larger than max specified.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params The parameters to pass to the endpoint.
 * @param max The maximum number of items to pass to the endpoint.
 * @param transform A function that accepts the endpoint response and transforms it into the desired type.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The transformed response from the endpoint.
 * @example
 * ```ts
 * const data = await fetchApiSplit(getV1gamesicons, { universeIds: [1, 2, 3, 4, 5] }, { universeIds: 100 }, (response) => response.data);
 * console.log(data); // [[{ "targetId": 0, "state": "Completed", "imageUrl": "..." }], ...]
 * ```
 */
async function fetchApiSplit<S extends EndpointSchema, T = ExtractResponse<S>>(
  endpoint: S,
  params: ExtractParams<S>,
  max?: Partial<{ [K in keyof ExtractParams<S>]: number }>,
  transform: (response: ExtractResponse<S>) => T = (response: ExtractResponse<S>) => response as unknown as T,
  requestOptions?: RequestOptions,
): Promise<T[] | AnyError> {
  const fetchTransformed = async (transformparams: ExtractParams<S>) => {
    const response = await fetchApi(endpoint, transformparams, requestOptions);
    if (isAnyErrorResponse(response)) return response;
    return transform ? transform(response as ExtractResponse<S>) : (response as T);
  };

  if (!max) {
    const single = await fetchTransformed(params);
    if (isAnyErrorResponse(single)) return single;
    return [single as T];
  }

  const splitParams: ExtractParams<S>[] = [];
  const paramsObj = (params ?? {}) as Record<string, unknown>;
  for (const key in max) {
    if (!Object.hasOwn(max, key) || !Object.hasOwn(paramsObj, key)) {
      continue;
    }
    const maxItems = max[key as keyof ExtractParams<S>];
    const items = paramsObj[key];
    if (Array.isArray(items)) {
      for (let i = 0; i < items.length; i = i + (maxItems || 1)) {
        const itemsSubset = items.slice(i, i + (maxItems || 1));
        const newParams = { ...paramsObj, [key]: itemsSubset } as ExtractParams<S>;
        splitParams.push(newParams);
      }
    }
  }

  if (splitParams.length === 0) {
    const single = await fetchTransformed(params);
    if (isAnyErrorResponse(single)) return single;
    return [single as T];
  }

  const promises = splitParams.map(fetchTransformed);
  const allResults = await Promise.all(promises);
  const firstError = allResults.find((r) => isAnyErrorResponse(r));
  if (firstError) return firstError;
  return allResults as T[];
}

/**
 * Fetches all pages of results for the given endpoint and parameters.
 *
 * @param endpoint The endpoint to fetch.
 * @param initialParams The initial parameters to use for the endpoint.
 * @param requestOptions The options to use when making requests.
 * @param limit The maximum number of pages to fetch.
 * @returns An array of all results.
 */
async function fetchApiPages<S extends EndpointSchema>(
  endpoint: S,
  initialParams: ExtractParams<S>,
  requestOptions?: RequestOptions,
  limit: number = 1000,
): Promise<Array<ExtractResponse<S>> | AnyError> {
  const allResults: Array<ExtractResponse<S>> = [];

  for await (const response of fetchApiPagesGenerator(endpoint, initialParams, requestOptions, limit)) {
    if (response === null || response === undefined) {
      break;
    }
    if (isAnyErrorResponse(response)) {
      return response;
    }

    const { nextPageCursor, ...rest } = response as ExtractResponse<S> & { nextPageCursor?: string | null };
    allResults.push(rest as ExtractResponse<S>);

    if (allResults.length >= limit || nextPageCursor === null || nextPageCursor === undefined) {
      break;
    }
  }

  return allResults;
}

/**
 * Fetches all pages of results for the given endpoint and parameters.
 * This is a generator function that yields each page as it is fetched.
 *
 * @param endpoint The endpoint to fetch.
 * @param initialParams The initial parameters to use for the endpoint.
 * @param requestOptions The options to use when making requests.
 * @param limit The maximum number of pages to fetch.
 * @returns An array of all results.
 * @yields The next page of results.
 * @example
 * ```ts
 * const pages = fetchApiPagesGenerator(getV1badgesicons, { badgeIds: [1, 2, 3] });
 * for await (const page of pages) {
 *    console.log(page.data);
 * }
 * ```
 */
async function* fetchApiPagesGenerator<S extends EndpointSchema, R extends boolean>(
  endpoint: S,
  initialParams: ExtractParams<S>,
  requestOptions?: RequestOptions<R>,
  limit: number = 1000,
): AsyncGenerator<ExtractResponse<S> | AnyError, void, unknown> {
  let cursor = '';

  while (true) {
    const paramsWithCursor = { ...initialParams, cursor } as unknown as ExtractParams<S>;
    const response = await fetchApi(endpoint, paramsWithCursor, requestOptions);

    yield response;

    if (isAnyErrorResponse(response)) {
      break;
    }

    // response is successful here
    const nextCursor = (response as ExtractResponse<S> & { nextPageCursor?: string | null }).nextPageCursor;
    if (nextCursor === null || nextCursor === undefined || limit-- <= 0) {
      break;
    }

    cursor = nextCursor as string;
  }
}

export { fetchApi, fetchApiSplit, fetchApiPages, fetchApiPagesGenerator, ExtractResponse, ExtractParams, endpoint };
