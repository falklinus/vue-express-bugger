const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const BugsController = require('./controllers/BugsController');
const ProjectsController = require('./controllers/ProjectsController');
const UserController = require('./controllers/UserController');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post('/login', AuthenticationController.login);

  app.get('/bugs', BugsController.getAll);
  app.post('/bugs', BugsController.postOne);

  app.get('/users/:userId/projects', UserController.getProjects);

  app.get('/projects/:projectId', ProjectsController.getOne);
  app.post('/projects', ProjectsController.postOne);
};
