import { SpinalAPI } from "../../spinalAPI";
import { IRelationParentNode } from "./_interfaces";

export async function getRelationParentNode(
  id: number
): Promise<IRelationParentNode[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrl(`api/v1/relation/${id}/parent_node`);
  const response = await spinalAPI.get<IRelationParentNode[]>(url);
  return response.data;
}

