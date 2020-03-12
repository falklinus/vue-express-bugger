module.exports = (sequelize, DataTypes) => {
  const Bug = sequelize.define('Bug', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Bug.associate = function(models) {
    Bug.belongsTo(models.User);
  };
  return Bug;
};
