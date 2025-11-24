import { INodeItem } from "../requests/building/_interfaces";
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
