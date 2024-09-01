'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports =  {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookDetails', {
      bookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      description: {
        type: Sequelize.TEXT,
      },
      publisher: {
        type: Sequelize.STRING,
      },
      publicationDate: {
        type: Sequelize.DATE,
      },
      pageCount: {
        type: Sequelize.INTEGER,
      },
      coverType: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      languages: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BookDetails');
  }
};