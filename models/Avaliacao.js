import { Model, DataTypes } from "sequelize";
import sequelize from "./Database.js";

export default class Avaliacao extends Model {
  static associate(models) {
  this.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
}
}

Avaliacao.init({
  nota: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    validate: { min: 1, max: 5 } 
  },
  pedido_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     allowNull: false ,
     autoIncrement: true
    }
  
}, {
  sequelize,
  modelName: 'Avaliacao',
  tableName: 'avaliacoes',
  paranoid: true,
  timestamps: true
});