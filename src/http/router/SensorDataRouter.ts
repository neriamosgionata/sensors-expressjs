import {Router} from 'express';
import SensorDataController from "../controllers/SensorDataController";

// eslint-disable-next-line new-cap
const SensorDataRouter: Router = Router();

SensorDataRouter.get('/:sensorId/', SensorDataController.index);

SensorDataRouter.get('/:sensorId/:dataId', SensorDataController.show);

export default SensorDataRouter;
