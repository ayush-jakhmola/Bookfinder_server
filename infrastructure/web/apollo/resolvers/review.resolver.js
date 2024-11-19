const {
  ReviewService,
} = require("../../../../core/application/services/review.service");
const { Review } = require("../../../database/mongo/models/review.model");

const service = ReviewService(Review);

module.exports = {
  Mutation: {
    addReview(_, args) {
      try {
        return service.createReview(args);
      } catch (err) {
        console.log(err);
        throw new Error("Error occured while creating review");
      }
    },
  },
};
