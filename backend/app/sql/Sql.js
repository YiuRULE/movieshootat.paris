import Sequelize from 'sequelize';
import {Configuration} from './Configuration';
import {Movie} from './Movie';
import {Shoot} from './Shoot';
import {Senscritique} from './Senscritique';
import {Rottentomatoes} from './Rottentomatoes';
import {Logger} from '../utilities/Logger';


export class Sql {

    constructor() {
        Logger.info("Create sql connection");

        this.database = new Sequelize(
            Configuration.database,
            Configuration.user,
            Configuration.password, {
                host: Configuration.host,
                port: Configuration.port,
                dialect: Configuration.type
            }
        );

        this.MovieSchema = new Movie(this.database);
        this.ShootSchema = new Shoot(this.database);
        this.RottentomatoesSchema = new Rottentomatoes(this.database);
        this.SenscritiqueSchema = new Senscritique(this.database);

        this.MovieSchema.reliateTo(this.ShootSchema.Shoot, 'Shoots');
        this.MovieSchema.reliateTo(this.RottentomatoesSchema.Rottentomatoes, 'Rottentomatoes');
        this.MovieSchema.reliateTo(this.SenscritiqueSchema.Senscritique, 'Senscritique');

        Logger.info("Postgres synchronization on run");

        this.database.sync();

        Logger.info("Postgres synchronization complete");
//        this.setData();
//        this.getRottentomatoesReview();
//        this.getSenscritiquereviews();
//        this.updateLocalisation();
    }
}
