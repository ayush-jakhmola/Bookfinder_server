const { sequelize } = require("..");
const { DataTypes } = require("sequelize");
const { Author } = require("./author.model");

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  published_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// relationship between Book and Author
Book.belongsTo(Author, { foreignKey: "author_id", as: "author" });
Author.hasMany(Book, { foreignKey: "author_id", as: "books" });

module.exports = {
  Book,
};
