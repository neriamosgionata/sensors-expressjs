import {Request, Response} from 'express';
import AuthService from '../../services/AuthService';

const AuthMiddleware = (req: Request, res: Response, next: Function) => {
    let token = req.header('authorization');

    token = token?.replace('Bearer ', '');

    AuthService.getUserFromToken(token)
        .then((user) => {
            // @ts-ignore
            req.token = token;
            // @ts-ignore
            req.user = user;
            next();
        })
        .catch((err) => {
            res.status(403).send({message: 'User unauthenticated', error: err});
        });
};

export default AuthMiddleware;
