"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const product_entities_1 = require("./entities/product.entities");
const user_entities_1 = require("./entities/user.entities");
const userType_entities_1 = require("./entities/userType.entities");
// const connection = await createConnection({
// })
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.LOCALHOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [
        user_entities_1.User,
        userType_entities_1.UserType,
        product_entities_1.Product
    ],
    subscribers: [],
    migrations: [],
});
