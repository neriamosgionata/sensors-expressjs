import {model} from 'mongoose';
import ModelEnum from '../../../enums/ModelEnum';
import RoleSchema from './RoleSchema';
import IRoleSchema from '../../schemas/IRoleSchema';

const Role = model<IRoleSchema>(ModelEnum.ROLE, RoleSchema);

export default Role;

