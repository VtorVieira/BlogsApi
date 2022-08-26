const postService = require('../services/postService');

const postControllers = {
  createBlogPost: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const blogPostCreated = await postService.createBlogPost({ title, content, categoryIds });
    return res.status(201).json(blogPostCreated);
  },
  findAllBlogPost: async (_req, res) => {
    const listAllBlogPost = await postService.findAllBlogPost();
    return res.status(200).json(listAllBlogPost);
  },
};

module.exports = postControllers;