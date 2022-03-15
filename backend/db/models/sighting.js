'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sighting = sequelize.define('Sighting', {
    user_id: DataTypes.INTEGER,
    bird_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    details: DataTypes.TEXT
  }, {});
  Sighting.associate = function(models) {
    // associations can be defined here
  };
  return Sighting;
};
