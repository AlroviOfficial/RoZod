import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Metrics_Api_ThumbnailLoadMetadataResponse = z.object({
  logRatio: z.number(),
});
const Roblox_Metrics_Api_RecordBundleLoadRequest = z.object({
  bundleUrl: z.string().url(),
  bundleName: z.string(),
  loadTimeInMilliseconds: z.number().int(),
  cdnProviderName: z.string(),
  loadState: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  bundleContentType: z.union([z.literal(0), z.literal(1), z.literal(2)]),
});
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({});
const Roblox_Metrics_Api_RecordThumbnailLoadRequest = z.object({
  duration: z.number().int(),
  loadState: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  thumbnailType: z.string(),
});

/**
 * @api POST https://metrics.roblox.com/v1/bundle-metrics/report
 * @summary Records bundle load successes.
 * @param body The Roblox.Metrics.Api.RecordBundleLoadRequest.
 * @description Xsrf protection disabled because this endpoint is supposed to be used
to record static content. It's possible XSRF can't be retried if:
- The XSRF retry JavaScript fails to load (or fails to execute)
- CSS fails to load before JavaScript finishes loading.
 */
export const postBundleMetricsReport = endpoint({
  method: 'POST',
  path: '/v1/bundle-metrics/report',
  baseUrl: 'https://metrics.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Metrics_Api_RecordBundleLoadRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `1: The bundle url is invalid.`,
    },
  ],
});
/**
 * @api POST https://metrics.roblox.com/v1/thumbnails/load
 * @summary Records the time it takes for a thumbnail to get loaded in the UI.
 * @param body The Roblox.Metrics.Api.RecordThumbnailLoadRequest.
 */
export const postThumbnailsLoad = endpoint({
  method: 'POST',
  path: '/v1/thumbnails/load',
  baseUrl: 'https://metrics.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_Metrics_Api_RecordThumbnailLoadRequest,
  response: z.object({}),
  errors: [
    {
      status: 400,
      description: `2: A required parameter is missing from the request`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://metrics.roblox.com/v1/thumbnails/metadata
 * @summary Get metadata related to logging thumbnail load metrics.
e.g. ThumbnailLoadLoggingRatio
 */
export const getThumbnailsMetadata = endpoint({
  method: 'GET',
  path: '/v1/thumbnails/metadata',
  baseUrl: 'https://metrics.roblox.com',
  requestFormat: 'json',
  response: z.object({ logRatio: z.number() }),
  errors: [],
});
