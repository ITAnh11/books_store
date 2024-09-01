'use strict';
const {
  Model
} = require('sequelize');
module.exports =  (sequelize, DataTypes) => {
  class Catagory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Catagory, { foreignKey: 'parentId', as: 'parent' });
      this.hasMany(models.Catagory, { foreignKey: 'parentId', as: 'children' });
      this.hasMany(models.BookCatagory);
    }
  }
  Catagory.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    isLeaf: DataTypes.BOOLEAN,
    urlKey: DataTypes.STRING,
    description: DataTypes.STRING,
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Catagory',
    tableName: 'Catagories',
    timestamps: false,
  });
  return Catagory;
};