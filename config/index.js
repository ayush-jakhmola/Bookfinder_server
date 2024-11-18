const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  isProd: () => {
    return process.env.NODE_ENV === "production";
  },

  db: {
    postgre: {
      host: process.env.POSTGRE_HOST,
      username: process.env.POSTGRE_USER,
      password: process.env.POSTGRE_PASSWD,
      database: process.env.POSTGRE_DB,
      logging: Boolean(process.env.POSTGRE_LOGGING) || false,
      ssl: Boolean(process.env.POSTGRE_SSL) || false,
    },
    mongo: {
      srv: Boolean(process.env.MONGO_SRV) || false,
      host: process.env.MONGO_HOST,
      auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWD,
      },
      database: process.env.MONGO_DB,
    },
  },

  web: {
    PORT: process.env.PORT || 4000,
  },
};
