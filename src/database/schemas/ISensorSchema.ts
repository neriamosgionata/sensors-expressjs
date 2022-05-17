import SensorTypeEnum from '../../enums/SensorTypeEnum';

interface ISensorSchema {
    name: string;
    ipAddress: string;
    ipPort: number;
    type: SensorTypeEnum;
}

export default ISensorSchema;
