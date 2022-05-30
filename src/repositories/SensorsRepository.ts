import Sensor from '../database/models/Sensor/Sensor';
import {Types} from 'mongoose';
import SensorTypeEnum from '../enums/SensorTypeEnum';
import ISensorSchema from '../database/schemas/ISensorSchema';
import SensorData from "../database/models/SensorData/SensorData";
import ISensorDataSchema from "../database/schemas/ISensorDataSchema";
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
        const sensorData = new SensorData({
            sensorId: sensorId,
            reading: reading,
            datetime: datetime,
            sensorType: sensorType
        });
        await sensorData.save();
        return sensorData._id;
    }

    static async getSensorReadingBySensorId(sensorId: string): Promise<ISensorDataSchema[]> {
        return await SensorData.find({
            sensorId: sensorId
        }).exec();
    }

    static async getSensorById(_id: string): Promise<ISensorSchema | null> {
        return await Sensor.findById(_id).exec();
    }

    static async getSensorIndex(req: Request): Promise<ISensorSchema[]> {
        return await FilterService.createQueryFromRequestFilters<ISensorSchema[], ISensorSchema>(req, Sensor.find()).exec();
    }
}
