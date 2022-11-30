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
exports.UserController = void 0;
const user_logic_1 = require("../logic/user.logic");
const utils_1 = require("../utils/utils");
const status_codes_1 = require("http-status-codes/build/cjs/status-codes");
const base_error_1 = require("../utils/base.error");
class UserController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in the controller login");
                const params = req.body;
                let login = yield new user_logic_1.UserLogic().loginJwtLogic(params);
                res.header('autorization', login);
                return yield utils_1.Utils.response(res, status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        login: "Login exitoso"
                    }
                ]);
            }
            catch (error) {
                console.log("here the error on get one user", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred and error trying to login");
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in the createUser controller");
                const params = req.body;
                const userData = req.userdata;
                let user = yield new user_logic_1.UserLogic().createUser(params);
                return yield utils_1.Utils.response(res, status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        userId: user === null || user === void 0 ? void 0 : user.id
                    }
                ]);
            }
            catch (error) {
                console.log("here the error on create", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.message);
                }
                return utils_1.Utils.response(res, status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "error trying to createUSer");
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in the get userbyId controller");
                const params = req.body;
                let userLogic = yield new user_logic_1.UserLogic();
                let user = yield userLogic.getUserByIdLogic(params);
                return yield utils_1.Utils.response(res, status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        user: user
                    }
                ]);
            }
            catch (error) {
                console.log("here the error on get one user", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred and error trying to get User");
            }
        });
    }
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in the getAllUsers controller");
                let user = yield new user_logic_1.UserLogic().getAllUserLogic(req);
                return yield utils_1.Utils.response(res, status_codes_1.StatusCodes.OK, "Request Succefull", [
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
                return utils_1.Utils.response(res, status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred and error trying to get  All Users");
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in updateUser controller");
                const params = req.body;
                const userData = req.userdata;
                let user = yield new user_logic_1.UserLogic().updateUserLogic(params, userData);
                return yield utils_1.Utils.response(res, status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        user: user
                    }
                ]);
            }
            catch (error) {
                console.log("here the error on update", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred and error trying to update User");
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here in deleteUser controller");
                const params = req.body;
                const userData = req.userdata;
                let user = yield new user_logic_1.UserLogic().deleteUserLogic(params);
                return yield utils_1.Utils.response(res, status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        user: user
                    }
                ]);
            }
            catch (error) {
                console.log("here the error on update", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred and error trying to delete User");
            }
        });
    }
}
exports.UserController = UserController;
