import { fetchApi, fetchApiSplit } from "../index";
import { getV1gamesicons } from '../endpoints/thumbnailsv1';
import { getV1groupsGroupIdmembership } from '../endpoints/groupsv1';

test("fetch game icons", async () => {
	return fetchApiSplit(getV1gamesicons, { universeIds: [1534453623, 65241, 110181652, 2585430167, 3262314006] }, { universeIds: 100 }, (response) => response.data)
		.then((data) => {
			const flattened = data.flat(1);
			expect(flattened).toHaveLength(5);
			expect(flattened[0]).toHaveProperty("targetId");
		});
})

// Should fail, since no cookie is provided.
test("fail fetch group members", async () => {
	return fetchApi(getV1groupsGroupIdmembership, { groupId: 11479637 }).catch((error) => {
		expect(error).toHaveProperty("message", getV1groupsGroupIdmembership.errors[0].description);
	})
})