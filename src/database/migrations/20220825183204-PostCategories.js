'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        }
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
