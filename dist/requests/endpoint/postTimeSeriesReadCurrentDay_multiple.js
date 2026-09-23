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
exports.postTimeSeriesReadCurrentDayMultiple = void 0;
const spinalAPI_1 = require("../../spinalAPI");
const postTimeSeriesReadCurrentDayMultiple = (buildingId, endpoints) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, 'api/v1/endpoint/timeSeries/readCurrentDay_multiple');
        const result = yield spinalAPI.post(url, endpoints);
        return result.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.postTimeSeriesReadCurrentDayMultiple = postTimeSeriesReadCurrentDayMultiple;
//# sourceMappingURL=postTimeSeriesReadCurrentDay_multiple.js.map