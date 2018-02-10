import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

export default () => new GraphQLObjectType({
  name: 'News',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
  },
});
