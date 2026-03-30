---
title: Authentication
description: Setting up authentication for classic Roblox APIs and OpenCloud
---

RoZod supports two authentication methods:

- **.ROBLOSECURITY cookies** for classic Roblox web APIs (`*.roblox.com`)
- **API keys** for OpenCloud APIs (`apis.roblox.com/cloud/...`)

## Basic Setup

```ts
import { configureServer } from 'rozod';

// Classic API authentication
configureServer({
  cookies: process.env.ROBLOX_COOKIE,
});

// OpenCloud authentication
configureServer({
  cloudKey: process.env.ROBLOX_CLOUD_KEY,
});

// Both at once
configureServer({
  cookies: process.env.ROBLOX_COOKIE,
  cloudKey: process.env.ROBLOX_CLOUD_KEY,
});
```

RoZod automatically determines which credentials to use based on the endpoint's URL. Classic `*.roblox.com` endpoints get the cookie; OpenCloud `apis.roblox.com/cloud/...` endpoints get the API key.

## Cookie Pools

For high-throughput applications, you can provide multiple cookies and have RoZod rotate between them:

```ts
configureServer({
  cookies: [
    process.env.ROBLOX_COOKIE_1,
    process.env.ROBLOX_COOKIE_2,
    process.env.ROBLOX_COOKIE_3,
  ],
  cookieRotation: 'round-robin', // default for multiple cookies
});
```

### Rotation Modes

| Mode | Behavior |
|------|----------|
| `'none'` | Always use the first cookie. Default for a single cookie. |
| `'round-robin'` | Cycle through cookies sequentially. Default for multiple cookies. |
| `'random'` | Pick a random cookie per request. |

## Cookie Rotation Handling

Roblox may rotate your `.ROBLOSECURITY` cookie at any time. RoZod automatically updates its internal cookie pool when this happens. To persist the new cookie (e.g., to a database), use the `onCookieRefresh` callback:

```ts
configureServer({
  cookies: process.env.ROBLOX_COOKIE,
  onCookieRefresh: async ({ oldCookie, newCookie, poolIndex }) => {
    await db.updateCookie(poolIndex, newCookie);
    console.log('Cookie rotated for account', poolIndex);
  },
});
```

## Manual Cookie Management

```ts
import { getCookies, updateCookie, refreshCookie } from 'rozod';

// Get all cookies in the pool
const cookies = getCookies();

// Update a specific cookie by index
updateCookie(0, 'new-cookie-value');

// Force-refresh a cookie via Roblox's session refresh endpoint
const result = await refreshCookie(0);
if (result.success) {
  console.log('New cookie:', result.newCookie);
}
```

## User Agent Configuration

RoZod automatically applies browser-like user agent strings to server-side requests to avoid blocks. You can customize this:

```ts
configureServer({
  cookies: '...',
  userAgents: ['MyBot/1.0', 'MyBot/2.0'],
  userAgentRotation: 'round-robin',
});

// Disable user agent injection
configureServer({
  cookies: '...',
  userAgents: [],
});
```

## Per-Request Overrides

You can override the configured cookie or API key on individual requests:

```ts
import { fetchApi } from 'rozod';
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

const user = await fetchApi(
  getUsersUserid,
  { userId: 1 },
  {
    headers: {
      Cookie: '.ROBLOSECURITY=specific-cookie-here',
    },
  },
);
```

## CSRF Tokens

RoZod automatically handles CSRF token management for mutating requests (POST, PATCH, PUT, DELETE). If a request fails with a CSRF error, RoZod retries with the new token automatically. No configuration needed.

## Browser Usage

When running in a browser on a `.roblox.com` page, cookies are sent automatically by the browser. You don't need to call `configureServer` — just use `fetchApi` directly.
