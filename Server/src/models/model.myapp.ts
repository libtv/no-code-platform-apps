import { dataTypes, sequelize } from "./model.index";

export const myapp = sequelize.define(
  "myapp",
  {
    FORM_NAME: {
      type: dataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    TABLE_NAME: {
      type: dataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    FILED_NAME: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    KEY_NAME: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: false,
    tableName: "myapp",
  }
);
