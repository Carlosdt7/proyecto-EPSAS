// category.model.mjs
import { Model, DataTypes } from 'sequelize';
import sequelize from "../utils/db.js";
export default class Rol extends Model {
  static associate(models) {
    
  }
}

Rol.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Rol',
  }
);
