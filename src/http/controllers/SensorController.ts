import {Request, Response} from "express";
import SensorsRepository from "../../repositories/SensorsRepository";

export default class SensorController {
    static index(req: Request, res: Response): void {
        const index = SensorsRepository.getSensorIndex(req);
        res.status(200).send({data: index});
    }

    static show(req: Request, res: Response): void {
        const index = SensorsRepository.getSensorById(req.params.sensorId);
        res.status(200).send({data: index});
    }
}