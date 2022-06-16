import {Request, Response} from "express";
import SensorsReadingRepository from "../../repositories/SensorsReadingRepository";

export default class SensorDataController {
    static index(req: Request, res: Response): void {
        const index = SensorsReadingRepository.getSensorReadingIndex();
        res.status(200).send({data: index});
    }

    static showAllReadingOfASensor(req: Request, res: Response): void {
        const index = SensorsReadingRepository.getSensorReadingBySensorId(req.params.sensorId);
        res.status(200).send({data: index});
    }

    static show(req: Request, res: Response): void {
        const index = SensorsReadingRepository.getSensorReadingById(req.params.readingId);
        res.status(200).send({data: index});
    }
}