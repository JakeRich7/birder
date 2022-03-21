'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sightings', [
      {
        user_id: 2,
        bird_id: 1,
        address: 'montreal canada',
        details: 'Saw this bird while up in Canada'
      },
      {
        user_id: 2,
        bird_id: 2,
        address: 'south africa',
        details: 'Decided I just had to see a couple of these, so took a quick trip down to South Africa'
      },
      {
        user_id: 3,
        bird_id: 3,
        address: 'American Fork, Utah',
        details: 'Saw this big guy about 1000ft west of the freeway'
      },
      {
        user_id: 1,
        bird_id: 3,
        address: 'Springville Utah',
        details: 'Red-tail hawks are such beautiful birds'
      },
      {
        user_id: 3,
        bird_id: 5,
        address: 'utah lake',
        details: 'Found a bunch of these paddling around Utah Lake'
      },
      {
        user_id: 1,
        bird_id: 5,
        address: 'Payson, Utah',
        details: 'Found a couple of these swimming in Payson lakes'
      },
      {
        user_id: 3,
        bird_id: 6,
        address: 'evergreen colorado',
        details: 'Love these little guys! They live in a tree in my backyard'
      },
      {
        user_id: 4,
        bird_id: 6,
        address: 'buena vista, colorado',
        details: 'I love Norther Harriers!'
      },
      {
        user_id: 2,
        bird_id: 7,
        address: 'Provo canyon, utah',
        details: 'Mountain bluebirds are so, so beautiful'
      },
      {
        user_id: 2,
        bird_id: 8,
        address: 'St. George Utah',
        details: 'This bird flew over me at night. Saw its shadow pass over me'
      },
      {
        user_id: 1,
        bird_id: 8,
        address: 'Price, Utah',
        details: 'I would really like a pet owl...'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sightings', null, {});
  }
};
