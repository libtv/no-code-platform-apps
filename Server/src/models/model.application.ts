import { dataTypes, sequelize } from "./model.index";

export const application = sequelize.define(
  "application",
  {
    APP_UUID: {
      type: dataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    APP_NAME: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    APP_IMG: {
      type: dataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: false,
    tableName: "application",
  }
);
