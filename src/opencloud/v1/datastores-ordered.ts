import { z } from 'zod';
import { endpoint } from '../..';

const Entry = z.object({
  path: z.string(),
  id: z.string(),
  value: z.number().int(),
});
const ListEntriesResponse = z.object({
  entries: z.array(Entry),
  nextPageToken: z.string(),
});
const CreateEntryRequest = z.object({ value: z.number().int() });
const UpdateEntryRequest = z.object({ value: z.number().int() });
const IncrementEntryRequest = z.object({ amount: z.number().int() });

/**
 * @api GET https://apis.roblox.com/cloud/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries
 * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/guides/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/dashboard/creations).
 * @param orderedDataStore The name of the target ordered data store.
 * @param scope The name of the data store scope. See [Scopes](../../../cloud/guides/data-store-api-handling.md#scopes).
 * @param max_page_size The maximum number of entries to return. The service may return fewer than this value. The default value is `10`. The maximum value is `100`, and any input above 100 is coerced to `100`.
 * @param page_token A page token received from a previous `List` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `List` must match the call providing the page token.
 * @param order_by The enumeration direction. The order by default is ascending. Input a `desc` suffix for descending.
 * @param filter The range of qualifying values of entries to return. See [Filters](../../../cloud/guides/data-store-api-handling.md#filters).
 * @description Returns a list of entries from an ordered data store.
 */
export const getUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntries = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    orderedDataStore: {},
    scope: {},
    max_page_size: {},
    page_token: {},
    order_by: {},
    filter: {},
  },
  parameters: {
    universeId: z.string(),
    orderedDataStore: z.string(),
    scope: z.string(),
    max_page_size: z.number().int().optional(),
    page_token: z.string().optional(),
    order_by: z.string().optional(),
    filter: z.string().optional(),
  },
  response: ListEntriesResponse,
  errors: [
    {
      status: 400,
      description: `Bad Request: invalid orderedDataStore, scope or entry name or encoding.`,
    },
    {
      status: 403,
      description: `Forbidden: studio access to APIs is not allowed, incorrect API key or scope.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
/**
 * @api POST https://apis.roblox.com/cloud/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries
 * @param body
 * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/guides/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/dashboard/creations).
 * @param orderedDataStore The name of the ordered data store.
 * @param scope The name of the data store scope. See [Scopes](../../../cloud/guides/data-store-api-handling.md#scopes).
 * @param id The name of the entry.
 * @description Creates a new entry with the content value provided.
 */
export const postUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntries = endpoint({
  method: 'POST',
  path: '/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
    orderedDataStore: {},
    scope: {},
    id: {},
  },
  parameters: {
    universeId: z.string(),
    orderedDataStore: z.string(),
    scope: z.string(),
    id: z.string(),
  },
  body: z.object({ value: z.number().int() }),
  response: Entry,
  errors: [
    {
      status: 400,
      description: `Bad Request: invalid orderedDataStore, scope or entry name or encoding.`,
    },
    {
      status: 403,
      description: `Forbidden: studio access to APIs is not allowed, incorrect API key or scope.`,
    },
    {
      status: 404,
      description: `Not found.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/cloud/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry
 * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/guides/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/dashboard/creations).
 * @param orderedDataStore The name of the ordered data store.
 * @param scope The name of the data store scope. See [Scopes](../../../cloud/guides/data-store-api-handling.md#scopes).
 * @param entry The entry ID.
 * @description Gets and returns the specified entry.
 */
export const getUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntriesEntry = endpoint({
  method: 'GET',
  path: '/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    orderedDataStore: {},
    scope: {},
    entry: {},
  },
  parameters: {
    universeId: z.string(),
    orderedDataStore: z.string(),
    scope: z.string(),
    entry: z.string(),
  },
  response: Entry,
  errors: [
    {
      status: 400,
      description: `Bad Request: invalid orderedDataStore, scope or entry name or encoding.`,
    },
    {
      status: 403,
      description: `Forbidden: studio access to APIs is not allowed, incorrect API key or scope.`,
    },
    {
      status: 404,
      description: `Not found.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
/**
 * @api DELETE https://apis.roblox.com/cloud/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry
 * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/guides/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/dashboard/creations).
 * @param orderedDataStore The name of the ordered data store.
 * @param scope The name of the data store scope. See [Scopes](../../../cloud/guides/data-store-api-handling.md#scopes).
 * @param entry The entry ID.
 * @description Deletes the specified entry. Unlike standard data stores, which mark entries for deletion, ordered data store entries are deleted immediately.
 */
export const deleteUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntriesEntry = endpoint({
  method: 'DELETE',
  path: '/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    orderedDataStore: {},
    scope: {},
    entry: {},
  },
  parameters: {
    universeId: z.string(),
    orderedDataStore: z.string(),
    scope: z.string(),
    entry: z.string(),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Bad Request: invalid orderedDataStore, scope or entry name or encoding.`,
    },
    {
      status: 403,
      description: `Forbidden: Studio access to APIs is not allowed, incorrect API key or scope.`,
    },
    {
      status: 404,
      description: `Not found.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
/**
 * @api PATCH https://apis.roblox.com/cloud/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry
 * @param body
 * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/guides/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/dashboard/creations).
 * @param orderedDataStore The name of the ordered data store.
 * @param scope The name of the data store scope. See [Scopes](../../../cloud/guides/data-store-api-handling.md#scopes).
 * @param entry The entry ID.
 * @param allow_missing The flag to allow the creation of an entry if the entry doesn't exist. See [Allow missing flags](../../../cloud/guides/data-store-api-handling.md#allow-missing-flags).
 * @description Updates an entry value and returns the updated entry.
 */
export const patchUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntriesEntry = endpoint({
  method: 'PATCH',
  path: '/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
    orderedDataStore: {},
    scope: {},
    entry: {},
    allow_missing: {},
  },
  parameters: {
    universeId: z.string(),
    orderedDataStore: z.string(),
    scope: z.string(),
    entry: z.string(),
    allow_missing: z.boolean().optional(),
  },
  body: z.object({ value: z.number().int() }),
  response: Entry,
  errors: [
    {
      status: 400,
      description: `Bad Request: invalid orderedDataStore, scope or entry name or encoding.`,
    },
    {
      status: 403,
      description: `Forbidden: studio access to APIs is not allowed, incorrect API key or scope.`,
    },
    {
      status: 404,
      description: `Not found.`,
    },
    {
      status: 409,
      description: `Aborted.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
/**
 * @api POST https://apis.roblox.com/cloud/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry:increment
 * @param body 
 * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/guides/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/dashboard/creations).
 * @param orderedDataStore The name of the ordered data store.
 * @param scope The name of the data store scope. See [Scopes](../../../cloud/guides/data-store-api-handling.md#scopes).
 * @param entry The entry ID.
 * @description Increments the value of the key by the provided amount and returns the updated entry.

Known issue: Entry values can increment past the valid range and this may persist in the backend. Returned values will clamp to the valid range.
 */
export const postUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntriesEntryIncrement = endpoint({
  method: 'POST',
  path: '/v1/universes/:universeId/orderedDataStores/:orderedDataStore/scopes/:scope/entries/:entry:increment',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
    orderedDataStore: {},
    scope: {},
    entry: {},
  },
  parameters: {
    universeId: z.string(),
    orderedDataStore: z.string(),
    scope: z.string(),
    entry: z.string(),
  },
  body: z.object({ amount: z.number().int() }),
  response: Entry,
  errors: [
    {
      status: 400,
      description: `Bad Request: invalid orderedDataStore, scope or entry name or encoding.`,
    },
    {
      status: 403,
      description: `Forbidden: studio access to APIs is not allowed, incorrect API key or scope.`,
    },
    {
      status: 404,
      description: `Not found.`,
    },
    {
      status: 429,
      description: `Too Many Requests.`,
    },
  ],
});
