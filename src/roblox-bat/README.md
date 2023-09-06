## roblox-bat

Handles `x-bound-auth-token` generation for extensions. Usage for when Roblox's dark launch of HBA
(hardware-based authentication) rolls out. As of September 2023, it has not rolled out yet.

### Usage

```ts
import { HBAClient } from "roblox-bat";

const hbaClient = new HBAClient({
    onSite: true,
});
const headers = await hbaClient.generateBaseHeaders();

await fetch("https://users.roblox.com/v1/users/authenticated", {
    headers,
    credentials: "include",
});
```
