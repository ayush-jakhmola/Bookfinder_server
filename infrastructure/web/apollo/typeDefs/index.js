const { Author } = require("./author.typeDef");
const { Book } = require("./book.typeDef");

const typeDefs = [Book, Author];

module.exports = { typeDefs };
