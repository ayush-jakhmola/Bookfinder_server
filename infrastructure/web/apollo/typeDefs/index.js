const { Author } = require("./author.typeDef");
const { Book } = require("./book.typeDef");
const { Review } = require("./review.typeDef");

const typeDefs = [Book, Author, Review];

module.exports = { typeDefs };
