---
title: Caching
description: Built-in response caching with multiple storage backends
---

RoZod includes a simple built-in cache with three storage backends.

## Enabling Caching

Pass `cacheKey` and `cacheTime` in request options:

```ts
import { fetchApi } from 'rozod';
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

const user = await fetchApi(
  getUsersUserid,
  { userId: 1 },
  {
    cacheKey: 'user-1',
    cacheTime: 60000, // 60 seconds in milliseconds
  },
);
```

If a cached response exists for the given key and hasn't expired, it's returned immediately without making a network request.

## Storage Backends

| Backend | `cacheType` | Use Case |
|---------|-------------|----------|
| Memory | `'memory'` (default) | Server-side Node.js/Bun apps |
| LocalStorage | `'local'` | Browser apps that need persistence across page loads |
| Chrome Storage | `'chrome'` | Chrome/browser extensions |

```ts
// Use localStorage
const user = await fetchApi(
  getUsersUserid,
  { userId: 1 },
  {
    cacheKey: 'user-1',
    cacheTime: 60000,
    cacheType: 'local',
  },
);

// Use Chrome extension storage
const user = await fetchApi(
  getUsersUserid,
  { userId: 1 },
  {
    cacheKey: 'user-1',
    cacheTime: 60000,
    cacheType: 'chrome',
  },
);
```

## How It Works

- Cache entries are stored with a TTL (time-to-live) based on `cacheTime`
- Expired entries are cleaned up lazily (checked on read)
- The memory cache is per-process and cleared on restart
- LocalStorage keys are prefixed with `rozod_cache:` to avoid collisions
- Chrome storage uses `chrome.storage.local`

## When to Use Caching

Caching is most useful for:

- **User/group info** that doesn't change frequently
- **Thumbnail URLs** that are stable for a while
- **Catalog data** where real-time accuracy isn't critical
- **Any GET endpoint** you call repeatedly with the same parameters

Avoid caching:

- **Mutating requests** (POST, PATCH, DELETE)
- **Real-time data** like presence, trade status, or notifications
- **Paginated results** where freshness matters
