import { ParentMultipleRequest, ParentMultipleResponse } from "./_interfaces";
declare function postNodeParentsMultiple(buildingId: string, body: ParentMultipleRequest[]): Promise<ParentMultipleResponse[]>;
export { postNodeParentsMultiple };
