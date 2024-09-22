import { gql } from '@apollo/client'; // Imports gql from Apollo library for queries

// Finds a user and their associated library in the DB
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;