// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphQL/TypeDefs");
const { resolvers } = require("./graphQL/Resolvers");

const app = express();

// constants
const PORT = 3001;

// apollo/gql middleware
const server = new ApolloServer({ typeDefs, resolvers });

// mongoose middleware
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("MongoDB connected..."));

// APIS and middleware
const apolloServerStart = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

apolloServerStart();

// routes

// error handlers

// exports
module.exports = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
