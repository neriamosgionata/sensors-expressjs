import {Request, Response, Router} from 'express';

// eslint-disable-next-line new-cap
const SensorDataRouter: Router = Router();

SensorDataRouter.get('/:sensorId/', (req: Request, res: Response) => {
    // TODO INDEX for SENSOR DATA
});

SensorDataRouter.get('/:sensorId/:dataId', (req: Request, res: Response) => {
    // TODO SHOW for SENSOR DATA
});

export default SensorDataRouter;
