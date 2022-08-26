const { User } = require('../database/models');
const CustomError = require('../../errors/CustomError');

const loginService = {
  checkEmail: async ({ email }) => {
    const userEmail = await User.findOne({ where: { email } });
    if (!userEmail) throw new CustomError(400, 'invalid', 'Invalid fields');
    return userEmail;
  },
};

module.exports = loginService; 