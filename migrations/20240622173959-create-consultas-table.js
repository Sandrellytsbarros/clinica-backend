'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('consultas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      medicoNumber: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'medicos'
          },
          key: 'number',
        },
        allowNull: false,
      },
      pacienteId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'pacientes'
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
