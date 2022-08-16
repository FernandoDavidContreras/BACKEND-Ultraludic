import { DataTypes } from 'sequelize'
import { sequelize } from '../src/database/database'

export const Cotizacion = sequelize.define('Cotizacion', {
  idCotizaciones: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.DATEONLY
  },
  costoTotal: {
    type: DataTypes.INTEGER
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
  idUser: {
    type: DataTypes.INTEGER
  },
  idhardware: {
    type: DataTypes.INTEGER
  },
  idsoftware: {
    type: DataTypes.INTEGER
  }
})
