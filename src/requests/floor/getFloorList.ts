import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ISpaceObject } from "./_interfaces";

export async function getFloorList(patrimoineId: string, buildingId: string): Promise<ISpaceObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, 'api/v1/floor/list');
    let result = await spinalAPI.get<ISpaceObject[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { buildingId, patrimoineId, color: '#D138DE' });
        return obj;
    });
    return res;
}