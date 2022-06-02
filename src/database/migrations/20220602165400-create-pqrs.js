'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pqrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      users_idusuarios: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      compose_email :{
        type: Sequelize.STRING
      },
      response: {
        type: Sequelize.STRING
      },
      isanswered: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pqrs');
  }
};