import { Sequelize } from "sequelize";
import db from "../config/index.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "products",
  {
    tahun_keluaran: {
      type: DataTypes.STRING,
    },
    warna: {
      type: DataTypes.TEXT,
    },
    harga: {
        type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  },
);

export default Products;
