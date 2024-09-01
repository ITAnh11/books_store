'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookStocks', {
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Books',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookStocks');
  }
};