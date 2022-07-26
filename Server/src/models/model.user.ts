import { dataTypes, sequelize } from "./model.index";

export const Users = sequelize.define(
    "user",
    {
        user_id: {
            type: dataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        user_pw: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        user_email: {
            type: dataTypes.STRING,
        },
        user_regdate: {
            type: dataTypes.DATE,
        },
    },
    {
        timestamps: false,
        freezeTableName: false,
        tableName: "USERS",
    }
);
