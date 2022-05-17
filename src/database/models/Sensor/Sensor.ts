import {model} from 'mongoose';
import ISensorSchema from '../../schemas/ISensorSchema';
import ModelEnum from '../../../enums/ModelEnum';
import SensorSchema from './SensorSchema';

const Sensor = model<ISensorSchema>(ModelEnum.SENSOR, SensorSchema);

export default Sensor;

