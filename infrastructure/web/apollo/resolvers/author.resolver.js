const {
  AuthorService,
} = require("../../../../core/application/services/author.service");
const { Author } = require("../../../database/postgre/models/author.model");

const authorService = AuthorService(Author);

module.exports = {
  Query: {
    author: async (_, args) => {
      try {
        const { id } = args;
        const data = await authorService.getAuthorById(id);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to fetch data !");
      }
    },
    authors: async (_, args) => {
      try {
        const data = await authorService.listAuthors(args);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to fetch data !");
      }
    },
  },
  Mutation: {
    addAuthor: async (_, args) => {
      try {
        const data = await authorService.addAuthor(args);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to insert data !");
      }
    },
    updateAuthor: async (_, args) => {
      try {
        const { id } = args;
        const data = await authorService.updateAuthor(id, args);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to update data !");
      }
    },
    removeAuthor: async (_, args) => {
      try {
        const { id } = args;
        const data = await authorService.removeAuthor(id);
        return data;
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while trying to remove data !");
      }
    },
  },
};
