import dotenv from "dotenv";

dotenv.config();

export const DB_MAME = process.env.DB_NAME
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_DIALECT = process.env.DB_DIALECT

export const PORT = 3000