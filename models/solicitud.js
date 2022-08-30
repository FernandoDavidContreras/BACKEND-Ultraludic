import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'
import { Cotizacion } from './cotizacion'

// estructura de la tabla solicitud
export const Solicitud = sequelize.define('solicitud', {
  idPresolicitud: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  requerimientosHardware: {
    type: DataTypes.TEXT
  },
  requerimientosSoftware: {
    type: DataTypes.TEXT
  },
  tiempo: {
    type: DataTypes.INTEGER
  },
  kiosco: {
    type: DataTypes.INTEGER
  },
  empresa: {
    type: DataTypes.STRING
  },
  idservices: {
    type: DataTypes.INTEGER
  },
  idusuarios: {
    type: DataTypes.INTEGER
  }

})

Solicitud.hasMany(Cotizacion, {
  foreignKey: 'idpresolicitud',
  sourceKey: 'idPresolicitud'
})

Cotizacion.belongsTo(Solicitud, {
  foreignKey: 'idpresolicitud',
  targetId: 'idCotizaciones'
})
