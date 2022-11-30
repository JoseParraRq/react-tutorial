import { Product } from "../entities/product.entities";
import { User } from "../entities/user.entities";
import { Request } from "express";
import { UserTypeLogic } from "./userType.logic";
import { Constants } from "../utils/constants";
import { UserRepository } from "../repository/user.repository";
import { UserData } from "../interfaces/userData";
import { EntitiesFactory } from "../entities/factory/entities.factory";
import { parseArgs } from "util";
import { ErrorFactory } from "../utils/errorFactory/error.factory";
import { BaseError } from "../utils/base.error";
export class ProductLogic extends Product {

    public async validateIdForProducts(params:any,userData:UserData){
try {
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

            const reqUser: User = await User.findOneBy({ id: params.userId });
            if (reqUser === undefined || reqUser === null || !reqUser) {
                throw ErrorFactory.getNotFoundError("invalid User Id");
            }

            if(reqUser.id !== element.userId){
                throw ErrorFactory.getNotFoundError("this user Id is invalid should be your user Id");
            }

            return reqUser;

} catch (error) {
    console.log("here the error",error);
    if (error instanceof BaseError) {
        throw ErrorFactory.getNotFoundError(`${error}`);
    }
    console.log("here the error in the login", error);
    throw error;
}
    } 

    public async createProduct(params: any, userData: UserData) {
        try {
            console.log("into the create product");
            let validateUser = await this.validateIdForProducts(params.userId,userData);
            let product = await EntitiesFactory.getProductModel(
                params.name,
                params.marca,
                params.precio,
                validateUser
            );
            await Product.save(product);
            return product;
        } catch (error) {
            console.log("here the error in the createProduct Logic", error);
            throw error;
        }
    }

    public async getProductById(params: any, userData: UserData) {
        try {
            console.log("into the get product by id");
            const product = await Product.findOneBy({id:params.productId});
            if(product===undefined || !product ){
            
                throw ErrorFactory.getNotFoundError("thid product id is  invalid or dont  exist");
            }
            return product;
        } catch (error) {
            console.log("here the error in the createProduct Logic", error);
            if (error instanceof BaseError) {
                throw ErrorFactory.getNotFoundError(`${error}`);
            }
            console.log("here the error in the login", error);
            throw error;
        }
    }

    public async getAllProducts(params: any) {
        try {
            console.log("into the get product by id");
            const product = await Product.find();
            return product;
        } catch (error) {
            console.log("here the error in the createProduct Logic", error);
        }
    }

    public async updateProduct(params: any, userData: UserData) {
         console.log("into the Update Product");
        try {
            let reqProduct = await Product.findOneBy({ id: params.productId });
            
            if(reqProduct===undefined || !reqProduct){
                throw new Error("this product Id is not valid");
            }

            let updateProduct = await Product.merge(reqProduct, {
                name:params.name,
                marca:params.marca,
                precio:params.precio
            });
            await Product.save(updateProduct);
            return updateProduct;

        } catch (error) {
            console.log("here the error", error);
            if (error instanceof BaseError) {
                throw ErrorFactory.getNotFoundError(`${error}`);
            }
            console.log("here the error in the login", error);
            throw error;
        }
    }

    public async deleteProductLogic(params:any) {
        console.log("into the delete Product Logic");
           try {
               let reqProductForDelete = await Product.findOneBy({ id: params.productId });
               
               if(reqProductForDelete===undefined || !reqProductForDelete){
                   throw new Error("this user Id is not valid");
               }
   
            await Product.delete({id:reqProductForDelete.id});
               return `delete succefull from Product Id ${params.productId}`;
   
           } catch (error) {
               console.log("here the error", error);
               if (error instanceof BaseError) {
                throw ErrorFactory.getNotFoundError(`${error}`);
            }
            console.log("here the error in the login", error);
            throw error;
            }   
   }
}
