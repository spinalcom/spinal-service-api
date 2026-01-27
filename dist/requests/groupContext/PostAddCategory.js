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
exports.postAddCategory = postAddCategory;
const spinalAPI_1 = require("../../spinalAPI");
function postAddCategory(buildingId, contextId, categoryParam) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const spinalApi = spinalAPI_1.SpinalAPI.getInstance();
            const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${contextId}/create_category`);
            const body = {
                categoryName: categoryParam.categoryName,
                categoryIcon: categoryParam.categoryIcon,
                categoryColor: categoryParam.categoryColor
            };
            const response = yield spinalApi.post(url, body);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
//# sourceMappingURL=PostAddCategory.js.map