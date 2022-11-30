import { Router } from "express";
import { UserTypeController } from "../controller/userType.controller";

const router = Router();

router.get("/getAllUserTypes",UserTypeController.getAllUserTypes);

export default router;