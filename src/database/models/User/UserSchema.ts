import {Schema} from 'mongoose';
import IUserSchema from '../../schemas/IUserSchema';

const UserSchema = new Schema<IUserSchema>(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true
    }
);

export default UserSchema;

