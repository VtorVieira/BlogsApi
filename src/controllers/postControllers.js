const jwt = require('jsonwebtoken');
const postService = require('../services/postService');

const postControllers = {
  createBlogPost: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const token = req.headers;
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const blogPostCreated = await postService.createBlogPost(
      { 
        title, content, categoryIds, email,
      },
    );
    return res.status(201).json(blogPostCreated);
  },
  findAllBlogPost: async (_req, res) => {
    const listAllBlogPost = await postService.findAllBlogPost();
    return res.status(200).json(listAllBlogPost);
  },
  findOneBlogPost: async (req, res) => {
    const { id } = req.params;
    const listOneBlogPost = await postService.findOneBlogPost(id);
    return res.status(200).json(listOneBlogPost);
  },
};

module.exports = postControllers;