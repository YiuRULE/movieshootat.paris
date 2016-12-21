import {Logger} from '../utilities/Logger';
import {ShootSchema} from './models/Shoot';

export class Shoot {

    constructor(database) {
        Logger.info("Define Shoot table on postgres");
        this.Shoot = database.define(ShootSchema.name, ShootSchema.schema);
    }
}
