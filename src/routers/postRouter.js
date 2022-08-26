const { Router } = require('express');

const postControllers = require('../controllers/postControllers');
const validate = require('../middlewares/validate');

const postRouter = Router();

postRouter.post('/', validate.validateToken, validate.validatePost, postControllers.createBlogPost);
postRouter.get('/', validate.validateToken, postControllers.findAllBlogPost);

module.exports = postRouter;