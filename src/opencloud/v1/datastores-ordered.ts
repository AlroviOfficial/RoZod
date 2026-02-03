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
 * @param universeId
 * @param orderedDataStore
 * @param scope
 * @param max_page_size
 * @param page_token
 * @param order_by
 * @param filter
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
 * @param universeId
 * @param orderedDataStore
 * @param scope
 * @param id
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
 * @param universeId
 * @param orderedDataStore
 * @param scope
 * @param entry
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
 * @param universeId
 * @param orderedDataStore
 * @param scope
 * @param entry
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
 * @param universeId
 * @param orderedDataStore
 * @param scope
 * @param entry
 * @param allow_missing
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
 * @param universeId 
 * @param orderedDataStore 
 * @param scope 
 * @param entry 
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
