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
  findAll: async (_req, res) => {
    const allUsers = await userService.findAll();
    return res.status(200).json(allUsers);
  },
};

module.exports = userControllers;