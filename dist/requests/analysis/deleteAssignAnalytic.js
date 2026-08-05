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
exports.unassignAnalyticFromOrgan = void 0;
exports.deleteAssignAnalytic = deleteAssignAnalytic;
const spinalAPI_1 = require("../../spinalAPI");
/**
 * Unassigns one analysis from an organ (removes its id from the organ's list). `data.removed`
 * is false if it wasn't assigned. 404 if the organ has no assignment file.
 * DELETE /api/v1/analysis/organs/{organName}/analytics/{analyticId}
 */
function deleteAssignAnalytic(buildingId, organName, analyticId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const spinalApi = spinalAPI_1.SpinalAPI.getInstance();
            const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/analysis/organs/${encodeURIComponent(organName)}/analytics/${analyticId}`);
            const response = yield spinalApi.delete(url);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.unassignAnalyticFromOrgan = deleteAssignAnalytic;
//# sourceMappingURL=deleteAssignAnalytic.js.map