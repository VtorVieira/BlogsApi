const { Router } = require('express');

const loginControllers = require('../controllers/loginControllers');
const { validateLogin } = require('../middlewares/loginError');

const loginRouter = Router();

loginRouter.post('/', validateLogin, loginControllers.getToken);

module.exports = loginRouter;