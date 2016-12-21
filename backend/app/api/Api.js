import * as bodyParser from 'body-parser';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import fs from 'fs';

import {Logger} from '../utilities/Logger';
import {Configuration} from './Configuration';
import {Sql} from '../sql/Sql';
import {GraphQL} from '../graphql/GraphQL';

export class Api {

    root(req, res) {
        process.nextTick(() => {
            res.json({message: "This is the api you are looking for"});
        })
    }

    constructor() {
        Logger.info("Welcome to " + Configuration.name + ":" + Configuration.version);
        Logger.info(Configuration.description);

        Logger.info("We will now initialize express");

        this.app = express();

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        this.Sql = new Sql();
        this.Movie = new GraphQL(this.app, this.Sql);

        this.app.listen(Configuration.port);
        Logger.info("API is running on port: " + Configuration.port);
      }
}
