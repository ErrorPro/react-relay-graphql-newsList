import { connectionArgs, connectionFromArray } from 'graphql-relay';

export default refs => ({
  type: refs.newsConnection,
  args: connectionArgs,
  resolve: ({ db }, args) => {
    return connectionFromArray(db.news, args);
  }
});