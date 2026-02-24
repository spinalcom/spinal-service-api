"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStepList = getStepList;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function getStepList(workflowId, processId) {
    return __awaiter(this, void 0, void 0, function* () {
        const platformId = localStorage.getItem("idBuilding") || "";
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/workflow/${workflowId}/process/${processId}/stepList`);
        let result = yield spinalAPI.get(url);
        return result.data;
    });
}
//# sourceMappingURL=getWorkflowStepList.js.map