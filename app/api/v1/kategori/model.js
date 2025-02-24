const { DataTypes } = require("sequelize");
const sequelize = require("../../../utils/db.config.js");

const Kategori = sequelize.define(
  "kategori",
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

module.exports = Kategori;