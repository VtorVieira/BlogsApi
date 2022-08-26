const { Router } = require('express');

const userControllers = require('../controllers/userControllers');
const validate = require('../middlewares/validate');

const userRouter = Router();

userRouter.post('/',
  validate.validateDisplayName,
  validate.validateEmail,
  validate.validatePassword,
  userControllers.createUser);

userRouter.get('/',
  validate.validateToken,
  userControllers.findAll);
module.exports = userRouter;