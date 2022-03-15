'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bird = sequelize.define('Bird', {
    common_name: DataTypes.STRING,
    scientific_name: DataTypes.STRING,
    family: DataTypes.STRING,
    description: DataTypes.TEXT,
    sounds: DataTypes.STRING,
    image: DataTypes.STRING,
    range: DataTypes.STRING,
    conservation_status: DataTypes.STRING
  }, {});
  Bird.associate = function(models) {
    Bird.hasMany(models.Sighting, {foreignKey: 'bird_id'});
  };
  return Bird;
};
