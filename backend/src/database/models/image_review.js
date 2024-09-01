'use strict';
const {
  Model
} = require('sequelize');
module.exports =  (sequelize, DataTypes) => {
  class ImageReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Review);
    }
  }
  ImageReview.init({
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ImageReview',
    tableName: 'ImageReviews',
    timestamps: false,
  });
  return ImageReview;
};