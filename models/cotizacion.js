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
  costoTotal: {
    type: DataTypes.INTEGER
  },
  requerimientoshardware: {
    type: DataTypes.STRING
  },
  requerimientossoftware: {
    type: DataTypes.STRING
  },
  idservices: {
    type: DataTypes.INTEGER
  },
  idpresolicitud: {
    type: DataTypes.INTEGER
  },
  idcostos: {
    type: DataTypes.INTEGER
  },
  idcostoshardware: {
    type: DataTypes.INTEGER
  },
  idUser: {
    type: DataTypes.INTEGER
  }
})
