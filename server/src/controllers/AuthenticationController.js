const { User } = require('../models');

module.exports = {
  register(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(() =>
        res.status(400).send({
          general: 'This email account is already in use.'
        })
      );
  }
};
