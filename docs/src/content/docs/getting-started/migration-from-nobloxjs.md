---
title: Coming from noblox.js
description: Migration guide for noblox.js users switching to RoZod
---

If you're coming from noblox.js, this guide will help you understand how RoZod differs and how to migrate your code.

## Key Differences

| | noblox.js | RoZod |
|---|---|---|
| **Language** | JavaScript | TypeScript-first |
| **API style** | High-level wrapper functions | Direct endpoint calls with `fetchApi` |
| **Type safety** | Partial (DefinitelyTyped) | Full — every parameter and response is typed via Zod |
| **Auth** | `setCookie()` | `configureServer({ cookies: '...' })` |
| **Error handling** | Throws errors | Returns `AnyError` union (or throws with `throwOnError`) |
| **OpenCloud** | Not supported | 115+ OpenCloud endpoints built-in |
| **Endpoint coverage** | Subset of Roblox APIs | 810+ endpoints, auto-generated from official docs |

## Authentication

```ts
// noblox.js
const noblox = require('noblox.js');
await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS...');

// RoZod
import { configureServer } from 'rozod';
configureServer({ cookies: '_|WARNING:-DO-NOT-SHARE-THIS...' });
```

RoZod also supports cookie pools with rotation — see [Authentication](/guides/authentication/).

## Making API Calls

noblox.js provides high-level wrapper functions. RoZod gives you direct access to every Roblox API endpoint with full type safety.

### Getting User Info

```ts
// noblox.js
const user = await noblox.getPlayerInfo(1);
console.log(user.username);

// RoZod
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

const user = await fetchApi(getUsersUserid, { userId: 1 });
if (!isAnyErrorResponse(user)) {
  console.log(user.name);
}
```

### Getting Group Info

```ts
// noblox.js
const group = await noblox.getGroup(1);

// RoZod
import { getGroupsGroupid } from 'rozod/lib/endpoints/groupsv1';

const group = await fetchApi(getGroupsGroupid, { groupId: 1 });
```

### Getting Group Members

```ts
// noblox.js
const members = await noblox.getPlayers(groupId);

// RoZod — with pagination
import { fetchApiPages } from 'rozod';
import { getGroupsGroupidUsers } from 'rozod/lib/endpoints/groupsv1';

const pages = await fetchApiPages(
  getGroupsGroupidUsers,
  { groupId: 1, limit: 100 },
);
```

### Changing a User's Role

```ts
// noblox.js
await noblox.setRank(groupId, userId, roleId);

// RoZod
import { patchGroupsGroupidUsersUserid } from 'rozod/lib/endpoints/groupsv1';

await fetchApi(patchGroupsGroupidUsersUserid, {
  groupId: 1,
  userId: 123,
  body: { roleId: 456 },
});
```

## Error Handling

noblox.js throws errors. RoZod returns a union type by default:

```ts
// noblox.js
try {
  const user = await noblox.getPlayerInfo(1);
} catch (err) {
  console.error(err);
}

// RoZod (default — union return)
const user = await fetchApi(getUsersUserid, { userId: 1 });
if (isAnyErrorResponse(user)) {
  console.error(user.message);
  console.error(user.code);       // error code (string or number, if available)
  console.error(user.field);       // field that caused the error (if available)
} else {
  console.log(user.name);
}

// RoZod (throw mode — closer to noblox.js behavior)
try {
  const user = await fetchApi(getUsersUserid, { userId: 1 }, { throwOnError: true });
  console.log(user.name);
} catch (err) {
  console.error(err.message);
}
```

## Finding Endpoints

In noblox.js, you'd look for a wrapper function like `noblox.getGroup()`. In RoZod, you import the endpoint directly from the corresponding service module.

**Naming convention:** `{method}{PathSegments}` in camelCase.

- `GET /v1/users/:userId` → `getUsersUserid` from `usersv1`
- `POST /v1/usernames/users` → `postUsernamesUsers` from `usersv1`
- `GET /v1/groups/:groupId` → `getGroupsGroupid` from `groupsv1`

Browse the full list in the [Classic API Reference](/reference/classic/account-information-v1/).

## What RoZod Doesn't Have

RoZod is a lower-level library than noblox.js. It doesn't include:

- **Combined/convenience functions** — noblox.js has functions like `getPlayers()` that internally call multiple endpoints and merge results. In RoZod, you compose these yourself using `fetchApi` + `fetchApiPages`.
- **Built-in rate limiting** — You manage rate limiting yourself (or use retry options).
- **Event polling** — noblox.js has event listener functions (e.g., `onShout`, `onJoinRequest`) that poll for changes. RoZod doesn't include these, but you can build them with `setInterval` + `fetchApi`.

The trade-off is full type safety, complete endpoint coverage, and a transparent API where you always know exactly which Roblox endpoint you're calling.
