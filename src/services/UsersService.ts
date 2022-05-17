import {Document, Types} from 'mongoose';
import User from "../database/models/User/User";
import IUserSchema from "../database/schemas/IUserSchema";

export default class UsersService {
    static async deleteUser(_id: string): Promise<(Document<unknown, any, IUserSchema> & IUserSchema & { _id: Types.ObjectId }) | null> {
        return await User.findByIdAndDelete(_id).exec();
    }

    static async getUserById(_id: string): Promise<(Document<unknown, any, IUserSchema> & IUserSchema & { _id: Types.ObjectId }) | null> {
        return await User.findById(_id).exec();
    }

    static async getUsersIndex(): Promise<((Document<unknown, any, IUserSchema> & IUserSchema & { _id: Types.ObjectId }) | null)[]> {
        return await User.find({}).exec();
    }
}
