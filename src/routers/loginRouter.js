const { Router } = require('express');

const loginControllers = require('../controllers/loginControllers');
const validate = require('../middlewares/validate');

const loginRouter = Router();

loginRouter.post('/', validate.validateLogin, loginControllers.getToken);

module.exports = loginRouter;