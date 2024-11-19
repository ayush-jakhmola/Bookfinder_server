const DataLoader = require("dataloader");
const { groupBy, map } = require("ramda");

const {
  AuthorService,
} = require("../../../../core/application/services/author.service");
const { Author } = require("../../../database/postgre/models/author.model");

const service = AuthorService(Author);

module.exports = {
  getAuthorDataloader() {
    return new DataLoader(async (ids) => {
      const data = await service.getAuthorByIds(ids);
      const groupedById = groupBy((_data) => _data.id, data);
      // One Author per ID
      return map((_id) => groupedById[_id][0], ids);
    });
  },
};
