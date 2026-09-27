import { z } from 'zod';
import {
  fetchApi,
  endpoint,
  clearCsrfTokens,
  setHandleGenericChallenge,
  configureServer,
  clearServerConfig,
} from '../index';

const originalFetch = globalThis.fetch;

const postEndpoint = endpoint({
  method: 'POST',
  baseUrl: 'https://test.roblox.com',
  path: '/csrf-test',
  response: z.object({ ok: z.boolean() }),
});

type Responder = () => Response | Promise<Response>;

let responders: Responder[] = [];
let sentCsrfTokens: (string | null)[] = [];
let sentCookies: (string | null)[] = [];

const ok = () =>
  new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });

const csrfRejection = (token: string, extraHeaders: Record<string, string> = {}) =>
  new Response(JSON.stringify({ errors: [{ code: 0, message: 'Token Validation Failed' }] }), {
    status: 403,
    headers: { 'content-type': 'application/json', 'x-csrf-token': token, ...extraHeaders },
  });

const challengeResponse = () =>
  new Response(JSON.stringify({ errors: [{ code: 0, message: 'Challenge is required' }] }), {
    status: 403,
    headers: {
      'content-type': 'application/json',
      'rblx-challenge-id': 'challenge-1',
      'rblx-challenge-type': 'twostepverification',
      'rblx-challenge-metadata': btoa('{}'),
    },
  });

function deferredResponder() {
  let release!: (res: Response) => void;
  let markCalled!: () => void;
  const called = new Promise<void>((resolve) => (markCalled = resolve));
  const responder: Responder = () => {
    markCalled();
    return new Promise<Response>((resolve) => (release = resolve));
  };
  return { responder, called, release: (res: Response) => release(res) };
}

// With no configured cookie, credentials: 'include' puts every request (including retries) in the shared CSRF slot.
const post = () => fetchApi(postEndpoint, {}, { returnRaw: true, credentials: 'include' });

beforeEach(() => {
  clearCsrfTokens();
  responders = [];
  sentCsrfTokens = [];
  sentCookies = [];

  globalThis.fetch = jest.fn(async (_url: string | URL | Request, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    sentCsrfTokens.push(headers.get('x-csrf-token'));
    sentCookies.push(headers.get('cookie'));
    return (responders.shift() ?? ok)();
  }) as typeof fetch;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  setHandleGenericChallenge(undefined);
  clearServerConfig();
});

describe('shared CSRF slot', () => {
  test('stops previously stored tokens from being sent', async () => {
    responders = [() => csrfRejection('token-1')];
    await post();
    await post();
    expect(sentCsrfTokens).toEqual([null, 'token-1', 'token-1']);

    clearCsrfTokens();
    await post();
    expect(sentCsrfTokens[3]).toBeNull();
  });

  test('a response that arrives after a clear is returned as-is without storing its token', async () => {
    const pending = deferredResponder();
    responders = [pending.responder];

    const request = post();
    await pending.called;
    clearCsrfTokens();
    pending.release(csrfRejection('stale-token'));

    const res = await request;
    expect(res.status).toBe(403);
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);

    await post();
    expect(sentCsrfTokens).toEqual([null, null]);
  });

  test('a request sent after a clear still stores its token and retries', async () => {
    responders = [() => csrfRejection('token-1')];

    // The clear lands while fetch() is still preparing headers, before anything is sent.
    const request = post();
    clearCsrfTokens();

    const res = await request;
    expect(res.status).toBe(200);
    expect(sentCsrfTokens).toEqual([null, 'token-1']);
  });

  test('a retry is not sent once tokens have been cleared', async () => {
    setHandleGenericChallenge(async (challenge) => {
      clearCsrfTokens();
      return challenge;
    });
    responders = [challengeResponse];

    const res = await post();
    expect(res.status).toBe(403);
    expect(res.headers.get('rblx-challenge-id')).toBe('challenge-1');
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });

  test('a successful response carrying a token is not replayed', async () => {
    responders = [
      () =>
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'content-type': 'application/json', 'x-csrf-token': 'token-1' },
        }),
    ];

    const res = await post();
    expect(res.status).toBe(200);
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });
});

describe('cookie-keyed CSRF slots', () => {
  beforeEach(() => {
    configureServer({ cookies: 'test-cookie' });
  });

  test('CSRF retries keep the pool cookie and send the new token', async () => {
    responders = [() => csrfRejection('token-1')];

    const res = await post();
    expect(res.status).toBe(200);
    expect(sentCookies).toEqual(['.ROBLOSECURITY=test-cookie', '.ROBLOSECURITY=test-cookie']);
    expect(sentCsrfTokens).toEqual([null, 'token-1']);
  });

  test('a request in flight during a clear still stores its token and retries', async () => {
    const pending = deferredResponder();
    responders = [pending.responder];

    const request = post();
    await pending.called;
    clearCsrfTokens();
    pending.release(csrfRejection('token-1'));

    const res = await request;
    expect(res.status).toBe(200);
    expect(sentCsrfTokens).toEqual([null, 'token-1']);
  });

  test('a retry after a cookie rotation sends the rotated cookie', async () => {
    responders = [() => csrfRejection('token-1', { 'set-cookie': '.ROBLOSECURITY=test-cookie-2; Path=/' })];

    const res = await post();
    expect(res.status).toBe(200);
    expect(sentCookies).toEqual(['.ROBLOSECURITY=test-cookie', '.ROBLOSECURITY=test-cookie-2']);
  });

  test('a retry is not sent once its pool cookie has been replaced', async () => {
    const pending = deferredResponder();
    responders = [pending.responder];

    const request = post();
    await pending.called;
    configureServer({ cookies: 'other-cookie' });
    pending.release(csrfRejection('token-1'));

    const res = await request;
    expect(res.status).toBe(403);
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });
});
