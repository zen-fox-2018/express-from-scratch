'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};