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
exports.setAnalysisOrganAssignment = void 0;
exports.putOrganAssignment = putOrganAssignment;
const spinalAPI_1 = require("../../spinalAPI");
/**
 * Sets an organ's assignment: toggles `enabled` and/or replaces the `analytics` list. Creates
 * the organ's file if it doesn't exist yet. PUT /api/v1/analysis/organs/{organName}/assignment
 */
function putOrganAssignment(buildingId, organName, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const spinalApi = spinalAPI_1.SpinalAPI.getInstance();
            const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/analysis/organs/${encodeURIComponent(organName)}/assignment`);
            const response = yield spinalApi.put(url, params);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.setAnalysisOrganAssignment = putOrganAssignment;
//# sourceMappingURL=putOrganAssignment.js.map