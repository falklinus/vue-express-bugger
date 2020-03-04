const isEmail = email => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

const isEmpty = string => {
  if (string.trim() === '') return true;
  else return false;
};

const isValidPassword = password => {
  const passwordRegEx = /^[a-zA-Z0-9]{8,32}$/;
  if (password.match(passwordRegEx)) return true;
  else return false;
};

module.exports = {
  register(req, res, next) {
    const { email, password, confirmPassword } = req.body;
    let errors = {};

    if (isEmpty(email)) {
      errors.email = 'Must not be empty';
    } else if (!isEmail(email)) {
      errors.email = 'Must be a valid email address';
    }

    if (isEmpty(password)) {
      errors.password = 'Must not be empty';
    } else if (!isValidPassword(password)) {
      errors.password =
        'Must be of length 8-32 and only contain letters and numerics';
    }

    if (password !== confirmPassword)
      errors.confirmPassword = 'Must match password';

    if (Object.keys(errors).length !== 0) {
      res.status(400).send(errors);
    } else {
      next();
    }
  }
};
