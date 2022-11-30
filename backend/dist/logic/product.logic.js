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
exports.ProductLogic = void 0;
const product_entities_1 = require("../entities/product.entities");
const user_entities_1 = require("../entities/user.entities");
const entities_factory_1 = require("../entities/factory/entities.factory");
const error_factory_1 = require("../utils/errorFactory/error.factory");
const base_error_1 = require("../utils/base.error");
class ProductLogic extends product_entities_1.Product {
    validateIdForProducts(params, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forM = [];
                forM.push(userData);
                const map1 = forM.map((x) => {
                    return {
                        userId: x.userEmail.id
                    };
                });
                for (var i = 0; i < map1.length; i++) {
                    var element = map1[i];
                }
                const reqUser = yield user_entities_1.User.findOneBy({ id: params.userId });
                if (reqUser === undefined || reqUser === null || !reqUser) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("invalid User Id");
                }
                if (reqUser.id !== element.userId) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("this user Id is invalid should be your user Id");
                }
                return reqUser;
            }
            catch (error) {
                console.log("here the error", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
    createProduct(params, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("into the create product");
                let validateUser = yield this.validateIdForProducts(params.userId, userData);
                let product = yield entities_factory_1.EntitiesFactory.getProductModel(params.name, params.marca, params.precio, validateUser);
                yield product_entities_1.Product.save(product);
                return product;
            }
            catch (error) {
                console.log("here the error in the createProduct Logic", error);
                throw error;
            }
        });
    }
    getProductById(params, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("into the get product by id");
                const product = yield product_entities_1.Product.findOneBy({ id: params.productId });
                if (product === undefined || !product) {
                    throw error_factory_1.ErrorFactory.getNotFoundError("thid product id is  invalid or dont  exist");
                }
                return product;
            }
            catch (error) {
                console.log("here the error in the createProduct Logic", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
    getAllProducts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("into the get product by id");
                const product = yield product_entities_1.Product.find();
                return product;
            }
            catch (error) {
                console.log("here the error in the createProduct Logic", error);
            }
        });
    }
    updateProduct(params, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the Update Product");
            try {
                let reqProduct = yield product_entities_1.Product.findOneBy({ id: params.productId });
                if (reqProduct === undefined || !reqProduct) {
                    throw new Error("this product Id is not valid");
                }
                let updateProduct = yield product_entities_1.Product.merge(reqProduct, {
                    name: params.name,
                    marca: params.marca,
                    precio: params.precio
                });
                yield product_entities_1.Product.save(updateProduct);
                return updateProduct;
            }
            catch (error) {
                console.log("here the error", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
    deleteProductLogic(params) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("into the delete Product Logic");
            try {
                let reqProductForDelete = yield product_entities_1.Product.findOneBy({ id: params.productId });
                if (reqProductForDelete === undefined || !reqProductForDelete) {
                    throw new Error("this user Id is not valid");
                }
                yield product_entities_1.Product.delete({ id: reqProductForDelete.id });
                return `delete succefull from Product Id ${params.productId}`;
            }
            catch (error) {
                console.log("here the error", error);
                if (error instanceof base_error_1.BaseError) {
                    throw error_factory_1.ErrorFactory.getNotFoundError(`${error}`);
                }
                console.log("here the error in the login", error);
                throw error;
            }
        });
    }
}
exports.ProductLogic = ProductLogic;
