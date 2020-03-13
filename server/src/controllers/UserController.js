const { Project } = require('../models');

module.exports = {
  async getProjects(req, res) {
    try {
      const { userId } = req.params;
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
  }
};
