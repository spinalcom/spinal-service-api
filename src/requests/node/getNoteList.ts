import { SpinalAPI } from "../../spinalAPI";
import type { INodeFileList } from "./_interfaces";

export async function getNoteList(nodeId: number): Promise<INodeFileList> {
  const platformId = localStorage.getItem("idBuilding") || "";
  const spinalAPI = SpinalAPI.getInstance();

  const url = spinalAPI.createUrlWithPlatformId(
    platformId,
    `api/v1/node/${nodeId}/note_list`
  );

  const result = await spinalAPI.get<INodeFileList>(url);
  return result.data;
}
