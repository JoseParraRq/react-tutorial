import { UserType } from "../entities/userType.entities";

export class UserTypeLogic extends UserType {
public async getUserTypeById(id:number){
return await UserType.findOneBy({id:id})
}

public async getAllUserTypesLogic(req: any) {
    console.log("into the Get All UserTypes");
    try {
        let userTypes = await UserType.find();
        return userTypes;
    } catch (error) {
        console.log("here the error", error);
    }
}
}
