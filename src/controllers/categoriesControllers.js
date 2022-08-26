const categoriesService = require('../services/categoriesService');

const categoriesControllers = {
  createCategory: async (req, res) => {
    const { name } = req.body;
    const categoryCreated = await categoriesService.createCategory({ name });
    return res.status(201).json(categoryCreated);
  },
  findAll: async (_req, res) => {
    const allCategories = await categoriesService.findAll();
    return res.status(200).json(allCategories);
  },
};

module.exports = categoriesControllers;