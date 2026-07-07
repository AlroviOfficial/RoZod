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

## Configuration Management

Inspect or reset the active server configuration at any time:

```ts
import { configureServer, getServerConfig, clearServerConfig } from 'rozod';

// Read the current configuration (a read-only copy)
const config = getServerConfig();
console.log(config.cookies, config.cloudKey);

// Clear everything — subsequent requests are unauthenticated
clearServerConfig();
```

Calling `configureServer` again replaces the previous configuration and resets rotation state (pool indices and session values).

## Per-Request Overrides

You can override the configured cookie or API key on individual requests:

```ts
import { fetchApi } from 'rozod';
import { getUsersUserid } from 'rozod/endpoints/usersv1';

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

## Challenge Handling

Some authenticated actions trigger a Roblox challenge — a captcha, two-step verification, and similar. Register a global handler to solve them; RoZod automatically retries the original request with your challenge response:

```ts
import { setHandleGenericChallenge } from 'rozod';

setHandleGenericChallenge(async (challenge) => {
  if (challenge.challengeType === 'captcha') {
    const solution = await solveCaptcha(challenge.challengeId);
    return {
      challengeType: challenge.challengeType,
      challengeId: challenge.challengeId,
      challengeBase64Metadata: solution,
    };
  }
  // Return undefined to skip handling — the original error response is returned
});
```

The handler receives the parsed challenge from the response headers and may return the challenge response (synchronously or as a promise) or `undefined` to give up. RoZod retries up to 3 times per request.

## Hardware-Backed Authentication (Advanced)

RoZod generates hardware-backed authentication (HBA) signatures — the `x-bound-auth-token` header — via [roblox-bat](https://github.com/RoSeal-Extension/Roblox-BAT). In a browser on a `.roblox.com` page this is fully automatic: the keys registered by the Roblox site live in IndexedDB.

On a server there is no IndexedDB, so BAT signing is **skipped entirely** unless you supply keys. The keys must be the ECDSA P-256 pair registered when the cookie's session was authenticated — Roblox validates signatures against the session's registered public key, so a freshly generated pair produces tokens Roblox rejects.

Supply keys through `configureServer`:

```ts
import { configureServer } from 'rozod';

// One session, one pair
configureServer({ cookies: cookieA, hbaKeys: keyPairA });

// Cookie pool: keys align index-for-index with the cookies.
// Use null for sessions without a registered key — those requests send no BAT.
configureServer({
  cookies: [cookieA, cookieB, cookieC],
  cookieRotation: 'round-robin',
  hbaKeys: [keyPairA, keyPairB, null],
});
```

The `hbaKeys` array length must match the cookie pool length. Per-cookie keys are bound to the `cookies` passed in the same call: if you call `configureServer` again without `hbaKeys`, they are dropped and requests send no BAT — re-pass the array whenever you reconfigure.

`changeHBAKeys(keyPair)` remains as a lower-level escape hatch: it applies one pair to **all** requests and discards any per-cookie keys. Call it with no arguments to remove the pair.

To decide whether a request needs a BAT, roblox-bat consults Roblox's token metadata page. RoZod fetches that page at most once: successful lookups are cached, failed ones (e.g. a challenge page served to a datacenter IP) are remembered for 5 minutes before retrying, concurrent requests share a single in-flight lookup, and the fetch itself is bounded by a 10-second timeout and sent with your configured user agent.

## Browser Usage

When running in a browser on a `.roblox.com` page, cookies are sent automatically by the browser. You don't need to call `configureServer` — just use `fetchApi` directly.

## What RoZod Handles for You

- **CSRF tokens** — retrieved, cached per account, and retried automatically
- **HBA signatures** — hardware-backed authentication headers generated per request
- **Cookie rotation** — rotated cookies detected and swapped into the pool automatically
- **Challenges** — captcha/2FA responses retried when a handler is registered
- **User agents** — browser-like user agents applied to server-side requests
