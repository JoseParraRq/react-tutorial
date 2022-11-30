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
exports.UserRepository = void 0;
const user_entities_1 = require("../entities/user.entities");
class UserRepository extends user_entities_1.User {
    getUserByUserType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_entities_1.User.createQueryBuilder("user")
                    .innerJoinAndSelect("user.userType", "UserType")
                    .select([
                    "UserType.id",
                    "user.id",
                    "user.firstName",
                    "user.surName",
                    "user.email",
                    "user.createdAt",
                    "user.updateAt",
                    "user.deletedAt",
                    "user.password"
                ])
                    .where("Usertype.id := id", { id: id })
                    .getRawOne();
                return user;
            }
            catch (error) {
                console.log("here the error in the user repository", error);
            }
        });
    }
}
exports.UserRepository = UserRepository;
