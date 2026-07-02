---
title: Custom Endpoints
description: Defining your own type-safe endpoints with the endpoint() helper
---

RoZod ships definitions for 810+ Roblox endpoints, but you can define your own — for undocumented Roblox APIs, your own backend, or any HTTP JSON API — and use them with `fetchApi` and all the other helpers with full type safety.

## Basic Definition

```ts
import { z } from 'zod';
import { endpoint, fetchApi } from 'rozod';

const getWidget = endpoint({
  method: 'GET',
  path: '/v1/widgets/:widgetId',
  baseUrl: 'https://my-api.example.com',
  parameters: {
    widgetId: z.string(),
    verbose: z.boolean().optional(),
  },
  response: z.object({
    id: z.string(),
    name: z.string(),
    tags: z.array(z.string()),
  }),
});

const widget = await fetchApi(getWidget, { widgetId: 'abc' });
// widget is typed as { id: string; name: string; tags: string[] } | AnyError
```

## How Parameters Are Mapped

Each key in `parameters` is matched against the `path`:

- Keys that appear as `:name` segments in the path become **path parameters** (URL-encoded and substituted in).
- All other keys become **query parameters**. Optional parameters that are `undefined` or `null` are omitted from the URL.
- Array values are joined with `,` by default; use `serializationMethod` to control this.

```ts
const searchWidgets = endpoint({
  method: 'GET',
  path: '/v1/widgets',
  baseUrl: 'https://my-api.example.com',
  parameters: {
    ids: z.array(z.number()),
    limit: z.number().optional().default(10),
  },
  serializationMethod: {
    ids: { style: 'form', explode: false }, // ?ids=1,2,3
    // explode: true would produce ?ids=1&ids=2&ids=3
  },
  response: z.object({ data: z.array(z.unknown()) }),
});
```

Parameters declared with `.default(...)` are filled in automatically when you don't pass them.

## Request Bodies

For POST/PUT/PATCH endpoints, declare a `body` schema. It's passed under the `body` key when calling:

```ts
const createWidget = endpoint({
  method: 'POST',
  path: '/v1/widgets',
  baseUrl: 'https://my-api.example.com',
  body: z.object({
    name: z.string(),
    tags: z.array(z.string()),
  }),
  response: z.object({ id: z.string() }),
});

const created = await fetchApi(createWidget, {
  body: { name: 'My Widget', tags: ['new'] },
});
```

The `requestFormat` field controls body encoding:

| Format | Behavior |
| --- | --- |
| `'json'` (default) | `JSON.stringify` with `content-type: application/json` |
| `'form-data'` | Encoded as `FormData` — `Blob` and `string` values appended directly, everything else JSON-stringified |
| `'text'` | Sent as-is |

## Documenting Known Errors

You can attach known error responses for reference (they don't affect runtime behavior):

```ts
const getWidget = endpoint({
  method: 'GET',
  path: '/v1/widgets/:widgetId',
  baseUrl: 'https://my-api.example.com',
  parameters: { widgetId: z.string() },
  response: z.object({ id: z.string() }),
  errors: [
    { status: 404, description: 'Widget not found.' },
  ],
});
```

## Works with Every Helper

Custom endpoints work with the whole toolkit — [pagination](/guides/pagination/), [batching](/guides/batch-requests/), [caching](/guides/caching/), and [long-running operations](/guides/long-running-operations/):

```ts
import { fetchApiPages, fetchApiSplit } from 'rozod';

// Pagination works if your response includes nextPageCursor
const pages = await fetchApiPages(listWidgets, { limit: 100 });

// Batching works on any top-level array parameter
const results = await fetchApiSplit(getWidgets, { ids: manyIds }, { ids: 50 });
```

:::note
Response schemas are used for **type inference only** — RoZod does not validate response bodies at runtime (except for long-running operation results, which are parsed against their result schema).
:::

## Non-Roblox Domains

Custom endpoints aren't limited to Roblox. For non-Roblox domains, error responses are parsed with a best-effort fallback that looks for common fields (`message`, `error`, `error_message`, `detail`) instead of the Roblox error format.

:::caution
In server environments, cookies configured via `configureServer` are attached to every non-OpenCloud request — including custom endpoints on third-party domains. If you mix Roblox endpoints and third-party APIs in the same process, pass an explicit `Cookie` header (even an empty one) in `requestOptions` for third-party requests, or keep the third-party calls on a plain `fetch`.
:::
