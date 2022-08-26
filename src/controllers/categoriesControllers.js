const categoriesService = require('../services/categoriesService');

const categoriesControllers = {
  createCategory: async (req, res) => {
    const { name } = req.body;
    console.log('controllersssssss', name);
    const categoryCreated = await categoriesService.createCategory({ name });
    return res.status(201).json({ categoryCreated });
  },
  findAll: async (_req, res) => {
    const allCategories = await categoriesService.findAll();
    // console.log('controllersssssss', allCategories);
    return res.status(200).json(allCategories);
  },
};

module.exports = categoriesControllers;