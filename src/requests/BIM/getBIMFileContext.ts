
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IBimFile } from "./_interfaces";


let bimFiles: any;

export async function getBIMFileContext(platformId: string): Promise<IBimFile> {
    if (bimFiles) return bimFiles;
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, 'api/v1/BIM/BIMFileContext/list');
    let result = await spinalAPI.get<IBimFile>(url);
    bimFiles = result.data;
    return result.data;
}