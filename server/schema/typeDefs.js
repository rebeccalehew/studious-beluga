const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID,
        authors: [authors] String!,
        description: String!,
        bookId: String!,
        title: String!,
        image: String,
        link: String,
    }

    type Users {
        username: String!,
        email: String!,
        password: String!,
        bookCount: Int,
        savedBooks: [Books!]
    }

    # Query that will always find and return the logged in user's data
    type Query {
        user: [User]!
        profile(userId: ID!): User
        me: User
    }

    # JWT authentication
    type Auth {
        token: String!
        user: User!
    }

    # Permissible mutations the user may execute from the client side
    type Mutation {
        # Sets the data structure for adding a new user
        addUser(username: String!, email: String!, password: String!): Auth
        
        # Sets the data structure for a user logging in
        loginUser(email: String!, password: String!): Auth
        
        # Sets the data structure for removing a saved book from the user's profile
        removeBook(bookId: String!): User
        
        # Sets the data structure for saving a book to the user's profile
        saveBook(authors: [String!]!, description: String!, title: String!, bookId: String!, image: String, link: String): Book
    }
`;

module.exports = typeDefs;