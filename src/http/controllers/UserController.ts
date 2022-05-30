import UsersRepository from "../../repositories/UsersRepository";
import {Request, Response} from "express";

export default class UserController {
    static index(req: Request, res: Response): void {
        UsersRepository
            .getUsersIndex(req)
            .then((results) => {
                res.status(200).send({data: results})
            })
            .catch(() => {
                res.status(403).send({data: null})
            });
    }

    static show(req: Request, res: Response): void {
        UsersRepository
            .getUserById(req.params.userId)
            .then((result) => {
                res.status(200).send({data: result})
            })
            .catch(() => {
                res.status(403).send({data: null})
            });
    }

    static delete(req: Request, res: Response): void {
        UsersRepository
            .deleteUser(req.params.userId)
            .then((result) => {
                res.status(200).send({data: result})
            })
            .catch(() => {
                res.status(403).send({data: null})
            });
    }
}
