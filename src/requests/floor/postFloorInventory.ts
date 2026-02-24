import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
// import { item } from "./_interfaces";

type InventoryIdentifier = string | number;

interface IInventoryBody {
    context: InventoryIdentifier;
    category: InventoryIdentifier;
    groups: InventoryIdentifier[];
}

export async function postFloorInventory(id: number, body: IInventoryBody, options: any): Promise<any> {
    const spinalAPI = SpinalAPI.getInstance();
    const buildingId = sessionStorage.getItem("idBuilding") || '';
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/floor/${id}/inventory`);

    const params = new URLSearchParams();
    if (options.includePosition !== undefined) params.append("includePosition", String(options.includePosition));
    if (options.includeArea !== undefined) params.append("includeArea", String(options.includeArea));
    if (options.onlyDynamicId !== undefined) params.append("onlyDynamicId", String(options.onlyDynamicId));

    try {
        const response = await spinalAPI.post<any>(`${url}?${params.toString()}`, body);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de l’inventaire du floor:", error);
        throw error;
    }
}
