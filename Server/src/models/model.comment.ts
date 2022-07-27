import { dataTypes, sequelize } from "./model.index";

export const Comment = sequelize.define(
    "comment",
    {
        comment_no: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        comment_parent: {
            type: dataTypes.INTEGER,
            defaultValue: null,
        },
        comment_content: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        comment_regdate: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        comment_status: {
            type: dataTypes.STRING,
            defaultValue: "Y",
        },
        board_no: {
            type: dataTypes.INTEGER,
            references: {
                model: "board",
                key: "board_no",
            },
            onDelete: "cascade",
            allowNull: false,
        },
        user_id: {
            type: dataTypes.STRING,
            references: {
                model: "users",
                key: "user_id",
            },
            onDelete: "cascade",
            allowNull: false,
        },
    },
    {
        timestamps: false,
        freezeTableName: false,
        tableName: "COMMENT",
    }
);
