import { Utils } from "../utils/utils";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { ProductLogic } from "../logic/product.logic";
import { UserData } from "../interfaces/userData";
import { BaseError } from "../utils/base.error";
export class ProductController {
    public static async createProduct(req: Request, res: Response) {
        
        try {
            const params = req.body;
            const userData=req.userdata as UserData;
            
            let product = await new ProductLogic().createProduct(params,userData);
            
            return await Utils.response(res, StatusCodes.OK, "Request Succefull", [
                {
                    NewProduct: product
                }
            ]);
        } catch (error) {
            console.log("here the error in the createProduct controller", error);
            if (error instanceof BaseError) {
            return Utils.response(res,error.statusCode,error.name);
            }
            return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred an error triying create Product");
        }

    }

    public static async getProductById(req: Request, res: Response) {
        
        try {
            const params = req.body;
            const userData=req.userdata as UserData;
            
            let product = await new ProductLogic().getProductById(params,userData);
            
            return await Utils.response(res, StatusCodes.OK, "Request Succefull", [
                {
                    NewProduct: product
                }
            ]);
        } catch (error) {
            console.log("here the error in the createProduct controller", error);
            if (error instanceof BaseError) {
                return Utils.response(res,error.statusCode,error.name);
                }
                return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred an error triying get Product");
        }

    }

    public static async getAllProducts(req: Request, res: Response) {
        
        try {
            const params = req.body;
            const userData=req.userdata as UserData;
            
            let product = await new ProductLogic().getAllProducts(params);
            
            return await Utils.response(res, StatusCodes.OK, "Request Succefull", [
                {
                    NewProduct: product
                }
            ]);
        } catch (error) {
            console.log("here the error in the createProduct controller", error);
            if (error instanceof BaseError) {
                return Utils.response(res,error.statusCode,error.name);
                }
                return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred an error triying to get all Product");
        }

    }

    public static async updateProduct(req: Request, res: Response) {
        
        try {
            const params = req.body;
            const userData=req.userdata as UserData;
            
            let product = await new ProductLogic().updateProduct(params,userData);
            
            return await Utils.response(res, StatusCodes.OK, "Request Succefull", [
                {
                    NewProduct: product
                }
            ]);
        } catch (error) {
            console.log("here the error in the createProduct controller", error);
            if (error instanceof BaseError) {
                return Utils.response(res,error.statusCode,error.name);
                }
                return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred an error triying update Product");
        }
    }

    public static async deleteProductLogic(req:Request,res:Response){
        try {
            const params = req.body;
            const userData=req.userdata as UserData;
            
            let product = await new ProductLogic().deleteProductLogic(params);
            
            return await Utils.response(res, StatusCodes.OK, "Request Succefull", [
                {
                    Product: product
                }
            ]);
        } catch (error) {
            console.log("here the error in the createProduct controller", error);
            if (error instanceof BaseError) {
                return Utils.response(res,error.statusCode,error.name);
                }
                return Utils.response(res,StatusCodes.INTERNAL_SERVER_ERROR,"ocurred an error triying to delete Product");
        }
    }
}