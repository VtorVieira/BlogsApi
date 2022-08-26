const { Router } = require('express');

const userControllers = require('../controllers/userControllers');
const validate = require('../middlewares/validate');

const userRouter = Router();

userRouter.post('/',
  // validate.validateToken,
  validate.validateDisplayName,
  validate.validateEmail,
  validate.validatePassword,
  userControllers.createUser);

module.exports = userRouter;