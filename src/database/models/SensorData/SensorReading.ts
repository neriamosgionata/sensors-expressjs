import {model} from 'mongoose';
import ISensorDataSchema from '../../schemas/ISensorReadingSchema';
import ModelEnum from '../../../enums/ModelEnum';
import SensorReadingSchema from './SensorReadingSchema';

const SensorReading = model<ISensorDataSchema>(ModelEnum.SENSOR_READING, SensorReadingSchema);

export default SensorReading;