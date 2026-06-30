import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisAnalytic, IAnalysisAnalyticPatchParam } from "./_interfaces";

export async function patchAnalytic(
  analyticId: string | number,
  params: IAnalysisAnalyticPatchParam
): Promise<IAnalysisAnalytic> {
  const spinalApi = SpinalAPI.getInstance();
  const url = spinalApi.createUrl(`api/v1/analysis/analytics/${analyticId}`);
  const response = await spinalApi.patch<IAnalysisAnalytic>(url, params);
  return response.data;
}

export const patchAnalysisAnalytic = patchAnalytic;
