import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Servicios } from './servicios'

// estructura de la tabla serviciosPRincipales
export const ServiciosPrincipales = sequelize.define('ServiciosPrincipales', {
  idServiciosP: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  }

})
// relacion con la tabla servicios
ServiciosPrincipales.hasMany(Servicios, {
  foreignKey: 'idServiciosPrincipales',
  sourceKey: 'idServiciosP'
})

Servicios.belongsTo(ServiciosPrincipales, {
  foreignKey: 'idServiciosPrincipales',
  targetId: 'idServicios'
})
