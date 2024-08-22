"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // npx sequelize db:migrate
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(50), // VARCHAR(50)
        allowNull: false, // NOT NULL
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true, // UNIQUE
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: "CHAR(1)",
        allowNull: false,
      },
      address: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: "customer",
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  // npx sequelize db:migrate:undo
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
