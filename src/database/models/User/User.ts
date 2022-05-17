import {model} from 'mongoose';
import ModelEnum from '../../../enums/ModelEnum';
import UserSchema from './UserSchema';
import IUserSchema from '../../schemas/IUserSchema';

const User = model<IUserSchema>(ModelEnum.USER, UserSchema);

export default User;

