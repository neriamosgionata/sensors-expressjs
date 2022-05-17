import {Request, Response, Router} from 'express';
import AuthService from '../../services/AuthService';

// eslint-disable-next-line new-cap
const AuthRouter: Router = Router();

AuthRouter.post('/login', (req: Request, res: Response) => {
    const {username, password} = req.params;

    AuthService.login(username, password)
        .then((token) => {
            res.status(200).send({token: token});
        })
        .catch((err) => {
            res.status(400).send({error: err});
        });
});

AuthRouter.post('/register', (req: Request, res: Response) => {
    const {username, password} = req.params;

    AuthService.register(username, password)
        .then((token) => {
            res.status(200).send({token: token});
        })
        .catch((err) => {
            res.status(400).send({error: err});
        });
});

export default AuthRouter;
