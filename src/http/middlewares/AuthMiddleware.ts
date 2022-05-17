import {Request, Response} from 'express';
import AuthService from '../../services/AuthService';

const AuthMiddleware = (req: Request, res: Response, next: Function) => {
    const token = req.header('authorization');

    AuthService.getUserFromToken(token)
        .then((user) => {
            // @ts-ignore
            req.token = token;
            // @ts-ignore
            req.user = user;
            next();
        })
        .catch((err) => {
            res.status(403).send({error: 'User unauthenticated'});
        });
};

export default AuthMiddleware;
