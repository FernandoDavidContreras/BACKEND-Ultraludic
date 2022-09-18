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
  descripcion: {
    type: DataTypes.TEXT
  },
  costoDolar: {
    type: DataTypes.FLOAT
  },
  alquilerCosto: {
    type: DataTypes.STRING
  },
  requerimientoshardware: {
    type: DataTypes.STRING
  },
  tiempoalquiler: {
    type: DataTypes.INTEGER
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
  impuestos: {
    type: DataTypes.INTEGER
  },
  costoTotal: {
    type: DataTypes.INTEGER
  },
  disenio: {
    type: DataTypes.TEXT
  },
  tiempoEntrega: {
    type: DataTypes.TEXT
  },
  facturacion: {
    type: DataTypes.TEXT
  },
  implementaciones: {
    type: DataTypes.TEXT
  },
  derechosUno: {
    type: DataTypes.TEXT
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
