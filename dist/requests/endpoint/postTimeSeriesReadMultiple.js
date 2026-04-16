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
exports.postTimeSeriesReadMultiple = postTimeSeriesReadMultiple;
const spinalAPI_1 = require("../../spinalAPI");
function postTimeSeriesReadMultiple(buildingId_1, endpointIds_1, start_1, end_1) {
    return __awaiter(this, arguments, void 0, function* (buildingId, endpointIds, start, end, options = {}) {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const params = new URLSearchParams();
        if (options.valueAtBegin !== undefined)
            params.append("valueAtBegin", String(options.valueAtBegin));
        if (options.aggregation !== undefined)
            params.append("aggregation", options.aggregation);
        if (options.bucket !== undefined)
            params.append("bucket", options.bucket);
        const query = params.toString() ? `?${params.toString()}` : "";
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/endpoint/timeSeries/read_multiple/${encodeURIComponent(start)}/${encodeURIComponent(end)}${query}`);
        const response = yield spinalAPI.post(url, endpointIds);
        return response.data;
    });
}
//# sourceMappingURL=postTimeSeriesReadMultiple.js.map