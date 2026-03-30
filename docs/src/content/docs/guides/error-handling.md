---
title: Error Handling
description: Understanding and handling errors from Roblox API responses
---

RoZod provides structured error handling for Roblox API responses through the `AnyError` type and the `isAnyErrorResponse` helper.

## Default Behavior — Union Return

By default, `fetchApi` returns `ExtractResponse<S> | AnyError`. You use `isAnyErrorResponse` to check which one you got:

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

const result = await fetchApi(getUsersUserid, { userId: 1 });

if (isAnyErrorResponse(result)) {
  // result is AnyError
  console.error(result.message);
  console.error(result.code);           // error code — string or number (if available)
  console.error(result.field);           // field that caused the error (if available)
  console.error(result.userFacingMessage); // user-friendly message (if available)
} else {
  // result is the typed response
  console.log(result.name);
}
```

:::tip
`isAnyErrorResponse` uses a private Symbol brand internally, making it reliable even across module boundaries. It's the only correct way to check for errors.
:::

## Throw on Error

If you prefer exceptions, pass `throwOnError: true`:

```ts
try {
  const user = await fetchApi(
    getUsersUserid,
    { userId: 1 },
    { throwOnError: true },
  );
  // user is just ExtractResponse — no AnyError in the union
  console.log(user.name);
} catch (error) {
  console.error(error.message);
}
```

## Error Parsing

RoZod automatically parses Roblox API error responses using [parse-roblox-errors](https://github.com/RoSeal-Extension/Parse-Roblox-Errors):

- **Classic APIs** (`*.roblox.com`) — parsed with `parseBEDEV1Error`, extracting structured error codes and messages from the `errors` array in the response body
- **OpenCloud APIs** (`apis.roblox.com`) — parsed with `parseBEDEV2Error`, handling the different error format used by v2 endpoints
- **Non-Roblox domains** — best-effort extraction from common fields (`message`, `error`, `error_message`, `detail`)

## The `AnyError` Type

The `AnyError` type from `parse-roblox-errors` includes these fields (all optional except `message`):

```ts
type AnyError = {
  message: string;
  code?: string | number;
  field?: string;
  fieldData?: string;
  userFacingMessage?: string;
  childErrors?: ChildError[];
  hint?: string | null;
};
```

## Endpoint Error Documentation

Each endpoint definition includes its known error responses. These are available on the endpoint object's `errors` property:

```ts
import { getUsersUserid } from 'rozod/lib/endpoints/usersv1';

console.log(getUsersUserid.errors);
// [
//   { status: 400, description: '1: User not found.' },
//   { status: 401, description: '0: Authorization has been denied for this request.' },
// ]
```

Refer to the [API Reference](/reference/classic/account-information-v1/) for the complete error list for each endpoint.

## Retries

You can configure automatic retries for transient failures:

```ts
const result = await fetchApi(
  getUsersUserid,
  { userId: 1 },
  {
    retries: 3,       // retry up to 3 times
    retryDelay: 1000, // wait 1 second between retries
  },
);
```

Note: CSRF token failures and generic challenges (captcha, 2FA) are retried automatically regardless of this setting.
