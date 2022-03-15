'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'tweetybird55@gmail.com',
        username: 'tweetybird55',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        email: 'harrier@gmail.com',
        username: 'harrier65',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'bigbird@gmail.com',
        username: 'bigbird123',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'bluejake@gmail.com',
        username: 'bluejake7',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['tweetybird55', 'bluejake7', 'harrier65', 'bigbird123'] }
    }, {});
  }
};
