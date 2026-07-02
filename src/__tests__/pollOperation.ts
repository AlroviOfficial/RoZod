import { endpoint, pollOperation, fetchApiOperation } from '../index';
import { getCloudV2UsersUserIdGenerateThumbnail } from '../opencloud/v2/cloud';
import { z } from 'zod';

// Mirrors the generateThumbnail endpoint shape: baseUrl + a versioned path.
const generateThumbnail = endpoint({
  method: 'GET',
  path: '/cloud/v2/users/:user_id:generateThumbnail',
  baseUrl: 'https://apis.roblox.com',
  response: z.object({ path: z.string(), done: z.boolean() }),
  parameters: {
    user_id: z.string(),
  },
});

const jsonResponse = (body: unknown) => ({
  ok: true,
  status: 200,
  statusText: 'OK',
  headers: new Headers({ 'content-type': 'application/json' }),
  json: () => Promise.resolve(body),
  text: () => Promise.resolve(JSON.stringify(body)),
  clone() {
    return this;
  },
});

/**
 * URL-aware fetch mock. Requests to the operation URL are served from `queue`
 * (consumed in order, last entry sticks); any other URL — e.g. an internal
 * HBA signing-nonce request — gets a benign empty response so it doesn't
 * disturb the operation sequence. Returns the operation-URL calls for assertions.
 */
const mockOperationFetch = (queue: unknown[]) => {
  const operationCalls: string[] = [];
  let index = 0;
  const fetchMock = jest.fn((url: string) => {
    if (typeof url === 'string' && url.includes('/operations/')) {
      operationCalls.push(url);
      const body = queue[Math.min(index, queue.length - 1)];
      index++;
      return Promise.resolve(jsonResponse(body));
    }
    return Promise.resolve(jsonResponse({}));
  });
  global.fetch = fetchMock as unknown as typeof fetch;
  return operationCalls;
};

const ThumbnailResult = z.object({ imageUri: z.string() });

afterEach(() => {
  jest.restoreAllMocks();
});

test('returns immediately without polling when the operation is already done', async () => {
  const fetchMock = jest.fn();
  global.fetch = fetchMock as unknown as typeof fetch;

  const result = await pollOperation(
    generateThumbnail,
    { path: 'users/1/operations/abc', done: true, response: { imageUri: 'https://img/1.png' } },
    ThumbnailResult,
  );

  expect(result.imageUri).toBe('https://img/1.png');
  expect(fetchMock).not.toHaveBeenCalled();
});

test('polls the derived operation URL until done and returns the parsed result', async () => {
  const operationCalls = mockOperationFetch([
    { path: 'users/1/operations/abc', done: false },
    { path: 'users/1/operations/abc', done: true, response: { imageUri: 'https://img/1.png' } },
  ]);

  const result = await pollOperation(
    generateThumbnail,
    { path: 'users/1/operations/abc', done: false },
    ThumbnailResult,
    { interval: 1 },
  );

  expect(result.imageUri).toBe('https://img/1.png');
  expect(operationCalls).toHaveLength(2);
  // Version prefix (/cloud/v2) derived from the originating endpoint path.
  expect(operationCalls[0]).toBe('https://apis.roblox.com/cloud/v2/users/1/operations/abc');
});

test('honours an explicit pathPrefix override', async () => {
  const operationCalls = mockOperationFetch([
    { path: 'operations/xyz', done: true, response: { imageUri: 'https://img/2.png' } },
  ]);

  await pollOperation(generateThumbnail, { path: 'operations/xyz', done: false }, ThumbnailResult, {
    interval: 1,
    pathPrefix: '/assets/v1',
  });

  expect(operationCalls[0]).toBe('https://apis.roblox.com/assets/v1/operations/xyz');
});

test('throws when the operation completes with an error', async () => {
  mockOperationFetch([{ path: 'users/1/operations/abc', done: true, error: { code: 3, message: 'bad input' } }]);

  await expect(
    pollOperation(generateThumbnail, { path: 'users/1/operations/abc', done: false }, ThumbnailResult, { interval: 1 }),
  ).rejects.toThrow('bad input');
});

test('throws when the operation does not complete before the timeout', async () => {
  mockOperationFetch([{ path: 'users/1/operations/abc', done: false }]);

  await expect(
    pollOperation(generateThumbnail, { path: 'users/1/operations/abc', done: false }, ThumbnailResult, {
      interval: 1,
      timeout: 10,
    }),
  ).rejects.toThrow(/did not complete within 10ms/);
});

test('falls back to the endpoint resultResponse schema when no schema is passed', async () => {
  const endpointWithResult = endpoint({
    method: 'GET',
    path: '/cloud/v2/users/:user_id:generateThumbnail',
    baseUrl: 'https://apis.roblox.com',
    response: z.object({ path: z.string(), done: z.boolean() }),
    resultResponse: z.object({ imageUri: z.string() }),
    parameters: { user_id: z.string() },
  });
  mockOperationFetch([{ path: 'users/1/operations/abc', done: true, response: { imageUri: 'https://img/3.png' } }]);

  const result = await pollOperation(
    endpointWithResult,
    { path: 'users/1/operations/abc', done: false },
    { interval: 1 },
  );

  // Typed from the endpoint's resultResponse, no explicit schema needed.
  expect(result.imageUri).toBe('https://img/3.png');
});

test('fetchApiOperation fetches then polls in a single call against the generated endpoint', async () => {
  let calls = 0;
  global.fetch = jest.fn((url: string) => {
    if (typeof url === 'string' && url.includes('/operations/')) {
      return Promise.resolve(
        jsonResponse({ path: 'users/1/operations/abc', done: true, response: { imageUri: 'https://img/4.png' } }),
      );
    }
    if (typeof url === 'string' && url.includes('generateThumbnail')) {
      calls++;
      return Promise.resolve(jsonResponse({ path: 'users/1/operations/abc', done: false }));
    }
    return Promise.resolve(jsonResponse({})); // internal (e.g. HBA) calls
  }) as unknown as typeof fetch;

  // No schema argument — the result type comes from the endpoint's codegen'd resultResponse.
  const result = await fetchApiOperation(
    getCloudV2UsersUserIdGenerateThumbnail,
    { user_id: '1', shape: 'SQUARE', format: 'PNG' },
    { interval: 1, requestOptions: { credentials: 'omit' } },
  );

  expect(result.imageUri).toBe('https://img/4.png');
  expect(calls).toBe(1);
});
