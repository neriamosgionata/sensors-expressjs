import {Schema} from 'mongoose';
import ISessionSchema from '../../schemas/ISessionSchema';

const SessionSchema = new Schema<ISessionSchema>(
    {
        userId: {type: String, required: true, unique: true},
        token: {type: String, required: true, unique: true},
    },
    {
        timestamps: true
    }
);

export default SessionSchema;

