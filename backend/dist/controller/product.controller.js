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
exports.ProductController = void 0;
const utils_1 = require("../utils/utils");
const http_status_codes_1 = require("http-status-codes");
const product_logic_1 = require("../logic/product.logic");
const base_error_1 = require("../utils/base.error");
class ProductController {
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.body;
                const userData = req.userdata;
                let product = yield new product_logic_1.ProductLogic().createProduct(params, userData);
                return yield utils_1.Utils.response(res, http_status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        NewProduct: product
                    }
                ]);
            }
            catch (error) {
                console.log("here the error in the createProduct controller", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred an error triying create Product");
            }
        });
    }
    static getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.body;
                const userData = req.userdata;
                let product = yield new product_logic_1.ProductLogic().getProductById(params, userData);
                return yield utils_1.Utils.response(res, http_status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        NewProduct: product
                    }
                ]);
            }
            catch (error) {
                console.log("here the error in the createProduct controller", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred an error triying get Product");
            }
        });
    }
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.body;
                const userData = req.userdata;
                let product = yield new product_logic_1.ProductLogic().getAllProducts(params);
                return yield utils_1.Utils.response(res, http_status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        NewProduct: product
                    }
                ]);
            }
            catch (error) {
                console.log("here the error in the createProduct controller", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred an error triying to get all Product");
            }
        });
    }
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.body;
                const userData = req.userdata;
                let product = yield new product_logic_1.ProductLogic().updateProduct(params, userData);
                return yield utils_1.Utils.response(res, http_status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        NewProduct: product
                    }
                ]);
            }
            catch (error) {
                console.log("here the error in the createProduct controller", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred an error triying update Product");
            }
        });
    }
    static deleteProductLogic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.body;
                const userData = req.userdata;
                let product = yield new product_logic_1.ProductLogic().deleteProductLogic(params);
                return yield utils_1.Utils.response(res, http_status_codes_1.StatusCodes.OK, "Request Succefull", [
                    {
                        Product: product
                    }
                ]);
            }
            catch (error) {
                console.log("here the error in the createProduct controller", error);
                if (error instanceof base_error_1.BaseError) {
                    return utils_1.Utils.response(res, error.statusCode, error.name);
                }
                return utils_1.Utils.response(res, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "ocurred an error triying to delete Product");
            }
        });
    }
}
exports.ProductController = ProductController;
