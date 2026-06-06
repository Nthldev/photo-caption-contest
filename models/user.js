'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Caption, {
        foreignKey: 'userId', // Foreign key in the captions table
        as: 'captions'
      });
    }
  }
  User.init({
    nome: DataTypes.STRING(100),
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    hashPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};