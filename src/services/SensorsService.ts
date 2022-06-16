import ISocketEvent from "../http/socket/ISocketEvent";
import SensorsRepository from "../repositories/SensorsRepository";
import SensorsReadingRepository from "../repositories/SensorsReadingRepository";

export default class SensorsService {
    static registerNewSensorEvent() {
        return {
            name: 'newSensor',
            function: (socket) => {
                return async (args) => {
                    console.log('[Sensor service] Registering new sensor');

                    const id = await SensorsRepository.registerNewSensor(args.name, args.ip_address, args.ip_port, args.type);

                    console.log('[Sensor service] Data', args);

                    socket.emit('newSensorDone', {id: id});

                    console.log('[Sensor service] Done registering sensor ' + id);
                };
            },
        } as ISocketEvent;
    }

    static registerNewSensorReadingEvent() {
        return {
            name: 'newSensorReading',
            function: (socket) => {
                return async (args) => {
                    console.log('[Sensor service] Saving new sensor data');

                    const id = await SensorsRepository.saveNewSensorData(args.sensor_id, args.reading, args.datetime, args.sensor_type);

                    console.log('[Sensor service] Sensor Data', args);

                    socket.emit('newSensorReadingDone', {
                        id: id,
                        list: await SensorsReadingRepository.getSensorReadingBySensorId(args.sensor_id),
                    });

                    console.log('[Sensor service] Done saving sensor data ' + id);
                };
            },
        } as ISocketEvent;
    }
}