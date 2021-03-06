const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  // Queries
  Query: {
    async getAllAuthors() {
      let res = await Author.find();
      return res;
    },

    async getAllBooks() {
      let res = await Book.find();
      return res;
    },
  },

  // Mutations
  Mutation: {
    async createAuthor(parent, args) {
      const newAuthor = new Author({ ...args });
      let res = await newAuthor.save();
      return res;
    },

    async createBook(parent, args) {
      const newBook = new Book({ ...args });
      let res = await newBook.save();
      return res;
    },
  },
};

module.exports = { resolvers };
