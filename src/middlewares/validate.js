const jwt = require('jsonwebtoken');
const CustomError = require('../../errors/CustomError');

const { JWT_SECRET } = process.env;

const validade = {
  validateToken: (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomError(401, 'notFound', 'Token not found');
    } else {
      const token = jwt.verify(authorization, JWT_SECRET);
      if (!token) throw new CustomError(401, 'expired', 'Expired or invalid token');
    }
    next();
  },

  validateDisplayName: (req, _res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      throw new CustomError(
        400,
        'length',
        '"displayName" length must be at least 8 characters long',
        );
    }
    next();
  },

  validateEmail: (req, _res, next) => {
    const { email } = req.body;
    const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    if (!emailFormat.test(email)) {
      throw new CustomError(
        400,
        'invalid',
        '"email" must be a valid email',
        );
    }
    next();
  },

  validatePassword: (req, _res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
      throw new CustomError(
        400,
        'length',
        '"password" length must be at least 6 characters long',
        );
    }
    next();
  },

  validateLogin: (req, _res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new CustomError(400, 'missing', 'Some required fields are missing');
    }
    next();
  },
};

module.exports = validade;