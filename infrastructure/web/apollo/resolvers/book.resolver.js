const {
  BookService,
} = require("../../../../core/application/services/book.service");
const { Author } = require("../../../database/postgre/models/author.model");
const { Book } = require("../../../database/postgre/models/book.model");

const bookService = BookService(Book, Author);

module.exports = {
  Query: {
    book: async (_, args) => {
      try {
        const { id } = args;
        const data = await bookService.getBookById(id);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to fetch data !");
      }
    },
    books: async (_, args) => {
      try {
        const data = await bookService.getAllBooks(args);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to fetch data !");
      }
    },
  },
  Mutation: {
    addBook: async (_, args) => {
      try {
        const data = await bookService.createBook(args);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to add data !");
      }
    },
    updateBook: async (_, args) => {
      try {
        const { id } = args;
        const data = await bookService.updateBook(id, args);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to update data !");
      }
    },
    removeBook: async (_, args) => {
      try {
        const { id } = args;
        const data = await bookService.deleteBook(id);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to remove data !");
      }
    },
  },
};
