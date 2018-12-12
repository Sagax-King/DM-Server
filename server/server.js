import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import {formatError} from 'apollo-errors';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {mongoURL, graphqlPORT} from './config';
import {connect} from '../resolvers';
import Schema from './schema';

const GraphQLServer = express();

GraphQLServer.use(cors());

GraphQLServer.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(req => ({
        formatError,
        schema: Schema,
        tracing: true,
        cacheControl: true,
    })),
);

GraphQLServer.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
    }),
);

(async () => {
    await connect(mongoURL);
    GraphQLServer.listen(graphqlPORT);
    console.log(`GraphQL Server start on port ${graphqlPORT}`);
})();
