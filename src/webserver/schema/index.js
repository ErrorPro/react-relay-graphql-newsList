import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { connectionDefinitions } from 'graphql-relay';
import * as queries from './queries';
import * as types from './types';

// This is what I usually do: https://medium.com/@ven_korolyov/graphql-combination-composition-2b467ba89aaa
// The current structure's version is just easier to understand.

const refCreators = {
  ...queries,
  ...types,
}

const refs = Object.keys(types).reduce((acc, key) => {
  acc[key] = refCreators[key](acc);

  const { connectionType, edgeType } = connectionDefinitions({ nodeType: acc[key] });

  acc[`${key}Connection`] = connectionType;
  acc[`${key}Edge`] = edgeType;

  return acc;
}, {});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'viewer',
    fields: Object.keys(queries).reduce((acc, key) => {
      acc[key] = queries[key](refs);

      return acc;
    }, {}),
  }),
});
