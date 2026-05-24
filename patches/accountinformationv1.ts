// Patched endpoints removed from Roblox API docs

const Patch_StarCodeAffiliateResponse = z.object({
  userId: z.number().int(),
  name: z.string(),
  code: z.string(),
});

export const getStarCodeAffiliates = endpoint({
  method: 'GET',
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: Patch_StarCodeAffiliateResponse,
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 500, description: `0: An unknown error occured.` },
  ],
});

export const postStarCodeAffiliates = endpoint({
  method: 'POST',
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  serializationMethod: { body: {} },
  parameters: {},
  body: z.object({ code: z.string() }),
  response: Patch_StarCodeAffiliateResponse,
  errors: [
    { status: 400, description: `1: The code was invalid.` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
    { status: 500, description: `0: An unknown error occured.` },
  ],
});

export const deleteStarCodeAffiliates = endpoint({
  method: 'DELETE',
  path: '/v1/star-code-affiliates',
  baseUrl: 'https://accountinformation.roblox.com',
  requestFormat: 'json',
  response: z.object({}),
  errors: [
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed` },
    { status: 500, description: `0: An unknown error occured.` },
  ],
});
