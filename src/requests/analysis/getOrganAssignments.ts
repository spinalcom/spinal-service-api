import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisOrgansListResponse } from "./_interfaces";

/**
 * Lists every organ-analysis instance that has an assignment file, with its enabled flag and
 * the analysis ids it manages. GET /api/v1/analysis/organs
 */
export async function getOrganAssignments(
  buildingId: string
): Promise<IAnalysisOrgansListResponse> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/analysis/organs`
    );
    const response = await spinalApi.get<IAnalysisOrgansListResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAnalysisOrganAssignments = getOrganAssignments;
