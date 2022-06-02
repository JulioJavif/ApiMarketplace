'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pqrs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pqrs.init({
    users_idusuarios: DataTypes.INTEGER,
    type: DataTypes.STRING,
    subject: DataTypes.STRING,
    compose_email: DataTypes.STRING,
    response: DataTypes.STRING,
    isanswered: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pqrs',
  });
  return pqrs;
};