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
export type PositionKey = keyof IPositionInfo;
/**
 * ReadStaticDetailsMultiple Inteface
 *
 */
export interface IReadStaticDetailsMultiple {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    attributeList: {
        label: string;
        value: string;
        data: number | string;
        type: string;
        unit: string | number;
    }[];
    controlEndpoints: {
        profileName: string;
        endpoints: {
            dynamicId: number;
            staticId: string;
            name: string;
            category: string;
            value: string;
        }[];
    }[];
    bimObjects: {
        dynamicId: number;
        staticId: string;
        name: string;
        type: string;
        bimFileId: string;
        version: number;
        externalId: string;
        dbid: string;
    }[];
    groupParents: INodeItem[];
}
