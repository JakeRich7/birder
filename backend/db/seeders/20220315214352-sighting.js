'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sightings', [
      {
        user_id: 1,
        bird_id: 1,
        address: 'Provo, Utah',
        details: 'Saw this bird just up the mouth of Provo Canyon'
      },
      {
        user_id: 1,
        bird_id: 2,
        address: 'Orem, Utah',
        details: 'Saw this bird in the middle of Orem after having just seen a Great Horned Owl! What luck!'
      },
      {
        user_id: 2,
        bird_id: 1,
        address: 'American Fork, Utah',
        details: 'Saw this big guy about 1000ft west of the freeway'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sightings', null, {});
  }
};
