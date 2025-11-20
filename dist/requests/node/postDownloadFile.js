import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postDownloadFile(buildingId, referenceIds) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/${referenceIds}/download_file`);
    try {
        // Assurez-vous de spécifier que la réponse doit être un 'blob'
        const response = await spinalAPI.post(url, referenceIds, { responseType: 'blob' });
        return response.data;
    }
    catch (error) {
        console.error('Erreur lors de la récupération des objets de référence:', error);
        throw error;
    }
}
