import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client'; // Apollo imports
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';

const client = new ApolloClient({ // Defines the client to use authmiddleware to run before making requests to GraphQL
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const httpLink = createHttpLink({ uri: '/graphql' }); // Uses createHttpLink to create our connection to graphql

const authLink = setContext((_, { headers }) => { // Handles the authorization via the JSON web token
  const token = localStorage.getItem('id_token'); // Gets the token if it exists in localStorage
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' }, //Returns the headers extracted from the token
  };
});

function App() {
  return (
    <ApolloProvider client={client}> // React wrapper for Apollo
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
