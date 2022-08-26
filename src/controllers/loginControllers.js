require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const loginControllers = {
  getToken: async (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email }, JWT_SECRET, {
      expiresIn: '1d',
    });
    await loginService.checkEmail({ email });
    return res.status(200).json({ token });
  },
};

module.exports = loginControllers;