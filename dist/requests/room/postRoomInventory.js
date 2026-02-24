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
exports.postRoomInventory = postRoomInventory;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function postRoomInventory(buildingId, id, body, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/room/${id}/inventory`);
        const params = new URLSearchParams();
        if (options.includePosition !== undefined)
            params.append("includePosition", String(options.includePosition));
        if (options.onlyDynamicId !== undefined)
            params.append("onlyDynamicId", String(options.onlyDynamicId));
        try {
            const response = yield spinalAPI.post(`${url}?${params.toString()}`, body);
            return response.data;
        }
        catch (error) {
            console.error("Erreur lors de la récupération de l’inventaire du room:", error);
            throw error;
        }
    });
}
//# sourceMappingURL=postRoomInventory.js.map