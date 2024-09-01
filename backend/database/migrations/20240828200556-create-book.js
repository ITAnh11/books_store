'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      urlPath: {
        type: Sequelize.STRING,
      },
      currentPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      originalPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      ratingAverage: {
        type: Sequelize.DECIMAL,
      },
      reviewCount: {
        type: Sequelize.INTEGER,
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
      },
      quantitySold: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};