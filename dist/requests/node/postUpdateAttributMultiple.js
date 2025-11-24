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
exports.postUpdateAttributMultiple = postUpdateAttributMultiple;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function postUpdateAttributMultiple(buildingId, formattedData) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/node/attribute/update_multiple');
        try {
            const response = yield spinalAPI.post(url, formattedData);
            // console.log('fin de node attribut');
            return response.data;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour des attributs:', error);
            throw error;
        }
    });
}
//# sourceMappingURL=postUpdateAttributMultiple.js.map