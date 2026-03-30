import { fetchApi, isAnyErrorResponse } from '../index';
import * as OpenCloud from '../opencloud';

/**
 * PATCH endpoints should accept partial body objects, not require every field.
 *
 * These tests verify that fetchApi accepts partial bodies for PATCH endpoints
 * at the type level. If TypeScript compilation succeeds, the types are correct.
 */

describe('PATCH endpoints accept partial bodies via fetchApi', () => {
  test('patchCloudV2GroupsGroupIdMembershipsMembershipId accepts only role in body', async () => {
    // previously required createTime, updateTime, path, user in body
    const result = await fetchApi(OpenCloud.v2.patchCloudV2GroupsGroupIdMembershipsMembershipId, {
      group_id: '123',
      membership_id: '456',
      body: {
        role: 'groups/123/roles/789',
      },
    });

    // Auth error expected — the point is this compiles and doesn't throw a type error
    expect(isAnyErrorResponse(result)).toBe(true);
  });

  test('patchCloudV2UniversesUniverseIdPlacesPlaceIdUserRestrictionsUserRestrictionId accepts partial body', async () => {
    // previously required path, updateTime, user, gameJoinRestriction
    const result = await fetchApi(
      OpenCloud.v2.patchCloudV2UniversesUniverseIdPlacesPlaceIdUserRestrictionsUserRestrictionId,
      {
        universe_id: '123',
        place_id: '456',
        user_restriction_id: '789',
        body: {
          gameJoinRestriction: {
            active: true,
            startTime: '2023-07-05T12:34:56Z',
            duration: '3600s',
            privateReason: 'test',
            displayReason: 'test',
            excludeAltAccounts: false,
            inherited: false,
          },
        },
      },
    );

    expect(isAnyErrorResponse(result)).toBe(true);
  });

  test('patchCloudV2UniversesUniverseId accepts only displayName in body', async () => {
    const result = await fetchApi(OpenCloud.v2.patchCloudV2UniversesUniverseId, {
      universe_id: '123',
      body: {
        displayName: 'My Game',
      },
    });

    expect(isAnyErrorResponse(result)).toBe(true);
  });

  test('patchCloudV2UniversesUniverseIdPlacesPlaceId accepts only displayName in body', async () => {
    const result = await fetchApi(OpenCloud.v2.patchCloudV2UniversesUniverseIdPlacesPlaceId, {
      universe_id: '123',
      place_id: '456',
      body: {
        displayName: 'My Place',
      },
    });

    expect(isAnyErrorResponse(result)).toBe(true);
  });
});
