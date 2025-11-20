import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postUpdateAttributMultiple(buildingId, formattedData) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/node/attribute/update_multiple');
    try {
        const response = await spinalAPI.post(url, formattedData);
        // console.log('fin de node attribut');
        return response.data;
    }
    catch (error) {
        console.error('Erreur lors de la mise à jour des attributs:', error);
        throw error;
    }
}
