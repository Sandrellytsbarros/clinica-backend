'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('consulta_farmacos', {
      consultaId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'consultas'
          },
          key: 'id',
        },
        allowNull: false,
      },
      farmacoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'farmacos'
          },
          key: 'id',
        },
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
