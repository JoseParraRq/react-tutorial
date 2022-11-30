"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const middleware_api_1 = require("../middleware/middleware.api");
const router = (0, express_1.Router)();
router.post("/login", user_controller_1.UserController.login);
//router.get("/user",middlewareJwt,UserController.getUserById); //cuando se quiera agregar jwt
router.get("/user", user_controller_1.UserController.getUserById);
//router.post("/createUser", middlewareJwt,middlewareUserType,UserController.createUser);
router.post("/createUser", user_controller_1.UserController.createUser);
router.post("/getUserById", user_controller_1.UserController.getUserById);
//router.post("/getUserById",middlewareJwt,UserController.getUserById);
//router.get("/getAllUsers",middlewareJwt,UserController.getAllUsers);
router.get("/getAllUsers", user_controller_1.UserController.getAllUsers);
router.put("/updateUser", user_controller_1.UserController.updateUser);
//router.put("/updateUser",middlewareJwt,middlewareUserType, UserController.updateUser);
router.delete("/deleteUser", middleware_api_1.middlewareJwt, middleware_api_1.middlewareUserType, user_controller_1.UserController.deleteUser);
exports.default = router;
