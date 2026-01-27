
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ISpaceObject } from "./_interfaces";


export async function getFloorRoomList2(buildingId: string, floorDynId: number): Promise<ISpaceObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        buildingId,
        `api/v1/floor/${floorDynId}/room_list`
    );

    const result = await spinalAPI.get<ISpaceObject[]>(url);
    return result.data;
}

