import Sequelize from 'sequelize'
import config from './../config.js'

// conectamos la base de datos
export const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  port: config.port,
  define: {
    // charset: 'utf8mb4',
    // collate: 'utf8mb4_unicode_ci'
  },
  dialectOptions: {
    // charset: 'utf8mb4'
  },
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
