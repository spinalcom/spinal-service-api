import { IAnalysisOrganAssignmentResponse } from "./_interfaces";
/**
 * Gets one organ's assignment record. If the organ has no file yet, `exists` is false and the
 * record carries run-all defaults. GET /api/v1/analysis/organs/{organName}/assignment
 */
export declare function getOrganAssignment(buildingId: string, organName: string): Promise<IAnalysisOrganAssignmentResponse>;
export declare const getAnalysisOrganAssignment: typeof getOrganAssignment;
