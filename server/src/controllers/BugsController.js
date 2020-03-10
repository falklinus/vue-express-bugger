const { Bug } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const bugs = await Bug.findAll({
        limit: 10
      });
      res.send(bugs);
    } catch (err) {
      res.status(500).send({
        general: 'An error has occured trying to fetch the bugs'
      });
    }
  },
  async post(req, res) {
    try {
      const bug = await Bug.create(req.body);
      res.send(bug);
    } catch (err) {
      res.status(500).send({
        general: 'An error has occured trying to create the bug'
      });
    }
  }
};
