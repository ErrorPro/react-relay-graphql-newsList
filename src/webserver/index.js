const express = require('express');
const cors = require('cors');

const app = express();
const graphqlHTTP = require('express-graphql');
const { default: schema } = require('./schema');

const port = process.env.port || 3000;

const db = {
  news: Promise.resolve(new Array(100).fill().map((e, i) => ({
    id: i + 1,
    name: `News title ${i + 1}`,
  }))),
};

// For production, if we want to serve static files with Node.js we will have to serve static files here
// build it with webpack `npm run build` and server it
// app.use(expressStatic(path.join(__dirname, 'dist')))
// also we need to return index.html to any request which comes to node js(except of graphql) to suppot HTML5 history api.
// app.get('*', (req, res) => res.sent('index.html'))

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
  rootValue: {
    db,
  },
}));

app.listen(port, () => console.log(`Listening to ${port}`));
