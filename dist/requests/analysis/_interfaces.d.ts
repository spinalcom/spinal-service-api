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
