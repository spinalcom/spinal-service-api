import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisOrganAssignmentMutationResponse } from "./_interfaces";

/**
 * Assigns one analysis to an organ (adds its id to the organ's list; creates the file if
 * needed). Idempotent — `data.added` is false if it was already assigned.
 * POST /api/v1/analysis/organs/{organName}/analytics/{analyticId}
 */
export async function postAssignAnalytic(
  buildingId: string,
  organName: string,
  analyticId: string
): Promise<IAnalysisOrganAssignmentMutationResponse> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/analysis/organs/${encodeURIComponent(organName)}/analytics/${analyticId}`
    );
    const response = await spinalApi.post<IAnalysisOrganAssignmentMutationResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const assignAnalyticToOrgan = postAssignAnalytic;
