const { Project } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const userId = req.user.id;
      const projects = await Project.findAll({
        where: {
          UserId: userId
        }
        /* ,
          limit: 10 */
      });
      res.send(projects);
    } catch (err) {
      res.status(500).send({
        general: 'An error has occured trying to fetch the projects'
      });
    }
  },
  async getOne(req, res) {
    try {
      const { projectId } = req.params;
      const project = await Project.findByPk(projectId);
      res.send(project);
    } catch (err) {
      res.status(500).send({
        general: 'An error has occured trying to fetch the project'
      });
    }
  },
  async postOne(req, res) {
    try {
      const project = await Project.create(req.body);
      res.send(project);
    } catch (err) {
      res.status(500).send({
        general: 'An error has occured trying to create the project'
      });
    }
  }
};
