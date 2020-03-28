const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const BugsController = require('./controllers/BugsController');
const ProjectsController = require('./controllers/ProjectsController');
const isAuthenticated = require('./policies/isAuthenticated');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post('/login', AuthenticationController.login);

  app.get('/user', isAuthenticated, AuthenticationController.getAuthUser);

  app.get('/bugs', isAuthenticated, BugsController.getAll);
  app.post('/bugs', isAuthenticated, BugsController.postOne);

  app.get('/projects', isAuthenticated, ProjectsController.getUserProjects);
  app.get(
    '/projects/shared',
    isAuthenticated,
    ProjectsController.getSharedProjects
  );
  app.get('/projects/:projectId', isAuthenticated, ProjectsController.getOne);
  app.post('/projects', isAuthenticated, ProjectsController.postOne);
};
