import {Request, Response, Router} from 'express';
import SingletonEnum from "../../enums/SingletonEnum";

// eslint-disable-next-line new-cap
const MigrationRouter: Router = Router();

MigrationRouter.get('/', (req: Request, res: Response) => {
    req.app.get(SingletonEnum.MONGO_DB).migrateDB().then(() => res.status(200).send());
});

export default MigrationRouter;
