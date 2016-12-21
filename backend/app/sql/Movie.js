import {Logger} from '../utilities/Logger';
import {MovieSchema} from './models/Movie';

export class Movie {

    constructor(database) {
        Logger.info("Define Movie table on postgres");
        this.Movie = database.define(MovieSchema.name, MovieSchema.schema);
    }

    reliateTo(schema, name) {
      this.Movie[name] = this.Movie.hasMany(schema, {as: name});
    }
}
