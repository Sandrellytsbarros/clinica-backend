'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('especialidades', [
      { nome: 'Ginecologia', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Urologia', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Ortopedia', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('pacientes', [
      { nome: 'Pedro Santos', email: 'pedrosantos@etic.pt', password: '123456', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Nuno Silva', email: 'nunosilva@hotmail.com', password: '123456', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Matilde Ferreira', email: 'matildeferreira@gmail.com', password: '123456', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Carlos Bruno', email: 'carlosbruno@gmail.com', password: '123456', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Miguel Rocha', email: 'miguelrocha@hotmail.com', password: '123456', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('admins', [
      { nome: 'Admin', email: 'admin@clinica.com', password: '123456', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('farmacos', [
      { nome: 'Paracetamol', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Albendazol', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Cefalexina', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Nimesulida', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Pimecrolimus', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Quetiapina', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Pirantel', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Topotecano', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Zuclopentixol ', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Xipamida', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('medicos', [
      { number: 111, nome: 'Maria Santos', email: 'mariasantos@hotmail.com', password: '123123', createdAt: new Date(), updatedAt: new Date(), especialidadeId: 1 },
      { number: 222, nome: 'Leonor Carvalho', email: 'leonorcarvalho@gmail.com', password: '123123', createdAt: new Date(), updatedAt: new Date(), especialidadeId: 1 },
      { number: 333, nome: 'Francisco Silva', email: 'franciscosilva@gmail.com', password: '123123', createdAt: new Date(), updatedAt: new Date(), especialidadeId: 2 },
      { number: 444, nome: 'Rodrigo Barros', email: 'rodrigobarros@etic.pt', password: '123123', createdAt: new Date(), updatedAt: new Date(), especialidadeId: 2 },
      { number: 555, nome: 'Ana Beatriz', email: 'anabeatriz@hotmail.com', password: '123123', createdAt: new Date(), updatedAt: new Date(), especialidadeId: 3 }
    ]);
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
