import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function postRoomInventory(
  buildingId: string,
  id: number,
  body: { context: string; category: string; groups: [] },
  options: any
): Promise<any> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/room/${id}/inventory`);

  const params = new URLSearchParams();
  if (options.includePosition !== undefined) params.append("includePosition", String(options.includePosition));
  if (options.onlyDynamicId !== undefined) params.append("onlyDynamicId", String(options.onlyDynamicId));

  try {
    const response = await spinalAPI.post<any>(`${url}?${params.toString()}`, body);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de l’inventaire du room:", error);
    throw error;
  }
}