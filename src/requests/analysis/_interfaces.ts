/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

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
