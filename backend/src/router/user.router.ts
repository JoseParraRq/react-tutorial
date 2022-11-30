import {request, response,Router} from "express";
import { UserController } from "../controller/user.controller";
import {middlewareJwt, middlewareUserType} from "../middleware/middleware.api";
const router = Router();


router.post("/login",UserController.login);
//router.get("/user",middlewareJwt,UserController.getUserById); //cuando se quiera agregar jwt
router.get("/user",UserController.getUserById);

//router.post("/createUser", middlewareJwt,middlewareUserType,UserController.createUser);
router.post("/createUser",UserController.createUser);

router.post("/getUserById",UserController.getUserById);
//router.post("/getUserById",middlewareJwt,UserController.getUserById);

//router.get("/getAllUsers",middlewareJwt,UserController.getAllUsers);
router.get("/getAllUsers",UserController.getAllUsers);

router.put("/updateUser", UserController.updateUser);

//router.put("/updateUser",middlewareJwt,middlewareUserType, UserController.updateUser);

router.delete("/deleteUser",middlewareJwt,middlewareUserType, UserController.deleteUser);

export default router; 