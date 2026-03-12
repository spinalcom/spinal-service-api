import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisContextCreateParam } from "./_interfaces";

export async function postContexts(
    buildingId: string,
    params: IAnalysisContextCreateParam
): Promise<any> {
    try {
        const spinalApi = SpinalAPI.getInstance();
        const url = spinalApi.createUrlWithPlatformId(buildingId, "api/v1/analysis/contexts");
        const body: IAnalysisContextCreateParam = {
            contextName: params.contextName
        };
        
        const response = await spinalApi.post(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}
