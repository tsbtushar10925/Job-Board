import 'reflect-metadata';

import express from 'express';
import dotenv from 'dotenv';
import {HelloResolver} from "./resolvers/hello";
import {buildSchema} from "type-graphql";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@as-integrations/express4";

const main = async () => {
    // Environment variables
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    // Graph QL configuration
    const graphqlSchema = await buildSchema({
        resolvers: [HelloResolver]
    });
    const server = new ApolloServer({schema: graphqlSchema});
    await server.start();
    app.use('/graphql', express.json(), expressMiddleware(server));

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    })
}

main();