function ReviewService(datastore) {
  return {
    createReview(data) {
      return datastore.create(data);
    },

    getReviewsByBookId(book_id) {
      return datastore.find({ book_id });
    },

    getReviewsByBookIds(book_ids) {
      return datastore.find({ book_id: { $in: book_ids } });
    },
  };
}

module.exports = {
  ReviewService,
};
