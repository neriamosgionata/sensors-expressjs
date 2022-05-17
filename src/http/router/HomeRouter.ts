import {Request, Response, Router} from 'express';

// eslint-disable-next-line new-cap
const HomeRouter: Router = Router();

HomeRouter.get('/', (req: Request, res: Response) => {
    res.send('Home');
});

export default HomeRouter;
