import { SpinalAPI } from "../../spinalAPI";

export async function deleteAnalytic(
  buildingId: string,
  analyticId: string
): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/analysis/analytics/${analyticId}`
    );
    const response = await spinalApi.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const deleteAnalysisAnalytic = deleteAnalytic;
