import Sequelize from 'sequelize';

export const ShootSchema = {
    "name": "shoot",
    "schema": {
      "date_start": Sequelize.DATE,
      "date_end": Sequelize.DATE,
      "address": Sequelize.STRING,
      "moment": {type: Sequelize.STRING, allowNull: true},
      "lat": {type: Sequelize.FLOAT},
      "long": {type: Sequelize.FLOAT}
    }
}
