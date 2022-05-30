import {Router} from 'express';
import MigrationController from "../controllers/MigrationController";

// eslint-disable-next-line new-cap
const MigrationRouter: Router = Router();

MigrationRouter.get('/', MigrationController.migrate);

export default MigrationRouter;
