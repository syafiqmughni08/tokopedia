const { DataTypes } = require("sequelize");
const sequelize = require("../../../utils/db.config.js");

const Produk = sequelize.define("produk",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    foto_produk: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nama_produk: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    harga_awal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true, 
    },
    harga_sekarang: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    text_gratis_ongkir: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    text_cod: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync();
module.exports = Produk;