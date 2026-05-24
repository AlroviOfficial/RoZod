// Patched endpoints removed from Roblox API docs

const Patch_ContactsMetadataResponseModel = z.object({
  multiGetContactsMaxSize: z.number().int(),
  multiGetContactsCacheTTLinMS: z.number().int(),
});

export const getContactsMetadata = endpoint({
  method: 'GET',
  path: '/v1/contacts/metadata',
  baseUrl: 'https://contacts.roblox.com',
  requestFormat: 'json',
  response: Patch_ContactsMetadataResponseModel,
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
  ],
});
