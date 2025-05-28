import { getDependencies } from "../libs/dependencies.js";

export class UserService{
    static async getSingleOrNullByUsername(username){
        const UserModel = getDependencies('UserModel');
        return await UserModel.getSingleOrNullByUsername(username);
    }
}