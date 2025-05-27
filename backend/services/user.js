import { getDpendencies } from "../libs/dependencies.js";

export class UserService{
    static async getSingleOrNullByUsername(username){
        const UserModel = getDpendencies('UserModel');
        return await UserModel.getSingleOrNullByUsername(username);
    }
}