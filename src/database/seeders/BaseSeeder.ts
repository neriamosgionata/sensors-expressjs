export default abstract class BaseSeeder {
    constructor() {
    }

    async handle(): Promise<boolean> {
        return true
    }
}
