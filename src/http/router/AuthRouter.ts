import {Router} from 'express';
import AuthController from "../controllers/AuthController";

// eslint-disable-next-line new-cap
const AuthRouter: Router = Router();

AuthRouter.post('/login', AuthController.login);

AuthRouter.post('/logout', AuthController.logout);

AuthRouter.post('/register', AuthController.register);

export default AuthRouter;
