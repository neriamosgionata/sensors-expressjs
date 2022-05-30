import {model} from 'mongoose';
import ModelEnum from '../../../enums/ModelEnum';
import PermissionSchema from './PermissionSchema';
import IPermissionSchema from '../../schemas/IPermissionSchema';

const Permission = model<IPermissionSchema>(ModelEnum.PERMISSION, PermissionSchema);

export default Permission;

