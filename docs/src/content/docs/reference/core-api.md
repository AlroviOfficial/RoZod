---
title: Core API
description: Reference for RoZod's exported functions, options, and types
---

Everything exported from the `rozod` package root. For endpoint definitions, see the Classic and OpenCloud reference sections.

## Fetching

### `fetchApi(endpoint, params, requestOptions?)`

Fetches a single endpoint.

```ts
function fetchApi<S>(
  endpoint: S,
  params: ExtractParams<S>,
  requestOptions?: RequestOptions,
): Promise<ExtractResponse<S> | AnyError>;
```

- **`endpoint`** — an endpoint definition (generated or created with [`endpoint()`](#endpointdefinition)).
- **`params`** — path/query parameters plus `body` for endpoints with a request body. Pass `undefined` for endpoints without parameters.
- **`requestOptions`** — see [`RequestOptions`](#requestoptions).

The return type depends on the options:

| Options | Return type |
| --- | --- |
| default | `ExtractResponse<S> \| AnyError` |
| `{ throwOnError: true }` | `ExtractResponse<S>` (throws on error) |
| `{ returnRaw: true }` | `Response` with `json()` typed to the endpoint's response |

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersUserid } from 'rozod/endpoints/usersv1';

const user = await fetchApi(getUsersUserid, { userId: 1 });
if (!isAnyErrorResponse(user)) console.log(user.displayName);
```

### `fetchApiPages(endpoint, initialParams, requestOptions?, limit?)`

Fetches all pages of a cursor-paginated endpoint and returns them as an array. Follows `nextPageCursor` until exhausted or `limit` pages (default `1000`) are fetched. Returns the first `AnyError` encountered, otherwise the array of page responses (with `nextPageCursor` stripped from each page). See the [Pagination guide](/guides/pagination/).

```ts
function fetchApiPages<S>(
  endpoint: S,
  initialParams: ExtractParams<S>,
  requestOptions?: RequestOptions,
  limit?: number,
): Promise<Array<ExtractResponse<S>> | AnyError>;
```

### `fetchApiPagesGenerator(endpoint, initialParams, requestOptions?, limit?)`

Async-generator variant of `fetchApiPages` — yields each page as it arrives instead of collecting them, so large datasets never sit in memory all at once. Yields an `AnyError` (then stops) if a page fails.

```ts
function fetchApiPagesGenerator<S>(
  endpoint: S,
  initialParams: ExtractParams<S>,
  requestOptions?: RequestOptions,
  limit?: number,
): AsyncGenerator<ExtractResponse<S> | AnyError>;
```

### `fetchApiSplit(endpoint, params, max?, transform?, requestOptions?)`

Splits a large array parameter into chunks, fetches all chunks in parallel, and returns one (optionally transformed) result per chunk. Returns the first `AnyError` if any chunk fails. See the [Batch Requests guide](/guides/batch-requests/).

```ts
function fetchApiSplit<S, T = ExtractResponse<S>>(
  endpoint: S,
  params: ExtractParams<S>,
  max?: Partial<Record<keyof ExtractParams<S>, number>>,
  transform?: (response: ExtractResponse<S>) => T,
  requestOptions?: RequestOptions,
): Promise<T[] | AnyError>;
```

- **`max`** — maps top-level parameter names to maximum chunk sizes, e.g. `{ universeIds: 100 }`. Only top-level array parameters can be split (not values nested inside `body`).
- **`transform`** — applied to each chunk's response; defaults to the identity function.

### `fetchApiOperation(endpoint, params, resultSchema?, options?)`

Fires a long-running-operation endpoint and polls the returned `Operation` until it completes, returning the final payload. The result type comes from the endpoint's generated `resultResponse` schema, or from `resultSchema` if provided. Throws on HTTP errors, operation errors, and timeout. See the [Long-Running Operations guide](/guides/long-running-operations/).

```ts
function fetchApiOperation<S>(
  endpoint: S,
  params: ExtractParams<S>,
  resultSchema?: z.ZodTypeAny,
  options?: PollOperationOptions,
): Promise<Result>;
```

### `pollOperation(endpoint, operation, resultSchema?, options?)`

Polls an existing [`Operation`](#operation) until it completes and returns its `response` payload. Returns immediately (no request) when the operation is already `done`.

```ts
function pollOperation<S>(
  endpoint: S,
  operation: Operation,
  resultSchema?: z.ZodTypeAny,
  options?: PollOperationOptions,
): Promise<Result>;
```

#### `PollOperationOptions`

| Option | Default | Description |
| --- | --- | --- |
| `interval` | `1000` | Milliseconds between polls. |
| `timeout` | `30000` | Give up and throw after this many milliseconds. |
| `signal` | – | An `AbortSignal` to cancel the poll. |
| `baseUrl` | endpoint's `baseUrl` | Base URL the operation path resolves against. |
| `pathPrefix` | derived from the endpoint | API-version prefix between base URL and operation path. |
| `requestOptions` | – | Forwarded to each poll request. |

## `RequestOptions`

The third argument to every fetch helper. Extends the standard `RequestInit` (so `headers`, `signal`, `credentials`, etc. all work) with:

| Option | Default | Description |
| --- | --- | --- |
| `throwOnError` | `false` | Throw an `Error` instead of returning `AnyError`. |
| `returnRaw` | `false` | Return the raw `Response` instead of parsing the body. |
| `retries` | `0` | Retry count for network failures and 429/5xx responses (honors `Retry-After`). |
| `retryDelay` | `0` | Milliseconds between retries. |
| `cacheKey` | – | Cache the response under this key. See the [Caching guide](/guides/caching/). |
| `cacheTime` | – | Cache TTL in milliseconds. |
| `cacheType` | `'memory'` | Cache backend: `'memory'`, `'local'`, or `'chrome'`. |

## Endpoints

### `endpoint(definition)`

Creates a custom type-safe endpoint definition usable with every fetch helper. See the [Custom Endpoints guide](/guides/custom-endpoints/).

```ts
import { z } from 'zod';
import { endpoint } from 'rozod';

const myEndpoint = endpoint({
  method: 'GET',                       // 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: '/v1/things/:thingId',         // ':name' segments become path parameters
  baseUrl: 'https://api.example.com',
  parameters: { thingId: z.string() }, // non-path keys become query parameters
  body: z.object({ ... }),             // optional request body schema
  response: z.object({ ... }),         // response schema (type inference only)
  requestFormat: 'json',               // optional: 'json' (default) | 'form-data' | 'text'
  serializationMethod: {},             // optional per-parameter array serialization
  errors: [],                          // optional documented error responses
});
```

## Errors

### `isAnyErrorResponse(value)`

Type guard that narrows a fetch result to `AnyError`. This is the only reliable way to check — it uses an internal Symbol brand rather than duck typing. See the [Error Handling guide](/guides/error-handling/).

```ts
function isAnyErrorResponse<T>(value: T | AnyError): value is AnyError;
```

### `AnyError`

Re-exported from [parse-roblox-errors](https://github.com/RoSeal-Extension/Parse-Roblox-Errors):

```ts
type AnyError = {
  message: string;
  code?: string | number;
  field?: string;
  fieldData?: string;
  userFacingMessage?: string;
  childErrors?: ChildError[];
  hint?: string | null;
};
```

## Server Configuration

See the [Authentication guide](/guides/authentication/) for usage patterns.

### `configureServer(config)`

Sets default credentials and headers applied to all requests in server environments. Calling it again replaces the previous configuration and resets rotation state.

#### `ServerConfig`

| Field | Type | Description |
| --- | --- | --- |
| `cookies` | `string \| string[]` | `.ROBLOSECURITY` value(s) for classic APIs. |
| `cookieRotation` | `PoolRotation` | Cookie selection mode. Default: `'round-robin'` for multiple cookies, `'none'` for one. |
| `cloudKey` | `string` | OpenCloud API key, sent as `x-api-key` on `apis.roblox.com/cloud/...` requests. |
| `userAgents` | `string[]` | Custom user-agent pool. Empty array disables injection; omit for built-in defaults. |
| `userAgentRotation` | `PoolRotation` | User-agent selection mode. Default: `'none'`. |
| `onCookieRefresh` | `CookieRefreshCallback` | Invoked when Roblox rotates a cookie, so you can persist the new value. |
| `hbaKeys` | `CryptoKeyPair \| Array<CryptoKeyPair \| null>` | Session-registered ECDSA P-256 key pair(s) for hardware-backed auth (BAT) signing. An array aligns index-for-index with `cookies` (`null` = no BAT for that cookie) and must be re-passed on every reconfigure. See the [Authentication guide](/guides/authentication/#hardware-backed-authentication-advanced). |

### `getServerConfig()`

Returns a read-only copy of the active `ServerConfig` (internal rotation state excluded).

### `clearServerConfig()`

Removes all configured credentials and resets rotation state.

## Cookie Management

### `getCookies()`

Returns the current cookie pool as a `string[]` (empty if none configured).

### `updateCookie(index, newCookie)`

Replaces the cookie at `index` in the pool. Returns `false` if no cookies are configured or the index is out of range.

### `refreshCookie(cookieIndex?)`

Proactively rotates a cookie via Roblox's session-refresh endpoint. The internal pool is updated and `onCookieRefresh` is invoked on success.

```ts
function refreshCookie(cookieIndex?: number): Promise<RefreshCookieResult>;

type RefreshCookieResult = {
  success: boolean;
  newCookie?: string; // present on success
  error?: string;     // present on failure
  poolIndex: number;
};
```

## Advanced

### `setHandleGenericChallenge(fn)`

Registers a global handler for Roblox authentication challenges (captcha, two-step verification). The handler receives the parsed challenge and returns the solved challenge data — or `undefined` to skip — after which RoZod retries the original request (up to 3 times).

```ts
setHandleGenericChallenge(async (challenge) => {
  // challenge: { challengeType, challengeId, challengeBase64Metadata }
  return solvedChallengeOrUndefined;
});
```

### `changeHBAKeys(keys?)`

Sets the crypto key pair used for hardware-backed authentication signatures (Node.js only). The pair applies to all requests and discards any per-cookie keys configured via `configureServer({ hbaKeys: [...] })`. Call with no arguments to remove the pair, after which requests send no BAT.

```ts
function changeHBAKeys(keys?: CryptoKeyPair): void;
```

## Types

### `Operation`

The envelope returned by long-running OpenCloud endpoints (also exported as the Zod schema `OperationSchema`):

```ts
type Operation = {
  path: string;                     // relative path to poll
  done?: boolean;                   // true once the result is ready
  response?: Record<string, any>;   // final payload, populated when done
  error?: { code?: number; message?: string; details?: any[] };
  metadata?: Record<string, any>;
};
```

### Type utilities

| Type | Description |
| --- | --- |
| `ExtractParams<S>` | The `params` argument type for an endpoint — path/query parameters plus `body` when the endpoint has one. |
| `ExtractResponse<S>` | The success response type for an endpoint. |
| `EndpointSchema` | The general shape of an endpoint definition. |
| `PoolRotation` | `'none' \| 'random' \| 'round-robin'` |
| `CookieRefreshEvent` | `{ oldCookie, newCookie, poolIndex }` — passed to `onCookieRefresh`. |
| `CookieRefreshCallback` | `(event: CookieRefreshEvent) => void \| Promise<void>` |
| `RefreshCookieResult` | Return type of `refreshCookie`. |
