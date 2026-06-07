'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        author_name: 'ivoxis',
        photo_name: 'Abstrato',
        image_file: '/images/abstrato.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author_name: 'pen_ash',
        photo_name: 'Pelicano',
        image_file: '/images/pelicano.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author_name: 'lisellefae',
        photo_name: 'Camaleão',
        image_file: '/images/camaleao.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author_name: 'Javali',
        photo_name: 'Vulcão',
        image_file: '/images/vulcao.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author_name: 'Haykanush',
        photo_name: 'Janela',
        image_file: '/images/janelanoite.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  author_name: 'OlcayErtem',
        photo_name: 'Pulo',
        image_file: '/images/pulo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
