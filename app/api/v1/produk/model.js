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
    nama_produk: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    harga_awal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true, // Bisa null jika tidak ada harga diskon
    },
    harga_sekarang: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    text_gratis_ongkir: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    text_cod: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
module.exports = Produk;