import {Schema} from 'mongoose';
import IRoleSchema from "../../schemas/IRoleSchema";

const RoleSchema = new Schema<IRoleSchema>({
    name: {type: String, required: true},
});

export default RoleSchema;

