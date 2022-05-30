import {Schema} from 'mongoose';
import ISensorSchema from '../../schemas/ISensorSchema';

const SensorSchema = new Schema<ISensorSchema>(
    {
        name: {type: String, required: true, unique: true},
        ipAddress: {type: String, required: true, unique: true},
        ipPort: {type: Number, required: true},
        type: {type: Number, required: true},
    },
    {
        timestamps: true
    }
);

export default SensorSchema;

