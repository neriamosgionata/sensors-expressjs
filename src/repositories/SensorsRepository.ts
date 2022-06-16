import Sensor from '../database/models/Sensor/Sensor';
import {Types} from 'mongoose';
import SensorTypeEnum from '../enums/SensorTypeEnum';
import ISensorSchema from '../database/schemas/ISensorSchema';
import SensorReading from "../database/models/SensorData/SensorReading";
import ISensorReadingSchema from "../database/schemas/ISensorReadingSchema";
import FilterService from "../services/FilterService";
import {Request} from "express";

export default class SensorsRepository {
    static async registerNewSensor(name: string, ipAddress: string, ipPort: number, type: SensorTypeEnum): Promise<Types.ObjectId> {
        const sensor = new Sensor({
            name: name,
            ipAddress: ipAddress,
            ipPort: ipPort,
            type: type,
        });
        await sensor.save();
        return sensor._id;
    }

    static async saveNewSensorData(sensorId: string, reading: string, datetime: number, sensorType: number) {
        const sensorReading = new SensorReading({
            sensorId: sensorId,
            reading: reading,
            datetime: datetime,
            sensorType: sensorType,
        });
        await sensorReading.save();
        return sensorReading._id;
    }

    static async getSensorById(_id: string): Promise<ISensorSchema | null> {
        return await Sensor.findById(_id).exec();
    }

    static async getSensorIndex(req: Request): Promise<ISensorSchema[]> {
        return await FilterService.createQueryFromRequestFilters<ISensorSchema[], ISensorSchema>(req, Sensor.find()).exec();
    }
}