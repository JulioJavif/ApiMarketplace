'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    image: DataTypes.STRING,
    bills_products_idbills_products: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};