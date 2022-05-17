import {model} from 'mongoose';
import ISensorDataSchema from '../../schemas/ISensorDataSchema';
import ModelEnum from '../../../enums/ModelEnum';
import SensorDataSchema from './SensorDataSchema';

const SensorData = model<ISensorDataSchema>(ModelEnum.SENSOR_DATA, SensorDataSchema);

export default SensorData;

