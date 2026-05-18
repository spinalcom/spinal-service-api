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
exports.deleteAnalysisAnalytic = void 0;
exports.deleteAnalytic = deleteAnalytic;
const spinalAPI_1 = require("../../spinalAPI");
function deleteAnalytic(buildingId, analyticId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const spinalApi = spinalAPI_1.SpinalAPI.getInstance();
            const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/analysis/analytics/${analyticId}`);
            const response = yield spinalApi.delete(url);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.deleteAnalysisAnalytic = deleteAnalytic;
//# sourceMappingURL=deleteAnalytic.js.map