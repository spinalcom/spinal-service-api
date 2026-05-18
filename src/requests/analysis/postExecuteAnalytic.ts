import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisExecuteResponse } from "./_interfaces";

export async function postExecuteAnalytic(
  buildingId: string,
  analyticId: string
): Promise<IAnalysisExecuteResponse> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/analysis/analytics/${analyticId}/execute`
    );
    const response = await spinalApi.post<IAnalysisExecuteResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const executeAnalytic = postExecuteAnalytic;
