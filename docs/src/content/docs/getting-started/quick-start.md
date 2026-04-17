---
title: Quick Start
description: Get up and running with RoZod in minutes
---

## Basic Usage

Every API call in RoZod follows the same pattern:

1. Import an endpoint definition
2. Call `fetchApi` with the endpoint and its parameters
3. Check for errors using `isAnyErrorResponse`

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersUserid } from 'rozod/endpoints/usersv1';

const user = await fetchApi(getUsersUserid, { userId: 1 });

if (isAnyErrorResponse(user)) {
  console.error('Error:', user.message);
} else {
  // `user` is fully typed: { description, created, isBanned, id, name, displayName, ... }
  console.log(`${user.displayName} (@${user.name})`);
}
```

## Server-Side Setup

When running in Node.js, Bun, or Deno, configure authentication before making requests:

```ts
import { configureServer, fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersAuthenticated } from 'rozod/endpoints/usersv1';

// Configure with your .ROBLOSECURITY cookie
configureServer({
  cookies: process.env.ROBLOX_COOKIE,
});

// Authenticated requests now work automatically
const me = await fetchApi(getUsersAuthenticated, undefined);
if (!isAnyErrorResponse(me)) {
  console.log(`Logged in as ${me.name}`);
}
```

## OpenCloud

For OpenCloud APIs, use an API key instead:

```ts
import { configureServer, fetchApi, isAnyErrorResponse } from 'rozod';
import { v1 } from 'rozod/opencloud';

configureServer({
  cloudKey: process.env.ROBLOX_CLOUD_KEY,
});

// List data stores for a universe
const result = await fetchApi(
  v1.datastores.getUniversesUniverseIdDatastores,
  { universeId: 1234567890 },
);

if (!isAnyErrorResponse(result)) {
  console.log(result.data);
}
```

## Endpoints with Parameters

Endpoints that require parameters are fully typed — TypeScript will tell you exactly what's needed:

```ts
import { fetchApi } from 'rozod';
import { postUsernamesUsers } from 'rozod/endpoints/usersv1';

// Look up users by username
const result = await fetchApi(postUsernamesUsers, {
  body: {
    usernames: ['Roblox', 'builderman'],
    excludeBannedUsers: false,
  },
});
```

## Throwing on Error

If you prefer exceptions over union return types, use `throwOnError`:

```ts
try {
  const user = await fetchApi(
    getUsersUserid,
    { userId: 1 },
    { throwOnError: true },
  );
  // `user` is just the response type — no AnyError union
  console.log(user.name);
} catch (error) {
  console.error('Request failed:', error.message);
}
```

## Raw Response

Need access to headers, status codes, or the raw `Response` object?

```ts
const response = await fetchApi(
  getUsersUserid,
  { userId: 1 },
  { returnRaw: true },
);

console.log(response.status); // 200
console.log(response.headers.get('content-type'));

// .json() is typed to the endpoint's response type
const data = await response.json();
console.log(data.name);
```

## Next Steps

- [Authentication](/guides/authentication/) — Cookie pools, OpenCloud keys, cookie rotation
- [Error Handling](/guides/error-handling/) — Understanding Roblox error responses
- [Pagination](/guides/pagination/) — Fetching all pages of results
- [Coming from noblox.js?](/getting-started/migration-from-nobloxjs/) — Migration guide
