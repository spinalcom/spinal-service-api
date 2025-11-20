import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postRoomInventory(buildingId, id, body, options) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/room/${id}/inventory`);
    const params = new URLSearchParams();
    if (options.includePosition !== undefined)
        params.append("includePosition", String(options.includePosition));
    if (options.onlyDynamicId !== undefined)
        params.append("onlyDynamicId", String(options.onlyDynamicId));
    try {
        const response = await spinalAPI.post(`${url}?${params.toString()}`, body);
        return response.data;
    }
    catch (error) {
        console.error("Erreur lors de la récupération de l’inventaire du room:", error);
        throw error;
    }
}
