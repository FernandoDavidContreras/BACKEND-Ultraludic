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
    type: DataTypes.TEXT
  },
  implementaciones: {
    type: DataTypes.TEXT
  },
  derechosUno: {
    type: DataTypes.TEXT
  },
  derechosDos: {
    type: DataTypes.TEXT
  },
  derechosTres: {
    type: DataTypes.TEXT
  },
  derechosCuatro: {
    type: DataTypes.TEXT
  },
  derechosCinco: {
    type: DataTypes.TEXT
  },
  derechosSeis: {
    type: DataTypes.TEXT
  },
  derechosSiete: {
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
