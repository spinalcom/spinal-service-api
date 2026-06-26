import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisAnalytic } from "./_interfaces";

export async function getAnalytic(
  buildingId: string,
  analyticId: string | number
): Promise<IAnalysisAnalytic> {
  const spinalApi = SpinalAPI.getInstance();
  const url = spinalApi.createUrlWithPlatformId(
    buildingId,
    `api/v1/analysis/analytics/${analyticId}`
  );
  const response = await spinalApi.get<IAnalysisAnalytic>(url);
  return response.data;
}

export const getAnalysisAnalytic = getAnalytic;
