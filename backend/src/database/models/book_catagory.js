'use strict';
const {
  Model
} = require('sequelize');
module.exports =  (sequelize, DataTypes) => {
  class BookCatagory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Book);
      this.belongsTo(models.Catagory);
    }
  }
  BookCatagory.init({
  }, {
    sequelize,
    modelName: 'BookCatagory',
    tableName: 'BookCatagories',
    timestamps: false,
  });
  return BookCatagory;
};