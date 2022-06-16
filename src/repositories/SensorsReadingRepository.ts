import SensorReading from "../database/models/SensorData/SensorReading";
import ISensorDataSchema from "../database/schemas/ISensorReadingSchema";

export default class SensorsReadingRepository {
    static async getSensorReadingBySensorId(sensorId: string): Promise<ISensorDataSchema[]> {
        return await SensorReading.find({sensorId}).exec();
    }

    static async getSensorReadingIndex(): Promise<ISensorDataSchema[]> {
        return await SensorReading.find({}).exec();
    }

    static async getSensorReadingById(readingId: string): Promise<ISensorDataSchema | null> {
        return await SensorReading.findOne({readingId}).exec();
    }
}