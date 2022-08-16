import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Costos } from './costos'
import { Solicitud } from './solicitud'
import { Cotizacion } from './cotizacion'

export const Servicios = sequelize.define('servicios', {
  idServicios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  idServiciosPrincipales: {
    type: DataTypes.INTEGER
  }
})

Servicios.hasMany(Costos, {
  foreignKey: 'idservicios',
  sourceKey: 'idServicios'
})

Costos.belongsTo(Servicios, {
  foreignKey: 'idservicios',
  targetId: 'idCosto'
})

Servicios.hasMany(Solicitud, {
  foreignKey: 'idservices',
  sourceKey: 'idServicios'
})

Solicitud.belongsTo(Servicios, {
  foreignKey: 'idservices',
  targetId: 'idPresolicitud'
})

Servicios.hasMany(Cotizacion, {
  foreignKey: 'idservices',
  sourceKey: 'idServicios'
})

Cotizacion.belongsTo(Servicios, {
  foreignKey: 'idservices',
  targetId: 'idCotizaciones'
})
