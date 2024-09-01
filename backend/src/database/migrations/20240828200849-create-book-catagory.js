'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookCatagories', {
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      },
      catagoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Catagories',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookCatagories');
  }
};