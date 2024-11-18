const { model } = require("mongoose");

const ReviewModel = model("Reviews", {
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});

module.exports = {
  ReviewModel,
};
