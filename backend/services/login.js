import { InvalidArgumentException } from "../exceptions/invalid_argument_exception.js";
import { InvalidCredentialsException } from "../exceptions/invalid_credentials_exception.js";
import { UserService } from "./user.js";
import { getDependencies } from "../libs/dependencies.js";
import config  from "./config.js";
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
    
        console.log('calculando hash');
        const hash = await bcrypt.hash('1234', 20);
        console.log(hash); 
    
    if (credentials.password !== '1234')
        throw new InvalidCredentialsException();
    const token = JsonWebTokenError.sign(
        { userId: user.id, 
          username: user.username
        
        },
        config.jwtKey,
        {
            expiresIn: '1h'
        }
    )
    return {
        token: 'Token de acceso'
    };
    }
}