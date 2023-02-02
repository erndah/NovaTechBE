import { Sequelize } from "sequelize";

const db = new Sequelize("Produk", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });
  
  export default db;
  