import Sequelize from 'sequelize'
import config from './../config.js'

// conectamos la base de datos
export const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql'
})
