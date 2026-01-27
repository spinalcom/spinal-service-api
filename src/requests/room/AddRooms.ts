import { SpinalAPI } from "../../spinalAPI"; 


export async function addRooms(buildingId: string, contextId: number, categoryId: number, groupId: number, dynamicIds: number[]): Promise<any> {
    try {
        const api = SpinalAPI.getInstance();
        const url = api.createUrlWithPlatformId(buildingId, `/api/v1/roomsGroup/${contextId}/category/${categoryId}/group/${groupId}/addRooms`);
        const response = await api.post(url, dynamicIds);
        return response.data;
    } catch (error) {
        throw error;
    }
}