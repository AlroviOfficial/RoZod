import { z } from 'zod';
import { endpoint } from '../..';

const DataStore = z.object({
  name: z.instanceof(File),
  createdTime: z.string().datetime({ offset: true }).nullable(),
});

/**
 * **List Data Stores** · `BETA`
 *
 * Returns a list of an experience's data stores.
 *
 * **Lua equivalent:** `DataStoreService:ListDataStoresAsync`
 * **Scopes:** `universe-datastores.control:list`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param cursor Provide to request the next set of data.
 * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
 * @param prefix Provide to return only data stores with this prefix.
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const getUniversesUniverseIdDatastores = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/standard-datastores',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: ['universe-datastores.control:list'],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    cursor: {},
    limit: {},
    prefix: {},
  },
  parameters: {
    universeId: z.number().int(),
    cursor: z.string().nullish(),
    limit: z.number().int().optional().default(1),
    prefix: z.string().nullish(),
  },
  response: z.object({
    data: z.array(DataStore),
    nextPageCursor: z.string().nullable(),
  }),
  errors: [],
});
/**
 * **List Entries** · `BETA`
 *
 * Returns a list of entry keys within a data store.

 Entries marked deleted with a tombstone version are still included in the response if they have yet to be permanently deleted.
 *
 * **Lua equivalent:** `DataStore:ListKeysAsync`
 * **Scopes:** `universe-datastores.objects:list`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @param allScopes Set to true to return keys from all scopes.
 * @param prefix Provide to return only keys with this prefix.
 * @param cursor Provide to request the next set of data.
 * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const getUniversesUniverseIdDatastoresDatastoreEntries = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: ['universe-datastores.objects:list'],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    datastoreName: {},
    scope: {},
    allScopes: {},
    prefix: {},
    cursor: {},
    limit: {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    scope: z.string().nullish(),
    allScopes: z.boolean().optional(),
    prefix: z.string().nullish(),
    cursor: z.string().nullish(),
    limit: z.number().int().optional().default(16),
  },
  response: z.object({
    keys: z.array(z.string()),
    nextPageCursor: z.string().nullable(),
  }),
  errors: [],
});
/**
 * **Get Entry** · `BETA`
 *
 * Returns the value and metadata associated with an entry.

Entries marked deleted with a tombstone version will return 404 Not Found.

Metadata can be found in the response headers like the following:
```text
content-md5: zuYxEhwuySMv0i8CitXImw==
roblox-entry-version: 08D9E6A3F2188CFF.0000000001.08D9E6A3F2188CFF.01
roblox-entry-created-time: 2022-02-02T23:30:06.5388799+00:00
roblox-entry-version-created-time: 2022-02-02T23:30:06.5388799+00:00
roblox-entry-attributes: { "myAttribute": "myValue" }
roblox-entry-userids: [1, 2, 3]
```

| Header | Description |
|---|---| 
| `content-md5` | The base64-encoded MD5 checksum of the content. See [Content-MD5](/cloud/guides/data-stores/request-handling.md#content-md5). |
| `roblox-entry-version` | The version of the returned entry. |
| `roblox-entry-created-time` | The time at which the entry was created. |
| `roblox-entry-version-created-time` | The time at which this particular version was created. |
| `roblox-entry-attributes` | Attributes tagged with the entry. Serialized JSON map object. |
| `roblox-entry-userids` | Comma-separated list of Roblox user IDs tagged with the entry. |

 *
 * **Lua equivalent:** `GlobalDataStore:GetAsync`
 * **Scopes:** `universe-datastores.objects:read`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param entryKey The key identifying the entry.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries/{entry_id}
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries/{entry_id}
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const getUniversesUniverseIdDatastoresDatastoreEntriesEntry = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries/entry',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: ['universe-datastores.objects:read'],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    datastoreName: {},
    entryKey: {},
    scope: {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    entryKey: z.string().nullish(),
    scope: z.string().nullish().default('global'),
  },
  response: z.object({}),
  errors: [],
});
/**
 * **Set Entry** · `BETA`
 *
 * Sets the value, metadata and user IDs associated with an entry.
 *
 * **Lua equivalent:** `GlobalDataStore:SetAsync`
 * **Scopes:** `universe-datastores.objects:update`, `universe-datastores.objects:create`, `universe-datastores.control:create`
 *
 * @param body
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param entryKey The key identifying the entry.
 * @param matchVersion Provide to update only if the current version matches this.
 * @param exclusiveCreate Create the entry only if it does not exist.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @param roblox-entry-attributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
 * @param roblox-entry-userids Comma-separated list of Roblox user IDs tagged with the entry. If not provided, existing user IDs are cleared.
 * @param content-md5 The base64-encoded MD5 checksum of the content. See [Content-MD5](/cloud/guides/data-stores/request-handling.md#content-md5).
 * @see PATCH https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries/{entry_id}
 * @see PATCH https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries/{entry_id}
 * @see POST https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries
 * @see POST https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const postUniversesUniverseIdDatastoresDatastoreEntriesEntry = endpoint({
  method: 'POST',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries/entry',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: [
    'universe-datastores.objects:update',
    'universe-datastores.objects:create',
    'universe-datastores.control:create',
  ],
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
    datastoreName: {},
    entryKey: {},
    matchVersion: {},
    exclusiveCreate: {},
    scope: {},
    'roblox-entry-attributes': {},
    'roblox-entry-userids': {},
    'content-md5': {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    entryKey: z.string().nullish(),
    matchVersion: z.string().nullish(),
    exclusiveCreate: z.boolean().optional(),
    scope: z.string().nullish().default('global'),
    'roblox-entry-attributes': z.string().nullish(),
    'roblox-entry-userids': z.string().nullish(),
    'content-md5': z.string().nullish(),
  },
  body: z.string().max(4194304),
  response: z.void(),
  errors: [],
});
/**
 * **Delete Entry** · `BETA`
 *
 * Marks the entry as deleted by creating a tombstone version. Entries are deleted permanently after 30 days.
 *
 * **Lua equivalent:** `GlobalDataStore:RemoveAsync`
 * **Scopes:** `universe-datastores.objects:delete`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param entryKey The key identifying the entry.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @see DELETE https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries/{entry_id}
 * @see DELETE https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries/{entry_id}
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const deleteUniversesUniverseIdDatastoresDatastoreEntriesEntry = endpoint({
  method: 'DELETE',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries/entry',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: ['universe-datastores.objects:delete'],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    datastoreName: {},
    entryKey: {},
    scope: {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    entryKey: z.string().nullish(),
    scope: z.string().nullish().default('global'),
  },
  response: z.void(),
  errors: [],
});
/**
 * **Increment Entry** · `BETA`
 *
 * Increments the value for an entry by a given amount, or create a new entry with that amount. Returns the entry and metadata.

Metadata can be found in the response headers like the following:
```text
content-md5: zuYxEhwuySMv0i8CitXImw==
roblox-entry-version: 08D9E6A3F2188CFF.0000000001.08D9E6A3F2188CFF.01
roblox-entry-created-time: 2022-02-02T23:30:06.5388799+00:00
roblox-entry-version-created-time: 2022-02-02T23:30:06.5388799+00:00
roblox-entry-attributes: { "myAttribute": "myValue" }
roblox-entry-userids: [1, 2, 3]
```

| Header | Description |
|---|---| 
| `content-md5` | The base64-encoded MD5 checksum of the content. See [Content-MD5](/cloud/guides/data-stores/request-handling.md#content-md5). |
| `roblox-entry-version` | The version of the returned entry. |
| `roblox-entry-created-time` | The time at which the entry was created. |
| `roblox-entry-version-created-time` | The time at which this particular version was created. |
| `roblox-entry-attributes` | Attributes tagged with the entry. Serialized JSON map object. |
| `roblox-entry-userids` | Comma-separated list of Roblox user IDs tagged with the entry. |

 *
 * **Lua equivalent:** `GlobalDataStore:IncrementAsync`
 * **Scopes:** `universe-datastores.objects:update`, `universe-datastores.objects:create`, `universe-datastores.control:create`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param entryKey The key identifying the entry.
 * @param incrementBy The amount by which the entry should be incremented, or the starting value if it doesn't exist.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @param roblox-entry-attributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
 * @param roblox-entry-userids A comma-separated list of Roblox user IDs that the entry is tagged with. If not provided, existing user IDs are cleared.
 * @see POST https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries/{entry_id}:increment
 * @see POST https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries/{entry_id}:increment
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const postUniversesUniverseIdDatastoresDatastoreEntriesEntryIncrement = endpoint({
  method: 'POST',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries/entry/increment',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: [
    'universe-datastores.objects:update',
    'universe-datastores.objects:create',
    'universe-datastores.control:create',
  ],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    datastoreName: {},
    entryKey: {},
    incrementBy: {},
    scope: {},
    'roblox-entry-attributes': {},
    'roblox-entry-userids': {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    entryKey: z.string().nullish(),
    incrementBy: z.number().int().optional().default(1),
    scope: z.string().nullish().default('global'),
    'roblox-entry-attributes': z.string().nullish(),
    'roblox-entry-userids': z.string().nullish(),
  },
  response: z.object({}),
  errors: [],
});
/**
 * **List Entry Versions** · `BETA`
 *
 * Returns a list of versions for an entry.
 *
 * **Lua equivalent:** `DataStore:ListVersionsAsync`
 * **Scopes:** `universe-datastores.versions:list`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param entryKey The key identifying the entry.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @param cursor Provide to request the next set of data.
 * @param startTime Provide to not include versions earlier than this timestamp.
 * @param endTime Provide to not include versions later than this timestamp.
 * @param sortOrder Either `Ascending` (earlier versions first) or `Descending` (later versions first).
 * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries/{entry_id}:listRevisions
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries/{entry_id}:listRevisions
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const getUniversesUniverseIdDatastoresDatastoreEntriesEntryVersions = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries/entry/versions',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: ['universe-datastores.versions:list'],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    datastoreName: {},
    entryKey: {},
    scope: {},
    cursor: {},
    startTime: {},
    endTime: {},
    sortOrder: {},
    limit: {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    entryKey: z.string().nullish(),
    scope: z.string().nullish().default('global'),
    cursor: z.string().datetime({ offset: true }).nullish(),
    startTime: z.string().datetime({ offset: true }).nullish(),
    endTime: z.string().nullish(),
    sortOrder: z.string().nullish().default('Ascending'),
    limit: z.number().int().optional().default(16),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Invalid request / Invalid file content.`,
    },
    {
      status: 403,
      description: `Publish not allowed on place.`,
    },
    {
      status: 404,
      description: `The experience or data store was not found.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
/**
 * **Get Entry Version** · `BETA`
 *
 * Returns the value and metadata of a specific version of an entry.

Metadata can be found in the response headers like the following:
```text
content-md5: zuYxEhwuySMv0i8CitXImw==
roblox-entry-version: 08D9E6A3F2188CFF.0000000001.08D9E6A3F2188CFF.01
roblox-entry-created-time: 2022-02-02T23:30:06.5388799+00:00
roblox-entry-version-created-time: 2022-02-02T23:30:06.5388799+00:00
roblox-entry-attributes: { "myAttribute": "myValue" }
roblox-entry-userids: [1, 2, 3]
```

| Header | Description |
|---|---| 
| `content-md5` | The base64-encoded MD5 checksum of the content. See [Content-MD5](/cloud/guides/data-stores/request-handling.md#content-md5). |
| `roblox-entry-version` | The version of the returned entry. |
| `roblox-entry-created-time` | The time at which the entry was created. |
| `roblox-entry-version-created-time` | The time at which this particular version was created. |
| `roblox-entry-attributes` | Attributes tagged with the entry. Serialized JSON map object. |
| `roblox-entry-userids` | Comma-separated list of Roblox user IDs tagged with the entry. |

 *
 * **Lua equivalent:** `DataStore:GetVersionAsync`
 * **Scopes:** `universe-datastores.versions:read`
 *
 * @param universeId The identifier of the experience with data stores that you want to access. You can find your experience's universe ID on Creator Hub.
 * @param datastoreName The name of the data store.
 * @param entryKey The key identifying the entry.
 * @param versionId The version to inspect.
 * @param scope The value is `global` by default. See [Scopes](/cloud-services/data-stores/index.md#scopes).
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/entries/{entry_id}
 * @see GET https://apis.roblox.com/cloud/v2/universes/{universe_id}/data-stores/{data_store_id}/scopes/{scope_id}/entries/{entry_id}
 * @deprecated Prefer the v2 alternative(s) listed above.
 */
export const getUniversesUniverseIdDatastoresDatastoreEntriesEntryVersionsVersion = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/standard-datastores/datastore/entries/entry/versions/version',
  baseUrl: 'https://apis.roblox.com/datastores',
  scopes: ['universe-datastores.versions:read'],
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    datastoreName: {},
    entryKey: {},
    versionId: {},
    scope: {},
  },
  parameters: {
    universeId: z.number().int(),
    datastoreName: z.string().nullish(),
    entryKey: z.string().nullish(),
    versionId: z.string().nullish(),
    scope: z.string().nullish().default('global'),
  },
  response: z.object({}),
  errors: [],
});
