module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });

  /* User.associate = function(models) {
    User.hasMany(models.Project, { as: 'sharedProjects' });
  }; */
  return User;
};
