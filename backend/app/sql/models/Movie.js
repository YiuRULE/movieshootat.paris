import Sequelize from 'sequelize';

export const MovieSchema = {
    "name": "movie",
    "schema": {
        "title": {type: Sequelize.STRING, unique: true, allowNull: false},
        "original_title": {type: Sequelize.STRING, unique: true, allowNull: false},
        "director": {type: Sequelize.STRING},
        "trailer": {type: Sequelize.STRING, allowNull: true},
        "poster": {type: Sequelize.STRING, allowNull: true},
        "idmoviedb": {type: Sequelize.INTEGER}
    }
}
