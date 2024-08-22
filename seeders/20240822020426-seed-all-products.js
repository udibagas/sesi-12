"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../data/products.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Products", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
  },
};
