<h1 align="center" style="height: 200; overflow: 'hidden'">
    <img src="https://github.com/alexop1000/RoZod/assets/46445843/1c2a6cb5-b1d6-4784-b084-0679d81109c3" alt="RoZod" width="400" />
    <br>
</h1>

<h4 align="center">Type-safe Roblox API and OpenCloud client for TypeScript</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/rozod?style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm" src="https://img.shields.io/npm/v/rozod?style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/rozod"><img alt="npm" src="https://img.shields.io/npm/dt/rozod?style=for-the-badge"></a>
</p>

<p align="center">
  <a href="https://rozod.alrovi.com">Documentation</a> •
  <a href="https://rozod.alrovi.com/getting-started/quick-start/">Quick Start</a> •
  <a href="https://rozod.alrovi.com/reference/core-api/">API Reference</a>
</p>

---

RoZod makes working with Roblox APIs simple and type-safe. **695+ classic web API endpoints** and **115+ OpenCloud endpoints**, all code-generated from official Roblox documentation, with authentication, CSRF tokens, cookie rotation, pagination, batching, and error parsing handled for you.

Works in Node.js, Bun, Deno, browsers, and browser extensions. Battle-tested in [RoGold](https://rogold.live), serving 800,000+ users with millions of API requests daily.

## Installation

```bash
npm install rozod
```

## Quick Start

```ts
import { fetchApi, isAnyErrorResponse } from 'rozod';
import { getUsersUserid } from 'rozod/endpoints/usersv1';

const user = await fetchApi(getUsersUserid, { userId: 1 });
if (!isAnyErrorResponse(user)) {
  console.log(user.displayName); // fully typed!
}
```

On a server, configure authentication once and every request uses it:

```ts
import { configureServer } from 'rozod';

configureServer({
  cookies: process.env.ROBLOX_COOKIE,   // classic *.roblox.com APIs
  cloudKey: process.env.ROBLOX_CLOUD_KEY, // OpenCloud APIs
});
```

## Documentation

Full guides and reference at **[rozod.alrovi.com](https://rozod.alrovi.com)**:

- [Installation & Setup](https://rozod.alrovi.com/getting-started/installation/)
- [Authentication](https://rozod.alrovi.com/guides/authentication/) — cookie pools, rotation, OpenCloud keys, challenges
- [Error Handling](https://rozod.alrovi.com/guides/error-handling/)
- [Pagination](https://rozod.alrovi.com/guides/pagination/) & [Batch Requests](https://rozod.alrovi.com/guides/batch-requests/)
- [Caching](https://rozod.alrovi.com/guides/caching/)
- [OpenCloud](https://rozod.alrovi.com/guides/opencloud/) & [Long-Running Operations](https://rozod.alrovi.com/guides/long-running-operations/)
- [Custom Endpoints](https://rozod.alrovi.com/guides/custom-endpoints/)
- [Core API Reference](https://rozod.alrovi.com/reference/core-api/) — every exported function and type
- [Coming from noblox.js?](https://rozod.alrovi.com/getting-started/migration-from-nobloxjs/)

## Credits

Maintained by Alrovi ApS, the company behind RoGold.

## Disclaimer

RoZod is not affiliated with, maintained, authorized, endorsed, or sponsored by Roblox Corporation or any of its affiliates.
