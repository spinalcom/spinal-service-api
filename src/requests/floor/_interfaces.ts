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

export interface ISpaceItem extends INodeItem {
  categories: ICategoriesAttributItem[];
}
export interface ICategoriesAttributItem extends INodeItem {
  attributs: IAttributsItem[];
}


export type ISpaceObject = ISpaceItem[];


//reference object List

export interface IFloorReferenceObjectList extends INodeItem {
  infoReferencesObjects: IInfoReferencesObjectsItem[];
}
export interface IInfoReferencesObjectsItem extends INodeItem {
  version: number;
  externalId: string;
  dbid: number;
  bimFileId: string;
}




interface IAttributsItem {
    label: string;
    value: string | number;
    type: string;
    unit: string;
    lastModificationDate?: number;
    date?: number;
}
