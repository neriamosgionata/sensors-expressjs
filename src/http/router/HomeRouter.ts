import {Router} from 'express';
import HomeController from "../controllers/HomeController";

// eslint-disable-next-line new-cap
const HomeRouter: Router = Router();

HomeRouter.get('/', HomeController.home);

export default HomeRouter;
