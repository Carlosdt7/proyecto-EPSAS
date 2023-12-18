import db from "../utils/db.js";
import { DataTypes } from 'sequelize';
const Administrador = db.define("Administrador", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  } 
});
export default Administrador;