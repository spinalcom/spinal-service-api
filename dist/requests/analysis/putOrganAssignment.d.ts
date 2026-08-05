import { IAnalysisOrganAssignmentResponse, IAnalysisOrganAssignmentSetParam } from "./_interfaces";
/**
 * Sets an organ's assignment: toggles `enabled` and/or replaces the `analytics` list. Creates
 * the organ's file if it doesn't exist yet. PUT /api/v1/analysis/organs/{organName}/assignment
 */
export declare function putOrganAssignment(buildingId: string, organName: string, params: IAnalysisOrganAssignmentSetParam): Promise<IAnalysisOrganAssignmentResponse>;
export declare const setAnalysisOrganAssignment: typeof putOrganAssignment;
