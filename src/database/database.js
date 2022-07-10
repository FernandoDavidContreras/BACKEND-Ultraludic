import mysql from 'promise-mysql'
import config from './../config'

// conectamos la base de datos
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
})

// funcion para devover la coneccion a la base de datos
const getConnection = () => {
  return connection
}

// exportamos la funcion de coneccion
module.exports = {
  getConnection
}
