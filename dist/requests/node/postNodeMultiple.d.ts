import { INodeReadMultipleItem, INodeReadMultipleOptions } from "./_interfaces";
export declare function postNodeMultiple(buildingId: string, nodeIds: number[], options?: INodeReadMultipleOptions): Promise<INodeReadMultipleItem[]>;
