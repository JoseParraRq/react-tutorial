"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userType_controller_1 = require("../controller/userType.controller");
const router = (0, express_1.Router)();
router.get("/getAllUserTypes", userType_controller_1.UserTypeController.getAllUserTypes);
exports.default = router;
