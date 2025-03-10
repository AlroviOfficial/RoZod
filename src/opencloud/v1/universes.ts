import { z } from 'zod';
import { endpoint } from '../..';

/**
 * @api POST https://apis.roblox.com/cloud/v1/:universeId/places/:placeId/versions
 * @param universeId The identifier of the experience in which you want to publish your place to. You can [copy your experience's Universe ID](../../../cloud/guides/usage-place-publishing.md#publishing-a-place) on **Creator Dashboard**.
 * @param placeId The identifier of your place. See [Publishing places with API keys](../../../cloud/guides/usage-place-publishing.md) on obtaining a Place ID.
 * @param versionType Can only be either: 
- `Saved`: the place file should be saved, but not published. 
 - `Published`: the place file should be saved and published.
 * @description Publish a new place or update an existing place with a new version. Provide a RBXL or RBXLX file in the data-binary.
 */
export const postUniverseIdPlacesPlaceIdVersions = endpoint({
  method: 'POST',
  path: '/v1/:universeId/places/:placeId/versions',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    universeId: {},
    placeId: {},
    versionType: {},
  },
  parameters: {
    universeId: z.number().int(),
    placeId: z.number().int(),
    versionType: z.string().nullish(),
  },
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Invalid request / Invalid file content.`,
    },
    {
      status: 401,
      description: `API key not valid for operation, user does not have authorization.`,
    },
    {
      status: 403,
      description: `Publish not allowed on place.`,
    },
    {
      status: 404,
      description: `Place or universe does not exist.`,
    },
    {
      status: 409,
      description: `Place not part of the universe.`,
    },
    {
      status: 500,
      description: `Server internal error / Unknown error.`,
    },
  ],
});
