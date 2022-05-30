import {Request, Response} from "express";
import AuthService from "../../services/AuthService";

export default class AuthController {
    static login(req: Request, res: Response): void {
        const {username, password} = req.params;

        AuthService.login(username, password)
            .then((token) => {
                res.status(200).send({token: token});
            })
            .catch((err) => {
                res.status(400).send({error: err});
            });
    }

    static logout(req: Request, res: Response): void {
        // @ts-ignore
        const token = req.token;

        AuthService.logout(token)
            .then(() => {
                res.status(200).send({logout: true});
            })
            .catch((err) => {
                res.status(400).send({error: err});
            });
    }

    static register(req: Request, res: Response): void {
        const {username, password} = req.params;

        AuthService.register(username, password)
            .then((token) => {
                res.status(200).send({token: token});
            })
            .catch((err) => {
                res.status(400).send({error: err});
            });
    }
}

