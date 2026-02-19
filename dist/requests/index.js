"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
//MARK: BIM
__exportStar(require("./BIM/postGetBimObjectInfo"), exports);
__exportStar(require("./BIM/getBIMFileContext"), exports);
//MARK: Building
__exportStar(require("./building/getBuildingRead"), exports);
//MARK: Context
__exportStar(require("./context/getContextList"), exports);
//MARK: GroupContext
__exportStar(require("./groupContext/getGroupContextCategoryList"), exports);
__exportStar(require("./groupContext/getGroupContextGroupList"), exports);
__exportStar(require("./groupContext/getGroupContextGroupRead"), exports);
__exportStar(require("./groupContext/PostAddContext"), exports);
__exportStar(require("./groupContext/PostAddCategory"), exports);
__exportStar(require("./groupContext/PostAddGroup"), exports);
//MARK: Floor
__exportStar(require("./floor/getFloorList"), exports);
__exportStar(require("./floor/postFloorInventory"), exports);
__exportStar(require("./floor/getFloorRefenceObjectsList"), exports);
__exportStar(require("./floor/getFloorRoomList"), exports);
__exportStar(require("./floor/getFloorRoomList2"), exports);
//MARK: RoomGroup
__exportStar(require("./roomGroup/getRoomList"), exports);
__exportStar(require("./roomGroup/getRoomList2"), exports);
//MARK: Room
__exportStar(require("./room/getRoomStaticDetails"), exports);
__exportStar(require("./room/postRoomInventoryMultiple"), exports);
__exportStar(require("./room/postRoomInventory"), exports);
__exportStar(require("./room/getRoomEquipmentList"), exports);
__exportStar(require("./room/getRoomRefenceObjectsList"), exports);
__exportStar(require("./room/getRoomPosition"), exports);
__exportStar(require("./room/posts/getRoomReadStaticDetailsMultiple"), exports);
__exportStar(require("./room/postRoomPositionMultiple"), exports);
__exportStar(require("./room/AddRooms"), exports);
//MARK: Endpoint:
__exportStar(require("./endpoint/getEndpointTimeSeries"), exports);
__exportStar(require("./endpoint/postUpdateEndpoint"), exports);
//MARK: Equipment:
__exportStar(require("./equipment/postEquipmentPositionMultiple"), exports);
__exportStar(require("./equipment/posts/getEquipmentReadStaticDetailsMultiple"), exports);
//MARK: equipmentsGroup
__exportStar(require("./equipmentsGroup/getEquipmentGroupList"), exports);
__exportStar(require("./equipmentsGroup/getEquipmentGroupCategoryList"), exports);
__exportStar(require("./equipmentsGroup/getEquipmentGroupGroupList"), exports);
__exportStar(require("./equipmentsGroup/getEquipmentGroupEquipmentList"), exports);
__exportStar(require("./equipmentsGroup/AddEquipmentInGroup"), exports);
//MARK: Node
__exportStar(require("./node/getTicketList"), exports);
__exportStar(require("./node/postTicketListMultiple"), exports);
__exportStar(require("./node/postUploadFile"), exports);
__exportStar(require("./node/deleteFile"), exports);
__exportStar(require("./node/deleteCategoryAttribut"), exports);
__exportStar(require("./node/postUpdateAttribut"), exports);
__exportStar(require("./node/postUpdateCategoryAttribut"), exports);
__exportStar(require("./node/deleteAttribut"), exports);
__exportStar(require("./node/postUpdateAttributMultiple"), exports);
__exportStar(require("./node/getCategoriesList"), exports);
__exportStar(require("./node/getAttributeList"), exports);
__exportStar(require("./node/getControlEndpointList"), exports);
__exportStar(require("./node/getEndpointList"), exports);
__exportStar(require("./node/postCreateAttribut"), exports);
__exportStar(require("./node/postCreateCategory"), exports);
__exportStar(require("./node/getNodeRead"), exports);
__exportStar(require("./node/getNodeParent"), exports);
__exportStar(require("./node/postAttributListMultiple"), exports);
__exportStar(require("./node/postDownloadFile"), exports);
__exportStar(require("./node/getFileList"), exports);
//MARK: Ticket
__exportStar(require("./ticket/createTicket"), exports);
__exportStar(require("./ticket/getTicketDetails"), exports);
__exportStar(require("./ticket/postAddDoc"), exports);
__exportStar(require("./ticket/postArchiveTicket"), exports);
__exportStar(require("./ticket/postAddNoteTicket"), exports);
__exportStar(require("./ticket/postMoveToStepTicket"), exports);
__exportStar(require("./ticket/postTicketReadDetailsMultiple"), exports);
__exportStar(require("./ticket/updateTicket"), exports);
//MARK: Workflow
__exportStar(require("./workflow/getWorkflowList"), exports);
__exportStar(require("./workflow/getWorkflowProcessList"), exports);
__exportStar(require("./workflow/getWorkflowStepList"), exports);
__exportStar(require("./workflow/getWorkflowTree"), exports);
//MARK: Attribute
__exportStar(require("./attriubte/postUpdateAttributeMultiple"), exports);
//# sourceMappingURL=index.js.map