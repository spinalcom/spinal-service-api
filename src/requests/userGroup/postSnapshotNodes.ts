import { SpinalAPI } from "../../spinalAPI"; 
import { ISnapShot } from "./_interface";


export async function postSnapshotNode(buildingId: string) {
    try {
        const spinalApi =  SpinalAPI.getInstance();
        const url = spinalApi.createUrlWithPlatformId(buildingId,'api/v1/snapshot/nodes');
        const response = await spinalApi.post<ISnapShot>(url);
        return response.data;
    } catch (error) {
        console.error("Error posting snapshot node:", error);
        throw error;
    }


}