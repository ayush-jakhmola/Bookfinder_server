const { Op } = require("sequelize");

function BookService(datastore) {
  return {
    getBookById(id) {
      return datastore.findOne({
        where: { id },
      });
    },

    getBooksByAuthorId(author_id) {
      return datastore.findAll({ where: { author_id } });
    },

    getBooksByAuthorIds(author_ids) {
      return datastore.findAll({ where: { author_id: author_ids } });
    },

    async getAllBooks({
      limit = 5,
      offset = 0,
      title,
      published_date,
      author_name,
    }) {
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
        order: [["published_date", "ASC"]],
      });

      return { count, data };
    },

    createBook(data) {
      return datastore.create(data);
    },

    async updateBook(id, data) {
      const [updated] = await datastore.update(data, {
        where: { id },
      });

      if (updated) {
        return datastore.findOne({ where: { id } });
      }
    },

    async deleteBook(id) {
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
