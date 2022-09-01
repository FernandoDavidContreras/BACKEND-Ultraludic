import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'

// estructura de la tabla cotizacion de la BD
export const Cotizacion = sequelize.define('Cotizacion', {
  idCotizaciones: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  requerimientoshardware: {
    type: DataTypes.STRING
  },
  requerimientoshardwareUser: {
    type: DataTypes.STRING
  },
  requerimientossoftware: {
    type: DataTypes.STRING
  },
  costossoftware: {
    type: DataTypes.STRING
  },
  costoshardware: {
    type: DataTypes.STRING
  },
  costoTotal: {
    type: DataTypes.INTEGER
  },
  disenio: {
    type: DataTypes.STRING
  },
  implementaciones: {
    type: DataTypes.STRING
  },
  derechos: {
    type: DataTypes.STRING
  },
  idservices: {
    type: DataTypes.INTEGER
  },
  idpresolicitud: {
    type: DataTypes.INTEGER
  },

  idUser: {
    type: DataTypes.INTEGER
  }
})
