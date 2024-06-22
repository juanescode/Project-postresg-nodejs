import { Sequelize } from "sequelize";
import { DB_MAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } from "../config.js";

//Conexion con la base de datos
export const sequelize = new Sequelize(DB_MAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});
