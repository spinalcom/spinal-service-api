import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IRoomPosition } from "./_interfaces"; // ou le bon chemin

export async function postRoomPositionMultiple(
    buildingId: string,
    dynamicIds: number[]
): Promise<IRoomPosition[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        buildingId,
        "api/v1/room/get_position_multiple"
    );
    try {
        const response = await spinalAPI.post<IRoomPosition[]>(url, dynamicIds);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des positions :", error);
        throw error;
    }
}
