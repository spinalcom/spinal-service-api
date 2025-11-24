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

export interface IBuildingItem extends INodeItem {
  address: string;
  area: string;
}

export type IRootObject = IRootObjectItem[];

export interface IRootObjectItem extends INodeItem {
  positionInfo: IPositionInfo;
}

export interface IPositionInfo {
  context: INodeItem;
  building: IBuildingItem;
  floor: INodeItem;
  room: INodeItem;
}


// (optionnel)
export type PositionKey = keyof IPositionInfo; 





/**
 * ReadStaticDetailsMultiple Inteface
 * 
 */
export interface IReadStaticDetailsMultiple {
  dynamicId: number;
  staticId: string,
  name: string,
  type: string,
  attributeList: {
    label: string,
    value: string,
    data: number | string
    type: string,
    unit: string | number
  }[],
  controlEndpoints: {
    profileName: string,
    endpoints: {
      dynamicId: number,
      staticId: string,
      name: string,
      category: string,
      value: string
    }[]
  }[],
  bimObjects: {
    dynamicId: number,
        staticId: string,
        name: string,
        type: string,
        bimFileId: string,
        version: number,
        externalId: string,
        dbid: string
  }[],
  groupParents: INodeItem[],
  
}
