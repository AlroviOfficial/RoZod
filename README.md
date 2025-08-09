<h1 align="center" style="height: 200; overflow: 'hidden'">
    <img src="https://github.com/alexop1000/RoZod/assets/46445843/1c2a6cb5-b1d6-4784-b084-0679d81109c3" alt="RoZod" width="400" />
    <br>
</h1>

<h4 align="center">Type-safe Roblox API and OpenCloud client for TypeScript</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/rozod?style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm" src="https://img.shields.io/npm/v/rozod?style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm" src="https://img.shields.io/npm/dt/rozod?style=for-the-badge"></a>
</p>
<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#usage">Usage</a> •
  <a href="#opencloud">OpenCloud</a> •
  <a href="#credits">Credits</a> •
  <a href="http://rozod.alrovi.com">Documentation</a>
</p>

---

## About

`RoZod` makes working with Roblox APIs simple and type-safe in TypeScript. With **650+ classic Roblox web API endpoints** and **95+ OpenCloud endpoints** (all code-generated from official Roblox documentation), you get comprehensive coverage of virtually every available Roblox API with full type safety.

Perfect for everything from small one-time NodeJS/Bun/Deno scripts to large-scale production applications. RoZod powers [RoGold](https://rogold.live), a browser extension with **800,000+ active users**, handling millions of API requests daily across both frontend extensions and backend workflows.

## Features

- ✨ **Simple Interface** - Easy to understand API with minimal boilerplate
- 🔒 **Type Safety** - Complete TypeScript type safety for requests and responses
- 📚 **750+ Total Endpoints** - 650+ classic web APIs + 95+ OpenCloud APIs, all code-generated from official docs
- 🚀 **Production Ready** - Battle-tested in applications serving 800,000+ users
- 🔄 **Pagination Helpers** - Easy tools for handling paginated responses
- 🔁 **Batch Processing** - Split large requests automatically to avoid API limits
- 🌐 **Universal Runtime Support** - Works seamlessly in NodeJS, Bun, Deno, and browsers
- 🔍 **Custom Endpoints** - Define your own endpoints with full type safety
- 🧩 **Smart Error Handling** - Choose between safe unions or throw-on-error

## Installation

```bash
npm install rozod
# or
yarn add rozod
# or
pnpm add rozod
```

## Quick Start

```ts
import { fetchApi } from 'rozod';
import { getUsersUserdetails } from 'rozod/lib/endpoints/usersv1';

// Fetch user details with full type safety
const userInfo = await fetchApi(getUsersUserdetails, { userIds: [1, 123456] });
if (isAnyErrorResponse(userInfo)) {
  return;
}
console.log(userInfo.data[0].displayName); // Properly typed!
```

## Usage

### Fetch a Single Request

```ts
import { fetchApi } from 'rozod';
import { getGamesIcons } from 'rozod/lib/endpoints/gamesv1';

const response = await fetchApi(getGamesIcons, { universeIds: [1534453623, 65241] });
console.log(response.data);
```

### Handle Paginated Responses

```ts
import { fetchApiPages } from 'rozod';
import { getGroupsGroupidWallPosts } from 'rozod/lib/endpoints/groupsv2';

// Automatically fetches all pages
const allPosts = await fetchApiPages(getGroupsGroupidWallPosts, { groupId: 11479637 });
console.log(`Found ${allPosts.length} wall posts`);
```

### Process Pages One at a Time

```ts
import { fetchApiPagesGenerator } from 'rozod';
import { getGroupsGroupidWallPosts } from 'rozod/lib/endpoints/groupsv2';

// Process pages as they arrive
const pages = fetchApiPagesGenerator(getGroupsGroupidWallPosts, { groupId: 11479637 });
for await (const page of pages) {
  console.log(`Processing page with ${page.data.length} posts`);
  // Do something with this page
}
```

### Batch Processing Large Requests

```ts
import { fetchApiSplit } from 'rozod';
import { getGamesIcons } from 'rozod/lib/endpoints/gamesv1';

// Will automatically split into smaller batches of 100 universeIds per request
const data = await fetchApiSplit(
  getGamesIcons,
  { universeIds: [1, 2, 3, 4, 5 /* many more IDs */] },
  { universeIds: 100 },
);
console.log(data);
```

### Handling Errors

By default, requests return either the success type or a simple `AnyError`. Use the tiny helper to check:

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getGamesIcons } from 'rozod/lib/endpoints/gamesv1';

const res = await fetchApi(getGamesIcons, { universeIds: [1534453623] });
if (isAnyErrorResponse(res)) {
  console.error(res.message);
} else {
  console.log(res.data);
}
```

Prefer a straight try/catch? Enable throwing:

```ts
try {
  const res = await fetchApi(getGamesIcons, { universeIds: [1534453623] }, { throwOnError: true });
  console.log(res.data);
} catch (err) {
  console.error((err as Error).message);
}
```

Need the raw Response? Use `returnRaw: true`:

```ts
const resp = await fetchApi(getGamesIcons, { universeIds: [1534453623] }, { returnRaw: true });
const json = await resp.json();
```

## OpenCloud

RoZod supports Roblox's newer OpenCloud APIs with the same easy interface:

```ts
import { fetchApi } from 'rozod';
import { v2 } from 'rozod/lib/opencloud';

// Get universe details through OpenCloud
const universeInfo = await fetchApi(v2.getCloudV2UniversesUniverseId, {
  universe_id: '123456789',
});

// Access typed properties
console.log(universeInfo.displayName);
console.log(universeInfo.description);
```

### Access DataStores via OpenCloud

```ts
import { fetchApi } from 'rozod';
import { getCloudV2UniversesUniverseIdDataStoresDataStoreIdEntries } from 'rozod/lib/opencloud/v2/cloud';

// Get DataStore entries with type safety
const dataStoreEntries = await fetchApi(getCloudV2UniversesUniverseIdDataStoresDataStoreIdEntries, {
  universe_id: '123456789',
  data_store_id: 'MyStore',
});
```

## Authentication

RoZod handles Roblox authentication automatically with comprehensive security features:

### Browser Environments

In browsers, authentication works automatically when users are logged into Roblox:

```ts
import { fetchApi } from 'rozod';
import { getUsersUserdetails } from 'rozod/lib/endpoints/usersv1';

// Cookies are sent automatically - no setup required!
const userInfo = await fetchApi(getUsersUserdetails, { userIds: [123456] });
```

### Server Environments (Node.js/Bun/Deno)

For server environments, you need to provide the `.ROBLOSECURITY` cookie manually:

```ts
import { fetchApi } from 'rozod';
import { getUsersUserdetails } from 'rozod/lib/endpoints/usersv1';

const userInfo = await fetchApi(
  getUsersUserdetails, 
  { userIds: [123456] },
  {
    headers: {
      'Cookie': '.ROBLOSECURITY=your_cookie_here'
    }
  }
);
```

### Security Features

RoZod automatically handles advanced Roblox security requirements:

- **✅ XCSRF Token Management** - Automatic CSRF token retrieval and caching
- **✅ Hardware-Backed Authentication** - Full HBA signature support  
- **✅ Challenge Handling** - Captchas, 2FA, and other authentication challenges
- **✅ Cookie Security** - Secure cookie parsing and validation

### Challenge Handling

For advanced authentication challenges (captchas, 2FA), set up a global challenge handler:

```ts
import { setHandleGenericChallenge } from 'rozod';

setHandleGenericChallenge(async (challenge) => {
  // Handle captcha, 2FA, or other challenges
  // Return the challenge response or undefined to skip
  if (challenge.challengeType === 'captcha') {
    const solution = await solveCaptcha(challenge.challengeId);
    return {
      challengeType: challenge.challengeType,
      challengeId: challenge.challengeId,
      challengeBase64Metadata: solution
    };
  }
});
```

### Hardware-Backed Authentication (Advanced)

For Node.js environments requiring custom HBA keys:

```ts
import { changeHBAKeys } from 'rozod';

// Provide your own crypto key pair for HBA signatures
const keyPair = await crypto.subtle.generateKey(
  { name: 'ECDSA', namedCurve: 'P-256' },
  true,
  ['sign', 'verify']
);

changeHBAKeys(keyPair);
```

### OpenCloud Authentication

OpenCloud APIs require API keys in headers:

```ts
import { fetchApi } from 'rozod';
import { v2 } from 'rozod/lib/opencloud';

const universeInfo = await fetchApi(
  v2.getCloudV2UniversesUniverseId,
  { universe_id: '123456789' },
  {
    headers: {
      'x-api-key': 'your_opencloud_api_key_here'
    }
  }
);
```

## Custom Endpoints

You can define custom endpoints for your specific needs:

```ts
import { z } from 'zod';
import { endpoint, fetchApi } from 'rozod';

const myCustomEndpoint = endpoint({
  method: 'GET',
  path: '/v1/custom/:customId',
  baseUrl: 'https://my-api.example.com',
  parameters: {
    customId: z.string(),
    optional: z.string().optional(),
  },
  response: z.object({
    success: z.boolean(),
    data: z.array(z.string()),
  }),
});

const response = await fetchApi(myCustomEndpoint, { customId: '123' });
```

## Credits

This repository is maintained by Alrovi ApS, the company behind RoGold.

## Disclaimer

RoZod is not affiliated with, maintained, authorized, endorsed, or sponsored by Roblox Corporation or any of its affiliates.
