---
title: OpenCloud
description: Using Roblox OpenCloud APIs with RoZod
---

RoZod includes 115+ OpenCloud endpoints across v1 and v2 APIs. These use API keys instead of cookies for authentication.

## Setup

1. Create an API key at [Roblox Creator Hub](https://create.roblox.com/credentials)
2. Configure RoZod:

```ts
import { configureServer } from 'rozod';

configureServer({
  cloudKey: process.env.ROBLOX_CLOUD_KEY,
});
```

## OpenCloud v1

v1 endpoints are organized by resource:

```ts
import { v1 } from 'rozod/lib/opencloud';

// Available resources:
// v1.universes  — Universe/place management
// v1.messaging  — MessagingService (cross-server messaging)
// v1.datastores — Standard DataStores
// v1.datastoresOrdered — Ordered DataStores
// v1.assets     — Asset management
```

### DataStores Example

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { v1 } from 'rozod/lib/opencloud';

// List data stores
const stores = await fetchApi(
  v1.datastores.getUniversesUniverseIdDatastores,
  { universeId: 123456 },
);

// Get an entry
const entry = await fetchApi(
  v1.datastores.getUniversesUniverseIdDatastoresDatastoreEntriesEntry,
  {
    universeId: 123456,
    datastoreName: 'PlayerData',
    entryKey: 'Player_123',
  },
);
```

### Messaging Example

```ts
import { fetchApi } from 'rozod';
import { v1 } from 'rozod/lib/opencloud';

await fetchApi(
  v1.messaging.postUniversesUniverseIdTopicsTopic,
  {
    universeId: 123456,
    topic: 'my-topic',
    body: { message: 'Hello from the server!' },
  },
);
```

## OpenCloud v2

v2 is the newer OpenCloud API with broader coverage:

```ts
import { v2 } from 'rozod/lib/opencloud';
```

v2 endpoints follow the naming pattern `{method}CloudV2{PathSegments}`:

```ts
import { fetchApi } from 'rozod';
import { v2 } from 'rozod/lib/opencloud';

// Get universe info
const universe = await fetchApi(
  v2.getCloudV2UniversesUniverseId,
  { universe_id: '123456' },
);

// List data store entries (v2)
const entries = await fetchApi(
  v2.getCloudV2UniversesUniverseIdDataStores,
  { universe_id: '123456' },
);
```

## Scopes

Each OpenCloud endpoint declares its required permission scopes. You can inspect these on the endpoint object:

```ts
import { v1 } from 'rozod/lib/opencloud';

console.log(v1.datastores.getUniversesUniverseIdDatastores.scopes);
// ['universe-datastores.control:list']
```

Make sure your API key has the required scopes enabled in the Creator Hub.

## v1 vs v2

- **v1** — Stable, well-documented endpoints for DataStores, MessagingService, Assets, and Universes
- **v2** — Newer API covering more resources (user restrictions, subscriptions, inventory, groups, etc.) but some endpoints may be in beta

Both are auto-generated from official Roblox OpenAPI specs. Check the [OpenCloud Reference](/reference/opencloud/cloud-v2/) for the full endpoint list.

:::note
Some v1 endpoints are marked as deprecated with `@deprecated` in their JSDoc, indicating a v2 alternative exists. The deprecated endpoints still work but you should prefer v2 when available.
:::
