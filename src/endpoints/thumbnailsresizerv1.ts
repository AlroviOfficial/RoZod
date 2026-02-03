import { z } from 'zod';
import { endpoint } from '..';

/**
 * @api GET https://thumbnailsresizer.roblox.com/v1/resize/:hash/:width/:height/:type/:format/:filterType
 * @param hash
 * @param width
 * @param height
 * @param type
 * @param format
 * @param filterType
 * @param shouldModify
 */
export const getResizeHashWidthHeightTypeFormatFiltertype = endpoint({
  method: 'GET',
  path: '/v1/resize/:hash/:width/:height/:type/:format/:filterType',
  baseUrl: 'https://thumbnailsresizer.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    hash: {},
    width: {},
    height: {},
    type: {},
    format: {},
    filterType: {},
    shouldModify: {},
  },
  parameters: {
    hash: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    type: z.string(),
    format: z.string(),
    filterType: z.string(),
    shouldModify: z.boolean().optional().default(false),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://thumbnailsresizer.roblox.com/v1/secureresize/:thumbPrint/:hash/:width/:height/:type/:format/:filterType
 * @param thumbPrint
 * @param hash
 * @param width
 * @param height
 * @param type
 * @param format
 * @param filterType
 */
export const getSecureresizeThumbprintHashWidthHeightTypeFormatFiltertype = endpoint({
  method: 'GET',
  path: '/v1/secureresize/:thumbPrint/:hash/:width/:height/:type/:format/:filterType',
  baseUrl: 'https://thumbnailsresizer.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    thumbPrint: {},
    hash: {},
    width: {},
    height: {},
    type: {},
    format: {},
    filterType: {},
  },
  parameters: {
    thumbPrint: z.string(),
    hash: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    type: z.string(),
    format: z.string(),
    filterType: z.string().optional(),
  },
  response: z.void(),
  errors: [],
});
