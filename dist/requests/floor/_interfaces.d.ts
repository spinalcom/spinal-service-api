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
export {};
//# sourceMappingURL=_interfaces.d.ts.map