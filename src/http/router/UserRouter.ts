import {Router} from 'express';
import UserController from "../controllers/UserController";

// eslint-disable-next-line new-cap
const UserRouter: Router = Router();

UserRouter.get('/', UserController.index);

UserRouter.get('/:userId', UserController.show);

UserRouter.delete('/:userId', UserController.delete);

export default UserRouter;
