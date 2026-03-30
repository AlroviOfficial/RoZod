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

`RoZod` makes working with Roblox APIs simple and type-safe in TypeScript. With **695+ classic Roblox web API endpoints** and **115+ OpenCloud endpoints** (all code-generated from official Roblox documentation), you get comprehensive coverage of virtually every available Roblox API with full type safety.

Perfect for everything from small one-time NodeJS/Bun/Deno scripts to large-scale production applications. RoZod powers [RoGold](https://rogold.live), a browser extension with **800,000+ active users**, handling millions of API requests daily across both frontend extensions and backend workflows.

## Features

- ✨ **Simple Interface** - Easy to understand API with minimal boilerplate
- 🔒 **Type Safety** - Complete TypeScript type safety for requests and responses
- 📚 **810+ Total Endpoints** - 695+ classic web APIs + 115+ OpenCloud APIs, all code-generated from official docs
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
bun add rozod
# or
yarn add rozod
# or
pnpm add rozod
```

## Quick Start

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

// Fetch user details with full type safety
const userInfo = await fetchApi(getUsersUserid, { userId: 1 });
if (isAnyErrorResponse(userInfo)) {
  return;
}
console.log(userInfo.displayName); // Properly typed!
```

## Usage

### Fetch a Single Request

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getGamesIcons } from 'rozod/lib/endpoints/thumbnailsv1';

const response = await fetchApi(getGamesIcons, { universeIds: [1534453623, 65241] });
if (!isAnyErrorResponse(response)) {
  console.log(response.data);
}
```

### Handle Paginated Responses

```ts
import { fetchApiPages, isAnyErrorResponse } from 'rozod';
import { getGroupsGroupidWallPosts } from 'rozod/lib/endpoints/groupsv2';

// Automatically fetches all pages
const pages = await fetchApiPages(getGroupsGroupidWallPosts, { groupId: 11479637 });
if (!isAnyErrorResponse(pages)) {
  console.log(`Fetched ${pages.length} pages of wall posts`);
}
```

### Process Pages One at a Time

```ts
import { fetchApiPagesGenerator, isAnyErrorResponse } from 'rozod';
import { getGroupsGroupidWallPosts } from 'rozod/lib/endpoints/groupsv2';

// Process pages as they arrive
const pages = fetchApiPagesGenerator(getGroupsGroupidWallPosts, { groupId: 11479637 });
for await (const page of pages) {
  if (isAnyErrorResponse(page)) break;
  console.log(`Processing page with ${page.data.length} posts`);
  // Do something with this page
}
```

### Batch Processing Large Requests

```ts
import { fetchApiSplit } from 'rozod';
import { getGamesIcons } from 'rozod/lib/endpoints/thumbnailsv1';

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
import { getGamesIcons } from 'rozod/lib/endpoints/thumbnailsv1';

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
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { v2 } from 'rozod/lib/opencloud';

// Get universe details through OpenCloud
const universeInfo = await fetchApi(v2.getCloudV2UniversesUniverseId, {
  universe_id: '123456789',
});

if (!isAnyErrorResponse(universeInfo)) {
  // Access typed properties
  console.log(universeInfo.displayName);
  console.log(universeInfo.description);
}
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
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

// Cookies are sent automatically - no setup required!
const userInfo = await fetchApi(getUsersUserid, { userId: 123456 });
```

### Server Environments (Node.js/Bun/Deno)

For server environments, use `configureServer()` to set up authentication once:

```ts
import { configureServer, fetchApi } from 'rozod';
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

// Configure once at startup
configureServer({ cookies: 'your_roblosecurity_cookie_here' });

// All subsequent requests automatically include the cookie
const userInfo = await fetchApi(getUsersUserid, { userId: 123456 });
```

#### Multiple Accounts (Cookie Pool)

Use multiple Roblox accounts for load distribution or fallback:

```ts
import { configureServer } from 'rozod';

// Multiple accounts with round-robin rotation (default)
configureServer({
  cookies: [
    'account1_roblosecurity_cookie',
    'account2_roblosecurity_cookie',
    'account3_roblosecurity_cookie',
  ],
});

// Requests automatically cycle through accounts: 1 → 2 → 3 → 1 → 2 → ...
```

#### Rotation Modes

Control how cookies and user agents are selected:

```ts
import { configureServer } from 'rozod';

configureServer({
  cookies: ['cookie1', 'cookie2', 'cookie3'],
  cookieRotation: 'round-robin',  // Cycle sequentially (default for multiple)
  // cookieRotation: 'random',    // Pick randomly per request
  // cookieRotation: 'none',      // Always use first cookie

  userAgents: ['CustomBot/1.0', 'CustomBot/2.0'],  // Optional custom UAs
  userAgentRotation: 'none',      // Consistent per session (default)
  // userAgentRotation: 'random',
  // userAgentRotation: 'round-robin',
});
```

#### User Agent Pool

RoZod includes built-in browser user agents applied automatically in server environments. Customize or disable:

```ts
// Use custom user agents
configureServer({
  cookies: '...',
  userAgents: ['MyBot/1.0', 'MyService/2.0'],
  userAgentRotation: 'round-robin',
});

// Disable user agent injection
configureServer({ cookies: '...', userAgents: [] });
```

#### OpenCloud API Key

For OpenCloud endpoints (`apis.roblox.com`), set your API key once:

```ts
import { configureServer, fetchApi } from 'rozod';
import { v2 } from 'rozod/lib/opencloud';

// Configure OpenCloud API key
configureServer({ cloudKey: 'your_opencloud_api_key_here' });

// All OpenCloud requests automatically include x-api-key header
const universeInfo = await fetchApi(v2.getCloudV2UniversesUniverseId, {
  universe_id: '123456789',
});
```

You can configure both classic API cookies and OpenCloud keys together:

```ts
configureServer({
  cookies: ['account1', 'account2'],  // For classic *.roblox.com APIs
  cloudKey: 'your_opencloud_key',     // For apis.roblox.com
});
```

> **Note:** The API key is only applied to OpenCloud endpoints (URLs containing `/cloud/`). Cookies are applied to all other Roblox APIs, including undocumented cookie-based APIs on `apis.roblox.com`.

#### Configuration Management

```ts
import { configureServer, clearServerConfig, getServerConfig } from 'rozod';

// Check current configuration
const config = getServerConfig();
console.log(config.cookies, config.cloudKey);

// Clear all server configuration
clearServerConfig();
```

#### Manual Headers (Legacy)

You can still pass headers manually per-request if needed:

```ts
const userInfo = await fetchApi(
  getUsersUserid, 
  { userId: 123456 },
  {
    headers: {
      'Cookie': '.ROBLOSECURITY=your_cookie_here'
    }
  }
);
```

> **Note:** Manual headers take precedence over `configureServer()` defaults.

### Security Features

RoZod automatically handles advanced Roblox security requirements:

- **✅ XCSRF Token Management** - Automatic CSRF token retrieval and caching
- **✅ Hardware-Backed Authentication** - Full HBA signature support  
- **✅ Challenge Handling** - Captchas, 2FA, and other authentication challenges
- **✅ Cookie Security** - Secure cookie parsing and validation
- **✅ Cookie Rotation** - Automatic handling of Roblox's cookie rotation

### Cookie Rotation Handling

Roblox is gradually implementing `.ROBLOSECURITY` cookie rotation for improved security. RoZod automatically detects when cookies are rotated and can notify you to persist the new values:

```ts
import { configureServer, refreshCookie, getCookies } from 'rozod';

configureServer({
  cookies: process.env.ROBLOX_COOKIE,
  onCookieRefresh: async ({ oldCookie, newCookie, poolIndex }) => {
    // Roblox rotated the cookie - persist the new value
    await db.updateCookie(poolIndex, newCookie);
    console.log('Cookie rotated and saved!');
  }
});
```

The internal cookie pool updates automatically, so the callback is only needed if you want to persist cookies across restarts.

You can also proactively refresh cookies before they expire:

```ts
// Refresh on a schedule or before important operations
const result = await refreshCookie(0);
if (result.success) {
  await db.updateCookie(0, result.newCookie);
}

// Utility functions
const allCookies = getCookies();        // Get current cookie values
updateCookie(0, 'new_value');           // Manually update a cookie
```

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
