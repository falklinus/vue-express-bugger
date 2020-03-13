const { Project } = require('../models');

module.exports = {
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
