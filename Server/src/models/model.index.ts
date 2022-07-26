import { DB_SET_DATABASE, DB_SET_PASSWORD, DB_SET_NAME, DB_SET_DIALECT } from "./../const/const";
import {} from "../const/const";
import sl from "sequelize";

export const sequelize = new sl.Sequelize({
    username: DB_SET_NAME,
    password: DB_SET_PASSWORD,
    database: DB_SET_DATABASE,
    dialect: "mariadb",
});

export const dataTypes = sl.DataTypes;
