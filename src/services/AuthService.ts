import bcrypt from 'bcrypt';
import User from '../database/models/User/User';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import Session from '../database/models/Auth/Session';
import Constants from '../constants/Constants';
import {passwordStrength} from 'check-password-strength';

export default class AuthService {
    private static standardSalt = 10;

    public static async register(username: string, password: string): Promise<string> {
        if (!username || !password) {
            throw new Error('Bad request');
        }

        if (passwordStrength(password).value !== "Strong") {
            throw new Error('Password is not sufficiently strong');
        }

        const salt = await bcrypt.genSalt(this.standardSalt);
        const hashedPassword = bcrypt.hash(password, salt);

        const result = await User.find({
            username: username,
        }).exec();

        if (result.length === 0) {
            const user = await User.create({
                username: username,
                password: hashedPassword,
            });

            const privateKey = fs.readFileSync(Constants.PRIVATE_KEY_PATH);

            const token = jwt.sign({username: username}, privateKey);

            await Session.deleteMany({
                userId: user._id,
            }).exec();

            await Session.create({
                userId: user._id,
                token: token,
            });

            return token;
        }

        throw new Error('Username already present');
    }

    public static async login(username: string, password: string): Promise<string> {
        if (!username || !password) {
            throw new Error('Bad request');
        }

        const salt = await bcrypt.genSalt(this.standardSalt);
        const hashedPassword = bcrypt.hash(password, salt);

        const users = await (User.find({
            username: username,
            password: hashedPassword,
        })
            .exec());

        if (users.length === 1) {
            const privateKey = fs.readFileSync(Constants.PRIVATE_KEY_PATH);

            const token = jwt.sign({username: username}, privateKey);

            await Session.deleteMany({
                userId: users[0]._id,
            }).exec();

            await Session.create({
                userId: users[0]._id,
                token: token,
            });

            return token;
        }

        throw new Error('Username already present');
    }

    public static async getUserFromToken(token?: string) {
        if (!token) {
            throw new Error('Token is not present');
        }

        const auth = await Session.findOne({
            token: token,
        }).exec();

        if (auth) {
            return await User.findById(auth.userId).exec();
        }

        throw new Error('User is not logged in');
    }
}
