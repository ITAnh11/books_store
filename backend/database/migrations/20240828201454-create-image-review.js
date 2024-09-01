'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ImageReviews', {
      reviewId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reviews',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      url: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ImageReviews');
  }
};