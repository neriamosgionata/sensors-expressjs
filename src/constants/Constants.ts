import dotenv from 'dotenv';

dotenv.config();

const Constants = {
    APP_HOST: `${process.env.APP_HOST}`,
    APP_PORT: `${process.env.APP_PORT}`,
    APP_ENV: `${process.env.APP_ENV}`,

    DB_HOST: `${process.env.DB_HOST}`,
    DB_USER: `${process.env.DB_USER}`,
    DB_PORT: `${process.env.DB_PORT}`,
    DB_NAME: `${process.env.DB_NAME}`,
    DB_PASSWORD: `${process.env.DB_PASSWORD}`,

    PRIVATE_KEY_PATH: `${process.env.PRIVATE_KEY_PATH}`,
};

export default Constants;
