import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
let bimFiles;
export async function getBIMFileContext(platformId) {
    if (bimFiles)
        return bimFiles;
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, 'api/v1/BIM/BIMFileContext/list');
    let result = await spinalAPI.get(url);
    bimFiles = result.data;
    return result.data;
}
