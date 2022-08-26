const { Category } = require('../database/models');

const categoriesService = {
  createCategory: async ({ name }) => {
    console.log('serviceeeeeeee', name);
    const createCategory = await Category.create(name);
    return createCategory;
  },
  findAll: async () => {
    const allCategories = await Category.findAll();
    console.log('serviceeessss', allCategories);
    return allCategories;
  },
};

module.exports = categoriesService; 