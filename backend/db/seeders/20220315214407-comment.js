'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        user_id: 3,
        sighting_id: 1,
        body: 'Wow, so jelly rn'
      },
      {
        user_id: 3,
        sighting_id: 2,
        body: 'I NEED a pet hummingbird pls'
      },
      {
        user_id: 4,
        sighting_id: 2,
        body: 'Love these little guys. Have a bird feeder in my backyard and see them all the time'
      },
      {
        user_id: 1,
        sighting_id: 3,
        body: 'Owls are so majestic'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
