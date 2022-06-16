import {Schema} from 'mongoose';
import ISensorDataSchema from "../../schemas/ISensorReadingSchema";

const SensorReadingSchema = new Schema<ISensorDataSchema>(
    {
        sensorId: {type: String, required: true},
        readingId: {type: String, required: true},
        datetime: {type: Number, required: true},
        sensorType: {type: Number, required: true},
    },
    {
        timestamps: true,
    },
);

export default SensorReadingSchema;