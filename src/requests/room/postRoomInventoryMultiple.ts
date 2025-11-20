
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building


export async function postRoomInventoryMultiple(buildingId: string, referenceIds: number[]): Promise<any> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/room/inventory_multiple');
    try {
        const response = await spinalAPI.post<any>(url, referenceIds);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des objets de référence:', error);
        throw error;
    }
}
