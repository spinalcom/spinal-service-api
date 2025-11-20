import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getFloorRoomList(patrimoineId, buildingId, floorId, floorDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/floor/${floorDynId}/room_list`);
    let result = await spinalAPI.get(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, floorId, color: '#ded638' });
        return obj;
    });
    return res;
}
