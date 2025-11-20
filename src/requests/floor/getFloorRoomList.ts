
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ISpaceObject } from "./_interfaces";


export async function getFloorRoomList(patrimoineId: string, buildingId: string, floorId: string, floorDynId: number): Promise<ISpaceObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/floor/${floorDynId}/room_list`);
    let result = await spinalAPI.get<ISpaceObject[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, floorId, color: '#ded638' });
        return obj;
    });
    return res;
}
