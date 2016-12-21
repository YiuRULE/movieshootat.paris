import Sequelize from 'sequelize';

export const RottentomatoesSchema = {
    "name": "rottentomatoes",
    "schema": {
        "url": {type: Sequelize.STRING, unique: true, allowNull: false},
        "reviews": {type: Sequelize.STRING, unique: true, allowNull: false},
        "year": {type: Sequelize.INTEGER}
    }
}
