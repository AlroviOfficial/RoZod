---
title: Batch Requests
description: Splitting large requests to avoid Roblox API limits
---

Some Roblox API endpoints accept arrays of IDs but impose limits on how many you can pass at once. `fetchApiSplit` automatically chunks your request and merges the results.

## Basic Usage

```ts
import { fetchApiSplit, isAnyErrorResponse } from 'rozod';
import { getGamesIcons } from 'rozod/lib/endpoints/thumbnailsv1';

const results = await fetchApiSplit(
  getGamesIcons,
  { universeIds: [1, 2, 3, /* ...hundreds more */ ] },
  { universeIds: 100 }, // split into chunks of 100
  (response) => response.data, // transform each chunk's response
);

if (isAnyErrorResponse(results)) {
  console.error(results.message);
} else {
  // results is T[] — one transformed result per chunk
  const allIcons = results.flat();
  console.log(allIcons);
}
```

## How It Works

1. You specify which top-level parameter to split and the maximum chunk size
2. `fetchApiSplit` divides the array into chunks
3. All chunks are fetched in parallel via `Promise.all`
4. Each response is passed through your optional transform function
5. Results are returned as an array (one entry per chunk)

## Parameters

```ts
fetchApiSplit(
  endpoint,     // The endpoint to fetch
  params,       // Full parameters (with the large array)
  max,          // Object mapping top-level parameter names to max chunk sizes
  transform?,   // Optional function to transform each response
  requestOptions?,
)
```

- **`max`** — An object where keys are top-level parameter names and values are the maximum array length per request. For example, `{ universeIds: 100 }` splits the `universeIds` array into groups of 100. Only works for parameters at the top level of the params object (not nested inside `body`).
- **`transform`** — Optional function that receives each chunk's response and returns the data you want. If omitted, the raw response is returned.

## Example: Multi-Get Thumbnails

```ts
import { fetchApiSplit, isAnyErrorResponse } from 'rozod';
import { getGamesMultigetThumbnails } from 'rozod/lib/endpoints/thumbnailsv1';

const universeIds = [1, 2, 3, /* ...hundreds of IDs */ ];

const results = await fetchApiSplit(
  getGamesMultigetThumbnails,
  { universeIds, countPerUniverse: 1 },
  { universeIds: 100 },
  (response) => response.data,
);

if (!isAnyErrorResponse(results)) {
  const allThumbnails = results.flat();
  console.log(`Fetched thumbnails for ${allThumbnails.length} games`);
}
```

:::note
`fetchApiSplit` only splits top-level parameters. If the array you want to split is nested inside `body` (like for POST endpoints), you'll need to handle chunking manually.
:::

## Error Handling

If any chunk fails, `fetchApiSplit` returns the first error as an `AnyError`. The remaining chunks may still complete (they run in parallel), but only the error is returned.
