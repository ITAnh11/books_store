'use strict';
const {
  Model
} = require('sequelize');
module.exports =  (sequelize, DataTypes) => {
  class BookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Book);
      this.belongsTo(models.Author);
    }
  }
  BookAuthor.init({
  }, {
    sequelize,
    modelName: 'BookAuthor',
    tableName: 'BookAuthors',
    timestamps: false,
  });
  return BookAuthor;
};