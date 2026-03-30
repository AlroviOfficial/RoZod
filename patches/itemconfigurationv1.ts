// Patched endpoints removed from Roblox API docs (v6.1.0 compat)

const Roblox_ItemConfiguration_Api_TagDetails = z.object({
  tagId: z.string(),
  name: z.string(),
  localizedDisplayName: z.string(),
  status: z.enum(['Success', 'MissingItem']),
});
const Patch_ApiArrayResponse_TagDetails = z.object({
  data: z.array(Roblox_ItemConfiguration_Api_TagDetails),
});

export const getTags = endpoint({
  method: 'GET',
  path: '/v1/tags',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: { tagIds: { style: 'form' } },
  parameters: { tagIds: z.array(z.string()) },
  response: Patch_ApiArrayResponse_TagDetails,
  errors: [
    { status: 400, description: `1: No tag Ids requested\n2: Too many tag Ids requested` },
    { status: 429, description: `3: Too many requests` },
  ],
});

export const getTagsPrefixSearch = endpoint({
  method: 'GET',
  path: '/v1/tags/prefix-search',
  baseUrl: 'https://itemconfiguration.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    prefix: { style: 'form', explode: true },
    numberOfResults: { style: 'form', explode: true },
  },
  parameters: {
    prefix: z.string(),
    numberOfResults: z.number().int(),
  },
  response: Patch_ApiArrayResponse_TagDetails,
  errors: [
    { status: 400, description: `5: The given prefix is invalid\n6: The number of results requested is invalid` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `4: This endpoint is not yet enabled for the current user` },
    { status: 429, description: `3: Too many requests` },
  ],
});
