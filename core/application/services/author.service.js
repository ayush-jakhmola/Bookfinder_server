const { Op, where } = require("sequelize");

function AuthorService(datastore) {
  return {
    getAuthorById(id) {
      return datastore.findOne({ where: { id } });
    },

    getAuthorByIds(ids) {
      return datastore.findAll({
        where: {
          id: ids,
        },
      });
    },

    async listAuthors({ limit = 5, offset = 0, name, born_year }) {
      const where = {};

      if (name)
        where.name = {
          [Op.iLike]: `%${name}%`,
        };

      if (born_year)
        where.born_date = {
          [Op.between]: [`${born_year}-01-01`, `${born_year}-12-31`],
        };

      const count = await datastore.count({
        where,
      });

      const data = await datastore.findAll({
        where,
        limit,
        offset,
        order: [["name", "ASC"]],
      });

      return {
        data,
        count,
      };
    },

    addAuthor(data) {
      return datastore.create(data);
    },

    async updateAuthor(id, data) {
      const [updated] = await datastore.update(data, {
        where: { id },
      });

      if (updated) {
        return datastore.findOne({ where: { id } });
      }
    },

    async removeAuthor(id) {
      const deleted = await datastore.destroy({
        where: { id },
      });

      !!deleted;
    },
  };
}

module.exports = {
  AuthorService,
};
