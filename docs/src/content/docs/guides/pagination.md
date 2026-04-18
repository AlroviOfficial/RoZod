---
title: Pagination
description: Fetching all pages of paginated Roblox API responses
---

Many Roblox API endpoints return paginated results with a `nextPageCursor` field. RoZod provides two helpers to handle this automatically.

## `fetchApiPages` — Collect All Pages

Fetches all pages and returns them as an array:

```ts
import { fetchApiPages, isAnyErrorResponse } from 'rozod';
import { getGroupsGroupidUsers } from 'rozod/endpoints/groupsv1';

const pages = await fetchApiPages(
  getGroupsGroupidUsers,
  { groupId: 1, limit: 100 },
);

if (isAnyErrorResponse(pages)) {
  console.error(pages.message);
} else {
  // pages is an array of response objects, one per page
  for (const page of pages) {
    for (const member of page.data) {
      console.log(member.username);
    }
  }
}
```

### Limiting Pages

By default, `fetchApiPages` fetches up to 1000 pages. Pass a limit to cap it:

```ts
const pages = await fetchApiPages(
  getGroupsGroupidUsers,
  { groupId: 1, limit: 100 },
  undefined, // requestOptions
  5,         // fetch at most 5 pages
);
```

## `fetchApiPagesGenerator` — Stream Pages

For large datasets where you don't want to hold everything in memory, use the async generator:

```ts
import { fetchApiPagesGenerator, isAnyErrorResponse } from 'rozod';
import { getGroupsGroupidUsers } from 'rozod/endpoints/groupsv1';

const pages = fetchApiPagesGenerator(
  getGroupsGroupidUsers,
  { groupId: 1, limit: 100 },
);

for await (const page of pages) {
  if (isAnyErrorResponse(page)) {
    console.error(page.message);
    break;
  }

  for (const member of page.data) {
    console.log(member.username);
  }
}
```

## How It Works

Both helpers follow the same pattern:

1. Make the initial request with your parameters
2. Read `nextPageCursor` from the response
3. If the cursor exists, make another request with `cursor` set to that value
4. Repeat until `nextPageCursor` is `null`/`undefined` or the page limit is reached

The `cursor` parameter is automatically injected into subsequent requests — you don't need to include it in your initial parameters.

## Which Endpoints Support Pagination?

Any endpoint whose response includes a `nextPageCursor` field works with these helpers. Common examples:

- `getGroupsGroupidUsers` — Group members
- `getUsersUseridUsernameHistory` — Username history
- `getV1searchUsers` — User search results
- `getGroupsGroupidWall` — Group wall posts
- Most listing/search endpoints across the API

Check the [API Reference](/reference/classic/account-information-v1/) for each endpoint's response shape to see if it includes `nextPageCursor`.
