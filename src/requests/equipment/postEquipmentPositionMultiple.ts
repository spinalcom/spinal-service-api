import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IRootObject } from "./_interfaces"; // ou le bon chemin

export async function postEquipmentPositionMultiple(
    buildingId: string,
    dynamicIds: number[]
): Promise<IRootObject> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        buildingId,
        "api/v1/equipment/get_position_multiple"
    );
    try {
        const response = await spinalAPI.post<IRootObject>(url, dynamicIds);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des positions :", error);
        throw error;
    }
}
