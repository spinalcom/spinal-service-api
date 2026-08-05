import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisOrganAssignmentMutationResponse } from "./_interfaces";

/**
 * Unassigns one analysis from an organ (removes its id from the organ's list). `data.removed`
 * is false if it wasn't assigned. 404 if the organ has no assignment file.
 * DELETE /api/v1/analysis/organs/{organName}/analytics/{analyticId}
 */
export async function deleteAssignAnalytic(
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
    const response = await spinalApi.delete<IAnalysisOrganAssignmentMutationResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const unassignAnalyticFromOrgan = deleteAssignAnalytic;
