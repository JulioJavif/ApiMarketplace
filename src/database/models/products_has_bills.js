'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_has_bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products_has_bills.init({
    products_idproducts: DataTypes.INTEGER,
    bills_idbills: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_has_bills',
  });
  return products_has_bills;
};