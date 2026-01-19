import { SpinalAPI } from "../../spinalAPI";


interface EquipmentInGroupResponse {
    dynamicId: number;
    staticId: string,
    name: string,
    type: string,
}

export async function AddequipmentIngGroup(buildingId: string = "", contextId: number, categoryId: number, groupId: number, dynamicIds: number[]): Promise<EquipmentInGroupResponse[]> {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/equipementsGroup/${contextId}/category/${categoryId}/group/${groupId}/addEquipements`);
        const body = dynamicIds;

        const response = await spinalAPI.post<EquipmentInGroupResponse[]>(url, body);
        return response.data;
    } catch(error) {
        throw error;
    }
} 

