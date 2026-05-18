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
    worknodeResolver?: Record<string, unknown>;
    inputWorkflow?: Record<string, unknown>;
    executionWorkflow?: Record<string, unknown>;
    [key: string]: unknown;
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
