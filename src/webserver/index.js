const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const { default: schema } = require('./schema');
const port = process.env.port || 3000;

const db = {
  news: new Array(100).fill().map((e, i) => ({
    id: i + 1,
    name: `News number ${i + 1}`,
  })),
}

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
  rootValue: {
    db,
  },
}));

app.listen(port, () => console.log(`Listening to ${port}`));