import { connectionArgs, connectionFromPromisedArray } from 'graphql-relay';

export default refs => ({
  type: refs.newsConnection,
  args: connectionArgs,
  resolve: ({ db }, args) => connectionFromPromisedArray(db.news, args),
});
