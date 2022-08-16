import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

export const RequerimientosSoftware = sequelize.define('RequerimientosSoftware', {
  idSoftware: {
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

RequerimientosSoftware.hasMany(Cotizacion, {
  foreignKey: 'idsoftware',
  sourceKey: 'idSoftware'
})

Cotizacion.belongsTo(RequerimientosSoftware, {
  foreignKey: 'idsoftware',
  targetId: 'idCotizaciones'
})
