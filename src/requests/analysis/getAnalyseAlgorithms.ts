
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodeItem } from "./_interfaces";

export async function getAnalyseAlgorithms(buildingId: string): Promise<INodeItem[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/analysis/algorithms');
    try {
        let result = await spinalAPI.get<INodeItem[]>(url); // Envoyer le tableau d'identifiants
        return result.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des positions des pièces:', error);
        throw error;
    }
}