import Constants from '../constants/Constants';
import mongoose, {Mongoose} from 'mongoose';
import SeederIndex from "../database/seeders/SeederIndex";
import ModelIndex from "../database/models/ModelIndex";

export default class MongoDBService {
    private dbConnection!: Mongoose;

    constructor() {
        this.connectClient();
    }

    getConnection() {
        return this.dbConnection;
    }

    private connectClient(): void {
        console.log('[MongoDB Service]: Configuring client for mongodb');
        const auth = Constants.DB_USER + ':' + Constants.DB_PASSWORD;
        const dbPath = Constants.DB_HOST + ':' + Constants.DB_PORT + '/' + Constants.DB_NAME;
        const url = 'mongodb://' + auth + '@' + dbPath + '?authMechanism=DEFAULT&authSource=admin';

        mongoose.connect(url)
            .then((db: typeof mongoose) => {
                console.log('[MongoDB Service]: Connected to MongoDB on ' + url);
                this.dbConnection = db;
            })
            .catch((err: any) => console.log('[MongoDB Service]: Error during connection to MongoDB', err));

        console.log('[MongoDB Service]: Done');
    }

    private static async clearDB() {
        for (const model of ModelIndex) {
            // @ts-ignore
            await model.deleteMany({}).exec();
        }
    }

    private static async seedDB() {
        for (const seeder of SeederIndex) {
            await seeder.handle();
        }
    }

    async migrateDB() {
        await MongoDBService.clearDB();
        await MongoDBService.seedDB()
    }
}
