const { DataTypes } = require("sequelize");
const sequelize = require("../../../utils/db.config.js");

const Profil = sequelize.define(
  "profil",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync();

module.exports = Profil;