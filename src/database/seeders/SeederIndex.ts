import RoleSeeder from "./RoleSeeder";
import UserSeeder from "./UserSeeder";
import SensorsSeeder from "./SensorsSeeder";

const SeederIndex = [
    new RoleSeeder(),
    new UserSeeder(),
    new SensorsSeeder()
];

export default SeederIndex
