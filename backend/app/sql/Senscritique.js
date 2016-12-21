import {Logger} from '../utilities/Logger';
import {SenscritiqueSchema} from './models/Senscritique';

export class Senscritique {

    constructor(database) {
        Logger.info("Define Senscritique table on postgres");
        this.Senscritique = database.define(SenscritiqueSchema.name, SenscritiqueSchema.schema);
    }
}
