"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UserLogic = void 0;
const user_entities_1 = require("../entities/user.entities");
const entities_factory_1 = require("../entities/factory/entities.factory");
const jwt = __importStar(require("jsonwebtoken"));
const bc = __importStar(require("bcryptjs"));
const error_factory_1 = require("../utils/errorFactory/error.factory");
const base_error_1 = require("../utils/base.error");
class UserLogic extends user_entities_1.User {
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the Create User Logic");
            try {
                let user = yield entities_factory_1.EntitiesFactory.getUserModel(params.firstName, params.surName, params.email, params.password, params.userTypeId);
                const bcrypts = yield bc.hashSync(params.password, 8);
                user.password = bcrypts;
                yield user_entities_1.User.save(user);
                return user;
            }
            catch (error) {
                console.log("here the error", error);
            }
        });
    }
    getUserByIdLogic(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the Get User By id");
            let user;
            try {
                user = yield user_entities_1.User.findOneBy({ id: params.userId });
                if (user === undefined || !user) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("invalid userId");
                }
            }
            catch (error) {
                console.log("here the error", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the get userId", error);
                throw error;
            }
            return user;
        });
    }
    loginJwtLogic(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let token = '';
                let userEmail = yield user_entities_1.User.findOneBy({ email: params.email });
                console.log("userEmail", userEmail);
                if (userEmail === undefined || !userEmail) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("this email is invalid");
                }
                /*const bcrypts = await bc.hashSync(params.password, 8)
                userEmail.password = bcrypts;   solo para el primer usuario admin
                console.log("here the bcrupoyttss",bcrypts);
                */
                let compare = yield bc.compareSync(params.password, userEmail.password);
                console.log("here the compare", compare);
                if (compare) {
                    token = yield jwt.sign({ userEmail }, process.env.TOKEN || 'secret', {
                        expiresIn: 120
                    });
                }
                else {
                    throw error_factory_1.ErrorFactory.getNotFoundError("this password  is invalid");
                }
                return token;
            }
            catch (error) {
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
    getAllUserLogic(req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the Get All Users");
            try {
                let users = yield user_entities_1.User.find();
                return users;
            }
            catch (error) {
                console.log("here the error", error);
            }
        });
    }
    updateUserLogic(params, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the Update User Logic");
            try {
                let reqUserForUpdate = yield user_entities_1.User.findOneBy({ id: params.userId });
                if (reqUserForUpdate === undefined || !reqUserForUpdate) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("this user Id is not valid");
                }
                let updateUser = yield user_entities_1.User.merge(reqUserForUpdate, {
                    firstName: params.firstName,
                    surName: params.surName,
                    email: params.email
                });
                yield user_entities_1.User.save(updateUser);
                return updateUser;
            }
            catch (error) {
                console.log("here the error", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
    deleteUserLogic(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the Update User Logic");
            try {
                let reqUserForDelete = yield user_entities_1.User.findOneBy({ id: params.userId });
                if (reqUserForDelete === undefined || !reqUserForDelete) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("this user Id is not valid");
                }
                yield user_entities_1.User.delete({ id: reqUserForDelete.id });
                return `delete succefull from User Id ${params.userId}`;
            }
            catch (error) {
                console.log("here the error", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
}
exports.UserLogic = UserLogic;
