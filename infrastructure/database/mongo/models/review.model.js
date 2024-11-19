const { model } = require("mongoose");

const Review = model("Reviews", {
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  book_id: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

module.exports = {
  Review,
};
