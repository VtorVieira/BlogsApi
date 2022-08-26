// const CustomError = require('../../errors/CustomError');
const CustomError = require('../../errors/CustomError');
const { BlogPost, Category, User } = require('../database/models');

const postService = {
  findAllBlogPost: async () => {
    const allBlogs = await BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    return allBlogs;
  },

  // findAll: async () => {
  //   const allBlogs = await BlogPost.findAll();
  //   return allBlogs;
  // },

  createBlogPost: async ({ title, content, categoryIds }) => {
    console.log('Passo 1: recebendo', { title, content, categoryIds });

    const validation = await Promise.all(
      categoryIds.map((ids) => (Category.findByPk(ids))),
      );

    console.log('Passo 2: retorno do map', validation);

    validation.forEach((category) => {
      console.log('Passo 3: retorno do forEach', category);
      if (!category) {
        throw new CustomError(400, 'notFound', '"categoryIds" not found');
      }
    });
  const retorno = await BlogPost.bulkCreate([{ title, content }]);
  console.log('Passo 4: criando registo do BD', retorno);
  // const allBlogs = await BlogPost.findAll();
  // const allBlogs = await BlogPost.findByPk(retorno[0].dataValues.id);

  return retorno[0].dataValues;
  },
};

module.exports = postService; 