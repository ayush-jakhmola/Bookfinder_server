const { Op } = require("sequelize");

function BookService(datastore, Author) {
  return {
    getBookById: (id) => {
      return datastore.findOne({
        where: { id },
        include: [
          {
            model: Author,
            as: "author",
            attributes: ["id", "name"],
          },
        ],
      });
    },

    getBooksByAuthorId: (author_id) => {
      return datastore.findAll({ where: { author_id } });
    },

    getAllBooks: async ({
      limit = 5,
      offset = 0,
      title,
      published_date,
      author_name,
    }) => {
      const where = {};
      if (title) where.title = { [Op.iLike]: `%${title}%` };
      if (published_date) where.published_date = published_date;

      const count = await datastore.count({
        where,
      });

      const data = await datastore.findAll({
        where,
        limit,
        offset,
        include: [
          {
            model: Author,
            as: "author",
            attributes: ["id", "name"],
            ...(author_name && {
              where: { name: { [Op.iLike]: `%${author_name}%` } },
            }),
          },
        ],
        order: [["published_date", "ASC"]],
      });

      return { count, data };
    },

    createBook: (data) => {
      return datastore.create(data);
    },

    updateBook: async (id, data) => {
      const [updated] = await datastore.update(data, {
        where: { id },
      });

      if (updated) {
        return datastore.findOne({ where: { id } });
      }
    },

    deleteBook: async (id) => {
      const deleted = await datastore.destroy({
        where: { id },
      });

      !!deleted;
    },
  };
}

module.exports = {
  BookService,
};
