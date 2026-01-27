import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IEquipmentList } from "./_interfaces";

export async function getRoomEquipmentList(buildingId: string, roomDynId: number): Promise<IEquipmentList[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/room/${roomDynId}/equipement_list`);
    let result = await spinalAPI.get<IEquipmentList[]>(url);
    const res = result.data
    return res;
}