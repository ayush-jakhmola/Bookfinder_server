const { gql } = require("graphql-tag");

const Book = gql`
  type Query {
    book(id: ID!): Book
    books(
      limit: Int
      offset: Int
      title: String
      published_date: String
      author_name: String
    ): ListBooks
  }

  type Book {
    id: ID
    title: String
    description: String
    author_id: Int
    published_date: String
    author: Author
    reviews: [Review]
  }
  type ListBooks {
    data: [Book!]!
    count: Int!
  }

  type Mutation {
    addBook(
      title: String
      description: String
      author_id: ID
      published_date: String
    ): Book
    updateBook(
      id: ID!
      title: String
      description: String
      author_id: ID!
      published_date: String
    ): Book
    removeBook(id: ID!): Book
  }
`;

module.exports = {
  Book,
};
