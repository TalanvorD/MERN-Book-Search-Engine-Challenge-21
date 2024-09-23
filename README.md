# MERN-Book-Search-Engine-Challenge-21

## Description

MERN: Book Search Engine Refactor

Refactored a book search engine from a RESTful API to a GraphQL API using an Apollo Server and deployed to Render.

Technologies used are Node.js, Express.js, concurrently, bcrypt, Apollo Server/Client, GraphQL, JSON Web Token, MongoDB, Mongoose, Vite, React, Bootstrap, ESLint, Render, Google Books API and dotenv.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Repository](#repository)

## Installation

To install the repository. first you will need to clone it from GitHub:
```
git clone https://github.com/TalanvorD/MERN-Book-Search-Engine-Challenge-21.git
```
Next, you will need to install the required dependencies via node.js, in the root folder:
```
npm install
```
To build the dist folder:
```
npm run build
```
Finally to run locally:
```
npm run develop
```
At which point you should be able to connect to the server by opening a web browser and navigating to http://localhost:3000/

## Usage

Navigate to http://localhost:3000/ and the user will be presented with a form to search for books and a navigation header for options to search for books or login/signup.

Clicking on the Loginin/Signup button will present the user with a modal that asks for login information and there's a tab to switch to a signup form to create an account which will be stored in the database. Once an account is created the user will be sent back to the book search form.

After entering in a search term into the form the app will make a fetch request to the Google Books API and the results will be rendered on the page for the user to browse. There will be a button at the bottom of each books card to save the book to the users library in the database.

When the user is logged in there will be an option to view their saved books in the navigation header. Clicking on that will allow to user to view the books in their collection. At the bottom of each books card there will be a button to remove the book from their library which will remove that entry in the database.

The user and their library will be saved in the database and will persist between sessions.

## License

[MIT License](https://spdx.org/licenses/MIT.html)

## Contributing

concurrently [https://www.npmjs.com/package/concurrently](https://www.npmjs.com/package/concurrently) Run multiple commands in node.js, *concurrently*!

express [https://expressjs.com/](https://expressjs.com/) Web framework for Node.js

Node.js [https://nodejs.org/en](https://nodejs.org/en) Runtime enviroment for JavaScript applications

bcrypt [https://bcrypt.online/](https://bcrypt.online/) Cryptographic hashing algorithm, recommended for password hashing.

Apollo Server [https://www.apollographql.com/docs/apollo-server/](https://www.apollographql.com/docs/apollo-server/) Server for GraphQL and Apollo Client

Apollo Client [https://www.apollographql.com/docs/react/](https://www.apollographql.com/docs/react/) Client to interact with the Apollo Server, specifically made for the React front end

GraphQL [https://graphql.org/](https://graphql.org/) API to interact with mongoDB and Apollo Server

JSON Web Token [https://jwt.io/](https://jwt.io/) Creates, signs and decodes tokens used for authentication

MongoDB [https://www.mongodb.com/](https://www.mongodb.com/) Database to store our User collections

mongoose [https://mongoosejs.com/](https://mongoosejs.com/) ORM interact with the MongoDB database

Vite [https://vitejs.dev/](https://vitejs.dev/) Build and templating tool for developement.

React [https://react.dev/](https://react.dev/) Front end interface.

Bootstrap [https://getbootstrap.com/](https://getbootstrap.com/) Front end CSS toolkit.

ESLint [https://eslint.org/](https://eslint.org/) JavaScript linting utility.

Render [https://render.com/](https://render.com/) Application host.

Google Books API [https://developers.google.com/books](https://developers.google.com/books) API to search Google Books

dotenv [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) Loads enviroment variables from a .env file to seperate sensitive information.

## Tests

Try/catch calling to find errors.

## Questions

For any questions:

Find me on [github](https://github.com/talanvord)!

Send me an [email](mailto://talanvor_divine@yahoo.com)!

## Render Deployment

[https://mern-book-search-engine-challenge-21.onrender.com/](https://mern-book-search-engine-challenge-21.onrender.com/saved)

## Repository

[https://github.com/TalanvorD/MERN-Book-Search-Engine-Challenge-21](https://github.com/TalanvorD/MERN-Book-Search-Engine-Challenge-21)

## Screenshot

![screenshot](https://raw.githubusercontent.com/TalanvorD/MERN-Book-Search-Engine-Challenge-21/refs/heads/main/MERN-Book-Search-Engine-Screenshot.jpg)
