import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postEquipmentPositionMultiple(buildingId, dynamicIds) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, "api/v1/equipment/get_position_multiple");
    try {
        const response = await spinalAPI.post(url, dynamicIds);
        return response.data;
    }
    catch (error) {
        console.error("Erreur lors de la récupération des positions :", error);
        throw error;
    }
}
