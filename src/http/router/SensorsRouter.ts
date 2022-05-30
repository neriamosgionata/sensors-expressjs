import {Router} from 'express';
import SensorController from "../controllers/SensorController";

// eslint-disable-next-line new-cap
const SensorsRouter: Router = Router();

SensorsRouter.get('/', SensorController.index);

SensorsRouter.get('/:sensorId', SensorController.show);

SensorsRouter.delete('/:sensorId', SensorController.delete);

export default SensorsRouter;
