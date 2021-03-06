const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Types -----------------------------------
  type Author {
    id: ID!
    name: String!
    age: Int!
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
  }

  # Queries -------------------------------------
  type Query {
    getAllAuthors: [Author!]!

    getAllBooks: [Book!]!
  }

  # Mutations -------------------------------------
  type Mutation {
    createAuthor(name: String!, age: Int!): Author

    createBook(name: String!, genre: String!): Book
  }
`;

module.exports = { typeDefs };
