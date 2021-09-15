const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "authors",
  }
);

module.exports = mongoose.model("Author", AuthorSchema);
