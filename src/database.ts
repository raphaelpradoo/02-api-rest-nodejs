import knex from 'knex'
import { env } from "./env/index.js"

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL env not found")
}

export const config = {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
        extension: "ts",
        directory: "./db/migrations"
    },
}

export const db = knex(config)