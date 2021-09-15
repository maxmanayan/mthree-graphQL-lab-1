const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Types
  type Author {
    id: ID!
    name: String!
    age: Int!
  }

  # Queries
  type Query {
    getAllAuthors: [Author!]!
  }

  # Mutations
`;

module.exports = { typeDefs };