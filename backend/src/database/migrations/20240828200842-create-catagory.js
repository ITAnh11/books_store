'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Catagories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      isLeaf: {
        type: Sequelize.BOOLEAN
      },
      parentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Catagories',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
        },
      },
      level: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Catagories');
  }
};