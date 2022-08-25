module.exports = (sequelize, DataTypes) => {
  const PostCategorie = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
    },
  },
    {
      timestamps: false,
    });

  PostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategorie,
      as: 'category',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategorie,
      as: 'blogPost',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategorie;
};