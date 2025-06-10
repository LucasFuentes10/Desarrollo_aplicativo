import { errorHandlerMiddleware } from './middlewares/Error_handler_middleware.js';
import { logMiddleware } from './middlewares/log.middleware.js';
import { authorizationMiddleware } from './middlewares/authorization_middleware.js';   
import { controllers } from './controllers/controllers.js';
import express from 'express';
export default function configureMiddlewares(router) {

    router.use(express.json());
    router.use(logMiddleware);
    
    router.use(authorizationMiddleware);

    router.use(errorHandlerMiddleware);
    
    controllers(router);
}