const bookResolvers = require("./book.resolver");
const authorResolvers = require("./author.resolver");
const reviewResolvers = require("./review.resolver");

const {
  getAuthorDataloader,
  getBookReviewsDataloader,
} = require("../dataloaders");

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...authorResolvers.Query,
  },
  Mutation: {
    ...bookResolvers.Mutation,
    ...authorResolvers.Mutation,
    ...reviewResolvers.Mutation,
  },
  Book: {
    author(parent) {
      return getAuthorDataloader().load(parent.author_id);
    },
    reviews(parent) {
      return getBookReviewsDataloader().load(parent.id);
    },
  },
};

module.exports = { resolvers };
