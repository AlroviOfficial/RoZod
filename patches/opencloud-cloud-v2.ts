// Patched endpoints missing from Roblox API docs

const Patch_ApiKeyIntrospectScope = z.object({
  name: z.string(),
  operations: z.array(z.string()),
  universeDatastores: z
    .array(z.object({ universeId: z.string(), datastoreName: z.string() }))
    .optional(),
  groupIds: z.array(z.string()).optional(),
  userIds: z.array(z.string()).optional(),
});

const Patch_ApiKeyIntrospectResponse = z.object({
  name: z.string(),
  authorizedUserId: z.number(),
  scopes: z.array(Patch_ApiKeyIntrospectScope),
  enabled: z.boolean(),
  expired: z.boolean(),
  expirationTimeUtc: z.string(),
});

export const postApiKeysIntrospect = endpoint({
  method: "POST",
  path: "/api-keys/v1/introspect",
  baseUrl: "https://apis.roblox.com",
  requestFormat: "json",
  serializationMethod: { body: {} },
  parameters: {},
  body: z.object({ apiKey: z.string() }),
  response: Patch_ApiKeyIntrospectResponse,
  errors: [],
});

export const deleteLegacyDevelopV2TeamtestByPlaceId = endpoint({
  method: "DELETE",
  path: "/legacy-develop/v2/teamtest/:placeId",
  baseUrl: "https://apis.roblox.com",
  requestFormat: "json",
  serializationMethod: { placeId: { style: "simple" } },
  parameters: { placeId: z.number().int() },
  response: z.object({}),
  errors: [],
});
