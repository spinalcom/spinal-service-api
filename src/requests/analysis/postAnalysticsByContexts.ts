import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisAnalyticsCreateParam } from "./_interfaces";

export async function postAnalysticsByContexts(
    buildingId: string,
    contextId: number,
    params: IAnalysisAnalyticsCreateParam
): Promise<any> {
    try {
        const spinalApi = SpinalAPI.getInstance();
        const url = spinalApi.createUrlWithPlatformId(
            buildingId,
            `api/v1/analysis/contexts/${contextId}/analytics`
        );
        const body: IAnalysisAnalyticsCreateParam = params;

        const response = await spinalApi.post(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}
