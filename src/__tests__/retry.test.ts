import { endpoint, fetchApi, isAnyErrorResponse } from '../index';
import { z } from 'zod';

const testEndpoint = endpoint({
  method: 'GET',
  baseUrl: 'https://example.com',
  path: '/test',
  response: z.object({ ok: z.boolean() }),
});

const successBody = JSON.stringify({ ok: true });

beforeEach(() => {
  jest.restoreAllMocks();
});

test('retries on 429 and succeeds', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(new Response('', { status: 429 }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(isAnyErrorResponse(result)).toBe(false);
  expect(result).toEqual({ ok: true });
});

test('retries on 500 and succeeds', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(new Response('', { status: 500 }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(isAnyErrorResponse(result)).toBe(false);
});

test('retries on 502 and succeeds', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(new Response('', { status: 502 }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(isAnyErrorResponse(result)).toBe(false);
});

test('retries on 503 and succeeds', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(new Response('', { status: 503 }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(isAnyErrorResponse(result)).toBe(false);
});

test('retries on 504 and succeeds', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(new Response('', { status: 504 }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(isAnyErrorResponse(result)).toBe(false);
});

test('returns error after exhausting retries on 429', async () => {
  const spy = jest.spyOn(globalThis, 'fetch').mockResolvedValue(
    new Response(JSON.stringify({ message: 'Too many requests' }), {
      status: 429,
      headers: { 'content-type': 'application/json' },
    }),
  );

  const result = await fetchApi(testEndpoint, {} as any, { retries: 2, retryDelay: 10 });

  // 1 initial + 2 retries = 3
  expect(spy).toHaveBeenCalledTimes(3);
  expect(isAnyErrorResponse(result)).toBe(true);
});

test('respects Retry-After header', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockResolvedValueOnce(new Response('', { status: 429, headers: { 'retry-after': '1' } }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const start = Date.now();
  await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });
  const elapsed = Date.now() - start;

  expect(spy).toHaveBeenCalledTimes(2);
  // Retry-After: 1 = 1000ms, should wait ~1s not 10ms
  expect(elapsed).toBeGreaterThanOrEqual(900);
});

test('does not retry on 404', async () => {
  const spy = jest.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
    new Response(JSON.stringify({ message: 'Not found' }), {
      status: 404,
      headers: { 'content-type': 'application/json' },
    }),
  );

  const result = await fetchApi(testEndpoint, {} as any, { retries: 3, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(1);
  expect(isAnyErrorResponse(result)).toBe(true);
});

test('retries on network error and succeeds', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockRejectedValueOnce(new Error('network error'))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 1, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(2);
  expect(isAnyErrorResponse(result)).toBe(false);
});

test('retries multiple times across different failure types', async () => {
  const spy = jest
    .spyOn(globalThis, 'fetch')
    .mockRejectedValueOnce(new Error('network error'))
    .mockResolvedValueOnce(new Response('', { status: 503 }))
    .mockResolvedValueOnce(new Response('', { status: 429 }))
    .mockResolvedValueOnce(new Response(successBody, { status: 200, headers: { 'content-type': 'application/json' } }));

  const result = await fetchApi(testEndpoint, {} as any, { retries: 3, retryDelay: 10 });

  expect(spy).toHaveBeenCalledTimes(4);
  expect(isAnyErrorResponse(result)).toBe(false);
  expect(result).toEqual({ ok: true });
});
