import {Request, Response, Router} from 'express';
import UsersService from "../../services/UsersService";

// eslint-disable-next-line new-cap
const UserRouter: Router = Router();

UserRouter.get('/', (req: Request, res: Response) => {
    UsersService.getUsersIndex().then((results) => {
        res.status(200).send({data: results})
    }).catch(() => {
        res.status(403).send({data: null})
    });
});

UserRouter.get('/:userId', (req: Request, res: Response) => {
    UsersService.getUserById(req.params.userId).then((results) => {
        res.status(200).send({data: results})
    }).catch(() => {
        res.status(403).send({data: null})
    });
});

UserRouter.delete('/:userId', (req: Request, res: Response) => {
    UsersService.deleteUser(req.params.userId).then((results) => {
        res.status(200).send({data: results})
    }).catch(() => {
        res.status(403).send({data: null})
    });
});

export default UserRouter;
