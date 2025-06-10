const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pet = sequelize.define('Pet', {
  name: DataTypes.STRING,
  species: DataTypes.STRING,
  age: DataTypes.INTEGER,
  healthStatus: DataTypes.STRING,
});

module.exports = Pet;
