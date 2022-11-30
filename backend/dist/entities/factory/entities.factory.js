"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesFactory = void 0;
const product_entities_1 = require("../product.entities");
const user_entities_1 = require("../user.entities");
class EntitiesFactory {
    static getUserModel(firstName, surName, email, password, userType) {
        const user = new user_entities_1.User();
        user.firstName = firstName;
        user.surName = surName;
        user.email = email;
        user.password = password;
        user.userType = userType;
        return user;
    }
    static getProductModel(name, marca, precio, userId) {
        const product = new product_entities_1.Product();
        product.name = name;
        product.marca = marca;
        product.precio = precio;
        product.user = userId;
        return product;
    }
}
exports.EntitiesFactory = EntitiesFactory;
