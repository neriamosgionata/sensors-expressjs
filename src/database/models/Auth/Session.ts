import {model} from 'mongoose';
import ModelEnum from '../../../enums/ModelEnum';
import SessionSchema from './SessionSchema';
import ISessionSchema from '../../schemas/ISessionSchema';

const Session = model<ISessionSchema>(ModelEnum.SESSION, SessionSchema);

export default Session;

