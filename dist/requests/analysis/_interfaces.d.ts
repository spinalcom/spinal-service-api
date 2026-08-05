export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export interface IAnalysisContextCreateParam {
    contextName: string;
}
export interface IAnalysisAnalyticsCreateParam {
    analysisName?: string;
    description?: string;
    anchorNodeId?: string;
    concurrency?: Record<string, unknown>;
    status?: string;
    worknodeResolver?: Record<string, unknown>;
    inputWorkflow?: Record<string, unknown>;
    executionWorkflow?: Record<string, unknown>;
    triggers?: Record<string, unknown>[];
    [key: string]: unknown;
}
export interface IAnalysisAnalytic {
    analysisName: string;
    description: string;
    anchorNodeId: string;
    concurrency: Record<string, unknown>;
    status: string;
    worknodeResolver: Record<string, unknown>;
    inputWorkflow: Record<string, unknown>;
    executionWorkflow: Record<string, unknown>;
    triggers: Record<string, unknown>[];
    [key: string]: unknown;
}
export interface IAnalysisAnalyticUpdateParam {
    analysisName?: string;
    description?: string;
    anchorNodeId?: string;
    concurrency?: Record<string, unknown>;
    status?: string;
    worknodeResolver?: Record<string, unknown>;
    inputWorkflow?: Record<string, unknown>;
    executionWorkflow?: Record<string, unknown>;
    triggers?: Record<string, unknown>[];
    [key: string]: unknown;
}
export interface IAnalysisAnalyticPatchParam {
    analysisName?: string;
    description?: string;
    concurrency?: Record<string, unknown>;
    status?: string;
}
export interface IAnalysisAnalyticOptionField {
    name: string;
    type: string;
    description: string;
    required: boolean;
    default?: unknown;
    [key: string]: unknown;
}
export interface IAnalysisAnalyticOptionConcurrencyMode {
    mode: string;
    description: string;
    default: boolean;
    fields: IAnalysisAnalyticOptionField[];
    [key: string]: unknown;
}
export interface IAnalysisAnalyticOptionStatus {
    value: string;
    description: string;
    default: boolean;
    [key: string]: unknown;
}
export interface IAnalysisAnalyticOptionsResponse {
    data: {
        concurrencyModes: IAnalysisAnalyticOptionConcurrencyMode[];
        statuses: IAnalysisAnalyticOptionStatus[];
    };
    meta: {
        analysisModuleVersion: string;
    };
}
export interface IAnalysisExecuteResult {
    workNodeId: string;
    workNodeName: string;
    success: boolean;
    inputRegisters: Record<string, unknown>;
    executionOutputs: Record<string, unknown>;
    error?: string;
}
export interface IAnalysisExecuteResponse {
    data: {
        analysisName: string;
        totalWorkNodes: number;
        results: IAnalysisExecuteResult[];
    };
    meta: {
        analysisModuleVersion: string;
    };
}
/**
 * One organ's assignment record. `enabled=false` (or `exists=false`) means the organ runs
 * ALL active analyses; when enabled, it runs only the analyses whose id is in `analytics`.
 */
export interface IAnalysisOrganAssignment {
    organName: string;
    /** Whether an assignment file exists for this organ (false ⇒ synthesized run-all defaults). */
    exists: boolean;
    enabled: boolean;
    analytics: string[];
    analyticsCount: number;
}
export interface IAnalysisOrgansListResponse {
    data: IAnalysisOrganAssignment[];
    meta: {
        analysisModuleVersion: string;
    };
}
export interface IAnalysisOrganAssignmentResponse {
    data: IAnalysisOrganAssignment;
    meta: {
        analysisModuleVersion: string;
    };
}
export interface IAnalysisOrganAssignmentSetParam {
    enabled?: boolean;
    analytics?: string[];
}
/** Response for assign (POST) / unassign (DELETE) — carries whether the list actually changed. */
export interface IAnalysisOrganAssignmentMutationResponse {
    data: IAnalysisOrganAssignment & {
        added?: boolean;
        removed?: boolean;
    };
    meta: {
        analysisModuleVersion: string;
    };
}
