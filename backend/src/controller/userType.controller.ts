import {Request,Response} from "express";
import { StatusCodes } from "http-status-codes";
import {UserTypeLogic} from "../logic/userType.logic";
import {Utils} from "../utils/utils";
import { BaseError } from "../utils/base.error";

export class UserTypeController{
    
    
public static async getAllUserTypes(req:Request,res:Response){
    try {
        console.log("here in the getAllUsers controller");
        let user = await new UserTypeLogic().getAllUserTypesLogic(req);
        return await Utils.response(res,StatusCodes.OK,"Request Succefull",[
        {
               users: user
        }
        ]
        );
            } catch (error) {
        console.log("here the error on get all users",error);
        if(error instanceof BaseError){
            return Utils.response(res,error.statusCode,error.name); 
            }
            return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred and error trying to get  All Users")

    }
}
}