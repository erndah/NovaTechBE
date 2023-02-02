import { Sequelize } from "sequelize";
import db from "../config/index.js"

const { DataTypes } = Sequelize;

const Kategoris = db.define(
  "kategoris",
  {
    nama: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  },
);

export default Kategoris;