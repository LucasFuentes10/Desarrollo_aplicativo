import express from 'express';
import { controllers } from './controllers/controllers.js';
import { errorHandlerMiddleware } from './middlewares/Error_handler_middleware.js';
import { logMiddleware } from './middlewares/log.middleware.js';
import  config  from './config.js';
import mongoose from 'mongoose';
import configureDependencies from './configure_dependencies.js';

if (!config.jwtKey){
    console.error('Falta la variable de entorno JWT_KEY en la configuracion. Porfavor, revisa el archivo config.js');
    process.exit(1);
}

mongoose.connect(config.dbConnection)
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

const app = express();

const router = express.Router();
app.use('/api', router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);

router.use(errorHandlerMiddleware);

configureDependencies();

app.listen(
    config.port,
    ()=> {
        console.log((`Servidor corriendo en http://localhost:${config.port}`));
    }
);