import Kategoris from "./kategorisModel.js";
import Products from "./stocksModel.js";
import Stocks from "./stocksModel.js";

Kategoris.hasMany(Products);
Products.belongsTo(Kategoris);

Products.hasMany(Stocks);
Stocks.belongsTo(Products);

