const { gql } = require("graphql-tag");

const Review = gql`
  type Review {
    name: String
    rating: Int
    review: String
    book_id: ID
  }
  type Mutation {
    addReview(
      name: String!
      rating: Int!
      review: String!
      book_id: ID!
    ): Review
  }
`;

module.exports = {
  Review,
};
