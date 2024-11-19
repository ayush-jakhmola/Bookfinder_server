const { mergeAll } = require("ramda");
const authorDataloader = require("./author.dataloader");
const bookDataloader = require("./book.dataloader");
const reviewDataloader = require("./review.dataloader");

module.exports = mergeAll([authorDataloader, bookDataloader, reviewDataloader]);
