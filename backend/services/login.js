import { InvalidArgumentException } from "../exceptions/invalid_argument_exception.js";
import { InvalidCredentialsException } from "../exceptions/invalid_credentials_exception.js";
import { getDependency } from "../libs/dependencies.js";
import config  from "../config.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class LoginService {
    static async login(credentials){
    if (!credentials 
        || !credentials.username 
        || !credentials.password 
        || typeof credentials.username !== 'string' 
        || typeof credentials.password !== 'string'
        )
        throw new InvalidArgumentException();

        const UserServiceme = getDependency('UserService');
        const user = await UserServiceme.getSingleOrNullByUsername(credentials.username);
     if(!user)
        throw new InvalidCredentialsException();
    
        //console.log('calculando hash');
        //const hash = await bcrypt.hash('1234', 10);
        //console.log(hash); 
    

    
       
    if (!(await bcrypt.compare(credentials.password, user.hashPassword))) 

        throw new InvalidCredentialsException();

        const token = jwt.sign(
            {
            userId: user.id,
             username: user.username,
             fullName: user.fullName,
             roles:user.roles,
            },
            config.jwtKey,
            {
                expiresIn: '1h'
            }
        );

        return {token };
   
    }
}