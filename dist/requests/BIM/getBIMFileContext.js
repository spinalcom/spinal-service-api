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
exports.getBIMFileContext = getBIMFileContext;
const spinalAPI_1 = require("../../spinalAPI"); // chemin relatif à src/requests/building
let bimFiles;
function getBIMFileContext(platformId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (bimFiles)
            return bimFiles;
        const spinalAPI = spinalAPI_1.SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(platformId, 'api/v1/BIM/BIMFileContext/list');
        let result = yield spinalAPI.get(url);
        bimFiles = result.data;
        return result.data;
    });
}
//# sourceMappingURL=getBIMFileContext.js.map