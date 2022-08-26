const { Category } = require('../database/models');

const categoriesService = {
  createCategory: async ({ name }) => {
    const createCategory = await Category.create({ name });
    return createCategory;
  },
  findAll: async () => {
    const allCategories = await Category.findAll();
    return allCategories;
  },
};

module.exports = categoriesService; 