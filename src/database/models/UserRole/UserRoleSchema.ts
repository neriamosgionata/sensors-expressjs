import {Schema} from 'mongoose';
import IUserRoleSchema from '../../schemas/IUserRoleSchema';

const UserRoleSchema = new Schema<IUserRoleSchema>(
    {
        userId: {type: String, required: true},
        roleId: {type: String, required: true},
    },
    {
        timestamps: true
    }
);

export default UserRoleSchema;

