const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const { JWT_SECRET } = process.env;

const userControllers = {
  createUser: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const token = jwt.sign({ email }, JWT_SECRET, {
      expiresIn: '1d',
    });
    await userService.createUser({ displayName, email, password, image });
    return res.status(201).json({ token });
  },
};

module.exports = userControllers;