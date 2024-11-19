const { initMongoDB } = require("./infrastructure/database/mongo");
const {
  createApolloServer,
  expressMiddleware,
} = require("./infrastructure/web/apollo");
const { createApp } = require("./infrastructure/web/express");
const { sequelize, initPostgre } = require("./infrastructure/database/postgre");

async function bootstrap() {
  await initMongoDB();
  await initPostgre();
  const server = await createApolloServer();
  const app = createApp(expressMiddleware(server));

  const PORT = app.get("PORT");
  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
}

bootstrap();
