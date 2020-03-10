module.exports = (sequelize, DataTypes) =>
  sequelize.define('Bug', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
    //ownerId: DataTypes.INTEGER
  });
