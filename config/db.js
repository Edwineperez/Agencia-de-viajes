import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize('brf3sl5rdgxso6tf8ztk', 'utjupkhzp1gmaerq', 'kliZXPLZVpeX7hQrEJI3', {
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
    }
);

export default db;
