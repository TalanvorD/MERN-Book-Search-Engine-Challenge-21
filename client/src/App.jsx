import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client"; // Apollo client imports
import { setContext } from "@apollo/client/link/context"; // Context import
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

const httpLink = createHttpLink({ uri: "/graphql" }); // GraphQL connection

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token"); // Looks for a token in localStorage and sets it to a local variable

  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' }
  }
});

const client = new ApolloClient({ // Creates the Apollo client with appropriate link and cache
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}> {/* Apollo wrapper for React*/}
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
