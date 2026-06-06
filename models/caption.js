'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Caption.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      Caption.belongsTo(models.Photo, {
        foreignKey: 'imageId',
        as: 'image'
      });
    }
  }
  Caption.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Caption',
    underscored: true
  });
  return Caption;
};