import { Sequelize } from "sequelize";
import db from "../config/index.js";

const { DataTypes } = Sequelize;

const Stocks = db.define(
  "stocks",
  {
    quantity: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

export default Stocks;