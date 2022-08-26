const CustomError = require('../../errors/CustomError');
const { User } = require('../database/models');

const userService = {
  createUser: async ({ displayName, email, password, image }) => {
    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) throw new CustomError(409, 'alreadyRegistered', 'User already registered');
    const createUser = await User.create({ displayName, email, password, image });
    return createUser;
  },
};

module.exports = userService; 