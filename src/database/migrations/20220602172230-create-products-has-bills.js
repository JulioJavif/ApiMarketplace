'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_has_bills', {
      products_idproducts: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bills_idbills: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products_has_bills');
  }
};