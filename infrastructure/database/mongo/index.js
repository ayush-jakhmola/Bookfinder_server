const mongoose = require("mongoose");
const config = require("../../../config");

let mongo;

async function initMongoDB() {
  try {
    let uri = `mongodb://${config.db.mongo.host}`;
    if (config.db.mongo.srv) uri = `mongodb+srv://${config.db.mongo.host}`;
    mongo = await mongoose.connect(uri, {
      auth: config.db.mongo.auth,
    });
    console.log("Mongodb connection has been established successfully !");
    return mongo;
  } catch (error) {
    console.error("Unable to connect to mongo database:", error);
  }
}

module.exports = {
  initMongoDB,
  mongo,
};
