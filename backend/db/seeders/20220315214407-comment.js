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
        body: 'Nice job'
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
      },
      {
        user_id: 4,
        sighting_id: 4,
        body: 'Oh wow, such a pretty bird'
      },
      {
        user_id: 3,
        sighting_id: 4,
        body: 'Very nice'
      },
      {
        user_id: 1,
        sighting_id: 4,
        body: 'Shucks, thanks guys'
      },
      {
        user_id: 1,
        sighting_id: 6,
        body: 'Feeling blessed'
      },
      {
        user_id: 2,
        sighting_id: 11,
        body: 'I could fall asleep to this bird any day or night'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
