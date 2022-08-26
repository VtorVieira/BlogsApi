const { NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: NOW(),
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: NOW(),
    }
  },
    {
      timestamps: false,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};