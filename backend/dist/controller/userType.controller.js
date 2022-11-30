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
exports.UserTypeController = void 0;
const http_status_codes_1 = require("http-status-codes");
const userType_logic_1 = require("../logic/userType.logic");
const utils_1 = require("../utils/utils");
const base_error_1 = require("../utils/base.error");
class UserTypeController {
    static getAllUserTypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in the getAllUsers controller");
                let user = yield new userType_logic_1.UserTypeLogic().getAllUserTypesLogic(req);
                return yield utils_1.Utils.response(res, http_status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        users: user
                    }
                ]);
            }
            catch (error) {
                console.log("here the error on get all users", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred and error trying to get  All Users");
            }
        });
    }
}
exports.UserTypeController = UserTypeController;
