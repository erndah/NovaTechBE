import Stocks from "../models/stocksModel.js";

export const getStocks = async (req, res) => {
  try {
    const stocks = await Stocks.findAll();
    res.send(stocks);
  } catch (err) {
    console.log(err);
  }
};

export const getStocksById = async (req, res) => {
  try {
    const stocks = await Stocks.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(stocks[0]);
  } catch (err) {
    console.log(err);
  }
};

export const createStocks = async (req, res) => {
  try {
    await Stocks.create(req.body);
    res.json({
      message: "Tag Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateStocks = async (req, res) => {
  try {
    await Stocks.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Stocks Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteStocks = async (req, res) => {
  try {
    await Stocks.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Stocks Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
