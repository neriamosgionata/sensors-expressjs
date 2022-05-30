import SingletonEnum from "../../enums/SingletonEnum";
import {Request, Response} from 'express';

export default class MigrationController {
    static migrate(req: Request, res: Response): void {
        req.app.get(SingletonEnum.MONGO_DB).migrateDB().then(() => res.status(200).send());
    }
}
