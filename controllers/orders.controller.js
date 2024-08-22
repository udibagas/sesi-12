const NotFoundError = require("../errors/NotFoundError");
const { Order, User, Product } = require("../models");

exports.index = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: ["product", "customer"],
    });
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (!order) throw new NotFoundError();
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (!order) throw new NotFoundError();
    await order.update(req.body);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id);
    if (!order) throw new NotFoundError();
    await order.destroy();
    res.status(200).json({ message: "Order has been deleted" });
  } catch (error) {
    next(error);
  }
};
