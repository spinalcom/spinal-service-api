import { SpinalAPI } from "../../spinalAPI";
import {
  IAnalysisAnalytic,
  IAnalysisAnalyticUpdateParam,
} from "./_interfaces";

export async function putAnalytic(
  buildingId: string,
  analyticId: string | number,
  params: IAnalysisAnalyticUpdateParam
): Promise<IAnalysisAnalytic> {
  const spinalApi = SpinalAPI.getInstance();
  const url = spinalApi.createUrlWithPlatformId(
    buildingId,
    `api/v1/analysis/analytics/${analyticId}`
  );
  const response = await spinalApi.put<IAnalysisAnalytic>(url, params);
  return response.data;
}

export const putAnalysisAnalytic = putAnalytic;
export const updateAnalytic = putAnalytic;
