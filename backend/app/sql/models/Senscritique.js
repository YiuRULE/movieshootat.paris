import Sequelize from 'sequelize';

export const SenscritiqueSchema = {
    "name": "senscritique",
    "schema": {
        "url": {type: Sequelize.STRING, unique: true, allowNull: false},
        "story": {type: Sequelize.TEXT, allowNull: false},
        "reviews": {type: Sequelize.FLOAT, allowNull: false},
        "year": {type: Sequelize.INTEGER, allowNull: false}
    }
}
