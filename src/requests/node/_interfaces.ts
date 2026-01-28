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

export type IWorkflowItem = IWorkflowItemItem[];
export type INodeFileList = INodeFileItem[];

export interface IWorkflowItemItem {
  dynamicId: number;
  staticId: string;
  name: string;
  type: string;
}

export type ITicketList = ITicket[];

export interface ITicket extends INodeItem {
  priority: number;
  creationDate: number;
  userName: string;
  gmaoId: string;
  gmaoDateCreation: string;
  description: string;
  declarer_id: string;
  process: INodeItem;
  step: IStep;
  workflowId: number;
  workflowName: string;
}

export interface IStep extends INodeItem {
  color: string;
  order: number;
}



export type INodesAttributItem = INodeAttributItem[];

export interface INodeAttributItem {
  dynamicId: number;
  categoryAttributes: ICategoryAttributesItem[];
}
export interface ICategoryAttributesItem extends INodeItem {
  dynamicId: number;
  staticId: string;
  name: string;
  type: string;
  attributs: IAttributsItem[];
}
export interface IAttributsItem {
  label: string;
  value: string;
  date: number;
  type: number;
  unit: number;
}

export interface INodeFileItem {
  dynamicId: number;
  Name: string;
}

