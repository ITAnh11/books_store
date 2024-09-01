'use strict';
const {
  Model
} = require('sequelize');
module.exports =  (sequelize, DataTypes) => {
  class BookDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Book);
    }
  }
  BookDetail.init({
    description: DataTypes.TEXT,
    publisher: DataTypes.STRING,
    publicationDate: DataTypes.DATE,
    pageCount: DataTypes.INTEGER,
    coverType: DataTypes.STRING,
    size: DataTypes.STRING,
    languages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookDetail',
    tableName: 'BookDetails',
  });
  return BookDetail;
};