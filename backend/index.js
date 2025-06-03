import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/Error_handler_middleware.js';
import { logMiddleware } from './middlewares/log.middleware.js';
import { addDependency} from './libs/dependencies.js';
import { UserService } from './services/user.js';
import { LoginService } from './services/login.js';
import { UserMockup } from './Mockup/user.js';
import  config  from './config.js';


if (!config.jwtKey){
    console.error('Falta la variable de entorno JWT_KEY en la configuracion. Porfavor, revisa el archivo config.js');
    process.exit(1);
}

const app = express();

const router = express.Router();
app.use('/api', router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);

router.use(errorHandlerMiddleware);

addDependency('UserService', UserService);
addDependency('LoginService', LoginService);
addDependency('UserMockup', UserMockup);

app.listen(
    config.port,
    ()=> {
        console.log((`Servidor corriendo en http://localhost:${config.port}`));
    }
);