import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisAnalyticOptionsResponse } from "./_interfaces";

export async function getAnalyticOptions(
  buildingId: string
): Promise<IAnalysisAnalyticOptionsResponse> {
  const spinalApi = SpinalAPI.getInstance();
  const url = spinalApi.createUrlWithPlatformId(
    buildingId,
    "api/v1/analysis/analyticOptions"
  );
  const response = await spinalApi.get<IAnalysisAnalyticOptionsResponse>(url);
  return response.data;
}

export const getAnalysisAnalyticOptions = getAnalyticOptions;
