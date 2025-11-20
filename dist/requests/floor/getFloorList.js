import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getFloorList(patrimoineId, buildingId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, 'api/v1/floor/list');
    let result = await spinalAPI.get(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { buildingId, patrimoineId, color: '#D138DE' });
        return obj;
    });
    return res;
}
