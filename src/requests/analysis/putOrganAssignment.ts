import { SpinalAPI } from "../../spinalAPI";
import {
  IAnalysisOrganAssignmentResponse,
  IAnalysisOrganAssignmentSetParam,
} from "./_interfaces";

/**
 * Sets an organ's assignment: toggles `enabled` and/or replaces the `analytics` list. Creates
 * the organ's file if it doesn't exist yet. PUT /api/v1/analysis/organs/{organName}/assignment
 */
export async function putOrganAssignment(
  buildingId: string,
  organName: string,
  params: IAnalysisOrganAssignmentSetParam
): Promise<IAnalysisOrganAssignmentResponse> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/analysis/organs/${encodeURIComponent(organName)}/assignment`
    );
    const response = await spinalApi.put<IAnalysisOrganAssignmentResponse>(url, params);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const setAnalysisOrganAssignment = putOrganAssignment;
