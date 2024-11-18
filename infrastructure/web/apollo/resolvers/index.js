const bookResolvers = require("./book.resolver");
const authorResolvers = require("./author.resolver");

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...authorResolvers.Query,
  },
  Mutation: {
    ...bookResolvers.Mutation,
    ...authorResolvers.Mutation,
  },
};

module.exports = { resolvers };
