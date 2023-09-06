<h1 align="center" style="height: 200; overflow: 'hidden'">
    <img src="https://github.com/alexop1000/RoZod/assets/46445843/1c2a6cb5-b1d6-4784-b084-0679d81109c3" alt="RoZod" width="400" />
    <br>

</h1>

<h4 align="center">A TypeScript package designed to simplify fully type-safe data fetching from the Roblox API.</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/rozod?style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm" src="https://img.shields.io/npm/v/rozod?style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm" src="https://img.shields.io/npm/dt/rozod?style=for-the-badge"></a>
</p>
<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#credits">Credits</a> •
  <a href="#disclaimer">Disclaimer</a>
</p>

---

## About
`RoZod` is a TypeScript package designed to simplify fetching data from the Roblox API. It provides the functions `fetchApi`, `fetchApiPages`, and `fetchApliSplit`. 
These allow you to get fully typesafe data from the Roblox API with minimal effort. You can also make custom endpoints to use in any context.

## Features

- Type-safe API requests and responses
- Automatic validation of request and response data
- Helper functions for paginated requests and splitting requests

## Installation

To install the package, run the following command:

```bash
npm install rozod
```

---

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

### Custom Endpoints
To create a custom endpoint, define an EndpointSchema object and export it. Here's an example of an endpoint from tradesv1.ts:
```ts
import { z, endpoint } from 'zod';

export const getV1tradesTradeStatusType = endpoint({
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

---

## Credits
This repository is maintained by Alrovi ApS, the company behind RoGold.

## Disclaimer
RoZod is not affiliated with, maintained, authorized, endorsed, or sponsored by Roblox Corporation or any of its affiliates.
