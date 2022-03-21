'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        user_id: 1,
        sighting_id: 1,
        body: 'Wow, so jelly rn'
      },
      {
        user_id: 1,
        sighting_id: 2,
        body: 'I NEED some parrots PLS'
      },
      {
        user_id: 4,
        sighting_id: 2,
        body: 'So cute!'
      },
      {
        user_id: 3,
        sighting_id: 2,
        body: 'Nice pic'
      },
      {
        user_id: 2,
        sighting_id: 2,
        body: 'Got lucky with this one haha. Thanks'
      },
      {
        user_id: 1,
        sighting_id: 3,
        body: 'Best bird call ever!'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
