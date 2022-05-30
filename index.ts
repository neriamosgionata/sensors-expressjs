import express, {Express} from 'express';
import http from 'http';
import cors from 'cors';

import HomeRouter from './src/http/router/HomeRouter';
import AuthRouter from './src/http/router/AuthRouter';
import UserRouter from './src/http/router/UserRouter';
import SensorDataRouter from "./src/http/router/SensorDataRouter";
import SensorsRouter from "./src/http/router/SensorsRouter";
import MigrationRouter from "./src/http/router/MigrationRouter";

import AuthMiddleware from './src/http/middlewares/AuthMiddleware';

import MongoDBService from './src/services/MongoDBService';
import SingletonEnum from './src/enums/SingletonEnum';
import SocketService from './src/services/SocketService';
import SensorsService from "./src/services/SensorsService";

import Constants from './src/constants/Constants';

const app: Express = express();

//ROUTING

app.use(cors({preflightContinue: true, origin: 'localhost', methods: '*'}));
app.use(express.json());

app.use('/', HomeRouter);
app.use('/auth', AuthRouter);
app.use('/users', AuthMiddleware, UserRouter);
app.use('/sensors', AuthMiddleware, SensorsRouter);
app.use('/data', AuthMiddleware, SensorDataRouter);

if (Constants.APP_ENV === 'local') {
    app.use('/migrate', MigrationRouter);
}

let server = http.createServer(app);

server = server.listen(Constants.APP_PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${Constants.APP_PORT}`);
})


//SOCKET
const customEvents = [
    SensorsService.registerNewSensorEvent(),
    SensorsService.registerNewSensorReadingEvent()
];
app.set(SingletonEnum.SOCKET, new SocketService(server, customEvents));


//DB
app.set(SingletonEnum.MONGO_DB, new MongoDBService());
