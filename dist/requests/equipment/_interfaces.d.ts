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
//# sourceMappingURL=_interfaces.d.ts.map