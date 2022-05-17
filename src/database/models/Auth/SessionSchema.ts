import {Schema} from 'mongoose';
import ISessionSchema from '../../schemas/ISessionSchema';

const SessionSchema = new Schema<ISessionSchema>({
    userId: {type: String, required: true},
    token: {type: String, required: true},
});

export default SessionSchema;

