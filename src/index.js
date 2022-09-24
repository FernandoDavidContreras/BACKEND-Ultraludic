import app from './app.js'
import { sequelize } from './database/database.js'
import './../models/costos.js'
import './../models/cotizacion.js'
import './../models/servicios.js'
import './../models/solicitud.js'
import './../models/usuarios.js'
import './../models/roles.js'
import './../models/costosHardaware.js'

const main = async () => {
  try {
    await sequelize.sync()
    await sequelize.authenticate()
    console.log('connection to databse')
    app.listen(app.get('port'))
    console.log(`Server on port ${app.get('port')}`)
  } catch (error) {
    console.error('Unable to connect to the database', error)
  }
}

main()
