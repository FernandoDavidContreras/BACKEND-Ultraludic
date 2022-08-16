import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Servicios } from './servicios'

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

ServiciosPrincipales.hasMany(Servicios, {
  foreignKey: 'idServiciosPrincipales',
  sourceKey: 'idServiciosP'
})

Servicios.belongsTo(ServiciosPrincipales, {
  foreignKey: 'idServiciosPrincipales',
  targetId: 'idServicios'
})
