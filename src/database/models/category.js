module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      timestamps: false,
    });

  Category.associate = (models) => {
    Category.hasMany(models.blogPost, { foreignKey: 'id', as: 'blogPost' });
  };
  return Category;
};