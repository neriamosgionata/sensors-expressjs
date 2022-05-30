import User from "../database/models/User/User";
import IUserSchema from "../database/schemas/IUserSchema";
import FilterService from "../services/FilterService";
import {Request} from "express";

export default class UsersRepository {
    static async deleteUser(_id: string): Promise<IUserSchema | null> {
        return await User.findByIdAndDelete(_id).exec();
    }

    static async getUserById(_id: string): Promise<IUserSchema | null> {
        return await User.findById(_id).exec();
    }

    static async getUsersIndex(req: Request): Promise<IUserSchema[]> {
        return await FilterService.createQueryFromRequestFilters<IUserSchema[], IUserSchema>(req, User.find()).exec();
    }
}
