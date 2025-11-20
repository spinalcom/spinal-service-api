import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IEquipementsGroup } from "./_interfaces";

export async function getEquipmentGroupList(patrimoineId: string, buildingId: string, floorId: string, floorDynId: number): Promise<IEquipementsGroup[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/equipementsGroup/list`);
    let result = await spinalAPI.get<IEquipementsGroup[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, floorId, color: '#ded638' });
        return obj;
    });
    return res;
}