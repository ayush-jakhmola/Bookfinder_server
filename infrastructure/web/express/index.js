var express = require("express");
var cors = require("cors");
const config = require("../../../config");

function createApp(router) {
  const app = express();
  app.set("PORT", config.web.PORT);

  app.use(cors());
  app.use(express.json());

  app.use(router);

  return app;
}

module.exports = {
  createApp,
};
