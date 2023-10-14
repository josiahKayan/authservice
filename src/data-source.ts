import "reflect-metadata"
import { DataSource } from "typeorm"
import { Auth } from "./entity/Auth"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Auth],
    migrations: ['src/migrations/*{.ts,.js}'],
    subscribers: [],
})
