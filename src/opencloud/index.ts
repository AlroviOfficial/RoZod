// OpenCloud APIs index file
// These are Roblox's OpenCloud APIs which are separate from the legacy web APIs (https://create.roblox.com/docs/en-us/cloud)

// Import v1 APIs
import * as UniversesV1 from './v1/universes';
import * as MessagingV1 from './v1/messaging';
import * as DatastoresV1 from './v1/datastores';
import * as DatastoresOrderedV1 from './v1/datastores-ordered';
import * as AssetsV1 from './v1/assets';

// Import v2 APIs
import * as CloudV2 from './v2/cloud';

/**
 * OpenCloud v1 APIs
 * @description Roblox OpenCloud v1 APIs for universes, messaging, datastores, and assets
 */
export const v1 = {
  /** Universe APIs for managing Roblox experiences */
  universes: UniversesV1,
  /** Messaging APIs for cross-server communication */
  messaging: MessagingV1,
  /** DataStore APIs for persistent data storage */
  datastores: DatastoresV1,
  /** Ordered DataStore APIs for leaderboards and sorted data */
  datastoresOrdered: DatastoresOrderedV1,
  /** Asset APIs for managing experience assets */
  assets: AssetsV1,
};

/**
 * OpenCloud v2 APIs
 * @description Roblox OpenCloud v2 APIs
 */
export const v2 = CloudV2;

// Named exports for direct access
export { UniversesV1, MessagingV1, DatastoresV1, DatastoresOrderedV1, AssetsV1, CloudV2 };
