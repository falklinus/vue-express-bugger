module.exports = (sequelize, DataTypes) => {
  const Bug = sequelize.define('Bug', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Bug.associate = function(models) {
    Bug.belongsTo(models.User);
    Bug.belongsTo(models.Project);
  };
  return Bug;
};
