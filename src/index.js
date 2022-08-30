import app from './app'
import { sequelize } from './database/database'
// import './../models/costos'
// import './../models/cotizacion'
// import './../models/serviciosprincipales'
// import './../models/servicios'
// import './../models/solicitud'
// import './../models/usuarios'
// import './../models/roles'
// import './../models/costosHardaware'

const main = async () => {
  try {
    await sequelize.sync({ force: false })
    app.listen(app.get('port'))
    console.log(`Server on port ${app.get('port')}`)
  } catch (error) {
    console.error('Unable to connect to the database', error)
  }
}

main()
