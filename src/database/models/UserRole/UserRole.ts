import {model} from 'mongoose';
import ModelEnum from '../../../enums/ModelEnum';
import UserRoleSchema from './UserRoleSchema';
import IUserRoleSchema from '../../schemas/IUserRoleSchema';

const UserRole = model<IUserRoleSchema>(ModelEnum.USER_ROLE, UserRoleSchema);

export default UserRole;

