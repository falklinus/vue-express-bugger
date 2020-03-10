const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const BugsController = require('./controllers/BugsController');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post('/login', AuthenticationController.login);

  app.get('/bugs', BugsController.index);
  app.post('/bugs', BugsController.post);
};
