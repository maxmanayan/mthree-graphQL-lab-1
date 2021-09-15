const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: String,
    genre: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", BookSchema);
