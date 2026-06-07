'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Photos', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Photos', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Captions', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Captions', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Users', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Users', 'updatedAt', 'updated_at');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Photos', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Photos', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('Captions', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Captions', 'updated_at', 'updatedAt');
    await queryInterface.renameColumn('Users', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Users', 'updated_at', 'updatedAt');
  }
};
