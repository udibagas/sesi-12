"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // models = { Order, Product, User }
      Order.belongsTo(models.Product, {
        as: "product",
        foreignKey: "ProductId",
      });

      Order.belongsTo(models.User, {
        foreignKey: "CustomerId",
        as: "customer",
      });
    }
  }

  Order.init(
    {
      date: DataTypes.DATE,
      CustomerId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      totalAmount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
