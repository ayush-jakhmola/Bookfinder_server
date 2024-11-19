const DataLoader = require("dataloader");
const { groupBy, map } = require("ramda");

const {
  ReviewService,
} = require("../../../../core/application/services/review.service");
const { Review } = require("../../../database/mongo/models/review.model");

const service = ReviewService(Review);

module.exports = {
  getBookReviewsDataloader() {
    return new DataLoader(async (book_ids) => {
      const data = await service.getReviewsByBookIds(book_ids);
      const groupedById = groupBy((_data) => _data.book_id, data);
      return map((_book_id) => groupedById[_book_id], book_ids);
    });
  },
};
