// Verifies that package.json#exports resolves correctly under Node's ESM loader.
// Runs against the built output in ./lib via package self-reference (import 'rozod/...').
// Exercises every subpath documented in README + the ./lib/* compat paths.

import assert from 'node:assert/strict';

import { getUsersUserid, postUsernamesUsers } from 'rozod/endpoints/usersv1';
import { getGroupsGroupidWallPosts } from 'rozod/endpoints/groupsv2';
import { getGamesIcons } from 'rozod/endpoints/thumbnailsv1';
import { v1, v2 } from 'rozod/opencloud';
import { getCloudV2GroupsGroupId } from 'rozod/opencloud/v2/cloud';
import { Cache, MemoryStore } from 'rozod/cache';
import { fetchApi, isAnyErrorResponse, configureServer } from 'rozod';

import { getUsersUserid as getUsersUseridLegacy } from 'rozod/lib/endpoints/usersv1';
import { v1 as v1Legacy } from 'rozod/lib/opencloud';

assert.equal(typeof getUsersUserid, 'object', 'rozod/endpoints/usersv1 → getUsersUserid');
assert.equal(typeof postUsernamesUsers, 'object', 'rozod/endpoints/usersv1 → postUsernamesUsers');
assert.equal(typeof getGroupsGroupidWallPosts, 'object', 'rozod/endpoints/groupsv2 → getGroupsGroupidWallPosts');
assert.equal(typeof getGamesIcons, 'object', 'rozod/endpoints/thumbnailsv1 → getGamesIcons');

assert.ok(v1 && typeof v1 === 'object', 'rozod/opencloud → v1');
assert.ok(v1.universes && v1.datastores, 'rozod/opencloud → v1 namespaces');
assert.ok(v2 && typeof v2 === 'object', 'rozod/opencloud → v2');
assert.equal(typeof getCloudV2GroupsGroupId, 'object', 'rozod/opencloud/v2/cloud → getCloudV2GroupsGroupId');

assert.equal(typeof Cache, 'function', 'rozod/cache → Cache');
assert.equal(typeof MemoryStore, 'function', 'rozod/cache → MemoryStore');

assert.equal(typeof fetchApi, 'function', 'rozod → fetchApi');
assert.equal(typeof isAnyErrorResponse, 'function', 'rozod → isAnyErrorResponse');
assert.equal(typeof configureServer, 'function', 'rozod → configureServer');

assert.equal(getUsersUseridLegacy, getUsersUserid, 'rozod/lib/endpoints/usersv1 resolves to the same module as rozod/endpoints/usersv1');
assert.equal(v1Legacy, v1, 'rozod/lib/opencloud resolves to the same module as rozod/opencloud');

console.log('All ESM imports resolved correctly.');
