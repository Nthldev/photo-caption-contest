'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      nome: 'admin teste',
      email: 'teste@teste.com',
      hash_password: '$2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/OBXm582h79H8vDdBg48MTGG6Fm',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
