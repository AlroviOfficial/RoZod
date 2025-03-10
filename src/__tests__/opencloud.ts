import { fetchApi, fetchApiSplit } from '../index';
import * as OpenCloud from '../opencloud';

describe('OpenCloud v1 Universes API', () => {
  // Note: These tests expect API keys to be unavailable, so they should fail gracefully
  test('Get Universe Place Configuration', () => {
    fetchApi(
      OpenCloud.v1.universes.postUniverseIdPlacesPlaceIdVersions,
      { 
        universeId: 1534453623, // Example universe ID
        placeId: 2929055175 // Example place ID
      },
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
  
});

describe('OpenCloud v1 Messaging API', () => {
  test('Publish Message', () => {
    fetchApi(
      OpenCloud.v1.messaging.postUniversesUniverseIdTopicsTopic,
      {
        universeId: 1534453623,
        topic: 'testTopic',
        body: { message: 'Hello world!' }
      }
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
});

describe('OpenCloud v1 DataStores API', () => {
  test('Get DataStore Entries', () => {
    fetchApi(
      OpenCloud.v1.datastores.getUniversesUniverseIdDatastoresDatastoreEntries,
      {
       universeId: 1534453623,
      }
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
  
  test('List DataStores', () => {
    fetchApi(
      OpenCloud.v1.datastores.getUniversesUniverseIdDatastores,
      { 
        universeId: 1534453623,
        limit: 10
      }
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
});

describe('OpenCloud v1 Ordered DataStores API', () => {
  test('Get Ordered DataStore Entry', () => {
    fetchApi(
      OpenCloud.v1.datastoresOrdered.getUniversesUniverseIdOrderedDataStoresOrderedDataStoreScopesScopeEntries,
      {
        universeId: "1534453623",
		orderedDataStore: 'testOrderedDataStore',
		scope: 'testScope',
      }
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
});

describe('OpenCloud v1 Assets API', () => {
  test('Get Assets', () => {
    fetchApi(
      OpenCloud.v1.assets.getAssetsAssetId,
      {
        assetId: "123456"
      }
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
});

describe('OpenCloud v2 Cloud API', () => {
  test('Get Experience Info', () => {
    fetchApi(
      OpenCloud.v2.cloud.getCloudV2UniversesUniverseId,
      { 
        universe_id: "1534453623",
      }
    ).catch((error: Error) => {
      // Expect unauthorized error since we don't have API key
      expect(error.message).toBe('Invalid response data');
    });
  });
});