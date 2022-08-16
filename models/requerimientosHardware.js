import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

export const RequerimientosHardware = sequelize.define('RequerimientosHardware', {
  idHardware: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  idusuarios: {
    type: DataTypes.INTEGER
  }
})

RequerimientosHardware.hasMany(Cotizacion, {
  foreignKey: 'idhardware',
  sourceKey: 'idHardware'
})

Cotizacion.belongsTo(RequerimientosHardware, {
  foreignKey: 'idhardware',
  targetId: 'idCotizaciones'
})
