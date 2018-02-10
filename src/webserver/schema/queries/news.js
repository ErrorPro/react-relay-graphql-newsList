import { connectionArgs, connectionFromArray } from 'graphql-relay';

export default refs => ({
  type: refs.newsConnection,
  args: connectionArgs,
  resolve: ({ db }, args) => connectionFromArray(db.news, args),
});
