const { Sequelize } = require("sequelize");
const config = require("../../../config");

const dbConfig = config.db.postgre;

const sequelize = new Sequelize({
  ...dbConfig,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: dbConfig.ssl, // Ensures SSL is used
    },
  },
});

async function initPostgre() {
  try {
    await sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log("Postgre connection has been established successfully !");
  } catch (error) {
    console.error("Unable to connect to postgre database:", error);
  }
}

module.exports = {
  sequelize,
  initPostgre,
};
