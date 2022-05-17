import IRoleSchema from "../database/schemas/IRoleSchema";
import {ObjectId} from "mongoose";
import UserRole from "../database/models/UserRole/UserRole";
import IUserSchema from "../database/schemas/IUserSchema";
import User from "../database/models/User/User";
import Role from "../database/models/Role/Role";

export default class RolePermissionService {
    static async syncRoles(user: { _id: ObjectId } | IUserSchema, ...roles: IRoleSchema[] | { _id: ObjectId }[]) {
        let userModel: any;

        if ("username" in user) {
            userModel = await User.findOne({username: user.username}).exec();
        } else {
            userModel = {_id: user._id};
        }

        await UserRole.find({userId: userModel._id}).deleteMany();

        for (const role of roles) {
            let roleModel: any = null;

            if ("name" in role) {
                roleModel = await Role.findOne({username: role.name}).exec();
            } else {
                roleModel = {_id: role._id};
            }

            await UserRole.create({
                userId: userModel._id,
                roleId: roleModel._id
            });
        }
    }
}
