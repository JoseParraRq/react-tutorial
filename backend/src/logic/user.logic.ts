import { User } from "../entities/user.entities";
import { EntitiesFactory } from "../entities/factory/entities.factory";
import * as jwt from "jsonwebtoken";
import * as bc from "bcryptjs";
import { UserData } from "../interfaces/userData";
import { ErrorFactory } from "../utils/errorFactory/error.factory";
import { BaseError } from "../utils/base.error";

export class UserLogic extends User {

    public async createUser(params: any) {
        console.log("into the Create User Logic");
        try {
            let user = await EntitiesFactory.getUserModel(
                params.firstName,
                params.surName,
                params.email,
                params.password,
                params.userTypeId
            );
            const bcrypts = await bc.hashSync(params.password, 8)
            user.password = bcrypts;
            await User.save(user);
            return user;
        } catch (error) {
            console.log("here the error", error);
        }
    }

    public async getUserByIdLogic(params: any): Promise<User | undefined> {
        console.log("into the Get User By id");

        let user;
        try {
            user = await User.findOneBy({ id: params.userId });
            if (user === undefined || !user) {
                throw ErrorFactory.getNotFoundError("invalid userId")
            }

        } catch (error) {
            console.log("here the error", error);

            if (error instanceof BaseError) {
                throw ErrorFactory.getNotFoundError(`${error}`);
            }
            console.log("here the error in the get userId", error);
            throw error;

        }
        return user;
    }

    public async loginJwtLogic(params: any) {

        try {
            let token: string = '';
            let userEmail = await User.findOneBy({ email: params.email });
            console.log("userEmail", userEmail);

            if (userEmail === undefined || !userEmail) {
                throw ErrorFactory.getNotFoundError("this email is invalid");
            }
            
            /*const bcrypts = await bc.hashSync(params.password, 8)
            userEmail.password = bcrypts;   solo para el primer usuario admin
            console.log("here the bcrupoyttss",bcrypts);
            */

            let compare = await bc.compareSync(params.password, userEmail.password);
           console.log("here the compare",compare);
           
            if (compare) {
                token = await jwt.sign({ userEmail }, process.env.TOKEN || 'secret', {
                    expiresIn: 120
                });
            } else {
                throw ErrorFactory.getNotFoundError("this password  is invalid");

            }
            return token;
        } catch (error) {

            if (error instanceof BaseError) {
                throw ErrorFactory.getNotFoundError(`${error}`);
            }
            console.log("here the error in the login", error);
            throw error;
        }
    }

    public async getAllUserLogic(req: any) {
        console.log("into the Get All Users");
        try {
            let users = await User.find();
            return users;
        } catch (error) {
            console.log("here the error", error);
        }
    }

    public async updateUserLogic(params: any, userData: UserData) {
        console.log("into the Update User Logic");
        try {
            let reqUserForUpdate = await User.findOneBy({ id: params.userId });

            if (reqUserForUpdate === undefined || !reqUserForUpdate) {
                throw ErrorFactory.getNotFoundError("this user Id is not valid");
            }

            let updateUser = await User.merge(reqUserForUpdate, {
                firstName: params.firstName,
                surName: params.surName,
                email: params.email
            });
            await User.save(updateUser);
            return updateUser;

        } catch (error) {
            console.log("here the error", error);
            if (error instanceof BaseError) {
                throw ErrorFactory.getNotFoundError(`${error}`);
            }
            console.log("here the error in the login", error);
            throw error;
        }
    }

    public async deleteUserLogic(params: any) {
        console.log("into the Update User Logic");
        try {
            let reqUserForDelete = await User.findOneBy({ id: params.userId });

            if (reqUserForDelete === undefined || !reqUserForDelete) {
                throw ErrorFactory.getNotFoundError("this user Id is not valid");
            }

            await User.delete({ id: reqUserForDelete.id });
            return `delete succefull from User Id ${params.userId}`;

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