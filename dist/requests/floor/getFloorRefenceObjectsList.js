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
exports.getFloorRefenceObjectsList = getFloorRefenceObjectsList;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function getFloorRefenceObjectsList(platformId, floorDynId) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/floor/${floorDynId}/reference_Objects_list`);
        let result = yield spinalAPI.get(url);
        return result.data;
    });
}
//# sourceMappingURL=getFloorRefenceObjectsList.js.map