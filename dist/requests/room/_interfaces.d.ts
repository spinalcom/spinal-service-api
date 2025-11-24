export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export type IEquipmentList = IEquipmentItem[];
export interface IEquipmentItem extends INodeItem {
    bimFileId: string;
    version: number;
    externalId: string;
    dbid: string;
}
export interface IRoomReferenceObjectList extends INodeItem {
    infoReferencesObjects: IInfoReferencesObjectsItem[];
}
export interface IInfoReferencesObjectsItem extends INodeItem {
    version: number;
    externalId: string;
    dbid: number;
    bimFileId: string;
}
export interface IRoomStaticDetailsObject extends INodeItem {
    dbid: number;
    color: string;
    attributsList: IAttributsListItem[];
    controlEndpoint: IControlEndpointItem[];
    endpoints: any[];
    bimObjects: IBimObjectsItem[];
    groupParents: INodeItem[];
}
export interface IAttributsListItem extends INodeItem {
    attributs: IAttributsItem[];
}
export interface IAttributsItem {
    label: string;
    value: string | number;
    type: string;
    unit: string;
    lastModificationDate?: number;
    dynamicId: number;
    date?: number;
}
export interface IControlEndpointItem {
    profileName: string;
    endpoints: IEndpointsItem[];
}
export interface IEndpointsItem {
    dynamicId: number;
    staticId: string;
    name: string;
    unit: string;
    value: number;
    category: string;
}
export interface IBimObjectsItem extends INodeItem {
    bimFileId: string;
    version: number;
    externalId: string;
    dbid: number;
    default_attributs: IDefault_attributs;
}
export interface IDefault_attributs {
    revitCategory: string;
    revitFamily: string;
    revitType: string;
}
