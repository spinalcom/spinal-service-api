import { SpinalAPI } from "../../spinalAPI";
import { IAnalysisOrganAssignmentResponse } from "./_interfaces";

/**
 * Gets one organ's assignment record. If the organ has no file yet, `exists` is false and the
 * record carries run-all defaults. GET /api/v1/analysis/organs/{organName}/assignment
 */
export async function getOrganAssignment(
  buildingId: string,
  organName: string
): Promise<IAnalysisOrganAssignmentResponse> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/analysis/organs/${encodeURIComponent(organName)}/assignment`
    );
    const response = await spinalApi.get<IAnalysisOrganAssignmentResponse>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAnalysisOrganAssignment = getOrganAssignment;
