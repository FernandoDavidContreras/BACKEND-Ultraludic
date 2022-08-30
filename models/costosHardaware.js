import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

export const costosHardware = sequelize.define('CostosHardware', {
  idCostoHardware: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  semana: {
    type: DataTypes.INTEGER
  },
  idservicio: {
    type: DataTypes.INTEGER
  }
})

costosHardware.hasMany(Cotizacion, {
  foreignKey: 'idcostoshardware',
  sourceKey: 'idCostoHardware'
})

Cotizacion.belongsTo(costosHardware, {
  foreignKey: 'idcostoshardware',
  targetId: 'idCostoHardware'
})
