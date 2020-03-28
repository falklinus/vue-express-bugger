const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async register(req, res) {
    const { email, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(8);
      const hash = await bcrypt.hash(password, salt, null);
      const user = await User.create({ email, password: hash });
      res.json({ user: user, token: jwtSignUser(user.toJSON()) });
    } catch (err) {
      res.status(400).send({
        general: 'This email account is already in use.'
      });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        return res.status(403).send({
          general: 'The login information was incorrect'
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(403).send({
          valid: isPasswordValid,
          general: 'The login information was incorrect'
        });
      }
      res.json({ user: user, token: jwtSignUser(user.toJSON()) });
    } catch (err) {
      res.status(403).send({
        general: 'An error has occured trying to log in'
      });
    }
  },
  async getAuthUser(req, res) {
    try {
      res.send(req.user);
    } catch (err) {
      res.status(500).send({
        general: 'Something went wrong trying to fetch user data'
      });
    }
  }
};
