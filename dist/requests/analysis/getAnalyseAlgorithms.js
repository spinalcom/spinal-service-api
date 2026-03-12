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
exports.getAnalyseAlgorithms = getAnalyseAlgorithms;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
function getAnalyseAlgorithms(buildingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/analysis/algorithms');
        try {
            let result = yield spinalAPI.get(url); // Envoyer le tableau d'identifiants
            return result.data;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des positions des pièces:', error);
            throw error;
        }
    });
}
//# sourceMappingURL=getAnalyseAlgorithms.js.map