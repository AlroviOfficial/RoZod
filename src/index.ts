import { z } from 'zod';
import { Cache, ChromeStore, LocalStorageStore, MemoryStore } from './cache';
import { HBAClient } from 'roblox-bat';
import {
  type ParsedChallenge,
  parseChallengeHeaders,
  GENERIC_CHALLENGE_ID_HEADER,
  GENERIC_CHALLENGE_METADATA_HEADER,
  GENERIC_CHALLENGE_TYPE_HEADER,
} from 'parse-roblox-errors/esm/challenge';

type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
type RequestFormat = 'json' | 'text' | 'form-data';

type SerializationMethod = Record<string, { style?: string; explode?: boolean }>;

type EndpointBase = {
  method: RequestMethod;
  path: string;
  baseUrl: string;
  serializationMethod?: SerializationMethod;
  requestFormat?: RequestFormat;
  errors?: {
    status: number;
    description?: string;
  }[];
};

export type EndpointSchema = EndpointBase & {
  parameters?: any;
  body?: any;
  response: any;
};

/**
 * This is a hack to allow us to show the parameters and response types of an endpoint
 * as the inferred types of the parameters and response properties.
 */
type EndpointGeneric<T, U, E> = EndpointBase & {
  parameters?: T;
  body?: E;
  response: U;
};

// Infer zod object to include optional properties
type InferZodObjectOptional<T extends z.ZodRawShape> = {
  [K in keyof T]: T[K] extends z.ZodOptional<any> | z.ZodDefault<any> ? K : never;
}[keyof T];

type InferZodObjectRequired<T extends z.ZodRawShape> = {
  [K in keyof T]: T[K] extends z.ZodOptional<any> | z.ZodDefault<any> ? never : K;
}[keyof T];

type Merge<T, U> = T & U extends object ? { [K in keyof (T & U)]: (T & U)[K] } : T & U;

// Infers the schema of a Zod type.
type InferSchema<T extends z.ZodType<any>> = T extends z.ZodOptional<infer U>
  ? InferSchema<U> | undefined
  : T extends z.ZodUnion<infer U>
  ? InferSchema<U[number]>
  : T extends z.ZodNumber
  ? number
  : T extends z.ZodBoolean
  ? boolean
  : T extends z.ZodString
  ? string
  : T extends z.ZodNull
  ? null
  : T extends z.ZodUndefined
  ? undefined
  : T extends z.ZodAny
  ? any
  : T extends z.ZodDate
  ? Date
  : T extends z.ZodArray<infer U, any>
  ? InferSchema<U>[]
  : T extends z.ZodObject<infer U, any, any>
  ? Merge<
      { [K in InferZodObjectRequired<U>]: InferSchema<U[K]> },
      { [K in InferZodObjectOptional<U>]?: InferSchema<U[K]> }
    >
  : T extends z.ZodEnum<infer U>
  ? U[number]
  : T extends z.ZodNativeEnum<infer U>
  ? U
  : T extends z.ZodPromise<infer U>
  ? Promise<InferSchema<U>>
  : T extends z.ZodEffects<infer U, any, any>
  ? InferSchema<U>
  : T extends z.ZodTuple<infer U>
  ? { [K in keyof U]: InferSchema<U[K]> }
  : T extends z.ZodDefault<infer U>
  ? InferSchema<U>
  : T extends z.ZodUnion<infer U>
  ? InferSchema<U[number]>
  : T extends z.ZodLiteral<infer U>
  ? U
  : never;

type InferNonEmpty<T extends Record<string, z.Schema<any>>> = Merge<
  { [K in InferZodObjectRequired<T>]: InferSchema<T[K]> },
  { [K in InferZodObjectOptional<T>]?: InferSchema<T[K]> }
>;

const endpoint = <T extends Record<string, z.Schema<any>>, U extends z.ZodType<any>, E extends z.ZodType<any>>(
  endpoint: EndpointGeneric<T, U, E>,
): EndpointGeneric<InferNonEmpty<T>, InferSchema<U>, E extends z.ZodType<any> ? InferSchema<E> : undefined> => {
  return endpoint as any;
};

// Extract the parameter, and also include the body as a parameter, if it exists. Parameters shouldn't be undefined if body exists
type ExtractParams<S extends EndpointGeneric<any, any, any>> = S['parameters'] extends undefined
  ? S['body'] extends undefined
    ? undefined
    : { body: S['body'] }
  : S['body'] extends undefined
  ? S['parameters']
  : S['parameters'] & { body: S['body'] };

type ExtractResponse<S extends EndpointGeneric<any, any, any>> = S['response'];

function extractDefaultValues<S extends EndpointSchema>(endpoint: S): Partial<ExtractParams<S>> {
  const defaultValues: Partial<ExtractParams<S>> = {};

  type ParamKey = keyof S['parameters'];
  const paramKeys = Object.keys(endpoint.parameters || {}) as ParamKey[];

  for (const key of paramKeys) {
    const schema = endpoint.parameters?.[key as string];
    if (schema instanceof z.ZodDefault) {
      (defaultValues as Record<string, unknown>)[key as string] = schema._def.defaultValue();
    }
  }

  return defaultValues;
}

type RetryOptions = {
  retries?: number;
  retryDelay?: number;
};

type ErrorOptions = {
  throwOnError?: boolean;
};

type CacheOptions = {
  cacheTime?: number;
  cacheKey?: string;
  cacheType?: 'memory' | 'local' | 'chrome';
};

type RequestOptions = RequestInit & RetryOptions & ErrorOptions & CacheOptions;

// A helper function to replace path parameters in the URL
function replacePathParam(path: string, key: string, value: any) {
  const pathParamPattern = new RegExp(`:${key}`);
  return pathParamPattern.test(path) ? path.replace(pathParamPattern, String(value)) : path;
}

// A helper function to serialize a value into a query parameter
function serializeQueryParam(key: string, value: any, serializationMethod?: SerializationMethod) {
  const mapStr = (v: any, joiner: string) => v.map(String).join(joiner);

  if (!serializationMethod?.[key]) {
    return Array.isArray(value) ? mapStr(value, ',') : String(value);
  }

  const { style, explode } = serializationMethod[key];
  if (!Array.isArray(value) || !style) {
    return String(value);
  }

  const joinTbl: Record<string, string> = {
    form: ',',
    spaceDelimited: ' ',
    pipeDelimited: '|',
  };

  return explode ? mapStr(value, `&${key}=`) : mapStr(value, joinTbl[style]);
}

function prepareRequestUrl<S extends EndpointSchema>(endpoint: S, extendedParams: ExtractParams<S>) {
  let processedPath = endpoint.path;
  const queryParams: Record<string, string> = {};

  for (const key in extendedParams) {
    if (!{}.hasOwnProperty.call(extendedParams, key)) continue;
    if (key === 'body') continue;
    const value = extendedParams[key];

    processedPath = replacePathParam(processedPath, key, value);

    const serializedValue = serializeQueryParam(key, value, endpoint.serializationMethod);
    if (serializedValue !== undefined) {
      queryParams[key] = serializedValue;
    }
  }

  const query = Object.keys(queryParams).length
    ? '?' +
      Object.entries(queryParams)
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    : '';

  return endpoint.baseUrl + processedPath + query;
}

function prepareRequestBody<S extends EndpointSchema>(
  method: string,
  requestFormat: string,
  body: S['body'],
  headers: Headers,
): string {
  if (method !== 'get' && requestFormat === 'json') {
    body = JSON.stringify(body);
    headers.set('content-type', 'application/json');
  }

  return body;
}

const onRobloxSite = 'document' in globalThis && globalThis.location.href.includes('.roblox.com');
export const hbaClient = new HBAClient({
  onSite: onRobloxSite,
});

const getSHA256Hash = async (input: string) => {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map((item) => item.toString(16).padStart(2, '0')).join('');
  return hash;
};

const csrfAllowedMethods = ['post', 'patch', 'delete', 'put'];

let handleGenericChallengeFn:
  | ((challenge: ParsedChallenge) => Promise<ParsedChallenge | undefined> | ParsedChallenge | undefined)
  | undefined;

/**
 * Allows you to set the function that will be used to handle Roblox generic challenges, i.e. captchas, two-step verification.
 * @param fn The function to use.
 */
export function setHandleGenericChallenge(fn: typeof handleGenericChallengeFn) {
  handleGenericChallengeFn = fn;
}

const csrfTokenMap: Record<string, string> = {};
async function fetch(url: string, info?: RequestInit, challengeData?: ParsedChallenge): Promise<Response> {
  const headers = new Headers(info?.headers);
  if (!onRobloxSite) {
    hbaClient.isAuthenticated = headers.get('cookie')?.includes('.ROBLOSECURITY');
  }
  const setHeaders = await hbaClient.generateBaseHeaders(url, info?.credentials === 'include', info?.body);
  for (const key in setHeaders) {
    headers.set(key, setHeaders[key]);
  }

  if (challengeData) {
    headers.set(GENERIC_CHALLENGE_TYPE_HEADER, challengeData.challengeType);
    headers.set(GENERIC_CHALLENGE_ID_HEADER, challengeData.challengeId);
    headers.set(GENERIC_CHALLENGE_METADATA_HEADER, challengeData.challengeBase64Metadata);
  }

  let csrfKey: string = 'false';
  if (info?.method && csrfAllowedMethods.includes(info.method.toLowerCase())) {
    // Temp i guess? RoZod isn't built for something ike this. so we grab the .ROBLOSECURITY and hash it before setting it to object.
    if (headers.get('cookie')?.includes('.ROBLOSECURITY')) {
      const parsedCookieValue = headers.get('cookie')!.match(/.ROBLOSECURITY=(_\|.+\|_)?(.+?)(;|$| )/)?.[2];
      if (parsedCookieValue) {
        csrfKey = await getSHA256Hash(parsedCookieValue);
      }
    } else if (info.credentials === 'include') {
      csrfKey = 'true';
    }

    if (csrfTokenMap[csrfKey]) {
      headers.set('x-csrf-token', csrfTokenMap[csrfKey]);
    }
  }

  const res = await globalThis.fetch(url, {
    ...info,
    headers,
  });
  if (res.headers.has('x-csrf-token')) {
    csrfTokenMap[csrfKey] = res.headers.get('x-csrf-token')!;

    return fetch(url, info);
  } else if (handleGenericChallengeFn) {
    const challenge = parseChallengeHeaders(res.headers);
    if (challenge) {
      const data = await handleGenericChallengeFn(challenge);
      if (data) {
        return fetch(url, info, data);
      }
    }
  }

  return res;
}

/**
 * Allows you to change the Crypto Key pair used by the internal hardware-based authentication signatures. This should only be used in a NodeJS context.
 *
 * @param keys The crypto key pair.
 */
export function changeHBAKeys(keys?: CryptoKeyPair) {
  hbaClient.suppliedCryptoKeyPair = keys;
}
async function handleRetryFetch(
  url: string,
  requestOptions: RequestOptions,
  retries: number,
  retryDelay: number,
  body?: string,
  method?: string,
) {
  let response: Response | undefined = undefined;

  while (response === undefined) {
    try {
      response = await fetch(url, {
        method,
        body,
        ...requestOptions,
      });
      break;
    } catch (error) {
      if (retries <= 0) {
        throw error;
      }
      retries--;
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  return response;
}

const localStorageCache = new Cache(new LocalStorageStore());
const chromeStorageCache = new Cache(new ChromeStore());
const cache = new Cache(new MemoryStore());

/**
 * Fetches the data from the given endpoint and returns it.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params The parameters to pass to the endpoint.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The response from the endpoint.
 */
async function fetchApi<S extends EndpointSchema>(
  endpoint: S,
  params: ExtractParams<S>,
  requestOptions?: RequestOptions,
): Promise<ExtractResponse<S>>;

/**
 * Fetches the data from the given endpoint and returns it.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params Optional parameters to pass to the endpoint.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The response from the endpoint.
 */
async function fetchApi<S extends EndpointSchema>(
  endpoint: S & { parameters?: undefined },
  params?: ExtractParams<S>,
  requestOptions?: RequestOptions,
): Promise<ExtractResponse<S>>;

/**
 * Fetches the data from the given endpoint and returns it.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params The parameters to pass to the endpoint.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The response from the endpoint.
 */
async function fetchApi<S extends EndpointSchema>(
  endpoint: S,
  params?: ExtractParams<S>,
  requestOptions: RequestOptions = { mode: 'cors', credentials: 'include' },
): Promise<ExtractResponse<S>> {
  const { method, requestFormat = 'json' } = endpoint;
  const defaultValues = extractDefaultValues(endpoint);
  const extendedParams = { ...defaultValues, ...params } as ExtractParams<S>;
  const headers = new Headers(requestOptions.headers);

  const url = prepareRequestUrl(endpoint, extendedParams);
  const body = prepareRequestBody(method, requestFormat, params?.body, headers);

  const cacheKey = requestOptions.cacheKey;

  let cacheToUse: typeof Cache.prototype;
  if (requestOptions.cacheType === 'local') {
    cacheToUse = localStorageCache;
  } else if (requestOptions.cacheType === 'chrome') {
    cacheToUse = chromeStorageCache;
  } else {
    cacheToUse = cache;
  }

  const cachedResponse = cacheKey && cacheToUse.get(cacheKey);
  if (cachedResponse) {
    return cachedResponse;
  }

  const retries = requestOptions.retries ?? 0;
  const retryDelay = requestOptions.retryDelay ?? 0;

  const response = await handleRetryFetch(
    url,
    {
      ...requestOptions,
      headers,
    },
    retries,
    retryDelay,
    body,
    method,
  );

  const error = endpoint.errors?.find(({ status }) => status === response.status);
  if (error) {
    if (requestOptions.throwOnError === false) {
      throw new Error(error.description);
    } else {
      return error.description;
    }
  }

  if (requestFormat === 'json' && !response.headers.get('content-type')?.includes('application/json')) {
    throw new Error('Invalid response data');
  }

  if (requestOptions.cacheTime && cacheKey) {
    const responseClone = response.clone();
    const cacheTime = requestOptions.cacheTime;
    setTimeout(() => {
      cacheToUse.delete(cacheKey);
    }, cacheTime);
    cacheToUse.set(
      cacheKey,
      requestFormat === 'json' ? await responseClone.json() : await responseClone.text(),
      cacheTime,
    );
  }

  return requestFormat === 'json' ? await response.json() : await response.text();
}

/**
 * Fetches the data from the given endpoint, but splits the request into multiple requests if the specified parameter is larger than max specified.
 *
 * @param endpoint The endpoint to fetch from.
 * @param params The parameters to pass to the endpoint.
 * @param max The maximum number of items to pass to the endpoint.
 * @param transform A function that accepts the endpoint response and transforms it into the desired type.
 * @param requestOptions Any additional options to pass to fetch.
 * @returns The transformed response from the endpoint.
 * @example
 * ```ts
 * const data = await fetchApiSplit(getV1gamesicons, { universeIds: [1, 2, 3, 4, 5] }, { universeIds: 100 }, (response) => response.data);
 * console.log(data); // [[{ "targetId": 0, "state": "Completed", "imageUrl": "..." }], ...]
 * ```
 */
async function fetchApiSplit<S extends EndpointSchema, T = ExtractResponse<S>>(
  endpoint: S,
  params: ExtractParams<S>,
  max?: Partial<{ [K in keyof ExtractParams<S>]: number }>,
  transform: (response: ExtractResponse<S>) => T = (response: ExtractResponse<S>) => response as unknown as T,
  requestOptions?: RequestOptions,
): Promise<T[]> {
  const fetchTransformed = async (transformparams: ExtractParams<S>) => {
    const response = await fetchApi(endpoint, transformparams, requestOptions);
    return transform ? transform(response) : (response as T);
  };

  if (!max) {
    return [await fetchTransformed(params)];
  }

  const splitParams: ExtractParams<S>[] = [];
  for (const key in max) {
    if (!Object.hasOwn(max, key) || !{}.hasOwnProperty.call(params, key)) {
      continue;
    }
    const maxItems = max[key as keyof ExtractParams<S>];
    const items = params[key];
    if (Array.isArray(items)) {
      for (let i = 0; i < items.length; i = i + (maxItems || 1)) {
        const itemsSubset = items.slice(i, i + (maxItems || 1));
        const newParams = { ...params, [key]: itemsSubset } as ExtractParams<S>;
        splitParams.push(newParams);
      }
    }
  }

  if (splitParams.length === 0) {
    return [await fetchTransformed(params)];
  }

  const promises = splitParams.map(fetchTransformed);
  const allResults = await Promise.all(promises);

  return allResults;
}

/**
 * Fetches all pages of results for the given endpoint and parameters.
 *
 * @param endpoint The endpoint to fetch.
 * @param initialParams The initial parameters to use for the endpoint.
 * @param requestOptions The options to use when making requests.
 * @param limit The maximum number of pages to fetch.
 * @returns An array of all results.
 */
async function fetchApiPages<S extends EndpointSchema>(
  endpoint: S,
  initialParams: ExtractParams<S>,
  requestOptions?: RequestOptions,
  limit: number = 1000,
): Promise<ExtractResponse<S>[]> {
  const allResults: ExtractResponse<S>[] = [];

  for await (const response of fetchApiPagesGenerator(endpoint, initialParams, requestOptions, limit)) {
    if (response === null || response === undefined) {
      break;
    }

    const { nextPageCursor, ...rest } = response;
    allResults.push(rest);

    if (allResults.length >= limit || nextPageCursor === null || nextPageCursor === undefined) {
      break;
    }
  }

  return allResults;
}

/**
 * Fetches all pages of results for the given endpoint and parameters.
 * This is a generator function that yields each page as it is fetched.
 *
 * @param endpoint The endpoint to fetch.
 * @param initialParams The initial parameters to use for the endpoint.
 * @param requestOptions The options to use when making requests.
 * @param limit The maximum number of pages to fetch.
 * @returns An array of all results.
 * @yields The next page of results.
 * @example
 * ```ts
 * const pages = fetchApiPagesGenerator(getV1badgesicons, { badgeIds: [1, 2, 3] });
 * for await (const page of pages) {
 *    console.log(page.data);
 * }
 * ```
 */
async function* fetchApiPagesGenerator<S extends EndpointSchema>(
  endpoint: S,
  initialParams: ExtractParams<S>,
  requestOptions?: RequestOptions,
  limit: number = 1000,
): AsyncGenerator<ExtractResponse<S>, void, unknown> {
  let cursor = '';

  while (true) {
    const paramsWithCursor = { ...initialParams, cursor } as unknown as ExtractParams<S>;
    const response = await fetchApi(endpoint, paramsWithCursor, requestOptions);

    yield response;

    if (response.nextPageCursor === null || response.nextPageCursor === undefined || limit-- <= 0) {
      break;
    }

    cursor = response.nextPageCursor;
  }
}

export { fetchApi, fetchApiSplit, fetchApiPages, fetchApiPagesGenerator, ExtractResponse, ExtractParams, endpoint };
