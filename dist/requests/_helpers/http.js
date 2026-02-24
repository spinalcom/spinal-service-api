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
exports.apiGet = apiGet;
exports.apiPost = apiPost;
exports.withPlatform = withPlatform;
const spinalAPI_1 = require("../../spinalAPI");
function apiGet(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = spinalAPI_1.SpinalAPI.getInstance();
        const res = yield api.get(url);
        return res.data;
    });
}
function apiPost(url, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = spinalAPI_1.SpinalAPI.getInstance();
        const res = yield api.post(url, body);
        return res.data;
    });
}
function withPlatform(buildingId, route) {
    const api = spinalAPI_1.SpinalAPI.getInstance();
    return api.createUrlWithPlatformId(buildingId, route);
}
//# sourceMappingURL=http.js.map