import { DataSource } from "typeorm";

import { createConnection,Connection } from "typeorm";
import { Product } from "./entities/product.entities";
import { User } from "./entities/user.entities";
import { UserType } from "./entities/userType.entities";

// const connection = await createConnection({

// })
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.LOCALHOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [
        User,
        UserType,
        Product    
    ],
    subscribers: [],
    migrations: [],
})