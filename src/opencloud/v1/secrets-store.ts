import { z } from 'zod';
import { endpoint } from '../..';

const Secret = z.object({
  id: z.string().nullable(),
  secret: z.string().nullable(),
  key_id: z.string().nullable(),
  domain: z.string().nullable(),
  create_time: z.string().nullable(),
  update_time: z.string().nullable(),
});
const ProblemDetails = z.object({
  type: z.string().nullable(),
  title: z.string().nullable(),
  status: z.string().nullable(),
  detail: z.string().nullable(),
  instance: z.string().nullable(),
});
const SecretPaginatedList = z.object({
  secrets: z.array(Secret).nullable(),
  nextPageCursor: z.string().nullable(),
  previousPageCursor: z.string().nullable(),
});

/**
 * @api POST https://apis.roblox.com/cloud/v2/universes/:universeId/secrets
 * @summary Create Secret
 * @param body The secret to create with encrypted content
 * @param universeId The universe ID
 * @description Creates a new secret. A maximum of 500 secrets per universe is allowed.
            
Only the owner of the universe can create secrets. For group-owned universes, only the group owner or authorized
members can create secrets.
            
To encrypt the secret:
1. Get the public key using the Get Public Key endpoint
2. Encrypt your secret using LibSodium sealed box
3. Base64 encode the encrypted content

Include the key_id from the public key response in the request.

For an example, see the [Secrets store guide](https://create.roblox.com/docs/cloud/guides/secrets-store).
 */
export const postCloudV2UniversesUniverseIdSecrets = endpoint({
  method: 'POST',
  path: '/cloud/v2/universes/:universeId/secrets',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: Secret,
  response: Secret,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 409,
      description: `Conflict`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/cloud/v2/universes/:universeId/secrets
 * @summary List Secrets
 * @param universeId The universe ID
 * @param limit Number of secrets to return per page (1-500, default 10)
 * @param cursor Pagination cursor from previous response
 * @description Lists all secrets defined for a universe.
Secret content is not returned for security reasons - only metadata such as ID, domain, creation and update timestamps are included.

Only the owner of the universe can list secrets. For group-owned universes, only the group owner or authorized
members can list secrets.
 */
export const getCloudV2UniversesUniverseIdSecrets = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universeId/secrets',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    limit: {},
    cursor: {},
  },
  parameters: {
    universeId: z.number().int(),
    limit: z.number().int().optional().default(10),
    cursor: z.string().optional(),
  },
  response: SecretPaginatedList,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
  ],
});
/**
 * @api PATCH https://apis.roblox.com/cloud/v2/universes/:universeId/secrets/:secretId
 * @summary Update Secret
 * @param body The updated secret data with encrypted content
 * @param universeId The universe ID
 * @param secretId The ID of the secret to update
 * @description Updates an existing secret.

Only the owner of the universe can update secrets. For group-owned universes, only the group owner or authorized
members can update secrets.

Only the secret content, key_id, and domain can be updated - the secret ID cannot be changed.

To encrypt the updated secret:
1. Get the current public key using the GetPublicKey endpoint
2. Encrypt your new secret content using LibSodium sealed box
3. Base64 encode the encrypted content

Include the key_id from the public key response in the request.

For an example, see the [Secrets store guide](https://create.roblox.com/docs/cloud/guides/secrets-store).
 */
export const patchCloudV2UniversesUniverseIdSecretsSecretId = endpoint({
  method: 'PATCH',
  path: '/cloud/v2/universes/:universeId/secrets/:secretId',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
    secretId: {},
  },
  parameters: {
    universeId: z.number().int(),
    secretId: z.string(),
  },
  body: Secret,
  response: Secret,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
/**
 * @api DELETE https://apis.roblox.com/cloud/v2/universes/:universeId/secrets/:secretId
 * @summary Delete Secret
 * @param universeId The universe ID
 * @param secretId The ID of the secret to delete
 * @description Permanently deletes a secret from a universe.

Only the owner of the universe can delete secrets. For group-owned universes, only the group owner or authorized
members can delete secrets.

This operation is irreversible. Make sure you no longer need the secret before deleting it.
 */
export const deleteCloudV2UniversesUniverseIdSecretsSecretId = endpoint({
  method: 'DELETE',
  path: '/cloud/v2/universes/:universeId/secrets/:secretId',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    secretId: {},
  },
  parameters: {
    universeId: z.number().int(),
    secretId: z.string(),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
    {
      status: 404,
      description: `Not Found`,
    },
  ],
});
/**
 * @api GET https://apis.roblox.com/cloud/v2/universes/:universeId/secrets/public-key
 * @summary Get Public Key
 * @param universeId The universe ID
 * @description Retrieves the public key for a universe. You need this key to encrypt secret content 
before sending it to Roblox.

Only the owner of the universe can retrieve the public key. For group-owned universes, only the group owner or
authorized members can retrieve the public key.

The secret id field is static and always returns "public-key".

The returned public key in the secret field is universe-specific and derived from a master key using the universe ID.
Use this key with LibSodium sealed box encryption to encrypt your secret content before 
creating or updating secrets.

Include the key_id from the public key response in the request to create or update a secret.
 */
export const getCloudV2UniversesUniverseIdSecretsPublicKey = endpoint({
  method: 'GET',
  path: '/cloud/v2/universes/:universeId/secrets/public-key',
  baseUrl: 'https://apis.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Secret,
  errors: [
    {
      status: 400,
      description: `Bad Request`,
    },
    {
      status: 403,
      description: `Forbidden`,
    },
  ],
});
