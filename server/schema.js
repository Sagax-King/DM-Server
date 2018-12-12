import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '../api';
import { resolvers } from '../resolvers';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: e => console.log(e) },
});
