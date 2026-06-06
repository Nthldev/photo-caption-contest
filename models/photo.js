'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Photo.hasMany(models.Caption, {
        foreignKey: 'imageId', // Foreign key in the captions table
        as: 'captions'
      });
    }
  }
  Photo.init({
    authorName: DataTypes.STRING,
    photoName: DataTypes.STRING,
    imageFile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Photo',
    underscored: true
  });
  return Photo;
};