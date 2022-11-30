import { Request, Response, NextFunction, request, response } from "express";
import { StatusCodes } from "http-status-codes";
import { Utils } from "../utils/utils";
import * as jwt from "jsonwebtoken";
import { UserData } from "../interfaces/userData";
import { User } from "../entities/user.entities";
import { Constants } from "../utils/constants";
import { ErrorFactory } from "../utils/errorFactory/error.factory";
import { BaseError } from "../utils/base.error";

export const middlewareJwt = (req: Request, res: Response, next: NextFunction) => {
    console.log("here in the middleware");
    const token = req.header('autorization');
    if (!token) return Utils.response(res, StatusCodes.UNAUTHORIZED, "Usuario no tiene permisos para este recurso");
    const payLoad = jwt.verify(token, process.env.TOKEN || 'secret') as UserData;
    console.log("payload id", payLoad);
    req.userdata = payLoad;
    next();
}

export const middlewareUserType = async (req: Request, res: Response, next: NextFunction) => {
    console.log("here in the middleware userType");
    try {
        let userData = req.userdata as UserData;
        const forM: any[] = [];
        forM.push(userData);
        const map1 = forM.map((x) => {
            return {
                userId: x.userEmail.id
            }
        });

        for (var i = 0; i < map1.length; i++) {
            var element = map1[i];
        }

        const reqUser: User = await User.findOneBy({ id: element.userId });

        if (reqUser.userType.id !== Constants.userTypeAdmin) {
            throw ErrorFactory.getNotFoundError("user has not permission for this resource")
        }
        next();
    } catch (error) {
        if (error instanceof BaseError) {
            return Utils.response(res, error.statusCode, error.name);
        }
        console.log(error);
    }
}