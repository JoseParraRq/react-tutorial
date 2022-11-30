import {Request,Response} from "express";
import { UserLogic } from "../logic/user.logic";
import { Utils } from "../utils/utils";
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";
import { UserData } from "../interfaces/userData";
import { BaseError } from "../utils/base.error";
        
export class UserController{

    public static async login(req:Request,res:Response){
        try {
            console.log("here in the controller login");
            const params = req.body;
            let login = await new UserLogic().loginJwtLogic(params);
            res.header('autorization',login);
            return await Utils.response(res,StatusCodes.OK,"Request Succefull",[
            {
                   login: "Login exitoso"
            }
            ]
            );
                } catch (error) {
                    console.log("here the error on get one user",error);
                    if(error instanceof BaseError){
                    return Utils.response(res,error.statusCode,error.name); 
                    }
                    return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred and error trying to login")
        }
    }
    
    
    public static async createUser(req:Request,res:Response){
        try {
            console.log("here in the createUser controller");
            const params = req.body;
            const userData=req.userdata as UserData;
            let user = await new UserLogic().createUser(params);
            return await Utils.response(res,StatusCodes.OK,"Request Succefull",[
            {
                   userId: user?.id
            }
            ]
            );
                } catch (error) {
            console.log("here the error on create",error);
        if(error instanceof BaseError){
        return Utils.response(res,error.statusCode,error.message);
        }
        return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"error trying to createUSer");
        }
    }


public static async getUserById(req:Request,res:Response){
    try {
        console.log("here in the get userbyId controller");
        const params = req.body;
        let userLogic= await new UserLogic();
        let user = await userLogic.getUserByIdLogic(params);
        return await Utils.response(res,StatusCodes.OK,"Request Succefull",[
        {
               user: user
        }
        ]
        );
            } catch (error) {
        console.log("here the error on get one user",error);
        if(error instanceof BaseError){
        return Utils.response(res,error.statusCode,error.name); 
        }
        return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred and error trying to get User")
    }
}

public static async getAllUsers(req:Request,res:Response){
    try {
        console.log("here in the getAllUsers controller");
        let user = await new UserLogic().getAllUserLogic(req);
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

public static async updateUser(req:Request,res:Response){
    try {
        console.log("here in updateUser controller");
        const params = req.body;
        const userData=req.userdata as UserData;
        let user = await new UserLogic().updateUserLogic(params,userData);
        return await Utils.response(res,StatusCodes.OK,"Request Succefull",[
        {
               user: user
        }
        ]
        );
            } catch (error) {
        console.log("here the error on update",error);
        if(error instanceof BaseError){
            return Utils.response(res,error.statusCode,error.name); 
            }
            return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred and error trying to update User")
    }
}

public static async deleteUser(req:Request,res:Response){
    try {
        console.log("here in deleteUser controller");
        const params = req.body;
        const userData=req.userdata as UserData;
        let user = await new UserLogic().deleteUserLogic(params);
        return await Utils.response(res,StatusCodes.OK,"Request Succefull",[
        {
               user: user
        }
        ]
        );
            } catch (error) {
        console.log("here the error on update",error);
        if(error instanceof BaseError){
            return Utils.response(res,error.statusCode,error.name); 
            }
            return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred and error trying to delete User")
    }
}
}