import {Router} from 'express';
import SensorDataController from "../controllers/SensorDataController";

// eslint-disable-next-line new-cap
const SensorDataRouter: Router = Router();

SensorDataRouter.get('/', SensorDataController.index);

SensorDataRouter.get('/reading/:sensorId/', SensorDataController.showAllReadingOfASensor);

SensorDataRouter.get('/reading/:sensorId/:readingId', SensorDataController.show);

export default SensorDataRouter;