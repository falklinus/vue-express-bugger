module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING
  });

  Project.associate = function(models) {
    Project.belongsTo(models.User);
  };
  return Project;
};
