import { errorHandlerMiddleware } from './middlewares/Error_handler_middleware.js';
import { logMiddleware } from './middlewares/log.middleware.js';
import { authorizationMiddleware } from './middlewares/authorization_middleware.js';   
import { controllers } from './controllers/controllers.js';

export default function configureMiddlewares(router) {
router.use(logMiddleware);
router.use(errorHandlerMiddleware);
router.use(authorizationMiddleware);
controllers(router);
}