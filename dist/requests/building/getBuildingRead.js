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
exports.getBuildingRead = getBuildingRead;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function getBuildingRead(buildingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = spinalAPI_1.SpinalAPI.getInstance();
        const url = api.createUrlWithPlatformId(buildingId, "api/v1/building/read");
        const res = yield api.get(url);
        return res.data;
    });
}
//# sourceMappingURL=getBuildingRead.js.map