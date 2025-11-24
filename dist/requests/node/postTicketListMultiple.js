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
exports.postTicketListMultiple = postTicketListMultiple;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function postTicketListMultiple(stepIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const platformId = localStorage.getItem("idBuilding") || "";
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/node/ticket_list_multiple`);
        let result = yield spinalAPI.post(url, stepIds);
        return result.data;
    });
}
//# sourceMappingURL=postTicketListMultiple.js.map