const DataLoader = require("dataloader");
const { groupBy, map } = require("ramda");

const {
  BookService,
} = require("../../../../core/application/services/book.service");
const { Author } = require("../../../database/postgre/models/author.model");
const { Book } = require("../../../database/postgre/models/book.model");

const service = BookService(Book, Author);

module.exports = {
  getAuthorBooksDataloader() {
    return new DataLoader(async (author_ids) => {
      const data = await service.getBooksByAuthorIds(author_ids);
      const groupedById = groupBy((_data) => _data.author_id, data);
      return map((_author_id) => groupedById[_author_id], author_ids);
    });
  },
};
