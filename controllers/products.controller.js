const NotFoundError = require("../errors/NotFoundError");
const { Product } = require("../models");

exports.index = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) throw new NotFoundError();
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  const { name, price, stock } = req.body;
  try {
    const product = await Product.create({ name, price, stock });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) throw new NotFoundError();
    await product.update({ name, price, stock });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) throw new NotFoundError();
    await product.destroy();
    res.status(200).json({ message: "Product has been deleted" });
  } catch (error) {
    next(error);
  }
};
