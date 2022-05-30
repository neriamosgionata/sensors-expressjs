import {Schema} from 'mongoose';
import ISensorDataSchema from "../../schemas/ISensorDataSchema";

const SensorDataSchema = new Schema<ISensorDataSchema>(
    {
        sensorId: {type: String, required: true},
        reading: {type: String, required: true},
        datetime: {type: Number, required: true},
        sensorType: {type: Number, required: true},
    },
    {
        timestamps: true
    }
);

export default SensorDataSchema;

