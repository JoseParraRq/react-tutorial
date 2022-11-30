import { User } from "../entities/user.entities";
import { UserLogic } from "../logic/user.logic";

export class UserRepository extends User{

    public async getUserByUserType(id:number):Promise<User | undefined>{
        try {
            const user = await User.createQueryBuilder("user")
            .innerJoinAndSelect("user.userType","UserType")
            .select([
                "UserType.id",
                "user.id",
                "user.firstName",
                "user.surName",
                "user.email",
                "user.createdAt",
                "user.updateAt",
                "user.deletedAt",
                "user.password"
            ])
            .where("Usertype.id := id",{id:id})
            .getRawOne();
            return user;
        } catch (error) {
            console.log("here the error in the user repository",error);
        }
    }
}