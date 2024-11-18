const { gql } = require("graphql-tag");

const Author = gql`
  type Query {
    author(id: ID!): Author
    authors(
      limit: Int
      offset: Int
      name: String
      born_year: String
    ): ListAuthors
  }

  type Author {
    id: ID
    name: String
    biography: String
    born_date: String
  }

  type ListAuthors {
    data: [Author!]!
    count: Int!
  }

  type Mutation {
    addAuthor(name: String, biography: String, born_date: String): Author
    updateAuthor(
      id: ID!
      name: String
      biography: String
      born_date: String
    ): Author
    removeAuthor(id: ID!): Author
  }
`;

module.exports = {
  Author,
};
