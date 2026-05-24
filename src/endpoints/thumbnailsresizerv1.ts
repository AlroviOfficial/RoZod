import { z } from 'zod';
import { endpoint } from '..';

/**
 * @api GET https://thumbnailsresizer.roblox.com/v1/resize/:hash/:width/:height/:type/:format/:filterType
 * @summary Resizes larger thumbnails to specified size and format
 * @param hash Hash of larger thumbnail
 * @param width Desired width of thumbnail
 * @param height Desired height of thumbnail
 * @param type Thumbnail Type
 * @param format Desired image format of the thumbnail
 * @param filterType E.g. is output circular
 * @param shouldModify
 */
export const getResizeHashWidthHeightTypeFormatFiltertype = endpoint({
  method: 'GET',
  path: '/v1/resize/:hash/:width/:height/:type/:format/:filterType',
  baseUrl: 'https://thumbnailsresizer.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    hash: {
      style: 'simple',
    },
    width: {
      style: 'simple',
    },
    height: {
      style: 'simple',
    },
    type: {
      style: 'simple',
    },
    format: {
      style: 'simple',
    },
    filterType: {
      style: 'form',
      explode: true,
    },
    shouldModify: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    hash: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    type: z.string(),
    format: z.string(),
    filterType: z.string(),
    shouldModify: z.boolean().optional(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://thumbnailsresizer.roblox.com/v1/secureresize/:thumbPrint/:hash/:width/:height/:type/:format/:filterType
 * @summary Decrypts and Resizes larger thumbnails to specified size and format
 * @param thumbPrint The thumbPrint that represents the key version
 * @param hash Hash of larger thumbnail
 * @param width Desired width of thumbnail
 * @param height Desired height of thumbnail
 * @param type Thumbnail Type
 * @param format Desired image format of the thumbnail
 * @param filterType E.g. is output circular
 */
export const getSecureresizeThumbprintHashWidthHeightTypeFormatFiltertype = endpoint({
  method: 'GET',
  path: '/v1/secureresize/:thumbPrint/:hash/:width/:height/:type/:format/:filterType',
  baseUrl: 'https://thumbnailsresizer.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    thumbPrint: {
      style: 'simple',
    },
    hash: {
      style: 'simple',
    },
    width: {
      style: 'simple',
    },
    height: {
      style: 'simple',
    },
    type: {
      style: 'simple',
    },
    format: {
      style: 'simple',
    },
    filterType: {
      style: 'form',
      explode: true,
    },
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
