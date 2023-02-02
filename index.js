import express from "express";
// import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./src/config/index.js";

import products from "./src/models/productsModel.js";
import stocks from "./src/models/stocksModel.js";
import kategoris from "./src/models/kategorisModel.js";

dotenv.config();

const app = express();

const port = 6000;

try {
    await db.authenticate();
    console.log("Database connected!");
    // await stocks.sync();
} catch (error) {
    console.error(error);
}
db.sync();
kategoris.sync();
products.sync();
stocks.sync();

app.use(express.json());
app.use(bodyParser.json());

app.listen(port, () => console.log('Server running at http://localhost:'+port));