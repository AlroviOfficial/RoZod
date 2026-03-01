import { endpoint, fetchApi, isAnyErrorResponse } from '../index';
import { z } from 'zod';

const testEndpoint = endpoint({
  method: 'DELETE',
  baseUrl: 'https://example.com/',
  path: 'api/outfit/{code}',
  response: z.object({ message: z.string() }),
  parameters: {
    code: z.string(),
  },
});

const mockFetch = (status: number, body: unknown) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? 'OK' : 'Bad Request',
    headers: new Headers({ 'content-type': 'application/json' }),
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(JSON.stringify(body)),
    clone() {
      return this;
    },
  });
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('200 response with message field is NOT treated as error', async () => {
  mockFetch(200, { message: 'Outfit deleted successfully' });
  const result = await fetchApi(testEndpoint, { code: 'abc123' });
  expect(isAnyErrorResponse(result)).toBe(false);
  expect((result as any).message).toBe('Outfit deleted successfully');
});

test('400 response with error field is treated as error', async () => {
  mockFetch(400, { error: 'Outfit name contains inappropriate language' });
  const result = await fetchApi(testEndpoint, { code: 'abc123' });
  expect(isAnyErrorResponse(result)).toBe(true);
  expect((result as any).message).toBe('Outfit name contains inappropriate language');
});

test('400 response with message field is treated as error', async () => {
  mockFetch(400, { message: 'Something went wrong' });
  const result = await fetchApi(testEndpoint, { code: 'abc123' });
  expect(isAnyErrorResponse(result)).toBe(true);
  expect((result as any).message).toBe('Something went wrong');
});

test('500 response with no standard error field is treated as error', async () => {
  mockFetch(500, { unexpected: 'format' });
  const result = await fetchApi(testEndpoint, { code: 'abc123' });
  expect(isAnyErrorResponse(result)).toBe(true);
});

test('isAnyErrorResponse returns false for primitives and arrays', () => {
  expect(isAnyErrorResponse(null)).toBe(false);
  expect(isAnyErrorResponse(undefined)).toBe(false);
  expect(isAnyErrorResponse('')).toBe(false);
  expect(isAnyErrorResponse(42)).toBe(false);
  expect(isAnyErrorResponse([{ message: 'test' }])).toBe(false);
});

test('isAnyErrorResponse returns false for plain objects without tag', () => {
  expect(isAnyErrorResponse({ message: 'not an error' })).toBe(false);
  expect(isAnyErrorResponse({ error: 'not tagged' })).toBe(false);
  expect(isAnyErrorResponse({ code: 0, message: 'looks like error but is not' })).toBe(false);
});
