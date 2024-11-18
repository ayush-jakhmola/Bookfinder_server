const { sequelize } = require("..");
const { DataTypes } = require("sequelize");

const Author = sequelize.define("Author", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  born_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = {
  Author,
};
