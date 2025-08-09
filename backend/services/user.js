import { getDependency } from "../libs/dependencies.js";
import { InvalidArgumentException } from "../exceptions/InvalidArgumentException.js";

export class UserService{
    static async getSingleOrNullByUsername(username){
        const UserModel = getDependency('UserModel');
        return (await UserModel.find({username}))[0];
    }
   
    static async get(){
        const UserModel = getDependency('UserModel');
        return await UserModel.find({});
    }
   
    static async create(user){
        if(!user.username) {
            throw new InvalidArgumentException('Falta el parámetro username');
        }

        if (!user.fullName) {
            throw new InvalidArgumentException('Falta el parámetro fullName');
        }
             
        if (!user.email) {
            throw new InvalidArgumentException('Falta el parámetro email');
        }

        if (user.roles && !Array.isArray('UserModel')){
            throw new InvalidArgumentException('Falta el parámetro roles');
        }

        const UserModel = getDependency('UserModel');
        const existingUser = await UserModel.find({username: user.username});
        if (existingUser.length > 0){
            throw new InvalidArgumentException('Ya existe un usuario con ese username');
        }

        const newUser = new UserModel(user);
        await newUser.save();
        return newUser;
    } 
}