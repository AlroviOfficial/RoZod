# RoZod

RoZod is a TypeScript package designed to simplify fetching data from the Roblox API. It provides a set of functions that automatically validate request and response data using the Zod validation library. This allows you to get fully typesafe data from the Roblox API with minimal effort.

## Features

- Type-safe API requests and responses
- Automatic validation of request and response data
- Helper functions for paginated requests and splitting requests

## Installation

To install the package, run the following command:

```bash
npm install rozod
```

## Usage
First, import the necessary functions and an example endpoint from the RoZod package:

```ts
import { fetchApi, fetchApiSplit, fetchApiPages, fetchApiPagesGenerator } from 'rozod';
import { getTradesTradestatustype } from 'rozod/lib/endpoints/tradesv1';
```

### Simple API Request

To make a simple API request, use the `fetchApi` function, and any endpoint from our exports:

```ts
const response = await fetchApi(getTradesTradestatustype, { tradeStatusType: 1 });
console.log(response);
```

### Split API Request
To split a request into multiple requests based on specified parameters, use the `fetchApiSplit` function:

```ts
const data = await fetchApiSplit(getGamesIcons, { universeIds: [1534453623, 65241, ...] }, { universeIds: 100 });
console.log(data);
```

### Fetching All Pages
To fetch all pages of a paginated endpoint, use the `fetchApiPages` function:

```ts
const allPages = await fetchApiPages(getGroupsGroupidWallPosts, { groupId: 11479637 });
console.log(allPages);
```
### Fetching Pages with a Generator
To fetch pages one at a time using an async generator, use the `fetchApiPagesGenerator` function:

```ts
const pages = fetchApiPagesGenerator(getGroupsGroupidWallPosts, { groupId: 11479637 });
for await (const page of pages) {
    console.log(page);
}
```

## Custom Endpoints
To create a custom endpoint, define an EndpointSchema object and export it. Here's an example of an endpoint from tradesv1.ts:
```ts
import { z } from 'zod';

export const getV1tradesTradeStatusType = {
  method: 'get' as const,
  path: '/v1/trades/:tradeStatusType', // Path parameters are optional
  baseUrl: 'https://trades.roblox.com',
  requestFormat: 'json' as const,
  parameters: {
    tradeStatusType: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  }, // Parameters are optional
  response: ..., // Zod schema
};
```
You can then use the endpoint with the `fetchApi` function:
```ts
const response = await fetchApi(getV1tradesTradeStatusType, { tradeStatusType: 1 });
console.log(response);
```

## Disclaimer
RoZod is not affiliated with, maintained, authorized, endorsed, or sponsored by Roblox Corporation or any of its affiliates.
