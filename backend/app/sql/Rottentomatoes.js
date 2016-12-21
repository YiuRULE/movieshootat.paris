import {Logger} from '../utilities/Logger';
import {RottentomatoesSchema} from './models/Rottentomatoes';

export class Rottentomatoes {

    constructor(database) {
        Logger.info("Define Rottentomatoes table on postgres");
        this.Rottentomatoes = database.define(RottentomatoesSchema.name, RottentomatoesSchema.schema);
    }
}
