
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodesAttributItem } from "./_interfaces";

export async function postAttributListMultiple(buildingId: string, referenceIds: number[]): Promise<INodesAttributItem[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/node/attribute_list_multiple');
  try {
    const response = await spinalAPI.post<INodesAttributItem[]>(url, referenceIds);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des objets de référence:', error);
    throw error;
  }
}
