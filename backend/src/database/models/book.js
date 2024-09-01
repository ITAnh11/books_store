'use strict';
const {
  Model
} = require('sequelize');
module.exports =  (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.BookDetail);
      this.hasOne(models.BookStock);
      this.hasOne(models.BookAuthor);

      this.hasMany(models.ImageBook);
      this.hasMany(models.BookCatagory);

      this.hasMany(models.CartItem);
      this.hasMany(models.OrderItem);

      this.hasMany(models.Review);
    }
  }
  Book.init({
    name: DataTypes.STRING,
    urlPath: DataTypes.STRING,
    currentPrice: DataTypes.DECIMAL(10, 2),
    originalPrice: DataTypes.DECIMAL(10, 2),
    ratingAverage: DataTypes.DECIMAL,
    reviewCount: DataTypes.INTEGER,
    thumbnailUrl: DataTypes.STRING,
    quantitySold: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    timestamps: true,
  });
  return Book;
};
