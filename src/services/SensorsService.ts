import Sensor from '../database/models/Sensor/Sensor';
import {Types} from 'mongoose';
import SensorTypeEnum from '../enums/SensorTypeEnum';
import ISensorSchema from '../database/schemas/ISensorSchema';
import ISocketEvent from "../http/socket/ISocketEvent";
import SensorData from "../database/models/SensorData/SensorData";
import ISensorDataSchema from "../database/schemas/ISensorDataSchema";

export default class SensorsService {
    static newSensorEvent() {
        return {
            name: 'newSensor',
            function: (socket) => {
                return async (args) => {
                    console.log('[Sensor service] Registering new sensor');

                    const id = await this.registerNewSensor(args.name, args.ip_address, args.ip_port, args.type);

                    console.log('[Sensor service] Data', args);

                    socket.emit('newSensorDone', {id: id});

                    console.log('[Sensor service] Done registering sensor ' + id);
                };
            }
        } as ISocketEvent;
    }

    static newSensorReadingEvent() {
        return {
            name: 'newSensorReading',
            function: (socket) => {
                return async (args) => {
                    console.log('[Sensor service] Saving new sensor data');

                    const id = await this.saveNewSensorData(args.sensor_id, args.reading, args.datetime, args.sensor_type);

                    console.log('[Sensor service] Sensor Data', args);

                    socket.emit('newSensorReadingDone', {
                        id: id,
                        list: await this.getSensorReadingBySensorId(args.sensor_id)
                    });

                    console.log('[Sensor service] Done saving sensor data ' + id);
                };
            }
        } as ISocketEvent;
    }

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

    static async getSensorById(_id: string): Promise<ISensorSchema | null> {
        return await Sensor.findById(_id).exec();
    }

    static async getSensorIndex(): Promise<ISensorSchema[]> {
        return await Sensor.find({}).exec();
    }

    static async getSensorReadingBySensorId(sensorId: string): Promise<ISensorDataSchema[]> {
        return await SensorData.find({
            sensorId: sensorId
        }).exec();
    }
}
