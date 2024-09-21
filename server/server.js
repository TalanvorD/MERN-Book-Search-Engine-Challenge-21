const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const { ApolloServer } = require('@apollo/server'); // Apollo server dependency
const { expressMiddleware } = require('@apollo/server/express4'); // Express middleware for Apollo server
const { authMiddleware } = require('./utils/auth'); // Authorization helper

const { typeDefs, resolvers } = require('./schemas'); // GraphQL schemas

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({ typeDefs, resolvers }); // Apollo server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', expressMiddleware(server, { // GraphQL connection
  context: authMiddleware
}));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => { // Catchall wildcare to serve the SPA at index.html
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.use(routes); // Probably remove this once finished

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

startApolloServer(); // Starts the Apollo server