import resolver from 'graphql-sequelize';
import graphqlHTTP from 'express-graphql';
import {MovieType} from './type/Movie';
import {ShootType} from './type/Shoot';
import {RottentomatoesType} from './type/Rottentomatoes';
import {SenscritiqueType} from './type/Senscritique';
import {MovieSchema} from './schema/Movie';
import {Logger} from '../utilities/Logger';


export class GraphQL {

    constructor(app, sql) {
        Logger.info("Create GraphQL schema");
        this.ShootType = ShootType();
        this.RottentomatoesType = RottentomatoesType();
        this.SenscritiqueType = SenscritiqueType();
        this.MovieType = MovieType(sql.MovieSchema.Movie, this.ShootType, this.RottentomatoesType, this.SenscritiqueType);

        app.use('/movies', graphqlHTTP({
            schema: MovieSchema(sql.MovieSchema.Movie, this.MovieType),
            graphiql: true
        }));
    }
}
