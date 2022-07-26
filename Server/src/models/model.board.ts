import { dataTypes, sequelize } from "./model.index";

export const Board = sequelize.define(
    "board",
    {
        board_no: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        board_title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        board_content: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        board_regdate: {
            type: dataTypes.DATE,
        },
        user_id: {
            type: dataTypes.STRING,
        },
    },
    {
        timestamps: false,
        freezeTableName: false,
        tableName: "BOARD",
    }
);
