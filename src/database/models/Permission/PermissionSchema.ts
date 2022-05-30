import {Schema} from 'mongoose';
import IRoleSchema from "../../schemas/IRoleSchema";

const PermissionSchema = new Schema<IRoleSchema>(
    {
        name: {type: String, required: true, unique: true},
    },
    {
        timestamps: true
    }
);

export default PermissionSchema;

