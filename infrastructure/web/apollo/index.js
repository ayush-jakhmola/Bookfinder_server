var { ApolloServer } = require("@apollo/server");
var { expressMiddleware } = require("@apollo/server/express4");
var { typeDefs } = require("./typeDefs");
var { resolvers } = require("./resolvers");

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  return server;
}

module.exports = {
  createApolloServer,
  expressMiddleware,
};
