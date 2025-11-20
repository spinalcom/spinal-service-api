import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IRoomReferenceObjectList } from "./_interfaces";

export async function getRoomRefenceObjectsList(platformId: string, roomDynId: number): Promise<IRoomReferenceObjectList[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        platformId,
        `api/v1/room/${roomDynId}/reference_Objects_list`
    );
    let result = await spinalAPI.get<IRoomReferenceObjectList[]>(url);
    return result.data;
}