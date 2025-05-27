import { InvalidArgumentException } from "../exceptions/invalid_argument_exception.js";
import { InvalidCredentialsException } from "../exceptions/invalid_credentials_exception.js";
import { UserService } from "./user.js";
export class LoginService {
    static async login(credentials){
    if (!credentials 
        || !credentials.username 
        || !credentials.password 
        || typeof credentials.username !== 'string' 
        || typeof credentials.password !== 'string'
        )
        throw new InvalidArgumentException();

        const UserServiceme = getDependencies('UserService');
        const user = await UserServiceme.getSingleOrNullByUsername(credentials.username);
        if(!user)
            throw new InvalidCredentialsException();
    if (credentials.username !== 'admin')
        throw new InvalidCredentialsException();
    
        console.log('calculando hash');
        const hash = await bcrypt.hash('1234', 20);
        console.log(hash); 
    
    if (credentials.password !== '1234')
        throw new InvalidCredentialsException();

    return {
        token: 'Token de acceso'
    };
    }
}