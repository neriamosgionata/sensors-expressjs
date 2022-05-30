import {Request, Response} from 'express';

export default class HomeController {
    static home(req: Request, res: Response): void {
        res.send('Home');
    }
}
