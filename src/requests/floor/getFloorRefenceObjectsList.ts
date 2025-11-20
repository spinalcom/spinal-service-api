
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IFloorReferenceObjectList } from "./_interfaces";


export async function getFloorRefenceObjectsList(platformId: string, floorDynId: number): Promise<IFloorReferenceObjectList> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        platformId,
        `api/v1/floor/${floorDynId}/reference_Objects_list`
    );
    let result = await spinalAPI.get<IFloorReferenceObjectList>(url);
    return result.data;
}
