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
exports.getEndpointTimeSeries = getEndpointTimeSeries;
const spinalAPI_1 = require("../../spinalAPI");
function getEndpointTimeSeries(endpointId_1, begin_1, end_1) {
    return __awaiter(this, arguments, void 0, function* (endpointId, begin, end, valueAtBegin = false) {
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const path = `api/v1/endpoint/${endpointId}/timeSeries/read/` +
            `${encodeURIComponent(begin)}/${encodeURIComponent(end)}` +
            `?valueAtBegin=${valueAtBegin ? "true" : "false"}`;
        const url = spinalAPI.createUrlWithPlatformId(endpointId, path);
        let result = yield spinalAPI.get(url);
        return result.data;
    });
}
//# sourceMappingURL=getEndpointTimeSeries.js.map