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
exports.postNodeMultiple = postNodeMultiple;
const spinalAPI_1 = require("../../spinalAPI");
function postNodeMultiple(buildingId_1, nodeIds_1) {
    return __awaiter(this, arguments, void 0, function* (buildingId, nodeIds, options = {}) {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const params = new URLSearchParams();
        if (options.includeChildrenRelations !== undefined) {
            params.append("includeChildrenRelations", String(options.includeChildrenRelations));
        }
        if (options.includeParentRelations !== undefined) {
            params.append("includeParentRelations", String(options.includeParentRelations));
        }
        const query = params.toString() ? `?${params.toString()}` : "";
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/read_multiple${query}`);
        const response = yield spinalAPI.post(url, nodeIds);
        return response.data;
    });
}
//# sourceMappingURL=postNodeMultiple.js.map