const { User } = require('../models'); //  User model
const { signToken, AuthenticationError } = require('../utils/auth'); // Authorization helper

const resolvers = { // Resolver functions
  Query: { // Finds a user in the DB
    me: async (parent, args, context) => {
      if (context.user) {
        //const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw AuthenticationError;
    },
  },

  Mutation: { // Our mutator functions
    addUser: async (parent, { username, email, password }) => { // Adds a user to the DB
      const userExists = await User.findOne({ email });
      if (userExists){
        console.log("This user already exists!")
        throw AuthenticationError;
      } else {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user }; }
    },

    login: async (parent, { email, password }) => { // Handles a user logging
        const user = await User.findOne({ email });

      if (!user) {
        console.log("Can't find that email for a user!")
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        console.log("Password is incorrect!")
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => { // Saves a book to the DB
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: bookData } },
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
