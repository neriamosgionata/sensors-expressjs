import {Schema} from 'mongoose';
import ISensorSchema from '../../schemas/ISensorSchema';

const SensorSchema = new Schema<ISensorSchema>({
    name: {type: String, required: true},
    ipAddress: {type: String, required: true},
    ipPort: {type: Number, required: true},
    type: {type: Number, required: true},
});

export default SensorSchema;

