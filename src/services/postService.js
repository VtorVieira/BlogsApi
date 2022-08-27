// const CustomError = require('../../errors/CustomError');
const { Op } = require('sequelize');
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

  findOneBlogPost: async (id) => {
    const oneBlogs = await BlogPost.findOne({ where: { id },
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
    if (!oneBlogs) {
      throw new CustomError(404, 'notFound', 'Post does not exist');
    }
    return oneBlogs;
  },

  findByNameBlogPost: async (q) => {
    if (q === '') {
      const all = await BlogPost.findAll({
        include: [ 
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      });
      return all;
    }
    const getByNameBlogs = await BlogPost.findAll({ where: {
      [Op.or]: [{ title: { [Op.like]: q } }, { content: { [Op.like]: q } }],
    },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return getByNameBlogs;
  },

  getId: async (email) => {
    console.log('gggggggggget', email);
    const id = await User.findOne({ where: { email } });
    return id;
  },

  createBlogPost: async ({ title, content, categoryIds, email }) => {
    console.log('to aqui!!!!!!!!!!!!!!!');
    const validation = await Promise.all(
      categoryIds.map((ids) => (Category.findByPk(ids))),
      );

    validation.forEach((category) => {
      if (!category) {
        throw new CustomError(400, 'notFound', '"categoryIds" not found');
      }
    });
  const userId = await BlogPost.getId(email);
  console.log('uuuuuuuuuuuuuuser', userId);
  const retorno = await BlogPost.bulkCreate([{ title, content, userId }]);
  // const allBlogs = await BlogPost.findByPk(retorno[0].dataValues.id);

  return retorno[0].dataValues;
  },
};

module.exports = postService; 