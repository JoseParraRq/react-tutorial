import { Product } from "../product.entities";
import { User } from "../user.entities";
import { UserType } from "../userType.entities";

export class EntitiesFactory {
    public static getUserModel(firstName: string,
        surName: string,
        email: string,
        password:string,
        userType:UserType
    ): User {
        const user = new User();
        user.firstName = firstName;
        user.surName = surName;
        user.email = email;
        user.password=password;
        user.userType=userType;
        return user;
    }

    public static getProductModel(
        name: string,
        marca: string,
        precio: number,
        userId:User
    ): Product {
        const product = new Product();
        product.name = name;
        product.marca = marca;
        product.precio = precio;
        product.user = userId;
        return product;
    }   
}