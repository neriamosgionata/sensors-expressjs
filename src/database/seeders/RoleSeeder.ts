import RolesEnum from "../../enums/RolesEnum";
import Role from "../models/Role/Role";
import BaseSeeder from "./BaseSeeder";

export default class RoleSeeder extends BaseSeeder {

   async handle(): Promise<boolean> {
        for (const roleName of Object.values(RolesEnum)) {
            await Role.create({
                name: roleName,
            });
        }

        return true;
    }

}
