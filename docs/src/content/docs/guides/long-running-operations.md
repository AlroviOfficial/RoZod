---
title: Long-Running Operations
description: Polling OpenCloud operations with fetchApiOperation and pollOperation
---

Some OpenCloud endpoints — such as `generateThumbnail` or `generateAsset` — don't return their result directly. Instead they return an `Operation` envelope:

```ts
{
  path: 'users/123/operations/abc', // poll this until the work finishes
  done: false,                      // true once the result is ready
  response: undefined,              // the payload, populated only when done
}
```

When the result isn't already cached by Roblox, `done` is `false` and you have to GET the operation's `path` (against the API's base URL and version prefix) until it flips to `true`. RoZod provides two helpers so you never do this by hand.

## `fetchApiOperation` — Fire and Wait

Calls the endpoint and polls the returned operation to completion, in one line:

```ts
import { fetchApiOperation } from 'rozod';
import { getCloudV2UsersUserIdGenerateThumbnail } from 'rozod/opencloud/v2/cloud';

const { imageUri } = await fetchApiOperation(getCloudV2UsersUserIdGenerateThumbnail, {
  user_id: '123456789',
  shape: 'SQUARE',
  format: 'PNG',
});
```

The result type is inferred automatically from the endpoint's generated `resultResponse` schema, so generated operation endpoints need no extra setup.

## `pollOperation` — Poll an Existing Operation

If you already hold an `Operation` (for example, because you fired the request yourself with `fetchApi`), use `pollOperation` directly:

```ts
import { fetchApi, pollOperation } from 'rozod';
import { getCloudV2UsersUserIdGenerateThumbnail } from 'rozod/opencloud/v2/cloud';

const operation = await fetchApi(
  getCloudV2UsersUserIdGenerateThumbnail,
  { user_id: '123456789', shape: 'SQUARE', format: 'PNG' },
  { throwOnError: true },
);

const { imageUri } = await pollOperation(getCloudV2UsersUserIdGenerateThumbnail, operation);
```

If the operation is already `done`, both helpers return immediately without making an extra request.

## Custom Result Schemas

For custom endpoints, or to override the inferred payload type, pass a Zod schema as the last positional argument before options:

```ts
import { z } from 'zod';

const result = await pollOperation(
  customEndpoint,
  operation,
  z.object({ imageUri: z.string() }),
);
```

Without a schema and without a generated `resultResponse`, the payload is returned as `unknown`.

## Options

Both helpers accept an options object as their final argument:

| Option | Default | Description |
| --- | --- | --- |
| `interval` | `1000` | Milliseconds between polls. |
| `timeout` | `30000` | Give up and throw after this many milliseconds. |
| `signal` | – | An `AbortSignal` to cancel the poll. |
| `baseUrl` | endpoint's `baseUrl` | Override the base URL the operation path resolves against. |
| `pathPrefix` | derived from the endpoint | Override the version prefix (e.g. `/assets/v1` for asset-generation operations). |
| `requestOptions` | – | Forwarded to each poll request (headers such as the API key, retries, credentials). |

```ts
const controller = new AbortController();

const result = await fetchApiOperation(
  getCloudV2UsersUserIdGenerateThumbnail,
  { user_id: '123456789', shape: 'SQUARE', format: 'PNG' },
  {
    interval: 2000,
    timeout: 60000,
    signal: controller.signal,
  },
);
```

## Error Behavior

- If the operation completes with an `error` field, the helpers throw an `Error` with the operation's error message.
- If the operation doesn't complete within `timeout`, the helpers throw.
- Both helpers use `throwOnError: true` internally for the initial request and each poll, so failed HTTP requests throw rather than returning an `AnyError` union.

Wrap calls in `try/catch`:

```ts
try {
  const { imageUri } = await fetchApiOperation(getCloudV2UsersUserIdGenerateThumbnail, {
    user_id: '123456789',
    shape: 'SQUARE',
    format: 'PNG',
  });
} catch (error) {
  console.error('Thumbnail generation failed:', (error as Error).message);
}
```

## How the Poll URL Is Built

The `Operation.path` returned by Roblox is relative (e.g. `users/123/operations/abc`). RoZod resolves it against the originating endpoint's `baseUrl` and derives the version prefix from the endpoint's own path (e.g. `/cloud/v2`). For operations that live under a different prefix — such as asset-generation operations under `/assets/v1` — pass `pathPrefix` explicitly.
