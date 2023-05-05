import { z } from 'zod';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';
type RequestFormat = 'json' | 'text';

export type EndpointSchema = {
  method: RequestMethod;
  path: string;
  baseUrl: string;
  serializationMethod?: Record<string, { style: string; explode?: boolean }>;
  requestFormat?: RequestFormat;
  parameters?: Record<string, z.Schema<any>>;
  response: z.Schema<any>;
  errors?: {
    status: number;
    description: string;
    schema: z.Schema<any>;
  }[];
};

type ExtractOptionalParams<S extends EndpointSchema> = S['parameters'] extends Record<
  string,
  z.ZodType<any, z.ZodTypeDef>
>
  ? {
      [K in keyof S['parameters']]: S['parameters'][K] extends z.ZodOptional<any> | z.ZodDefault<any> ? K : never;
    }[keyof S['parameters']]
  : never;

type ExtractRequiredParams<S extends EndpointSchema> = S['parameters'] extends Record<
  string,
  z.ZodType<any, z.ZodTypeDef>
>
  ? {
      [K in keyof S['parameters']]: S['parameters'][K] extends z.ZodOptional<any> | z.ZodDefault<any> ? never : K;
    }[keyof S['parameters']]
  : never;

type ExtractParams<S extends EndpointSchema> = S['parameters'] extends Record<string, z.ZodType<any, z.ZodTypeDef>>
  ? {
      [K in ExtractRequiredParams<S>]: S['parameters'][K]['_output'];
    } & {
      [K in ExtractOptionalParams<S>]?: S['parameters'][K] extends z.ZodOptional<infer T>
        ? T['_output']
        : S['parameters'][K] extends z.ZodDefault<infer D>
        ? D['_output']
        : never;
    }
  : {};

type ExtractResponse<S extends EndpointSchema> = z.infer<S['response']>;

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
  requestOptions?: RequestInit,
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
  requestOptions?: RequestInit,
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
  requestOptions: RequestInit = { mode: 'cors', credentials: 'include' },
): Promise<ExtractResponse<S>> {
  const { method, path, requestFormat = 'json' } = endpoint;

  const defaultValues = extractDefaultValues(endpoint);
  const extendedParams = { ...defaultValues, ...params } as ExtractParams<S>;

  let body: string | undefined;
  let processedPath = path;
  const queryParams: Record<string, string> = {};

  for (const key in extendedParams) {
    if (!{}.hasOwnProperty.call(extendedParams, key)) {
      continue;
    }
    const value = extendedParams[key];
    const pathParamPattern = new RegExp(`:${key}`);

    // Check for path parameter
    if (pathParamPattern.test(processedPath)) {
      processedPath = processedPath.replace(pathParamPattern, String(value));
      continue;
    }

    const mapStr = (v: any, joiner: string) => v.map(String).join(joiner);

    // Check for serialization method
    if (!endpoint.serializationMethod?.[key]) {
      if (Array.isArray(value)) {
        queryParams[key] = mapStr(value, ',');
      } else {
        queryParams[key] = String(value);
      }
      continue;
    }

    const { style, explode } = endpoint.serializationMethod[key];
    if (!Array.isArray(value)) {
      queryParams[key] = String(value);
      continue;
    }

    const joinTbl: Record<string, string> = {
      form: ',',
      spaceDelimited: ' ',
      pipeDelimited: '|',
    };

    if (explode) {
      queryParams[key] = mapStr(value, `&${key}=`);
      continue;
    }
    queryParams[key] = mapStr(value, joinTbl[style]);
  }

  const query = Object.keys(queryParams).length
    ? '?' +
      Object.entries(queryParams)
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    : '';

  if (method !== 'get' && requestFormat === 'json') {
    if (extendedParams.hasOwnProperty('body')) {
      body = JSON.stringify((extendedParams as any).body);
    } else {
      body = JSON.stringify(extendedParams);
    }
  }

  const response = await fetch(endpoint.baseUrl + processedPath + query, {
    method,
    body,
    ...requestOptions,
  });

  const error = endpoint.errors?.find(({ status }) => status === response.status);
  if (error) {
    throw new Error(error.description);
  }

  if (requestFormat === 'json' && !response.headers.get('content-type')?.includes('application/json')) {
    throw new Error('Invalid response data');
  }

  let data;
  if (requestFormat === 'json') {
    data = await response.json();
  } else {
    data = await response.text();
  }

  return data as ExtractResponse<S>;
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
  requestOptions?: RequestInit,
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
    if (!{}.hasOwnProperty.call(max, key) || !{}.hasOwnProperty.call(params, key)) {
      continue;
    }
    const maxItems = max[key as keyof ExtractParams<S>];
    const items = params[key as keyof ExtractParams<S>];
    if (Array.isArray(items)) {
      // eslint-disable-next-line max-depth
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

  const allResults: ExtractResponse<S>[] = [];

  for (const splitParam of splitParams) {
    const transformedResponse = await fetchTransformed(splitParam);
    allResults.push(transformedResponse);
  }

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
  initialParams: Omit<ExtractParams<S>, 'cursor'>,
  requestOptions?: RequestInit,
  limit: number = 1000,
): Promise<ExtractResponse<S>[]> {
  let cursor: string | undefined;
  const allResults: ExtractResponse<S>[] = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const paramsWithCursor = { ...initialParams, cursor } as ExtractParams<S>;
    const response = await fetchApi(endpoint, paramsWithCursor, requestOptions);

    allResults.push(response);

    if ('nextPageCursor' in response) {
      cursor = response.nextPageCursor;
    } else {
      break;
    }

    if (allResults.length >= limit) {
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
  initialParams: Omit<ExtractParams<S>, 'cursor'>,
  requestOptions?: RequestInit,
  limit: number = 1000,
): AsyncGenerator<ExtractResponse<S>, void, unknown> {
  let cursor: string | undefined;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const paramsWithCursor = { ...initialParams, cursor } as ExtractParams<S>;
    const response = await fetchApi(endpoint, paramsWithCursor, requestOptions);

    yield response;

    if ('nextPageCursor' in response) {
      cursor = response.nextPageCursor;
    } else {
      break;
    }

    if (limit-- <= 0) {
      break;
    }
  }
}

export { fetchApi, fetchApiSplit, fetchApiPages, fetchApiPagesGenerator };
