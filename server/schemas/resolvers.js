const { User } = require('../models'); //  User model
const { signToken, AuthenticationError } = require('../utils/auth'); // Authorization helper

const resolvers = { // Resolver function
  Query: { // Finds a user in the DB
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw AuthenticationError;
    },
  }, // Add a find book function later?

  Mutation: { // Our mutator functions
    addUser: async (parent, args) => { // Adds a user to the DB
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => { // Handles a user logging
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookData }, context) => { // Saves a book to the DB
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          { new: true }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    },
    removeBook: async (parent, { bookId }, context) => { // Removes a book from the DB
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
