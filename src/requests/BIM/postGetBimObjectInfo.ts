
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IBimObjet } from "./_interfaces";


export async function postGetBimObjectInfo(buildingId: string, referenceIds: any): Promise<IBimObjet> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/BIM/getBimObjectsInfo');
    try {
        const response = await spinalAPI.post<IBimObjet>(url, referenceIds);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des objets de référence:', error);
        throw error;
    }
}