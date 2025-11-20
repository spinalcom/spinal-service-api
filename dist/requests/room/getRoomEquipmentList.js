import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getRoomEquipmentList(patrimoineId, buildingId, floorId, roomId, roomDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/room/${roomDynId}/equipement_list`);
    let result = await spinalAPI.get(url);
    const res = result.data;
    return res;
}
