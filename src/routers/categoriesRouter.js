const { Router } = require('express');

const categoriesControllers = require('../controllers/categoriesControllers');
const validate = require('../middlewares/validate');

const categoryRouter = Router();

categoryRouter.post('/',
  validate.validateToken,
  validate.validateName,
  categoriesControllers.createCategory);

categoryRouter.get('/',
  validate.validateToken,
  categoriesControllers.findAll);

module.exports = categoryRouter;