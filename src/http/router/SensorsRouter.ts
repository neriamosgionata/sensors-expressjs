import {Request, Response, Router} from 'express';

// eslint-disable-next-line new-cap
const SensorsRouter: Router = Router();

SensorsRouter.get('/', (req: Request, res: Response) => {
    // TODO INDEX for SENSORS
});

SensorsRouter.get('/:sensorId', (req: Request, res: Response) => {
    // TODO SHOW for SENSORS
});

SensorsRouter.delete('/:sensorId', (req: Request, res: Response) => {
    // TODO SHOW for SENSORS
});

export default SensorsRouter;
