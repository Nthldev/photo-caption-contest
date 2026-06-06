'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        authorName: 'ivoxis',
        photoName: 'Abstrato',
        imageFile: '/images/abstrato.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        authorName: 'pen_ash',
        photoName: 'Pelicano',
        imageFile: '/images/pelicano.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        authorName: 'lisellefae',
        photoName: 'Camaleão',
        imageFile: '/images/camaleao.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        authorName: 'Javali',
        photoName: 'Vulcão',
        imageFile: '/images/vulcao.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        authorName: 'Haykanush',
        photoName: 'Janela',
        imageFile: '/images/janelanoite.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  authorName: 'OlcayErtem',
        photoName: 'Pulo',
        imageFile: '/images/pulo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
