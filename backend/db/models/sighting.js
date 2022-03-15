'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sighting = sequelize.define('Sighting', {
    user_id: DataTypes.INTEGER,
    bird_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    details: DataTypes.TEXT
  }, {});
  Sighting.associate = function(models) {
    Sighting.belongsTo(models.User, {foreignKey: 'user_id'});
    Sighting.belongsTo(models.Bird, {foreignKey: 'bird_id'});
    Sighting.hasMany(models.Comment, {foreignKey: 'sighting_id'});
  };
  return Sighting;
};
