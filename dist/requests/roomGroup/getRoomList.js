import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getRoomList(patrimoineId, buildingId, contextDynId, categoryDynId, groupDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/roomsGroup/${contextDynId}/category/${categoryDynId}/group/${groupDynId}/roomList`);
    let result = await spinalAPI.get(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId });
        return obj;
    });
    return res;
}
