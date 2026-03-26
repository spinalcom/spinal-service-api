import { SpinalAPI } from "../../spinalAPI"; 
import { IEquipmentPosition } from "./_interfaces";


export async function getEquipmentPosition(buildingId: string, dynamicId: number): Promise<IEquipmentPosition> {
    
    try {
        const spinalApi = SpinalAPI.getInstance();
        const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/equipment/${dynamicId}/get_position`);
        const res = await spinalApi.get(url);
        return res.data as IEquipmentPosition;
    } catch (error) {
        throw error;
    }
}
