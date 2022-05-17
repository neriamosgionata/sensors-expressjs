import {Schema} from 'mongoose';
import IUserSchema from '../../schemas/IUserSchema';

const UserSchema = new Schema<IUserSchema>({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

export default UserSchema;

