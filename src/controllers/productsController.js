import Products from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

export const getProductsById = async (req, res) => {
  try {
    const products = await Products.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(products[0]);
  } catch (err) {
    console.log(err);
  }
};

export const createProducts = async (req, res) => {
  try {
    await Products.create(req.body);
    res.json({
      message: "Products Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProducts = async (req, res) => {
  try {
    await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Products Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProducts = async (req, res) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Products Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
