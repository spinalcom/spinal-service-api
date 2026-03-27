import { SpinalAPI } from "../../spinalAPI";

export async function getFloorStaticDetails(buildingId: string,floorId: number): Promise<any[]> {
    try {
        const spinalApi = SpinalAPI.getInstance();
        const url = spinalApi.createUrlWithPlatformId(buildingId, `/api/v1/floor/${floorId}/read_static_details`);
        const response = await spinalApi.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to get floor static details: ${error}`);
    }
}