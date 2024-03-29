import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database.js'
import { CostosSoftware } from './costos.js'
import { Solicitud } from './solicitud.js'
import { Cotizacion } from './cotizacion.js'
import { costosHardware } from './costosHardaware.js'

// estructura de la tabla servicios de la BD
export const Servicios = sequelize.define('servicios', {
  idServicios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  }
})

Servicios.hasMany(CostosSoftware, {
  foreignKey: 'idservicios',
  sourceKey: 'idServicios'
})

CostosSoftware.belongsTo(Servicios, {
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

Servicios.hasMany(costosHardware, {
  foreignKey: 'idservicio',
  sourceKey: 'idServicios'
})

costosHardware.belongsTo(Servicios, {
  foreignKey: 'idservicio',
  targetId: 'idCostoHardware'
})
