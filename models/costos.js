import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

// estructura de la tabla Costos de la BD
export const Costos = sequelize.define('Costos', {
  idCosto: {
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
  hora: {
    type: DataTypes.INTEGER
  },
  precio: {
    type: DataTypes.INTEGER
  },
  idservicios: {
    type: DataTypes.INTEGER
  }
})

// relacion con la tabla cotizacion
Costos.hasMany(Cotizacion, {
  foreignKey: 'idcostos',
  sourceKey: 'idCosto'
})

Cotizacion.belongsTo(Costos, {
  foreignKey: 'idcostos',
  targetId: 'idCosto'
})
