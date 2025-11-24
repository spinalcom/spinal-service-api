"use strict";
/**
 * @packageDocumentation
 * @module Requests-Equipment-Post-ReadStaticDetailsMultiple
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getReadStaticDetailsMultiple;
const lodash_chunk_1 = __importDefault(require("lodash.chunk"));
const spinalAPI_1 = require("../../../spinalAPI"); // chemin relatif à src/requests/building
function getReadStaticDetailsMultiple(buildingId_1, dynamicIds_1) {
    return __awaiter(this, arguments, void 0, function* (buildingId, dynamicIds, size = 200) {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, "/api/v1/equipment/read_static_details_multiple");
        try {
            const chunckedIds = (0, lodash_chunk_1.default)(dynamicIds, size);
            let results = [];
            for (const currentChunk of chunckedIds) {
                const response = yield spinalAPI.post(url, currentChunk);
                results = results.concat(response.data);
            }
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
//# sourceMappingURL=getEquipmentReadStaticDetailsMultiple.js.map