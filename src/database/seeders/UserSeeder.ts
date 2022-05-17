import BaseSeeder from "./BaseSeeder";
import User from "../models/User/User";

export default class UserSeeder extends BaseSeeder {
    async handle(): Promise<boolean> {

        await User.create({
            username: 'amos',
            password: 'password'
        });

        return true;
    }
}
